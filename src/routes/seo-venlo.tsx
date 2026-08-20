import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-venlo"]!;

export const Route = createFileRoute("/seo-venlo")({
  head: () => landingHead(data, "/seo-venlo/"),
  component: () => <LandingPage data={data} />,
});
