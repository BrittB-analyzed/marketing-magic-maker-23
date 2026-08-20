import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { LeadForm } from "./lead-form";
import { CtaBand, Eyebrow, Faq, FaqBlock, PageHero, Section, SectionHeading } from "./page-bits";
import { BrandIcon, type BrandIconName } from "./brand-icon";

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
};

export function ServicePage(props: ServicePageProps) {
  return (
    <>
      <PageHero eyebrow={props.eyebrow} title={props.title} intro={props.intro} />

      <Section>
        <SectionHeading eyebrow="Voor wie" title="Herken je één van deze situaties?" />
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
            <SectionHeading eyebrow="Wat je krijgt" title="Concrete deliverables, geen beloftes" />
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
            <Eyebrow>Werkwijze</Eyebrow>
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
            <SectionHeading eyebrow="Samenhang" title="Hoe dit samenwerkt met de andere pijlers" intro={props.connection} />
            <div className="mt-8 rounded-2xl border border-brand-line bg-brand-sand p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Wat het kost
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">{props.price.from}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{props.price.note}</p>
              <Link
                to="/tarieven-seo/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink"
              >
                Bekijk alle tarieven <ArrowRight className="size-4 text-brand-red" />
              </Link>
            </div>
            {props.related && props.related.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  Verder lezen
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
          <LeadForm id="scan" />
        </div>
      </Section>

      <FaqBlock items={props.faq} />
      <CtaBand />
    </>
  );
}