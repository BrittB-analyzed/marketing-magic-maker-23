import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["seo-blerick"]!;

export const Route = createFileRoute("/seo-blerick")({
  head: () => landingHead(data, "/seo-blerick/"),
  component: () => (
    <LandingPage
      data={data}
      extra={<RelatedLinks className="bg-white" title="SEO per plaats in de regio" items={REGIO_LINKS} />}
    />
  ),
});
