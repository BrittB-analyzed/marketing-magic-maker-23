import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["klantwaarderingen"]!;

export const Route = createFileRoute("/klantwaarderingen")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
