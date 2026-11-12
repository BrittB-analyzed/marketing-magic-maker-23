/**
 * Bedrijfs-, auteur- en vestigingsgegevens die in schema-markup (JSON-LD) en in
 * zichtbare auteursregels gebruikt worden. Alle waarden zijn echte gegevens.
 */

import { BEDRIJFSCIJFERS } from "./bedrijfscijfers";
import { EMAIL, PHONE_HREF } from "@/lib/site-config";

/**
 * Canonieke host. Bewust zonder www: het Let's Encrypt-certificaat op de
 * server dekt alleen b-analyzed.com, waardoor https://www.b-analyzed.com een
 * certificaatfout geeft en dus onbereikbaar is. Zet dit pas terug naar www
 * zodra het certificaat ook www dekt en www 301'st naar de gekozen variant.
 */
export const SITE_URL = "https://b-analyzed.com";

export const ORGANISATIE = {
  naam: "B. Analyzed Marketing",
  alternatieveNaam: "B. Analyzed",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-b-analyzed.svg`,
  telefoon: PHONE_HREF.replace("tel:", ""),
  email: EMAIL,
  kvk: "61944351",
  btw: "NL001846301B46",
  adres: {
    straat: "Dorperheideweg 34",
    postcode: "5944 NK",
    plaats: "Arcen",
    gemeente: "Venlo",
    regio: "Limburg",
    land: "NL",
  },
  /** Openingstijden kantoor, ma t/m vr. */
  openingstijden: { dagen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], van: "09:00", tot: "17:30" },
  sameAs: [
    "https://www.facebook.com/b.analyzed",
    "https://www.linkedin.com/in/britt-daemen-30651818/",
  ],
} as const;

/**
 * Werkgebied voor areaServed in de schema-markup. Noord-Limburg staat voorop
 * omdat daar de vestiging zit (Arcen, gemeente Venlo); zo kunnen Google en
 * AI-assistenten B. Analyzed koppelen aan zoekvragen uit die regio.
 */
export const WERKGEBIED = {
  regio: "Noord-Limburg",
  plaatsen: ["Venlo", "Arcen", "Blerick", "Tegelen", "Belfeld", "Venray", "Horst aan de Maas", "Grubbenvorst", "Sevenum", "Panningen", "Reuver", "Gennep", "Roermond"],
  landen: ["Nederland", "België"],
} as const;

/** Vakgebieden voor knowsAbout in de schema-markup. */
export const VAKGEBIEDEN = [
  "Zoekmachineoptimalisatie (SEO)",
  "Zoekmachineadverteren (SEA)",
  "Google Ads",
  "Generative Engine Optimization (GEO)",
  "Local SEO",
  "Conversie-optimalisatie (CRO)",
  "Linkbuilding",
] as const;

/**
 * Afbeelding voor og:image en twitter:image als een pagina geen eigen beeld
 * heeft. Bewust een JPG en geen SVG: Facebook, LinkedIn en X renderen SVG niet,
 * waardoor een gedeelde link anders zonder voorvertoning verschijnt.
 */
export const SOCIAL_IMAGE = `${SITE_URL}/assets/photos/aan-het-werk.jpg`;

export const AUTEUR = {
  naam: "Britt Daemen",
  functie: "Oprichter en SEO- & GEO-specialist bij B. Analyzed",
  jarenErvaring: BEDRIJFSCIJFERS.jarenErvaring,
  url: `${SITE_URL}/online-marketing-bedrijf/`,
  overPad: "/online-marketing-bedrijf/",
  linkedin: "https://www.linkedin.com/in/britt-daemen-30651818/",
} as const;
