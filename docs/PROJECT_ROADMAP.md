# LuukCoolen.nl Roadmap & Project Source of Truth

## Active roadmap rule

22 October domain checkpoint: user explicitly authorized the short address for published Remixed. focusflow.luukcoolen.nl now belongs to focusflow-remixed-preview and aliases its READY Production dpl_5BE3tVyAY18GRpqDcVaBGth4xznf; Bewind remains on focusflow-bewind.luukcoolen.nl (HTTPS 200). Vercel SSO all unchanged, so anonymous Remixed root redirects to Vercel login. Portfolio content now states the user-confirmed literal remix lineage Bewind → Personal → Remixed. Older Preview-only blockers below are historical; Remixed production was prepared by the separate app task.

## Voorstel: FocusFlow Remixed prominenter tonen — 22 oktober 2026

Doel: de huidige eigen webapp zichtbaar als hoofdproject presenteren en de drie FocusFlow-generaties als leerproces uitleggen. Dit is een voorstel; de grotere homepagecompositie is nog niet uitgevoerd.

1. **Remixed als eerste groot projectblok.** Titel, één concrete zin over dagstart/focus/reflectie en een groot, goed uitgesneden Werkmodus-overzicht. Primaire knop Lees het projectverhaal, secundair Open de app met korte uitleg dat toegang aanmelding vraagt. WoonBuddy behouden als tweede uitgebreid projectblok; MindFlow en de oudere FocusFlow-projecten daarna. Huidige persoonlijke hero, lichtblauwe stijl, animatietiming en Werkwijze behouden.
2. **Een compacte ontwikkellijn met drie gekoppelde stappen.** Bewind: vroeg leerproject uit de praktijk van bewindvoering, gestart in AI Studio en later overgebracht naar Codex. Personal: letterlijke remix van Bewind voor eigen planning. Remixed: letterlijke remix van Personal en huidige gepubliceerde versie. Elk onderdeel verwijst naar het eigen projectverhaal; geen onbevestigde startmaanden of claim dat voorgangers automatisch zijn uitgefaseerd. Deze feitelijke lijn staat alvast in de bestaande projectteksten, een nieuwe visuele tijdlijn nog niet.
3. **Projectverhaal actualiseren met gericht bewijs.** Houd de eigen Remixed-pagina; kies per hoofdstuk één passend, uniek beeld van de geaccepteerde versie met fictieve gegevens. Kort tonen wat is behouden, veranderd en geleerd ten opzichte van Personal. Alleen de hoofdstukken die dat nodig hebben extra beeld geven. Bestaande zoom en rustige herhaalanimaties behouden; geen nieuwe carrousel, rebrand of lange herhaalde featurelijsten.

Acceptatie voor deze latere vormgeving: Remixed zonder horizontaal zoeken te vinden, WoonBuddy zichtbaar behouden, alle vijf verhalen bereikbaar op desktop en mobiel, de drie generaties begrijpelijk, screenshots leesbaar/inzoombaar en de appknop eerlijk over de beschermde toegang. Eerst deze compositie laten beoordelen; geen wijziging aan Remixed-auth, IAM of gegevensopslag binnen deze portfoliosprint.

21 October Remixed checkpoint: fifth portfolio story and demo images prepared locally, Bewind labelled early work and its new HTTPS domain verified. Production switch remains open: live owner acceptance incomplete and existing backend/OIDC intentionally Preview-only. See CURRENT_STATE.md and REMIXED_PRODUCTION_CHECK_2026-10-21.md; no production, IAM, SSO or old-domain change, no push/deploy.

8 October production checkpoint: explicitly approved portfolio published at https://luukcoolen.nl/ (Vercel READY dpl_ChtLUwVc6fPWXHrS8yhXBpnL58xq). Contact no longer waits for a reveal threshold at the page bottom. Live desktop/mobile Contact and four project routes verified; lint/build passed. Direct source snapshot, no commit/push or deployment-setting changes. Earlier local-only checkpoints below are historical. See CURRENT_STATE.md.

8 October motion checkpoint: downward reveals now start at 55% viewport height on homepage and stories, with hero immediate and the approved earlier upward entrances retained. Durations and scroll-driven rail/process unchanged. Targeted large-screen/mobile checks and lint/build passed; no publication. See CURRENT_STATE.md.

8 October content checkpoint: four stories restore labelled situation/friction/approach, learning questions and fixed-workflow distinctions. Ending groups limits/follow-up before reflection/status and offers app/back/next-story links. Personal labels and design captions clarified; homepage repetition shortened and external Google Fonts import removed in favour of existing system typography. Approved navigation, scroll rail and motion retained. No commit/push/deployment. See CURRENT_STATE.md.

8 October visual-story refinement: all four stories now have project-specific design diagrams, pictograms and visual learning/status layouts. Reveal motion runs per part rather than per whole chapter, repeats on return, and now uses content-specific timing after the latest user correction: copy without a pause, calmer images, paired design visuals/copy and later rail travel. The earlier global 0.5-second delay is superseded. Unique screenshot placement/zoom and content retained. Lint/build plus four desktop/mobile routes and replay/zoom checked; reduced motion checked statically. No commit/push/deployment. See CURRENT_STATE.md.

8 October follow-up: restored the collapsed development-project group below the four main stories in the project dropdown, matching live destinations and adding the user-supplied Midstar URL. Focused mobile/desktop and keyboard checks passed, lint/build passed. No push/deployment. Feedback exceptions and remaining visual balance are recorded in CURRENT_STATE.md.

Latest local checkpoint (8 October 2026): scheduled focused portfolio feedback completed. Homepage images open full local stories; four stronger story/app actions and a direct project index accompany the desktop scroll-linked rail. Manual control takes precedence. Early chapter reveals trigger later; copy clarifies learning, care innovation, project choices and AI boundaries. Approved styling, chapter 05, background and screenshots preserved. Lint/build and focused desktop/mobile checks passed; reduced motion checked statically. External app availability unconfirmed; canonical links unchanged. No commit, push or deployment. Details in CURRENT_STATE.md and ONTWERP_FASE_1.md.

This file is the only active roadmap source of truth for LuukCoolen.nl.

Active path: `docs/PROJECT_ROADMAP.md`.

Older roadmap/planning notes must be archived under `docs/archive/roadmaps/` and this file must keep its stable path.

## Project purpose

LuukCoolen.nl is a personal portfolio and learning portfolio website for showing projects, thinking, experiments, and direction at the intersection of care, IT, and digitalization. From September 2026, Luuk works as a consultant care & IT at FITZ; care, guidance, and bewindvoering are presented as relevant practice experience and project context.

It solves the problem of making project work, learning progress, and product thinking visible in one clear place.

It is explicitly not a commercial SaaS product, not a heavy consultancy sales site, and not the production source of truth for each individual app.

## Product principles

- The site should make Luuk's direction clear quickly: consultant care & IT at FITZ, grounded in care practice and digital product thinking.
- Projects should be concrete proof, not vague portfolio filler.
- Navigation should stay simple on desktop and mobile.
- Copy should be personal, direct, and not over-polished into agency language.
- Project links should go to the right current subdomains and avoid stale destinations.
- The portfolio should show learning and iteration, not pretend every prototype is a finished product.

## Architecture snapshot

- Frontend: React + Vite app.
- Backend/API: none found in repo evidence.
- Storage/data: static content and configuration in source files.
- Important files/folders: `src/App.tsx`, `src/config/projectLinks.ts`, `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/Approach.tsx`, `src/components/Experiments.tsx`, `src/components/WhyProjects.tsx`, `src/components/Lessons.tsx`, `src/components/Contact.tsx`, `src/components/Privacy.tsx`, `docs/old-version.md`.
- Deployment assumptions: `vercel.json` is present; likely Vercel deployment. User noted Vercel account/project context moved from `reiki-mindset` to `vercel.com/luuk-coolen`.

## Current state

Fase 2 is lokaal uitgevoerd op 7 oktober 2026: het goedgekeurde concept is geïntegreerd in React en de vier projectroutes. 04 gebruikt vijf kleine pictogrammen, 05 behoudt de eerdere scrollcompositie, 06 heeft één klein pictogram. Dubbele demoschermen zijn uit Ontwerp verwijderd; elk beeld staat eenmaal in Schermen. Lint/build en desktop/mobiele controles geslaagd. Geen commit, push of deployment. Details en grenzen: docs/ONTWERP_FASE_1.md. Oudere previewcheckpoints hieronder zijn historische notities.

The site appears to be a working portfolio with a hero, positioning, project menu, experiments/case studies, learning section, privacy modal, and direct project links.

Recent history shows a shift toward care innovation positioning, project grouping, mobile navigation, direct subdomain links, and FocusFlow Personal case-study content.

## Completed sprint/history

Known completed work from git history and code inspection:

- Added direct project subdomain links.
- Grouped project menu links.
- Added learning section and collapsible demos.
- Repositioned portfolio around care innovation.
- Added FocusFlow Personal case study and screenshots.
- Tightened portfolio copy and navigation.
- Added mobile section navigation.
- Added a shared project-story route for FocusFlow Bewind, WoonBuddy, MindFlow and FocusFlow Personal. The portfolio cards open those stories first, while the Projecten menu keeps linking directly to the apps.
- Centralized the app targets in `src/config/projectLinks.ts`; `src/config/projectStories.ts` resolves its app CTA from that source.
- Expanded the shared project-story data and layout into a practice- and implementation-case structure: context, users, current-to-desired process, choices, prototype evidence, AI boundaries, open implementation questions, learning and current status. The pages keep their direct app CTA and make no claims about validated pilots, outcomes or compliance that are not documented.
- Edited the four shared project stories into shorter, first-person portfolio copy. Technical audit wording and repetitive prototype disclaimers were removed; AI context remains only on WoonBuddy and MindFlow where it is part of the case.
- Refreshed the WoonBuddy and MindFlow portfolio screenshots from fictional demos and documented the AI boundaries in `docs/AI_TRANSPARENCY_REVIEW.md`.
- Replaced the older FocusFlow Personal portfolio visuals with controlled fictitious-demo images for Werkmodus, Dagstart/Top 3 and Weekreview; the original files remain available as reference. A five-screen mobile workflow strip should only be added from real mobile captures with fictitious content.
- Aligned the public homepage positioning with Luuk's current role: consultant zorg & IT at FITZ from September 2026. References to care, guidance, and bewindvoering remain as practice experience and case context; individual project stories and routes were not changed.
- Completed L1 project-link verification on 2 October 2026: checked all eight configured menu URLs and the portfolio homepage, redirect chains and app entry JavaScript. FocusFlow Personal and Eerste Stap redirect successfully; VibeAudit requires Google sign-in. Existing links and prototype classifications were retained. Evidence and functional-validation limits: `docs/PROJECT_LINK_REVIEW.md`.

No active roadmap was found before this file. `docs/old-version.md` remains a historical content/reference file, not an active roadmap.

## Current active / open sprint

Pending feedback, implementation explicitly deferred by the user: restore visible project overviews and enlarge/zoom controls; reduce required disclosures and text in the preview modals; add meaningful screenshots/details to project, design and learning content. Preserve full evidence without reverting to one long modal. Supplied online copy and screenshot saved as references; concrete criteria in `docs/ONTWERP_FASE_1.md`. Do not implement until the user resumes this work.

Final checkpoint review completed at the user's request: complete case content grouped into four accessible modal tabs, expandable details and one arrow-controlled image gallery. Header, tabs and close control remain visible. All four cases plus keyboard/tabs, gallery, disclosures and Escape/focus restoration checked; exact 390/1440 Edge checks show no page overflow, missing anchors or broken loaded images. JS syntax/diffcheck passed. Current preview and validation details are in `docs/ONTWERP_FASE_1.md`. No production React integration, commit, push or deployment.

Checkpoint feedback: FITZ moved immediately after the introduction. Three secondary project overview cards expanded; all four preview dialogs now render full canonical `projectStories.ts` content instead of short summaries (nine content chapters and four images per story). Browser checks confirm section order and full dialogs. The independent example uses a Vite source import; standalone offline export is not provided. Production React integration remains pending the design checkpoint.

Design checkpoint revision (6 October 2026): user prefers the earlier light-blue background, accepts the mission illustration, and explicitly requests Webflow-like scroll interactions. The independent example now includes all homepage sections and four in-preview project dialogs, smaller WoonBuddy imagery, arrow-controlled galleries, directional entrances/parallax and a sticky scroll-driven 3D process chapter. Internal preview links no longer return to the old React website. Validation and references are recorded in `docs/ONTWERP_FASE_1.md`. This supersedes the deep-green/sand/sage palette below; production React integration remains after the design checkpoint. No new dependencies, generated imagery, commit, push or deployment.

Design revision after D3 — user selected a rewrite of the story and image direction, retaining mission, learning and approach. Phase 1 delivers an independent HTML example (intro, mission, WoonBuddy) and full homepage draft copy in `docs/ONTWERP_FASE_1.md`. The user's additional preference for imagery beyond projects and non-white backgrounds is incorporated with deep green, sand and sage sections plus a locally drawn mission illustration. Review this concrete example before applying the direction to the full homepage and shared project pages. Existing React pages, routes, links and deployment remain unchanged in this phase. No generated assets, commit, push or deployment.

D3 — Visual portfolio refresh (6 October 2026): budget-conscious first version implemented across the homepage and all four project pages. Larger existing imagery, Inter headings, shorter homepage copy, a dark mission chapter and a shared reduced-motion-aware Reveal component. FITZ contribution details remain expandable; project evidence, support boundaries and open questions remain on the project pages. No new dependencies, generated imagery, video integration, scroll-pinned chapter, app URL changes or deployment changes. AI illustrations and advanced scrolling remain deferred candidates rather than required follow-ups.

D3 validation: baseline/final lint, build and diffcheck passed. All four project routes checked at 390/1440 pixels for overflow and loaded overview images; homepage checked on mobile/tablet/desktop, with menu, expandable details and keyboard lightbox/focus restoration. Reduced motion reviewed statically; no Lighthouse benchmark. Browser preview required an unsandboxed local server on port 3002; Edge used for reliable viewport dimensions. Existing uncommitted work retained; no commit, push or deployment.

D1 is complete. Part 1 unified the four project pages and galleries. Part 2 added four 2400 × 1600 overview compositions from the existing demo screenshots, generated with one shared template and exported as PNG and lossless WebP. Homepage, project pages and lightbox share the new WebP overviews. Original screenshots, routes, app URLs and deployment settings are preserved.

Next candidates: keep portfolio proof current and confirm intended canonical URLs and project classifications with the owner. L1 verified HTTP reachability; functional app validation requires a targeted scope. Reachability alone does not justify changing a prototype into an active or finished product.

D2 — FITZ/Riwis learning portfolio: homepage now places work and learning at FITZ directly after the introduction. Three areas describe contributions to the application landscape/project group, practical IT support and automation exploration. Own apps remain separate experiments. An internal application-landscape case and 60–90 second video storyboard/script are prepared in `docs/FITZ_RIWIS_CASE_VIDEO_CONCEPT.md`; the site does not expose this document or a video. Exact deliverable, status, actual learning outcomes and permission to publish remain review checkpoints. No CV, route, app URL or deployment changes.

D2 validation (4 October 2026): lint/build/diffcheck passed; homepage and four project routes passed image/lightbox/keyboard/focus/overflow checks at 390 and 1440 pixels. All four overview images also loaded in the user's in-app preview on port 3001 after restarting the stopped server. No asset repair was necessary. Video recording and publication remain later work after content review.

D2 video follow-up: a local 80-second silent portrait montage is exported to `output/video/luuk-fitz-riwis-concept.mp4`, using Luuk's existing photo and five text scenes. Editable generator and poster are included; no simulated speech or acting. Website placement, voice-over and publication remain pending review. No push or deployment.

D2 cinematic assembly (4 October 2026): six user-generated Flow clips assembled into two local 48-second edits, with explicitly authorized Dutch Microsoft narration, original music and source ambience. A follows the six-scene order; B changes the opening/ending and score using the same footage. Native 1280 × 720 at 24 fps; sources retained. Script: `scripts/assemble-portfolio-films.py`. Exports and subtitle sidecars: `output/video/cinematic/`. No further Flow generation, purchases, website integration, push or deployment. Technical decode/audio checks and sampled frames are validated; subjective playback review remains with the user.

D2 video revision (6 October 2026): narration-led FITZ profile (79.50 s) and separately narrated trailer (32.58 s), with six real demo inserts from WoonBuddy, FocusFlow Personal and MindFlow. Pronunciation corrected by sending FITZ as fits to TTS; visible spelling remains FITZ. Existing Flow footage retained; invented laptop UI cropped away. Abstract landscape illustration does not expose internal data. Inspired by Kevin MacLeod replaces guide scores, with CC BY 4.0 credits and narration ducking. Exports, timelines, subtitle sidecars and validation evidence: `output/video/cinematic/v2/`; generator: `scripts/revise-portfolio-films.py`. Full technical decode, voice alignment, subtitles and sampled visuals verified; direct listening unavailable. Fine UI text requires a sufficiently large player. No further generations, purchases, website integration, commit, push or deployment.

Suggested numbering if none exists yet: use `D` for positioning/design/content sprints, `L` for link/deployment cleanup, and `DR` for demo review/polish.

## Parking lot

- Confirm current canonical URLs for MindFlow, WoonBuddy, FocusFlow Bewind, Sollicitatie-assistent, and LuukCoolen.nl.
- Add or update screenshots only after each project reaches a stable visual state.
- Clarify whether FocusFlow Personal stays visible before it is migrated into Codex.
- Keep privacy/legal text aligned with what each project actually does.
- Review mobile navigation after every major content addition.

## Later / not now

- Heavy consultancy branding or sales funnel.
- Blog/CMS system before project proof is stable.
- Automated project-status sync from GitHub/Vercel.
- Large visual rebrand unless positioning changes materially.

## Technical rules for Codex

- Read this roadmap first before changing LuukCoolen.nl.
- Keep portfolio edits consistent with the existing component structure.
- Do not push, deploy, or change Vercel settings unless the user explicitly asks.
- Verify `src/config/projectLinks.ts` before changing project links.
- For app changes, run `npm run lint` and `npm run build` if available.
- Avoid unrelated design rewrites while making content or link updates.
- Update this roadmap after every completed sprint.

## Roadmap update rule

After every sprint:

1. update this roadmap
2. mark completed/open/parked items
3. add changed files
4. add new known issues
5. state next recommended sprint
