# Steinbrückner Nederland – prototype B2B/CRO-site (oktober 2026)

Statisch prototype van een nieuwe steinbrueckner.nl. Bouwen: `node klantwerk/steinbrueckner/build.mjs`
(zet header, footer, meta en schema om elke bron in `src/`). Bekijken: launch-config `steinbrueckner` (poort 4333).
Staat op noindex (meta, robots.txt, netlify.toml). Knop linksonder toont de CRO-toelichting per element.

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
KvK-nummer, openingstijden, storingsprocedure buiten kantooruren, reactietijd service, numerieke specificaties uit de folders, link EBA-folder, citaat TCV-interview, teamfoto's/namen, klantlogo's (met toestemming), YouTube-video-ID, samenvattingen Aldi Deventer en HB Truckwash, onderhoudscontractvormen, demo-aanbod EBA.

Afbeeldingen worden nu rechtstreeks van image.jimcdn.com geladen; bij livegang lokaal hosten als WebP.
