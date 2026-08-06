import { useState } from "react";
import { ArrowRight, Check, Lock } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-ink";

/**
 * Two-step lead form. Step 1 captures the lead (URL + e-mail).
 * Step 2 enriches it; dropping out after step 1 still leaves a usable lead.
 */
export function LeadForm({ id = "scan", compact = false }: { id?: string; compact?: boolean }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [focus, setFocus] = useState("");
  const [honeypot, setHoneypot] = useState("");

  return (
    <div id={id} className="rounded-2xl border border-brand-line bg-white p-6 shadow-[0_1px_2px_rgba(20,24,31,0.04)] sm:p-8">
      {step === 1 && (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (honeypot) return;
            setStep(2);
          }}
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Vraag je gratis SEO &amp; GEO-scan aan</h2>
            <p className="mt-1 text-sm text-brand-muted">
              Twee velden. Je ontvangt binnen 2 werkdagen een persoonlijke video-analyse — geen
              automatisch rapport.
            </p>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">Website</span>
            <input
              className={inputClass}
              type="text"
              required
              placeholder="jouwbedrijf.nl"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              data-lpignore="true"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">E-mailadres</span>
            <input
              className={inputClass}
              type="email"
              required
              placeholder="jan@bedrijf.nl"
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
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start mijn gratis scan <ArrowRight className="size-4" />
          </button>
          <p className="flex items-center justify-center gap-1.5 text-xs text-brand-muted">
            <Lock className="size-3.5" /> Geen verkooppraatjes. Je gegevens blijven bij ons.
          </p>
        </form>
      )}

      {step === 2 && (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setStep(3);
          }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
              Stap 1 ontvangen ✓
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">Nog even scherpstellen</h2>
            <p className="mt-1 text-sm text-brand-muted">
              Zo maken we de scan specifiek voor jouw situatie. Overslaan mag — je aanvraag staat al klaar.
            </p>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">Naam</span>
            <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Voornaam Achternaam" data-lpignore="true" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-brand-ink">
              Telefoon <span className="font-normal text-brand-muted">(optioneel)</span>
            </span>
            <input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="06 12 34 56 78" data-lpignore="true" />
          </label>
          <fieldset>
            <legend className="mb-1.5 block text-xs font-semibold text-brand-ink">
              Waar wil je vooral op focussen?
            </legend>
            <div className="flex flex-wrap gap-2">
              {["SEO", "GEO", "Ads", "CRO", "Weet ik nog niet"].map((option) => (
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
            Ik ga ermee akkoord dat B. Analyzed contact met mij opneemt over deze scan.
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Aanvraag afronden <ArrowRight className="size-4" />
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="py-4 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
            <Check className="size-6" strokeWidth={2.5} />
          </span>
          <h2 className="mt-4 text-xl font-semibold tracking-tight">Je scan staat in de wacht</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Je ontvangt binnen 2 werkdagen een persoonlijke video-analyse van je vindbaarheid in
            Google én in AI-antwoorden.
          </p>
        </div>
      )}

      {!compact && step !== 3 && (
        <ul className="mt-6 space-y-2 border-t border-brand-line pt-5 text-sm text-brand-muted">
          {[
            "Persoonlijke video-analyse, geen PDF-generator",
            "Zichtbaarheid in Google én in ChatGPT, Gemini en AI Overviews",
            "Concrete actiepunten die je ook zonder ons kunt uitvoeren",
          ].map((item) => (
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