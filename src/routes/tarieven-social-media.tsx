import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["tarieven-social-media"]!;

export const Route = createFileRoute("/tarieven-social-media")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
