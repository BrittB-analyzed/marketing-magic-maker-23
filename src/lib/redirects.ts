/**
 * Permanente doorverwijzingen van oude URL's naar hun huidige pagina.
 *
 * De oude WordPress-site gebruikte een /nl/-voorvoegsel en een aantal pagina's
 * die nu anders heten. Die URL's hebben nog links van andere sites, dus ze
 * mogen geen 404 geven: elke link die doodloopt, is weggegooide autoriteit.
 *
 * Sleutels zijn paden mét sluitende slash en in kleine letters.
 */
const REDIRECTS: Record<string, string> = {
  // Oude taalmap
  "/nl/": "/",
  "/nl/seo-bureau/": "/seo-bureau/",
  "/nl/seo-expert/": "/seo-expert/",
  "/nl/seo-consultant/": "/seo-consultant/",
  "/nl/seo-limburg/": "/seo-limburg/",
  "/nl/seo-venlo/": "/seo-venlo/",
  "/nl/online-marketing-venlo/": "/online-marketing-venlo/",
  "/nl/online-marketing-limburg/": "/marketingbureau-limburg/",
  "/nl/seo-specialist/": "/online-marketing/zoekmachine-optimalisatie-specialist/",
  "/nl/sea-specialist/": "/online-marketing/google-ads-uitbesteden/",
  "/nl/linkbuilding-uitbesteden/": "/online-marketing/linkbuilding-uitbesteden/",
  "/nl/freelance-online-marketeer/": "/seo-consultant/",
  "/nl/seo-specialist-werkt-graag-met-wordpress/": "/online-marketing/wordpress-onderhoud/",
  "/nl/het-belang-van-een-natuurlijk-linkprofiel/": "/kennisbank/backlinks/",

  // Pagina's die onder een andere naam terugkwamen
  "/seo-specialist/": "/online-marketing/zoekmachine-optimalisatie-specialist/",
  "/sea-specialist/": "/online-marketing/google-ads-uitbesteden/",
  "/linkbuilding-uitbesteden/": "/online-marketing/linkbuilding-uitbesteden/",
  "/online-marketing-limburg/": "/marketingbureau-limburg/",
  "/internet-marketing-bureau/": "/online-marketing-bedrijf/",
  "/marketing-automation-software/": "/kennisbank/wat-is-marketing-automation/",
  "/google-reviews-niet-zichtbaar/": "/hoog-in-google-mijn-bedrijf-ranken/",
  "/zoekcampagnes-optimaliseren-in-adwords-hoe-doe-je-dat/":
    "/online-marketing/google-ads-uitbesteden/",
  "/blog-online-marketeer/": "/blog/",

  // Oude scanpagina's
  "/seo-scan/": "/gratis-seo-scan/",
  "/seo-ranking-check/": "/gratis-seo-scan/",
  "/technische-seo-scan/": "/gratis-seo-scan/",
};

/**
 * Geeft het nieuwe pad terug voor een oude URL, of null als er niets
 * doorverwezen hoeft te worden. Zoekopdrachten in de URL blijven staan.
 */
export function findRedirect(url: URL): string | null {
  const path = url.pathname.toLowerCase();
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  const target = REDIRECTS[withSlash];
  if (!target) return null;
  return `${target}${url.search}`;
}
