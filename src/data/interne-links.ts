/**
 * Herbruikbare sets interne links.
 *
 * Twee regels die hier worden afgedwongen:
 * 1. Ankertekst is beschrijvend en bevat het zoekwoord van de doelpagina.
 *    Nooit "lees meer" of "klik hier": dat geeft Google geen enkel signaal
 *    over waar de link naartoe gaat.
 * 2. Elke pagina hoort minstens drie inkomende interne links te hebben.
 *    Controleer dat met `node scripts/interne-links.mjs`.
 */

export type InterneLink = { label: string; to: string; note?: string };

/** Lokale SEO-pagina's. Gebruikt op de local SEO-pijler en op de regiopagina's. */
export const REGIO_LINKS: InterneLink[] = [
  { label: "SEO Venlo", to: "/seo-venlo/", note: "SEO-bureau voor Noord-Limburg." },
  { label: "SEO Limburg", to: "/seo-limburg/", note: "De hele provincie, van Venlo tot Maastricht." },
  { label: "SEO Maastricht", to: "/seo-maastricht/", note: "Zuid-Limburg en de Euregio." },
  { label: "SEO Roermond", to: "/seo-roermond/", note: "Midden-Limburg en het Outletgebied." },
  { label: "SEO Venray", to: "/seo-venray/", note: "Noord-Limburg en de Peel." },
  { label: "SEO Horst", to: "/seo-horst/", note: "Horst aan de Maas en omgeving." },
  { label: "SEO Arcen", to: "/seo-arcen/", note: "Recreatie en toerisme aan de Maas." },
  { label: "SEO Belfeld", to: "/seo-belfeld/", note: "Lokale vindbaarheid rond Belfeld." },
  { label: "SEO Grubbenvorst", to: "/seo-grubbenvorst/", note: "Agrarisch en logistiek gebied." },
  { label: "SEO Nijmegen", to: "/seo-nijmegen/", note: "Gelderland en de Rijnstreek." },
  { label: "SEO Eindhoven", to: "/seo-eindhoven/", note: "Tech, industrie en Brainport." },
  { label: "SEO Rotterdam", to: "/seo-rotterdam/", note: "Haven, logistiek en dienstverlening." },
  { label: "SEO Ibiza", to: "/seo-ibiza/", note: "Toerisme en verhuurbedrijven op het eiland." },
  { label: "SEO Blerick", to: "/seo-blerick/", note: "Venlo-West en de bedrijventerreinen." },
  {
    label: "Online marketing bureau Venray",
    to: "/online-marketing-venray/",
    note: "SEO, Ads en conversie voor Noord-Limburg.",
  },
  {
    label: "Online marketing Venlo",
    to: "/online-marketing-venlo/",
    note: "SEO, Ads en CRO voor Venlose ondernemers.",
  },
  {
    label: "Marketingbureau Limburg",
    to: "/marketingbureau-limburg/",
    note: "Het volledige aanbod voor Limburgse bedrijven.",
  },
];

/** Regionale linkbuildingpagina's. */
export const LINKBUILDING_REGIO_LINKS: InterneLink[] = [
  {
    label: "Linkbuilding uitbesteden in Venlo",
    to: "/linkbuilding-uitbesteden-venlo/",
    note: "Autoriteit opbouwen met een regionaal linkprofiel.",
  },
  {
    label: "Linkbuilding uitbesteden in Maastricht",
    to: "/linkbuilding-uitbesteden-maastricht/",
    note: "Voor bedrijven in Zuid-Limburg en de Euregio.",
  },
  {
    label: "Linkbuilding uitbesteden in Nijmegen",
    to: "/linkbuilding-uitbesteden-nijmegen/",
    note: "Voor bedrijven in Gelderland en omgeving.",
  },
];

/** De pagina's rond de SEO-rol, elk met een eigen zoekvraag. */
export const SEO_ROL_LINKS: InterneLink[] = [
  {
    label: "Zoekmachine optimalisatie specialist inhuren",
    to: "/online-marketing/zoekmachine-optimalisatie-specialist/",
    note: "De Nederlandstalige instap: wat de rol inhoudt en wat het kost.",
  },
  {
    label: "SEO-advies zonder maandpakket",
    to: "/online-marketing/seo-advies/",
    note: "Eenmalig een plan kopen en het zelf uitvoeren.",
  },
  {
    label: "SEO-expert inhuren",
    to: "/seo-expert/",
    note: "Wat een expert onderscheidt van een generalist.",
  },
  {
    label: "SEO-consultant voor persoonlijk advies",
    to: "/seo-consultant/",
    note: "Advies en begeleiding zonder volledige uitbesteding.",
  },
  {
    label: "SEO-bureau met 15 jaar ervaring",
    to: "/seo-bureau/",
    note: "Het volledige bureau-aanbod op één pagina.",
  },
  {
    label: "SEO-partner voor de lange termijn",
    to: "/seo-partner/",
    note: "Samenwerken als verlengstuk van je eigen team.",
  },
  {
    label: "SEO voor MKB-bedrijven",
    to: "/seo-voor-mkb/",
    note: "Wat er anders gaat bij een MKB-budget.",
  },
  {
    label: "SEO-content die scoort én leest",
    to: "/seo-content/",
    note: "De contentkant van zoekmachineoptimalisatie.",
  },
  {
    label: "SEO-guru: een specialist met een grote mond of grote resultaten?",
    to: "/seo-guru/",
    note: "Waar je op let als iemand zich zo noemt.",
  },
  {
    label: "Je SEO-score bepalen",
    to: "/seo-score/",
    note: "Hoe je meet waar je site nu staat.",
  },
];

/** Losse pagina's die anders nauwelijks inkomende links krijgen. */
export const OVERIGE_LINKS: InterneLink[] = [
  {
    label: "Online marketing uitbesteden",
    to: "/online-marketing/uitbesteden/",
    note: "Alle pijlers in één plan, vanaf € 999,- per maand.",
  },
  {
    label: "Display advertising inzetten",
    to: "/online-marketing/display-advertisement/",
    note: "Bereik opbouwen naast je zoekcampagnes.",
  },
  {
    label: "Gratis AI-scan aanvragen",
    to: "/gratis-ai-scan/",
    note: "Zie of ChatGPT en Perplexity jouw bedrijf al noemen.",
  },
  {
    label: "Veelgestelde vragen over onze werkwijze",
    to: "/veelgestelde-vragen/",
    note: "Prijzen, contractvormen en wat je van ons mag verwachten.",
  },
  {
    label: "Klantwaarderingen lezen",
    to: "/klantwaarderingen/",
    note: "Wat opdrachtgevers over de samenwerking zeggen.",
  },
  {
    label: "Online marketingstrategie bepalen",
    to: "/online-marketing-strategie/",
    note: "Van doel naar kanaalkeuze, met een plan dat je kunt volgen.",
  },
  {
    label: "Tarieven social media marketing",
    to: "/tarieven-social-media/",
    note: "Wat social kost en wanneer het naast SEO en Ads loont.",
  },
  {
    label: "GEO uitgelegd in de kennisbank",
    to: "/kennisbank/geo/",
    note: "Hoe AI-antwoordmachines bronnen kiezen.",
  },
  {
    label: "Aanmelden voor de nieuwsbrief",
    to: "/nieuwsbrief/",
    note: "Maandelijks wat er in SEO en AI-zoeken verandert.",
  },
];

/**
 * Kennisbankbegrippen per dienst. Begrippen waarvan de publicatiedatum nog niet
 * is bereikt, staan op noindex; de link blijft dan staan en wordt vanzelf
 * waardevol zodra het begrip live gaat.
 */
export const KENNISBANK_SEO_LINKS: InterneLink[] = [
  { label: "Zoekwoorden: short tail en long tail", to: "/kennisbank/zoekwoorden/", note: "Waarom zoekintentie zwaarder weegt dan volume." },
  { label: "Meta description schrijven", to: "/kennisbank/meta-description/", note: "Geen rankingfactor, wel bepalend voor je kliks." },
  { label: "Structured data en rich results", to: "/kennisbank/structured-data/", note: "Je pagina uitleggen aan zoekmachines en AI." },
  { label: "Robots.txt instellen", to: "/kennisbank/robots-txt-bestand/", note: "Wat zoekmachines wel en niet mogen bekijken." },
  {
    label: "Indexeren: betekenis en waarom het telt",
    to: "/kennisbank/indexeren-betekenis/",
    note: "Zonder indexering kun je nergens op ranken.",
  },
  {
    label: "Bovenaan in Google komen",
    to: "/kennisbank/bovenaan-in-google/",
    note: "Wat er echt voor nodig is en hoe lang het duurt.",
  },
  {
    label: "Wat is een webmaster?",
    to: "/kennisbank/webmaster/",
    note: "Het beheerwerk waar je vindbaarheid op rust.",
  },
  {
    label: "Staging: testen voordat je live gaat",
    to: "/kennisbank/staging/",
    note: "Hoe je voorkomt dat een update je posities kost.",
  },
];

export const KENNISBANK_ADS_LINKS: InterneLink[] = [
  { label: "Google Ads: hoe de veiling werkt", to: "/kennisbank/google-ads/", note: "Waarom twee adverteerders een andere prijs betalen." },
  { label: "Google Analytics inrichten", to: "/kennisbank/google-analytics/", note: "Wat bezoekers op je site doen, en wat je meet." },
  { label: "Affiliate marketing: betalen per resultaat", to: "/kennisbank/affiliate-marketing/", note: "Wanneer het past bij je marge." },
  {
    label: "CTR: wat is een goede click-through rate?",
    to: "/kennisbank/ctr/",
    note: "De rekensom en waarom het je klikprijs bepaalt.",
  },
  {
    label: "SEA-scan: je Google Ads-account doorlichten",
    to: "/kennisbank/sea-scan/",
    note: "Waar advertentiebudget in de praktijk weglekt.",
  },
  {
    label: "See Think Do Care in gewone taal",
    to: "/kennisbank/see-think-do-care/",
    note: "Per fase een ander kanaal en een ander doel.",
  },
];

export const KENNISBANK_CONTENT_LINKS: InterneLink[] = [
  { label: "Salespagina opbouwen", to: "/kennisbank/salespagina/", note: "Eén pagina die het hele verkoopgesprek voert." },
  { label: "Wat is marketing automation?", to: "/kennisbank/wat-is-marketing-automation/", note: "Terugkerend werk automatiseren, en wanneer het te vroeg is." },
  { label: "Affiliate marketing: betalen per resultaat", to: "/kennisbank/affiliate-marketing/", note: "Partners belonen per verkoop of lead." },
  {
    label: "Wat is copywriting?",
    to: "/kennisbank/wat-is-copywriting/",
    note: "Schrijven met een doel, en hoe je meet of het werkt.",
  },
  {
    label: "Wat doet een SEO-copywriter?",
    to: "/kennisbank/seo-copywriter/",
    note: "Het verschil met een gewone tekstschrijver.",
  },
  {
    label: "Merkpositionering vastleggen",
    to: "/kennisbank/merkpositionering/",
    note: "De invulzin die je positionering scherp maakt.",
  },
];

export const KENNISBANK_CRO_LINKS: InterneLink[] = [
  {
    label: "Het KISS-principe in je marketing",
    to: "/kennisbank/kiss-principe/",
    note: "Drie tests die je vandaag op je site kunt doen.",
  },
  {
    label: "CTR: wat is een goede click-through rate?",
    to: "/kennisbank/ctr/",
    note: "Zichtbaarheid is pas iets waard als er geklikt wordt.",
  },
  {
    label: "Opt-in: toestemming voor e-mail",
    to: "/kennisbank/opt-in/",
    note: "Wat de regels zijn en waarom het je bereik beschermt.",
  },
];

/** Ondersteunende dienstpagina's, zodat ze ook buiten het menu links krijgen. */
export const DIENST_LINKS: InterneLink[] = [
  {
    label: "Website laten bouwen",
    to: "/online-marketing/website-advies/",
    note: "In drie dagen live, vanaf € 499,-.",
  },
  {
    label: "E-mailmarketing uitbesteden",
    to: "/online-marketing/emailmarketing/",
    note: "Rendement uit contacten die je al hebt.",
  },
  {
    label: "WordPress onderhoud",
    to: "/online-marketing/wordpress-onderhoud/",
    note: "Updates, back-ups en beveiliging op vaste basis.",
  },
  {
    label: "Google Tag Manager inrichten",
    to: "/online-marketing/google-tag-manager-inrichten/",
    note: "Meting waar je daadwerkelijk op kunt sturen.",
  },
  {
    label: "Social media marketing",
    to: "/online-marketing/social-media-marketing/",
    note: "Bereik dat je andere pijlers versterkt.",
  },
  {
    label: "Local SEO voor je werkgebied",
    to: "/online-marketing/local-seo/",
    note: "Zichtbaar in het lokale zoekresultaat en op de kaart.",
  },
  {
    label: "Over B. Analyzed en Britt Daemen",
    to: "/online-marketing-bedrijf/",
    note: "Wie het werk doet en waarom dat één vaste persoon is.",
  },
  {
    label: "Kennisbank met begrippen",
    to: "/kennisbank/",
    note: "SEO-, Ads- en CRO-begrippen in gewone taal.",
  },
]

/** CMS- en webshopbegrippen, voor de pagina's over website en onderhoud. */
export const KENNISBANK_CMS_LINKS: InterneLink[] = [
  { label: "Wat is een CMS?", to: "/kennisbank/cms-content-management-systeem/", note: "Je website beheren zonder programmeerkennis." },
  { label: "WordPress: voordelen en onderhoud", to: "/kennisbank/wordpress/", note: "Het meest gebruikte CMS, en de valkuilen." },
  { label: "Joomla als CMS", to: "/kennisbank/joomla/", note: "Waar het sterk in is en wanneer je overstapt." },
  { label: "Magento voor grotere webshops", to: "/kennisbank/magento/", note: "Wanneer het past en wanneer het te zwaar is." },
  { label: "PrestaShop voor het middensegment", to: "/kennisbank/prestashop/", note: "Zelf hosten, zelf beheren." },
  { label: "Staging: testen voordat je live gaat", to: "/kennisbank/staging/", note: "Hoe je voorkomt dat een update je posities kost." },
]
