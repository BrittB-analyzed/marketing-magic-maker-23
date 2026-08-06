import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["online-marketing-bureau-nederland"]!;

export const Route = createFileRoute("/online-marketing-bureau-nederland")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
