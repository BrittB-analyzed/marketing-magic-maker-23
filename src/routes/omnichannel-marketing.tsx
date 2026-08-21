import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 naar /online-marketing-strategie/. Zie src/lib/redirects.ts voor de motivatie. */
export const Route = createFileRoute("/omnichannel-marketing")({
  beforeLoad: () => {
    throw redirect({ to: "/online-marketing-strategie/", statusCode: 301 });
  },
});
