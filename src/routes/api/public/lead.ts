import { createFileRoute } from "@tanstack/react-router";
import { leadSchema } from "@/lib/api/lead-schema";
import { sendLeadEmail } from "@/lib/api/lead.server";

// Public, CORS-enabled lead endpoint so the statically hosted site
// (Hostinger) can submit forms to this deployment.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      OPTIONS: () => new Response(null, { status: 204, headers: cors }),
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "Ongeldig verzoek." }), {
            status: 400,
            headers: cors,
          });
        }

        const parsed = leadSchema.safeParse(payload);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ ok: false, error: "Vul een geldige website en e-mailadres in." }),
            { status: 400, headers: cors },
          );
        }

        const result = await sendLeadEmail(parsed.data);
        return new Response(JSON.stringify(result), {
          status: result.ok ? 200 : 502,
          headers: cors,
        });
      },
    },
  },
});
