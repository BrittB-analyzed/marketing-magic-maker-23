# La Duna Tarifa – nieuwe site (tarifawindsurfing.es + .com)

Statische, tweetalige site. Geen framework: ~20 KB HTML + 19 KB CSS + 3,5 KB JS + 2 zelf-gehoste fonts (47 KB) per pagina.

**Huisstijl** (overgenomen van tarifawindsurfing.es): rond La Duna-logo linksboven, navy `#0a2230`, logo-geel `#e7a713` (boekknoppen), cyaan `#0fb3c7`. Lettertypes op de huidige site zijn Futura PT (koppen, knoppen in hoofdletters) en Proxima Nova (tekst) via Adobe Fonts, gekoppeld aan het Squarespace-abonnement. Die licentie gaat niet mee buiten Squarespace, dus de nieuwe site gebruikt zelf-gehoste open varianten met hetzelfde karakter: **Jost** (gebaseerd op Futura) en **Figtree** (vergelijkbaar met Proxima Nova). Heeft de klant een eigen Adobe Fonts-licentie, dan is het één regel in `styles.css`.

```
node src/build.mjs          # productie → dist/es (tarifawindsurfing.es) en dist/com (tarifawindsurfing.com)
node src/build.mjs --local  # preview-URL's; daarna: node serve.mjs → :4321 (ES) / :4322 (EN)
```

**Preview / Lovable**: `npm run dev` (Vite op :8080) en `npm run build` maken één preview-site: ES op `/`, EN op `/en/`, nette URL's met slash, en overal `noindex` zodat de preview nooit concurreert met de echte domeinen. De productiebuild blijft `npm run build:prod` (of `node src/build.mjs`).

Content staat in `src/pages.mjs` (per pagina een `es`- en `en`-variant), bedrijfsgegevens in `src/site.mjs`, juridische teksten in `src/legal.mjs`.

## Domeinstructuur (volgt de mail aan de klant)
- **.es = primair** (Spaans, `x-default`). **.com = Engelse variant**, wederzijds gekoppeld via hreflang (in `<head>` én in beide sitemaps).
- Eén `LocalBusiness`-entiteit (`https://www.tarifawindsurfing.es/#business`) op beide domeinen, .com staat in `sameAs`.
- Alternatief voor maximale autoriteitsbundeling: EN als `tarifawindsurfing.es/en/` en .com volledig 301'en. Kan met dezelfde generator (alleen `ORIGIN.en` aanpassen).

## SEO-keuzes
- **Bestaande ES-URL's met verkeer blijven exact gelijk** (`/windsurf-camp`, `/sup-surf`, `/wingfoil-tarifa`, `/alquiler-windsurf-tarifa`, `/campamentoverano`, …). Geen rankingverlies bij migratie.
- Kannibalisatie opgelost: `/wingfoil` → 301 naar `/wingfoil-tarifa` (de pagina met de beste positie voor "wingfoil tarifa").
- 301's voor oude/kapotte slugs in `_redirects` (o.a. `/poltica-de-cookies`, `/ubicacion`, `/kitesurf-adaptad-windsurf`, EN `/accomodation-tarifa`).
- Titels sturen op GSC-zoektermen met de meeste vertoningen: *windsurf tarifa, curso/clases windsurf tarifa, wing foil tarifa (pos. 12–14, veel vertoningen), clases de surf tarifa, alquiler windsurf/kitesurf tarifa, windsurf camp*.
- Prijs in elke title/description → hogere CTR (nu 1,2 % op de homepage).
- Schema.org: `SportsActivityLocation`, `WebSite`, `WebPage`, `BreadcrumbList`, `Service` met `Offer`-prijzen, `FAQPage`. Geen `aggregateRating` (alleen toevoegen met echte, op de site getoonde reviews).
- Nieuwe pagina `grupos-y-empresas` voor de team-building-zoekwoorden uit de intake.

## AI-zoekmachines (GEO/AEO)
- Elke dienstpagina opent met een "En resumen"-alinea: zelfstandig citeerbaar antwoord met prijs, duur en wat inbegrepen is.
- FAQ's in gewone HTML (`<details>`), robots.txt staat GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot en Google-Extended expliciet toe, `llms.txt` per domein.

## CRO
- WhatsApp is het hoofdkanaal (volgens de intake het best converterend): knop in de hero, sticky balk op mobiel, en een 4-veldsformulier dat een ingevuld WhatsApp-bericht opent (incl. gekozen pakket).
- Prijzen direct zichtbaar, "meest gekozen"-badge, vertrouwenschips (ervaring, certificering, lancha, taal), no-wind-garantie herhaald.
- GA4-events: `click_whatsapp`, `click_call`, `select_package`, `generate_lead`.

## "Eisen 2027" – wat dit afdekt
| Eis | Invulling |
|---|---|
| European Accessibility Act (sinds 28-06-2025, geldt voor online boekingsdiensten) / WCAG 2.2 AA | skip-link, focus-stijlen, contrast ≥ 4,5:1 (oranje/groen knoppen getest), labels, `prefers-reduced-motion`, tapdoelen ≥ 44 px, één H1, `lang` per taal |
| Core Web Vitals (LCP/INP/CLS) | geen afbeeldingen/fonts in de hero, 3,5 KB JS, `defer`, gefingerprinte assets met immutable cache |
| AVG/LSSI + AEPD-cookiegids | Consent Mode v2 (standaard *denied*), GA laadt pas na akkoord, Weigeren en Accepteren even prominent, cookie-instellingen in footer, aviso legal/privacidad/cookies |
| Beveiliging | `_headers`: HSTS, CSP zonder inline scripts, nosniff, Referrer-/Permissions-Policy, frame-ancestors none |
| Meertaligheid | hreflang + x-default, eigen canonical per domein, taalwissel per pagina naar de vertaalde URL |

## Hosting
`_headers` en `_redirects` werken op **Cloudflare Pages** of **Netlify** (twee projecten: `dist/es` → .es, `dist/com` → .com). Zet daar ook apex → www en http → https. Na livegang: beide sitemaps indienen in Search Console, URL-inspectie op de top-10 pagina's.

## Moet de klant nog aanleveren / bevestigen (TODO)
1. **Foto's** – elke pagina heeft foto's: 13 aangeleverde foto's + 13 van de huidige site (kite, SUP/surf, adaptado, ático, team). Bron in `photos/`, `python process-images.py` maakt WebP 640/1024/1600 + OG-afbeelding. Sommige foto's van de huidige site zijn klein (kite-montaje, sup, grupo: 1000–1600 px): liefst in hogere resolutie aanleveren. Bevestigen dat ouders toestemming gaven voor de foto's van kinderen.
2. **Ervaring**: intake zegt "18+ jaar", huidige site "20 años". Nu: 18+.
3. **E-mailadres, bedrijfsnaam en NIF** voor aviso legal/privacidad (`[RAZÓN SOCIAL]`, `[NIF]`, `[EMAIL]`).
4. **GA4 Measurement ID** in `src/site.mjs` (`gaId`).
5. **Exacte geo-coördinaten** uit het Google Business Profile.
6. **Prijzen 2027**: kite-verhuur (staat nu niet op de site), privéles windsurf, campdata 2027, campamento-prijzen (laatst bekend: 2025). Wing-privéles 165 €: 1 of 2 uur?
7. **Blog**: de bestaande posts op `/blog/...` zijn nog niet gemigreerd. Overzetten met dezelfde URL's vóór de DNS-switch, anders 404.
8. **Reviews**: aantal + score van Google, dan tonen we ze in de hero (en eventueel in schema).
