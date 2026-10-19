import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Globe, Menu, Phone, Star, X } from "lucide-react";
import logoUrl from "@/assets/logo-b-analyzed.svg?url";
import portretClose from "@/assets/photos/portret-close.jpg.asset.json";
import {
  EMAIL,
  PHONE,
  PHONE_HREF,
  REVIEW_COUNT,
  REVIEWS_HREF,
  WHATSAPP_HREF,
} from "@/lib/site-config";
import { BEDRIJFSCIJFERS, ERVARING_TEKST } from "@/data/bedrijfscijfers";
import { FounderCard } from "@/components/site/founder-card";
import { tegenhanger } from "@/lib/i18n";

export { EMAIL, PHONE, PHONE_HREF, REVIEW_COUNT, REVIEWS_HREF, WHATSAPP_HREF };


export const PILLARS = [
  { name: "SEO", to: "/online-marketing/seo-uitbesteden/", claim: "Gevonden worden in Google" },
  { name: "GEO", to: "/online-marketing/geo-optimalisatie/", claim: "Genoemd worden in AI" },
  { name: "Ads", to: "/online-marketing/google-ads-uitbesteden/", claim: "Verkeer dat vandaag converteert" },
  { name: "CRO", to: "/online-marketing/conversie-optimalisatie/", claim: "Bezoekers omzetten in aanvragen" },
] as const;

export function Logo({
  compact = false,
  to = "/",
  label = "B. Analyzed marketing, home",
}: {
  compact?: boolean;
  /** Doel van de logolink. De Engelse sectie wijst naar /en/. */
  to?: "/" | "/en/";
  label?: string;
}) {
  return (
    <Link to={to} className="flex items-center" aria-label={label}>
      <img
        src={logoUrl}
        alt="B. Analyzed marketing"
        width={441}
        height={114}
        className={compact ? "h-9 w-auto" : "h-11 w-auto"}
      />
    </Link>
  );
}

export const AVATAR_URL = portretClose.url;

export function GoogleG({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}




export function TrustLine() {
  return (
    <div className="hidden border-b border-brand-line bg-brand-sand md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 text-sm">
        <a
          href={REVIEWS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Beoordeeld met een ${BEDRIJFSCIJFERS.reviewScore} gemiddeld uit ${REVIEW_COUNT} Google reviews`}
          className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-brand-line transition-shadow hover:shadow-md"
        >
          <GoogleG className="size-4" />
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-brand-star text-brand-star" strokeWidth={0} />
            ))}
          </span>
          <span className="text-sm font-bold text-brand-ink" suppressHydrationWarning>
            {BEDRIJFSCIJFERS.reviewScore} gemiddeld
          </span>
          <span className="text-xs font-medium text-brand-muted" suppressHydrationWarning>
            · {REVIEW_COUNT} reviews
          </span>
        </a>
        <div className="flex items-center gap-5 text-brand-muted">
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" suppressHydrationWarning>
            <Check className="size-3.5" strokeWidth={3} />1 vast aanspreekpunt
          </span>
          {[ERVARING_TEKST, "Aantoonbare resultaten", "Transparante werkwijze"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 font-medium" suppressHydrationWarning>
              <Check className="size-4 text-brand-green" strokeWidth={3} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const SUPPORT_LINKS = [
  { label: "Website laten bouwen", to: "/online-marketing/website-advies/" },
  { label: "Social media marketing", to: "/online-marketing/social-media-marketing/" },
  { label: "E-mailmarketing", to: "/online-marketing/emailmarketing/" },
  { label: "Google Tag Manager", to: "/online-marketing/google-tag-manager-inrichten/" },
  { label: "Linkbuilding", to: "/online-marketing/linkbuilding-uitbesteden/" },
  { label: "Local SEO", to: "/online-marketing/local-seo/" },
  { label: "WordPress onderhoud", to: "/online-marketing/wordpress-onderhoud/" },
];

const NAV = [
  { label: "Cases", to: "/online-marketing-cases/" },
  { label: "Tarieven", to: "/tarieven-seo/" },
];

const ABOUT_LINKS = [
  { label: "Over ons", to: "/online-marketing-bedrijf/" },
  { label: "Klantwaarderingen", to: "/klantwaarderingen/" },
];

/**
 * Wisselt naar de Engelse tegenhanger van de huidige pagina. Staat er geen
 * vertaling, dan wijst de link naar de Engelse homepage: een taalwissel die
 * naar een 404 leidt, is slechter dan een wissel naar een overzichtspagina.
 */
function TaalWissel({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const naar = tegenhanger(pathname) ?? "/en/";
  return (
    <Link
      to={naar}
      hrefLang="en"
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink ${className}`}
      aria-label="View this page in English"
    >
      <Globe className="size-4" /> EN
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <>
      <TrustLine />
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Hoofdnavigatie">
          <Logo />
          <ul className="hidden items-center gap-5 whitespace-nowrap lg:flex">
            <li
              className="relative"
              onMouseEnter={() => setServices(true)}
              onMouseLeave={() => setServices(false)}
            >
              <button
                type="button"
                onClick={() => setServices((v) => !v)}
                aria-expanded={services}
                className="flex items-center gap-1 py-5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink"
              >
                Diensten
                <ChevronDown className="size-3.5" />
              </button>
              {services && (
                <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 rounded-2xl border border-brand-line bg-white p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
                        Hoofdpijlers
                      </p>
                      <ul className="mt-3 space-y-2">
                        {PILLARS.map((p) => (
                          <li key={p.to}>
                            <Link
                              to={p.to}
                              onClick={() => setServices(false)}
                              className="flex items-center gap-1.5 text-sm font-medium text-brand-ink hover:text-brand-red"
                            >
                              {p.name}
                              {p.name === "GEO" && (
                                <span className="rounded-full bg-brand-red-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-red">
                                  nieuw
                                </span>
                              )}
                              <span className="text-xs font-normal text-brand-muted">{p.claim}</span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to="/online-marketing/website-advies/"
                            onClick={() => setServices(false)}
                            className="flex items-center gap-1.5 text-sm font-medium text-brand-ink hover:text-brand-red"
                          >
                            Website laten bouwen
                            <span className="text-xs font-normal text-brand-muted">
                              In 3 dagen live vanaf € 499,-
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
                        Ondersteunend
                      </p>
                      <ul className="mt-3 space-y-2">
                        {SUPPORT_LINKS.map((l) => (
                          <li key={l.to}>
                            <Link
                              to={l.to}
                              onClick={() => setServices(false)}
                              className="text-sm text-brand-muted hover:text-brand-ink"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    to="/online-marketing/"
                    onClick={() => setServices(false)}
                    className="mt-5 inline-flex items-center gap-1.5 border-t border-brand-line pt-4 text-sm font-semibold text-brand-ink hover:text-brand-red"
                  >
                    Alle diensten bekijken <ArrowRight className="size-4" />
                  </Link>
                </div>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              <button
                type="button"
                onClick={() => setAbout((v) => !v)}
                aria-expanded={about}
                className="flex items-center gap-1 py-5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink"
              >
                Over ons
                <ChevronDown className="size-3.5" />
              </button>
              {about && (
                <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 rounded-2xl border border-brand-line bg-white p-4 shadow-xl">
                  <ul className="space-y-2">
                    {ABOUT_LINKS.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          onClick={() => setAbout(false)}
                          className="block text-sm font-medium text-brand-ink hover:text-brand-red"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="whitespace-nowrap text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink"
                  activeProps={{ className: "text-brand-ink" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/gratis-seo-scan/"
                className="flex items-center gap-1.5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink"
                activeProps={{ className: "text-brand-ink" }}
              >
                SEO &amp; GEO audit
                <span className="rounded-full bg-brand-red-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-red">
                  nieuw
                </span>
              </Link>
            </li>
            <li>
              <TaalWissel />
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 rounded-full border border-brand-line py-1 pl-1 pr-3 transition-colors hover:border-brand-green xl:inline-flex"
            >
              <img
                src={portretClose.url}
                alt="Je vaste specialist bij B. Analyzed"
                width={64}
                height={64}
                className="size-8 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <span className="leading-tight" suppressHydrationWarning>
                <span className="block text-[11px] text-brand-muted" suppressHydrationWarning>Je vaste specialist</span>
                <span className="block text-xs font-semibold text-brand-ink" suppressHydrationWarning>Even sparren?</span>
              </span>
            </a>
            <Link
              to="/gratis-seo-scan/"
              className="hidden rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark sm:inline-flex"
            >
              Gratis SEO &amp; GEO scan
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-full border border-brand-line text-brand-ink lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-brand-line bg-brand-canvas lg:hidden">
            <ul className="mx-auto max-w-6xl px-6 py-4">
              <li className="border-b border-brand-line py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
                  Diensten
                </p>
                <div className="mt-2 grid gap-2">
                  {[...PILLARS.map((p) => ({ label: p.name, to: p.to })), ...SUPPORT_LINKS].map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="text-sm text-brand-muted"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="border-b border-brand-line py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
                  Over ons
                </p>
                <div className="mt-2 grid gap-2">
                  {ABOUT_LINKS.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="text-sm text-brand-muted"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </li>
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-brand-line py-3 text-base font-medium text-brand-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/gratis-seo-scan/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 border-b border-brand-line py-3 text-base font-medium text-brand-ink"
                >
                  SEO &amp; GEO audit
                  <span className="rounded-full bg-brand-red-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-red">
                    nieuw
                  </span>
                </Link>
              </li>
              <li className="flex flex-col gap-2 pt-4">
                <Link
                  to="/gratis-seo-scan/"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Gratis scan aanvragen
                </Link>
                <a
                  href={PHONE_HREF}
                  className="rounded-full border border-brand-line px-4 py-3 text-center text-sm font-semibold text-brand-ink"
                >
                  {PHONE}
                </a>
                <TaalWissel className="justify-center py-2" />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <FounderCard />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
            Online marketingbureau uit Limburg. Wij zorgen dat je gevonden wordt in Google, genoemd
            wordt in AI en dat je bezoekers klant worden.
          </p>
          <div className="mt-4 space-y-1 text-sm text-brand-muted">
            <a href={PHONE_HREF} className="block hover:text-brand-ink">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="block hover:text-brand-ink">
              {EMAIL}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-brand-ink">Onze vier pijlers</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            {PILLARS.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:text-brand-ink">
                  {p.name} · {p.claim}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-brand-ink">Ondersteunende diensten</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            {SUPPORT_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-brand-ink">Bedrijf</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            <li>
              <Link to="/online-marketing-bedrijf/" className="hover:text-brand-ink">
                Over B. Analyzed
              </Link>
            </li>
            <li>
              <Link to="/online-marketing-cases/" className="hover:text-brand-ink">
                Cases
              </Link>
            </li>
            <li>
              <Link to="/tarieven-seo/" className="hover:text-brand-ink">
                Tarieven
              </Link>
            </li>
            <li>
              <Link to="/blog/" className="hover:text-brand-ink">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/kennisbank/" className="hover:text-brand-ink">
                Kennisbank
              </Link>
            </li>
            <li>
              <Link to="/contact/" className="hover:text-brand-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/algemene-voorwaarden-online-marketing/" className="hover:text-brand-ink">
                Algemene voorwaarden
              </Link>
            </li>
            <li>
              <Link to="/privacybeleid/" className="hover:text-brand-ink">
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link to="/disclaimer/" className="hover:text-brand-ink">
                Disclaimer
              </Link>
            </li>
            <li className="pt-2">
              <TaalWissel />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} B. Analyzed · KVK 61944351 · BTW NL001846301B46</p>
          <p>Venlo, Limburg, actief in Nederland en België</p>
        </div>
      </div>
    </footer>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-line bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Link
          to="/gratis-seo-scan/"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-semibold text-white"
        >
          Gratis scan <ArrowRight className="size-4" />
        </Link>
        <a
          href={PHONE_HREF}
          aria-label="Bel ons"
          className="flex size-12 items-center justify-center rounded-full border border-brand-line text-brand-ink"
        >
          <Phone className="size-5" />
        </a>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  return null;
}


export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-canvas font-sans text-brand-ink">
      <Header />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}