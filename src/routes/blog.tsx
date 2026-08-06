import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog over SEO, GEO, Ads en CRO | B. Analyzed" },
      {
        name: "description",
        content:
          "Artikelen over vindbaarheid in Google en AI: SEO, GEO, Google Ads en conversie-optimalisatie, uitgelegd voor MKB-ondernemers.",
      },
      { property: "og:title", content: "Blog over SEO, GEO, Ads en CRO" },
      { property: "og:description", content: "Praktische artikelen over vindbaarheid in Google en in AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Artikelen over vindbaarheid in Google en in AI"
        intro="Praktische stukken over SEO, GEO, Ads en CRO. Geschreven voor ondernemers, niet voor collega-marketeers."
      />
      <Section>
        <SectionHeading title="Artikelen worden gemigreerd" intro="De bestaande artikelen van b-analyzed.com worden in de volgende stap overgezet naar dit nieuwe platform, inclusief inhoudsopgave, leestijd en gerelateerde artikelen." />
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}