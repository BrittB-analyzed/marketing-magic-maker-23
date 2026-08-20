import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["seo-eindhoven"]!;

export const Route = createFileRoute("/seo-eindhoven")({
  head: () => landingHead(data, "/seo-eindhoven/"),
  component: () => <LandingPage data={data} />,
});
