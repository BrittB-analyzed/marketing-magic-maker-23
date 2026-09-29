/**
 * Centrale bron voor alle bedrijfscijfers en claims die op meerdere plekken
 * op de site terugkomen. Gebruik ALTIJD deze constanten, nooit losse getallen
 * in componenten of content.
 */

export const BEDRIJFSCIJFERS = {
  /** Jaren ervaring als online marketingbureau (sinds 2014). */
  jarenErvaring: 15,
  /** Gemiddelde Google-reviewscore, als weergavetekst. */
  reviewScore: "9,8",
  /** Aantal Google reviews. */
  aantalReviews: 48,
  /** Aantal klanten dat we geholpen hebben. TEGENSTRIJDIG, zie CONFLICTEN. */
  aantalKlanten: "+75",
  /** Behaalde nummer 1-posities in Google. TEGENSTRIJDIG, zie CONFLICTEN. */
  nummerEenPosities: "+1500",
  /** Omvang van het linkbuildingnetwerk (aantal sites). */
  linkbuildingNetwerk: "+3500",
  /** Prijs eenmalige uitgebreide SEO & GEO-audit. */
  prijsAudit: "€ 599,-",
  /** Startprijs doorlopend maandpakket. */
  prijsMaandpakket: "€ 999,-",
  /** Uurtarief voor losse werkzaamheden. */
  prijsUurtarief: "€ 90,-",
  /** Gemiddelde groei in leads & sales over SEO, GEO, Ads en CRO. */
  gemiddeldeGroei: "+500%",
  /** Reactietijd op aanvragen. */
  reactietijd: "binnen 24 uur",
  /** Vestigingsplaats. */
  plaats: "Venlo",
  /** Werkgebied. */
  werkgebied: "Nederland en België",
} as const;

/** Handige samengestelde teksten. */
export const REVIEW_TEKST = `${BEDRIJFSCIJFERS.reviewScore} gemiddeld · ${BEDRIJFSCIJFERS.aantalReviews} reviews`;
export const ERVARING_TEKST = `${BEDRIJFSCIJFERS.jarenErvaring} jaar ervaring`;

/**
 * CONFLICTEN, nog te kiezen door B. Analyzed. Er zijn nu twee of meer
 * verschillende waarden voor hetzelfde cijfer in de codebase gevonden.
 * De bovenstaande waarde is de meest gebruikte, niet per se de juiste.
 *
 * 1. nummer 1-posities: "+1500" (homepage) vs "5.000+" (SEO/pijlerpagina's,
 *    dashboardvisual) vs "meer dan 100" (oude landingspagina-copy).
 * 2. aantal klanten: "+75" (homepage) vs "220+" (SEO- en pijlerpagina's)
 *    vs "+50 tevreden klanten" (oude landingspagina-copy).
 * 3. jaren ervaring: "15 jaar" (site-breed) vs "meer dan 10 jaar"
 *    (oude landingspagina-copy in src/content/landings-topical.ts).
 * 4. reviewscore-notatie: "9,8" vs "9.8" (oude landingspagina-copy).
 */

// Elk cijfer dat hier staat moet onderbouwd kunnen worden met een dashboard,
// een factuur of een reviewprofiel.
