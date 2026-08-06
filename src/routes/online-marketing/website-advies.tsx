import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/website-advies")({
  head: () => ({
    meta: [
      { title: "Website advies | B. Analyzed" },
      { name: "description", content: "Onafhankelijk website advies: wat werkt op je huidige site, wat kost je klanten en of een nieuwe website wel de juiste investering is." },
      { property: "og:title", content: "Website advies" },
      { property: "og:description", content: "Onafhankelijk website advies: wat werkt op je huidige site, wat kost je klanten en of een nieuwe website wel de juiste investering is." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Website advies: wat moet er écht gebeuren met je site?"
      intro="Voordat je duizenden euro's in een nieuwe website steekt: laat eerst nuchter bekijken wat je huidige site wel en niet doet."
      points={["Analyse van je huidige site op techniek, snelheid, content en conversie", "Advies of doorontwikkelen slimmer is dan opnieuw bouwen", "Redirectplan en behoud van bestaande posities bij een nieuwe site", "Prioriteitenlijst met verwacht effect en benodigde inspanning", "Meedenken bij offertes van webbouwers, zodat je niet voor verrassingen komt te staan"]}
      pillar="CRO"
      pillarTo="/online-marketing/conversie-optimalisatie"
      pillarNote="De meeste websites hebben geen nieuw ontwerp nodig, maar betere structuur en scherpere keuzes."
    />
  ),
});
