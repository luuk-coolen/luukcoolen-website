# Project Instructions

De globale Codex-instructies blijven van toepassing.

## Product

LuukCoolen.nl is een persoonlijke portfolio- en leerportfoliowebsite. De site maakt projecten, denken, experimenten en richting in zorg, bewindvoering, IT en digitalisering zichtbaar. Het is geen commerciële SaaS, consultancy-funnel of bron van waarheid voor afzonderlijke apps.

## Kernprincipes

- Houd de positionering persoonlijk, direct en concreet; geen bureau- of marketingtaal.
- Laat projecten leerproces en bewijs tonen zonder prototypes als afgeronde producten voor te stellen.
- Houd navigatie helder op desktop en mobiel.
- Controleer projectlinks op actuele bestemmingen voordat ze worden gewijzigd.

## Architectuur

- React- en Vite-frontend met statische content en configuratie in de broncode.
- Belangrijke ingangen: `src/App.tsx`, `src/components/` en `src/config/projectLinks.ts`.
- `vercel.json` is aanwezig; verander deploymentinstellingen nooit zonder expliciete opdracht.

## Canonieke bronnen

- `docs/PROJECT_ROADMAP.md` is de enige actieve roadmap en bron voor richting.
- `docs/old-version.md` is historische referentie, geen actuele planning.
- `docs/CURRENT_STATE.md` is de compacte actuele oriëntatie, geen tweede roadmap.

## Projectspecifieke werkregels

- Onderscheid content, presentatie en technische deployment bij elke wijziging.
- Respecteer de bestaande branding, routes en componentstructuur.
- Vermijd niet-gerelateerde ontwerpvernieuwingen bij content- of linkwerk.
- Publiceer, push of deploy niet automatisch.

## Validatie

- Documentatiewijzigingen: statische controle en `git diff --check`.
- App-wijzigingen: `npm run lint` en `npm run build` wanneer relevant.

## Niet automatisch doen

- Geen CMS, blog, projectstatussync of grote visuele rebrand zonder expliciete sprint.
- Geen wijziging aan Vercel-instellingen of projectlinks zonder gerichte controle.

## Contextbudget

Lees na dit bestand `docs/CURRENT_STATE.md`, daarna alleen de relevante roadmapsectie en bronbestanden.
