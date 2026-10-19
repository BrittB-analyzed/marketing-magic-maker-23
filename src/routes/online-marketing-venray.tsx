import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["online-marketing-venray"]!;

export const Route = createFileRoute("/online-marketing-venray")({
  head: () => landingHead(data, "/online-marketing-venray/"),
  component: () => (
    <LandingPage
      data={data}
      extra={<RelatedLinks className="bg-white" title="SEO per plaats in de regio" items={REGIO_LINKS} />}
    />
  ),
});
