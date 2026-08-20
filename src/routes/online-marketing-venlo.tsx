import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";

const data = LANDINGS["online-marketing-venlo"]!;

export const Route = createFileRoute("/online-marketing-venlo")({
  head: () => landingHead(data, "/online-marketing-venlo/"),
  component: () => <LandingPage data={data} />,
});
