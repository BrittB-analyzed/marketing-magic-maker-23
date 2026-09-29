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
    title: "Online Marketingbureau Limburg | SEO, GEO, Ads & CRO",
    description: "Online marketingbureau uit Limburg. 15 jaar ervaring, 9,8 uit 48 reviews en een vast aanspreekpunt in plaats van een accountmanager. Vraag je gratis scan aan.",
  },
  "/seo-limburg/": {
    title: "SEO Limburg | SEO specialist met een 9,8 uit 48 reviews",
    description: "SEO-specialist in Limburg met 15 jaar ervaring en een 9,8 uit 48 reviews. Een vast aanspreekpunt en elke maand een video met wat er is gebeurd en wat het deed.",
  },
  "/seo-venlo/": {
    title: "SEO Venlo | Vaste SEO-specialist, beoordeeld met 9,8",
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
    title: "Marketingbureau Limburg | 15 jaar ervaring, 9,8 score",
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
