import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero } from "@/components/site/page-bits";
import { LogoStrip } from "@/components/site/logo-strip";
import { ReviewsSection } from "@/components/site/reviews";
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
      <LogoStrip />
      <ReviewsSection initial={12} title="Alle klantwaarderingen" intro="Klanttevredenheid staat bij ons voorop. Gaan we voor resultaat en betekent dat een stapje extra? Dan doen we dat graag." />
      <CtaBand />
    </SiteLayout>
  );
}
