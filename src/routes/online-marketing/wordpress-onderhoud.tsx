import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { RelatedLinks, faqJsonLd } from "@/components/site/page-bits";
import { KENNISBANK_CMS_LINKS } from "@/data/interne-links";

const FAQ = [
  { q: "Wat houdt jullie WordPress-onderhoud in?", a: "Afhankelijk van het pakket verzorgen we periodieke backups, updates van WordPress, plugins en thema's, klantenservice bij problemen, database-opschoning, malwarecontrole en spamverwijdering. Alles gericht op een veilige, snelle en up-to-date website." },
  { q: "Hoe vaak maken jullie een back-up?", a: "In het Starterspakket maken we maandelijks een back-up. Vanaf het Basispakket maken we dagelijks een back-up, zodat je bij problemen snel kunt terugzetten naar een werkende versie." },
  { q: "Werken jullie met vaste onderhoudscontracten?", a: "Je neemt een onderhoudsabonnement af tegen een klein, vast maandelijks bedrag, jaarlijks gefactureerd. We werken met duidelijke afspraken en heldere pakketten, zodat je precies weet wat je krijgt." },
  { q: "Wat is het verschil tussen de pakketten?", a: "Het Starterspakket biedt basisonderhoud per maand. Het Basispakket voegt wekelijks onderhoud, dagelijkse backups en gratis premium plugins toe. Het Extra-pakket voegt kwartaal-database-opschoning toe, en het Premium-pakket voegt spamverwijdering, malwarecontrole en reguliere database-opschoning toe voor maximale veiligheid en snelheid." },
  { q: "Waarom is snelheid van mijn WordPress-site belangrijk?", a: "Een snelle website verbetert de gebruikservaring én je posities in Google. Wij verhogen de snelheid van je website als onderdeel van het onderhoud, zodat je technische fundering je SEO-inspanningen ondersteunt in plaats van tegenwerkt." },
];

export const Route = createFileRoute("/online-marketing/wordpress-onderhoud")({
  head: () => ({
    meta: [
      { title: "WordPress onderhoud: snel, veilig en vindbaar | B. Analyzed" },
      { name: "description", content: "WordPress onderhoud voor MKB-websites: dagelijkse back-ups, updates, malwarecontrole en snelheidsoptimalisatie zodat je SEO-fundering intact blijft." },
      { property: "og:title", content: "WordPress onderhoud: snel, veilig en vindbaar" },
      { property: "og:description", content: "Updates, back-ups en snelheid, zodat je vindbaarheid geen schade oploopt." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="WordPress onderhoud dat je vindbaarheid beschermt"
      intro="Een trage of gehackte site kost direct posities en aanvragen. Wij werken met duidelijke afspraken, helderheid en transparantie, en houden je WordPress-website voor een klein maandelijks bedrag veilig, stabiel en up-to-date."
      points={[
        "Regelmatige back-ups van je volledige WordPress-site",
        "Updates van WordPress-core, thema's en plugins, met controle achteraf",
        "Snelle klantenservice bij problemen",
        "Snelheidsoptimalisatie voor betere gebruikservaring en Google-posities",
        "Gratis gebruik van premium plugins in de meeste pakketten",
        "Malwarecontrole, spamverwijdering en database-opschoning in de hogere pakketten",
      ]}
      sections={[
        {
          title: "Vier vragen die je jezelf moet stellen",
          body: "Wil je een veilige website, een stabiele en snelle website, een website die altijd up-to-date is, en goede en snelle service als er zich een probleem voordoet? Dan ben je bij ons aan het juiste adres.",
        },
        {
          title: "Van Starter tot Premium",
          body: "Het Starterspakket biedt maandelijks onderhoud met een maandelijkse back-up. Basis en Extra bieden wekelijks onderhoud met dagelijkse back-ups en gratis premium plugins. Het Premium-pakket voegt daar spamverwijdering, malwarecontrole en reguliere database-opschoning aan toe voor maximale bescherming.",
        },
        {
          title: "Backups en klantenservice",
          body: "We maken een dagelijkse back-up van je volledige WordPress-site (afhankelijk van je pakket), zodat je bij een probleem snel kunt terugvallen op een werkende versie. Heb je een vraag of ondervind je een probleem, dan staan we voor je klaar.",
        },
        {
          title: "Snelheid en beveiliging",
          body: "We verhogen de snelheid van je website zodat de gebruikservaring en je posities in Google goed blijven, en we beveiligen je site tegen hackers en aanvallers. Updates van WordPress, thema's en plugins controleren we telkens op een correcte werking van de website.",
        },
      ]}
      extra={
        <RelatedLinks className="bg-white" title="Begrippen uit de kennisbank" items={KENNISBANK_CMS_LINKS} />
      }
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Techniek en snelheid zijn onderdeel van je SEO-fundering. Verwaarloos je dat, dan zakken je posities. Onderhoudsabonnementen zijn er al vanaf een klein maandbedrag; grotere technische trajecten starten vanaf € 599,-."
      faq={FAQ}
    />
  ),
});
