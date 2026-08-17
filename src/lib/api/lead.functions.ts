import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "@/lib/api/lead-schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    const { sendLeadEmail } = await import("@/lib/api/lead.server");
    return sendLeadEmail(data);
  });
