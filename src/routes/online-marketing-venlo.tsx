import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["online-marketing-venlo"]!;

export const Route = createFileRoute("/online-marketing-venlo")({
  head: () => landingHead(data, "/online-marketing-venlo/"),
  component: () => <LandingPage data={data} extra={<RelatedLinks className="bg-white" title="Online marketing en SEO per plaats" items={REGIO_LINKS} />} />,
});
