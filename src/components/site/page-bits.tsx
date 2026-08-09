import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Minus, Phone, Plus, Search, Sparkles, TrendingUp } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "./site-chrome";
import { LeadForm } from "./lead-form";

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-brand-muted">{intro}</p>}
    </div>
  );
}

const HERO_BARS = [18, 24, 21, 32, 38, 34, 48, 56, 52, 68, 79, 96];

export function HeroVisual({
  query = "seo uitbesteden",
  metric = "+312% organisch verkeer",
  metricNote = "12 maanden · Google + AI-antwoorden",
}: {
  query?: string;
  metric?: string;
  metricNote?: string;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-sand"
      />
      <div className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-brand-line px-5 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-brand-red" />
            <span className="size-2.5 rounded-full bg-brand-star" />
            <span className="size-2.5 rounded-full bg-brand-green" />
          </span>
          <span className="text-xs font-medium text-brand-muted">live rapportage · b-analyzed</span>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-green">
            <span className="size-1.5 rounded-full bg-brand-green" /> live
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center gap-2 rounded-full border border-brand-line px-4 py-2.5">
            <Search className="size-4 text-brand-muted" />
            <span className="text-sm text-brand-ink">{query}</span>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-canvas p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
                  <TrendingUp className="size-4 text-brand-green" /> {metric}
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">{metricNote}</p>
              </div>
              <div className="flex h-12 items-end gap-1" aria-hidden="true">
                {HERO_BARS.map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-sm bg-brand-green"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-brand-green/40 bg-white p-4">
            <p className="text-xs font-medium text-brand-muted">b-analyzed.com › online-marketing</p>
            <p className="mt-1 text-base font-semibold text-brand-ink">
              Online marketingbureau · 15 jaar ervaring · B. Analyzed
            </p>
            <p className="mt-1 text-sm leading-relaxed text-brand-muted">
              SEO, GEO, Ads en CRO voor MKB in Nederland en België. 9,8 uit {"47"} reviews. Eén vast
              aanspreekpunt.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-brand-sand p-4">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-red" />
            <p className="text-sm leading-relaxed text-brand-muted">
              <span className="font-semibold text-brand-ink">AI-antwoord:</span> “B. Analyzed wordt
              genoemd als specialist in SEO &amp; GEO voor het MKB.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel = "Vraag je gratis scan aan",
  stats = [
    { value: "15", label: "jaar ervaring" },
    { value: "9,8", label: "uit 47 reviews" },
    { value: "150+", label: "klanten geholpen" },
  ],
  visual = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  stats?: { value: string; label: string }[];
  visual?: boolean;
}) {
  return (
    <div className="relative overflow-hidden border-b border-brand-line bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand-sand blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-canvas px-3 py-1">
            <span className="size-1.5 rounded-full bg-brand-green" />
            <Eyebrow>{eyebrow}</Eyebrow>
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/gratis-seo-scan/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              {ctaLabel} <ArrowRight className="size-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink"
            >
              <Phone className="size-4 text-brand-red" /> {PHONE}
            </a>
          </div>
          {stats.length > 0 && (
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-line pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-semibold text-brand-red sm:text-3xl">{s.value}</dd>
                  <p className="mt-1 text-xs leading-snug text-brand-muted">{s.label}</p>
                </div>
              ))}
            </dl>
          )}
        </div>
        {visual && <HeroVisual />}
      </div>
    </div>
  );
}

export type Faq = { q: string; a: string };

export function FaqBlock({ items, title = "Veelgestelde vragen" }: { items: Faq[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="border-t border-brand-line bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="divide-y divide-brand-line border-y border-brand-line">
          {items.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium">{item.q}</span>
                {open === i ? (
                  <Minus className="size-4 shrink-0 text-brand-red" />
                ) : (
                  <Plus className="size-4 shrink-0 text-brand-muted" />
                )}
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-brand-muted">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function faqJsonLd(items: Faq[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export function CtaBand({
  title = "Wil je weten hoe zichtbaar je nu bent — in Google én in AI?",
  intro = "Vraag de gratis scan aan. Je krijgt een persoonlijke video-analyse met de drie dingen die op jouw site het meeste opleveren.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="border-y border-brand-line bg-brand-sand text-brand-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">{intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/gratis-seo-scan/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              Gratis scan aanvragen <ArrowRight className="size-4" />
            </Link>
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-6 py-3.5 text-sm font-semibold text-brand-ink"
            >
              Even sparren via WhatsApp
            </a>
          </div>
        </div>
        <LeadForm id="cta-scan" compact />
      </div>
    </section>
  );
}