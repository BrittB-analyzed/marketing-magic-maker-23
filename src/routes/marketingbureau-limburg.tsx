import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["marketingbureau-limburg"]!;

export const Route = createFileRoute("/marketingbureau-limburg")({
  head: () => landingHead(data, "/marketingbureau-limburg/"),
  component: () => <LandingPage data={data} extra={<RelatedLinks className="bg-white" title="Onze SEO-pagina's per plaats" items={REGIO_LINKS} />} />,
});
