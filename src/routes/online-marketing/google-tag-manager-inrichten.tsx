import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  { q: "Wat doet Google Tag Manager precies?", a: "Google Tag Manager zorgt dat de juiste meetcodes op de juiste plek in je website staan, zonder dat je steeds in de broncode hoeft te werken. Zo worden al je online campagnes en het gedrag van bezoekers gemeten vanuit één centraal script." },
  { q: "Waarom bespaart Tag Manager tijd en geld?", a: "Zonder Tag Manager moet iedere aanpassing van een meetcode via een ontwikkelaar in de broncode. Met Tag Manager voeg je zelf tags toe of pas je ze aan voor conversies, site-statistieken en remarketing, zonder de website telkens te hoeven aanpassen." },
  { q: "Kan Tag Manager ook tags van derden verwerken?", a: "Ja. Tag Manager ondersteunt vrijwel alle tags en biedt kant-en-klare templates voor tags van Google en van externe partijen, voor zowel mobiele apps als websites. Je kunt er ook mee beheren wat tags doen nadat bezoekers hun cookietoestemming hebben gegeven." },
  { q: "Is Tag Manager ook geschikt voor samenwerken met een team?", a: "Zeker. Met werkruimtes en gedetailleerd toegangsbeheer werkt je team efficiënt samen, en dankzij testomgevingen kun je wijzigingen eerst controleren voordat je live publiceert. Grotere organisaties met Tag Manager 360 kunnen bovendien per pagina bepalen wie toegang heeft tot welke tags." },
];

export const Route = createFileRoute("/online-marketing/google-tag-manager-inrichten")({
  head: () => ({
    meta: [
      { title: "Google Tag Manager inrichten: meting die klopt | B. Analyzed" },
      { name: "description", content: "Google Tag Manager en GA4 correct inrichten: conversiemeting, consent mode v2 en data waar je beslissingen op kunt baseren. Vanaf € 599,-." },
      { property: "og:title", content: "Google Tag Manager inrichten: meting die klopt" },
      { property: "og:description", content: "Zonder betrouwbare meting is elke marketingbeslissing een gok." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Google Tag Manager en GA4 inrichten"
      intro="Ga je Google Analytics en Google Ads implementeren op je website? Bespaar tijd en geld door Google Tag Manager goed in te richten, zodat de juiste codes op de juiste plek staan en al je campagnes en bezoekersgedrag betrouwbaar worden gemeten."
      points={[
        "Google Tag Manager opgezet of opgeschoond",
        "GA4-conversies die daadwerkelijk aanvragen meten",
        "Consent mode v2 en een correcte cookiebanner",
        "Tags van Google én van derden correct geïmplementeerd",
        "Foutcontrole zodat tags snel en betrouwbaar laden",
        "Toegangsbeheer en werkruimtes voor veilig samenwerken met je team",
      ]}
      sections={[
        {
          title: "Meer flexibiliteit in je metingen",
          body: "Met Tag Manager voeg je zelf tags toe of pas je ze aan voor conversies, site-statistieken en remarketing. Dankzij het intuïtieve ontwerp wijzig je tags op elk gewenst moment, zonder ontwikkelaar en zonder de website zelf aan te passen.",
        },
        {
          title: "Gebruiksvriendelijk en betrouwbaar",
          body: "Door gebruiksvriendelijke foutcontrole en snel ladende tags worden waardevolle gegevens betrouwbaar en nauwkeurig verzameld. Je IT-team kan erop vertrouwen dat de site blijft werken, ook tijdens drukke feestdagen of de lancering van een nieuwe campagne.",
        },
        {
          title: "Tags van derden implementeren",
          body: "Tag Manager ondersteunt vrijwel alle tags en biedt kant-en-klare templates voor tags van Google en van derde partijen, voor mobiele en web-apps. Je kunt er ook mee beheren wat tags doen nadat bezoekers hun keuze over cookietoestemming hebben gemaakt.",
        },
        {
          title: "Beter samenwerken met je team",
          body: "Met werkruimtes en gedetailleerde toegangsopties werkt je team efficiënt samen, terwijl testomgevingen zorgen dat je eerst controleert of alles werkt voordat je live publiceert. Grotere organisaties met Tag Manager 360 kunnen bovendien per pagina bepalen wie toegang heeft.",
        },
      ]}
      pillar="CRO"
      pillarTo="/online-marketing/conversie-optimalisatie"
      pillarNote="Meting is de basis van conversie-optimalisatie. Klopt de data niet, dan test je in het duister. Een inrichting of audit start vanaf € 599,-, doorlopende monitoring vanaf € 999,- per maand."
      faq={FAQ}
    />
  ),
});
