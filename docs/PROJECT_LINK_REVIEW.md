# Projectlinkcontrole — L1

Controledatum: 2 oktober 2026.

## Doel en bron

Deze sprint controleert of de bestaande projectingangen naar een herkenbare app of een verklaarbare toegangspoort leiden. `src/config/projectLinks.ts` blijft de bron voor de acht menu-URL's. De vier projectverhalen hergebruiken die configuratie. Er zijn geen URL's, routes, beelden, projectstatussen of deploymentinstellingen gewijzigd.

## Resultaten

Alle onderstaande appbestemmingen gaven HTTP 200 en een herkenbare HTML-titel. Bij de acht apppagina's, inclusief de portfoliohomepage en exclusief de Google-inlogpagina, gaf ook het hoofd-JavaScriptbestand HTTP 200 met een JavaScript-contenttype.

| Project | Bestaande ingang | Waargenomen bestemming | Toegang en bewijs |
| --- | --- | --- | --- |
| FocusFlow Bewind | https://focusflow.luukcoolen.nl/ | Zelfde URL | HTTP 200; titel `focusflow bewind`; hoofd-JavaScript bereikbaar. |
| WoonBuddy | https://woonbuddy.luukcoolen.nl/ | Zelfde URL | HTTP 200; titel `WoonBuddy`; hoofd-JavaScript bereikbaar. |
| MindFlow | https://mindflow.luukcoolen.nl/ | Zelfde URL | HTTP 200; titel `MindFlow NLP Coach`; hoofd-JavaScript bereikbaar. |
| FocusFlow Personal | https://focusflow-personal.luukcoolen.nl/ | https://focusflow-personal.ai.studio/ | HTTP 307 naar HTTP 200; titel `FocusFlow Personal`; hoofd-JavaScript bereikbaar. |
| FitFlow | https://fitflow-tracker-759367249229.europe-west2.run.app | Zelfde host, met afsluitende slash | HTTP 200; titel `FitFlow Tracker`; hoofd-JavaScript bereikbaar. |
| VibeAudit | https://ai.studio/apps/5ae532db-f9a9-4c28-a16c-0362ddfe2344 | Via `aistudio.google.com/apps/5ae532db-f9a9-4c28-a16c-0362ddfe2344` naar Google Accounts | HTTP 301, 302, 302 en vervolgens HTTP 200 op de inlogpagina. De app is niet anoniem te beoordelen. De menutekst `Nog niet publiek` past hierbij. |
| Eerste Stap | https://luukcoolen.nl/eerstestap | https://eerste-stap-804362620068.europe-west2.run.app/ | HTTP 307 naar HTTP 200; titel `Eerste Stap`; hoofd-JavaScript bereikbaar. |
| Bruiloft Gasten | https://bruiloft-gasten-app-759367249229.us-west1.run.app | Zelfde host, met afsluitende slash | HTTP 200; herkenbare bruiloftstitel; hoofd-JavaScript bereikbaar. |
| Portfoliohomepage | https://luukcoolen.nl/ | Zelfde URL | HTTP 200; titel `Luuk Coolen \| Leerportfolio zorginnovatie`; hoofd-JavaScript bereikbaar. |

## Besluit

- Behoud alle bestaande ingangen. De twee HTTP 307-redirects zijn bruikbaar; een andere eindhost is op zichzelf geen reden om de persoonlijke portfolio-URL te vervangen.
- Behoud de bestaande presentatie van de vier portfolio-apps als leerprototype. Bereikbaarheid bewijst geen afgerond product, pilot, actief onderhoud of bruikbaarheid voor anderen.
- Behoud de bestaande categorie `In ontwikkeling`. Voor VibeAudit is de inlogvereiste vastgesteld; toegang na inloggen is niet gecontroleerd.
- Er is geen linkcorrectie nodig op basis van deze controle. Een redirect bewijst niet welke URL de eigenaar blijvend als canoniek wil gebruiken; die productbeslissing blijft open.

## Validatie en grenzen

- `npm.cmd run lint`, `npm.cmd run build` en `git diff --check` slaagden vóór deze documentatiewijzigingen.
- Gerichte broncontrole: acht menu-URL's, vier projectverhalen, juiste `/projecten/:slug`-verwijzingen en bestaande lokale afbeeldingen in `projectStories.ts` en `Experiments.tsx`; geen afwijkingen gevonden.
- Externe controle gebruikte alleen openbare HTTP GET-verzoeken, redirectketens, HTML-titels en hoofd-JavaScriptbestanden. Er is niet ingelogd en er zijn geen gegevens ingevoerd of gewijzigd.
- Dit is geen browser- of functionele apptest: JavaScriptuitvoering, API's, accounts en inhoudelijke werking zijn niet gevalideerd. Ook de momenteel gedeployde portfolio is niet gelijkgesteld aan de lokale werkboom.
- De webtool kon de vier portfolio-subdomeinen niet openen. De netwerksandbox gaf bij de HTTP-controle `ENOTFOUND`; dezelfde controle buiten de sandbox slaagde. Dat was een omgevingsbeperking, geen bewijs van defecte projectlinks.

## Vervolg

Alleen gerichte vervolgstappen: bevestiging van gewenste canonieke URL's en projectstatus door de eigenaar, of functionele demo-validatie wanneer daar een concrete opdracht voor is. De mobiele FocusFlow Personal-workflowstrip blijft afhankelijk van echte captures met fictieve content.
