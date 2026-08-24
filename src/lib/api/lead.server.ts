import { sendMailViaSmtp, type SmtpConfig } from "@/lib/api/smtp";

export type LeadInput = {
  website: string;
  email: string;
  name?: string;
  phone?: string;
  focus?: string;
  stage?: "partial" | "complete";
  source?: string;
  honeypot?: string;
};

const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export type LeadResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "Verzenden mislukt. Probeer het later opnieuw.";

const env = (key: string) => process.env[key]?.trim() || "";

function leadRows(data: LeadInput): Array<[string, string]> {
  return (
    [
      ["Website", data.website],
      ["E-mail", data.email],
      ["Naam", data.name ?? ""],
      ["Telefoon", data.phone ?? ""],
      ["Focus", data.focus ?? ""],
      ["Formulier", data.source ?? ""],
      ["Status", data.stage === "complete" ? "Volledig ingevuld" : "Stap 1 (nog niet afgerond)"],
    ] as Array<[string, string]>
  ).filter((row) => Boolean(row[1]));
}

function leadHtml(rows: Array<[string, string]>): string {
  return `<h2>Nieuwe scanaanvraag via b-analyzed.com</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="border:1px solid #e5e5e5"><strong>${esc(k)}</strong></td><td style="border:1px solid #e5e5e5">${esc(v)}</td></tr>`,
    )
    .join("")}</table>`;
}

/** SMTP-instellingen uit de omgeving; ontbreekt de host of het wachtwoord, dan is SMTP uit. */
function smtpConfig(): SmtpConfig | null {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  if (!host || !user || !pass) return null;

  const port = Number(env("SMTP_PORT") || 465);
  return {
    host,
    port,
    user,
    pass,
    // 465 is implicit TLS, 587 begint onversleuteld en schakelt over met STARTTLS.
    secure: env("SMTP_SECURE") ? env("SMTP_SECURE") !== "false" : port !== 587,
  };
}

/** Verstuurt de leadmelding naar de eigen mailbox: bij voorkeur via SMTP, anders via Resend. */
export async function sendLeadEmail(data: LeadInput): Promise<LeadResult> {
  if (data.honeypot) return { ok: true };

  const rows = leadRows(data);
  const html = leadHtml(rows);
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const subject = `Nieuwe SEO & GEO-scan aanvraag — ${data.website}`;
  const to = env("LEAD_TO_EMAIL") || "info@b-analyzed.com";

  const smtp = smtpConfig();
  if (smtp) {
    try {
      await sendMailViaSmtp(smtp, {
        // Afzender moet de geauthenticeerde mailbox zijn, anders weigert Hostinger de mail.
        from: env("LEAD_FROM_EMAIL") || smtp.user,
        fromName: env("LEAD_FROM_NAME") || "B. Analyzed website",
        to,
        replyTo: data.email,
        subject,
        html,
        text,
      });
      return { ok: true };
    } catch (error) {
      console.error("Lead mail via SMTP mislukt:", error);
      // Geen return: hieronder wordt Resend als achtervang geprobeerd.
    }
  }

  const lovableKey = env("LOVABLE_API_KEY");
  const resendKey = env("RESEND_API_KEY");
  if (!lovableKey || !resendKey) {
    if (smtp) return { ok: false, error: GENERIC_ERROR };
    console.error("Lead mail niet geconfigureerd: stel SMTP_HOST, SMTP_USER en SMTP_PASS in");
    return { ok: false, error: "E-mailkoppeling is niet geconfigureerd." };
  }

  const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": resendKey,
    },
    body: JSON.stringify({
      from: env("LEAD_FROM_EMAIL") || "B. Analyzed <info@b-analyzed.com>",
      to: [to],
      reply_to: data.email,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    return { ok: false, error: GENERIC_ERROR };
  }

  return { ok: true };
}
