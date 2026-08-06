import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-maastricht"]!;

export const Route = createFileRoute("/seo-maastricht")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
