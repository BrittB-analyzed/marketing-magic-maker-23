import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";

export const Route = createFileRoute("/kennisbank/")({
  head: () => ({
    meta: [
      { title: "Kennisbank: SEO en GEO uitgelegd | B. Analyzed" },
      {
        name: "description",
        content:
          "Kennisbank van B. Analyzed: begrippen en werkwijzen rond SEO, GEO, Ads en CRO in gewone taal uitgelegd voor MKB-ondernemers.",
      },
      { property: "og:title", content: "Kennisbank: SEO en GEO uitgelegd" },
      { property: "og:description", content: "Begrippen en werkwijzen rond vindbaarheid, in gewone taal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Kennisbank,
});

function Kennisbank() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kennisbank"
        title="SEO en GEO uitgelegd, zonder jargon"
        intro="Thematisch geordend per pijler. Begin bij GEO als je wilt weten hoe je genoemd wordt in AI-antwoorden."
      />
      <Section>
        <SectionHeading title="Content wordt gemigreerd" intro="De bestaande kennisbank-artikelen worden overgezet en per pijler geordend, met een eigen hub voor GEO." />
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}