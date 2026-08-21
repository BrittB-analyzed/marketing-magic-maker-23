import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { LINKBUILDING_REGIO_LINKS, REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["seo-limburg"]!;

export const Route = createFileRoute("/seo-limburg")({
  head: () => landingHead(data, "/seo-limburg/"),
  component: () => <LandingPage data={data} extra={(
    <>
      <RelatedLinks className="bg-white" title="SEO per plaats in en om Limburg" items={REGIO_LINKS} />
      <RelatedLinks title="Linkbuilding in jouw regio" items={LINKBUILDING_REGIO_LINKS} />
    </>
  )} />,
});
