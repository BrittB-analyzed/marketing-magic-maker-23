import { useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Lock } from "lucide-react";
import brittPortret from "@/assets/photos/britt-portret.jpg.asset.json";
import { submitLead } from "@/lib/api/lead.functions";
import type { Locale } from "@/lib/i18n";

const inputClass =
  "w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-ink";

/** Stable Lovable deployment endpoint, used when the site is hosted elsewhere. */
const FALLBACK_LEAD_ENDPOINT =
  "https://project--ce7b695a-c956-44db-93e5-b9a20665a527.lovable.app/api/public/lead";

/**
 * Alle zichtbare tekst van het formulier, per taal. Eén formulier en één
 * endpoint; alleen de labels verschillen. De Engelse teksten zijn in Brits
 * Engels geschreven, net als de rest van de /en/-sectie.
 */
const TEKSTEN = {
  nl: {
    titel: "Vraag je gratis SEO & GEO-scan aan",
    intro: "Twee velden. Je ontvangt binnen 2 werkdagen een persoonlijke video-analyse van Britt.",
    website: "Website",
    websitePlaceholder: "jouwbedrijf.nl",
    email: "E-mailadres",
    emailPlaceholder: "jan@bedrijf.nl",
    versturen: "Versturen…",
    start: "Start mijn gratis scan",
    privacy: "Geen verkooppraatjes. Je gegevens blijven bij ons.",
    stapOntvangen: "Stap 1 ontvangen ✓",
    stap2Titel: "Nog even scherpstellen",
    stap2Intro: "Zo maken we de scan specifiek voor jouw situatie. Overslaan mag, je aanvraag staat al klaar.",
    naam: "Naam",
    naamPlaceholder: "Voornaam Achternaam",
    telefoon: "Telefoon",
    telefoonPlaceholder: "06 12 34 56 78",
    focusVraag: "Waar wil je vooral op focussen?",
    focusOpties: ["SEO", "GEO", "Ads", "CRO", "Weet ik nog niet"],
    akkoord: "Ik ga ermee akkoord dat B. Analyzed contact met mij opneemt over deze scan.",
    afronden: "Aanvraag afronden",
    klaarTitel: "Je scan staat in de wacht",
    klaarIntro:
      "Je ontvangt binnen 2 werkdagen een persoonlijke video-analyse van je vindbaarheid in Google én in AI-antwoorden.",
    fout: "Verzenden mislukt.",
    foutLater: "Verzenden mislukt. Probeer het later opnieuw.",
    bullets: [
      "Persoonlijke video-analyse, geen PDF-generator",
      "Zichtbaarheid in Google én in ChatGPT, Gemini en AI Overviews",
      "Concrete actiepunten die je ook zonder ons kunt uitvoeren",
    ],
  },
  en: {
    titel: "Request your free SEO & GEO scan",
    intro: "Two fields. You'll get a personal video analysis from Britt within two working days.",
    website: "Website",
    websitePlaceholder: "yourcompany.com",
    email: "Email address",
    emailPlaceholder: "you@company.com",
    versturen: "Sending…",
    start: "Start my free scan",
    privacy: "No sales pitch. Your details stay with us.",
    stapOntvangen: "Step 1 received ✓",
    stap2Titel: "A few more details",
    stap2Intro:
      "This lets us make the scan specific to your situation. Skipping is fine, your request is already with us.",
    naam: "Name",
    naamPlaceholder: "First name Last name",
    telefoon: "Phone",
    telefoonPlaceholder: "+44 7700 900000",
    focusVraag: "What would you like us to focus on?",
    focusOpties: ["SEO", "GEO", "Ads", "CRO", "Not sure yet"],
    akkoord: "I agree that B. Analyzed may contact me about this scan.",
    afronden: "Complete my request",
    klaarTitel: "Your scan is queued",
    klaarIntro:
      "You'll receive a personal video analysis of your visibility in Google and in AI answers within two working days.",
    fout: "Could not send.",
    foutLater: "Could not send. Please try again later.",
    bullets: [
      "A personal video analysis, not a generated PDF",
      "Visibility in Google and in ChatGPT, Gemini and AI Overviews",
      "Concrete actions you can carry out without us",
    ],
  },
} as const;

export function FormPortrait({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={brittPortret.url}
        alt="Britt Daemen, je vaste specialist bij B. Analyzed"
        width={128}
        height={128}
        loading="lazy"
        decoding="async"
        className="size-16 shrink-0 rounded-full object-cover ring-2 ring-brand-green/25"
      />
      <div>{children}</div>
    </div>
  );
}

/**
 * Two-step lead form. Step 1 captures the lead (URL + e-mail).
 * Step 2 enriches it; dropping out after step 1 still leaves a usable lead.
 */
export function LeadForm({
  id = "scan",
  compact = false,
  locale = "nl",
}: {
  id?: string;
  compact?: boolean;
  locale?: Locale;
}) {
  const t = TEKSTEN[locale];
  return (
    <ClientOnly
      fallback={
        <div
          id={id}
          className="rounded-2xl border border-brand-line bg-white p-6 shadow-[0_1px_2px_rgba(20,24,31,0.04)] sm:p-8"
          aria-busy="true"
        >
          <FormPortrait>
            <h2 className="text-xl font-semibold tracking-tight">{t.titel}</h2>
            <p className="mt-1 text-sm text-brand-muted">{t.intro}</p>
          </FormPortrait>
          <div className="mt-4 h-10 animate-pulse rounded-xl bg-brand-sand" />
          <div className="mt-3 h-10 animate-pulse rounded-xl bg-brand-sand" />
          <div className="mt-4 h-11 animate-pulse rounded-full bg-brand-green/20" />
          {!compact && (
            <ul className="mt-6 space-y-2 border-t border-brand-line pt-5 text-sm text-brand-muted">
              {t.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      }
    >
      <LeadFormInner id={id} compact={compact} locale={locale} />
    </ClientOnly>
  );
}

function LeadFormInner({ id, compact, locale }: { id: string; compact: boolean; locale: Locale }) {
  const t = TEKSTEN[locale];
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [focus, setFocus] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const send = useServerFn(submitLead);

  const sendLead = async (stage: "partial" | "complete") => {
    setSending(true);
    setError("");
    // `locale` gaat mee, zodat een aanvraag uit de Engelse sectie herkenbaar is.
    const payload = { website, email, name, phone, focus, stage, source: id, honeypot, locale };
    const postJson = async (url: string) => {
      try {
        const r = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const text = await r.text();
        if (!text.trim().startsWith("{")) return null;
        const parsed = JSON.parse(text) as { ok: boolean; error?: string };
        return parsed.ok ? parsed : null;
      } catch {
        return null;
      }
    };
    try {
      // 1) same-origin API route (Lovable hosting)
      // 2) PHP endpoint (Hostinger static hosting)
      // 3) cross-origin Lovable endpoint (Hostinger without working PHP)
      // 4) server function
      let res: { ok: boolean; error?: string } | null =
        (await postJson("/api/public/lead")) ??
        (await postJson("/api/send-lead.php")) ??
        (await postJson(FALLBACK_LEAD_ENDPOINT));
      if (!res) res = await send({ data: payload });
      if (!res.ok) {
        setError(res.error ?? t.fout);
        return false;
      }
      return true;
    } catch {
      setError(t.foutLater);
      return false;
    } finally {
      setSending(false);
    }
  };

  return (
    <div id={id} className="rounded-2xl border border-brand-line bg-white p-6 shadow-[0_1px_2px_rgba(20,24,31,0.04)] sm:p-8">
      {step === 1 && (
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (honeypot) return;
            const ok = await sendLead("partial");
            if (ok) setStep(2);
          }}
        >
          <FormPortrait>
            <h2 className="text-xl font-semibold tracking-tight">{t.titel}</h2>
            <p className="mt-1 text-sm text-brand-muted">{t.intro}</p>
          </FormPortrait>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">{t.website}</span>
            <input
              className={inputClass}
              type="text"
              required
              placeholder={t.websitePlaceholder}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              data-lpignore="true"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">{t.email}</span>
            <input
              className={inputClass}
              type="email"
              required
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-lpignore="true"
            />
          </label>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            data-lpignore="true"
          />
          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:opacity-60"
          >
            {sending ? t.versturen : t.start} <ArrowRight className="size-4" />
          </button>
          {error && <p className="text-center text-xs text-brand-red">{error}</p>}
          <p className="flex items-center justify-center gap-1.5 text-xs text-brand-muted">
            <Lock className="size-3.5" /> {t.privacy}
          </p>
        </form>
      )}

      {step === 2 && (
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const ok = await sendLead("complete");
            if (ok) setStep(3);
          }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">{t.stapOntvangen}</p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">{t.stap2Titel}</h2>
            <p className="mt-1 text-sm text-brand-muted">{t.stap2Intro}</p>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">{t.naam}</span>
            <input
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.naamPlaceholder}
              data-lpignore="true"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">{t.telefoon}</span>
            <input
              className={inputClass}
              type="tel"
              inputMode="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.telefoonPlaceholder}
              data-lpignore="true"
            />
          </label>
          <fieldset>
            <legend className="mb-1.5 block text-xs font-semibold text-brand-ink">{t.focusVraag}</legend>
            <div className="flex flex-wrap gap-2">
              {t.focusOpties.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setFocus(option)}
                  className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
                    focus === option
                      ? "border-brand-green bg-brand-green text-white"
                      : "border-brand-line text-brand-muted hover:border-brand-ink hover:text-brand-ink"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="flex items-start gap-2 text-xs text-brand-muted">
            <input type="checkbox" required className="mt-0.5 size-4 rounded border-brand-line" data-lpignore="true" />
            {t.akkoord}
          </label>
          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:opacity-60"
          >
            {sending ? t.versturen : t.afronden} <ArrowRight className="size-4" />
          </button>
          {error && <p className="text-center text-xs text-brand-red">{error}</p>}
        </form>
      )}

      {step === 3 && (
        <div className="py-4 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
            <Check className="size-6" strokeWidth={2.5} />
          </span>
          <h2 className="mt-4 text-xl font-semibold tracking-tight">{t.klaarTitel}</h2>
          <p className="mt-2 text-sm text-brand-muted">{t.klaarIntro}</p>
        </div>
      )}

      {!compact && step !== 3 && (
        <ul className="mt-6 space-y-2 border-t border-brand-line pt-5 text-sm text-brand-muted">
          {t.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
