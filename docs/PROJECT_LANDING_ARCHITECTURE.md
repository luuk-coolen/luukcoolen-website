# Project- en landingspagina-architectuur

## Twee expliciete routes

| Startpunt | Bestemming | Doel |
| --- | --- | --- |
| Projectkaart of projectverhaal op LuukCoolen.nl | `/projecten/{slug}` op LuukCoolen.nl | Eerst de praktijkvraag, workflow, AI-rol, demo-beelden en leerpunten begrijpen. |
| `Projecten`-dropdown | Canonieke app-URL | De app direct openen als persoonlijke snelnavigatie. |

De app-URL's staan uitsluitend in `src/config/projectLinks.ts`. De projectverhalen leiden die URL af uit die centrale configuratie; er is geen tweede hardcoded app-URL in de portfolio-content.

## Gedeelde informatievolgorde

Iedere projectpagina gebruikt dezelfde rustige basisstructuur, met eigen copy, doelgroep en beelden:

1. korte projectbelofte, `Open app` en hetzelfde overzichtsbeeld als op de homepage;
2. praktijkprobleem en doelgroep;
3. van probleem naar aanpak;
4. analyse en keuzes;
5. prototype en workflow;
6. drie demoschermen met bijschriften en vergroting;
7. digitale ondersteuning en grenzen;
8. verdere ontwikkeling en leerpunten;
9. status en volgende vraag;
10. herhaalde `Open app`-CTA en teruglink naar LuukCoolen.nl.

Deze secties zijn gemeenschappelijk voor FocusFlow Bewind, FocusFlow Personal, WoonBuddy en MindFlow. `process` en `support` zijn verplicht in `ProjectStory`. De ondersteuningssectie benoemt AI bij WoonBuddy en MindFlow; bij FocusFlow beschrijft zij de vaste workflow, menselijke regie en open vragen rond gegevensgebruik.

## Eén beeldbron en galerij

- `ProjectStory.media` bevat één `overview` en precies drie `examples`, ieder met bronpad en alt-tekst. Homepage en projectpagina hergebruiken deze gegevens uit `src/config/projectStories.ts`.
- `ProjectGallery.tsx` levert gedeelde overzichts- en voorbeeldcomponenten. Het overzicht staat op desktop naast de introductie en op mobiel eronder. Voorbeelden gebruiken een raster met 4:3-thumbnails, bijschriften en zichtbare vergrotingsknoppen. Afbeeldingen behouden hun verhouding met `object-contain`.
- `PortfolioLightbox` toont het overzicht en de drie voorbeelden in dezelfde volgorde. Pijlen, thumbnails en toetsenbordnavigatie werken op beide startpunten. Focus blijft in de galerij, Escape sluit, focus keert terug naar de opener en achtergrondscrollen is geblokkeerd zolang de galerij open is.
- D1 deel 1 hergebruikt de bestaande homepagebeelden; geen beeldbestand is vervangen of opnieuw gegenereerd.

Dit maakt de portfolio geen app-store: de pagina vertelt eerst wat is onderzocht en geleerd. De app blijft een afzonderlijke bestemming.

## Routing en hosting

- `src/config/projectStories.ts` bevat de portfolioverhalen en hun `/projecten/{slug}`-routes.
- `src/components/ProjectLanding.tsx` is de herbruikbare presentatiecomponent.
- `vercel.json` herschrijft uitsluitend `/projecten/*` naar de bestaande Vite-entry, zodat directe bezoeken en refreshes niet naar een 404 leiden.
- Bestaande subdomain- en appredirects blijven ongewijzigd.

## Grenzen en vervolg

WoonBuddy, MindFlow en FocusFlow Personal gebruiken bestaande privacyveilige demobeelden. FocusFlow Bewind behoudt zijn bestaande overzicht, inboxscan, Top 3 en weekplanning. Nieuwe captures met persoonlijke planning horen niet in het portfolio.

D1 deel 2 blijft open: vier nieuwe overzichtscomposities van 2400 × 1600 pixels in één stijl, uit de bestaande demoscreenshots. De huidige bestanden blijven als bron behouden. De actieve planning staat uitsluitend in `docs/PROJECT_ROADMAP.md`.

## Validatie D1 deel 1 — 2 oktober 2026

- Baseline: lint, build en diffcheck geslaagd.
- Browsercontrole met gebundelde Playwright en headless Edge: vier routes op 390, 768 en 1440 pixels; dezelfde tien secties, vier geladen beelden per pagina en geen horizontale overflow.
- Galerijcontrole op alle twaalf pagina/viewport-combinaties: juiste startafbeelding, vorige/volgende inclusief rondlopen, thumbnailselectie, sluiten met Escape en sluitknop, focusbegrenzing, focusherstel en herstel van achtergrondscrollen.
- Homepagecontrole: dezelfde zestien beeldverwijzingen als de vier projectpagina's; galerij opent en sluit. Geen JavaScript-pageerrors.
- Eindcontrole: lint, build, beeld- en routeverwijzingen en diffcheck geslaagd. Koppen in donkere panelen zijn expliciet wit; de contrastcorrectie is gericht op alle vier routes gecontroleerd.
- De browser-CLI was niet beschikbaar. De gebundelde runtime werkte met een tijdelijke Vite-server op `127.0.0.1:3002`; de oorspronkelijke previewverbinding was niet bereikbaar vanuit de controleomgeving.
