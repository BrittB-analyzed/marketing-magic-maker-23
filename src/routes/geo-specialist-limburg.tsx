import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["geo-specialist-limburg"]!;

export const Route = createFileRoute("/geo-specialist-limburg")({
  head: () => landingHead(data, "/geo-specialist-limburg/"),
  component: () => <LandingPage data={data} />,
});
