import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Wat kost Google Ads uitbesteden?",
    a: "Een audit van je huidige account start vanaf € 599,-. Doorlopend beheer, inclusief SEO en GEO, combineren we vanaf € 999,- per maand. Je advertentiebudget betaal je rechtstreeks aan Google, in je eigen account — nooit aan ons. Ads uitbesteden bij een Google Ads bureau hoeft dus niet duur te zijn, maar wel transparant.",
  },
  {
    q: "Wanneer is het slim om een ads expert in te huren?",
    a: "Een ads expert inhuren is slim als je campagnes draaien maar je niet weet wat ze opleveren, of als je snel schaalbare resultaat wilt zonder zelf in het Google Ads-dashboard te verdwalen. Wij nemen het opzetten, monitoren en optimaliseren volledig uit handen.",
  },
  {
    q: "Werkt Google Ads voor elke branche?",
    a: "Google Ads is interessant voor iedereen die op zoek is naar klanten met een duidelijke zoekintentie, niet alleen voor webshops. Met de juiste zoekwoorden filteren we die intentie eruit, of je nu dienstverlener, webshop of B2B-bedrijf bent. Als Google Ads bureau kijken we altijd eerst of de kosten per conversie haalbaar zijn.",
  },
  {
    q: "Hoe snel zie ik resultaat met Ads?",
    a: "Ads is het snelste kanaal van onze pijlers: waar SEO en GEO maanden opbouwen, zie je bij een goed ingerichte campagne vaak al binnen enkele weken de eerste aanvragen binnenkomen. Juist daarom kiezen bedrijven ervoor om ads uitbesteden aan een specialist.",
  },
  {
    q: "Wie is eigenaar van het advertentieaccount?",
    a: "Jij. We werken altijd in jouw eigen Google Ads-account, koppelen dit aan Analytics en Google Places en Google Shopping waar nodig, en je blijft eigenaar — ook als de samenwerking ooit stopt. Zo blijf je onafhankelijk van welk Google Ads bureau je ook kiest.",
  },
  {
    q: "Kan ik ook met een klein budget adverteren?",
    a: "Ja. Je bepaalt zelf je dagbudget, dus je geeft nooit meer uit dan je wilt. We helpen zowel kleine als grote adverteerders, van ZZP'er tot multinational, om met slimme campagne-instellingen het maximale uit elk budget te halen. Zelfs met een beperkt budget loont het om een ads expert in te huren.",
  },
];

export const Route = createFileRoute("/online-marketing/google-ads-uitbesteden")({
  head: () => ({
    meta: [
      { title: "Google Ads uitbesteden | Ads expert inhuren | Google Ads bureau | B. Analyzed" },
      {
        name: "description",
        content:
          "Wil je ads uitbesteden? Als Google Ads bureau en Google Premium Partner helpen wij je campagnes converteren. Ads expert inhuren vanaf € 999,- p/m. Jouw eigen account, volledige transparantie.",
      },
      { property: "og:title", content: "Google Ads uitbesteden | Ads expert inhuren | Google Ads bureau" },
      {
        property: "og:description",
        content: "Wil je ads uitbesteden? Wij zijn een Google Ads bureau dat campagnes laat converteren. Ads expert inhuren met meetbare resultaten.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayout>
      <ServicePage
        eyebrow="Google Ads bureau"
        title="Google Ads uitbesteden: een ads expert inhuren die campagnes laat converteren"
        intro="Ads uitbesteden betekent bij ons: geen klikken kopen, maar aanvragen genereren. Als Google Premium Partner en Google Ads bureau bouwen en beheren wij Search-, Shopping- en Display-campagnes op scherpe koopintentie. Een ads expert inhuren bij B. Analyzed betekent wekelijkse optimalisatie, heldere rapportages en campagnes die je investering terugverdienen."
        forWho={[
          { title: "Je hebt nú omzet nodig", body: "SEO en GEO bouwen op, maar je agenda moet volgende maand vol. Ads uitbesteden kan voor direct resultaat zorgen." },
          { title: "Je budget verdwijnt", body: "Je adverteert wel via Google Ads, maar niemand kan uitleggen wat het echt oplevert. De juiste tracking is van essentieel belang. Tijd om een ads expert in te huren." },
          { title: "Je wilt zekerheid", body: "Je wilt weten op welke zoektermen mensen daadwerkelijk kopen, voordat je verder investeert in een Google Ads bureau." },
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
