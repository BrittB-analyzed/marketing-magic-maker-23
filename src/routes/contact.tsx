import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { SiteLayout, EMAIL, PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/components/site/site-chrome";
import { LeadForm } from "@/components/site/lead-form";
import { Eyebrow, Section } from "@/components/site/page-bits";
import portretStoer from "@/assets/photos/portret-stoer.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — zullen we samen online groeien? | B. Analyzed" },
      {
        name: "description",
        content:
          "Neem contact op met B. Analyzed. Bel, WhatsApp of vraag een persoonlijk adviesgesprek aan over SEO, GEO, Ads en CRO voor jouw bedrijf.",
      },
      { property: "og:title", content: "Contact — zullen we samen online groeien?" },
      { property: "og:description", content: "Bel, WhatsApp of plan een persoonlijk adviesgesprek." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Even sparren? Dat kost je niets.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-muted">
              Heb je korte- of langetermijnambities op het gebied van online marketing, of een
              eenmalig project dat je wilt uitbesteden? Deel je wensen en we bekijken samen wat we
              kunnen doen: een sympathiek eigenwijze insteek, transparante werkwijze en mooie
              resultaten.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={portretStoer.url}
                alt="Britt Daemen — jouw vaste aanspreekpunt bij B. Analyzed"
                className="aspect-[4/3] w-full object-cover object-[center_20%]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-3 font-semibold">
                <Phone className="size-5 text-brand-red" /> {PHONE}
              </a>
              <a href={WHATSAPP_HREF} className="flex items-center gap-3 font-semibold">
                <MessageSquare className="size-5 text-brand-red" /> WhatsApp Business
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 font-semibold">
                <Mail className="size-5 text-brand-red" /> {EMAIL}
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-brand-line bg-brand-sand p-6 text-sm leading-relaxed text-brand-muted">
              <p className="font-semibold text-brand-ink">B. Analyzed Marketing</p>
              <p className="mt-2">
                Dorperheideweg 34, 5944NK Arcen, Nederland
                <br />
                KVK 61944351 · BTW NL001846301B46
              </p>
            </div>
          </div>
          <LeadForm id="contact-form" />
        </div>
      </Section>
    </SiteLayout>
  );
}