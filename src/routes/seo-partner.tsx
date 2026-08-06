import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-partner"]!;

export const Route = createFileRoute("/seo-partner")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
