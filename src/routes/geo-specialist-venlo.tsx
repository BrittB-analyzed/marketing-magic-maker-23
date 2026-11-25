import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["geo-specialist-venlo"]!;

export const Route = createFileRoute("/geo-specialist-venlo")({
  head: () => landingHead(data, "/geo-specialist-venlo/"),
  component: () => <LandingPage data={data} />,
});
