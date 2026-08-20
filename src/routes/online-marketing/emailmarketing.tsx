import { seoMeta } from "@/data/seo-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  { q: "Wat is emailmarketing precies?", a: "Emailmarketing is een vorm van direct marketing waarbij e-mail wordt gebruikt om producten of diensten te promoten. Het helpt bij het informeren van klanten over nieuws of aanbiedingen en speelt een rol bij leadgeneratie, merkbekendheid en het opbouwen en behouden van klantrelaties." },
  { q: "Wat is de ROI van emailmarketing?", a: "Volgens cijfers van Litmus ligt de ROI-ratio van emailmarketing op 1:42, voor elke euro die je uitgeeft, krijg je gemiddeld €42,- terug aan verdiensten. Dat maakt het een van de meest winstgevende marketingkanalen." },
  { q: "Wat zijn de belangrijkste voordelen van emailmarketing?", a: "Een e-mail is persoonlijk en kan worden gepersonaliseerd, je beheert zelf je data en mailinglijst, je bereikt exact de mensen die interesse hebben getoond, en de kosten zijn relatief laag ten opzichte van het rendement." },
  { q: "Welke emailmarketing software wordt vaak gebruikt?", a: "Bekende aanbieders zijn Mailchimp, Sendinblue en ConvertKit. De prijzen variëren van gratis tot enkele honderden euro's per maand, afhankelijk van de grootte van je bedrijf en de functionaliteiten die je nodig hebt." },
  { q: "Hoe pakken jullie een emailmarketingstrategie aan?", a: "We verdiepen ons eerst in je doelstellingen, klanten en huidige aanpak, stellen samen een optimalisatieplan op, werken met klantdata en A/B-tests, en automatiseren mails op basis van triggers zodat jij er zelf geen omkijken naar hebt." },
];

export const Route = createFileRoute("/online-marketing/emailmarketing")({
  head: () => ({
    meta: seoMeta('/online-marketing/emailmarketing/', { ogType: 'article', twitterCard: 'summary' }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Emailmarketing: het goedkoopste kanaal met de hoogste ROI"
      intro="Waar social media vluchtig is en zoekmachines pas werken als iemand actief zoekt, bereikt een e-mail altijd de inbox van de ontvanger. Volgens Litmus levert elke euro die je aan emailmarketing besteedt gemiddeld €42,- op."
      points={[
        "Geautomatiseerde opvolging na een scan-, offerte- of downloadaanvraag",
        "Nieuwsbrief met een vast ritme en persoonlijke, relevante content",
        "Segmentatie op interesse en fase in het koopproces",
        "A/B-testing om de effectiviteit van campagnes te verbeteren",
        "Meting tot op omzetniveau: opens, kliks, afmeldingen en conversies",
        "Advies over en implementatie van emailmarketing software",
      ]}
      sections={[
        {
          title: "Waarom emailmarketing werkaat",
          body: "In tegenstelling tot social media (waar berichten gemist worden) of zoekmachines (pas gebruikt bij een concrete zoekvraag) bereikt een e-mail altijd de inbox. Je bent bovendien niet afhankelijk van algoritmewijzigingen die je bereik op social media beperken.",
        },
        {
          title: "Vier grote voordelen",
          body: "Een e-mail is persoonlijk gericht aan de lezer en eenvoudig te personaliseren. Je beheert zelf je mailinglijst en data, en meet exact wie opent, klikt of zich afmeldt. Je bereikt mensen die zelf hebben aangegeven op de hoogte te willen blijven, en de kosten blijven relatief laag ten opzichte van de opbrengst.",
        },
        {
          title: "De juiste software en frequentie",
          body: "Bekende platformen zijn Mailchimp, Sendinblue en ConvertKit, met prijzen van gratis tot enkele honderden euro's per maand. Belangrijk is wel om voorzichtig te zijn met de verzendfrequentie: mensen schrijven zich in voor waardevolle informatie, niet voor sales-spam.",
        },
        {
          title: "Onze werkwijze",
          body: "We verdiepen ons in jouw doelstellingen en klanten, stellen samen een optimalisatieplan op en werken met klantdata en A/B-tests om de effectiviteit te meten. Ook automatiseren we mails op basis van triggers en kijken we naar manieren om je klantenbestand te laten groeien.",
        },
      ]}
      pillar="CRO"
      pillarTo="/online-marketing/conversie-optimalisatie"
      pillarNote="E-mail is verlengde conversie-optimalisatie: je haalt meer uit contacten die je al hebt. Doorlopende begeleiding vanaf € 999,- per maand, een eerste analyse vanaf € 599,-."
      faq={FAQ}
    />
  ),
});
