import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Menu, Phone, Star, X } from "lucide-react";
import logoUrl from "@/assets/logo-b-analyzed.svg?url";
import portretClose from "@/assets/photos/portret-close.jpg.asset.json";

export const PHONE = "+31 (0)6 819 539 99";
export const PHONE_HREF = "tel:+31681953999";
export const WHATSAPP_HREF = "https://wa.me/31681953999";
export const EMAIL = "info@b-analyzed.com";
export const REVIEWS_HREF =
  "https://www.google.com/search?q=b+analyzed+marketing#lrd=0x0:0x0,1,,,";
export const REVIEW_COUNT = 47;

export const PILLARS = [
  { name: "SEO", to: "/online-marketing/seo-uitbesteden/", claim: "Gevonden worden in Google" },
  { name: "GEO", to: "/online-marketing/geo-optimalisatie/", claim: "Genoemd worden in AI" },
  { name: "Ads", to: "/online-marketing/google-ads-uitbesteden/", claim: "Verkeer dat vandaag converteert" },
  { name: "CRO", to: "/online-marketing/conversie-optimalisatie/", claim: "Bezoekers omzetten in aanvragen" },
] as const;

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label="B. Analyzed marketing — home">
      <img
        src={logoUrl}
        alt="B. Analyzed marketing"
        width={441}
        height={114}
        className={compact ? "h-7 w-auto" : "h-9 w-auto"}
      />
    </Link>
  );
}

export const AVATAR_URL = portretClose.url;

export function TrustLine() {
  return (
    <div className="hidden border-b border-brand-line bg-white md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs">
        <a
          href={REVIEWS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-brand-red"
        >
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-brand-star text-brand-star" strokeWidth={0} />
            ))}
          </span>
          <span className="font-medium text-brand-ink">
            Beoordeeld met een 9,8 — {REVIEW_COUNT} reviews
          </span>
        </a>
        <div className="flex items-center gap-6 text-brand-muted">
          {["15 jaar ervaring", "Aantoonbare resultaten", "Transparante werkwijze"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Check className="size-3.5 text-brand-green" strokeWidth={3} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const SUPPORT_LINKS = [
  { label: "Social media marketing", to: "/online-marketing/social-media-marketing/" },
  { label: "E-mailmarketing", to: "/online-marketing/emailmarketing/" },
  { label: "Google Tag Manager", to: "/online-marketing/google-tag-manager-inrichten/" },
  { label: "Linkbuilding", to: "/online-marketing/linkbuilding-uitbesteden/" },
  { label: "Local SEO", to: "/online-marketing/local-seo/" },
  { label: "WordPress onderhoud", to: "/online-marketing/wordpress-onderhoud/" },
];

const NAV = [
  { label: "Over ons", to: "/online-marketing-bedrijf/" },
  { label: "Cases", to: "/online-marketing-cases/" },
  { label: "Tarieven", to: "/tarieven-seo/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

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
                              <span className="text-xs font-normal text-brand-muted">— {p.claim}</span>
                            </Link>
                          </li>
                        ))}
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
              <span className="leading-tight">
                <span className="block text-[11px] text-brand-muted">Je vaste specialist</span>
                <span className="block text-xs font-semibold text-brand-ink">Even sparren?</span>
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
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
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
                  {p.name} — {p.claim}
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
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} B. Analyzed · KVK 61944351 · BTW NL001846301B46</p>
          <p>Venlo, Limburg — actief in Nederland en België</p>
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