import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  website: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(200),
  name: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(60).optional().default(""),
  focus: z.string().trim().max(60).optional().default(""),
  stage: z.enum(["partial", "complete"]).default("partial"),
  source: z.string().trim().max(120).optional().default(""),
  honeypot: z.string().max(200).optional().default(""),
});

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    if (data.honeypot) return { ok: true as const };

    const lovableKey = process.env["LOVABLE_API_KEY"];
    const resendKey = process.env["RESEND_API_KEY"];
    if (!lovableKey || !resendKey) {
      console.error("Lead mail not configured: missing API keys");
      return { ok: false as const, error: "E-mailkoppeling is niet geconfigureerd." };
    }

    const rows: Array<[string, string]> = [
      ["Website", data.website],
      ["E-mail", data.email],
      ["Naam", data.name],
      ["Telefoon", data.phone],
      ["Focus", data.focus],
      ["Formulier", data.source],
      ["Status", data.stage === "complete" ? "Volledig ingevuld" : "Stap 1 (nog niet afgerond)"],
    ].filter((r): r is [string, string] => Boolean(r[1]));

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
        from: process.env["LEAD_FROM_EMAIL"] ?? "B. Analyzed <onboarding@resend.dev>",
        to: ["info@b-analyzed.com"],
        reply_to: data.email,
        subject: `Nieuwe SEO & GEO-scan aanvraag — ${data.website}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend request failed [${response.status}]: ${body}`);
      return { ok: false as const, error: "Verzenden mislukt. Probeer het later opnieuw." };
    }

    return { ok: true as const };
  });
