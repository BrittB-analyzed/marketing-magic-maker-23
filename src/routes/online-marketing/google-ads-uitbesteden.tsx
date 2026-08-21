import { seoMeta } from "@/data/seo-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { ContentSections, RelatedLinks, faqJsonLd, type ContentBlock } from "@/components/site/page-bits";
import { KENNISBANK_ADS_LINKS } from "@/data/interne-links";

const FAQ = [
  {
    q: "Wat kost Google Ads uitbesteden?",
    a: "Een audit van je huidige account start vanaf € 599,-. Doorlopend beheer, inclusief SEO en GEO, combineren we vanaf € 999,- per maand. Je advertentiebudget betaal je rechtstreeks aan Google, in je eigen account, nooit aan ons. Ads uitbesteden bij een Google Ads bureau hoeft dus niet duur te zijn, maar wel transparant.",
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
    a: "Jij. We werken altijd in jouw eigen Google Ads-account, koppelen dit aan Analytics en Google Places en Google Shopping waar nodig, en je blijft eigenaar, ook als de samenwerking ooit stopt. Zo blijf je onafhankelijk van welk Google Ads bureau je ook kiest.",
  },
  {
    q: "Wat kost een Google Ads-specialist?",
    a: "Bij ons zit het werk van de specialist in het tarief: een audit van je account vanaf € 599,- eenmalig, doorlopend beheer vanaf € 999,- per maand. Los werk rekenen we af tegen € 90,- per uur. Je advertentiebudget staat daar volledig los van en betaal je zelf aan Google.",
  },
  {
    q: "Is er verschil tussen een adwords specialist en een Google Ads-specialist?",
    a: "Inhoudelijk niet. Google Adwords heet sinds 2018 Google Ads, maar veel ondernemers zoeken nog steeds op adwords specialist. Het vak is hetzelfde gebleven: zoekwoorden, biedingen, advertentieteksten en conversiemeting. Wat er wel is bijgekomen, is automatisering, en juist die vraagt om iemand die de sturing bewaakt.",
  },
  {
    q: "Kan ik ook met een klein budget adverteren?",
    a: "Ja. Je bepaalt zelf je dagbudget, dus je geeft nooit meer uit dan je wilt. We helpen zowel kleine als grote adverteerders, van ZZP'er tot multinational, om met slimme campagne-instellingen het maximale uit elk budget te halen. Zelfs met een beperkt budget loont het om een ads expert in te huren.",
  },
];

/**
 * Inhoudelijke verdieping onder de dienst. Deze secties dekken de zoekvraag
 * rond "google ads specialist" en de adwords-varianten daarvan af, die op de
 * oorspronkelijke pagina volledig ontbrak.
 */
const SPECIALIST_BLOKKEN: ContentBlock[] = [
  {
    h: "Wat doet een Google Ads-specialist?",
    answer:
      "Een Google Ads-specialist beheert je advertentieaccount van zoekwoord tot conversie: campagnestructuur, biedingen, advertentieteksten en uitsluitingen. Waar een adwords specialist vroeger vooral op klikken stuurde, wordt nu op kosten per aanvraag gestuurd. Het werk is doorlopend bijsturen op data, niet één keer opzetten en daarna laten draaien.",
    paragraphs: [
      "Dat verschil is groter geworden sinds Google steeds meer instellingen automatiseert. Slim bieden, brede zoekwoorden en Performance Max nemen keuzes over die je vroeger zelf maakte. Een specialist bewaakt precies die keuzes: welke zoekopdrachten mag het systeem kopen, welke conversie telt mee, en wanneer grijp je in omdat het algoritme op de verkeerde doelgroep optimaliseert.",
      "In de praktijk zie je het terug in de zoektermen. Zonder sturing koopt een account al snel vertoningen op zoekopdrachten die niets met je aanbod te maken hebben. Het uitsluiten daarvan is saai, terugkerend werk, en precies daar zit het rendement van iemand die er elke week naar kijkt.",
    ],
  },
  {
    h: "Wat doet die specialist wekelijks aan je account?",
    answer:
      "Elke week hetzelfde vaste rondje, omdat een advertentieaccount zonder onderhoud vanzelf duurder wordt. Het zoektermenrapport, de biedingen, de advertentieteksten en de conversiemeting komen wekelijks langs. Wat afwijkt van de afgesproken kosten per aanvraag, wordt dezelfde week bijgestuurd in plaats van pas bij de maandrapportage.",
    steps: [
      {
        title: "Zoektermenrapport doornemen",
        body: "Alle zoekopdrachten waarop je bent vertoond, langs de meetlat: relevant of niet. Wat niet past, gaat als uitsluiting het account in, zodat je budget niet weglekt naar de verkeerde vraag.",
      },
      {
        title: "Biedingen en budgetten herverdelen",
        body: "Budget verschuift naar de campagnes en advertentiegroepen met de laagste kosten per aanvraag. Wat structureel te duur blijft, zetten we stil in plaats van het maandenlang mee te laten lopen.",
      },
      {
        title: "Advertentieteksten testen",
        body: "Twee varianten per advertentiegroep, één meetbaar verschil per test. Wint er één, dan blijft die staan en gaat de volgende variant erin.",
      },
      {
        title: "Conversiemeting controleren",
        body: "Telt Google Ads nog wat het moet tellen? We controleren de conversies tegen GA4, zodat je op aanvragen stuurt en niet op pagina's die toevallig ook geladen zijn.",
      },
      {
        title: "Veiling en concurrentie checken",
        body: "Nieuwe adverteerders in de veiling, veranderde vertoningsaandelen en biedprijzen die opeens oplopen: dat zie je alleen als iemand er wekelijks naar kijkt.",
      },
      {
        title: "Landingspagina's beoordelen",
        body: "Een klik is pas iets waard als de pagina erachter de belofte uit de advertentie waarmaakt. Laadtijd, kop en formulier gaan mee in dezelfde ronde.",
      },
    ],
    note: "Wat dat oplevert: bij Meubel & Outlet Weert verschoof het budget van brede zoekopdrachten naar merkgerichte, productgerichte en lokale campagnes. Resultaat: 77% meer sessies uit Google Ads met een efficiënter ingezet budget, en een showroom die dat merkte.",
    caseLink: { label: "Bekijk de case van Meubel & Outlet Weert", slug: "6600x-meubel-outlet-nummer-1-in-google" },
  },
  {
    h: "Wanneer huur je beter een specialist in dan een bureau?",
    answer:
      "Een specialist past beter als je één vast aanspreekpunt wilt dat je account ook echt zelf beheert, je advertentiebudget onder de tienduizend euro per maand ligt en je snel wilt kunnen schakelen. Een groter bureau loont zodra je meerdere landen, tientallen campagnes of een eigen inhouse-team met externe capaciteit moet aansturen.",
    paragraphs: [
      "Het praktische verschil zit in wie het werk doet. Bij een groter bureau spreek je een accountmanager en voert een junior de wijzigingen uit. Bij een specialist is dat dezelfde persoon, wat scheelt in doorlooptijd en in de kans dat een afspraak onderweg sneuvelt. Daar staat tegenover dat één persoon niet oneindig opschaalt: bij honderden campagnes over meerdere markten win je het met een team.",
      "Voor de meeste MKB-bedrijven die hun adwords campagne uitbesteden ligt de grens verrassend hoog. Zolang je op één markt adverteert met een overzichtelijk aantal diensten of productgroepen, is de kwaliteit van de wekelijkse aandacht bepalender dan de omvang van de club erachter.",
      "Wat je bij ons krijgt is de tussenvorm: één vaste specialist als aanspreekpunt, met een bureau eromheen voor de SEO, de conversie-optimalisatie en de techniek. Zo hoef je niet te kiezen tussen korte lijnen en breedte.",
    ],
    table: {
      caption: "Specialist of bureau, waar zit het verschil",
      head: ["", "Vaste specialist", "Groter bureau"],
      rows: [
        ["Wie voert het werk uit", "Dezelfde persoon die je spreekt", "Accountmanager plus uitvoerend team"],
        ["Doorlooptijd van een wijziging", "Dagen", "Weken, via een planning"],
        ["Sterk bij", "Eén markt, overzichtelijk aanbod", "Meerdere landen en merken"],
        ["Zwak bij", "Sterke pieken in volume", "Kleine budgetten en snelle bijsturing"],
        ["Kennis van je bedrijf", "Zit bij één persoon", "Verspreid over rollen"],
      ],
      footnote: "Beide vormen werken. De vraag is welke bij je huidige omvang en tempo past, niet welke in het algemeen beter is.",
    },
  },
];

export const Route = createFileRoute("/online-marketing/google-ads-uitbesteden")({
  head: () => ({
    meta: seoMeta('/online-marketing/google-ads-uitbesteden/', { ogType: 'article', twitterCard: 'summary' }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayout>
      <ServicePage
        eyebrow="Google Ads bureau"
        title="Google Ads uitbesteden: een Google Ads-specialist die campagnes laat converteren"
        intro="Ads uitbesteden betekent bij ons: geen klikken kopen, maar aanvragen genereren. Als Google Premium Partner en Google Ads bureau bouwen en beheren wij Search-, Shopping- en Display-campagnes op scherpe koopintentie. Je krijgt één vaste Google Ads-specialist die wekelijks optimaliseert, helder rapporteert en je advertentiebudget terugverdient."
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
        related={[
          { label: "SEO en SEA combineren", to: "/online-marketing/seo-en-sea/" },
          { label: "Conversie-optimalisatie", to: "/online-marketing/conversie-optimalisatie/" },
          { label: "Google Tag Manager inrichten", to: "/online-marketing/google-tag-manager-inrichten/" },
          { label: "SEO uitbesteden", to: "/online-marketing/seo-uitbesteden/" },
          { label: "Display advertising", to: "/online-marketing/display-advertisement/" },
        ]}
        extra={
          <>
          <ContentSections
            className="border-t border-brand-line bg-white"
            eyebrow="De specialist"
            title="Google Ads-specialist: wat het werk inhoudt"
            intro="Ads uitbesteden is één ding, weten wat er dan gebeurt is een tweede. Hieronder staat wat een specialist daadwerkelijk doet, hoe vaak, en wanneer een bureau een betere keuze is."
            blocks={SPECIALIST_BLOKKEN}
          />
          <RelatedLinks title="Begrippen uit de kennisbank" items={KENNISBANK_ADS_LINKS} />
          </>
        }
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
