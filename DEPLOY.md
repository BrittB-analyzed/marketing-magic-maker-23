# Uitrollen naar b-analyzed.com

De site draait op Hostinger (`platform: hostinger`, `panel: hpanel`) en rendert
serverside. Dat laatste is te controleren zonder in te loggen:

```bash
curl -i -X OPTIONS https://b-analyzed.com/api/public/lead
```

Een **204** betekent dat er een proces draait dat requests afhandelt. Een map met
HTML-bestanden zou hier een 404 geven. De uitrol moet dus een draaiende
Node-applicatie opleveren, niet een upload van statische bestanden.

## Bouwen

```bash
npm run build:node
```

Dit is dezelfde build als `npm run build`, maar met `NITRO_PRESET=node-server`.
De standaardbuild maakt een Cloudflare-worker (`.output/server/wrangler.json`) en
die draait niet op Hostinger.

Resultaat:

| map | inhoud |
|---|---|
| `.output/public` | statische bestanden, circa 14 MB |
| `.output/server` | de Node-server, circa 3,5 MB |

Starten met `node .output/server/index.mjs`, standaard op poort 3000. De poort is
te zetten met `PORT`.

De build controleert zichzelf: `check-seo-meta.mjs` bewaakt de titel- en
descriptionlengtes en `generate-sitemap.mjs` genereert `public/sitemap.xml`
opnieuw. Op 1 november 2026 levert dat **161 URL's op, waarvan 22 met hreflang**.

## Controleren na een uitrol

```bash
curl -s https://b-analyzed.com/sitemap.xml | grep -c "<loc>"
```

Verwacht: 161. Verder horen deze allemaal een 200 te geven:

- `/en/` en de tien andere Engelse pagina's
- de dertien casepagina's onder `/cases/`
- `/online-marketing-venray/` en `/seo-blerick/`

En op de homepage hoort `reviewCount` op **48** te staan.

## Hoe de uitrol loopt

hPanel → Websites → b-analyzed.com → Implementaties. De Node.js-webapp is aan
GitHub gekoppeld (`BrittB-analyzed/marketing-magic-maker-23`, tak `main`). Elke
push naar `main` start daar automatisch een build: schone `npm install` (bij een
peer-conflict opnieuw met `--legacy-peer-deps`), dan `npm run build`, Node 22,
uitvoermap `.output`. Een uitrol duurt een paar minuten.

**Mislukte build = niets live.** Van 14 oktober tot 1 november 2026 faalde elke
build met `Could not resolve entry module "index.html"`, omdat de schone install
een nieuwere `@tanstack/react-start` (1.169) binnenhaalde die vite 8 verwacht.
Daarom staan `@tanstack/react-router`, `@tanstack/react-start` en
`@tanstack/router-plugin` in `package.json` op een exacte versie. Upgrade die
alleen samen en na een schone testbuild. Controleer na een push altijd de status
onder Implementaties.

> **Let op bij Lovable.** Op 19 oktober merge-de een publish-actie vanuit Lovable
> een verouderde projectkopie over `main` heen (`d8e7fc6`, "Website online
> gemaakt") en verwijderde daarbij 259 bestanden: de volledige Engelse sectie,
> zes casepagina's, twee landingspagina's en alle `klantwerk/`-mappen.
> Hersteld in `9d93dd1`. Controleer vóór een publish of Lovable de laatste
> commit binnen heeft.
