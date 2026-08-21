import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, RelatedLinks, Section } from "@/components/site/page-bits";
import { DIENST_LINKS, OVERIGE_LINKS } from "@/data/interne-links";
import { LogoStrip } from "@/components/site/logo-strip";
import { ReviewsSection } from "@/components/site/reviews";
import { FounderCard } from "@/components/site/founder-card";
import { REVIEWS } from "@/content/reviews";

const data = LANDINGS["klantwaarderingen"]!;

export const Route = createFileRoute("/klantwaarderingen")({
  head: () => landingHead(data),
  component: KlantwaarderingenPage,
});

function KlantwaarderingenPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Klantwaarderingen"
        title={`${REVIEWS.length} opdrachtgevers aan het woord`}
        intro="Van MKB tot e-commerce: hieronder lees je het complete overzicht van de waarderingen die we van onze opdrachtgevers ontvingen. Gemiddeld beoordeeld met een 9,8."
      />
      <Section className="bg-brand-canvas">
        <FounderCard />
      </Section>
      <LogoStrip />
      <ReviewsSection initial={12} title="Alle klantwaarderingen" intro="Klanttevredenheid staat bij ons voorop. Gaan we voor resultaat en betekent dat een stapje extra? Dan doen we dat graag." />
      <RelatedLinks className="bg-white" title="Verder op de site" items={OVERIGE_LINKS} />
      <RelatedLinks title="Onze diensten" items={DIENST_LINKS} />
      <CtaBand />
    </SiteLayout>
  );
}
