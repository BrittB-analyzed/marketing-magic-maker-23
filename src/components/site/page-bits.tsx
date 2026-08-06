import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Minus, Phone, Plus } from "lucide-react";
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

export function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel = "Vraag je gratis scan aan",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
}) {
  return (
    <div className="border-b border-brand-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">{intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/gratis-seo-scan"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            {ctaLabel} <ArrowRight className="size-4" />
          </Link>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink">
            <Phone className="size-4 text-brand-red" /> {PHONE}
          </a>
        </div>
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
              to="/gratis-seo-scan"
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