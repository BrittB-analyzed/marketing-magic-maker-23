import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Wat is conversie-optimalisatie?",
    a: "Conversie-optimalisatie (CRO) is het verhogen van het percentage bezoekers dat een aanvraag doet, belt of bestelt. Je haalt meer uit het verkeer dat je al hebt, zonder extra advertentiebudget.",
  },
  {
    q: "Heb ik genoeg bezoekers voor CRO?",
    a: "Voor betrouwbare A/B-tests heb je volume nodig. Heb je dat nog niet, dan starten we met kwalitatieve analyse: sessieopnames, formulieranalyse en gebruikersfeedback. Dat levert vaak al de grootste winst op.",
  },
  {
    q: "Wat levert CRO op?",
    a: "Elke procentpunt conversiestijging vertaalt zich direct in aanvragen zonder extra verkeer. Bij de meeste MKB-sites zit de grootste winst in het formulier en in de duidelijkheid van de eerste schermvulling.",
  },
];

export const Route = createFileRoute("/online-marketing/conversie-optimalisatie")({
  head: () => ({
    meta: [
      { title: "Conversie-optimalisatie (CRO) voor het MKB | B. Analyzed" },
      {
        name: "description",
        content:
          "Meer aanvragen uit het verkeer dat je al hebt. Conversie-optimalisatie met analyse, A/B-tests en formulieren die wél werken.",
      },
      { property: "og:title", content: "Conversie-optimalisatie (CRO) voor het MKB" },
      {
        property: "og:description",
        content: "Meer aanvragen uit hetzelfde verkeer. Analyse, tests en formulieren die converteren.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayout>
      <ServicePage
        eyebrow="CRO"
        title="Conversie-optimalisatie: meer aanvragen uit hetzelfde verkeer"
        intro="CRO is het rendement op al je andere marketing. We zoeken uit waar bezoekers afhaken, lossen dat op en meten of het werkt. Zonder extra euro advertentiebudget."
        forWho={[
          { title: "Veel bezoek, weinig aanvragen", body: "Je verkeer groeit, maar je telefoon gaat niet vaker." },
          { title: "Je formulier is een drempel", body: "Twaalf velden, een rekensom en een verplichte toelichting. Niemand vult dat in." },
          { title: "Je weet niet waar het misgaat", body: "Je hebt cijfers, maar geen verklaring voor wat je ziet." },
        ]}
        deliverables={[
          "Conversie-audit van je belangrijkste paden",
          "Sessieopnames en heatmaps op de pagina's die ertoe doen",
          "Herontwerp van formulieren naar stapsgewijze varianten",
          "A/B-tests met een vooraf vastgesteld succescriterium",
          "Correcte doelmeting in GA4 en Tag Manager",
          "Maandelijkse rapportage op conversieratio en leadkwaliteit",
        ]}
        steps={[
          { title: "Onderzoek", body: "Data-analyse plus kwalitatief onderzoek: waar haken mensen af en waarom." },
          { title: "Strategie", body: "Hypotheses op volgorde van verwachte impact en benodigde inspanning." },
          { title: "Uitvoering", body: "Aanpassingen live zetten of testen, afhankelijk van je volume." },
          { title: "Optimalisatie", body: "Wat wint, blijft staan. Wat verliest, leert ons iets voor de volgende test." },
        ]}
        connection="CRO maakt SEO, GEO en Ads rendabel. Meer verkeer zonder conversie is een dure hobby; een hogere conversieratio verhoogt het rendement van élk kanaal tegelijk."
        price={{ from: "Vanaf € 750,- per maand", note: "Losse conversie-audit vanaf € 599,-, inclusief prioriteitenlijst die je zelf kunt uitvoeren." }}
        faq={FAQ}
      />
    </SiteLayout>
  ),
});