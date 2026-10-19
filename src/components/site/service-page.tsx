import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { LeadForm } from "./lead-form";
import { CtaBand, Eyebrow, Faq, FaqBlock, PageHero, Section, SectionHeading } from "./page-bits";
import { BrandIcon, type BrandIconName } from "./brand-icon";
import type { Locale } from "@/lib/i18n";

const FOR_WHO_ICONS: BrandIconName[] = ["keywords", "audit", "groei"];
const STEP_ICONS: BrandIconName[] = ["kennismaking", "strategie", "uitvoering", "monitoring", "grafiek"];

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  forWho: { title: string; body: string }[];
  deliverables: string[];
  steps: { title: string; body: string }[];
  connection: string;
  price: { from: string; note: string };
  faq: Faq[];
  related?: { label: string; to: string }[];
  /** Extra inhoudelijke secties, gerenderd tussen het aanbod en de FAQ. */
  extra?: React.ReactNode;
  locale?: Locale;
};

const SP_TEKST = {
  nl: {
    voorWieEyebrow: "Voor wie",
    voorWieTitel: "Herken je één van deze situaties?",
    krijgtEyebrow: "Wat je krijgt",
    krijgtTitel: "Concrete deliverables, geen beloftes",
    werkwijze: "Werkwijze",
    samenhangEyebrow: "Samenhang",
    samenhangTitel: "Hoe dit samenwerkt met de andere pijlers",
    kost: "Wat het kost",
    tarieven: "Bekijk alle tarieven",
    tarievenNaar: "/tarieven-seo/",
    verder: "Verder lezen",
  },
  en: {
    voorWieEyebrow: "Who it is for",
    voorWieTitel: "Does one of these sound familiar?",
    krijgtEyebrow: "What you get",
    krijgtTitel: "Concrete deliverables, not promises",
    werkwijze: "How we work",
    samenhangEyebrow: "How it connects",
    samenhangTitel: "How this works with the other pillars",
    kost: "What it costs",
    tarieven: "See all pricing",
    tarievenNaar: "/en/pricing/",
    verder: "Read on",
  },
} as const;

export function ServicePage(props: ServicePageProps) {
  const locale = props.locale ?? "nl";
  const t = SP_TEKST[locale];
  return (
    <>
      <PageHero eyebrow={props.eyebrow} title={props.title} intro={props.intro} locale={locale} />

      <Section>
        <SectionHeading eyebrow={t.voorWieEyebrow} title={t.voorWieTitel} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {props.forWho.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-brand-line bg-white p-7">
              <BrandIcon name={FOR_WHO_ICONS[i % FOR_WHO_ICONS.length]} />
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-brand-line bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.krijgtEyebrow} title={t.krijgtTitel} />
            <ul className="mt-8 space-y-3">
              {props.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{t.werkwijze}</Eyebrow>
            <ol className="mt-6 space-y-6">
              {props.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <BrandIcon name={STEP_ICONS[i % STEP_ICONS.length]} size="sm" />
                  <div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={t.samenhangEyebrow} title={t.samenhangTitel} intro={props.connection} />
            <div className="mt-8 rounded-2xl border border-brand-line bg-brand-sand p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                {t.kost}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">{props.price.from}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{props.price.note}</p>
              <Link
                to={t.tarievenNaar}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink"
              >
                {t.tarieven} <ArrowRight className="size-4 text-brand-red" />
              </Link>
            </div>
            {props.related && props.related.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  {t.verder}
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {props.related.map((r) => (
                    <li key={r.to}>
                      <Link
                        to={r.to}
                        className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-brand-red"
                      >
                        {r.label} <ArrowRight className="size-3.5 text-brand-red" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <LeadForm id="scan" locale={locale} />
        </div>
      </Section>

      {props.extra}

      <FaqBlock items={props.faq} locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}