import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Wat kost Google Ads uitbesteden?",
    a: "Een audit van je huidige account start vanaf € 599,-. Doorlopend beheer, inclusief SEO en GEO, combineren we vanaf € 999,- per maand. Je advertentiebudget betaal je rechtstreeks aan Google, in je eigen account — nooit aan ons.",
  },
  {
    q: "Werkt Google Ads voor elke branche?",
    a: "Google Ads is interessant voor iedereen die op zoek is naar klanten met een duidelijke zoekintentie, niet alleen voor webshops. Met de juiste zoekwoorden filteren we die intentie eruit, of je nu dienstverlener, webshop of B2B-bedrijf bent.",
  },
  {
    q: "Hoe snel zie ik resultaat met Ads?",
    a: "Ads is het snelste kanaal van onze pijlers: waar SEO en GEO maanden opbouwen, zie je bij een goed ingerichte campagne vaak al binnen enkele weken de eerste aanvragen binnenkomen.",
  },
  {
    q: "Wie is eigenaar van het advertentieaccount?",
    a: "Jij. We werken altijd in jouw eigen Google Ads-account, koppelen dit aan Analytics en Google Shopping waar nodig, en je blijft eigenaar — ook als de samenwerking ooit stopt.",
  },
  {
    q: "Kan ik ook met een klein budget adverteren?",
    a: "Ja. Je bepaalt zelf je dagbudget, dus je geeft nooit meer uit dan je wilt. We helpen zowel kleine als grote adverteerders, van ZZP'er tot multinational, om met slimme campagne-instellingen het maximale uit elk budget te halen.",
  },
  {
    q: "Hoe gaan jullie te werk bij het opzetten van campagnes?",
    a: "Na een intakegesprek maken we een SEA-analyse van je huidige situatie, branche en concurrentie. Daarna stellen we een actieplan op, bouwen we de campagnes en landingspagina's op, en gaan we pas live na jouw akkoord. Vanaf dat moment optimaliseren we wekelijks door tot je meetbaar resultaat boekt.",
  },
];

export const Route = createFileRoute("/online-marketing/google-ads-uitbesteden")({
  head: () => ({
    meta: [
      { title: "Google Ads uitbesteden aan een Google Premium Partner | B. Analyzed" },
      {
        name: "description",
        content:
          "Google Ads (SEA) uitbesteden aan gecertificeerde specialisten: Search, Shopping en Display-campagnes op koopintentie. Audit vanaf € 599,-, doorlopend vanaf € 999,- p/m.",
      },
      { property: "og:title", content: "Google Ads uitbesteden aan een Google Premium Partner" },
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
        intro="Ads is het snelste kanaal dat je hebt. Als Google Premium Partner zetten wij campagnes op die aanvragen opleveren in plaats van klikken, en houden ze wekelijks scherp op wat het per lead kost — tot je meetbaar resultaat ziet."
        forWho={[
          { title: "Je hebt nú omzet nodig", body: "SEO en GEO bouwen op, maar je agenda moet volgende maand vol." },
          { title: "Je budget verdwijnt", body: "Je adverteert wel via Google Ads, maar niemand kan uitleggen wat het echt oplevert." },
          { title: "Je wilt zekerheid", body: "Je wilt weten op welke zoektermen mensen daadwerkelijk kopen, voordat je verder investeert." },
        ]}
        deliverables={[
          "Inrichting of herstructurering van je Google Ads-account op zoekintentie",
          "Campagnes in Google Search, Shopping en Display, met scherpe uitsluitingen op regio en doelgroep",
          "Koppeling met Google Analytics, Google Places en Google Shopping",
          "Correcte conversiemeting: leads en sales, niet losse klikken",
          "Wekelijkse optimalisatie van biedingen, zoekwoorden en budgetten",
          "Maandelijkse rapportage met kosten per aanvraag en advies over vervolgstappen",
        ]}
        steps={[
          { title: "Intakegesprek", body: "Binnen 24 uur bellen we je terug om je situatie, branche en doelen scherp te krijgen." },
          { title: "SEA-analyse", body: "We onderzoeken je huidige account (indien aanwezig), je markt en de concurrentie op advertentieniveau." },
          { title: "Actieplan & opbouw", body: "We stellen budget, campagnetypes en het gewenste doel per lead vast en bouwen de campagnes en landingspagina's op." },
          { title: "Lanceren & optimaliseren", body: "We gaan pas live na jouw akkoord en optimaliseren daarna wekelijks door tot je meetbaar resultaat boekt." },
        ]}
        connection="Ads levert binnen weken de zoektermdata waar SEO en GEO maanden over doen. Wat in advertenties aantoonbaar converteert, gebruiken we in de organische strategie. CRO maakt vervolgens elke euro advertentiebudget meer waard door meer bezoekers om te zetten in aanvragen."
        price={{ from: "Audit vanaf € 599,- · doorlopend vanaf € 999,- per maand", note: "Exclusief advertentiebudget, dat je rechtstreeks aan Google betaalt. Je adverteert in je eigen account en blijft daar altijd eigenaar van." }}
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
