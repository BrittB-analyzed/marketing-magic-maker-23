import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import { SiteLayout, PHONE, PHONE_HREF, PILLARS, WHATSAPP_HREF } from "@/components/site/site-chrome";
import { LogoStrip } from "@/components/site/logo-strip";
import { BrandIcon, type BrandIconName } from "@/components/site/brand-icon";
import { POST_LIST } from "@/content/blog";
import { LeadForm } from "@/components/site/lead-form";
import {
  CtaBand,
  Eyebrow,
  Faq,
  FaqBlock,
  Section,
  SectionHeading,
  faqJsonLd,
} from "@/components/site/page-bits";
import portretBuiten from "@/assets/photos/portret-buiten.jpg.asset.json";
import aanHetWerk from "@/assets/photos/aan-het-werk.jpg.asset.json";
import dashboardImage from "@/assets/seo-dashboard.jpg";

const FAQ: Faq[] = [
  {
    q: "Wat kost SEO en GEO bij B. Analyzed?",
    a: "Een uitgebreide audit start vanaf € 599,- en een doorlopend SEO- & GEO-pakket vanaf € 999,- per maand, met diverse diensten om uit te kiezen. Losse werkzaamheden factureren we tegen € 90,- per uur. Wat je precies betaalt hangt af van je markt en concurrentie — we werken net zo lang door tot je meetbaar resultaat boekt.",
  },
  {
    q: "Hoe lang duurt het voordat ik resultaat zie?",
    a: "De eerste bewegingen zie je meestal binnen 30 tot 60 dagen op quick wins zoals bestaande pagina's die net buiten de top 10 staan. Structurele groei in organisch verkeer bouw je op in 6 tot 12 maanden. Ads en CRO leveren sneller resultaat en houden de tussenperiode rendabel.",
  },
  {
    q: "Zit ik vast aan een langlopend contract?",
    a: "Nee. We werken met maandelijks opzegbare samenwerkingen na een opstartperiode van drie maanden. Die drie maanden hebben we nodig om onderzoek, strategie en de eerste uitvoering af te ronden.",
  },
  {
    q: "Wat is GEO precies en heb ik dat nodig?",
    a: "GEO staat voor Generative Engine Optimization: zorgen dat jouw bedrijf genoemd en geciteerd wordt in antwoorden van ChatGPT, Gemini, Perplexity en Google AI Overviews. Je hebt het nodig zodra jouw doelgroep vragen stelt aan AI in plaats van aan Google — en dat gebeurt nu al. GEO komt naast SEO, niet in plaats daarvan.",
  },
  {
    q: "Wie doet het werk?",
    a: "Je vaste specialist voert het werk zelf uit. Geen accountmanager tussen jou en de uitvoering, geen doorverkoop aan een ander bureau.",
  },
  {
    q: "Hoe rapporteren jullie?",
    a: "Elke maand krijg je een Loom-video waarin we je dashboard doorlopen: wat we hebben gedaan, wat het opleverde en wat er de komende maand gebeurt. Het dashboard staat 24/7 voor je open.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B. Analyzed — Gevonden in Google, genoemd in AI" },
      {
        name: "description",
        content:
          "Online marketingbureau voor het MKB. SEO, GEO, Ads en CRO in één verhaal: gevonden worden in Google, genoemd worden in AI en bezoekers omzetten in aanvragen.",
      },
      { property: "og:title", content: "B. Analyzed — Gevonden in Google, genoemd in AI" },
      {
        property: "og:description",
        content:
          "SEO, GEO, Ads en CRO voor het MKB. Vraag je gratis SEO & GEO-scan aan en krijg een persoonlijke video-analyse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <LogoStrip />
      <BigStats />
      <ResultCards />
      <Shift />
      <Pillars />
      <Proof />
      <DashboardShowcase />
      <Method />
      <PersonalTouch />
      <Testimonials />
      <BlogTeasers />
      <ScanSection />
      <FaqBlock items={FAQ} />
      <CtaBand />
    </SiteLayout>
  );
}

function Hero() {
  return heroInner();
}

function BlogTeasers() {
  const posts = POST_LIST.slice(0, 3);
  return (
    <Section className="border-y border-brand-line bg-white">
      <SectionHeading
        eyebrow="Kennisbank"
        title="Lees onze laatste artikelen"
        intro="Praktische stukken over SEO, GEO, Google Ads en conversie-optimalisatie — geschreven voor ondernemers."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/$slug/"
            params={{ slug: p.slug }}
            className="flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-colors hover:border-brand-ink"
          >
            {p.image && (
              <img src={p.image} alt={p.imageAlt ?? p.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
            )}
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{p.tag}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Lees het artikel <ArrowRight className="size-4 text-brand-red" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/blog/"
          className="inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
        >
          Bekijk alle artikelen
        </Link>
      </div>
    </Section>
  );
}

function heroInner() {
  return (
    <div className="border-b border-brand-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
          <Eyebrow>SEO · GEO · Ads · CRO</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Gevonden in Google.
            <br />
            Genoemd in AI.
            <br />
            <span className="text-brand-red">Meer aanvragen.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
            B. Analyzed is hét datagedreven full service online marketingbureau dat al behoorlijk wat
            klanten blij heeft gemaakt. Onafhankelijk, persoonlijk en transparant — en we werken net
            zo lang door tot jij meetbaar resultaat boekt.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Vergroot je vindbaarheid in Google én AI-zoekmachines",
              "Krijg meer relevante bezoekers naar je site",
              "Vergroot je aantal leads en sales online",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-[15px] text-brand-ink">
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/gratis-seo-scan/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              Vraag je gratis scan aan <ArrowRight className="size-4" />
            </Link>
            <Link to="/online-marketing-cases/" className="text-sm font-semibold underline underline-offset-4">
              Bekijk onze cases
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand-star text-brand-star" strokeWidth={0} />
              ))}
            </span>
            <p className="text-sm text-brand-muted">
              <span className="font-semibold text-brand-ink">9,8</span> gemiddeld · 47 reviews
            </p>
          </div>
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
}

function HeroForm() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-brand-line bg-white p-3 shadow-[0_30px_80px_-30px_rgba(20,24,31,0.25)]">
        <LeadForm id="hero-form" compact />
      </div>
      <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-md bg-brand-sand px-3 py-2 text-xs font-semibold text-brand-ink shadow-lg ring-1 ring-brand-line md:block">
        <span className="mr-1 text-brand-green">●</span>
        Reactie binnen 24u
      </div>
    </div>
  );
}

const BIG_STATS = [
  { value: "386", label: "nummer 1-posities behaald voor klanten in Google" },
  { value: "+25", label: "SEO-opdrachtgevers met minimaal 150% organische groei in 1 jaar" },
  { value: "+50", label: "tevreden SEO-klanten met minimaal 300% groei in organisch verkeer" },
  { value: "15", label: "jaar ervaring in SEO, GEO, Ads en conversie-optimalisatie" },
];

function BigStats() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Waarom SEO &amp; GEO geen optie meer is voor het MKB.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {BIG_STATS.map((s) => (
          <div key={s.label}>
            <div className="mb-2 text-5xl font-semibold tracking-tight text-brand-red md:text-6xl">
              {s.value}
            </div>
            <p className="max-w-[26ch] text-sm leading-relaxed text-brand-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const RESULT_CARDS = [
  { label: "Nummer 1-posities", value: "386", note: "Behaald in Google voor onze klanten", wide: true },
  { label: "Linkbuilding netwerk", value: "2.500+", note: null, wide: false },
  { label: "Jaar ervaring", value: "15", note: null, wide: false, accent: true },
];

function ResultCards() {
  return (
    <Section id="resultaten" className="border-y border-brand-line bg-brand-sand">
      <div className="grid gap-4 md:grid-cols-4">
        {RESULT_CARDS.map((s) => (
          <div
            key={s.label}
            className={`flex h-48 flex-col justify-between rounded-2xl border p-8 md:h-64 ${
              s.accent
                ? "border-brand-red bg-brand-red text-white"
                : "border-brand-line bg-white text-brand-ink"
            } ${s.wide ? "md:col-span-2" : ""}`}
          >
            <div
              className={`text-sm font-semibold uppercase tracking-[0.14em] ${
                s.accent ? "opacity-80" : "text-brand-red"
              }`}
            >
              {s.label}
            </div>
            <div>
              <div className="mb-2 text-5xl font-semibold tracking-tight">{s.value}</div>
              {s.note && <p className="text-sm text-brand-muted">{s.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DashboardShowcase() {
  return (
    <Section className="border-y border-brand-line bg-brand-sand">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Transparant dashboard</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Altijd inzicht in jouw rankings, verkeer en ROI.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-brand-muted">
            Geen vage PDF-rapportjes. Jij krijgt een live dashboard waarin je precies ziet welke
            euro's rendement opleveren — wanneer jij wilt.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              { Icon: TrendingUp, t: "Live keyword posities & organisch verkeer" },
              { Icon: Sparkles, t: "GEO-monitoring: zichtbaarheid in ChatGPT & Perplexity" },
              { Icon: ShieldCheck, t: "Maandelijkse rapportages, helder uitgelegd" },
              { Icon: Clock, t: "Vaste specialist, reactie binnen 24 uur" },
            ].map(({ Icon, t }) => (
              <li key={t} className="flex items-center gap-3 text-brand-ink">
                <span className="flex size-7 items-center justify-center rounded-md bg-white ring-1 ring-brand-line">
                  <Icon className="size-4 text-brand-green" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-brand-line bg-white p-3 shadow-xl">
            <img
              src={dashboardImage}
              alt="SEO- en GEO-dashboard met organisch verkeer en keyword rankings"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-md"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-lg border border-brand-line bg-white p-4 shadow-xl">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
              Groei deze maand
            </div>
            <div className="text-2xl font-semibold text-brand-green">+312,4%</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Shift() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="De verschuiving"
            title="Ranken alleen is niet meer genoeg"
            intro="Steeds meer zoekopdrachten eindigen zonder klik: AI geeft het antwoord direct. Sta je niet in dat antwoord, dan besta je voor die zoeker niet — ook al sta je op één in Google."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted">
            Daarom werken wij met vier pijlers in plaats van dertien losse diensten. SEO en GEO zorgen
            dat je gevonden én genoemd wordt, Ads koopt het verkeer dat vandaag moet converteren, en
            CRO zorgt dat je van dat verkeer ook echt iets terugziet.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: "Google", v: "Gevonden worden", d: "Klassieke zoekresultaten, maps en features." },
            { k: "ChatGPT", v: "Genoemd worden", d: "Als bron in het gegenereerde antwoord." },
            { k: "Gemini & AI Overviews", v: "Geciteerd worden", d: "Bovenaan het antwoord van Google zelf." },
            { k: "Perplexity", v: "Aanbevolen worden", d: "In vergelijkingen en aanbiederslijstjes." },
          ].map((item) => (
            <div key={item.k} className="rounded-2xl border border-brand-line bg-white p-6">
              {aiLogo(item.k) ? (
                <img
                  src={aiLogo(item.k)}
                  alt={`Logo ${item.k}`}
                  loading="lazy"
                  className="h-6 w-auto max-w-[110px] object-contain"
                />
              ) : null}
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.k}</p>
              <p className="mt-3 text-lg font-semibold tracking-tight">{item.v}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      <AiEngineLogos className="mt-12 border-t border-brand-line pt-8" />
    </Section>
  );
}

const PILLAR_DETAIL: Record<string, { line: string; items: string[] }> = {
  SEO: {
    line: "Structurele groei in organisch verkeer dat blijft renderen.",
    items: ["Technische fundering en Core Web Vitals", "Contentclusters op koopintentie", "Autoriteit en linkbuilding"],
  },
  GEO: {
    line: "Genoemd worden in ChatGPT, Gemini, Perplexity en AI Overviews.",
    items: ["Citeerbare contentstructuur", "Schema-markup en entiteitsopbouw", "Monitoring van AI-vermeldingen"],
  },
  Ads: {
    line: "Verkeer kopen dat vandaag al converteert, zonder budget te verbranden.",
    items: ["Search- en Performance Max-campagnes", "Zoekterm- en biedstrategie", "Wekelijkse optimalisatie"],
  },
  CRO: {
    line: "Meer aanvragen uit het verkeer dat je nu al hebt.",
    items: ["Analyse van je conversiepaden", "A/B-tests op formulieren en pagina's", "Heldere, meetbare doelen"],
  },
};

function Pillars() {
  const PILLAR_ICON: Record<string, BrandIconName> = {
    SEO: "seo",
    GEO: "geo",
    Ads: "groei",
    CRO: "cro",
  };
  return (
    <Section className="border-y border-brand-line bg-white">
      <SectionHeading
        eyebrow="Vier pijlers"
        title="Eén verhaal, vier disciplines"
        intro="Je kiest wat past bij jouw situatie. Ze versterken elkaar, maar je hoeft niet alles tegelijk te doen."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {PILLARS.map((p) => {
          const detail = PILLAR_DETAIL[p.name];
          return (
            <Link
              key={p.name}
              to={p.to}
              className="group rounded-2xl border border-brand-line bg-brand-canvas p-8 transition-colors hover:border-brand-ink"
            >
              <div className="flex items-center gap-3">
                <BrandIcon name={PILLAR_ICON[p.name]} />
                <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                {p.name === "GEO" && (
                  <span className="rounded-full bg-brand-red-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-red">
                    nieuw
                  </span>
                )}
              </div>
              <p className="mt-3 text-base text-brand-ink">{detail.line}</p>
              <ul className="mt-5 space-y-2">
                {detail.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-brand-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                    {i}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Meer over {p.name}
                <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-brand-muted">
        Ook mogelijk: social media, e-mailmarketing, GTM en meer —{" "}
        <Link to="/online-marketing/" className="font-semibold text-brand-ink underline underline-offset-4">
          bekijk alle diensten
        </Link>
      </p>
    </Section>
  );
}

function Proof() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Bewijs"
        title="Twee cases, met de cijfers erbij"
        intro="Startsituatie, ingreep, resultaat en periode. Zonder screenshot van het dashboard vertellen we het niet."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[
          {
            slug: "6600x-meubel-outlet-nummer-1-in-google",
            tag: "Meubel & Outlet Weert",
            title: "6.600x per maand gezocht op 'meubel outlet' en nummer 1 in Google",
            start: "De website werd nauwelijks gevonden, minder dan 500 organische bezoekers per maand.",
            action: "Categoriepagina's geoptimaliseerd, een blog gelanceerd en Google Ads opnieuw ingericht.",
            result: "+680% organisch verkeer naar bijna 5.500 bezoekers/maand en positie 1 op 'meubel outlet'.",
          },
          {
            slug: "meer-omzet-sleep-factory-bv",
            tag: "Sleep Factory BV",
            title: "800% groei in het aantal online transacties",
            start: "Beperkt organisch en betaald verkeer voor de boxspring-webshop.",
            action: "SEO- en Google Ads-strategie gericht op termen als 'goedkope boxspring'.",
            result: "800% meer online transacties in 1,5 jaar, top 5-posities en 3.000+ bezoekers per maand.",
          },
        ].map((c) => (
          <Link
            key={c.title}
            to="/cases/$slug/"
            params={{ slug: c.slug }}
            className="block rounded-2xl border border-brand-line bg-white p-8 transition-colors hover:border-brand-ink"
          >
            <span className="rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-brand-muted">
              {c.tag}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{c.title}</h3>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Startsituatie", c.start],
                ["Ingreep", c.action],
                ["Resultaat", c.result],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">{k}</dt>
                  <dd className="mt-1 leading-relaxed text-brand-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-brand-muted">
              Lees de volledige case met alle cijfers en grafieken →
            </p>
          </Link>
        ))}
      </div>
      <Link
        to="/online-marketing-cases/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
      >
        Alle cases bekijken <ArrowRight className="size-4 text-brand-red" />
      </Link>
    </Section>
  );
}

function Method() {
  const steps: { t: string; d: string; icon: BrandIconName }[] = [
    { t: "Onderzoek", d: "We brengen je markt, concurrentie en huidige zichtbaarheid in kaart — in Google én in AI.", icon: "audit" },
    { t: "Strategie", d: "Welke pijlers je nodig hebt, in welke volgorde, met welk budget en welk verwacht rendement.", icon: "strategie" },
    { t: "Uitvoering", d: "Wij doen het werk. Jij ziet in het dashboard precies wat er wanneer gebeurt.", icon: "uitvoering" },
    { t: "Optimalisatie", d: "Elke maand een Loom-video: wat werkte, wat niet, en wat we daarom aanpassen.", icon: "monitoring" },
  ];
  return (
    <Section className="border-y border-brand-line bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Werkwijze"
            title="Je ziet precies wat we doen"
            intro="Geen black box en geen spreadsheet waar je zelf uit moet opmaken wat er gebeurd is."
          />
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-sand p-6">
            <Video className="mt-0.5 size-5 shrink-0 text-brand-red" />
            <p className="text-sm leading-relaxed text-brand-muted">
              Elke maand een persoonlijke Loom-video waarin je specialist je resultaten doorloopt. In
              gewone taal, zonder jargon.
            </p>
          </div>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-brand-line p-7">
              <div className="flex items-center justify-between">
                <BrandIcon name={s.icon} />
                <span className="text-sm font-semibold text-brand-red">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function PersonalTouch() {
  return (
    <Section className="border-y border-brand-line bg-brand-canvas">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-brand-line sm:aspect-[3/4]">
            <img
              src={portretBuiten.url}
              alt="Sanne van B. Analyzed — online marketing specialist"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden w-48 overflow-hidden rounded-2xl border-4 border-brand-canvas shadow-lg sm:block lg:-right-10 lg:w-56">
            <img
              src={aanHetWerk.url}
              alt="Aan het werk met een laptop"
              className="aspect-square w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Persoonlijk"
            title="Geen accountmanager. Wel een vaste specialist."
            intro="Je belt, mailt en spart met de persoon die je strategie bedenkt én uitvoert. Dat scheelt gedoe, misverstanden en een hoop uren."
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-muted">
            <p>
              In 2014 startte Britt Daemen als freelance marketeer onder de naam B. Analyzed
              marketing, met SEO en Google Ads als specialisme. Inmiddels runt ze met een team van
              freelancers wereldwijd een fullservice online marketingbureau dat ieder bedrijf van A
              tot Z ontzorgt.
            </p>
            <p>
              We werken niet met pakketjes, junior-medewerkers of mooie praatjes. Wel met eerlijk
              advies, duidelijke afspraken en maandelijkse Loom-video's waarin je zelf ziet wat er
              gebeurt — tot je meetbaar resultaat boekt.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["15 jaar ervaring", "Sinds 2014 actief als online marketingbureau."],
              ["Transparante werkwijze", "Alles laten we zien via Loom-video's."],
              ["Gegarandeerde top 10", "Alleen de eerste pagina van Google telt."],
              ["Trouwe opdrachtgevers", "Klanten waar we al jaren voor werken."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-brand-line bg-white p-5">
                <h3 className="text-sm font-semibold text-brand-ink">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">{d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/online-marketing-bedrijf/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
          >
            Meer over ons <ArrowRight className="size-4 text-brand-red" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "Britt denkt out of the box en kan mij ook enorm motiveren door te pakken. In 1,5 jaar tijd beschik ik over meer kennis over mijn bedrijf en heb ik er een hoop mooie opdrachten aan over gehouden.",
      n: "Kevin Jaspers",
      r: "Eigenaar",
    },
    {
      q: "Sterke groei door de inspanningen van Britt.",
      n: "Ron Thielen",
      r: "Opdrachtgever",
    },
    {
      q: "Britt is betrokken en heeft veel kennis.",
      n: "Wesley Kissen",
      r: "Eigenaar Steel Garden",
    },
  ];
  return (
    <Section>
      <SectionHeading eyebrow="Klanten" title="Beoordeeld met een 9,8" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((t) => (
          <figure key={t.q} className="rounded-2xl border border-brand-line bg-white p-7">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand-star text-brand-star" strokeWidth={0} />
              ))}
            </span>
            <blockquote className="mt-4 text-base leading-relaxed">“{t.q}”</blockquote>
            <figcaption className="mt-5 text-sm text-brand-muted">
              <span className="font-semibold text-brand-ink">{t.n}</span> · {t.r}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function ScanSection() {
  return (
    <Section id="scan" className="border-t border-brand-line bg-brand-sand">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Gratis scan"
            title="Begin met weten waar je staat"
            intro="De gratis quick scan laat zien hoe zichtbaar je bent in Google én in AI-antwoorden. Wil je daarna dieper? De uitgebreide audit met concrete actiepunten start vanaf € 599,-."
          />
          <ul className="mt-8 space-y-3 text-sm text-brand-muted">
            {[
              "Gratis quick scan: je positie in Google en in AI-antwoorden",
              "Uitgebreide audit vanaf € 599,- met prioriteiten en actiepunten",
              "Doorlopend SEO- & GEO-pakket vanaf € 999,- per maand",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2">
              <Phone className="size-4 text-brand-red" /> {PHONE}
            </a>
            <a href={WHATSAPP_HREF} className="inline-flex items-center gap-2">
              <MessageSquare className="size-4 text-brand-red" /> WhatsApp
            </a>
          </div>
        </div>
        <LeadForm id="scan-form" />
      </div>
    </Section>
  );
}