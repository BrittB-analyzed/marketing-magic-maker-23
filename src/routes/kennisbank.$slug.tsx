import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";
import { KENNISBANK, KENNISBANK_REDIRECTS, isGepubliceerd } from "@/content/kennisbank";
import { AUTEUR } from "@/data/organisatie";
import { articleSchema, breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/kennisbank/$slug")({
  // Oude slugs van de vorige site die zijn samengevoegd met een ander begrip,
  // krijgen een 301 in plaats van een 404. Zie KENNISBANK_REDIRECTS.
  beforeLoad: ({ params }) => {
    const naar = KENNISBANK_REDIRECTS[params.slug];
    // `href` bepaalt de Location-header; `to` is in de typing verplicht maar
    // kan hier geen literal zijn, omdat het doel uit een tabel komt.
    if (naar) throw redirect({ href: naar, to: naar as "/", statusCode: 301 });
  },
  loader: ({ params }) => {
    const term = KENNISBANK[params.slug];
    if (!term) throw notFound();
    return { term, gepubliceerd: isGepubliceerd(term) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Begrip niet gevonden | B. Analyzed" }, { name: "robots", content: "noindex" }],
      };
    }
    const { term, gepubliceerd } = loaderData;
    const pad = `/kennisbank/${term.slug}/`;
    return {
      meta: [
        { title: term.title },
        { name: "description", content: term.description },
        { property: "og:title", content: term.title },
        { property: "og:description", content: term.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        // Nog niet gepubliceerde begrippen staan wél op de site (zodat ze te
        // controleren zijn), maar mogen niet geïndexeerd worden. Ze staan ook
        // niet in het register en niet in de sitemap.
        ...(gepubliceerd ? [] : [{ name: "robots", content: "noindex, nofollow" }]),
      ],
      scripts: gepubliceerd
        ? [
            {
              type: "application/ld+json",
              children: graph(
                articleSchema({
                  headline: term.h1,
                  description: term.description,
                  path: pad,
                  datePublished: term.publicatie,
                  dateModified: term.publicatie,
                }),
                faqSchema(term.vragen),
                breadcrumbSchema([
                  { name: "Home", path: "/" },
                  { name: "Kennisbank", path: "/kennisbank/" },
                  { name: term.term, path: pad },
                ]),
              ),
            },
          ]
        : [],
    };
  },
  component: Begrip,
  notFoundComponent: BegripNietGevonden,
});

function Begrip() {
  const { term, gepubliceerd } = Route.useLoaderData();
  const gerelateerd = term.gerelateerd.map((slug) => KENNISBANK[slug]).filter(Boolean);

  return (
    <SiteLayout>
      <PageHero eyebrow="Kennisbank" title={term.h1} intro={term.definitie} visual={false} stats={[]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="max-w-2xl">
            {!gepubliceerd && (
              <p className="mb-8 rounded-2xl border border-brand-red/30 bg-brand-red-soft p-5 text-sm leading-relaxed text-brand-ink">
                Dit begrip staat gepland voor{" "}
                {new Date(`${term.publicatie}T00:00:00Z`).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                . Tot die datum staat de pagina op noindex en staat hij niet in het register of de sitemap.
              </p>
            )}

            <h2 className="text-2xl font-semibold tracking-tight">
              {term.term}: waarom het ertoe doet voor ondernemers
            </h2>
            {term.waarom.map((alinea) => (
              <p key={alinea.slice(0, 40)} className="mt-4 text-base leading-relaxed text-brand-muted">
                {alinea}
              </p>
            ))}

            <h2 className="mt-12 text-2xl font-semibold tracking-tight">{term.voorbeeld.h}</h2>
            {term.voorbeeld.p.map((alinea) => (
              <p key={alinea.slice(0, 40)} className="mt-4 text-base leading-relaxed text-brand-muted">
                {alinea}
              </p>
            ))}

            {term.vragen.map((v) => (
              <div key={v.q} className="mt-12">
                <h2 className="text-2xl font-semibold tracking-tight">{v.q}</h2>
                <p className="mt-4 text-base leading-relaxed text-brand-muted">{v.a}</p>
              </div>
            ))}

            <div className="mt-12 rounded-2xl border border-brand-line bg-brand-sand p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Hulp nodig hierbij?
              </p>
              <Link
                to={term.dienst.to}
                className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-brand-ink hover:text-brand-red"
              >
                {term.dienst.label} <ArrowRight className="size-4 text-brand-red" />
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{term.dienst.note}</p>
            </div>

            <p className="mt-10 text-sm text-brand-muted">
              Geschreven door{" "}
              <Link to={AUTEUR.overPad} className="font-semibold text-brand-ink hover:text-brand-red">
                {AUTEUR.naam}
              </Link>
              , {AUTEUR.functie.toLowerCase()}.
            </p>

            <Link to="/kennisbank/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              <ArrowLeft className="size-4 text-brand-red" /> Terug naar de kennisbank
            </Link>
          </article>

          <aside className="h-fit rounded-2xl border border-brand-line bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Gerelateerde begrippen
            </p>
            <ul className="mt-4 space-y-4">
              {gerelateerd.map((g) => (
                <li key={g.slug}>
                  <Link
                    to="/kennisbank/$slug/"
                    params={{ slug: g.slug }}
                    className="text-sm font-semibold text-brand-ink hover:text-brand-red"
                  >
                    {g.term}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted">{g.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}

function BegripNietGevonden() {
  return (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading title="Dit begrip staat er (nog) niet in" />
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            Bekijk het register om te zien welke begrippen al wel zijn uitgewerkt.
          </p>
          <Link
            to="/kennisbank/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white"
          >
            Naar de kennisbank <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}
