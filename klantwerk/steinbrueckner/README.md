# Steinbrückner Nederland – prototype B2B/CRO-site (oktober 2026)

Statisch prototype van een nieuwe steinbrueckner.nl. Bouwen: `node klantwerk/steinbrueckner/build.mjs`
(zet header, footer, meta en schema om elke bron in `src/`). Bekijken: launch-config `steinbrueckner` (poort 4333).
Online: https://steinbrueckner-prototype.netlify.app (deploy: `npx netlify-cli deploy --prod --no-build --dir klantwerk/steinbrueckner/nieuwe-site --site b016cf23-81dd-4ac0-b092-7b750afd9d52`). Staat op noindex (meta, robots.txt, netlify.toml). Knop linksonder toont de CRO-toelichting per element.

## Pagina's en live URL (canonical)
| Prototype | Live URL | Vervangt |
|---|---|---|
| index.html | / | home |
| dba-wasstraat.html | /bedrijfsvoertuigreiniging/wasstraten-voor-bussen-en-vrachtwagens-dba/ | + /dba-specificaties/, /dba-afbeeldingen/ (301 naar #specificaties / #afbeeldingen) |
| eba-mobiele-wasborstel.html | /bedrijfsvoertuigreiniging/mobiele-truckwash-borstels-eba/ | + /eba-specificaties/, /eba-afbeeldingen/ (301) |
| wasstraat-kopen.html | /wasstraat-kopen/ | |
| service-onderhoud.html | /service-onderhoud/ | nieuw |
| projecten-en-kennis.html | /berichten/ | /berichten/projecten/, /nieuws/, /blogs/ (filters) |
| over-ons.html | /over-ons/ | |
| contact.html | /contact/ | |

Footer-landingspagina's (/wasstraat-vrachtwagen/, /truckwash-installatie/, /mobiele-truckwash/, /truck-wasborstel/) blijven bestaan; in het prototype linken ze naar de DBA/EBA-pagina.

## Nog in te vullen (geel gemarkeerd in de site)
Niet openbaar te vinden, dus navragen bij de klant: KvK-nummer, openingstijden, teamfoto's met namen en functies, vormen en voorwaarden van het onderhoudscontract, en toestemming voor klantlogo's (nu staan de namen als tekst).

Ingevuld uit de folders, het TCV-interview en de YouTube-embeds van de huidige site: DBA-/ZBA-maattabel, EBA-specificaties, link naar de EBA-folder, citaten van TCV, video's (intro CX2EghZz15I, Aldi Groningen yInIZ3FF8v0), samenvattingen van Aldi Deventer en HB Truckwash, het demo-aanbod EBA en de 24/7-bereikbaarheid buiten kantooruren.

Afbeeldingen worden nu rechtstreeks van image.jimcdn.com geladen; bij livegang lokaal hosten als WebP.
