import { Facebook, Instagram, Linkedin, Star, Youtube } from "lucide-react";
import portret from "@/assets/photos/britt-portret.jpg.asset.json";
import { REVIEW_COUNT, REVIEWS_HREF } from "@/components/site/site-chrome";

const SOCIALS = [
  { name: "Instagram", href: "#instagram", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/b.analyzed", icon: Facebook },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/britt-daemen-30651818/", icon: Linkedin },
  { name: "YouTube", href: "#youtube", icon: Youtube },
];

export function FounderCard() {
  return (
    <div className="rounded-3xl border border-brand-line bg-brand-sand p-8">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="relative shrink-0">
          <img
            src={portret.url}
            alt="Britt Daemen — oprichter van B. Analyzed"
            width={112}
            height={112}
            className="size-28 rounded-full object-cover ring-4 ring-white shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex-1">
          <p className="text-2xl font-semibold text-brand-ink">Britt Daemen</p>
          <p className="mt-0.5 text-sm font-medium tracking-wide text-brand-muted uppercase">
            SEO · GEO · Ads · CRO
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-brand-muted">
            12+ jaar online marketing. Ik help MKB-bedrijven in Nederland en België om meer
            omzet uit hun website te halen — met SEO, GEO, Google Ads en conversieoptimalisatie.
            Persoonlijk contact en meetbaar resultaat staan voorop.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-brand-line pt-6 sm:flex-row sm:items-center">
        <a
          href={REVIEWS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl border border-brand-line bg-white px-4 py-3 transition-colors hover:border-brand-green"
        >
          <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1 text-lg font-semibold text-brand-ink">
              <span>9,8</span>
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-star text-brand-star" strokeWidth={0} />
                ))}
              </span>
            </div>
            <p className="text-xs text-brand-muted">{REVIEW_COUNT} Google-reviews</p>
          </div>
        </a>

        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            const isPlaceholder = s.href.startsWith("#");
            return (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target={isPlaceholder ? undefined : "_blank"}
                rel={isPlaceholder ? undefined : "noopener noreferrer"}
                className="inline-flex size-12 items-center justify-center rounded-2xl border border-brand-line bg-white text-brand-muted transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
