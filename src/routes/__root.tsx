import { SITE_AUTHOR, TWITTER_SITE } from "@/data/seo-meta";
import { SOCIAL_IMAGE } from "@/data/organisatie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { canonicalUrl } from "../lib/canonical";
import { hreflangLinks, localeVanPad } from "../lib/i18n";

const GTM_ID = "GTM-N9JCGMN";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    __gtmInit?: number;
  }
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Online Marketing Bureau voor het MKB | SEO, GEO & Ads" },
      {
        name: "description",
        content:
          "Online marketingbureau voor het MKB, gevestigd in Limburg. 15 jaar ervaring, 9,8 uit 48 reviews en een vast aanspreekpunt. Vraag je gratis scan aan.",
      },
      { name: "author", content: SITE_AUTHOR },
      {
        name: "google-site-verification",
        content: "q992TZh6g7IULRiqyK48dYp0IRU3huQz2xbKYPVC56Y",
      },
      { property: "og:title", content: "Online Marketing Bureau voor het MKB | SEO, GEO & Ads" },
      {
        property: "og:description",
        content:
          "Online marketingbureau voor het MKB, gevestigd in Limburg. 15 jaar ervaring, 9,8 uit 48 reviews en een vast aanspreekpunt. Vraag je gratis scan aan.",
      },
      { property: "og:type", content: "website" },
      // Standaardbeeld voor gedeelde links. Pagina's met een eigen afbeelding
      // overschrijven dit in hun eigen head.
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "B. Analyzed" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: SOCIAL_IMAGE },
      { name: "twitter:site", content: TWITTER_SITE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // Self-referencing canonical voor elke pagina, op basis van het huidige pad.
  // Eén plek in plaats van per route, zodat geen enkele pagina hem kan missen.
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // De GTM-snippet vuurt alleen bij de eerste laadbeurt. Dit is een SPA, dus
  // duwen we bij elke volgende routewissel zelf een virtuele pageview in de
  // dataLayer. De eerste render slaan we over: die telt GTM al als gtm.js.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  // De taal van de pagina volgt uit het pad: alles onder /en/ is Engels.
  const locale = localeVanPad(pathname);
  const alternates = hreflangLinks(pathname);

  return (
    <html lang={locale === "en" ? "en-GB" : "nl"}>
      <head>
        <HeadContent />
        <link rel="canonical" href={canonicalUrl(pathname)} />
        {/* hreflang alleen op pagina's die daadwerkelijk een tegenhanger
            hebben. Zie src/lib/i18n.ts voor de motivatie. */}
        {alternates.map((a) => (
          <link key={a.hreflang} rel="alternate" hrefLang={a.hreflang} href={a.href} />
        ))}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){if(w.__gtmInit)return;w.__gtmInit=1;w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
