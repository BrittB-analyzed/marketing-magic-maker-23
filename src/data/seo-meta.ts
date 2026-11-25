export interface SeoEntry {
  title: string;
  description: string;
}

/** Auteur en socialaccount van B. Analyzed (niet van de bouwtool). */
export const SITE_AUTHOR = "Britt Daemen";
export const TWITTER_SITE = "@b_analyzed";

/**
 * Titles en meta descriptions per URL-pad (altijd met slash aan het eind).
 * Regel: title max. 60 tekens, meta description max. 160 tekens.
 * De controle hierop draait automatisch mee in de build (scripts/check-seo-meta.mjs).
 */
export const SEO_META: Record<string, SeoEntry> = {
  "/": {
    title: "Online Marketing Bureau voor het MKB | SEO, GEO & Ads",
    description: "Online marketingbureau voor het MKB, gevestigd in Noord-Limburg. 15 jaar ervaring, 9,8 uit 48 reviews en een vast aanspreekpunt. Vraag je gratis scan aan.",
  },
  "/seo-performance-meten-2026/": {
    title: "SEO-performance meten in 2026: KPI's die omzet opleveren",
    description: "Stop met vanity metrics. Ontdek welke SEO-KPI's in 2026 écht tellen, hoe je AI-zichtbaarheid meet en hoe je SEO koppelt aan conversies en omzet.",
  },
  "/seo-limburg/": {
    title: "SEO Limburg | SEO-specialist Limburg met 9,8 uit 48 reviews",
    description: "SEO-specialist in Limburg met 15 jaar ervaring en een 9,8 uit 48 reviews. Een vast aanspreekpunt en elke maand een video met wat er is gebeurd en wat het deed.",
  },
  "/geo-specialist-limburg/": {
    title: "GEO-specialist Limburg | Genoemd worden in ChatGPT & AI",
    description: "GEO-specialist in Limburg: zorg dat ChatGPT, Gemini en Google AI Overviews jouw bedrijf noemen. 15 jaar ervaring, 9,8 uit 48 reviews, één aanspreekpunt.",
  },
  "/geo-specialist-venlo/": {
    title: "GEO-specialist Venlo | Zichtbaar in ChatGPT en Google AI",
    description: "GEO-specialist uit Noord-Limburg: zorg dat ChatGPT, Gemini en Google AI jouw Venlose bedrijf aanbevelen. Vast aanspreekpunt, 9,8 uit 48 reviews.",
  },
  "/sea-specialist-noord-limburg/": {
    title: "SEA-specialist Noord-Limburg | Google Ads Venlo",
    description: "SEA- en SEO-specialist uit Arcen (Venlo) voor Noord-Limburg. Google Ads die aanvragen opleveren, 15 jaar ervaring, 9,8 uit 48 reviews.",
  },
  "/seo-venlo/": {
    title: "SEO Venlo | SEO-bureau en SEO-specialist in Venlo",
    description: "SEO in Venlo door Britt Daemen: 15 jaar ervaring, 9,8 uit 48 reviews en een vast aanspreekpunt. Uitgebreide audit vanaf 599 euro, doorlopend vanaf 999 euro.",
  },
  "/seo-eindhoven/": {
    title: "SEO Eindhoven | SEO-bureau met 15 jaar ervaring in SEO",
    description: "SEO-bureau voor ondernemers in Eindhoven. 15 jaar ervaring, 9,8 uit 48 reviews en een vaste specialist die je strategie zelf bedenkt en ook zelf uitvoert.",
  },
  "/seo-rotterdam/": {
    title: "SEO Bureau Rotterdam | 15 jaar ervaring, 9,8 score",
    description: "SEO-bureau voor Rotterdamse ondernemers. Een vaste specialist, maandelijkse video-rapportage en 15 jaar ervaring. Beoordeeld met een 9,8 uit 48 reviews.",
  },
  "/seo-nijmegen/": {
    title: "SEO Nijmegen | SEO-specialist met 9,8 uit 48 reviews",
    description: "SEO in Nijmegen met een vast aanspreekpunt en 15 jaar ervaring. Elke maand een video waarin je ziet wat er is gedaan en wat het opleverde. Audit vanaf 599 euro.",
  },
  "/seo-maastricht/": {
    title: "SEO Bureau Maastricht | Vaste specialist, 9,8 score",
    description: "SEO-bureau in Maastricht met 15 jaar ervaring en een 9,8 uit 48 reviews. Geen accountmanager maar een vaste specialist die je strategie bedenkt en uitvoert.",
  },
  "/marketingbureau-limburg/": {
    title: "Online Marketing Bureau Limburg | 9,8 uit 48 reviews",
    description: "Marketingbureau in Limburg voor SEO, Google Ads en conversie-optimalisatie. 15 jaar ervaring, 9,8 uit 48 reviews en een vast aanspreekpunt. Vraag je scan aan.",
  },
  "/online-marketing-venlo/": {
    title: "Online Marketing Bureau Venlo | SEO, Google Ads & CRO",
    description: "Online marketingbureau in Venlo met 15 jaar ervaring en een 9,8 uit 48 reviews. SEO, Google Ads en CRO bij een vast aanspreekpunt, vanaf 999 euro per maand.",
  },
  "/seo-voor-mkb/": {
    title: "SEO voor MKB | Meer aanvragen uit Google en uit AI",
    description: "SEO voor het MKB door een bureau met 15 jaar ervaring en 220 geholpen klanten. Een vast aanspreekpunt en een uitgebreide audit vanaf 599 euro. Vraag je scan aan",
  },
  "/seo-expert/": {
    title: "SEO Expert Inhuren | 15 jaar ervaring, 9,8 uit reviews",
    description: "Een SEO-expert inhuren die je strategie bedenkt en ook zelf uitvoert. 15 jaar ervaring, 9,8 uit 48 reviews en elke maand een video met wat er is gebeurd.",
  },
  "/online-marketing/seo-uitbesteden/": {
    title: "SEO Uitbesteden | Vaste specialist, 9,8 uit 48 reviews",
    description: "SEO uitbesteden aan een bureau met 15 jaar ervaring en een 9,8 uit 48 reviews. Een vast aanspreekpunt, maandelijkse video en een vaste prijs vanaf 999 euro.",
  },
  "/online-marketing/google-ads-uitbesteden/": {
    title: "Google Ads Specialist Inhuren of Ads Uitbesteden",
    description: "Google Ads uitbesteden aan een vaste Google Ads-specialist. Adwords-campagnes wekelijks geoptimaliseerd in je eigen account. Audit vanaf 599 euro per keer.",
  },
  "/online-marketing/conversie-optimalisatie/": {
    title: "Conversie Optimalisatie Bureau | Meer uit je verkeer",
    description: "Conversie optimalisatie bureau voor het MKB: zo bereken je je conversiepercentage, welke tests je in welke volgorde doet en wat het oplevert. Audit vanaf 599.",
  },
  "/online-marketing/geo-optimalisatie/": {
    title: "GEO Optimalisatie | Genoemd worden in ChatGPT & AI",
    description: "GEO-optimalisatie zorgt dat je merk genoemd wordt in ChatGPT, Gemini en AI Overviews. 15 jaar ervaring in zoekmachines, nu toegepast op antwoordmachines.",
  },
  "/online-marketing/linkbuilding-uitbesteden/": {
    title: "Linkbuilding Uitbesteden | Vanaf 125 euro per maand",
    description: "Linkbuilding uitbesteden aan een bureau met een netwerk van 2.500 sites. Pakketten vanaf 125 euro per maand, Nederlandse IP-adressen en minimaal DA 8.",
  },
  "/online-marketing/uitbesteden/": {
    title: "Online Marketing Uitbesteden | Vanaf 999 euro per maand",
    description: "Online marketing uitbesteden aan een vaste specialist met 15 jaar ervaring. SEO, GEO, Google Ads en CRO in een plan, vanaf 999 euro per maand. Score: 9,8.",
  },
  "/online-marketing/emailmarketing/": {
    title: "E-mailmarketing Uitbesteden | Vaste specialist, 9,8",
    description: "E-mailmarketing uitbesteden aan een bureau met 15 jaar ervaring. Campagnes, automations en rapportage bij een vast aanspreekpunt. Beoordeeld met een 9,8.",
  },
  "/online-marketing/seo-teksten-laten-schrijven/": {
    title: "SEO Teksten Uitbesteden | Teksten die ook AI citeert",
    description: "SEO-teksten laten schrijven die scoren in Google en geciteerd worden door ChatGPT en AI Overviews. 15 jaar ervaring en altijd een vaste prijs vooraf per tekst.",
  },
  "/top-10-zoekmachines-in-nederland-welke-zoekmachines-hebben-het-grootste-marktaandeel/": {
    title: "Top 10 Zoekmachines in Nederland | Marktaandeel 2026",
    description: "Welke zoekmachines worden in Nederland het meest gebruikt? Een actueel overzicht van de top 10 en hun marktaandeel, inclusief het aandeel van AI-zoekmachines.",
  },
  "/omnichannel-marketing/": {
    title: "Wat is Omnichannel Marketing? Betekenis en Voorbeelden",
    description: "Omnichannel marketing verbindt al je verkoopkanalen tot een klantreis. Lees de betekenis, het verschil met multichannel en concrete voorbeelden uit de praktijk.",
  },
  "/google-ai-mode/": {
    title: "Google AI-modus | Wat het is en hoe je erin komt te staan",
    description: "De AI-modus van Google beantwoordt zoekopdrachten direct in plaats van links te tonen. Lees wat dat betekent en hoe je als bron wordt meegenomen in dat antwoord",
  },
  "/wat-kost-een-website-laten-bouwen/": {
    title: "Wat Kost een Website Laten Bouwen? Prijzen voor 2026",
    description: "Een website laten bouwen kost in 2026 tussen 1.500 en 15.000 euro. Bekijk de prijzen per type site en de kosten die ondernemers vaak over het hoofd zien.",
  },
  "/online-marketing-bedrijf/": {
    title: "Over B. Analyzed | Britt Daemen, je vaste specialist",
    description: "B. Analyzed is opgericht door Britt Daemen, 15 jaar actief in SEO en Google Ads. Geen accountmanager maar een vaste specialist. Beoordeeld met een 9,8.",
  },
  "/tarieven-seo/": {
    title: "SEO Kosten en Tarieven | Audit 599, pakket 999 euro",
    description: "Wat kost SEO? Audit vanaf 599 euro, doorlopend pakket vanaf 999 euro per maand, losse uren 90 euro. Plus wat je bij welk budget realistisch mag verwachten.",
  },
  "/online-marketing/seo-advies/": {
    title: "SEO Advies | Concreet plan zonder maandverplichting",
    description: "SEO-advies zonder verplicht maandpakket: een eenmalige analyse met een actielijst die je zelf kunt uitvoeren. Vanaf 599 euro, binnen tien werkdagen klaar.",
  },
  "/online-marketing/zoekmachine-optimalisatie-specialist/": {
    title: "Zoekmachine Optimalisatie Specialist | 9,8 uit 48",
    description: "Een zoekmachine optimalisatie specialist die je strategie bedenkt en zelf uitvoert. 15 jaar ervaring, 9,8 uit 48 reviews. Audit vanaf 599 euro, eenmalig.",
  },
  "/online-marketing/seo-en-sea/": {
    title: "SEO en SEA | Zo versterken ze elkaar in je budget",
    description: "SEO en SEA samen inzetten levert meer op dan apart. Vergelijkingstabel, rekenvoorbeeld van de budgetverdeling en uitleg over zoekmachineadverteren.",
  },
  "/top-20-gratis-online-bedrijvengidsen-van-nederland-2/": {
    title: "20 Gratis Online Bedrijvengidsen in Nederland (2026)",
    description: "Een overzicht van 20 Nederlandse bedrijvengidsen waar je je bedrijf gratis kunt vermelden, met per gids wat de vermelding oplevert voor je lokale vindbaarheid.",
  },
  // --- Engelse sectie (/en/). Brits Engels, Europese targeting. ---
  "/en/": {
    title: "Dutch SEO & GEO Agency for Europe | B. Analyzed",
    description:
      "An SEO, GEO and Google Ads agency from the Netherlands, working across Europe. 15 years of experience, rated 9.8, one fixed point of contact.",
  },
  "/en/services/": {
    title: "Our Services | SEO, GEO, Google Ads and CRO",
    description:
      "Four pillars instead of thirteen separate services: SEO, GEO, Google Ads and conversion optimisation. What each one does and when it pays off.",
  },
  "/en/services/seo/": {
    title: "SEO Services | Get Found in Google Across Europe",
    description:
      "SEO services from a Dutch agency working across Europe. Technical SEO, content and authority in one plan. Audit from 599 euro, ongoing from 999.",
  },
  "/en/services/geo/": {
    title: "GEO | Get Cited in ChatGPT, Gemini and AI Answers",
    description:
      "Generative engine optimisation: get your brand named and cited in ChatGPT, Gemini, Perplexity and Google AI Overviews, not just ranked in Google.",
  },
  "/en/services/google-ads/": {
    title: "Google Ads Management | A Specialist, Not a Bot",
    description:
      "Google Ads managed by one specialist who optimises weekly. You keep ownership of your account. Audit from 599 euro, ongoing from 999 a month.",
  },
  "/en/services/conversion-optimisation/": {
    title: "Conversion Optimisation | More From the Same Traffic",
    description:
      "Conversion optimisation for SMEs: how to calculate your conversion rate, which tests to run in which order, and what it costs. Audit from 599 euro.",
  },
  "/en/pricing/": {
    title: "Pricing | Audit 599 Euro, Ongoing From 999 a Month",
    description:
      "What SEO costs at B. Analyzed: a one-off audit from 599 euro, an ongoing SEO and GEO package from 999 euro a month, and loose hours at 90 euro.",
  },
  "/en/about/": {
    title: "About B. Analyzed | Britt Daemen, Your Specialist",
    description:
      "B. Analyzed was founded by Britt Daemen, 15 years in SEO and Google Ads. No account manager, one fixed specialist. Rated 9.8 out of 48 reviews.",
  },
  "/en/case-studies/": {
    title: "Case Studies | Real Numbers From Real Clients",
    description:
      "Case studies with verifiable numbers: rankings, organic traffic and conversion. Including a nine-year number one and a 733% rise in organic traffic.",
  },
  "/en/contact/": {
    title: "Contact | Speak to Britt Daemen Directly",
    description:
      "Get in touch with B. Analyzed in Venlo, the Netherlands. Call, email or WhatsApp. You always speak to the specialist who does the work.",
  },
  "/en/free-scan/": {
    title: "Free SEO & GEO Scan | Personal Video Analysis",
    description:
      "Request a free scan of your visibility in Google and in AI answers. You get a personal video analysis within two working days. No obligation.",
  },
};

type MetaTag = Record<string, string>;

interface SeoOptions {
  ogType?: string;
  twitterCard?: string;
}

/** Bouwt de volledige set metatags voor een pad uit SEO_META. */
export function seoMeta(path: string, opts: SeoOptions = {}): MetaTag[] {
  const entry = SEO_META[path];
  if (!entry) return [];
  return buildMeta(entry.title, entry.description, opts);
}

/** Zelfde set metatags, maar met een eigen title/description als er geen override is. */
export function seoMetaWithFallback(
  path: string,
  title: string,
  description: string,
  opts: SeoOptions = {},
): MetaTag[] {
  const entry = SEO_META[path];
  return buildMeta(entry?.title ?? title, entry?.description ?? description, opts);
}

function buildMeta(title: string, description: string, opts: SeoOptions): MetaTag[] {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: opts.ogType ?? "website" },
    { name: "twitter:card", content: opts.twitterCard ?? "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

// Elk cijfer of elke claim in deze teksten moet onderbouwd kunnen worden met een
// dashboard, een factuur of een reviewprofiel.
