/**
 * Permanente doorverwijzingen van de oude WordPress-URL's naar de inhoudelijk
 * dichtstbijzijnde pagina op deze site.
 *
 * Regel: nooit naar de homepage doorverwijzen. Google behandelt een redirect
 * naar een pagina zonder inhoudelijke overlap als een soft 404 en laat de
 * opgebouwde posities dan alsnog vallen. Elke regel hieronder gaat daarom naar
 * een pagina die dezelfde zoekvraag beantwoordt als de oude URL.
 *
 * Deze tabel is de administratie. De redirect zelf staat in het gelijknamige
 * routebestand in src/routes/, zodat TypeScript controleert dat het doelpad
 * ook echt bestaat. src/lib/site-map.ts sluit deze paden uit van de sitemap.
 */
export const OUDE_URLS: Record<string, { naar: string; reden: string }> = {
  "/omnichannel-marketing/": {
    naar: "/online-marketing-strategie/",
    reden: "Omnichannel gaat over het samenspel tussen kanalen: dat is de strategiepagina.",
  },
  "/top-10-zoekmachines-in-nederland-welke-zoekmachines-hebben-het-grootste-marktaandeel/": {
    naar: "/online-marketing/geo-optimalisatie/",
    reden: "Overzicht van zoekmachines en marktaandeel, inclusief de AI-zoekmachines.",
  },
  "/top-20-gratis-online-bedrijvengidsen-van-nederland-2/": {
    naar: "/online-marketing/local-seo/",
    reden: "Bedrijvengidsen zijn vermeldingen (citations) en horen bij local SEO.",
  },
  "/wat-kost-een-website-laten-bouwen/": {
    naar: "/online-marketing/website-advies/",
    reden: "De kosten van een website laten bouwen staan op de websitepagina.",
  },
};
