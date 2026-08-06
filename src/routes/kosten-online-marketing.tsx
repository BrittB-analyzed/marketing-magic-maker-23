import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["kosten-online-marketing"]!;

export const Route = createFileRoute("/kosten-online-marketing")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
