import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import { Eyebrow, Section } from "@/components/site/page-bits";
import { LeadForm } from "@/components/site/lead-form";
import { EMAIL, PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/components/site/site-chrome";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta, schemaTaal } from "@/lib/i18n";
import { ORGANISATIE } from "@/data/organisatie";
import { graph, localBusinessSchema } from "@/lib/schema";

const PATH = "/en/contact/";

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: graph({ ...localBusinessSchema(), inLanguage: schemaTaal("en") }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayoutEn>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Speak to the person who does the work
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-muted">
              No contact form that disappears into a queue. You reach Britt directly, usually the
              same working day. Whether you want a quote, a second opinion on another agency's
              proposal, or just to think something through.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 rounded-2xl border border-brand-line bg-white p-5 transition-colors hover:border-brand-ink"
              >
                <Phone className="size-5 text-brand-green" />
                <span>
                  <span className="block text-sm font-semibold text-brand-ink">Call</span>
                  <span className="block text-sm text-brand-muted">{PHONE}</span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-brand-line bg-white p-5 transition-colors hover:border-brand-ink"
              >
                <Mail className="size-5 text-brand-green" />
                <span>
                  <span className="block text-sm font-semibold text-brand-ink">Email</span>
                  <span className="block text-sm text-brand-muted">{EMAIL}</span>
                </span>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-brand-line bg-white p-5 transition-colors hover:border-brand-ink"
              >
                <MessageSquare className="size-5 text-brand-green" />
                <span>
                  <span className="block text-sm font-semibold text-brand-ink">WhatsApp</span>
                  <span className="block text-sm text-brand-muted">Fastest for a quick question</span>
                </span>
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-brand-line bg-brand-sand p-6 text-sm leading-relaxed text-brand-muted">
              <p className="font-semibold text-brand-ink">B. Analyzed</p>
              <p className="mt-2">
                {ORGANISATIE.adres.straat}
                <br />
                {ORGANISATIE.adres.postcode} {ORGANISATIE.adres.plaats}
                <br />
                The Netherlands
              </p>
              <p className="mt-3">
                Chamber of Commerce {ORGANISATIE.kvk} · VAT {ORGANISATIE.btw}
              </p>
              <p className="mt-3">
                Office hours are {ORGANISATIE.openingstijden.van} to {ORGANISATIE.openingstijden.tot}, Monday to
                Friday, Central European Time.
              </p>
            </div>

            <p className="mt-6 text-sm text-brand-muted">
              Prefer to start with a look at where you stand?{" "}
              <Link to="/en/free-scan/" className="font-semibold text-brand-ink hover:text-brand-red">
                Request the free scan
              </Link>
              .
            </p>
          </div>

          <LeadForm id="contact-form" locale="en" />
        </div>
      </Section>
    </SiteLayoutEn>
  );
}
