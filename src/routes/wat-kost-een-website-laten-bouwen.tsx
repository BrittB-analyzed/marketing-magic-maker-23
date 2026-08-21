import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 naar /online-marketing/website-advies/. Zie src/lib/redirects.ts voor de motivatie. */
export const Route = createFileRoute("/wat-kost-een-website-laten-bouwen")({
  beforeLoad: () => {
    throw redirect({ to: "/online-marketing/website-advies/", statusCode: 301 });
  },
});
