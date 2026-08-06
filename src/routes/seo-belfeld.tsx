import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-belfeld"]!;

export const Route = createFileRoute("/seo-belfeld")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
