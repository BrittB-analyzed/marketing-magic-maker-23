import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { LeadForm } from "./lead-form";
import { CtaBand, Eyebrow, Faq, FaqBlock, PageHero, Section, SectionHeading } from "./page-bits";

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
};

export function ServicePage(props: ServicePageProps) {
  return (
    <>
      <PageHero eyebrow={props.eyebrow} title={props.title} intro={props.intro} />

      <Section>
        <SectionHeading eyebrow="Voor wie" title="Herken je één van deze situaties?" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {props.forWho.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-line bg-white p-7">
              <h3 className="text-base font-semibold">{item.title}</h3>
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
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-line text-sm font-semibold">
                    {i + 1}
                  </span>
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
          </div>
          <LeadForm id="scan" />
        </div>
      </Section>

      <FaqBlock items={props.faq} />
      <CtaBand />
    </>
  );
}