import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";
import { gepubliceerdeTermen, type KennisbankTerm } from "@/content/kennisbank";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { SITE_URL } from "@/data/organisatie";

export const Route = createFileRoute("/kennisbank/")({
  // In de loader, zodat de server en de client dezelfde lijst gebruiken en er
  // geen hydratieverschil ontstaat rond een publicatiedatum.
  loader: () => ({ termen: gepubliceerdeTermen() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Kennisbank | SEO- en marketingbegrippen uitgelegd" },
      {
        name: "description",
        content:
          "Kennisbank van B. Analyzed: SEO-, GEO-, Ads- en CRO-begrippen in gewone taal uitgelegd voor MKB-ondernemers. Alfabetisch register met zoekfunctie.",
      },
      { property: "og:title", content: "Kennisbank: SEO en marketing uitgelegd" },
      { property: "og:description", content: "Begrippen rond vindbaarheid, in gewone taal en alfabetisch geordend." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: graph(
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/kennisbank/#register`,
            name: "Kennisbank",
            description:
              "Alfabetisch register van SEO-, GEO-, Ads- en CRO-begrippen, uitgelegd voor MKB-ondernemers.",
            url: `${SITE_URL}/kennisbank/`,
            hasPart: (loaderData?.termen ?? []).map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              description: t.definitie,
              url: `${SITE_URL}/kennisbank/${t.slug}/`,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kennisbank", path: "/kennisbank/" },
          ]),
        ),
      },
    ],
  }),
  component: Kennisbank,
});

/** Groepeert de begrippen op beginletter, voor het alfabetisch register. */
function groepeerOpLetter(termen: KennisbankTerm[]) {
  const groepen = new Map<string, KennisbankTerm[]>();
  for (const t of termen) {
    const letter = t.term.charAt(0).toUpperCase();
    const bestaand = groepen.get(letter);
    if (bestaand) bestaand.push(t);
    else groepen.set(letter, [t]);
  }
  return [...groepen.entries()].sort((a, b) => a[0].localeCompare(b[0], "nl"));
}

function Kennisbank() {
  const { termen } = Route.useLoaderData();
  const [zoek, setZoek] = useState("");

  const gefilterd = useMemo(() => {
    const q = zoek.trim().toLowerCase();
    if (!q) return termen;
    return termen.filter((t) =>
      [t.term, t.definitie, t.description, ...(t.synoniemen ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [termen, zoek]);

  const groepen = useMemo(() => groepeerOpLetter(gefilterd), [gefilterd]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kennisbank"
        title="SEO en online marketing uitgelegd, zonder jargon"
        intro="Korte definitiepagina's over de begrippen die je tegenkomt zodra je met vindbaarheid aan de slag gaat. Elk begrip in gewone taal, met een voorbeeld en een link naar de dienst waar het bij hoort."
        visual={false}
      />

      <Section>
        <SectionHeading
          eyebrow="Register"
          title="Alfabetisch register"
          intro="Zoek op een begrip of blader door de lijst. De kennisbank groeit wekelijks."
        />

        <div className="mt-8 max-w-xl">
          <label htmlFor="kennisbank-zoek" className="sr-only">
            Zoek een begrip in de kennisbank
          </label>
          <div className="flex items-center gap-3 rounded-full border border-brand-line bg-white px-5 py-3">
            <Search className="size-4 shrink-0 text-brand-muted" aria-hidden="true" />
            <input
              id="kennisbank-zoek"
              type="search"
              value={zoek}
              onChange={(e) => setZoek(e.target.value)}
              placeholder="Zoek een begrip, bijvoorbeeld indexeren of CTR"
              className="w-full bg-transparent text-sm outline-none placeholder:text-brand-muted"
            />
          </div>
          <p className="mt-2 text-xs text-brand-muted" aria-live="polite">
            {gefilterd.length} van {termen.length} begrippen
          </p>
        </div>

        {groepen.length === 0 ? (
          <p className="mt-12 text-base text-brand-muted">
            Geen begrip gevonden voor &ldquo;{zoek}&rdquo;. Staat het er niet bij?{" "}
            <Link to="/contact/" className="font-semibold text-brand-ink hover:text-brand-red">
              Laat het weten
            </Link>
            , dan zetten we het op de lijst.
          </p>
        ) : (
          <div className="mt-12 space-y-12">
            {groepen.map(([letter, items]) => (
              <div key={letter}>
                <h2 className="flex size-10 items-center justify-center rounded-full bg-brand-sand text-lg font-semibold text-brand-ink">
                  {letter}
                </h2>
                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {items.map((t) => (
                    <li key={t.slug}>
                      <Link
                        to="/kennisbank/$slug/"
                        params={{ slug: t.slug }}
                        className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 transition-colors hover:border-brand-ink"
                      >
                        <span className="inline-flex items-center gap-2 text-base font-semibold text-brand-ink">
                          {t.term}
                          <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="mt-2 text-sm leading-relaxed text-brand-muted">{t.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section className="border-t border-brand-line bg-white">
        <SectionHeading
          eyebrow="Verdieping"
          title="Grotere onderwerpen"
          intro="Sommige onderwerpen zijn te groot voor een definitiepagina. Die hebben een eigen hub."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "GEO: genoemd worden in AI-antwoorden",
              to: "/kennisbank/geo/",
              note: "Hoe ChatGPT, Gemini en AI Overviews bronnen kiezen.",
            },
            {
              label: "SEO uitbesteden",
              to: "/online-marketing/seo-uitbesteden/",
              note: "Techniek, content en autoriteit in één traject.",
            },
            {
              label: "SEO en SEA combineren",
              to: "/online-marketing/seo-en-sea/",
              note: "Hoe organisch en betaald verkeer elkaar versterken.",
            },
            {
              label: "Conversie-optimalisatie",
              to: "/online-marketing/conversie-optimalisatie/",
              note: "Van conversiepercentage tot testvolgorde.",
            },
            {
              label: "Wat SEO kost",
              to: "/tarieven-seo/",
              note: "Bedragen en wat je bij welk budget mag verwachten.",
            },
            {
              label: "Alle artikelen op de blog",
              to: "/blog/",
              note: "Langere stukken over SEO, GEO en Google Ads.",
            },
          ].map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="group flex h-full flex-col rounded-2xl border border-brand-line bg-brand-canvas p-6 transition-colors hover:border-brand-ink"
              >
                <span className="inline-flex items-center gap-2 text-base font-semibold text-brand-ink">
                  {l.label}
                  <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-brand-muted">{l.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
