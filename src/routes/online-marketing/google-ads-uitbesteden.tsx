import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Wat kost Google Ads uitbesteden?",
    a: "Het beheer start bij € 499,- per maand, exclusief je advertentiebudget. Voor kleinere accounts kijken we naar een passende variant.",
  },
  {
    q: "Hoe snel zie ik resultaat met Ads?",
    a: "Meestal binnen twee weken. Ads is het snelste kanaal van de vier pijlers en daarom vaak de brug terwijl SEO en GEO opbouwen.",
  },
  {
    q: "Wie is eigenaar van het advertentieaccount?",
    a: "Jij. We werken altijd in jouw eigen Google Ads-account, ook als de samenwerking stopt.",
  },
];

export const Route = createFileRoute("/online-marketing/google-ads-uitbesteden")({
  head: () => ({
    meta: [
      { title: "Google Ads uitbesteden — verkeer dat vandaag converteert | B. Analyzed" },
      {
        name: "description",
        content:
          "Google Ads uitbesteden voor het MKB: campagnes op koopintentie, wekelijkse optimalisatie en heldere rapportage. Beheer vanaf € 499,- per maand.",
      },
      { property: "og:title", content: "Google Ads uitbesteden — verkeer dat vandaag converteert" },
      {
        property: "og:description",
        content: "Advertenties die aanvragen opleveren in plaats van klikken. Wekelijkse optimalisatie, jouw eigen account.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayout>
      <ServicePage
        eyebrow="Ads"
        title="Google Ads uitbesteden: verkeer kopen dat vandaag converteert"
        intro="Ads is het snelste kanaal dat je hebt. Wij zetten campagnes op die aanvragen opleveren in plaats van klikken, en houden ze wekelijks scherp op wat het per lead kost."
        forWho={[
          { title: "Je hebt nú omzet nodig", body: "SEO bouwt op, maar je agenda moet volgende maand vol." },
          { title: "Je budget verdwijnt", body: "Je adverteert wel, maar niemand kan uitleggen wat het oplevert." },
          { title: "Je wilt data", body: "Je wilt weten op welke zoektermen mensen echt kopen voordat je in SEO investeert." },
        ]}
        deliverables={[
          "Accountstructuur op zoekintentie in plaats van op productnaam",
          "Search- en Performance Max-campagnes met scherpe uitsluitingen",
          "Conversiemeting die klopt: leads, niet klikken",
          "Wekelijkse optimalisatie van biedingen en zoektermen",
          "Landingspagina-advies vanuit CRO",
          "Maandelijkse Loom-video met kosten per aanvraag",
        ]}
        steps={[
          { title: "Onderzoek", body: "Analyse van je huidige account, markt en concurrentie op advertentieniveau." },
          { title: "Strategie", body: "Budgetverdeling, campagnetypes en het doel per lead dat we willen halen." },
          { title: "Uitvoering", body: "Opbouw of herstructurering van je account, inclusief correcte conversiemeting." },
          { title: "Optimalisatie", body: "Wekelijks bijsturen. Wat werkt schalen we op, wat niet werkt zetten we uit." },
        ]}
        connection="Ads levert binnen weken de zoektermdata waar SEO en GEO maanden over doen. Wat in advertenties converteert, weten we zeker en gebruiken we in de organische strategie. CRO maakt vervolgens elke euro advertentiebudget meer waard."
        price={{ from: "Beheer vanaf € 499,- per maand", note: "Exclusief advertentiebudget. Je adverteert in je eigen account en blijft eigenaar." }}
        faq={FAQ}
      />
    </SiteLayout>
  ),
});