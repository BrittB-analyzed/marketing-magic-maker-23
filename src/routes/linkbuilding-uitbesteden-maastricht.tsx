import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["linkbuilding-uitbesteden-maastricht"]!;

export const Route = createFileRoute("/linkbuilding-uitbesteden-maastricht")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} />,
});
