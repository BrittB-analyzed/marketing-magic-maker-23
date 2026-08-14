import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  MapPin,
  Minus,
  MousePointerClick,
  Phone,
  Plus,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
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

export type HeroVariant = "seo" | "geo" | "ads" | "cro" | "local";

export function deriveHeroVariant(text: string): HeroVariant {
  const t = text.toLowerCase();
  if (/\bgeo\b|ai-?zichtbaar|ai zoek|generative|chatgpt/.test(t)) return "geo";
  if (/\bads\b|adverte|sea\b|google ads|display/.test(t)) return "ads";
  if (/cro\b|conversie|website advies|e-?mail|nieuwsbrief/.test(t)) return "cro";
  if (/lokale|local seo|venlo|roermond|maastricht|nijmegen|limburg|arcen|horst|venray|belfeld|grubbenvorst|eindhoven|rotterdam|ibiza|regio/.test(t))
    return "local";
  return "seo";
}

function VisualFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-sand" />
      <div className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-brand-line px-5 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-brand-red" />
            <span className="size-2.5 rounded-full bg-brand-star" />
            <span className="size-2.5 rounded-full bg-brand-green" />
          </span>
          <span className="text-xs font-medium text-brand-muted">{label}</span>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-green">
            <span className="size-1.5 rounded-full bg-brand-green" /> live
          </span>
        </div>
        <div className="space-y-4 p-5">{children}</div>
      </div>
    </div>
  );
}

function GeoVisual() {
  const sources = [
    { name: "b-analyzed.com", note: "geciteerd in antwoord", strong: true },
    { name: "concurrent-a.nl", note: "genoemd" },
    { name: "vergelijkingssite.nl", note: "genoemd" },
  ];
  return (
    <VisualFrame label="AI-zichtbaarheid · GEO-monitor">
      <div className="flex items-center gap-2 rounded-full border border-brand-line px-4 py-2.5">
        <Bot className="size-4 text-brand-muted" />
        <span className="text-sm text-brand-ink">“welk seo-bureau past bij mijn mkb-bedrijf?”</span>
      </div>

      <div className="rounded-2xl bg-brand-sand p-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-red">
          <Sparkles className="size-3.5" /> AI-antwoord
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          “Voor het MKB wordt <span className="font-semibold text-brand-ink">B. Analyzed</span>{" "}
          genoemd als specialist in SEO &amp; GEO, met 15 jaar ervaring en één vast aanspreekpunt.”
        </p>
      </div>

      <div className="space-y-2">
        {sources.map((s) => (
          <div
            key={s.name}
            className={`flex items-center justify-between rounded-xl border px-3 py-2 text-xs ${
              s.strong ? "border-brand-green/40 bg-brand-green/5" : "border-brand-line bg-white"
            }`}
          >
            <span className="flex items-center gap-2 font-medium text-brand-ink">
              {s.strong && <BadgeCheck className="size-3.5 text-brand-green" />}
              {s.name}
            </span>
            <span className="text-brand-muted">{s.note}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "ChatGPT", n: "3 van 5 prompts" },
          { v: "Perplexity", n: "4 van 5 prompts" },
          { v: "Gemini", n: "2 van 5 prompts" },
        ].map((m) => (
          <div key={m.v} className="rounded-xl border border-brand-line p-3">
            <p className="text-xs font-semibold text-brand-ink">{m.v}</p>
            <p className="mt-1 text-[11px] leading-snug text-brand-muted">{m.n}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function AdsVisual() {
  const rows = [
    { kw: "ads uitbesteden", clicks: "412", impr: "9.104", conv: "38" },
    { kw: "google ads bureau", clicks: "288", impr: "6.871", conv: "24" },
    { kw: "ads specialist inhuren", clicks: "196", impr: "4.320", conv: "17" },
  ];
  return (
    <VisualFrame label="Google Ads · campagneoverzicht">
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Klikken", v: "896" },
          { l: "Conversies", v: "79" },
          { l: "Kosten / conv.", v: "€ 18,40" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-brand-line bg-brand-canvas p-3">
            <p className="text-[11px] font-medium text-brand-muted">{s.l}</p>
            <p className="mt-1 text-lg font-semibold text-brand-ink">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-brand-line p-4">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
            <MousePointerClick className="size-4 text-brand-green" /> Conversies per week
          </p>
          <span className="text-xs font-medium text-brand-green">+64%</span>
        </div>
        <div className="mt-3 flex h-12 items-end gap-1" aria-hidden="true">
          {HERO_BARS.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-brand-green/80" />
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-brand-line">
        <div className="grid grid-cols-[1.6fr_0.7fr_0.9fr_0.7fr] gap-2 border-b border-brand-line bg-brand-canvas px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
          <span>Zoekwoord</span>
          <span className="text-right">Klikken</span>
          <span className="text-right">Vertoningen</span>
          <span className="text-right">Conv.</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.kw}
            className="grid grid-cols-[1.6fr_0.7fr_0.9fr_0.7fr] gap-2 border-b border-brand-line px-3 py-2 text-xs last:border-0"
          >
            <span className="truncate font-medium text-brand-ink">{r.kw}</span>
            <span className="text-right text-brand-muted">{r.clicks}</span>
            <span className="text-right text-brand-muted">{r.impr}</span>
            <span className="text-right font-semibold text-brand-green">{r.conv}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function CroVisual() {
  const funnel = [
    { l: "Bezoekers", v: "12.480", w: 100 },
    { l: "Productpagina", v: "5.310", w: 62 },
    { l: "Formulier gestart", v: "1.240", w: 34 },
    { l: "Aanvragen", v: "386", w: 18 },
  ];
  return (
    <VisualFrame label="CRO · A/B-test dashboard">
      <div className="space-y-2">
        {funnel.map((f) => (
          <div key={f.l} className="rounded-xl bg-brand-canvas p-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-brand-ink">{f.l}</span>
              <span className="text-brand-muted">{f.v}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-brand-line">
              <div style={{ width: `${f.w}%` }} className="h-2 rounded-full bg-brand-green" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-2xl border border-brand-line p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
            Variant A
          </p>
          <p className="mt-1 text-xl font-semibold text-brand-ink">2,4%</p>
          <p className="text-[11px] text-brand-muted">conversieratio</p>
        </div>
        <div className="rounded-2xl border-2 border-brand-green/40 bg-brand-green/5 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-green">
            Variant B · winnaar
          </p>
          <p className="mt-1 text-xl font-semibold text-brand-ink">3,9%</p>
          <p className="text-[11px] text-brand-muted">+63% aanvragen</p>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-brand-sand p-4">
        <TrendingUp className="mt-0.5 size-4 shrink-0 text-brand-red" />
        <p className="text-sm leading-relaxed text-brand-muted">
          <span className="font-semibold text-brand-ink">Inzicht:</span> kortere formulieren en
          duidelijke bewijsvoering leveren de meeste extra aanvragen op.
        </p>
      </div>
    </VisualFrame>
  );
}

function LocalVisual() {
  return (
    <VisualFrame label="Lokale zichtbaarheid · Google Bedrijfsprofiel">
      <div className="flex items-center gap-2 rounded-full border border-brand-line px-4 py-2.5">
        <Search className="size-4 text-brand-muted" />
        <span className="text-sm text-brand-ink">seo bureau bij mij in de buurt</span>
      </div>

      <div className="space-y-2">
        {[
          { n: "B. Analyzed Marketing", r: "9,8 · 47 reviews", top: true },
          { n: "Bureau uit de regio", r: "8,4 · 12 reviews" },
          { n: "Landelijk bureau", r: "8,1 · 31 reviews" },
        ].map((b, i) => (
          <div
            key={b.n}
            className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
              b.top ? "border-brand-green/40 bg-brand-green/5" : "border-brand-line"
            }`}
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-brand-sand text-[11px] font-semibold text-brand-ink">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-brand-ink">{b.n}</p>
              <p className="text-[11px] text-brand-muted">{b.r}</p>
            </div>
            <MapPin className="ml-auto size-4 text-brand-red" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "+218%", n: "routebeschrijvingen" },
          { v: "+147%", n: "telefoontjes" },
          { v: "top 3", n: "in de kaartresultaten" },
        ].map((s) => (
          <div key={s.n} className="rounded-xl bg-brand-canvas p-3">
            <p className="text-sm font-semibold text-brand-green">{s.v}</p>
            <p className="mt-1 text-[11px] leading-snug text-brand-muted">{s.n}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function HeroVisual({
  variant = "seo",
  query = "seo uitbesteden",
  metric = "+312% organisch verkeer",
  metricNote = "12 maanden · Google + AI-antwoorden",
}: {
  variant?: HeroVariant;
  query?: string;
  metric?: string;
  metricNote?: string;
}) {
  if (variant === "geo") return <GeoVisual />;
  if (variant === "ads") return <AdsVisual />;
  if (variant === "cro") return <CroVisual />;
  if (variant === "local") return <LocalVisual />;
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
          <span className="text-xs font-medium text-brand-muted">live resultaten · b-analyzed</span>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-green">
            <span className="size-1.5 rounded-full bg-brand-green" /> live
          </span>
        </div>

        <div className="space-y-5 p-5">
          <div className="rounded-2xl border border-brand-line bg-brand-canvas p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
                  <TrendingUp className="size-4 text-brand-green" /> +312% organisch verkeer
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">Gemiddelde groei na 12 maanden SEO & GEO</p>
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

          <div className="rounded-2xl border border-brand-line bg-brand-canvas p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Google topposities</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-brand-green">5.000+</span>
              <span className="text-sm font-medium text-brand-ink">nummer 1 posities behaald</span>
            </div>
            <div className="mt-3 flex items-center gap-2" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="flex h-1.5 rounded-full bg-brand-green"
                  style={{ width: `${16 + i * 8}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-canvas p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Conversiegroei</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-brand-green">+500%</span>
              <span className="text-sm font-medium text-brand-ink">leads & sales</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">Gemiddeld door SEO, GEO, Ads en CRO</p>
            <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">
              {["leads", "sales", "aanvragen", "omzet"].map((l, i) => (
                <div key={l} className="rounded-lg bg-brand-green/10 px-2 py-1.5 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-green">{l}</p>
                  <p className="text-xs font-semibold text-brand-ink">+{[320, 480, 560, 500][i]}%</p>
                </div>
              ))}
            </div>
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
    { value: "220+", label: "klanten geholpen" },
  ],
  visual = true,
  variant,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  stats?: { value: string; label: string }[];
  visual?: boolean;
  variant?: HeroVariant;
}) {
  const heroVariant = variant ?? deriveHeroVariant(`${eyebrow} ${title} ${intro}`);
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
                  <dd className="text-2xl font-semibold text-brand-graphite sm:text-3xl">{s.value}</dd>
                  <p className="mt-1 text-xs leading-snug text-brand-muted">{s.label}</p>
                </div>
              ))}
            </dl>
          )}
        </div>
        {visual && <HeroVisual variant={heroVariant} />}
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