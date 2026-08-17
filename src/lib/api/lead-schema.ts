import { z } from "zod";

export const leadSchema = z.object({
  website: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(200),
  name: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(60).optional().default(""),
  focus: z.string().trim().max(60).optional().default(""),
  stage: z.enum(["partial", "complete"]).default("partial"),
  source: z.string().trim().max(120).optional().default(""),
  honeypot: z.string().max(200).optional().default(""),
});
