# Siteconcept tessaleonie.com

Datum: 8 oktober 2026

## Kern van het concept

Eén site, twee lagen die elkaar niet in de weg zitten:

1. **Laag 1, de therapiepraktijk (vrouwen én mannen).** Gericht op lokale vindbaarheid en op één vervolgstap: *gratis kennismaking plannen*. Alle navigatie, lokale pagina's en advertenties leiden hierheen.
2. **Laag 2, het vrouwenaanbod (Alchemie van de Nieuwe Vrouw).** Eigen sectie met eigen toon. Het wordt alleen genoemd op plekken waar iemand in de verkeerde laag dreigt te landen (blok "Op zoek naar iets anders?").

Eén primaire CTA op de hele praktijklaag: **"Plan een gratis kennismaking"**. Andere opties (Ankersessie, masterclass, nieuwsbrief) worden secundair of verdwijnen uit het hoofdmenu.

## Sitestructuur

| Pagina | URL | Doel | Index |
|---|---|---|---|
| Home | `/` | Herkenning, belofte, reviews, CTA | ja |
| 1:1 Traject | `/traject-lichaamsgerichte-therapie/` | Belangrijkste salespagina | ja |
| Werkwijze | `/werkwijze/` | Kernbewegingen: blijven, voelen en ervaren, vroeg herkennen, toen en nu | ja |
| Thema's | `/geboortetrauma/`, `/vroege-patronen/`, `/aanpassen/`, `/over-je-grenzen-gaan/`, `/terugtrekken/` | Long-tail SEO, elk met CTA naar traject | ja |
| Over Tessa | `/over-mij/` | E-E-A-T: 7 jaar praktijk, opleidingen, CAT | ja |
| Ervaringen | `/ervaringen/` | Alle reviews + link naar Google-reviews | ja |
| Tarieven en vergoeding | `/tarieven-vergoeding/` | €798,60, werkgever, geen zorgverzekeraar | ja |
| Blog | `/blog/` | Ondersteunt thema's | ja |
| Contact en route | `/contact/` | NAP, kaart, route (nu 404!) | ja |
| Kennismaking plannen | `/kennismaking/` | Eigen pagina rond de boekingslink, met bedankpagina voor meting | nee |
| **Lichaamsgerichte therapie Arnhem** | `/lichaamsgerichte-therapie-arnhem/` | Lokale landingspagina, gebouwd | ja |
| Lichaamsgerichte therapie Nijmegen | `/lichaamsgerichte-therapie-nijmegen/` | Lokaal, unieke inhoud | ja |
| Lichaamsgerichte therapie Elst/Overbetuwe | `/lichaamsgerichte-therapie-elst/` | Lokaal, unieke inhoud | ja |
| Ads-landingspagina | `/kennismaking-lichaamsgerichte-therapie/` | Kopie van Arnhem-template zonder menu | **noindex** |
| Juridisch | privacy, voorwaarden, klachtenregeling | Vertrouwen | ja/nee |

Hoofdmenu (praktijklaag): Traject · Werkwijze · Thema's · Over Tessa · Tarieven · Contact · **[Plan kennismaking]**. Vrouwenaanbod als aparte menu-ingang "Voor vrouwen".

## Zoekvraag (SE Ranking, NL, oktober 2026)

| Zoekwoord | Volume/mnd | CPC |
|---|---|---|
| lichaamsgerichte therapie | 1.100 | €0,41 |
| lichaamsgerichte traumatherapie | 390 | – |
| lichaamsgerichte therapie nijmegen | 70 | €0,47 |
| lichaamsgerichte therapie arnhem | 50 | €0,46 |
| traumatherapie nijmegen | 50 | – |
| traumatherapie arnhem | 40 | – |

Lokale volumes zijn klein maar zeer koopgericht en de concurrentie is laag (difficulty < 10). Nijmegen heeft meer volume dan Arnhem: die pagina is de logische tweede.

## Is het leaddoel haalbaar?

Doel: 6 kennismakingen + 4 trajecten per maand, €200–400 ads.

- Lokaal zoekvolume (Arnhem + Nijmegen + traumatherapie) is samen ±210 zoekopdrachten per maand. Met Ads én organisch bereik je daarvan realistisch 60–100 bezoekers.
- Daarbovenop: Ads op het brede "lichaamsgerichte therapie" met een straal van ±25 km rond Valburg. Bij een CPC van ±€0,50–1,00 levert €300 zo'n 300–500 klikken op, maar het beschikbare volume in de regio begrenst dat; reken op 100–200 klikken.
- Bij 4–6% conversie naar kennismaking: **6–12 kennismakingen per maand is haalbaar**.
- **4 trajecten uit 6 kennismakingen (67%) is ambitieus.** 40–50% is gangbaarder. Reken dus eerder op 8–10 kennismakingen voor 4 trajecten, of verhoog de slagingskans met een vaste opbouw van het kennismakingsgesprek.
- Google Bedrijfsprofiel (reviews, foto's, categorie "Therapeut") is voor deze zoekwoorden minstens zo belangrijk als de site.

## Conversiemeting

1. Google Tag Manager + GA4 plaatsen.
2. Alle CTA's hebben `data-conversie` + `data-plek`; een klik gaat als event `cta_klik` naar de dataLayer. Zo zie je welke knop werkt (hero, prijskaart, sticky mobiel).
3. Echte conversie: in clientomgeving.nl een bedankpagina/redirect instellen na boeking, of cross-domain tracking. Zonder dat meet je alleen klikken, geen afspraken.
4. Google Ads-conversie koppelen aan dezelfde bedankpagina.
5. Telefoonklikken apart meten (`data-conversie="telefoon"`).

## Snelheid en mobiel

- Huidige site: Divi + veel plugins, grote achtergrondfoto's. De landingspagina gebruikt geen pagebuilder, lazy-loading, één preload voor de hero en een sticky knop op mobiel.
- Knopkleur iets donkerder gemaakt (#896122 i.p.v. #AA8012) voor voldoende contrast met witte tekst.
