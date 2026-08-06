import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-roermond"]!;

export const Route = createFileRoute("/seo-roermond")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
