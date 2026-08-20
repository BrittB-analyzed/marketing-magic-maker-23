/**
 * Bedrijfs-, auteur- en vestigingsgegevens die in schema-markup (JSON-LD) en in
 * zichtbare auteursregels gebruikt worden. Alle waarden zijn echte gegevens.
 */

import { BEDRIJFSCIJFERS } from "./bedrijfscijfers";
import { EMAIL, PHONE_HREF } from "@/lib/site-config";

export const SITE_URL = "https://www.b-analyzed.com";

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

export const AUTEUR = {
  naam: "Britt Daemen",
  functie: "Oprichter en SEO- & GEO-specialist bij B. Analyzed",
  jarenErvaring: BEDRIJFSCIJFERS.jarenErvaring,
  url: `${SITE_URL}/online-marketing-bedrijf/`,
  overPad: "/online-marketing-bedrijf/",
  linkedin: "https://www.linkedin.com/in/britt-daemen-30651818/",
} as const;
