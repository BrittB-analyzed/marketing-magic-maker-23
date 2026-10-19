import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Globe, Menu, Phone, Star, X } from "lucide-react";
import { EMAIL, GoogleG, Logo, PHONE, PHONE_HREF } from "./site-chrome";
import { BEDRIJFSCIJFERS } from "@/data/bedrijfscijfers";
import { REVIEW_COUNT, REVIEWS_HREF } from "@/lib/site-config";
import { tegenhanger } from "@/lib/i18n";

/**
 * Engelse variant van de sitechrome.
 *
 * Bewust een aparte component en geen vertaallaag over de Nederlandse chrome:
 * de Nederlandse site rankt en levert aanvragen op, en die wil je niet
 * verbouwen voor een sectie van elf pagina's. De Engelse navigatie is ook
 * inhoudelijk anders, want er zijn geen lokale pagina's en geen kennisbank.
 */

export const PILLARS_EN = [
  { name: "SEO", to: "/en/services/seo/", claim: "Get found in Google" },
  { name: "GEO", to: "/en/services/geo/", claim: "Get cited in AI answers" },
  { name: "Ads", to: "/en/services/google-ads/", claim: "Traffic that converts today" },
  {
    name: "CRO",
    to: "/en/services/conversion-optimisation/",
    claim: "Turn visitors into enquiries",
  },
] as const;

const NAV_EN = [
  { label: "Services", to: "/en/services/" },
  { label: "Case studies", to: "/en/case-studies/" },
  { label: "Pricing", to: "/en/pricing/" },
  { label: "About", to: "/en/about/" },
] as const;

/** Wisselt naar de Nederlandse tegenhanger van de huidige pagina. */
function TaalWissel({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const naar = tegenhanger(pathname) ?? "/";
  return (
    <Link
      to={naar}
      hrefLang="nl"
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink ${className}`}
      aria-label="Bekijk deze pagina in het Nederlands"
    >
      <Globe className="size-4" /> NL
    </Link>
  );
}

function TrustLineEn() {
  return (
    <div className="hidden border-b border-brand-line bg-brand-sand md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 text-sm">
        <a
          href={REVIEWS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-brand-line transition-shadow hover:shadow-md"
          aria-label={`Rated ${BEDRIJFSCIJFERS.reviewScore} out of ${REVIEW_COUNT} Google reviews`}
        >
          <GoogleG className="size-4" />
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-brand-star text-brand-star" strokeWidth={0} />
            ))}
          </span>
          <span className="text-sm font-bold text-brand-ink" suppressHydrationWarning>
            {BEDRIJFSCIJFERS.reviewScore} average
          </span>
          <span className="text-xs font-medium text-brand-muted" suppressHydrationWarning>
            · {REVIEW_COUNT} reviews
          </span>
        </a>
        <div className="flex items-center gap-5 text-brand-muted">
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Check className="size-3.5" strokeWidth={3} /> One point of contact
          </span>
          {[
            `${BEDRIJFSCIJFERS.jarenErvaring} years of experience`,
            "Results you can verify",
            "Transparent way of working",
          ].map((t) => (
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

function HeaderEn() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <>
      <TrustLineEn />
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
          <Logo to="/en/" label="B. Analyzed marketing, home" />
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
                Services <ChevronDown className="size-3.5" />
              </button>
              {services && (
                <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-2xl border border-brand-line bg-white p-5 shadow-xl">
                  <ul className="space-y-2.5">
                    {PILLARS_EN.map((p) => (
                      <li key={p.to}>
                        <Link
                          to={p.to}
                          onClick={() => setServices(false)}
                          className="flex items-baseline gap-2 text-sm font-medium text-brand-ink hover:text-brand-red"
                        >
                          {p.name}
                          <span className="text-xs font-normal text-brand-muted">{p.claim}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/en/services/"
                    onClick={() => setServices(false)}
                    className="mt-4 inline-flex items-center gap-1.5 border-t border-brand-line pt-4 text-sm font-semibold text-brand-ink hover:text-brand-red"
                  >
                    All services <ArrowRight className="size-4" />
                  </Link>
                </div>
              )}
            </li>
            {NAV_EN.filter((n) => n.to !== "/en/services/").map((item) => (
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
              <TaalWissel />
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <Link
              to="/en/free-scan/"
              className="hidden rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark sm:inline-flex"
            >
              Free SEO &amp; GEO scan
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
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
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">Services</p>
                <div className="mt-2 grid gap-2">
                  {PILLARS_EN.map((p) => (
                    <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="text-sm text-brand-muted">
                      {p.name} — {p.claim}
                    </Link>
                  ))}
                </div>
              </li>
              {NAV_EN.map((item) => (
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
              <li className="flex flex-col gap-2 pt-4">
                <Link
                  to="/en/free-scan/"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Request your free scan
                </Link>
                <TaalWissel className="justify-center py-2" />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

function FooterEn() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <Logo to="/en/" label="B. Analyzed marketing, home" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
            An online marketing agency from the Netherlands. We make sure you get found in Google,
            cited in AI answers, and that your visitors turn into enquiries.
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
          <h2 className="text-sm font-semibold text-brand-ink">Our four pillars</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            {PILLARS_EN.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:text-brand-ink">
                  {p.name} · {p.claim}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-brand-ink">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            <li>
              <Link to="/en/about/" className="hover:text-brand-ink">
                About B. Analyzed
              </Link>
            </li>
            <li>
              <Link to="/en/case-studies/" className="hover:text-brand-ink">
                Case studies
              </Link>
            </li>
            <li>
              <Link to="/en/pricing/" className="hover:text-brand-ink">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/en/contact/" className="hover:text-brand-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/en/free-scan/" className="hover:text-brand-ink">
                Free SEO &amp; GEO scan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-brand-ink">Language</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            <li>
              <TaalWissel />
            </li>
            <li className="pt-2 text-xs leading-relaxed">
              Our terms, privacy policy and disclaimer are published in Dutch, as they are governed
              by Dutch law.
            </li>
            <li>
              <Link to="/privacybeleid/" hrefLang="nl" className="hover:text-brand-ink">
                Privacy policy (NL)
              </Link>
            </li>
            <li>
              <Link to="/algemene-voorwaarden-online-marketing/" hrefLang="nl" className="hover:text-brand-ink">
                Terms and conditions (NL)
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} B. Analyzed · Chamber of Commerce 61944351 · VAT
            NL001846301B46
          </p>
          <p>Based in Venlo, the Netherlands · working across Europe</p>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCtaEn() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-line bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Link
          to="/en/free-scan/"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-semibold text-white"
        >
          Free scan <ArrowRight className="size-4" />
        </Link>
        <a
          href={PHONE_HREF}
          aria-label="Call us"
          className="flex size-12 items-center justify-center rounded-full border border-brand-line text-brand-ink"
        >
          <Phone className="size-5" />
        </a>
      </div>
    </div>
  );
}

export function SiteLayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-canvas font-sans text-brand-ink">
      <HeaderEn />
      <main className="pb-20 md:pb-0">{children}</main>
      <FooterEn />
      <StickyMobileCtaEn />
    </div>
  );
}
