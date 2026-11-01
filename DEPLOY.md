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

## Wat hier nog niet in staat

De manier waarop `.output` op de server terechtkomt. Er is geen werkende
automatische koppeling waargenomen: commit `3d0a57d` stond op 19 oktober op
`origin/main` zonder dat er binnen vierentwintig uur iets uitrolde. Zodra
duidelijk is of dit via Git-deploy in hPanel, via SSH of via een Node-applicatie
loopt, hoort dat hier beschreven te worden.

> **Let op bij Lovable.** Op 19 oktober merge-de een publish-actie vanuit Lovable
> een verouderde projectkopie over `main` heen (`d8e7fc6`, "Website online
> gemaakt") en verwijderde daarbij 259 bestanden: de volledige Engelse sectie,
> zes casepagina's, twee landingspagina's en alle `klantwerk/`-mappen.
> Hersteld in `9d93dd1`. Controleer vóór een publish of Lovable de laatste
> commit binnen heeft.
