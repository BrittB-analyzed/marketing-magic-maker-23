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

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export type LeadResult = { ok: true } | { ok: false; error: string };

/** Sends the lead notification to info@b-analyzed.com through the Resend connector gateway. */
export async function sendLeadEmail(data: LeadInput): Promise<LeadResult> {
  if (data.honeypot) return { ok: true };

  const lovableKey = process.env["LOVABLE_API_KEY"];
  const resendKey = process.env["RESEND_API_KEY"];
  if (!lovableKey || !resendKey) {
    console.error("Lead mail not configured: missing LOVABLE_API_KEY or RESEND_API_KEY");
    return { ok: false, error: "E-mailkoppeling is niet geconfigureerd." };
  }

  const rows: Array<[string, string]> = (
    [
      ["Website", data.website],
      ["E-mail", data.email],
      ["Naam", data.name ?? ""],
      ["Telefoon", data.phone ?? ""],
      ["Focus", data.focus ?? ""],
      ["Formulier", data.source ?? ""],
      ["Status", data.stage === "complete" ? "Volledig ingevuld" : "Stap 1 (nog niet afgerond)"],
    ] as Array<[string, string]>
  ).filter((r) => Boolean(r[1]));

  const html = `<h2>Nieuwe scanaanvraag via b-analyzed.com</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="border:1px solid #e5e5e5"><strong>${esc(k)}</strong></td><td style="border:1px solid #e5e5e5">${esc(v)}</td></tr>`,
    )
    .join("")}</table>`;

  const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": resendKey,
    },
    body: JSON.stringify({
      from: // Must be a domain verified in Resend; b-analyzed.com is not verified there yet.
      process.env["LEAD_FROM_EMAIL"] ?? "B. Analyzed <noreply@expose-your-brand.com>",
      to: ["info@b-analyzed.com"],
      reply_to: data.email,
      subject: `Nieuwe SEO & GEO-scan aanvraag — ${data.website}`,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    return { ok: false, error: "Verzenden mislukt. Probeer het later opnieuw." };
  }

  return { ok: true };
}
