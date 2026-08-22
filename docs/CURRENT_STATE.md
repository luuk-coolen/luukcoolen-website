# Current State

## Product in één alinea

LuukCoolen.nl is een persoonlijke portfolio- en leerportfoliowebsite rond projecten, experimenten en ontwikkeling in zorg, bewindvoering, IT en digitalisering. De site presenteert projectbewijs en leerproces; zij is geen commerciële SaaS of productbron voor de gekoppelde apps.

## Huidige technische status

- React + Vite-frontend met statische content en configuratie in de repository.
- Belangrijke onderdelen zijn `src/App.tsx`, `src/components/` en `src/config/projectLinks.ts`.
- `vercel.json` is aanwezig. De daadwerkelijke deploymentstatus is niet betrouwbaar vastgesteld.

## Recent afgerond

- Recente Git-geschiedenis vermeldt mobiele sectienavigatie, aangescherpte portfolio-copy en navigatie, een FocusFlow Personal-casestudy en verwijdering van een GitHub-projectlink.
- De actieve roadmap beschrijft eerdere positionering richting zorginnovatie, projectgroepering en directe projectlinks.
- Portfolioverhaal, projectlinks en appingangen zijn opnieuw gecontroleerd voor FocusFlow Personal, WoonBuddy en MindFlow.
- Projectkaarten leiden nu naar een gedeelde, compacte projectlandingspagina (`/projecten/:slug`); het menu **Projecten** blijft voor directe appnavigatie.
- `src/config/projectStories.ts` hergebruikt de canonieke URL's uit `src/config/projectLinks.ts`, zodat app-URL's niet per landingspagina worden gedupliceerd.
- WoonBuddy, MindFlow en FocusFlow Personal gebruiken recente privacyveilige demoscreenshots. De FocusFlow Personal-set bevat Werkmodus, Dagstart/Top 3 en Weekreview; een losse mobiele workflowstrip volgt alleen uit echte mobiele captures.

## Actuele beslissingen

- `docs/PROJECT_ROADMAP.md` blijft de enige actieve roadmap.
- `docs/old-version.md` blijft historische contentreferentie.
- Content moet persoonlijk en concreet blijven; prototypes worden niet als voltooide producten gepresenteerd.

## Open punten

- Voeg voor FocusFlow Personal vijf echte mobiele captures met fictieve content samen tot de geplande workflowstrip. Actuele persoonlijke planning is niet geschikt voor publicatie.
- Bevestig actuele canonieke URL's en de zichtbaarheid/status van gekoppelde projecten.
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
- Duurzame werkregels: `AGENTS.md`.

Deze status vat vastgestelde repositoryinformatie samen en maakt geen nieuwe roadmapbeslissingen.
