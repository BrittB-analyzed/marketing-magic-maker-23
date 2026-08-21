import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 naar /online-marketing/local-seo/. Zie src/lib/redirects.ts voor de motivatie. */
export const Route = createFileRoute("/top-20-gratis-online-bedrijvengidsen-van-nederland-2")({
  beforeLoad: () => {
    throw redirect({ to: "/online-marketing/local-seo/", statusCode: 301 });
  },
});
