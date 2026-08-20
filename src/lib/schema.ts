/**
 * Bouwstenen voor JSON-LD schema-markup. Alle gegevens komen uit
 * src/data/organisatie.ts en src/data/bedrijfscijfers.ts, nooit placeholders.
 */

import { AUTEUR, ORGANISATIE, SITE_URL } from "@/data/organisatie";
import { BEDRIJFSCIJFERS } from "@/data/bedrijfscijfers";

const ORG_ID = `${SITE_URL}/#organisatie`;

export function abs(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: ORGANISATIE.adres.straat,
  postalCode: ORGANISATIE.adres.postcode,
  addressLocality: ORGANISATIE.adres.plaats,
  addressRegion: ORGANISATIE.adres.regio,
  addressCountry: ORGANISATIE.adres.land,
};

const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: BEDRIJFSCIJFERS.reviewScore.replace(",", "."),
  bestRating: "10",
  worstRating: "1",
  reviewCount: BEDRIJFSCIJFERS.aantalReviews,
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORGANISATIE.naam,
    alternateName: ORGANISATIE.alternatieveNaam,
    url: ORGANISATIE.url,
    logo: ORGANISATIE.logo,
    image: ORGANISATIE.logo,
    email: ORGANISATIE.email,
    telephone: ORGANISATIE.telefoon,
    vatID: ORGANISATIE.btw,
    address: postalAddress,
    sameAs: [...ORGANISATIE.sameAs],
    aggregateRating,
    founder: {
      "@type": "Person",
      name: AUTEUR.naam,
      jobTitle: AUTEUR.functie,
      url: AUTEUR.url,
      sameAs: [AUTEUR.linkedin],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#vestiging`,
    name: ORGANISATIE.naam,
    url: ORGANISATIE.url,
    logo: ORGANISATIE.logo,
    image: ORGANISATIE.logo,
    telephone: ORGANISATIE.telefoon,
    email: ORGANISATIE.email,
    priceRange: "€€",
    address: postalAddress,
    areaServed: BEDRIJFSCIJFERS.werkgebied,
    sameAs: [...ORGANISATIE.sameAs],
    aggregateRating,
    parentOrganization: { "@id": ORG_ID },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...ORGANISATIE.openingstijden.dagen],
        opens: ORGANISATIE.openingstijden.van,
        closes: ORGANISATIE.openingstijden.tot,
      },
    ],
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name,
    description,
    serviceType: serviceType ?? name,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: BEDRIJFSCIJFERS.werkgebied,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "999",
      url: abs("/tarieven-seo/"),
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${abs(path)}#article`,
    headline,
    description,
    mainEntityOfPage: abs(path),
    datePublished,
    dateModified,
    ...(image ? { image: abs(image) } : {}),
    author: {
      "@type": "Person",
      name: AUTEUR.naam,
      jobTitle: AUTEUR.functie,
      url: AUTEUR.url,
      sameAs: [AUTEUR.linkedin],
    },
    publisher: { "@id": ORG_ID },
  };
}

/** Bundelt losse schema-objecten in één @graph-document. */
export function graph(...nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
