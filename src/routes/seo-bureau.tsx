import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { SEO_ROL_LINKS } from "@/data/interne-links";

const data = LANDINGS["seo-bureau"]!;

export const Route = createFileRoute("/seo-bureau")({
  head: () => landingHead(data),
  component: () => <LandingPage data={data} extra={<RelatedLinks className="bg-white" title="Andere ingangen tot hetzelfde werk" items={SEO_ROL_LINKS} />} />,
});
