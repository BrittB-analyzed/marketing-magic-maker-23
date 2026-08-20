import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-limburg"]!;

export const Route = createFileRoute("/seo-limburg")({
  head: () => landingHead(data, "/seo-limburg/"),
  component: () => <LandingPage data={data} />,
});
