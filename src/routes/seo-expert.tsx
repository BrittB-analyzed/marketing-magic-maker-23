import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-expert"]!;

export const Route = createFileRoute("/seo-expert")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
