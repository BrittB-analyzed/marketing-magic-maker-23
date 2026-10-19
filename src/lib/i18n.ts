/**
 * Taalversies en hreflang.
 *
 * De site is Nederlands met een Engelse sectie onder /en/. Die keuze voor een
 * submap in plaats van een subdomein of een los domein is bewust: alle
 * autoriteit blijft op één hostnaam staan, en dat is bij een site met beperkte
 * domeinautoriteit de enige verdedigbare optie.
 *
 * BELANGRIJK voor hreflang: alleen pagina's die écht een tegenhanger in de
 * andere taal hebben, krijgen hreflang-annotaties. Een hreflang die naar een
 * pagina wijst die niet hetzelfde onderwerp behandelt, wordt door Google
 * genegeerd en kan het hele cluster ongeldig maken. De Nederlandse lokale
 * pagina's (SEO Venlo, SEO Limburg) en de kennisbank hebben daarom géén
 * Engelse variant en ook geen hreflang: ze bedienen een zoekvraag die in het
 * Engels niet bestaat.
 */

import { SITE_URL } from "@/data/organisatie";

export type Locale = "nl" | "en";

export const DEFAULT_LOCALE: Locale = "nl";

/**
 * Nederlandse pagina en de Engelse tegenhanger ervan.
 * Sleutel is het NL-pad, waarde het EN-pad. Beide met slash aan het eind.
 */
export const TAALPAREN: Record<string, string> = {
  "/": "/en/",
  "/online-marketing/": "/en/services/",
  "/online-marketing/seo-uitbesteden/": "/en/services/seo/",
  "/online-marketing/geo-optimalisatie/": "/en/services/geo/",
  "/online-marketing/google-ads-uitbesteden/": "/en/services/google-ads/",
  "/online-marketing/conversie-optimalisatie/": "/en/services/conversion-optimisation/",
  "/tarieven-seo/": "/en/pricing/",
  "/online-marketing-bedrijf/": "/en/about/",
  "/online-marketing-cases/": "/en/case-studies/",
  "/contact/": "/en/contact/",
  "/gratis-seo-scan/": "/en/free-scan/",
};

/** Omgekeerde index: EN-pad naar NL-pad. */
export const TAALPAREN_OMGEKEERD: Record<string, string> = Object.fromEntries(
  Object.entries(TAALPAREN).map(([nl, en]) => [en, nl]),
);

/** Normaliseert een pad naar één vorm: kleine letters, slash aan het eind. */
export function normaliseerPad(pathname: string) {
  const [pad] = pathname.split(/[?#]/);
  const kaal = pad.replace(/\/+$/, "").toLowerCase();
  return kaal === "" ? "/" : `${kaal}/`;
}

/** De taal van een pad. Alles onder /en/ is Engels, de rest Nederlands. */
export function localeVanPad(pathname: string): Locale {
  const pad = normaliseerPad(pathname);
  return pad === "/en/" || pad.startsWith("/en/") ? "en" : "nl";
}

/**
 * De tegenhanger van een pad in de andere taal, of null als die er niet is.
 * Wordt gebruikt voor de taalwissel in de navigatie.
 */
export function tegenhanger(pathname: string): string | null {
  const pad = normaliseerPad(pathname);
  return localeVanPad(pad) === "nl" ? (TAALPAREN[pad] ?? null) : (TAALPAREN_OMGEKEERD[pad] ?? null);
}

export type HreflangLink = { hreflang: string; href: string };

/**
 * De hreflang-set voor een pad. Leeg als de pagina geen tegenhanger heeft:
 * een hreflang-cluster van één pagina heeft geen betekenis.
 *
 * - nl-NL en nl-BE wijzen naar de Nederlandse versie. België krijgt een eigen
 *   annotatie omdat het werkgebied Nederland én België is.
 * - en-GB wijst naar de Engelse versie voor het Verenigd Koninkrijk.
 * - en zonder regio vangt alle overige Engelstaligen in Europa af.
 * - x-default wijst naar de Engelse versie: dat is de internationale
 *   terugvaloptie voor bezoekers die geen van beide talen matchen.
 */
export function hreflangLinks(pathname: string): HreflangLink[] {
  const pad = normaliseerPad(pathname);
  const locale = localeVanPad(pad);
  const nlPad = locale === "nl" ? pad : TAALPAREN_OMGEKEERD[pad];
  const enPad = locale === "en" ? pad : TAALPAREN[pad];
  if (!nlPad || !enPad) return [];

  const nlUrl = `${SITE_URL}${nlPad}`;
  const enUrl = `${SITE_URL}${enPad}`;
  return [
    { hreflang: "nl-NL", href: nlUrl },
    { hreflang: "nl-BE", href: nlUrl },
    { hreflang: "nl", href: nlUrl },
    { hreflang: "en-GB", href: enUrl },
    { hreflang: "en", href: enUrl },
    { hreflang: "x-default", href: enUrl },
  ];
}

/** og:locale-waarde per taal. */
export function ogLocale(locale: Locale) {
  return locale === "en" ? "en_GB" : "nl_NL";
}

/** De taal waarin de pagina geschreven is, voor schema.org `inLanguage`. */
export function schemaTaal(locale: Locale) {
  return locale === "en" ? "en-GB" : "nl-NL";
}

/**
 * De og:locale-tags voor een pagina: de eigen taal plus de alternatieve taal
 * als die bestaat. Facebook en LinkedIn gebruiken dit om de juiste variant te
 * tonen; Google leest alleen de hreflang-links.
 */
export function localeMeta(pathname: string) {
  const locale = localeVanPad(pathname);
  const tags: { property: string; content: string }[] = [
    { property: "og:locale", content: ogLocale(locale) },
  ];
  if (tegenhanger(pathname)) {
    tags.push({ property: "og:locale:alternate", content: ogLocale(locale === "nl" ? "en" : "nl") });
  }
  return tags;
}
