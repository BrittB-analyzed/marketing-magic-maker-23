import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section } from "@/components/site/page-bits";
import { CASE_LIST } from "@/content/cases";

export const Route = createFileRoute("/online-marketing-cases")({
  head: () => ({
    meta: [
      { title: "Resultaten online marketing cases | B. Analyzed" },
      {
        name: "description",
        content:
          "Bekijk echte cases van B. Analyzed: Meubel & Outlet Weert, Van Daken, Dn Research, Parketreus, De Bruidsmode Outlet België en Sleep Factory BV. SEO- en Google Ads-resultaten met cijfers.",
      },
      { property: "og:title", content: "Resultaten online marketing cases" },
      { property: "og:description", content: "Echte klanten, echte cijfers: van +680% organisch verkeer tot 800% meer online transacties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Cases,
});

function Cases() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cases"
        title="Resultaten online marketing cases"
        intro="De jarenlange ervaring van B. Analyzed heeft geleid tot mooie resultaten die we samen met onze partners en opdrachtgevers hebben behaald. Hieronder lees je hoe we de online kansen van onze klanten hebben benut."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_LIST.map((c) => (
            <Link
              key={c.slug}
              to="/cases/$slug/"
              params={{ slug: c.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-colors hover:border-brand-ink"
            >
              <img
                src={c.image}
                alt={c.imageAlt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <span className="w-fit rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-brand-muted">
                  {c.client}
                </span>
                <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{c.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{c.excerpt}</p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-brand-line pt-5">
                  {c.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-brand-muted">{h.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-brand-red">{h.value}</dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  Lees de case <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}