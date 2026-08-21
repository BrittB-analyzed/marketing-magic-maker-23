import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import {
  ContentSections,
  CtaBand,
  Faq,
  FaqBlock,
  PageHero,
  RelatedLinks,
  Section,
  SectionHeading,
  type ContentBlock,
} from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { AUTEUR } from "@/data/organisatie";
import { BEDRIJFSCIJFERS } from "@/data/bedrijfscijfers";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";

const PAD = "/online-marketing/zoekmachine-optimalisatie-specialist/";

const FAQ: Faq[] = [
  {
    q: "Wat doet een zoekmachine optimalisatie specialist?",
    a: "Een zoekmachine optimalisatie specialist zorgt dat je website hoger in Google komt op de zoekopdrachten waar je klanten mee zoeken. Dat werk bestaat uit drie delen: de techniek van je site, de teksten erop en de verwijzingen ernaartoe. Daar komt sinds kort de zichtbaarheid in AI-antwoorden bij.",
  },
  {
    q: "Wat kost een zoekmachine optimalisatie specialist?",
    a: "Bij ons vanaf € 999,- per maand voor doorlopend werk, € 599,- voor een eenmalige audit en € 90,- per uur voor los maatwerk. Een freelancer zit meestal tussen € 75,- en € 110,- per uur, een grotere agency tussen € 140,- en € 200,-.",
  },
  {
    q: "Is een SEO-specialist hetzelfde als een zoekmachine optimalisatie specialist?",
    a: "Ja, het is dezelfde rol met een Nederlandse en een Engelse naam. SEO staat voor search engine optimization, oftewel zoekmachineoptimalisatie. Sommige ondernemers zoeken op de Nederlandse term, andere op de afkorting. Het vak, het werk en het tarief zijn hetzelfde.",
  },
  {
    q: "Hoe kies je een goede specialist?",
    a: "Vraag naar een klant in een vergelijkbare markt, vraag wie het werk daadwerkelijk uitvoert en vraag wat er gebeurt als de resultaten uitblijven. Vraag ook of je zelf toegang houdt tot je Analytics en Search Console. Wie daar omheen draait, valt af.",
  },
  {
    q: "Hoe snel zie ik resultaat?",
    a: "De eerste beweging in je posities zie je meestal na twee tot drie maanden, meetbaar meer aanvragen tussen maand zes en twaalf. Hoe snel het gaat, hangt vooral af van hoe sterk je concurrentie is en hoeveel autoriteit je site al heeft opgebouwd.",
  },
  {
    q: "Kan ik zoekmachine optimalisatie ook uitbesteden zonder vast contract?",
    a: "Ja. Je kunt een eenmalige audit afnemen vanaf € 599,- en het advies zelf uitvoeren, of losse uren inkopen tegen € 90,-. Een doorlopend pakket is de logische keuze zodra je wilt dat iemand anders het werk ook echt uitvoert en bijhoudt.",
  },
];

const BLOKKEN: ContentBlock[] = [
  {
    h: "Wat doet een zoekmachine optimalisatie specialist precies?",
    answer:
      "Een specialist maakt je website vindbaar op de zoekopdrachten die klanten opleveren. Dat betekent: uitzoeken waar je markt op zoekt, je site technisch laten voldoen aan wat Google verwacht, de teksten daarop aansluiten en autoriteit opbouwen met verwijzingen van andere sites. Meten hoort er onlosmakelijk bij.",
    paragraphs: [
      "De term zoekmachineoptimalisatie klinkt technischer dan het werk is. Het grootste deel van de tijd gaat niet naar code, maar naar keuzes: welke pagina gaat over welk onderwerp, welke vraag beantwoordt die pagina in de eerste honderd woorden en welke pagina's op je eigen site verwijzen ernaartoe. Techniek is een randvoorwaarde, geen doel.",
      "Wat er de laatste jaren bij is gekomen, is de zichtbaarheid in AI-antwoorden. ChatGPT, Gemini en de AI Overviews van Google beantwoorden steeds meer vragen direct, met bronvermelding. Wie daar niet tussen staat, verliest verkeer dat vroeger vanzelf op een blauwe link klikte. Wij noemen dat GEO, en het zit standaard in ons werk.",
    ],
  },
  {
    h: "Wat doet die specialist in een gemiddelde maand?",
    answer:
      "Een vaste cyclus, want zoekmachineoptimalisatie is onderhoudswerk. Elke maand komen de posities, de techniek, de content en de links langs. Wat beweegt, krijgt meer aandacht. Wat vastzit, wordt geanalyseerd op oorzaak in plaats van harder van hetzelfde te doen.",
    steps: [
      {
        title: "Posities en verkeer nalopen",
        body: "Welke zoekwoorden zijn gestegen, welke gedaald en welke staan net buiten de top tien? Die laatste groep is elke maand de kortste weg naar extra bezoekers.",
      },
      {
        title: "Techniek controleren",
        body: "Crawlfouten, indexeringsproblemen, laadtijd en gebroken links. Meestal een half uur, tenzij er iets is gemigreerd of gepubliceerd dat het opeens misging.",
      },
      {
        title: "Content maken of herschrijven",
        body: "Eén tot drie pagina's per maand, gekozen op basis van waar het verschil tussen inspanning en opbrengst het gunstigst is.",
      },
      {
        title: "Interne links leggen",
        body: "Nieuwe pagina's vanuit bestaande pagina's linken die het al goed doen, met beschrijvende ankertekst. Dit is het goedkoopste dat je kunt doen en het wordt het vaakst overgeslagen.",
      },
      {
        title: "Autoriteit opbouwen",
        body: "Vermeldingen en verwijzingen van sites die er in jouw markt toe doen. Kwaliteit boven aantal, altijd.",
      },
      {
        title: "Rapporteren en bijsturen",
        body: "Een korte video waarin je ziet wat er is gedaan, wat het deed en wat er de volgende maand gebeurt. Geen dashboard met dertig grafieken die niemand leest.",
      },
    ],
    note: "Wat je in zo'n cyclus ziet gebeuren: bij Parketreus schoof 'traprenovatie limburg' in acht maanden van positie 18 naar positie 2, goed voor 4.310 klikken uit 439.000 vertoningen. Geen truc, wel elke maand hetzelfde rondje.",
    caseLink: { label: "Bekijk de case van Parketreus", slug: "parketreus" },
  },
  {
    h: "Specialist, bureau of freelancer: wat past bij jou?",
    answer:
      "Een freelancer is het goedkoopst en het kwetsbaarst: één persoon, geen achtervang. Een grote agency heeft alle disciplines in huis maar rekent daar naar. Een kleine specialist met een team eromheen zit ertussenin en past bij de meeste MKB-bedrijven met één markt en één taal.",
    table: {
      caption: "Drie vormen naast elkaar",
      head: ["", "Freelancer", "Specialist met team", "Grote agency"],
      rows: [
        ["Uurtarief", "€ 75,- tot € 110,-", "€ 90,- tot € 140,-", "€ 140,- tot € 200,-"],
        ["Aanspreekpunt", "De uitvoerder zelf", "De uitvoerder zelf", "Een accountmanager"],
        ["Achtervang bij ziekte of vakantie", "Geen", "Beperkt", "Volledig"],
        ["Breedte aan disciplines", "Meestal één", "SEO, GEO, Ads en CRO", "Alles, inclusief media-inkoop"],
        ["Past bij", "Eén afgebakende klus", "MKB met één markt", "Meerdere landen en merken"],
      ],
      highlightRow: 1,
      footnote: "Tarieven zijn marktindicaties, exclusief btw. Ons eigen uurtarief is € 90,-.",
    },
    paragraphs: [
      "Waar je vooral op let, is wie het werk uitvoert. Bij grotere bureaus spreek je een accountmanager en voert iemand anders de wijzigingen door. Dat hoeft geen probleem te zijn, maar het kost doorlooptijd en het vergroot de kans dat een afspraak onderweg sneuvelt. Vraag daarom altijd expliciet wie er straks in je site zit.",
    ],
  },
  {
    h: "Waar let je op bij het inhuren van een specialist?",
    answer:
      "Op bewijs, op eigenaarschap en op wat er gebeurt als het tegenvalt. Een specialist die een klant in een vergelijkbare markt kan noemen, je zelf toegang laat houden tot je data en vooraf uitlegt hoe er wordt bijgestuurd als resultaten uitblijven, is aantoonbaar serieuzer dan een pakket met een garantie erop.",
    bullets: [
      "Een referentie in een vergelijkbare markt, niet alleen een lijst met logo's.",
      "Toegang tot je eigen Google Analytics, Search Console en advertentieaccount blijft altijd bij jou.",
      "Duidelijkheid over wie het werk uitvoert en hoeveel uur per maand daarvoor staat.",
      "Een opzegtermijn die je niet vastzet als het niet werkt.",
      "Rapportage waarin ook staat wat er níet is gelukt.",
      "Geen garantie op een specifieke positie: die kan niemand geven.",
    ],
  },
  {
    h: "Zoekmachine optimalisatie uitbesteden: hoe het traject loopt",
    answer:
      "Eerst een gesprek waarin we uitzoeken wat je groei nu in de weg zit. Daarna een nulmeting, dan een plan met een volgorde en pas dan uitvoering. Je weet vooraf wat het kost, wat we gaan doen en wanneer we het bespreken. Er start niets zonder jouw akkoord.",
    steps: [
      {
        title: "Kennismaking",
        body: "Binnen 24 uur reactie op je aanvraag. We bespreken je markt, je doelen en wat er tot nu toe wel en niet werkte.",
      },
      {
        title: "Nulmeting",
        body: "Waar sta je nu in Google en in AI-antwoorden, en wat doen de drie bedrijven die boven je staan anders?",
      },
      {
        title: "Plan met volgorde",
        body: "Een actielijst waarin het werk met de meeste impact bovenaan staat, met een inschatting van tijd en verwachte opbrengst.",
      },
      {
        title: "Uitvoering",
        body: "Wij voeren uit, jij houdt eigenaarschap over je accounts en je site. Elke maand een korte video met wat er is gebeurd.",
      },
      {
        title: "Bijsturen",
        body: "Blijven resultaten uit, dan veranderen we van aanpak zonder extra kosten. We werken door tot je meetbaar resultaat boekt.",
      },
    ],
  },
];

export const Route = createFileRoute("/online-marketing/zoekmachine-optimalisatie-specialist")({
  head: () => ({
    meta: seoMeta(PAD, { ogType: "article", twitterCard: "summary" }),
    scripts: [
      {
        type: "application/ld+json",
        children: graph(
          serviceSchema({
            name: "Zoekmachineoptimalisatie",
            description:
              "Een vaste zoekmachine optimalisatie specialist die je strategie bedenkt en zelf uitvoert: techniek, content, autoriteit en zichtbaarheid in AI-antwoorden.",
            path: PAD,
            serviceType: "Zoekmachineoptimalisatie",
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Online marketing", path: "/online-marketing/" },
            { name: "Zoekmachine optimalisatie specialist", path: PAD },
          ]),
        ),
      },
    ],
  }),
  component: ZoekmachineOptimalisatieSpecialist,
});

function ZoekmachineOptimalisatieSpecialist() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Zoekmachineoptimalisatie"
        variant="seo"
        title="Zoekmachine optimalisatie specialist inhuren"
        intro="Een zoekmachine optimalisatie specialist zorgt dat je website hoger in Google komt op de zoekopdrachten waar je klanten mee zoeken, en dat je genoemd wordt in AI-antwoorden. Bij ons is dat één vaste persoon die de strategie bedenkt én uitvoert."
      />

      <Section>
        <SectionHeading
          eyebrow="Kort antwoord"
          title="Zoekmachineoptimalisatie of SEO: dezelfde rol, twee namen"
          intro="Zoekmachineoptimalisatie is de Nederlandse vertaling van search engine optimization. Zoek je op de Nederlandse term, dan zoek je naar hetzelfde vak, hetzelfde werk en hetzelfde tarief als wanneer je op SEO zoekt."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-line bg-white p-7">
            <p className="text-3xl font-semibold text-brand-green">{BEDRIJFSCIJFERS.jarenErvaring}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              jaar ervaring met zoekmachineoptimalisatie, van technische SEO tot content en autoriteit.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-line bg-white p-7">
            <p className="text-3xl font-semibold text-brand-green">{BEDRIJFSCIJFERS.reviewScore}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              gemiddeld uit {BEDRIJFSCIJFERS.aantalReviews} Google-reviews van opdrachtgevers.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-line bg-white p-7">
            <p className="text-3xl font-semibold text-brand-green">1</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              vast aanspreekpunt: {AUTEUR.naam} bedenkt de strategie en voert hem ook zelf uit.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Deze pagina is de instap. Wil je direct weten hoe het traject eruitziet en wat er per maand gebeurt, ga
          dan naar{" "}
          <Link
            to="/online-marketing/seo-uitbesteden/"
            className="font-semibold text-brand-ink hover:text-brand-red"
          >
            de volledige pagina over SEO uitbesteden
          </Link>
          .
        </p>
      </Section>

      <ContentSections className="border-t border-brand-line bg-white" blocks={BLOKKEN} />

      <RelatedLinks
        title="Verder over zoekmachineoptimalisatie"
        items={[
          {
            label: "SEO uitbesteden aan een vaste specialist",
            to: "/online-marketing/seo-uitbesteden/",
            note: "De volledige dienstpagina: werkwijze, deliverables en tarieven.",
          },
          {
            label: "Wat SEO kost per maand",
            to: "/tarieven-seo/",
            note: "Audit, maandpakket en uurtarief, met wat je per budget mag verwachten.",
          },
          {
            label: "SEO-advies zonder maandpakket",
            to: "/online-marketing/seo-advies/",
            note: "Eenmalig een plan, dat je zelf of met je eigen team uitvoert.",
          },
          {
            label: "SEO en SEA combineren",
            to: "/online-marketing/seo-en-sea/",
            note: "Hoe organisch en betaald verkeer elkaar versterken.",
          },
          {
            label: "SEO-expert inhuren",
            to: "/seo-expert/",
            note: "Dezelfde rol, bekeken vanuit wat een expert onderscheidt.",
          },
          {
            label: "Genoemd worden in AI-antwoorden",
            to: "/online-marketing/geo-optimalisatie/",
            note: "GEO: zichtbaar zijn in ChatGPT, Gemini en AI Overviews.",
          },
        ]}
      />

      <FaqBlock items={FAQ} title="Over de zoekmachine optimalisatie specialist" />
      <CtaBand />
    </SiteLayout>
  );
}
