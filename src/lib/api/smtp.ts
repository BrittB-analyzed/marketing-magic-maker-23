import { connect as tlsConnect, type TLSSocket } from "node:tls";
import { connect as netConnect, type Socket } from "node:net";

/**
 * Minimale SMTP-client (AUTH LOGIN) op basis van node:tls.
 * Bewust zonder externe dependency: de mailkoppeling mag de build niet raken.
 * Ondersteunt implicit TLS (poort 465) en STARTTLS (poort 587).
 */

export type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  secure: boolean;
};

export type SmtpMail = {
  from: string;
  fromName?: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

const CRLF = "\r\n";

/** Praat SMTP over één socket: schrijf een commando, wacht op de statusregel. */
class SmtpSession {
  private buffer = "";
  private waiter: { resolve: (v: string) => void; reject: (e: Error) => void } | null = null;

  private socket: Socket | TLSSocket;

  constructor(socket: Socket | TLSSocket) {
    this.socket = socket;
    socket.setEncoding("utf8");
    socket.on("data", (chunk: string) => {
      this.buffer += chunk;
      // Een antwoord is compleet zodra een regel "250 tekst" heeft (spatie, geen streepje).
      const match = /^\d{3} [^\r\n]*\r\n/m.exec(this.buffer);
      if (match && this.waiter) {
        const response = this.buffer;
        this.buffer = "";
        const waiter = this.waiter;
        this.waiter = null;
        waiter.resolve(response);
      }
    });
    socket.on("error", (err: Error) => this.fail(err));
    socket.on("close", () => this.fail(new Error("SMTP-verbinding werd gesloten")));
  }

  private fail(err: Error) {
    const waiter = this.waiter;
    this.waiter = null;
    waiter?.reject(err);
  }

  read(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.waiter = { resolve, reject };
    });
  }

  /** Stuurt een commando en controleert of het antwoord met de verwachte code begint. */
  async command(line: string | null, expected: number): Promise<string> {
    if (line !== null) this.socket.write(line + CRLF);
    const response = await this.read();
    const code = Number(response.slice(0, 3));
    if (code !== expected) {
      throw new Error(`SMTP ${line?.split(" ")[0] ?? "greeting"} gaf ${response.trim()}`);
    }
    return response;
  }

  get raw() {
    return this.socket;
  }
}

const b64 = (value: string) => Buffer.from(value, "utf8").toString("base64");

/** Voorkomt header-injectie via ingevulde formuliervelden. */
const headerSafe = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

/** RFC 2047 zodat een onderwerp met accenten of een euroteken goed aankomt. */
const encodeHeader = (value: string) =>
  /^[\x20-\x7E]*$/.test(value) ? value : `=?UTF-8?B?${b64(value)}?=`;

/** Splitst base64 in regels van 76 tekens, zoals de RFC voorschrijft. */
const wrap76 = (value: string) => value.match(/.{1,76}/g)?.join(CRLF) ?? "";

function buildMessage(mail: SmtpMail, boundary: string): string {
  const from = mail.fromName
    ? `${encodeHeader(headerSafe(mail.fromName))} <${headerSafe(mail.from)}>`
    : headerSafe(mail.from);

  const headers = [
    `From: ${from}`,
    `To: ${headerSafe(mail.to)}`,
    ...(mail.replyTo ? [`Reply-To: ${headerSafe(mail.replyTo)}`] : []),
    `Subject: ${encodeHeader(headerSafe(mail.subject))}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ];

  const body = [
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    wrap76(b64(mail.text)),
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    wrap76(b64(mail.html)),
    `--${boundary}--`,
  ];

  return headers.join(CRLF) + CRLF + CRLF + body.join(CRLF) + CRLF;
}

function openSocket(config: SmtpConfig): Promise<Socket | TLSSocket> {
  return new Promise((resolve, reject) => {
    const socket = config.secure
      ? tlsConnect({ host: config.host, port: config.port, servername: config.host }, () =>
          resolve(socket),
        )
      : netConnect({ host: config.host, port: config.port }, () => resolve(socket));
    socket.setTimeout(20000, () => socket.destroy(new Error("SMTP-timeout")));
    socket.once("error", reject);
  });
}

function upgradeToTls(socket: Socket, host: string): Promise<TLSSocket> {
  return new Promise((resolve, reject) => {
    const secure = tlsConnect({ socket, servername: host }, () => resolve(secure));
    secure.once("error", reject);
  });
}

export async function sendMailViaSmtp(config: SmtpConfig, mail: SmtpMail): Promise<void> {
  const socket = await openSocket(config);
  let session = new SmtpSession(socket);
  const helo = "EHLO b-analyzed.com";

  try {
    await session.command(null, 220);
    await session.command(helo, 250);

    if (!config.secure) {
      await session.command("STARTTLS", 220);
      const secure = await upgradeToTls(socket as Socket, config.host);
      session = new SmtpSession(secure);
      await session.command(helo, 250);
    }

    await session.command("AUTH LOGIN", 334);
    await session.command(b64(config.user), 334);
    await session.command(b64(config.pass), 235);

    await session.command(`MAIL FROM:<${headerSafe(mail.from)}>`, 250);
    await session.command(`RCPT TO:<${headerSafe(mail.to)}>`, 250);
    await session.command("DATA", 354);

    // Base64-body, dus geen enkele regel begint met een punt: dot-stuffing is niet nodig.
    const boundary = `----banalyzed${b64(mail.subject).slice(0, 16).replace(/\W/g, "")}`;
    session.raw.write(buildMessage(mail, boundary) + "." + CRLF);
    await session.command(null, 250);

    try {
      await session.command("QUIT", 221);
    } catch {
      // Sommige servers hangen direct op na QUIT; de mail is dan al geaccepteerd.
    }
  } finally {
    session.raw.destroy();
  }
}
