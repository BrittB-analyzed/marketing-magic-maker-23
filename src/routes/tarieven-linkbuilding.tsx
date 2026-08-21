import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { LINKBUILDING_REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["tarieven-linkbuilding"]!;

export const Route = createFileRoute("/tarieven-linkbuilding")({
  head: () => landingHead(data),
  component: () => (
    <LandingPage
      data={data}
      extra={<RelatedLinks className="bg-white" title="Linkbuilding in jouw regio" items={LINKBUILDING_REGIO_LINKS} />}
    />
  ),
});
