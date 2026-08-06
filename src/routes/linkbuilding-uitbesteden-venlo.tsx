import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["linkbuilding-uitbesteden-venlo"]!;

export const Route = createFileRoute("/linkbuilding-uitbesteden-venlo")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
