import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 naar /online-marketing/geo-optimalisatie/. Zie src/lib/redirects.ts voor de motivatie. */
export const Route = createFileRoute("/top-10-zoekmachines-in-nederland-welke-zoekmachines-hebben-het-grootste-marktaandeel")({
  beforeLoad: () => {
    throw redirect({ to: "/online-marketing/geo-optimalisatie/", statusCode: 301 });
  },
});
