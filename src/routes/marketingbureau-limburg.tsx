import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["marketingbureau-limburg"]!;

export const Route = createFileRoute("/marketingbureau-limburg")({
  head: () => landingHead(data, "/marketingbureau-limburg/"),
  component: () => <LandingPage data={data} />,
});
