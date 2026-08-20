/**
 * Bouwstenen die pagina's citeerbaar maken voor AI Overviews, ChatGPT,
 * Perplexity en featured snippets: definitiezin, vraagkoppen met zelfstandige
 * antwoorden, stappenlijsten, vergelijkingstabellen en een auteursregel.
 */

import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { AUTEUR } from "@/data/organisatie";
import brittPortret from "@/assets/photos/britt-portret.jpg.asset.json";
import { Section, SectionHeading } from "./page-bits";

export type QaItem = { q: string; a: string };
export type Comparison = {
  title: string;
  intro?: string;
  columns: [string, string, string];
  rows: [string, string, string][];
};

export function JsonLd({ json }: { json: string }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/** Definiërende openingszin, direct onder de H1. */
export function Definition({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl border-l-2 border-brand-red pl-4 text-lg font-medium leading-relaxed text-brand-ink">
      {children}
    </p>
  );
}

/** Vraagkoppen (H2/H3) met een zelfstandig antwoord van 40 tot 60 woorden. */
export function QaSection({
  items,
  title = "Veelgestelde vragen, direct beantwoord",
  eyebrow = "In het kort",
  className = "",
}: {
  items: QaItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <Section className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.q} className="rounded-2xl border border-brand-line bg-white p-7">
            <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
            <p className="mt-3 text-base leading-relaxed text-brand-muted">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Genummerde stappenlijst. */
export function StepsList({
  title,
  intro,
  steps,
}: {
  title: string;
  intro?: string;
  steps: string[];
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {intro && <p className="mt-3 text-base leading-relaxed text-brand-muted">{intro}</p>}
      <ol className="mt-6 space-y-4">
        {steps.map((s, i) => (
          <li key={s} className="flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-red-soft text-sm font-semibold text-brand-red">
              {i + 1}
            </span>
            <span className="pt-1 text-sm leading-relaxed text-brand-muted">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Opsomming met vinkjes. */
export function CheckList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
            <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Vergelijkingstabel, wordt bovengemiddeld vaak als snippet overgenomen. */
export function ComparisonTable({ data }: { data: Comparison }) {
  return (
    <Section className="border-y border-brand-line bg-white">
      <SectionHeading eyebrow="Vergelijking" title={data.title} intro={data.intro} />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brand-line">
              {data.columns.map((c, i) => (
                <th key={c} className={`py-4 font-semibold ${i < 2 ? "pr-6" : ""}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-brand-muted">
            {data.rows.map((row) => (
              <tr key={row[0]} className="border-b border-brand-line">
                <th scope="row" className="py-4 pr-6 text-left font-medium text-brand-ink">
                  {row[0]}
                </th>
                <td className="py-4 pr-6">{row[1]}</td>
                <td className="py-4">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/** Zichtbare auteursregel met naam, functie en jaren ervaring. */
export function AuthorLine({ updated }: { updated?: string }) {
  return (
    <div className="border-t border-brand-line bg-brand-canvas">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-6">
        <img
          src={brittPortret.url}
          alt="Britt Daemen, oprichter van B. Analyzed"
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
          className="size-12 rounded-full object-cover ring-2 ring-brand-green/25"
        />
        <p className="text-sm leading-relaxed text-brand-muted">
          Geschreven door{" "}
          <Link to={AUTEUR.overPad} className="font-semibold text-brand-ink hover:text-brand-red">
            {AUTEUR.naam}
          </Link>
          , {AUTEUR.functie}, met {AUTEUR.jarenErvaring} jaar ervaring in online marketing.
          {updated ? ` Laatst bijgewerkt op ${updated}.` : ""}{" "}
          <Link to={AUTEUR.overPad} className="inline-flex items-center gap-1 font-semibold text-brand-ink hover:text-brand-red">
            Over B. Analyzed <ArrowRight className="size-3.5 text-brand-red" />
          </Link>
        </p>
      </div>
    </div>
  );
}
