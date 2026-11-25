import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { LINKBUILDING_REGIO_LINKS, REGIO_LINKS } from "@/data/interne-links";

const data = LANDINGS["seo-limburg"]!;

/** Alleen Limburgse pagina's in het plaatsenblok, en geen link naar deze pagina zelf. */
const NIET_LIMBURG = new Set(["/seo-limburg/", "/seo-nijmegen/", "/seo-eindhoven/", "/seo-rotterdam/", "/seo-ibiza/"]);
const LIMBURG_LINKS = REGIO_LINKS.filter((l) => !NIET_LIMBURG.has(l.to));

export const Route = createFileRoute("/seo-limburg")({
  head: () => landingHead(data, "/seo-limburg/"),
  component: () => <LandingPage data={data} extra={(
    <>
      <RelatedLinks className="bg-white" title="SEO en GEO per plaats in Limburg" items={LIMBURG_LINKS} />
      <RelatedLinks title="Linkbuilding in jouw regio" items={LINKBUILDING_REGIO_LINKS} />
    </>
  )} />,
});
