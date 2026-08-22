# Project- en landingspagina-architectuur

## Twee expliciete routes

| Startpunt | Bestemming | Doel |
| --- | --- | --- |
| Projectkaart of projectverhaal op LuukCoolen.nl | `/projecten/{slug}` op LuukCoolen.nl | Eerst de praktijkvraag, workflow, AI-rol, demo-beelden en leerpunten begrijpen. |
| `Projecten`-dropdown | Canonieke app-URL | De app direct openen als persoonlijke snelnavigatie. |

De app-URL's staan uitsluitend in `src/config/projectLinks.ts`. De projectverhalen leiden die URL af uit die centrale configuratie; er is geen tweede hardcoded app-URL in de portfolio-content.

## Gedeelde informatievolgorde

Iedere projectpagina gebruikt dezelfde rustige basisstructuur, met eigen copy, doelgroep en beelden:

1. korte projectbelofte en `Open app`;
2. praktijkprobleem en doelgroep;
3. belangrijkste workflow in vier stappen;
4. proportionele AI- en implementatie-uitleg;
5. actuele fictieve demo-schermen waar beschikbaar;
6. herhaalde `Open app`-CTA en teruglink naar LuukCoolen.nl.

Dit maakt de portfolio geen app-store: de pagina vertelt eerst wat is onderzocht en geleerd. De app blijft een afzonderlijke bestemming.

## Routing en hosting

- `src/config/projectStories.ts` bevat de portfolioverhalen en hun `/projecten/{slug}`-routes.
- `src/components/ProjectLanding.tsx` is de herbruikbare presentatiecomponent.
- `vercel.json` herschrijft uitsluitend `/projecten/*` naar de bestaande Vite-entry, zodat directe bezoeken en refreshes niet naar een 404 leiden.
- Bestaande subdomain- en appredirects blijven ongewijzigd.

## Grenzen en vervolg

WoonBuddy en MindFlow hebben actuele screenshots uit hun expliciet fictieve demo's. FocusFlow Personal heeft wel een actuele publieke app-inspectie, maar de beschikbare sessie bevat persoonlijke planning; vervang de huidige portfoliobeelden pas na een gecontroleerde fictieve demosessie. FocusFlow Bewind is inhoudelijk niet opnieuw onderzocht en behoudt daarom zijn bestaande beelden.
