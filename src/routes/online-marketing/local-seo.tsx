import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Wat is local SEO precies?",
    a: "Local SEO is het optimaliseren van je website en je Google Bedrijfsprofiel om klanten aan te trekken uit lokale zoekopdrachten, zoals 'loodgieter Nijmegen' of 'online marketing Venlo'. Google toont zelfs zonder plaatsnaam in de zoekopdracht lokale resultaten op basis van de locatie van de zoeker.",
  },
  {
    q: "Hoe pas ik local SEO concreet toe?",
    a: "Begin met SiL: maak een lijst van al je diensten en de locaties die je bedient en combineer die tot zoekwoordcombinaties. Richt vervolgens per locatie een pagina in met relevante, bruikbare informatie (contactgegevens, openingstijden) en zorg dat je Google Bedrijfsprofiel volledig is ingevuld.",
  },
  {
    q: "Wat is het belang van een Google Bedrijfsprofiel?",
    a: "Met een volledig ingericht Google Bedrijfsprofiel (openingstijden, locatie, categorie) krijg je een kaartje in Google Maps dat in de lokale zoekresultaten naar voren komt. Dat is vaak de eerste plek waar potentiële klanten je vinden.",
  },
  {
    q: "Wat doet de Yoast Local SEO-plugin voor mijn WordPress-site?",
    a: "Deze plugin zet je bedrijfsgegevens (naam, type bedrijf, locatie, openingstijden) automatisch om in het juiste Schema.org-formaat, zodat Google dit op elke pagina herkent. Ook toont hij automatisch een Google Maps-kaart met routeplanner en genereert hij een KML-bestand voor je sitemap.",
  },
  {
    q: "Wat kunnen jullie concreet voor mijn lokale vindbaarheid doen?",
    a: "Wij richten je Google Bedrijfsprofiel in of optimaliseren het, verzorgen OnSite- en OnPage-optimalisatie voor lokale zoekwoorden, adviseren over je lokale strategie en zoeken lokale listings voor waardevolle backlinks.",
  },
];

export const Route = createFileRoute("/online-marketing/local-seo")({
  head: () => ({
    meta: [
      { title: "Local SEO: vindbaar in je eigen regio | B. Analyzed" },
      { name: "description", content: "Local SEO voor lokale bedrijven: Google Bedrijfsprofiel, SiL-zoekwoorden, lokale paginaoptimalisatie en reviews. Audit vanaf € 599,-, doorlopend vanaf € 999,- p/m." },
      { property: "og:title", content: "Local SEO: vindbaar in je eigen regio" },
      { property: "og:description", content: "Zichtbaar in Maps en lokale zoekresultaten, met een profiel dat aanvragen oplevert." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Local SEO: vindbaar worden in je eigen werkgebied"
      intro="Elke ondernemer heeft met local SEO hetzelfde doel: meer leads uit de regio. Een goede positie in Google Maps en in het lokale organische zoekresultaat maakt daarin het verschil, ook als je landelijk of wereldwijd verkoopt."
      points={[
        "Google Bedrijfsprofiel aanmaken of volledig optimaliseren",
        "SiL-onderzoek: diensten × locaties omgezet in kansrijke zoekwoorden",
        "OnSite- en OnPage-optimalisatie van je lokale pagina's",
        "Lokale listings en linkbuilding voor extra autoriteit",
        "Reviewstrategie zodat klanten je makkelijk kunnen beoordelen",
        "Begeleiding en advies om je lokale vindbaarheid continu te verbeteren",
      ]}
      sections={[
        {
          title: "Hoe local SEO werkt",
          body: "Google toonde vroeger overal dezelfde resultaten voor een zoekterm als 'SEA uitbesteden'. Inmiddels zijn zoekresultaten sterk gelokaliseerd: zoek je in Venlo, dan zie je andere resultaten dan iemand in Maastricht, ook zonder dat de plaatsnaam in de zoekopdracht staat. Dat maakt gerichte lokale optimalisatie essentieel.",
        },
        {
          title: "SiL: service op locatie",
          body: "De basis van local SEO is simpel: maak een lijst van alle diensten die je aanbiedt en van de locaties die je bedient, en combineer ze tot een reeks kansrijke zoekwoorden. Denk aan 'loodgieter Nijmegen' of 'nood loodgieter Nijmegen' — precies de termen die mensen intypen.",
        },
        {
          title: "Paginaoptimalisatie per locatie",
          body: "Elke locatie verdient een eigen pagina met relevante, bruikbare informatie: adres, openingstijden en contactgegevens. Zo'n pagina moet zowel op de juiste zoekwoorden zijn ingericht als prettig zijn voor de bezoeker die iets wil weten of boeken.",
        },
        {
          title: "Structured data, reviews en social proof",
          body: "Voor moderne local SEO tellen ook structured data met reviews, actieve inzet van social media om je bedrijf te promoten en het gebruik van reviewplatforms zoals Tripadvisor mee. Samen zorgen deze signalen ervoor dat je vaker en hoger verschijnt in lokale zoekresultaten.",
        },
      ]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Local SEO is een onderdeel van de SEO-pijler. Zit je in een regionale markt, dan begint je groei hier. Een audit start vanaf € 599,-, doorlopende begeleiding vanaf € 999,- per maand, en we werken door tot je meetbaar resultaat ziet."
      faq={FAQ}
    />
  ),
});
