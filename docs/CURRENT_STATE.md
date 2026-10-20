# Current State

## Git-/productierelease voorbereid — 20 oktober 2026

Gebruiker heeft push en deploy expliciet gevraagd. Bestaande goedgekeurde React-portfolio, stijlen, organisatiebeelden/privacy en de dropdowncorrectie worden samen vastgelegd; eerdere publicaties waren lokale snapshots. Losse film-/stemgeneratiescripts en output blijven buiten Git. De vier dropdownprojecten openen direct de canonieke app in een nieuw tabblad; homepagekaarten behouden de projectverhalen. Lint/build en gerichte linkcontrole zijn geslaagd op dezelfde bronbestanden. Doel: origin/main en bestaand Vercel-project luukcoolen-website, productie luukcoolen.nl; geen deploymentinstellingen wijzigen. Controleer deploymentstatus en commit voor de definitieve publicatie-uitkomst; oudere opmerkingen over geen commit/push zijn historisch.

## Dropdown opent direct de apps — 20 oktober 2026

PortfolioHeader.tsx gebruikt bij de vier hoofdprojecten nu story.appHref in plaats van story.href, met een nieuw tabblad en noopener/noreferrer zoals de overige appkoppelingen. Korte omschrijvingen en de links naar projectverhalen op de homepage behouden. Bestemmingen gecontroleerd tegen de bestaande centrale projectLinks-configuratie. Baseline/eind-lint, build en gerichte controle van de vier appbestemmingen in de build geslaagd. Geen externe apps geopend of browserkliktest; poort 3002 was niet actief en de lokale Vite-server is opnieuw gestart. Geen commit, push of publicatie.

## Contact hersteld en portfolio gepubliceerd — 8 oktober 2026

Op expliciete gebruikersopdracht gepubliceerd op https://luukcoolen.nl/. Contact is uitgesloten van reveal: aan de paginaonderkant kan het blok niet altijd de 55%-startlijn bereiken, waardoor het grijs bleef. Tekst en e-mail/LinkedIn zijn nu direct volledig zichtbaar; overige goedgekeurde animaties behouden. Alleen PortfolioHome.tsx gewijzigd voor deze correctie.

Lint/build en diffcheck geslaagd. Live desktop en mobiel 390: Contact opacity 1, correcte links en geen mobiele overflow. Homepage toont nieuwe inhoud; vier projectroutes renderen ieder zeven hoofdstukken. Productie Vercel READY, domeinen luukcoolen.nl/www gekoppeld, deployment dpl_ChtLUwVc6fPWXHrS8yhXBpnL58xq. Bewijsbeeld: output/design/contact-live-2026-10-08.jpg. Directe bronbestandsdeployment via geauthenticeerde connector omdat lokale CLI-login verlopen is. Alleen bouwbronnen en gebruikte publieke websitebeelden geüpload; interne docs/films/scripts uitgesloten. Geen commit of Git-push; deploymentconfiguratie niet gewijzigd. Publicatie is een snapshot van de huidige lokale website, dus Git bevat de redesignwijzigingen nog niet. Externe apps niet opnieuw gevalideerd; eerdere reduced-motionbeperking blijft gelden.

## Reveal-startpunt bij schermmidden — 8 oktober 2026

Nieuwe concrete gebruikerskeuze vervangt de eerdere triggerinstellingen: bij omlaag scrollen start elk reveal-onderdeel zodra de bovenkant op 55% van de viewporthoogte komt. Geldt ook voor 04 Leren en alle projectverhalen. Bij omhoog scrollen blijft de eerdere viewport-entry met 40px marge gelden. Hero blijft direct verschijnen. Duur/stagger, projectrij en Werkwijze-scrollbeweging zijn behouden; geen extra tijdvertraging. Gedeelde framegestuurde detectie vervangt de concurrerende observers. Bounds worden eerst samen gelezen, daarna classes gewijzigd. Zichtbare basis, reset buiten beeld, snelle-sprongopvang en reduced-motionpad behouden; verouderde late-reveal CSS verwijderd.

Bestanden: usePortfolio.ts en portfolio.css. Baseline/eindcontrole lint/build en diffcheck geslaagd. Edge 1920x1080: FITZ bij y=200/top=725 blijft wachten, bij y=400/top=517 actief; kaart op top=594,8 wacht nog tot de 594px-startlijn. Leren-intro actief op top=219, kaarten op top=670 wachten. Personal-ontwerp op top=698 wacht, top=538 actief met 0,85s. Bij terugscrollen zijn onderdelen op top=672–1047 al actief, dus vroeger terugkeren behouden. Mobiel 390: homepage en overige drie verhalen zonder overflow; onderdelen onder startlijn wachten. Reduced motion statisch behouden; geen fysieke schermtest of deployment. Screenshot output/design/leren-midden-startpunt.png. Geen commit/push/publicatie.

## Laatste lokale controle vóór publicatie — 8 oktober 2026

Over mij ingekort naar Mijn basis ligt in het maatschappelijk werk; volledige hbo-opleidingsnaam Maatschappelijk Werk en Dienstverlening (MWD) bij Achtergrond behouden. FITZ-bug bevestigd: snelle scrollopvang zette nieuw binnenkomende onderdelen op transition:none. Opvang geldt nu alleen voor nog niet gestarte onderdelen waarvan het begin al voorbij de bovenrand is; nieuw binnenkomende onderdelen houden hun timing. Expliciete reset van 01/02/03 buiten de viewport voorkomt dat FITZ-tekst na terugscrollen actief blijft.

Bestanden: PortfolioHome.tsx en usePortfolio.ts. Baseline/eindcontrole lint/build en diffcheck geslaagd. Verse browser: FITZ na PageDown heeft 0,6s tekst/0,8s kaart met 0,1s vertraging, geen motion-immediate; Home reset beide. Alle homepage-onderdelen hebben hun bedoelde duur en geldige ankers. Werkwijze-scrollwaarde verandert van 0,417 naar 0,967. Vier projectroutes desktop/mobiel 390: zeven hoofdstukken, gekoppelde ontwerpreveals, geldige ankers, drie zoombeelden en geen overflow. Beeldzoom tot 150% gecontroleerd. Privacy bereikbaar, geen browsererrors; 23 unieke lokale beeldpaden bestaan. Reduced motion alleen statisch gecontroleerd; externe apps niet opnieuw geopend en productie nog niet gevalideerd. Screenshot output/design/laatste-controle-over-mij.png. Geen commit, push, publicatie of deploymentconfiguratie gewijzigd.

## Inhoudsronde projectverhalen — 8 oktober 2026

Vier verhalen tonen nu Huidige situatie, Knelpunt en Mijn aanpak herkenbaar, inclusief de ontbrekende situatie bij Personal. Bestaande leervragen worden weer getoond; AI-ondersteuning geldt als label alleen bij WoonBuddy/MindFlow, naast Vaste workflow en Bij de gebruiker. Einde: grenzen/vervolg (met kop Wat nog nodig zou zijn), terugblik, status, app-afsluiting en volgend verhaal. Personal heet consequent eigen hulpmiddel in ontwikkeling. Schema's hebben unieke onderschriften; Top 3 toont de ontwerpkeuze in plaats van drie identieke prioriteiten. Tussenruimte gericht verkleind, screenshots/zoom en timing behouden.

Homepage: vier secundaire links heten Open de app; herhaling Over mij verkort; Copilot-verkenning concreet geformuleerd zonder resultaatclaim. Menu/nevenprojecten, horizontale rij, Werkwijze en loopbaanvolgorde behouden. Google Fonts-import verwijderd: de actieve vormgeving gebruikt al Arial/Helvetica. Systeemfallbacks nu ook in theme; geen externe fontaanroep of nieuwe fontdependency.

Bestanden: PortfolioStory.tsx, ProjectDesignVisual.tsx, Chapters.tsx, PortfolioHome.tsx, project-story.css, index.css. Baseline/eindcontrole lint/build en diffcheck geslaagd; React-review op keys, semantische koppen, linkgedrag en gedeelde data. Browser: vier routes, leervragen/labels/volgorde en bestaande appbestemmingen, werkende volgende-projectlink; mobiel 390 Personal/MindFlow/Bewind zonder overflow; homepage 1440, menu en links gecontroleerd. Geen externe apps geopend, geen fysieke telefoontest. Bewijsbeeld output/design/projectinhoud-hersteld.png. Geen commit, push of deployment.

## Timing per onderdeel — 8 oktober 2026

Vervangt de eerdere globale vertraging van 0,5s. Tekst begint zonder pauze (0,4–0,6s beweging); FITZ-logo, missiebeeld en projectoverzicht volgen kort daarna (0,06–0,1s, beweging 0,8–0,95s). Leerkaarten en tijdlijn hebben een korte opeenvolging; mobiel vervalt die wachttijd. Werkwijze behoudt de bestaande scrollgestuurde visual. Projectrij begint bij 65% viewporthoogte en verdeelt de verplaatsing over 95% viewporthoogte; handmatige bediening blijft leidend.

Alle vier verhalen animeren ontwerpbeeld en uitleg als één onderdeel. Werking heeft 60ms opeenvolging, terugblik/grenzen/status verschijnen sneller, MindFlow-beelden duren 0,95s. Snelle scrollsprongen tonen zichtbare onderdelen direct; nog niet gestarte onderdelen hebben een zichtbare basis. Herhaling na verlaten van de viewport en reduced motion behouden.

Bestanden: usePortfolio.ts, useProjectRailMotion.ts, PortfolioStory.tsx, portfolio.css, project-story.css. Bestaand gebruikerswerk en scripts/tts-v4.py ongemoeid. Baseline/eindcontrole lint/build geslaagd. Edge: homepage en vier projectroutes op desktop; Bewind mobiel 390 zonder overflow, gekoppelde ontwerpweergave en zoom tot 150%; korte workflowtiming, snelle WoonBuddy-scroll en handmatige override gecontroleerd. Reduced motion statisch gecontroleerd; geen test op een fysieke telefoon. Bewijsbeeld: output/design/timing-per-onderdeel.png. Geen commit, push of deployment.

## Projectverhalen visueler — 8 oktober 2026

Alle vier projectroutes hebben nu projectgebonden ontwerpschema's, kleine pictogrammen bij aanleiding/doelgroep, werking, leerpunten en grenzen, en drie visuele statusblokken. Elk overzicht en demoscreenshot blijft eenmaal geplaatst; zoom behouden. Animaties zijn verplaatst van hele hoofdstukken naar koppen en losse onderdelen, zodat ze pas bij hun eigen plek spelen en bij terugkeer herhalen. Gebruikersaanvulling: scroll-entrances beginnen 0,5 seconde na zichtbaar worden (homepage én verhalen); beperkte opeenvolging van kaarten behouden. Reduced motion schakelt beweging en vertraging uit. Geen nieuwe claims of projectlinks gewijzigd.

Bestanden: PortfolioStory.tsx, ProjectDesignVisual.tsx (vervangt PersonalDesignVisual.tsx), project-story.css en portfolio.css. Baseline/eindcontrole lint/build en diffcheck geslaagd. Vier routes op desktop 1440 en mobiel 390 zonder overflow; drie passende ontwerpschema's en drie visuele leerpunten per route gecontroleerd. MindFlow-reveals resetten buiten beeld en verschijnen opnieuw met 0,5s vertraging; Bewind-schermzoom tot 150% mobiel gecontroleerd. Reduced motion statisch gecontroleerd. Screenshot output/design/projectverhalen-visueel-2026-10-08.png. Geen commit, push of deployment.

- Projectmenu verduidelijkt na gebruikerscorrectie: oorspronkelijke korte omschrijvingen uit projectLinks.ts behouden (zoals Workflow en prioritering en Wonen en begeleiding), in plaats van de langere projectStory-ondertitels. Uitklapper, links en inhoud van projectkaarten behouden. Alleen PortfolioHeader.tsx aangepast; lint/build en diffcheck geslaagd. Geen commit, push of deployment.

- Projectmenu hersteld (8 oktober): vier hoofdprojectverhalen direct zichtbaar; daaronder een standaard gesloten uitklapper 'In ontwikkeling' met FitFlow, VibeAudit, Eerste Stap, Bruiloft Gasten en Midstar. Bestaande appbestemmingen vergeleken met het live menu; Midstar toegevoegd met door Luuk aangeleverde URL https://midstar.ai.studio/. Bestanden: PortfolioHeader.tsx, portfolio.css en projectLinks.ts. Baseline/eindcontrole lint/build en diffcheck geslaagd; desktop en mobiel 390, Enter/Escape en mobiel scrollbaar menu zonder pagina-overflow gecontroleerd. Screenshot output/design/projectmenu-hersteld.png. Externe bereikbaarheid Midstar niet bevestigd. Geen commit, push of deployment.

- Feedbackstatus: vier expliciete geplande correcties en gerichte inhoudsverbeteringen verwerkt. Carrouselverwijdering/rebrand en wijziging van Werkwijze bewust niet toegepast wegens nieuwere gebruikerskeuzes. WoonBuddy blijft uitgelicht; volledig gelijke visuele projectaandacht is daarmee niet bereikt. Een echte werkfoto voor Over mij is een latere optie, geen ontbrekend verplicht beeld. Reduced-motionpad alleen statisch getest en appbereikbaarheid nog niet volledig bevestigd.

## Gerichte portfoliofeedback verwerkt — 8 oktober 2026

De eenmalige automation is na afronding verwijderd.

De eenmalige geplande uitvoering is door de scheduler pas op 8 oktober aangeleverd. Homepagebeelden openen nu de lokale projectverhalen met het overzicht bovenaan; zoom blijft op de projectpagina's. Alle vier projecten hebben een duidelijke verhaal-knop en een ondergeschikte app-link. Een directe projectindex vult de horizontale rij aan. Desktopscroll beweegt de rij mee; handmatige bediening stopt de automatische beweging, mobiel en reduced motion gebruiken de gewone rij.

01/02/03 starten hun reveals later (15% onderrand), met een zichtbare basis en opvang voor grote scrollsprongen. Overige hoofdstukken en de goedgekeurde Werkwijze zijn behouden. Hero benoemt leerportfolio en mensgerichte zorginnovatie; FITZ legt processen en leren voorop, missie benoemt cliënt en professional, projectintro's tonen aanleiding, aanpak en afbakening. MWD, achtergrondvolgorde en unieke screenshots behouden.

Validatie: baseline en eindcontrole lint/build geslaagd, diffcheck geslaagd. Edge desktop 1440 en mobiel 390 zonder pagina-overflow; automatische beweging (131 naar 367 px), handmatige override, beeldlinks naar Personal/WoonBuddy en zoom tot 150% gecontroleerd. Reduced motion statisch gecontroleerd. Canonieke app-URL's behouden; externe bereikbaarheid niet bevestigd. In-app-browser/localhost:3000 verbinding haperde; werkende lokale preview via http://127.0.0.1:3002/. Geen commit, push of deployment. Details: ONTWERP_FASE_1.md.

- Laatste beeldcorrectie: WoonBuddy-overzicht is het eerste galerijbeeld; Leren heeft een compacte losse vectorillustratie rechts bij de introductie. Werkwijze behouden. Zie ONTWERP_FASE_1.md.

## Fase 2 — lokaal geïntegreerd (7 oktober 2026)

Het goedgekeurde ontwerp draait nu in React op de homepage en de vier bestaande projectroutes. Oude output/design-links verwijzen door naar deze routes. Laatste gebruikerscorrectie: 04 behoudt de vijf leerpunten met vijf kleine SVG-pictogrammen (geen herhaalde projectbeelden); 05 is teruggezet naar de fase-1-compositie met scrollende Woonstart-uitsnede; 06 krijgt alleen één klein werk/achtergrondpictogram. Projectpagina’s tonen het overzicht één keer en de drie demoschermen één keer bij Schermen; Ontwerp behoudt de keuzes zonder dubbele beelden.

Behouden: missievragen, oorspronkelijke leeruitleg, persoonlijke achtergrond en ervaring, volledige naam Maatschappelijk Werk en Dienstverlening (MWD), thuisadministratie vóór bewindvoering, contactuitnodiging en LinkedIn-icoon. Vier hoofdprojecten in het menu; ontwikkelprojecten verborgen. Zoomviewer, herhaalde subtiele reveals en reduced-motion-instellingen aanwezig. Privacy staat ook als zelfstandige public/privacy.html, zonder hostinginstellingen te wijzigen.

Validatie: baseline en afsluitende lint/build geslaagd; desktop 1440 en mobiel 390, vier projectroutes, ankers, menu, zoom, Escape/focusherstel en geladen beelden gecontroleerd. Na de laatste correctie opnieuw pictogrammen, herstelde werkwijze en unieke projectbeelden gecontroleerd. Sociale deelvoorbeelden voor individuele routes zijn niet bij externe bots getest; metadata wordt in React bijgewerkt. Geen commit, push of deployment.

De onderstaande fase-1-checkpoints zijn historische uitvoeringsnotities.

- Over mij in fase 1 aangevuld: oorspronkelijke persoonlijke beschrijving, toelichting per werkervaring en afzonderlijk Achtergrond-blok teruggezet. Leren behoudt de oorspronkelijke uitleg en vijf leerpunten; contactuitnodiging en LinkedIn-/mailiconen hersteld. MWD voluit en thuisadministratie vóór bewindvoering behouden.

- Volledigheidsronde fase 1 (7 oktober): menu Projecten met snelle toegang tot vier hoofdprojecten en korte omschrijvingen; ontwikkelprojecten verborgen op verzoek, herstelde hbo-opleiding Maatschappelijk Werk en Dienstverlening (MWD), afzonderlijke achtergronditems, rijker FocusFlow Personal, aanpak en vervolgvragen in de vier projectverhalen, leerpunt over sprints en Privacy via alle footers. Alleen output/design; geen integratie, commit, push of deployment.

- Laatste visuele verfijning (7 oktober): leesbare hoofdschermen, minder thumbnails/kaders, consistente kopstijl, rustige portretopmaak, sterkere hoofdstukcontrasten en officiële lokale FITZ/Riwis-logo’s. Alle vijf previewpagina’s mobiel gecontroleerd; desktopcompositie en beeldviewer gecontroleerd. Bronnen in output/design/brands/sources.json; details in ONTWERP_FASE_1.md. Alleen preview; geen commit/push/deployment.

- Laatste fase-1-checkpoint (7 oktober): projectmodals vervangen door vier zelfstandige ontwerpvoorbeeldpagina’s; projectkaarten korter, Leren over eigen ontwikkeling, rijkere overzichten en gedeelde zoomviewer. Zie ONTWERP_FASE_1.md. Mobiele pagina’s, desktop-WoonBuddy, navigatie/zoom/Escape, syntax en diffcheck gecontroleerd. Geen React-integratie, commit, push of deployment.

- 7 oktober 2026: fase-1-voorvertoning bijgewerkt met zichtbare overzichten voor vier projecten, schermbeelden bij Ontwerp/Leren, minder noodzakelijke uitklappers en gedeelde beeldviewer met zoom/verplaatsen. Desktopkernoverzicht past zonder inhoudsscroll; mobiel/desktop, galerij, zoom, Escape/focusherstel en JS-syntax/diffcheck gecontroleerd. Zie `docs/ONTWERP_FASE_1.md` en `output/design/fase-1-overzicht-2026-10-07.png`. Alleen ontwerpvoorbeeld, geen React-integratie, commit, push of deployment.

## Product in één alinea

LuukCoolen.nl is een persoonlijke portfolio- en leerportfoliowebsite rond projecten, experimenten en ontwikkeling op het snijvlak van zorg, IT en digitalisering. Vanaf september 2026 werkt Luuk als consultant zorg & IT bij FITZ; ervaring in zorg, begeleiding en bewindvoering vormt de praktijkbasis van de projecten. De site presenteert projectbewijs en leerproces; zij is geen commerciële SaaS of productbron voor de gekoppelde apps.

## Huidige technische status

- React + Vite-frontend met statische content en configuratie in de repository.
- Belangrijke onderdelen zijn `src/App.tsx`, `src/components/` en `src/config/projectLinks.ts`.
- `vercel.json` is aanwezig. De daadwerkelijke deploymentstatus is niet betrouwbaar vastgesteld.

## Recent afgerond

- Ontwerpcheckpoint afgerond na laatste controle: volledige projectinhoud georganiseerd in vier modal-tabs en uitklapbare details; screenshots via één pijltjesgalerij. Titel/tabs/sluiten blijven zichtbaar. Alle vier vensters getest; toetsenbordtabs, galerij, details, Escape/focusherstel werken. Edge op 390/1440 zonder pagina-overflow, modal past mobiel, interne ankers en geladen beelden gecontroleerd. JS-syntax/diffcheck geslaagd. Screenshot `output/design/fase-2-modal-final.png`. Alleen lokale voorvertoning afgerond; geen React-integratie, commit, push of deployment.

- Laatste feedback in hetzelfde ontwerpcheckpoint verwerkt: FITZ direct onder de introductie. De drie overige projectoverzichten bevatten meer prototype-uitleg en een ontwerpkeuze; alle projectdialogen hergebruiken nu de volledige canonieke projectStories-content (negen inhoudelijke onderdelen, overzicht + drie voorbeelden). Voorvertoning vereist de lokale Vite-server. Alle vier dialogen en de sectievolgorde gecontroleerd; JS-syntax/diffcheck geslaagd. Geen productbroncodewijziging, commit, push of deployment.

- Ontwerpcheckpoint herzien (6 oktober 2026): Luuk kiest lichtblauw en een Webflow-achtige scrollpresentatie. `output/design/fase-1.html` uitgebreid tot een volledige voorvertoning met interne navigatie/projectdialogen, compacte WoonBuddy-galerij, horizontale projectrij, richtingafhankelijke entrances/parallax en sticky werkwijzehoofdstuk met scrollgestuurde 3D-kanteling/taakdetail. Stijl/script: `fase-2.css` en `fase-2.js`; conceptillustratie behouden in `missie.svg`. Apple, Linear en Webflow-referenties onderzocht. Exacte Edge-viewports 390/1440 zonder pagina-overflow; galerij/dialog/focus/scrolltransformaties en lokale assets/JS-syntax gecontroleerd. Reduced motion alleen statisch gecontroleerd. Geen React-wijziging, extra dependencies, beeldgeneratie, commit, push of deployment. Dit vervangt de eerdere kleurkeuze; verdere React-uitwerking volgt na dit ontwerpcheckpoint.

- Ontwerpherziening, fase 1 (6 oktober 2026): afzonderlijk responsief voorbeeld in `output/design/fase-1.html` met introductie, missie en WoonBuddy; conceptteksten voor de volledige homepage in `docs/ONTWERP_FASE_1.md`. Aanvulling van Luuk verwerkt: meer beeld buiten projecten en gekleurde achtergronden (diepgroen, zand en salie). Missie bevat een lokaal getekende conceptillustratie; bestaand portret en echte demoscreenshots hergebruikt. Dit is het ontwerpcheckpoint vóór verdere uitwerking, geen wijziging van de React-site. Geen generatiecredits, commit, push of deployment.

- D3 (6 oktober 2026): zuinige visuele vernieuwing van homepage en vier projectpagina’s. Inter-koppen, grotere bestaande beelden, compactere homepage, donker missiehoofdstuk en één gedeeld Reveal-patroon met directe weergave bij verminderde beweging. FITZ-bijdragen en leervragen blijven via uitklapbare details beschikbaar; projectverhalen behouden hun volledige onderbouwing. AI-illustraties, films en het uitgebreide scrollhoofdstuk zijn uitgesteld. Routes, app-URL’s, projectstatussen en deploymentinstellingen zijn behouden.
- D3-validatie: baseline en eindcontrole lint/build/diffcheck geslaagd; vier projectpagina’s op 390 en 1440 pixels gecontroleerd op overflow en geladen overzichten. Homepage gecontroleerd op mobiel, tablet en desktop; projectmenu, bijdrage-details en toetsenbordgalerij inclusief focusherstel werken. Reduced-motionpad statisch gecontroleerd; geen Lighthouse-meting uitgevoerd. Previewbereikbaarheid vereiste starten buiten de sandbox op `127.0.0.1:3002`; de in-app-browser past viewportmaten afwijkend toe, daarom responsieve controles in Edge uitgevoerd. Ontwerpbeelden staan in `output/design/`. Bestaand niet-gecommit werk behouden; geen commit, push of deployment.

- Lokale portretvideo gemaakt: `output/video/luuk-fitz-riwis-concept.mp4` (80 seconden, 1920 × 1080, zonder audio). Luuk staat centraal met zijn bestaande portret; vijf scènes tonen zijn werk en ontwikkeling bij FITZ/Riwis. Reproduceerbare bron: `scripts/generate-portrait-video.py`. Geen gesproken/gefilmde avatar; nog niet in de website geplaatst of gepubliceerd.

- D2: homepage begint na de introductie met Werk en leren bij FITZ, met Riwis als opdrachtcontext. Drie onderdelen tonen bijdragen aan overzicht/projectgroep, praktische IT-ondersteuning en automatisering in verkenning. Eigen apps blijven afzonderlijke experimenten. Interne case en videoscript staan in `docs/FITZ_RIWIS_CASE_VIDEO_CONCEPT.md` en worden niet door de website ingeladen.
- D2-validatie op 4 oktober 2026: lint/build/diffcheck geslaagd, evenals browsercontroles voor homepage en vier projectpagina’s op 390 en 1440 pixels (beelden, lightbox, toetsenbord, focusherstel en overflow). De preview op 3001 was gestopt; na herstart zijn de vier overzichten ook in de in-app-browser geladen. Geen beeldbestanden of beeldverwijzingen gewijzigd. Losse shell-fetches bleven in deze omgeving onbereikbaar terwijl de browserpreview wel werkte; browserwaarneming en de gerichte Edge-controles vormen het runtimebewijs.

- D1 deel 2: vier nieuwe overzichten van 2400 × 1600 pixels gebruiken één reproduceerbaar compositietemplate met bestaande demoscreenshots. PNG-bronnen en kleinere, verliesloze WebP-versies zijn toegevoegd; homepage, projectpagina’s en lightbox delen de nieuwe WebP-overzichten. Originele beelden zijn behouden.
- D1 deel 1: alle vier projectpagina’s delen dezelfde verplichte secties, inclusief digitale ondersteuning en grenzen. Homepage en projectpagina gebruiken per project één overzicht en drie voorbeelden uit `projectStories.ts`, met dezelfde galerij en lightbox. De bestaande beeldbestanden zijn behouden.
- Recente Git-geschiedenis vermeldt mobiele sectienavigatie, aangescherpte portfolio-copy en navigatie, een FocusFlow Personal-casestudy en verwijdering van een GitHub-projectlink.
- De actieve roadmap beschrijft eerdere positionering richting zorginnovatie, projectgroepering en directe projectlinks.
- Portfolioverhaal, projectlinks en appingangen zijn opnieuw gecontroleerd voor FocusFlow Personal, WoonBuddy en MindFlow.
- Projectkaarten leiden nu naar een gedeelde, compacte projectlandingspagina (`/projecten/:slug`); het menu **Projecten** blijft voor directe appnavigatie.
- `src/config/projectStories.ts` hergebruikt de canonieke URL's uit `src/config/projectLinks.ts`, zodat app-URL's niet per landingspagina worden gedupliceerd.
- WoonBuddy, MindFlow en FocusFlow Personal gebruiken recente privacyveilige demoscreenshots. De FocusFlow Personal-set bevat Werkmodus, Dagstart/Top 3 en Weekreview; een losse mobiele workflowstrip volgt alleen uit echte mobiele captures.
- De publieke positionering is aangescherpt: de huidige rol is consultant zorg & IT bij FITZ (vanaf september 2026); zorg, begeleiding en bewindvoering worden als praktijkervaring en projectcontext beschreven, niet als huidige functie.
- Sprint L1 controleerde op 2 oktober 2026 alle acht menu-URL's en de portfoliohomepage. De appbestemmingen en hoofd-JavaScriptbestanden zijn bereikbaar; VibeAudit leidt naar Google-inlog. FocusFlow Personal en Eerste Stap gebruiken werkende redirects. Bevindingen en grenzen staan in `docs/PROJECT_LINK_REVIEW.md`; bestaande links en projectstatussen zijn behouden.

## Actuele beslissingen

- `docs/PROJECT_ROADMAP.md` blijft de enige actieve roadmap.
- `docs/old-version.md` blijft historische contentreferentie.
- Content moet persoonlijk en concreet blijven; prototypes worden niet als voltooide producten gepresenteerd.
- De vaste positioneringslijn is: consultant zorg & IT bij FITZ, met praktijkervaring in zorg, begeleiding en bewindvoering als basis voor mensgerichte digitalisering en procesverbetering.

## Open punten

- Historisch budgetstopmoment (inmiddels hervat en uitgevoerd in fase 2): zichtbare projectoverzichten herstellen, minder tekst/uitklappers en meer echte beelden bij Het project, Ontwerp en Leren & grenzen; lightbox met daadwerkelijke zoom en leesbare screenshots. Aangeleverde online tekst en WoonBuddy-referentie lokaal bewaard. Concrete vervolgcriteria en brongebruik staan in `docs/ONTWERP_FASE_1.md`. Luuk stopte uitvoering expliciet wegens resterend budget; wacht op een volgende opdracht.

- Videoherziening (6 oktober 2026): nieuwe FITZ-hoofdfilm (79,50 s) en trailer (32,58 s) staan in `output/video/cinematic/v2/`. Voice-over is per inhoudsblok gemonteerd; de spraakinput gebruikt `fits` voor FITZ, terwijl de merkspelling in beeld behouden blijft; WoonBuddy, FocusFlow Personal en MindFlow verschijnen met echte demoscreenshots. Nieuwe productiemuziek: Inspired van Kevin MacLeod, CC BY 4.0 met credits en spraakducking. Reproduceerbaar script: `scripts/revise-portfolio-films.py`. Alle frames, audio-uitlijning, ondertitels en beeldsecties gecontroleerd; rechtstreekse luistercontrole is niet beschikbaar. Kleine inline-telefoonweergave garandeert geen leesbaarheid van fijne UI-tekst. Vorige exports en bronbestanden zijn behouden. Geen nieuwe Flow-generaties, aankopen, websiteplaatsing, commit, push of deployment.

- FITZ/Riwis-case: exact opgeleverd overzicht, status en concrete leerpunten bevestigen; inhoud en publiceerbaarheid beoordelen vóór publicatie. De nieuwe lokale films beoordelen op stem, muziek en herkenbaarheid; websiteplaatsing is nog niet uitgevoerd.

- Voeg voor FocusFlow Personal vijf echte mobiele captures met fictieve content samen tot de geplande workflowstrip. Actuele persoonlijke planning is niet geschikt voor publicatie.
- Bevestig gewenste canonieke URL's en inhoudelijke projectstatussen bij de eigenaar. HTTP-bereikbaarheid is gecontroleerd in L1; functionele appwerking en toegang tot VibeAudit na inloggen zijn niet vastgesteld.
- Deployment en hostingconfiguratie alleen gericht onderzoeken wanneer daarvoor een opdracht is.

## Niet nu

- Geen zware consultancy-branding, salesfunnel, CMS/blog, automatische GitHub/Vercel-statussync of grote rebrand zonder expliciete sprint.
- Niet automatisch pushen, deployen of Vercel-instellingen wijzigen.

## Relevante bronnen

- Richting en open punten: `docs/PROJECT_ROADMAP.md`.
- Historische websiteversie: `docs/old-version.md`.
- Projectlinks: `src/config/projectLinks.ts`.
- Projectverhalen: `src/config/projectStories.ts` en `src/components/ProjectLanding.tsx`.
- AI-transparantie: `docs/AI_TRANSPARENCY_REVIEW.md`.
- Wijzigingsgeschiedenis: `docs/CHANGELOG.md`.
- Projectlinkcontrole en waargenomen redirects: `docs/PROJECT_LINK_REVIEW.md`.
- Overdracht voor een nieuw gesprek: `docs/HANDOFF_2026-10-02.md`.
- Duurzame werkregels: `AGENTS.md`.

Deze status vat vastgestelde repositoryinformatie samen en maakt geen nieuwe roadmapbeslissingen.
