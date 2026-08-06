import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-nijmegen"]!;

export const Route = createFileRoute("/seo-nijmegen")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
