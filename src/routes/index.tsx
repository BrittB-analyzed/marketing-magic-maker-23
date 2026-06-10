import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Search,
  LineChart,
  Link2,
  MapPin,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import dashboardImage from "@/assets/seo-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEO voor MKB — Meetbaar resultaat | B. Analyzed" },
      {
        name: "description",
        content:
          "Data-gedreven SEO voor MKB-ondernemers. Domineer Google met een gratis SEO-scan, helder rapport en bewezen resultaat. 9.8/10 klantbeoordeling.",
      },
      { property: "og:title", content: "SEO voor MKB — Meetbaar resultaat | B. Analyzed" },
      {
        property: "og:description",
        content:
          "Data-gedreven SEO voor MKB. Vraag binnen 60 seconden je gratis SEO-rapport aan.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-brand-red/10">
      <Nav />
      <Hero />
      <Results />
      <Process />
      <Services />
      <Cases />
      <FAQ />
      <CTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-sm bg-brand-red font-semibold text-white">
            B
          </div>
          <span className="text-sm font-semibold uppercase tracking-tight">Analyzed</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#resultaten" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            Resultaten
          </a>
          <a href="#werkwijze" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            Werkwijze
          </a>
          <a href="#cases" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            Cases
          </a>
          <a href="#faq" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            FAQ
          </a>
        </div>
        <a
          href="#cta"
          className="h-9 rounded-md bg-brand-green px-4 text-sm font-medium leading-9 text-white ring-1 ring-brand-green/20 transition hover:brightness-110"
        >
          Gratis SEO scan
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded bg-zinc-100 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
              <span className="size-1.5 animate-pulse rounded-full bg-brand-green" />
              Live Performance Data
            </div>
            <h1 className="mb-6 text-balance text-5xl font-semibold leading-tight tracking-tight lg:text-6xl">
              SEO voor MKB met <span className="text-brand-red">meetbaar</span> resultaat.
            </h1>
            <p className="mb-10 max-w-[48ch] text-pretty text-lg leading-relaxed text-zinc-600">
              Geen vage beloftes, maar harde cijfers. Wij domineren de zoekresultaten voor MKB-ondernemers
              door data-gedreven strategie.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-green px-6 font-medium text-white ring-1 ring-brand-green/20 transition hover:brightness-110"
              >
                Start gratis analyse
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#cases"
                className="inline-flex h-12 items-center rounded-md border border-zinc-200 bg-white px-6 font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                Bekijk cases
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-70">
              <span className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                <Star className="size-3.5 fill-brand-red text-brand-red" />
                9.8/10 — 200+ reviews
              </span>
              <span className="font-mono text-xs text-zinc-500">Google Partner</span>
              <span className="font-mono text-xs text-zinc-500">12+ jaar ervaring</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl bg-white p-4 shadow-2xl shadow-zinc-200/60 ring-1 ring-black/5">
              <img
                src={dashboardImage}
                alt="SEO dashboard met organisch verkeer en keyword rankings"
                width={1280}
                height={960}
                className="w-full rounded-md"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="mb-1 font-mono text-[10px] uppercase text-zinc-400">Groei deze maand</div>
              <div className="font-mono text-2xl font-semibold text-brand-green">+312.4%</div>
            </div>
            <div className="absolute -top-4 -right-4 hidden rounded-lg bg-zinc-900 p-3 shadow-xl md:block">
              <div className="font-mono text-[10px] uppercase text-zinc-400">Top 3 posities</div>
              <div className="font-mono text-xl font-semibold text-white">1.4k+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: "Keyword Density", value: "1.4k+", note: "Top 3 posities behaald voor MKB'ers", wide: true },
  { label: "ROI Gemiddelde", value: "12x", note: null, wide: false },
  { label: "Klanten", value: "150+", note: null, wide: false, accent: true },
];

function Results() {
  return (
    <section id="resultaten" className="border-y border-zinc-200/60 bg-zinc-100/60 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`flex h-48 flex-col justify-between rounded-2xl p-8 ring-1 md:h-64 ${
                s.accent
                  ? "bg-brand-red text-white ring-brand-red/30"
                  : "bg-white text-zinc-900 ring-black/5"
              } ${s.wide ? "md:col-span-2" : ""}`}
            >
              <div
                className={`font-mono text-sm uppercase ${
                  s.accent ? "opacity-80" : "text-brand-red"
                }`}
              >
                {s.label}
              </div>
              <div>
                <div className="mb-2 font-mono text-5xl font-semibold tracking-tighter">
                  {s.value}
                </div>
                {s.note && <div className="text-sm text-zinc-500">{s.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Deep-Scan Analyse",
    body: "We kruipen door je site zoals Google dat doet. Elk technisch mankement leggen we bloot.",
  },
  {
    n: "02",
    title: "Strategie & Content",
    body: "Een plan gericht op conversie en zoekwoorden waar jouw klanten écht naar zoeken.",
  },
  {
    n: "03",
    title: "Autoriteit & Groei",
    body: "Door kwalitatieve links en doorlopende optimalisatie wordt jouw domein de leider.",
  },
];

function Process() {
  return (
    <section id="werkwijze" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Drie stappen naar dominantie.
          </h2>
          <div className="h-1 w-12 bg-brand-red" />
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <div className="mb-6 font-mono text-6xl font-semibold text-zinc-200 transition-colors group-hover:text-brand-red/30">
                {s.n}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
              <p className="max-w-[40ch] text-pretty text-zinc-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Search, title: "Technische SEO", body: "Snelheid, indexatie, structured data." },
  { icon: LineChart, title: "Content & Keywords", body: "Teksten die scoren én converteren." },
  { icon: Link2, title: "Linkbuilding", body: "Autoriteit via relevante netwerken." },
  { icon: MapPin, title: "Local SEO", body: "Word gevonden in jouw regio." },
];

function Services() {
  return (
    <section className="border-y border-zinc-200/60 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Wat wij doen.
          </h2>
          <p className="hidden max-w-sm text-sm text-zinc-500 md:block">
            Eén team, vier disciplines. Strak op elkaar afgestemd voor maximale impact.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-zinc-200 p-6 transition-all hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg"
            >
              <s.icon className="mb-6 size-6 text-brand-red" strokeWidth={1.75} />
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="text-sm text-zinc-500">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    tag: "Solar Solutions",
    metric: "+420%",
    label: "Leads via organisch in 6 maanden",
  },
  {
    tag: "Tech-Flow BV",
    metric: "#1",
    label: "Positie op 'software op maat'",
  },
  {
    tag: "Bakkerij De Groot",
    metric: "+186%",
    label: "Lokale zichtbaarheid in 4 maanden",
  },
];

function Cases() {
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Resultaat dat je kunt meten.
          </h2>
          <div className="h-1 w-12 bg-brand-red" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.tag}
              className="flex flex-col justify-between rounded-2xl bg-zinc-900 p-8 text-white"
            >
              <div className="mb-12 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Case · {c.tag}
              </div>
              <div>
                <div className="mb-2 font-mono text-5xl font-semibold tracking-tighter text-brand-green">
                  {c.metric}
                </div>
                <div className="text-sm text-zinc-400">{c.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Hoe lang duurt het voor ik resultaat zie?",
    a: "Eerste verbeteringen meet je binnen 4-8 weken. Structurele groei in organisch verkeer zien klanten gemiddeld vanaf maand 3.",
  },
  {
    q: "Wat kost een SEO-traject bij B. Analyzed?",
    a: "Trajecten starten vanaf €950 per maand. Na de gratis scan krijg je een concreet voorstel op maat — geen verrassingen.",
  },
  {
    q: "Werken jullie ook voor mijn branche?",
    a: "We werken met 150+ MKB-bedrijven in uiteenlopende sectoren — van e-commerce tot lokale dienstverleners en B2B SaaS.",
  },
  {
    q: "Zit ik vast aan een lang contract?",
    a: "Nee. We werken met maandelijks opzegbare trajecten. Resultaat is onze garantie, geen kleine lettertjes.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-zinc-200/60 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">
          Veelgestelde vragen.
        </h2>
        <div className="divide-y divide-zinc-200">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                {open === i ? (
                  <Minus className="size-4 text-brand-red" />
                ) : (
                  <Plus className="size-4 text-zinc-400" />
                )}
              </button>
              {open === i && (
                <p className="pb-6 text-sm leading-relaxed text-zinc-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-8 text-white lg:p-16">
          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                Klaar om je concurrentie in te halen?
              </h2>
              <p className="mb-8 text-zinc-400">
                Vraag binnen 60 seconden je gratis SEO-rapport aan. Onze experts kijken handmatig naar je
                kansen.
              </p>
              <ul className="space-y-4">
                {[
                  "Gratis zoekwoorden onderzoek",
                  "Technisch rapport (PDF)",
                  "Persoonlijk adviesgesprek",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex size-5 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 rounded-2xl bg-white p-8 text-zinc-900 shadow-xl"
            >
              <Field label="Bedrijfsnaam" placeholder="B. Analyzed BV" />
              <Field label="Website URL" type="url" placeholder="www.jouwwebsite.nl" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Naam" placeholder="Jan Jansen" />
                <Field label="Telefoon" type="tel" placeholder="06 12345678" />
              </div>
              <button
                type="submit"
                className="mt-2 h-12 w-full rounded-md bg-brand-green font-medium text-white transition hover:brightness-110"
              >
                Vraag gratis scan aan
              </button>
              <p className="text-center text-[10px] text-zinc-400">
                100% vrijblijvend · Binnen 24 uur antwoord
              </p>
            </form>
          </div>
          <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand-red/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-brand-green/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:ring-1 focus:ring-brand-red/50"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-2 opacity-60">
          <div className="flex size-6 items-center justify-center rounded-sm bg-zinc-900 text-[10px] font-semibold text-white">
            B
          </div>
          <span className="text-xs font-semibold uppercase tracking-tight">Analyzed</span>
        </div>
        <p className="font-mono text-xs text-zinc-400">
          © {new Date().getFullYear()} B. Analyzed — Focus op resultaat.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-zinc-500 transition-colors hover:text-zinc-900">
            Privacy
          </a>
          <a href="#" className="text-xs text-zinc-500 transition-colors hover:text-zinc-900">
            Voorwaarden
          </a>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/90 p-3 backdrop-blur md:hidden">
      <a
        href="#cta"
        className="flex h-12 items-center justify-center gap-2 rounded-md bg-brand-green font-medium text-white"
      >
        Gratis SEO scan aanvragen
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
