# Ontwerpvoorstel fase 1 — 6 oktober 2026

Dit is het tekst- en ontwerpvoorstel binnen de afgesproken herziening van het portfolio. De actieve richting blijft in PROJECT_ROADMAP.md. De React-site is nog niet aangepast. Het afzonderlijke, inmiddels uitgebreide voorbeeld staat in `output/design/fase-1.html` en is tijdens de lokale Vite-preview bereikbaar op `/output/design/fase-1.html`. Presentatie en interactie staan in `fase-2.css` en `fase-2.js` in dezelfde map.



### Visuele verfijning van het geheel — 7 oktober 2026

Gerichte afwerking op verzoek van Luuk. Homepageprojecten gebruiken één echt demoscherm als hoofdbeeld; kleine dubbele thumbnailrijen verwijderd. De complete overzichten blijven op de projectpagina’s en in de zoomviewer. WoonBuddy-ontwerpkeuze over stappen krijgt een uitsnede van de bestaande taaklijst; Contact & Hulp krijgt een grotere uitsnede. Geen pixels gegenereerd of functies verzonnen.

Lichtblauw behouden met duidelijke hoofdstukverschillen en donker contactvlak; minder kaders/schaduwen, kleinere afrondingen, consistente schreefloze projectkoppen. Onbedoelde minimumhoogte op kaartlabels verwijderd. Portretkader en onderschrift rustiger; overlappend zwevend label verwijderd. FITZ-diagram vervangen door officiële FITZ/Riwis-logo’s met expliciete werkgever/opdrachtcontext. Inline SVG’s rechtstreeks uit https://www.fitz.nl/ en https://www.riwis.nl/ lokaal bewaard; bronnen en gebruikscontext in output/design/brands/sources.json. Oorspronkelijke kleuren behouden. Geen algemene hergebruiklicentie vastgesteld en geen publicatie uitgevoerd.

Controle: homepage en WoonBuddy op desktop bekeken, alle vijf previewpagina’s op 390×844 gecontroleerd zonder horizontale overflow of kapotte geladen beelden. FITZ/Riwis-logo’s laden lokaal. Galerijwissel en bijbehorende juiste lightboxindex, mobiele zoom, Escape gecontroleerd. Portret, kaartafstanden, taakdetail en consistente kopstijl visueel gecontroleerd. JS-syntax/diffcheck geslaagd. Reduced-motionpad en SVG’s statisch gecontroleerd (geen scripts/externe resources); geen echte telefoon of nieuwe productiebuild getest. Screenshot output/design/fase-1-verfijnd-fitz.png. React, routes en deploymentconfiguratie niet gewijzigd; geen commit/push/deployment.

### Projectpagina’s in plaats van projectmodals — 7 oktober 2026

Op verzoek van Luuk de vergelijking met de live WoonBuddy/MindFlow-pagina’s toegepast op fase 1. Homepage 03 is een korte visuele ingang; 04 beschrijft persoonlijke ontwikkeling vanuit de aangeleverde oorspronkelijke tekst (workflowdenken, vooraf de vraag afbakenen, verder kijken dan de demo). Geen herhaalde appkeuzes of dezelfde screenshots in Leren. Vier afzonderlijke previewpagina’s gebruiken een ruime introductie naast een rijk overzicht, zeven hoofdstukken, beeld bij ontwerpkeuzes en gedeelde zoomviewer. De live/rijkere WoonBuddy-, MindFlow- en Personal-overzichten zijn lokaal hergebruikt. Probleem/aanpak niet twee keer uitgelegd; open vragen staan één keer bij Status. Projectmodals en tabs verwijderd. Mission, FITZ en homepage-scrollhoofdstuk behouden.

Bronnen blijven projectStories.ts en de aangeleverde tekst; geen gebruikersonderzoek of functionaliteit erbij verzonnen. De preview heeft zijn eigen media-keuze in project-content.js; React en canonieke app-URL’s niet gewijzigd. Nieuwe bestanden: vier project-HTML’s, project-page.js/css, project-content.js en image-viewer.js; fase-1.html en fase-2.js aangepast.

Validatie: syntax van de drie interactiemodules en diffcheck geslaagd. Vier projectpagina’s op 390×844: zeven hoofdstukken, geen verplichte details, geen ontbrekende ankers of horizontale overflow. WoonBuddy desktop op 1440×900: overzicht geladen, geen kapotte geladen beelden; zoom, Escape/focusherstel, heen/terugnavigatie en vier homepage-projectlinks gecontroleerd. CSS-scrollverplaatsing zichtbaar in DOM; reduced-motion statisch gecontroleerd. Beeld: output/design/fase-1-projectpagina-2026-10-07.png. Eén gedeelde-viewerinitialisatiefout tijdens extractie gecorrigeerd en functie opnieuw gevalideerd. Geen volledige React-lint/build voor uitsluitend previewwijzigingen. Geen commit, push of deployment; alleen lokaal ontwerpvoorbeeld.

## Ontwerpbesluit

### Feedback verwerkt in fase 1 — 7 oktober 2026

Luuk heeft de tekst van de online website en een screenshot van het oorspronkelijke WoonBuddy-overzicht aangeleverd. Bewaard in `docs/WEBSITE_TEKST_REFERENTIE_2026-10-06.txt` en `output/design/referentie-online-woonbuddy.png`. Deze bronnen beschrijven de aangeleverde versie, geen opnieuw geverifieerde live status. De feedback is op 7 oktober op verzoek van Luuk verwerkt in de afzonderlijke fase-1-voorvertoning.

- Het oorspronkelijke overzicht met een hoofdbeeld, drie voorbeelden en zichtbare vergrootknoppen is een bruikbare visuele referentie. De bestaande zelfstandige projectroutes bestaan nog, maar het ontwerpvoorbeeld opent een modal. Het overzichtsbeeld zit daarin als vierde beeld achter Schermen: te verborgen en te klein.
- Geef elk project weer een zichtbare ingang met zijn overzichtsbeeld. Maak duidelijk onderscheid tussen het projectoverzicht en afzonderlijke demoschermen. Hero/FITZ-volgorde, lichtblauwe basis, conceptillustratie en scrollbeweging blijven behouden.
- Het project: korte uitleg bij een herkenbaar overzichtsbeeld en enkele visuele voorbeelden; minder lopende tekst en minder noodzakelijke uitklappers.
- Ontwerp: combineer iedere belangrijke keuze met een echte screenshot of leesbaar detail daarvan en een korte toelichting. De huidige tekstuitklappers zijn onvoldoende visueel.
- Schermen: klik op beeld of zichtbare vergrootknop opent een ruime lightbox met alle beelden, vorige/volgende, Escape, focusherstel en passende initiële schaal. Voeg echte in-/uitzoom en verplaatsen van vergroot beeld toe (ook bruikbaar op mobiel); alleen een grotere container met dezelfde kleine screenshot is onvoldoende.
- Leren & grenzen: koppel concrete leerpunten aan een schermdetail/ontwerpbesluit of een duidelijk als schets aangeduide procesillustratie. Niet ieder privacy- of statuspunt heeft een decoratief plaatje nodig. Geen gefingeerde testresultaten of nieuwe appfuncties tekenen.
- Bruikbare tekst uit de aangeleverde site: specifieke oorsprong van FocusFlow Personal (eigen behoefte tijdens sollicitaties/projecten/persoonlijke ontwikkeling), het ritme weekreview → dagstart → werkmodus → afsluiting, het onderscheid vaste WoonBuddy-stappen versus AI-chat, MindFlow-observaties versus voorlopige hypotheses en de bewindvolgorde signalen → inbox → agenda/planning. Deze concrete passages kunnen de nieuwe presentatie dragen. Algemene slogans en herhaalde abstracte leerzinnen hoeven niet letterlijk terug.
- Oude formuleringen zoals ‘ik testte hoeveel uitleg nodig is’ zijn aangeleverde zelfbeschrijvingen, geen bewijs van afgerond onderzoek met bewoners. Houd het onderscheid tussen eigen uitproberen en externe gebruikersvalidatie zichtbaar.
- Volgende acceptatie: overzicht direct vindbaar; ieder inhoudelijk projecttabblad bevat passend beeld; kernverhaal zonder uitklappen begrijpelijk; screenshots daadwerkelijk leesbaar en zoom/galerij met toetsenbord én mobiel te bedienen. Volledige onderbouwing blijft beschikbaar, zonder opnieuw één lange modal te maken.

Uitgevoerd: alle vier projectoverzichten staan vooraan, met drie vergrootbare schermvoorbeelden. Het project combineert op desktop beeld en korte uitleg naast elkaar; Ontwerp toont drie beeld/keuze-combinaties; Leren heeft daadwerkelijk schermbewijs. Per inhoudelijk tabblad blijft één optionele uitklapper voor de volledige onderbouwing. De gedeelde beeldviewer heeft vorige/volgende, passend maken, zoom van 1× tot 8×, muisslepen, native scroll/touch en toetsenbordbediening. Homepage-leerpunten bevatten eveneens schermbeelden. Lichtblauw, FITZ-volgorde, conceptillustratie en scrollbeweging zijn behouden.

Validatie 7 oktober: JS-syntax en diffcheck geslaagd. Edge op 390 × 844 en 1440 × 900: alle vier vensters gecontroleerd, geen horizontale pagina-overflow; alle inhoudelijke tabs hebben beeld. WoonBuddy-galerij, echte zoom (beeld breder/hoger dan viewport), verplaatsing via toetsenbord, Escape en focusherstel gecontroleerd. FocusFlow Personal toont op desktop het kernoverzicht zonder inhoudsscroll (534px inhoud/534px beschikbaar). Geen browserconsolefouten. Muissleep- en native touchpad statisch gecontroleerd, geen echte telefoon getest. Screenshot: output/design/fase-1-overzicht-2026-10-07.png. De lokale server is herstart buiten de sandbox; sandboxpreview was niet bereikbaar vanuit Edge. Alleen de ontwerpvoorvertoning en documentatie bijgewerkt; React-site, projectroutes en deployment blijven buiten deze ronde. Geen beeldgeneratie, dependencies, commit, push of deployment.

Begin met de persoon en zijn huidige rol. Toon vervolgens motivatie en concreet werk. Na beoordeling door Luuk is de groene/zand/salie-richting vervangen door lichtblauwe achtergronden met donkere tekst en een blauwgroen accent. Luuk bedoelt een Webflow-achtige presentatie met echte scrollinteractie. De conceptillustratie bij missie blijft behouden, nu als apart lokaal SVG-bestand. Geen beeldgeneratiecredits, dependencies, app-URL's of deploymentwijzigingen.

### Herzien ontwerpcheckpoint: lichtblauw en beweging

Eindcontrole op verzoek van Luuk: projectvensters hebben nu vier toegankelijke tabbladen (Het project, Ontwerp, Schermen, Leren & grenzen). De volledige canonieke inhoud blijft beschikbaar; doelgroep, workflow, proces, grenzen en vervolgstappen zijn gericht uitklapbaar. De vier beelden staan in één galerij met pijltjes in plaats van onder elkaar. Titel, tabs en sluitknop blijven staan, alleen de geselecteerde inhoud scrollt. Alle vier vensters gecontroleerd; tabtoetsenbord (pijltjes), beeldwissel, uitklappen, Escape en focusherstel werken. Edge op 390/1440: geen pagina-overflow, mobiele modal past binnen het scherm, geen ontbrekende interne ankers of kapotte geladen beelden. JS-syntax en diffcheck slagen. Reduced motion blijft statisch gecontroleerd; geen volledige functionele tests van de gekoppelde apps of productie-uitrol. Screenshot: `output/design/fase-2-modal-final.png`. Geen commit, push of deployment.

Laatste aanvullingen van Luuk: FITZ staat direct na de introductie (vóór missie en eigen projecten). FocusFlow Personal, MindFlow en FocusFlow Bewind kregen uitgebreidere overzichtskaarten met prototype-uitleg en een concrete ontwerpkeuze. De eerder te korte projectdialogen zijn vervangen door volledige verhalen uit de bestaande canonieke `src/config/projectStories.ts`, direct geïmporteerd via de lokale Vite-preview. Er is dus geen apart ingekorte kopie meer: alle probleem-, doelgroep-, proces-, keuze-, workflow-, ondersteunings-, gegevens-, leer-, implementatie- en statusinhoud blijft beschikbaar. Iedere casus heeft negen inhoudelijke onderdelen, het bestaande overzicht en drie demoschermen. Deze import maakt de voorvertoning afhankelijk van de Vite-server; het HTML-bestand is geen zelfstandig offline exportbestand.

- Referenties: Apple iPad Air daadwerkelijk bekeken in de browser, inclusief galerijpijltjes en scrollgestuurde beeldtransformaties; Linear bekeken voor beeldlagen en compacte schermcomposities. Webflows iPad-selectie en de 3D Tablet Scroll Animation van Jonas Arleth gericht gelezen. Dribbble-selectie geraadpleegd. Godly was via de webtool niet bereikbaar; daarop is geen ontwerpclaim gebaseerd.
- Introductie: portret en begeleidend label bewegen in verschillende richtingen met de scrollpositie; tekst en beeld komen vanuit links/rechts binnen.
- Missie: bestaande conceptillustratie beweegt mee. FITZ: een schematisch werkgebiedbeeld, zonder gefingeerde interne screenshots. Over mij: visuele loopbaanlijn.
- WoonBuddy: compacte galerij van 325px hoog op desktop en 265px op mobiel; drie echte demoschermen met pijltjes en toetsenbordbediening. Andere projecten in een horizontale rij met pijltjes, native swipe en scroll-snap.
- Werkwijze: sticky beeld op desktop met vier doorlopende inhoudsstappen. Scrollpositie stuurt 3D-kanteling, horizontale verplaatsing, schaal en een overgang van Woonstart-overzicht naar taakdetail. Geen scrollhijacking. Op mobiel wordt dit een gewone leesvolgorde met lichtere beweging.
- Alle navigatie en vier volledige projectverhalen blijven binnen het voorbeeld. Projectverhalen openen in een native dialog met Escape/sluiten en focusherstel. Geen doorverwijzingen naar de oude React-site vanuit deze voorvertoning.
- Reduced motion: mediaquery schakelt beweging uit, toont content direct en maakt de sticky uitleg statisch; runtimevoorkeur gelezen via matchMedia. Alleen statisch gecontroleerd, niet in de browser geëmuleerd.
- Validatie: JavaScript-syntaxcontrole en lokale beeldverwijzingen geslaagd. Edge op exacte 390 × 844 en 1440 × 900: geen horizontale pagina-overflow of kapotte geladen beelden; mobiele galerij wisselt aantoonbaar naar Activiteiten (2/3). WoonBuddy- en MindFlow-dialog bekeken; Escape/focusherstel gecontroleerd. Horizontale projectrij verplaatst. Scrollafhankelijke CSS-transformaties op meerdere posities bevestigd. In-app-browser blijft afwijkende viewportmaten geven; exacte maten gecontroleerd in Edge. Geen lint/build herhaald voor ongewijzigde React-broncode.
- Screenshots: `output/design/fase-2-intro.png` en `fase-2-scroll.png`. Dit blijft een ontwerpvoorvertoning; geen commit, push of deployment.
- Aanvullende controle na de contentuitbreiding: volgorde intro → FITZ → missie → projecten → leren → werkwijze → over mij → contact bevestigd. Alle vier dialogen tonen negen inhoudelijke onderdelen; de drie uitgebreide projectdialogen bevatten elk vier beelden. Sluiten/Escape werkt; geen pagina-overflow. JavaScript-syntax en diffcheck opnieuw geslaagd. Screenshot: `fase-2-projectverhaal.png`.

Voor de volledige uitwerking krijgt beeld ook buiten de projecten een functie: een visuele schets van het werkproces bij werkwijze en een compacte loopbaanlijn bij over mij. Voor FITZ heeft een echte, publiceerbare werkfoto de voorkeur zodra die beschikbaar is. Er wordt geen fictieve werkplek of organisatiebeeld als echt gepresenteerd. Leren kan bestaande schermdetails annoteren die de ontwerpkeuze laten zien. Die vervolgvormen worden na het ontwerpcheckpoint uitgewerkt.

Het voorbeeld bevat nu alle homepageonderdelen en compacte projectverhalen. Het is een ontwerpcheckpoint, geen nieuwe productiepagina. De conceptteksten hieronder blijven de inhoudelijke basis; de HTML gebruikt waar passend kortere formuleringen.

## Tekstvoorstel voor de homepage

### 1. Introductie

**Luuk Coolen**

Consultant zorg & IT bij FITZ

Ik werkte als persoonlijk begeleider en bewindvoerder. Nu werk ik aan de IT-kant van de zorg. Daarnaast bouw ik eigen apps, vanuit vragen die ik in mijn werk en dagelijks leven tegenkom.

Acties: **Bekijk mijn projecten** / **Mijn werk bij FITZ**.

### 2. Mijn missie

In begeleiding en bewindvoering zag ik hoeveel uitleg nodig is wanneer informatie en afspraken verspreid staan. Ik wil uitzoeken hoe digitale hulpmiddelen mensen helpen om zelf verder te kunnen, met begeleiding dichtbij.

Dit is een persoonlijke formulering van de bestaande missie. Luuk beoordeelt in het ontwerpcheckpoint of deze motivatie zijn bedoeling goed weergeeft.

### 3. Projecten

#### WoonBuddy — hoofdproject

**Wat moet je regelen als je in een nieuwe kamer gaat wonen?**

Je huurcontract bekijken, de huurbetaling regelen, weten wie je kunt bellen. Met WoonBuddy onderzoek ik hoe bewoners zulke praktische zaken in overzichtelijke stappen kunnen doorlopen.

**Een onderwerp kiezen. Daarna de stappen bekijken.**

In Woonstart groepeer ik taken per onderwerp. Bij ‘Wonen’ zie je bijvoorbeeld wat nog geregeld moet worden en wat al klaar is. De bewoner kan een onderdeel openen voor uitleg en status.

De app ordent de stappen. Wat iemand zelf kan en waar hulp bij nodig is, blijft iets om met begeleiding te bespreken.

Werkend leerprototype met fictieve bewonersgegevens. Nog te onderzoeken met bewoners en begeleiders: zijn de taal en de navigatie begrijpelijk, en welke uitleg is nodig?

Actie: **Lees de keuzes achter WoonBuddy** → bestaande projectpagina.

#### Overige projecten — compacte groep na WoonBuddy

**FocusFlow Personal — kiezen wat vandaag aandacht krijgt**

Een lange takenlijst hielp me niet om richting te kiezen. In FocusFlow Personal verbind ik een dagstart met maximaal drie prioriteiten aan een weekreview. Ideeën die nu niet passen, krijgen een parkeerplek.

Beeld: bestaande Dagstart/Top 3-demo. Status: eigen hulpmiddel in ontwikkeling en gebruik. Actie: projectverhaal.

**MindFlow — een coachgesprek bij één situatie houden**

Ik merkte dat een gesprek snel breed wordt wanneer de app meteen patronen probeert te verklaren. Daarom begint MindFlow bij wat er is gebeurd. AI helpt om vragen te stellen; de gebruiker bepaalt wat wordt opgeslagen en welke vervolgstap past.

Beeld: bestaande verdieping-demo. Status: leerprototype. Actie: projectverhaal.

**FocusFlow Bewind — van binnengekomen signalen naar vervolgacties**

Een werkdag in bewindvoering vraagt om keuzes tussen post, dossiers en afspraken. Met dit prototype maak ik die volgorde zichtbaar: signaleren, prioriteren, voorbereiden en plannen. De professionele afweging blijft bij de bewindvoerder.

Beeld: bestaande cliëntvoorbereiding-demo. Status: afgebakend leerprototype. Actie: projectverhaal.

### 4. Mijn werk bij FITZ

**Leren aan de IT-kant van de zorg**

Sinds september 2026 werk ik als consultant zorg & IT bij FITZ, met een opdracht bij Riwis zorg en welzijn.

Ik ondersteun collega's bij IT-vragen, behandel TOPdesk-meldingen en installeer laptops en telefoons. Ook help ik om applicaties en taken in kaart te brengen en denk ik mee in de projectgroep.

Door mee te lopen met de strategisch adviseur leer ik hoe processen en functioneel beheer samenkomen. Ik wil beter begrijpen wanneer een vraag praktische ondersteuning vraagt en wanneer afstemming over een applicatie of proces nodig is.

Met Copilot-agents verken ik daarnaast een kennisbankartikelgenerator en een sparringspartner voor functioneel beheer. Deze ideeën zijn nog in verkenning; toepassing en resultaten zijn niet bevestigd.

De apps op deze site zijn eigen experimenten, afzonderlijk van mijn opdracht bij Riwis.

Presentatie: open tekst met twee concrete werkgebieden en één bescheiden verkenningsnotitie. Geen drie marketingkaarten. Exacte opleveringen of interne screenshots pas na bevestiging.

### 5. Wat ik leer

**Minder keuzes kan een betere start geven — FocusFlow Personal**

Voor mijn eigen planning bouwde ik eerst aan overzicht. Met de Top 3 maak ik ook een grens: wat krijgt vandaag aandacht en wat parkeer ik? Daardoor ben ik beperken als een ontwerpkeuze gaan zien.

**Een goede vraag hoeft niet meteen een antwoord te worden — MindFlow**

Een overtuigend AI-antwoord kan een gesprek te snel vastzetten. In MindFlow begin ik daarom bij één situatie en gebruik ik AI om vragen te openen. De gebruiker moet zelf kunnen bepalen wat herkenbaar is en wat een passende vervolgstap is.

**Het werkproces moet eerst zichtbaar zijn — FocusFlow Bewind**

Bij het uitwerken van de bewind-demo kijk ik naar de volgorde van signalen, keuzes en acties. Dat helpt me om eerst het proces te begrijpen voordat ik bepaal welk deel digitaal ondersteund kan worden.

Presentatie: drie korte genummerde notities met projectverwijzingen. Geen claims over aangetoonde effecten of gebruikerstests. WoonBuddy blijft het voorbeeld voor werkwijze, zodat dezelfde keuze niet opnieuw wordt uitgelegd.

### 6. Mijn werkwijze

**Van een praktische vraag naar een scherm — WoonBuddy als voorbeeld**

**De vraag:** taken, afspraken en hulpvragen komen op verschillende momenten voorbij. Hoe kan een bewoner terugvinden wat er geregeld moet worden?

**De ontwerpkeuze:** Woonstart groepeert taken in herkenbare onderwerpen. Binnen een onderwerp staan de afzonderlijke onderdelen met hun status.

**Het prototype:** een bewonersdemo met voorbeeldgegevens maakt die route aanklikbaar. Daarmee kan ik de indeling en uitleg bekijken en verder aanpassen.

**De volgende toets:** met bewoners en begeleiders onderzoeken of zij de taal en navigatie begrijpen, welke uitleg ontbreekt en wie informatie mag zien of wijzigen. Deze toets wordt niet als afgerond gepresenteerd.

Presentatie: compacte leesroute met verwijzing naar het eerder getoonde scherm en de volledige casus. Geen tweede grote galerij of generieke stappenkaart met iconen. AI als bouw- of ontwerphulpmiddel alleen benoemen waar de bron daarover concreet is.

### 7. Over mij

**Mijn achtergrond**

Mijn basis ligt in maatschappelijk werk. Als persoonlijk begeleider in de GGZ/LVB werkte ik met mensen die behoefte hadden aan duidelijke stappen en voorspelbaarheid. In bewindvoering hield ik mij bezig met dossiers, geldzaken, afspraken en zorgvuldige afwegingen. Ook ondersteunde ik als vrijwilliger bij thuisadministratie.

Die ervaring neem ik mee in mijn werk en mijn eigen projecten. Op deze site laat ik zien welke vragen ik onderzoek, wat ik bouw en waar ik nog verder in wil leren.

Presentatie: korte tekst en compacte loopbaanregel. Geen tweede portret. Geen herhaling van de huidige rolintroductie.

### 8. Contact

**Contact**

Wil je iets vragen over mijn werk of een van de projecten? Je kunt me mailen of een bericht sturen via LinkedIn.

Acties: **E-mail** / **LinkedIn**, met de bestaande bestemmingen.

## Controle en volgende fase

- Bronnen: Hero, WhyProjects, About, FitzLearning en projectStories.ts. De specifieke taken zijn zichtbaar op het bestaande Woonstart-demoscherm.
- Persoonlijke motivatie en nieuwe formuleringen zijn conceptcopy voor beoordeling door Luuk; geen nieuwe resultaten, onderzoek of ervaringsfeiten toegevoegd.
- Beoordelen: klinkt de tekst als Luuk, klopt de missie, krijgt het echte projectbeeld genoeg ruimte en leest het detail op mobiel?
- Na het ontwerpcheckpoint: gedeelde React-componenten en volledige homepage/projectpagina's uitwerken. Bestaande ankers, routes, branding en appbestemmingen behouden.
- Dit voorstel voegt geen video, AI-beelden, CMS of scrollanimaties toe.
- Validatie: voorbeeld geladen in de bestaande lokale browserpreview; portret en beide screenshotweergaven laden. Smalle weergave gecontroleerd zonder horizontale overflow (de in-app-browser geeft bij de 390px-override een feitelijke DOM-breedte van 275px). Brede compositie visueel bekeken; missieanker gecontroleerd. Twee lokale layoutcorrecties toegepast. `git diff --check` geslaagd. React-code en dependencies zijn ongewijzigd in deze fase, daarom geen lint/build herhaald. Screenshots staan in `output/design/fase-1-desktop.png` en `fase-1-mobile.png`; de screenshotbestandsnamen zijn geen garantie voor exacte apparaatmaten.


## Volledigheidsronde — 7 oktober 2026

Op verzoek zijn vijf punten uit de vergelijking met de oude site verwerkt, binnen de bestaande fase-1-presentatie:

- Overige projecten is een zichtbare menu-ingang. De vier ontwikkelprojecten komen uit src/config/projectLinks.ts. Bestaande bestemmingen blijven gelijk; VibeAudit staat als niet-publieke vermelding zonder openbare app-link.
- De vier projectverhalen tonen nu ook de oorspronkelijke aanpak, implementatiecontext en centrale vervolgvraag. De eerste twee processtappen herhalen aanleiding en knelpunt en zijn daarom niet opnieuw toegevoegd. Andere open vragen blijven gebundeld in het hoofdstuk Status; geen extra uitklaplagen.
- FocusFlow Personal krijgt meer eigen context bij de kaart en aanleiding: sollicitaties, projecten en persoonlijke ontwikkeling. Energie-inzicht is toegevoegd aan de werking, zonder de parkeerplaats opnieuw uit te leggen.
- Over mij benoemt de hbo-opleiding Maatschappelijk Werk en Dienstverlening (MWD). Begeleiding, bewindvoering en vrijwillige thuisadministratie zijn afzonderlijk herkenbaar.
- Privacy is hersteld als zelfstandige previewpagina met links vanuit alle vijf footers. Het leerpunt over afgebakende sprints en vastgelegde keuzes staat terug.

Validatie: JavaScript-syntax en git diff --check; browsercontrole van menu, Escape/focusherstel, mobiel menu (390 px), Personal-inhoud, beelden en terug-/privacynavigatie. Screenshot: output/design/fase-1-volledigheid-menu.png. Geen gewijzigde externe projectbestemmingen; de werking van externe apps is in deze ronde niet opnieuw getest.

Dit rondt de geconstateerde inhoudelijke gaten in het ontwerpvoorstel af. Integratie in React/routes, SEO/sharemetadata en productiepublicatie blijven aparte vervolgstappen. Geen commit, push of deployment.


### Correctie projectmenu
Op verzoek toont Projecten nu direct de vier hoofdprojecten en een link naar Alle projecten. De ontwikkelprojecten (waaronder Bruiloft Gasten) zijn uit de previewnavigatie gehaald; de canonieke projectconfiguratie blijft behouden.


### Pijltjes en contact — gerichte verfijning
Live navigatie visueel vergeleken: Contact is daar een herkenbare gevulde knop. In fase 1 eveneens toegepast, binnen de bestaande blauwe kleuren. Decoratieve pijlen uit interne hoofdlinks verwijderd; projectmenu gebruikt nu een chevron en beeldvergroting een expand-teken. Vorig/volgend in galerijen, scrollrichting en externe links behouden hun functionele iconen. Alleen de preview aangepast.

- Achtergrondvolgorde gecorrigeerd op aanwijzing van Luuk: vrijwillige thuisadministratie vóór bewindvoering. Reveal-animaties spelen momenteel één keer per paginalading; scrollgekoppelde bewegingen blijven in beide richtingen reageren.

- Reveal-animaties op homepage en vier projectpagina’s herhalen nu bij terugkeer in beeld. Reset pas buiten de viewport met 40 px buffer om flikkeren langs de schermrand te voorkomen. Beweging verkleind naar 14–22 px; reduced-motion blijft gerespecteerd.

- Over mij: oorspronkelijke persoonlijke beschrijving en volledige toelichting per werkervaring hersteld. Afzonderlijk Achtergrond-blok met vier onderwerpen teruggezet, inclusief correcte hbo-opleidingsnaam Maatschappelijk Werk en Dienstverlening (MWD). Thuisadministratie blijft vóór bewindvoering.

- Leren: oorspronkelijke titel, twee uitlegparagrafen, vijf leerpunten en slottekst hersteld in de bestaande bewegende vormgeving. Contact: oorspronkelijke uitnodiging teruggezet; LinkedIn- en mailiconen hersteld (Lucide-vormen, ISC-licentie). Alleen preview; geen publicatie.

Validatie van deze inhoudsronde: oorspronkelijke tekst en vijf leerpunten gecontroleerd in de browser; achtergrond en contact op desktop en smalle weergave gecontroleerd. Kleine ondersteunende correctie: Contact houdt ook bij hover witte tekst. Screenshots over-mij-hersteld.png, leren-hersteld.png en contact-hersteld.png. Diffcheck geslaagd. Geen commit, push of deployment.


## Fase 2 — lokaal geïntegreerd (7 oktober 2026)

Het goedgekeurde ontwerp draait nu in React op de homepage en de vier bestaande projectroutes. Oude output/design-links verwijzen door naar deze routes. Laatste gebruikerscorrectie: 04 behoudt de vijf leerpunten met vijf kleine SVG-pictogrammen (geen herhaalde projectbeelden); 05 is teruggezet naar de fase-1-compositie met scrollende Woonstart-uitsnede; 06 krijgt alleen één klein werk/achtergrondpictogram. Projectpagina’s tonen het overzicht één keer en de drie demoschermen één keer bij Schermen; Ontwerp behoudt de keuzes zonder dubbele beelden.

Behouden: missievragen, oorspronkelijke leeruitleg, persoonlijke achtergrond en ervaring, volledige naam Maatschappelijk Werk en Dienstverlening (MWD), thuisadministratie vóór bewindvoering, contactuitnodiging en LinkedIn-icoon. Vier hoofdprojecten in het menu; ontwikkelprojecten verborgen. Zoomviewer, herhaalde subtiele reveals en reduced-motion-instellingen aanwezig. Privacy staat ook als zelfstandige public/privacy.html, zonder hostinginstellingen te wijzigen.

Validatie: baseline en afsluitende lint/build geslaagd; desktop 1440 en mobiel 390, vier projectroutes, ankers, menu, zoom, Escape/focusherstel en geladen beelden gecontroleerd. Na de laatste correctie opnieuw pictogrammen, herstelde werkwijze en unieke projectbeelden gecontroleerd. Sociale deelvoorbeelden voor individuele routes zijn niet bij externe bots getest; metadata wordt in React bijgewerkt. Geen commit, push of deployment.

Gewijzigde code: src/App.tsx, src/main.tsx, index.html, src/components/portfolio/*, src/styles/portfolio.css en project-story.css; lokale logo’s/pictogrammen in public/portfolio en public/privacy.html. Bestaande projectLinks en vercel.json behouden.


### Gerichte beeldcorrectie — 7 oktober 2026

WoonBuddy start op de homepage met het volledige overzicht (contain); pijlen en zoom blijven beschikbaar voor de drie demoschermen. Bij Leren vult één compacte vectorillustratie over onderzoeken/uitwerken/bijstellen de lege rechterkolom, naast de bestaande vijf kleine pictogrammen. Werkwijze en overige hoofdstukken behouden. Bestanden: Chapters.tsx, portfolio.css en public/portfolio/leren-bijstellen.svg. Lint/build en desktopcontrole geslaagd; geen commit, push of deployment.

Vervolg op dezelfde beeldcorrectie: FocusFlow Personal-kaart gebruikt nu Werkmodus. Alleen op de Personal-projectpagina heeft Ontwerp drie nieuwe vector-schema’s (week/dag/terugblik, begrensde prioriteiten, parkeerplaats), en Terugblik drie kleine pictogrammen bij de bestaande leerpunten. Geen herhaalde screenshots toegevoegd. Reveal-duur van 0,65 naar 0,9 seconde; reduced-motion blijft leidend. Lint/build en mobiel 390 gecontroleerd, geen overflow; desktop-schema’s en beeldbronnen gecontroleerd. Screenshot: output/design/personal-ontwerpschemas-final.png.

### Geplande gerichte feedback — uitgevoerd 8 oktober 2026

- Homepagebeelden openen het volledige lokale projectverhaal; projectpagina's behouden hun zoomviewer en overzicht bovenaan. Vier gevulde knoppen 'Lees het projectverhaal' en vier ondergeschikte links 'Snel naar de website' gebruiken de bestaande canonieke configuratie.
- Desktopprojectrij beweegt mee met verticale scroll. Pijlen, toetsenbord, wiel, aanraking of focus nemen de bediening over en stoppen de automatische beweging tot de pagina opnieuw wordt geopend. Mobiel en reduced motion krijgen geen automatische rijbeweging. Vier direct bereikbare projectnamen voorkomen dat een project alleen via de carrousel te vinden is.
- Alleen 01/02/03 krijgen een latere reveal-grens (15% onderrand). Een gedeeltelijk zichtbare basis voorkomt lege hoofdstukken; grote scrollsprongen tonen de actuele inhoud direct. Overige goedgekeurde bewegingen behouden.
- Hero benoemt leerportfolio en mensgerichte zorginnovatie. FITZ beschrijft eerlijk de huidige taken met processen en leren voorop; missie benoemt cliënt en professional. Projectkaarten tonen compact aanleiding, aanpak en AI/workflow-grenzen. Geen nieuwe ervaringsclaims, afbeeldingen, loopbaandata of organisatiebeperkingen verzonnen.
- Gewijzigde bestanden: index.html, PortfolioHome.tsx, Chapters.tsx, usePortfolio.ts, nieuw useProjectRailMotion.ts en portfolio.css, plus deze statusdocumentatie. ProjectLinks, Werkwijze, persoonlijke achtergrond, MWD en deploymentconfiguratie behouden.

Baseline en eindcontrole lint/build geslaagd; git diff --check geslaagd. Edge 1440/390 zonder pagina-overflow; rijbeweging van 131 naar 367 px en stop bij handmatige bediening gecontroleerd. Homepagebeeld opent Personal-verhaal met zeven hoofdstukken, overzicht en werkende zoom tot 150%; mobiele WoonBuddy-beeldlink opent het juiste verhaal. Reduced motion statisch gecontroleerd. Externe bestemmingen zijn gelijk aan projectLinks.ts; bereikbaarheid kon niet bevestigd worden. Lokale browsercontrole gebruikt 127.0.0.1:3002 wegens verbindingsproblemen met de in-app-browser en de bestaande 3000-server. Screenshot: output/design/portfolio-feedback-2026-10-08.png. Geen commit, push, deployment of publicatie. De eenmalige automation wordt na afronding beëindigd.
