import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { RelatedLinks } from "@/components/site/page-bits";
import { KENNISBANK_SEO_LINKS, SEO_ROL_LINKS } from "@/data/interne-links";

const data = LANDINGS["seo-expert"]!;

export const Route = createFileRoute("/seo-expert")({
  head: () => landingHead(data, "/seo-expert/"),
  component: () => <LandingPage data={data} extra={(
    <>
      <RelatedLinks className="bg-white" title="Zoek je een expert, een bureau of alleen advies?" items={SEO_ROL_LINKS} />
      <RelatedLinks title="Begrippen uit de kennisbank" items={KENNISBANK_SEO_LINKS} />
    </>
  )} />,
});
