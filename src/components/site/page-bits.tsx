import { BEDRIJFSCIJFERS } from "@/data/bedrijfscijfers";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  Bot,
  MapPin,
  Minus,
  MousePointerClick,
  Phone,
  Plus,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "./site-chrome";
import { LeadForm } from "./lead-form";
import type { Locale } from "@/lib/i18n";
import brittPortret from "@/assets/photos/britt-portret.jpg.asset.json";

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

export type HeroVariant = "seo" | "geo" | "ads" | "cro" | "local" | "content" | "tech";

export function deriveHeroVariant(text: string): HeroVariant {
  const t = text.toLowerCase();
  if (/\bgeo\b|ai-?zichtbaar|ai zoek|generative|chatgpt/.test(t)) return "geo";
  if (/\bads\b|adverte|sea\b|google ads|display/.test(t)) return "ads";
  if (/tag manager|gtm|tracking|wordpress|onderhoud|website laten bouwen|webshop|hosting|snelheid/.test(t))
    return "tech";
  if (/cro\b|conversie|website advies/.test(t)) return "cro";
  if (/tekst|content|copy|blog|linkbuilding|social media|e-?mail|nieuwsbrief/.test(t)) return "content";
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

function GeoVisual({ locale = "nl" }: { locale?: Locale }) {
  const en = locale === "en";
  const sources = en
    ? [
        { name: "b-analyzed.com", note: "cited in answer", strong: true },
        { name: "competitor-a.com", note: "mentioned" },
        { name: "comparison-site.com", note: "mentioned" },
      ]
    : [
        { name: "b-analyzed.com", note: "geciteerd in antwoord", strong: true },
        { name: "concurrent-a.nl", note: "genoemd" },
        { name: "vergelijkingssite.nl", note: "genoemd" },
      ];
  return (
    <VisualFrame label={en ? "AI visibility · GEO monitor" : "AI-zichtbaarheid · GEO-monitor"}>
      <div className="flex items-center gap-2 rounded-full border border-brand-line px-4 py-2.5">
        <Bot className="size-4 text-brand-muted" />
        <span className="text-sm text-brand-ink">{en ? "“which seo agency suits a small business?”" : "“welk seo-bureau past bij mijn mkb-bedrijf?”"}</span>
      </div>

      <div className="rounded-2xl bg-brand-sand p-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-red">
          <Sparkles className="size-3.5" /> {en ? "AI answer" : "AI-antwoord"}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          {en ? "“For smaller businesses, " : "“Voor het MKB wordt "}
          <span className="font-semibold text-brand-ink">B. Analyzed</span>
          {en
            ? " is named as a specialist in SEO and GEO, with 15 years of experience and one fixed point of contact.”"
            : " genoemd als specialist in SEO & GEO, met 15 jaar ervaring en één vast aanspreekpunt.”"}
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
          { v: "ChatGPT", n: en ? "3 of 5 prompts" : "3 van 5 prompts" },
          { v: "Perplexity", n: en ? "4 of 5 prompts" : "4 van 5 prompts" },
          { v: "Gemini", n: en ? "2 of 5 prompts" : "2 van 5 prompts" },
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

function AdsVisual({ locale = "nl" }: { locale?: Locale }) {
  const en = locale === "en";
  const rows = en
    ? [
        { kw: "google ads agency", clicks: "412", impr: "9,104", conv: "38" },
        { kw: "ppc management", clicks: "288", impr: "6,871", conv: "24" },
        { kw: "hire ads specialist", clicks: "196", impr: "4,320", conv: "17" },
      ]
    : [
        { kw: "ads uitbesteden", clicks: "412", impr: "9.104", conv: "38" },
        { kw: "google ads bureau", clicks: "288", impr: "6.871", conv: "24" },
        { kw: "ads specialist inhuren", clicks: "196", impr: "4.320", conv: "17" },
      ];
  return (
    <VisualFrame label={en ? "Google Ads · campaign overview" : "Google Ads · campagneoverzicht"}>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: en ? "Clicks" : "Klikken", v: "896" },
          { l: en ? "Conversions" : "Conversies", v: "79" },
          { l: en ? "Cost / conv." : "Kosten / conv.", v: "€ 18,40" },
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
            <MousePointerClick className="size-4 text-brand-green" /> {en ? "Conversions per week" : "Conversies per week"}
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
          <span>{en ? "Keyword" : "Zoekwoord"}</span>
          <span className="text-right">{en ? "Clicks" : "Klikken"}</span>
          <span className="text-right">{en ? "Impressions" : "Vertoningen"}</span>
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

function CroVisual({ locale = "nl" }: { locale?: Locale }) {
  const en = locale === "en";
  const funnel = en
    ? [
        { l: "Visitors", v: "12,480", w: 100 },
        { l: "Product page", v: "5,310", w: 62 },
        { l: "Form started", v: "1,240", w: 34 },
        { l: "Enquiries", v: "386", w: 18 },
      ]
    : [
        { l: "Bezoekers", v: "12.480", w: 100 },
        { l: "Productpagina", v: "5.310", w: 62 },
        { l: "Formulier gestart", v: "1.240", w: 34 },
        { l: "Aanvragen", v: "386", w: 18 },
      ];
  return (
    <VisualFrame label={en ? "CRO · A/B test dashboard" : "CRO · A/B-test dashboard"}>
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
            {en ? "Variant A" : "Variant A"}
          </p>
          <p className="mt-1 text-xl font-semibold text-brand-ink">2,4%</p>
          <p className="text-[11px] text-brand-muted">{en ? "conversion rate" : "conversieratio"}</p>
        </div>
        <div className="rounded-2xl border-2 border-brand-green/40 bg-brand-green/5 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-green">
            {en ? "Variant B · winner" : "Variant B · winnaar"}
          </p>
          <p className="mt-1 text-xl font-semibold text-brand-ink">3,9%</p>
          <p className="text-[11px] text-brand-muted">{en ? "+63% enquiries" : "+63% aanvragen"}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-brand-sand p-4">
        <TrendingUp className="mt-0.5 size-4 shrink-0 text-brand-red" />
        <p className="text-sm leading-relaxed text-brand-muted">
          <span className="font-semibold text-brand-ink">{en ? "Insight:" : "Inzicht:"}</span>{" "}
          {en
            ? "shorter forms and clear proof produce the most additional enquiries."
            : "kortere formulieren en duidelijke bewijsvoering leveren de meeste extra aanvragen op."}
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
          { n: "B. Analyzed Marketing", r: "9,8 · 48 reviews", top: true },
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

function ContentVisual() {
  return (
    <VisualFrame label="Content & autoriteit · productie">
      <div className="space-y-2">
        {[
          { t: "SEO-teksten geschreven", v: "18 / maand" },
          { t: "Nieuwe verwijzende domeinen", v: "+24" },
          { t: "Social posts gepland", v: "32" },
          { t: "Nieuwsbrieven verstuurd", v: "4" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between rounded-xl border border-brand-line px-3 py-2.5"
          >
            <p className="text-sm text-brand-ink">{r.t}</p>
            <p className="text-sm font-semibold text-brand-green">{r.v}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "+64%", n: "zoekwoorden in top 10" },
          { v: "+38%", n: "gemiddelde leestijd" },
          { v: "+21%", n: "aanvragen uit content" },
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

function TechVisual() {
  return (
    <VisualFrame label="Website & tracking · status">
      <div className="space-y-2">
        {[
          { t: "Website live gezet", v: "3 dagen" },
          { t: "Conversiemetingen actief", v: "7 / 7" },
          { t: "Core Web Vitals", v: "goed" },
          { t: "Updates & back-ups", v: "wekelijks" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between rounded-xl border border-brand-line px-3 py-2.5"
          >
            <p className="text-sm text-brand-ink">{r.t}</p>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-green">
              <BadgeCheck className="size-4" /> {r.v}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "0,9s", n: "laadtijd mobiel" },
          { v: "100%", n: "events gemeten" },
          { v: "€ 499", n: "vanafprijs website" },
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
  locale = "nl",
}: {
  variant?: HeroVariant;
  locale?: Locale;
}) {
  const en = locale === "en";
  if (variant === "geo") return <GeoVisual locale={locale} />;
  if (variant === "ads") return <AdsVisual locale={locale} />;
  if (variant === "cro") return <CroVisual locale={locale} />;
  if (variant === "local") return <LocalVisual />;
  if (variant === "content") return <ContentVisual />;
  if (variant === "tech") return <TechVisual />;
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
          <span className="text-xs font-medium text-brand-muted">{en ? "live results · b-analyzed" : "live resultaten · b-analyzed"}</span>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-green">
            <span className="size-1.5 rounded-full bg-brand-green" /> live
          </span>
        </div>

        <div className="space-y-5 p-5">
          <div className="rounded-2xl border border-brand-line bg-brand-canvas p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
                  <TrendingUp className="size-4 text-brand-green" /> {en ? "+312% organic traffic" : "+312% organisch verkeer"}
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">{en ? "Average growth after 12 months of SEO & GEO" : "Gemiddelde groei na 12 maanden SEO & GEO"}</p>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">{en ? "Google top positions" : "Google topposities"}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-brand-green">{BEDRIJFSCIJFERS.nummerEenPosities}</span>
              <span className="text-sm font-medium text-brand-ink">{en ? "number one positions achieved" : "nummer 1 posities behaald"}</span>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">{en ? "Conversion growth" : "Conversiegroei"}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-brand-green">{BEDRIJFSCIJFERS.gemiddeldeGroei}</span>
              <span className="text-sm font-medium text-brand-ink">{en ? "leads & sales" : "leads & sales"}</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">{en ? "Average across SEO, GEO, Ads and CRO" : "Gemiddeld door SEO, GEO, Ads en CRO"}</p>
            <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">
              {(en ? ["leads", "sales", "enquiries", "revenue"] : ["leads", "sales", "aanvragen", "omzet"]).map((l, i) => (
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

const HERO_TEKST = {
  nl: {
    cta: "Vraag je gratis scan aan",
    naar: "/gratis-seo-scan/",
    jaren: "jaar ervaring",
    reviews: `uit ${BEDRIJFSCIJFERS.aantalReviews} reviews`,
    klanten: "klanten geholpen",
  },
  en: {
    cta: "Request your free scan",
    naar: "/en/free-scan/",
    jaren: "years of experience",
    reviews: `from ${BEDRIJFSCIJFERS.aantalReviews} reviews`,
    klanten: "clients helped",
  },
} as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel,
  stats,
  visual = true,
  variant,
  locale = "nl",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  stats?: { value: string; label: string }[];
  visual?: boolean;
  variant?: HeroVariant;
  locale?: Locale;
}) {
  const t = HERO_TEKST[locale];
  const statRijen = stats ?? [
    { value: String(BEDRIJFSCIJFERS.jarenErvaring), label: t.jaren },
    { value: BEDRIJFSCIJFERS.reviewScore, label: t.reviews },
    { value: BEDRIJFSCIJFERS.aantalKlanten, label: t.klanten },
  ];
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
              to={t.naar}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              {ctaLabel ?? t.cta} <ArrowRight className="size-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink"
            >
              <Phone className="size-4 text-brand-red" /> {PHONE}
            </a>
          </div>
          {statRijen.length > 0 && (
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-line pt-6">
              {statRijen.map((s, i) => {
                const Icon = [Award, Star, Users][i % 3];
                return (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="flex items-center gap-2 text-2xl font-semibold text-brand-green sm:text-3xl">
                      <Icon className="size-5 shrink-0 text-brand-green" strokeWidth={2.2} aria-hidden="true" />
                      {s.value}
                    </dd>
                    <p className="mt-1 text-xs font-medium leading-snug text-brand-green">{s.label}</p>
                  </div>
                );
              })}
            </dl>
          )}
        </div>
        {visual && <HeroVisual variant={heroVariant} locale={locale} />}
      </div>
    </div>
  );
}

export type Faq = { q: string; a: string };

const FAQ_TEKST = {
  nl: {
    titel: "Veelgestelde vragen",
    blurb: "Staat jouw vraag er niet bij? Bel of mail gerust, je krijgt altijd antwoord van mij persoonlijk.",
  },
  en: {
    titel: "Frequently asked questions",
    blurb: "Question not covered here? Call or email and you'll always get an answer from me personally.",
  },
} as const;

export function FaqBlock({
  items,
  title,
  locale = "nl",
}: {
  items: Faq[];
  title?: string;
  locale?: Locale;
}) {
  const t = FAQ_TEKST[locale];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="border-t border-brand-line bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="FAQ" title={title ?? t.titel} />
          <div className="mt-8 flex items-center gap-4">
            <img
              src={brittPortret.url}
              alt="Britt Daemen, oprichter van B. Analyzed"
              width={176}
              height={176}
              loading="lazy"
              decoding="async"
              className="size-24 rounded-full object-cover ring-4 ring-brand-green/20 sm:size-28"
            />
            <div>
              <p className="text-base font-semibold text-brand-ink">Britt Daemen</p>
              <p className="mt-1 text-sm leading-relaxed text-brand-muted">{t.blurb}</p>
              <a href={PHONE_HREF} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink">
                <Phone className="size-4 text-brand-green" /> {PHONE}
              </a>
            </div>
          </div>
        </div>
        {/* Het FAQPage-schema staat in de `head` van de route zelf. Hier geen
            tweede JSON-LD-blok renderen: twee FAQPage-objecten op één pagina
            leveren dubbele markup op. */}
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

const CTA_TEKST = {
  nl: {
    titel: "Wil je weten hoe zichtbaar je nu bent, in Google én in AI?",
    intro:
      "Vraag de gratis scan aan. Je krijgt een persoonlijke video-analyse met de drie dingen die op jouw site het meeste opleveren.",
    knop: "Gratis scan aanvragen",
    whatsapp: "Even sparren via WhatsApp",
    naar: "/gratis-seo-scan/",
  },
  en: {
    titel: "Want to know how visible you are right now, in Google and in AI?",
    intro:
      "Request the free scan. You'll get a personal video analysis covering the three things that would move the needle most on your site.",
    knop: "Request your free scan",
    whatsapp: "Have a quick chat on WhatsApp",
    naar: "/en/free-scan/",
  },
} as const;

export function CtaBand({
  title,
  intro,
  locale = "nl",
}: {
  title?: string;
  intro?: string;
  locale?: Locale;
}) {
  const t = CTA_TEKST[locale];
  return (
    <section className="border-y border-brand-line bg-brand-sand text-brand-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight">{title ?? t.titel}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">{intro ?? t.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to={t.naar}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              {t.knop} <ArrowRight className="size-4" />
            </Link>
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-6 py-3.5 text-sm font-semibold text-brand-ink"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
        <LeadForm id="cta-scan" compact locale={locale} />
      </div>
    </section>
  );
}
/**
 * Tabel voor vergelijkingen, benchmarks en prijsoverzichten. Scrollt horizontaal
 * mee op mobiel, zodat brede tabellen de pagina niet oprekken.
 */
export function DataTable({
  caption,
  head,
  rows,
  highlightRow,
  footnote,
}: {
  caption?: string;
  head: string[];
  rows: string[][];
  highlightRow?: number;
  footnote?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-line bg-white">
      {caption && (
        <div className="border-b border-brand-line px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          {caption}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-brand-sand/60">
              {head.map((h) => (
                <th key={h} scope="col" className="px-6 py-3 font-semibold text-brand-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r[0]}
                className={`border-t border-brand-line ${i === highlightRow ? "bg-brand-green/10" : ""}`}
              >
                {r.map((cell, j) => (
                  <td
                    key={cell + j}
                    className={`px-6 py-4 ${j === 0 ? "font-medium text-brand-ink" : "text-brand-muted"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="border-t border-brand-line px-6 py-4 text-xs leading-relaxed text-brand-muted">
          {footnote}
        </p>
      )}
    </div>
  );
}

/**
 * Eén inhoudelijk blok onder een H2. `answer` is het directe antwoord van 40 tot
 * 60 woorden dat meteen onder de kop staat: dat is de passage die Google en
 * AI-antwoordmachines als los citaat kunnen overnemen.
 */
export type ContentBlock = {
  h: string;
  answer?: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
  table?: {
    caption?: string;
    head: string[];
    rows: string[][];
    highlightRow?: number;
    footnote?: string;
  };
  note?: string;
  /** Verwijzing naar de case waar het cijfer in de note vandaan komt. */
  caseLink?: { label: string; slug: string };
};

function ContentBlockBody({ block }: { block: ContentBlock }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{block.h}</h2>
      {block.answer && (
        <p className="mt-4 text-lg leading-relaxed text-brand-ink">{block.answer}</p>
      )}
      {block.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-brand-muted">
          {p}
        </p>
      ))}
      {block.bullets && (
        <ul className="mt-5 space-y-3">
          {block.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-base leading-relaxed text-brand-muted">
              <Check className="mt-1 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
              {b}
            </li>
          ))}
        </ul>
      )}
      {block.steps && (
        <ol className="mt-6 space-y-5">
          {block.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-sand text-sm font-semibold text-brand-ink">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-brand-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
      {block.table && (
        <div className="mt-6">
          <DataTable {...block.table} />
        </div>
      )}
      {block.note && (
        <div className="mt-5 rounded-2xl border border-brand-line bg-brand-sand p-5">
          <p className="text-sm leading-relaxed text-brand-muted">{block.note}</p>
          {block.caseLink && (
            <Link
              to="/cases/$slug/"
              params={{ slug: block.caseLink.slug }}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:text-brand-red"
            >
              {block.caseLink.label} <ArrowRight className="size-3.5 text-brand-red" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Reeks H2-blokken in één sectie. Gebruikt op pagina's die een zoekvraag
 * uitputtend beantwoorden in plaats van alleen een dienst aanprijzen.
 */
export function ContentSections({
  blocks,
  eyebrow,
  title,
  intro,
  className = "",
  id,
}: {
  blocks: ContentBlock[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  id?: string;
}) {
  return (
    <Section id={id} className={className}>
      {title && <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />}
      <div className={`max-w-3xl space-y-12 ${title ? "mt-12" : ""}`}>
        {blocks.map((b) => (
          <ContentBlockBody key={b.h} block={b} />
        ))}
      </div>
    </Section>
  );
}

/**
 * Blok met interne links onderaan een pagina. Ankertekst is altijd beschrijvend
 * en bevat het doelzoekwoord: "lees meer" en "klik hier" geven Google geen
 * enkel signaal over waar de link heen gaat.
 */
export function RelatedLinks({
  items,
  title = "Verder lezen",
  className = "",
}: {
  items: { label: string; to: string; note?: string }[];
  title?: string;
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <Section className={`border-t border-brand-line ${className}`}>
      <SectionHeading eyebrow="Interne links" title={title} />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <li key={r.to}>
            <Link
              to={r.to}
              className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 transition-colors hover:border-brand-ink"
            >
              <span className="inline-flex items-center gap-2 text-base font-semibold text-brand-ink">
                {r.label}
                <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
              </span>
              {r.note && <span className="mt-2 text-sm leading-relaxed text-brand-muted">{r.note}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
