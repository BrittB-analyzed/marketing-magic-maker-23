import { seoMeta } from "@/data/seo-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { ContentSections, RelatedLinks, faqJsonLd, type ContentBlock } from "@/components/site/page-bits";
import { KENNISBANK_CRO_LINKS } from "@/data/interne-links";

const FAQ = [
  {
    q: "Wat is conversie-optimalisatie?",
    a: "Conversie-optimalisatie (CRO) is het verhogen van het percentage bezoekers dat een aanvraag doet, belt of bestelt. Je haalt meer uit het verkeer dat je al hebt, zonder extra advertentiebudget.",
  },
  {
    q: "Hoe bereken ik mijn conversiepercentage?",
    a: "Deel het aantal conversies door het aantal bezoekers in dezelfde periode en vermenigvuldig met honderd. Bij 4.000 bezoekers en 60 aanvragen is dat 60 ÷ 4.000 × 100 = 1,5%. Reken altijd ook per kanaal en per landingspagina, want een gemiddelde over de hele site verbergt precies waar het misgaat.",
  },
  {
    q: "Wat is een goed conversiepercentage?",
    a: "Dat verschilt sterk per branche en per type conversie. Een webshop en een B2B-dienstverlener met offerteaanvragen zijn niet te vergelijken. Zinvoller dan een branchegemiddelde is je eigen cijfer van vorig kwartaal: dat is de enige benchmark die rekening houdt met jouw aanbod, prijs en verkeersmix.",
  },
  {
    q: "Heb ik genoeg bezoekers voor CRO?",
    a: "Voor betrouwbare A/B-tests heb je volume nodig. Heb je dat nog niet, dan starten we met kwalitatieve analyse: sessieopnames in Microsoft Clarity, formulieranalyse en gebruikersfeedback. Dat levert vaak al de grootste winst op.",
  },
  {
    q: "Wat levert CRO op?",
    a: "Elke procentpunt conversiestijging vertaalt zich direct in aanvragen zonder extra verkeer. Bij de meeste MKB-sites zit de grootste winst in het formulier en in de duidelijkheid van de eerste schermvulling.",
  },
  {
    q: "Hoe lang duurt een A/B-test?",
    a: "Tot je genoeg conversies hebt om het verschil te vertrouwen, meestal twee tot vier weken en altijd een heel aantal weken. Stop je eerder omdat een variant voorloopt, dan meet je toeval. Bij weinig verkeer testen we niet, maar voeren we de verbetering door en vergelijken we periodes.",
  },
  {
    q: "Waarom een conversie optimalisatie bureau in plaats van het zelf doen?",
    a: "Zelf doen kan prima, mits je meting klopt, je tests lang genoeg laat lopen en je de verleiding weerstaat om te sturen op wat je zelf mooi vindt. Een conversie optimalisatie bureau brengt vooral discipline: een vaste testvolgorde, een vooraf vastgelegd succescriterium en iemand die ook de verliezende tests eerlijk opschrijft.",
  },
];

/**
 * Inhoudelijke kern van de pagina. Dekt de zoekvragen rond conversie
 * optimalisatie, conversieoptimalisatie en conversie percentage af, inclusief
 * de rekenkant die op de oorspronkelijke pagina ontbrak.
 */
const CRO_BLOKKEN: ContentBlock[] = [
  {
    h: "Hoe bereken je een conversiepercentage?",
    answer:
      "Je conversiepercentage is het aantal conversies gedeeld door het aantal bezoekers in dezelfde periode, maal honderd. Kreeg je 60 aanvragen uit 4.000 bezoekers, dan is dat 60 ÷ 4.000 × 100 = 1,5%. Dezelfde periode, dezelfde bron en hetzelfde soort conversie: anders vergelijk je appels met peren.",
    paragraphs: [
      "De rekensom is het makkelijke deel. De vraag die ertoe doet, is wat je in de teller en in de noemer zet. Tel je alle bezoekers mee, of alleen die op de pagina waar de conversie kan gebeuren? Tel je elke nieuwsbriefinschrijving als conversie, of alleen de aanvragen waar een offerte uit kan komen? Twee bedrijven met hetzelfde percentage kunnen een compleet verschillend bedrijf zijn.",
      "Daarom rekenen we altijd op drie niveaus: over de hele site, per kanaal en per landingspagina. Een sitegemiddelde van 1,5% klinkt redelijk, maar als je advertentieverkeer op 0,4% zit en je merkverkeer op 6%, dan weet je meteen waar het geld verdwijnt. Dat onderscheid is de eerste winst van elke conversieoptimalisatie.",
    ],
    note: "Uit de praktijk: bij Vogelvoerkopen.nl steeg het conversiepercentage met 10% nadat we de productpagina's hadden aangepakt. Dezelfde bezoekers, meer bestellingen, geen extra advertentiebudget.",
    caseLink: { label: "Bekijk de case van Vogelvoerkopen.nl", slug: "online-transacties-vogelvoerkopen" },
  },
  {
    h: "Conversie percentage: welke cijfers tel je mee?",
    answer:
      "Een conversie percentage is pas bruikbaar als je vastlegt wát je telt. Kies één conversie die geld waard is, meestal een aanvraag, offerteverzoek of bestelling. Reken op sessies of op gebruikers, maar niet door elkaar. Micro-conversies zoals een klik op je telefoonnummer meet je apart, nooit opgeteld bij de hoofdconversie.",
    bullets: [
      "Macro-conversie: de actie waar omzet uit voortkomt. Hierop stuur je, en niets anders telt mee in je hoofdpercentage.",
      "Micro-conversies: telefoonklik, routebeschrijving, download, nieuwsbriefinschrijving. Waardevol als signaal, maar apart gemeten.",
      "Sessies of gebruikers: één keuze, en die houd je aan. Op sessies reken je meestal een lager percentage dan op gebruikers.",
      "Uitgesloten verkeer: eigen medewerkers, bots en bezoekers uit landen waar je niet levert. Anders verwater je je noemer.",
      "Periode: minimaal vier volle weken, zodat weekpatronen en campagnepieken elkaar opheffen.",
    ],
    paragraphs: [
      "In GA4 betekent dit dat je één sleutelgebeurtenis aanwijst als de conversie waarop je stuurt, en de rest als ondersteunend signaal behandelt. Klopt die inrichting niet, dan meet je maandenlang iets anders dan je denkt en zijn alle testresultaten die je daarop baseert waardeloos. Wij controleren de meting daarom altijd eerst, vóórdat we ook maar één ding op de site aanpassen.",
    ],
  },
  {
    h: "Wat is een goed conversiepercentage per branche?",
    answer:
      "Er bestaat geen universeel goed conversiepercentage. Het hangt af van je branche, je prijs, de zwaarte van de beslissing en waar je verkeer vandaan komt. Wat wél houvast geeft, is de bandbreedte waarbinnen vergelijkbare bedrijven zitten, en vooral je eigen cijfer van het vorige kwartaal.",
    table: {
      caption: "Wat het cijfer per type bedrijf omhoog of omlaag duwt",
      head: ["Type bedrijf", "Wat telt als conversie", "Waarom het cijfer hoog of laag uitvalt"],
      rows: [
        [
          "Lokale dienstverlener",
          "Telefoontje of contactaanvraag",
          "Hoog: wie lokaal zoekt heeft meestal al besloten. Wel lastig te meten, omdat veel mensen bellen in plaats van invullen.",
        ],
        [
          "B2B-dienstverlening",
          "Offerte- of demoaanvraag",
          "Laag: meerdere beslissers, lange oriëntatie. Eén aanvraag is hier veel meer waard dan één bestelling elders.",
        ],
        [
          "Webshop, lage orderwaarde",
          "Bestelling",
          "Middel: kleine beslissing, maar veel vergelijkend verkeer. Verzendkosten en levertijd bepalen hier het meeste.",
        ],
        [
          "Webshop, hoge orderwaarde",
          "Bestelling",
          "Laag: mensen komen drie tot vijf keer terug voordat ze kopen. Reken hier op gebruikers, niet op sessies.",
        ],
        [
          "Software of SaaS",
          "Proefaccount of demo",
          "Sterk wisselend: hangt volledig af van of je een creditcard vraagt bij de proefperiode.",
        ],
      ],
      footnote:
        "Bewust zonder branchegemiddelden. Een percentage zonder bron, meetjaar en definitie van de conversie is een getal om je aan te spiegelen zonder dat het iets zegt over jouw situatie.",
    },
    paragraphs: [
      "Een branchegemiddelde is bovendien een gemiddelde over bedrijven met heel verschillende verkeersmixen. Wie vooral op merknaam wordt gevonden, scoort bijna altijd hoger dan wie het van brede zoekwoorden moet hebben, zonder dat de website ook maar iets beter is. Vergelijk daarom liever met jezelf: hetzelfde kanaal, dezelfde pagina, een kwartaal eerder.",
    ],
  },
  {
    h: "Welke tests doe je in welke volgorde?",
    answer:
      "In volgorde van zekerheid, niet van opwinding. Eerst zorgen dat je meting klopt, dan de blokkades wegnemen die iedereen ziet, daarna het formulier, dan de boodschap en pas als laatste de vormgeving. Wie met knopkleuren begint, test maandenlang ruis terwijl de echte lekken open blijven staan.",
    steps: [
      {
        title: "Meting controleren",
        body: "Geen test zonder betrouwbaar nulpunt. We valideren de conversiemeting in GA4 en Tag Manager en sluiten intern verkeer uit. Dit is geen test, dit is de voorwaarde voor alle tests erna.",
      },
      {
        title: "Blokkades wegnemen",
        body: "Een kapot formulier, een trage mobiele pagina, een cookiebanner die het hele scherm vult. Dit test je niet, dit repareer je. Je vergelijkt achteraf de periode ervoor met de periode erna.",
      },
      {
        title: "Formulier verkorten",
        body: "Meestal de grootste enkele winst op een MKB-site. Velden schrappen, verplichte velden optioneel maken, lange formulieren opdelen in stappen. Eén variant tegen de oude, één meetbaar verschil.",
      },
      {
        title: "Boodschap boven de vouw",
        body: "Zegt de eerste schermvulling wat je doet, voor wie en wat de volgende stap is? Hier test je koppen en de tekst op de knop, niet de kleur ervan.",
      },
      {
        title: "Bewijs toevoegen",
        body: "Reviews, cases en concrete cijfers op de plek waar de twijfel ontstaat: vlak boven het formulier. Test of het bewijs dáár beter werkt dan onderaan de pagina.",
      },
      {
        title: "Prijs en aanbod verhelderen",
        body: "Vanafprijzen, wat er wel en niet in zit, en wat er na de aanvraag gebeurt. Dit raakt de conversie het diepst, en daarom komt het pas als de rest staat.",
      },
      {
        title: "Vormgeving en detail",
        body: "Kleuren, plaatsing en microcopy. Zinvol als alles hierboven op orde is, en verspilde moeite zolang dat niet zo is.",
      },
    ],
    note: "Per test leggen we vooraf vast wat we verwachten, hoeveel conversies we nodig hebben en wanneer we stoppen. Een test die halverwege wordt afgebroken omdat de variant voorloopt, meet toeval en geen verbetering.",
  },
  {
    h: "Wat kost conversie-optimalisatie en wat levert het op?",
    answer:
      "Een conversie-audit start bij € 599,- eenmalig. Doorlopende conversieoptimalisatie zit vanaf € 999,- per maand in het pakket, los werk rekenen we af tegen € 90,- per uur. Wat het oplevert, reken je uit met je eigen cijfers: elke procentpunt stijging is direct extra aanvragen uit hetzelfde verkeer.",
    paragraphs: [
      "Die laatste zin is de kern van de businesscase. Verdubbel je je verkeer, dan verdubbel je je advertentiekosten. Verhoog je je conversiepercentage van 1,5% naar 2,1%, dan krijg je 40% meer aanvragen zonder dat er één euro extra naar Google gaat. Bij 4.000 bezoekers per maand is dat het verschil tussen 60 en 84 aanvragen.",
      "Of dat de investering waard is, hangt af van wat één aanvraag je oplevert. Dat cijfer heb jij, wij niet. In de eerste sessie rekenen we het samen door, zodat je vóór de start weet bij welke stijging het traject zichzelf terugverdient.",
    ],
    table: {
      caption: "Wat het traject bevat",
      head: ["Vorm", "Prijs", "Wat je krijgt"],
      rows: [
        [
          "Conversie-audit",
          "vanaf € 599,- eenmalig",
          "Analyse van je belangrijkste conversiepaden, sessieopnames, controle van de meting en een actieplan op volgorde van impact",
        ],
        [
          "Doorlopende CRO",
          "vanaf € 999,- per maand",
          "Testkalender, uitvoering en maandelijkse rapportage op conversieratio en leadkwaliteit",
        ],
        ["Los maatwerk", "€ 90,- per uur", "Losse aanpassingen of een tweede mening op een bestaand testplan"],
      ],
      footnote: "Alle bedragen exclusief btw. Je krijgt vooraf een vaste prijs, geen nacalculatie.",
    },
    note: "Resultaat uit een eigen traject: bij Vogelvoerkopen.nl leverde het optimaliseren van de productpagina's 10% meer conversie op. In dezelfde periode vervijfvoudigde het aantal online transacties, deels door SEO en Ads en deels doordat het binnengekomen verkeer beter werd benut.",
    caseLink: { label: "Bekijk de case van Vogelvoerkopen.nl", slug: "online-transacties-vogelvoerkopen" },
  },
];

export const Route = createFileRoute("/online-marketing/conversie-optimalisatie")({
  head: () => ({
    meta: seoMeta("/online-marketing/conversie-optimalisatie/", { ogType: "article", twitterCard: "summary" }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayout>
      <ServicePage
        eyebrow="CRO"
        title="Conversie-optimalisatie: meer aanvragen uit hetzelfde verkeer"
        intro="Conversie-optimalisatie is het systematisch verhogen van het percentage bezoekers dat een aanvraag doet, belt of bestelt, door te meten waar mensen afhaken en dat gericht op te lossen. Zonder één euro extra advertentiebudget."
        forWho={[
          { title: "Veel bezoek, weinig aanvragen", body: "Je verkeer groeit, maar je telefoon gaat niet vaker." },
          { title: "Je formulier is een drempel", body: "Twaalf velden, een rekensom en een verplichte toelichting. Niemand vult dat in." },
          { title: "Je weet niet waar het misgaat", body: "Je hebt cijfers, maar geen verklaring voor wat je ziet." },
        ]}
        deliverables={[
          "Conversie-audit van je belangrijkste paden",
          "Sessieopnames en heatmaps via Microsoft Clarity op de pagina's die ertoe doen",
          "Herontwerp van formulieren naar stapsgewijze varianten",
          "A/B-tests met een vooraf vastgesteld succescriterium",
          "Correcte doelmeting in GA4 en Tag Manager",
          "Maandelijkse rapportage op conversieratio en leadkwaliteit",
        ]}
        steps={[
          { title: "Onderzoek", body: "Data-analyse in GA4 en Microsoft Clarity plus kwalitatief onderzoek: waar haken mensen af en waarom." },
          { title: "Strategie", body: "Hypotheses op volgorde van verwachte impact en benodigde inspanning." },
          { title: "Uitvoering", body: "Aanpassingen live zetten of testen, afhankelijk van je volume." },
          { title: "Optimalisatie", body: "Wat wint, blijft staan. Wat verliest, leert ons iets voor de volgende test." },
        ]}
        connection="CRO maakt SEO, GEO en Ads rendabel. Meer verkeer zonder conversie is een dure hobby; een hogere conversieratio verhoogt het rendement van élk kanaal tegelijk en verlaagt tegelijk je kosten per aanvraag in Google Ads."
        price={{
          from: "Audit vanaf € 599,- · doorlopend vanaf € 999,- per maand",
          note: "CRO is in te zetten als onderdeel van het pakket of als aparte schijf met dezelfde basis. Los maatwerk tegen € 90,- per uur.",
        }}
        related={[
          { label: "Google Ads uitbesteden", to: "/online-marketing/google-ads-uitbesteden/" },
          { label: "SEO en SEA combineren", to: "/online-marketing/seo-en-sea/" },
          { label: "Google Tag Manager inrichten", to: "/online-marketing/google-tag-manager-inrichten/" },
          { label: "SEO uitbesteden", to: "/online-marketing/seo-uitbesteden/" },
          { label: "Website advies", to: "/online-marketing/website-advies/" },
        ]}
        extra={
          <>
          <ContentSections
            className="border-t border-brand-line bg-white"
            eyebrow="Conversie optimalisatie uitgelegd"
            title="Van conversiepercentage tot testvolgorde"
            intro="Alles wat je nodig hebt om je eigen cijfer te berekenen, te beoordelen en te verbeteren. In deze volgorde, omdat de stappen op elkaar bouwen."
            blocks={CRO_BLOKKEN}
          />
          <RelatedLinks title="Begrippen uit de kennisbank" items={KENNISBANK_CRO_LINKS} />
          </>
        }
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
