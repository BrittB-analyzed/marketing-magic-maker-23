import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { REVIEWS } from "@/content/reviews";
import { Section, SectionHeading } from "@/components/site/page-bits";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 van de 5 sterren">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-brand-green text-brand-green" />
      ))}
    </div>
  );
}

export function ReviewsSection({
  initial = 9,
  linkToAll = false,
  title,
  intro,
}: {
  initial?: number;
  linkToAll?: boolean;
  title?: string;
  intro?: string;
}) {
  const [count, setCount] = useState(initial);
  const visible = REVIEWS.slice(0, count);

  return (
    <Section id="klantwaarderingen" className="border-t border-brand-line bg-brand-sand">
      <SectionHeading
        eyebrow="Klantwaarderingen"
        title={title ?? `Wat ${REVIEWS.length} opdrachtgevers over ons zeggen`}
        intro={
          intro ??
          "Klanttevredenheid staat bij ons voorop. Gaan we voor resultaat en betekent dat een stapje extra? Dan doen we dat graag. De meeste opdrachtgevers werken al jaren met ons samen."
        }
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((r, i) => (
          <figure
            key={`${r.name}-${i}`}
            className="flex flex-col rounded-2xl border border-brand-line bg-white p-6"
          >
            <Stars />
            <h3 className="mt-4 text-base font-semibold leading-snug text-brand-ink">{r.title}</h3>
            {r.quote ? (
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {r.quote}
              </blockquote>
            ) : null}
            <figcaption className="mt-5 border-t border-brand-line pt-4 text-sm">
              <span className="font-semibold text-brand-ink">{r.name}</span>
              {r.role ? <span className="block text-brand-muted">{r.role}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
      {linkToAll ? (
        <div className="mt-10 text-center">
          <Link
            to="/klantwaarderingen/"
            className="inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Bekijk alle {REVIEWS.length} klantwaarderingen
          </Link>
        </div>
      ) : count < REVIEWS.length ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + 9)}
            className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Meer klantwaarderingen laden ({REVIEWS.length - count})
          </button>
        </div>
      ) : null}
    </Section>
  );
}