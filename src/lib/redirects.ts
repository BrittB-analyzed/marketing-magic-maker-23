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

  // Oude blogposts van de WordPress-site zonder eigen tegenhanger
  "/het-belang-van-een-goede-seo-titel/": "/kennisbank/html-titel/",
  "/het-belang-van-een-goede-website-structuur-voor-seo/": "/gids-voor-een-goede-sitestructuur/",
  "/de-fundamentele-elementen-van-google-analytics/": "/kennisbank/google-analytics/",
  "/heb-jij-je-adwords-al-gekoppeld-aan-analytics/": "/kennisbank/google-analytics/",
  "/sterke-seo-teksten-schrijven/": "/online-marketing/seo-teksten-laten-schrijven/",
  "/het-belang-van-adwords-onderhoud/": "/online-marketing/google-ads-uitbesteden/",
  "/verzamel-reviews-op-google-mijn-bedrijf/": "/online-marketing/local-seo/",
  "/belang-seo-marketing-covid-19/": "/online-marketing/seo-uitbesteden/",
  "/adwords-strategie-voor-webshops/": "/online-marketing/google-ads-uitbesteden/",
  "/top-seo-plugins-wordpress/": "/online-marketing/wordpress-onderhoud/",
  "/hoog-in-google-lokale-seo-gebruik-van-plaatsnamen/": "/online-marketing/local-seo/",
  "/hoe-seo-en-sea-elkaar-versterken/": "/online-marketing/seo-en-sea/",
  "/seo-en-wordpress-boost-je-verkeer-met-deze-handige-tips/": "/online-marketing/wordpress-onderhoud/",
  "/wat-is-structured-data/": "/wat-is-schema-markup/",
  "/seo-specialist-worden-dat-kan-in-6-stappen/": "/online-marketing/zoekmachine-optimalisatie-specialist/",
  "/featured-snippets-jouw-website-bovenaan-op-google/": "/wat-is-schema-markup/",
  "/google-mijn-bedrijf-aanmaken/": "/online-marketing/local-seo/",
  "/marketing-automation-door-b2b-bureau/": "/kennisbank/wat-is-marketing-automation/",
  "/wordpress-seo-handleiding-2021-18-belangrijke-tips/": "/online-marketing/wordpress-onderhoud/",
  "/maak-jouw-technische-seo-in-orde-met-deze-checklist/": "/technische-seo/",
  "/tools-seo-techniek/": "/technische-seo/",
  "/google-search-console-website-optimalisatie/": "/kennisbank/google-search-console/",
  "/de-11-beste-gratis-en-betaalde-zoekwoorden-tools/": "/kennisbank/zoekwoorden/",
  "/linkbuilding-strategiee-in-2021/": "/online-marketing/linkbuilding-uitbesteden/",
  "/linkbuilding-2021-12-factoren-die-zorgen-voor-een-top-linkbuildingprofiel/": "/online-marketing/linkbuilding-uitbesteden/",
  "/waarom-een-merk-campagne-in-adwords-belangrijk-is/": "/online-marketing/google-ads-uitbesteden/",
  "/het-belang-van-een-kennisbank-voor-seo/": "/online-marketing/seo-uitbesteden/",
  "/de-7-must-have-chrome-extensions-voor-een-seo-specialist/": "/online-marketing/seo-uitbesteden/",
  "/yoast-plugin-uitgelicht/": "/online-marketing/wordpress-onderhoud/",
  "/waarom-de-seo-specialist-graag-met-wordpress/": "/online-marketing/wordpress-onderhoud/",
  "/wat-is-de-invloed-van-hosting-op-je-seo/": "/online-marketing/wordpress-onderhoud/",
  "/seo-specialist-inhuren-of-seo-zelf-doen/": "/online-marketing/seo-uitbesteden/",
  "/de-wereld-als-werkplek-hoe-is-dat-nu-echt/": "/blog/",
  "/het-belang-van-een-natuurlijk-linkprofiel/": "/online-marketing/linkbuilding-uitbesteden/",
  "/ssl-certificaat-is-een-must-om-goed-gevonden-worden/": "/online-marketing/wordpress-onderhoud/",
  "/travel-marketing-trends-voor-2021/": "/wat-blijft-er-in-2026-hetzelfde-op-seo-gebied/",
  "/seo-en-sea-wat-zijn-de-overeenkomsten-en-verschillen/": "/online-marketing/seo-en-sea/",
  "/11-seo-linkbuilding-methodes-voor-2021-2/": "/online-marketing/linkbuilding-uitbesteden/",
  "/de-5-belangrijkste-seo-trends-in-2021/": "/wat-blijft-er-in-2026-hetzelfde-op-seo-gebied/",
  "/call-tracking-het-rendement-van-telefonische-oproepen/": "/online-marketing/google-ads-uitbesteden/",
  "/structured-data-rich-snippets/": "/wat-is-schema-markup/",
  "/kwalitatief-zoekwoorden-onderzoek-in-slechts-30-minuten/": "/kennisbank/zoekwoorden/",
  "/de-pijlers-van-seo/": "/online-marketing/seo-uitbesteden/",
  "/wordpress-seo-vriendelijk-waarom-b-analyzed-graag-met-wordpress-werkt/": "/online-marketing/wordpress-onderhoud/",
  "/sea-naar-een-hoger-niveau-tillen-met-ppc-extensies/": "/online-marketing/google-ads-uitbesteden/",
  "/verbeter-de-vindbaarheid-van-je-site-met-de-volgende-tips/": "/kennisbank/bovenaan-in-google/",
  "/backlinks-verzamelen-wat-is-belangrijk/": "/online-marketing/linkbuilding-uitbesteden/",
  "/google-advertenties-biedstrategieen-wat-wanneer-te-doen-2/": "/online-marketing/google-ads-uitbesteden/",
  "/display-marketing-wat-werkt-wel-en-wat-niet/": "/online-marketing/display-advertisement/",
  "/praktische-tips-google-maps-vergroten-zichtbaarheid/": "/online-marketing/local-seo/",
  "/seo-uitbesteden-en-scoren-met-je-website-en-of-webshop/": "/online-marketing/seo-uitbesteden/",
  "/local-seo-hoger-scoren-in-je-eigen-regio/": "/online-marketing/local-seo/",
  "/wordpress-website-sneller-maken/": "/online-marketing/wordpress-onderhoud/",
  "/waarom-bloggen-belangrijk-is-voor-de-seo-van-je-website/": "/online-marketing/seo-teksten-laten-schrijven/",
  "/hoe-te-connecten-met-de-doelgroepen-gen-x-millennials-en-gen-z-met-je-online-business/": "/blog/",
  "/7-redenen-waarom-jij-aantrekkelijke-afbeeldingen-videos-en-visuele-elementen-nodig-hebt/": "/blog/",
  "/google-news-seo-hoe-komt-jouw-content-in-google-nieuws/": "/online-marketing/seo-uitbesteden/",
  "/zoekwoorden-voor-content-creatie-hoe-je-prioriteiten-stelt-voor-seo/": "/online-marketing/seo-teksten-laten-schrijven/",
  "/de-5-meest-geavanceerde-e-mail-marketing-platforms/": "/online-marketing/emailmarketing/",
  "/affiliate-marketing-de-ontwikkelingen-in-2023/": "/kennisbank/affiliate-marketing/",
  "/de-toekomst-van-seo-en-de-rol-van-chatgpt/": "/ai-in-seo-de-toekomst-van-zoekmachineoptimalisatie/",
  "/social-media-trends-wat-kun-je-verwachten-in-2023/": "/online-marketing/social-media-marketing/",
  "/seo-wat-is-het-en-waarom-besteed-ik-het-uit/": "/online-marketing/seo-uitbesteden/",
  "/5-tips-voor-betere-rapportage-van-local-seo/": "/online-marketing/local-seo/",
  "/seo-prestaties-meten-search-console/": "/kennisbank/google-search-console/",
  "/creatieve-manieren-om-van-de-google-keyword-planner-tool-gebruik-te-maken/": "/online-marketing/google-ads-uitbesteden/",
  "/lokale-klanten-verkrijgen/": "/online-marketing/local-seo/",
  "/branded-keywords/": "/online-marketing/google-ads-uitbesteden/",
  "/google-adsprestaties-verbeteren/": "/online-marketing/google-ads-uitbesteden/",
  "/omgekeerd-zoeken-naar-afbeeldingen/": "/blog/",
  "/surfer-seo-review/": "/online-marketing/seo-uitbesteden/",
  "/de-seo-trends-van-2022/": "/wat-blijft-er-in-2026-hetzelfde-op-seo-gebied/",
  "/seo-teksten-schrijven-2/": "/online-marketing/seo-teksten-laten-schrijven/",
  "/boost-google-ads/": "/online-marketing/google-ads-uitbesteden/",
  "/website-hoger-in-google/": "/kennisbank/bovenaan-in-google/",
  "/wat-is-linkbuilding-en-waarom-is-het-belangrijk-voor-jouw-website-update-2021/": "/online-marketing/linkbuilding-uitbesteden/",
  "/seo-automatisering-voor-het-mkb-efficienter-en-slimmer-groeien/": "/ai-in-seo-de-toekomst-van-zoekmachineoptimalisatie/",
  "/perplexity-ai-de-toekomst-van-ai-aangedreven-informatieanalyse/": "/ai-in-seo-de-toekomst-van-zoekmachineoptimalisatie/",
  "/belangrijke-google-search-console-metrics-om-elke-maand-te-volgen/": "/kennisbank/google-search-console/",
  "/seo-domeinextensies/": "/online-marketing/seo-uitbesteden/",
  "/de-6-beste-seo-plugins-voor-wordpress/": "/online-marketing/wordpress-onderhoud/",
  "/18-gratis-content-marketing-tools/": "/kennisbank/content-marketing/",
  "/top-4-gratis-zoekwoorden-tools/": "/kennisbank/zoekwoorden/",
  "/nummer-1-in-google-ranken/": "/kennisbank/bovenaan-in-google/",
  "/google-mijn-bedrijf/": "/online-marketing/local-seo/",
  "/zoekwoorden-onderzoek-wat-is-het-en-waarom-is-het-belangrijk/": "/kennisbank/zoekwoorden/",
  "/taxibedrijf-adwords-tips/": "/online-marketing/google-ads-uitbesteden/",
  "/hoger-in-google-met-wordpress/": "/online-marketing/wordpress-onderhoud/",
  "/remarketing-google-adwords/": "/online-marketing/google-ads-uitbesteden/",
  "/bespaar-onnodige-advertentiekosten-en-maak-gebruik-van-seo/": "/online-marketing/google-ads-uitbesteden/",
  "/ben-jij-lokaal-goed-zichtbaar-in-google-en-op-social-media/": "/online-marketing/local-seo/",
  "/wat-is-search-console-en-wat-kun-je-ermee/": "/kennisbank/google-search-console/",
  "/facebook-retargeting/": "/online-marketing/social-media-marketing/",
  "/welke-seo-cursus-past-bij-mij/": "/online-marketing/zoekmachine-optimalisatie-specialist/",
  "/nummer-1-positie/": "/kennisbank/bovenaan-in-google/",
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
