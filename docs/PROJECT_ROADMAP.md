# LuukCoolen.nl Roadmap & Project Source of Truth

## Active roadmap rule

This file is the only active roadmap source of truth for LuukCoolen.nl.

Active path: `docs/PROJECT_ROADMAP.md`.

Older roadmap/planning notes must be archived under `docs/archive/roadmaps/` and this file must keep its stable path.

## Project purpose

LuukCoolen.nl is a personal portfolio and learning portfolio website for showing projects, thinking, experiments, and direction toward care, bewindvoering, IT, and digitalization.

It solves the problem of making project work, learning progress, and product thinking visible in one clear place.

It is explicitly not a commercial SaaS product, not a heavy consultancy sales site, and not the production source of truth for each individual app.

## Product principles

- The site should make Luuk's direction clear quickly: care practice plus digital product thinking.
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
- Refreshed the WoonBuddy and MindFlow portfolio screenshots from fictional demos and documented the AI boundaries in `docs/AI_TRANSPARENCY_REVIEW.md`.
- Replaced the older FocusFlow Personal portfolio visuals with controlled fictitious-demo images for Werkmodus, Dagstart/Top 3 and Weekreview; the original files remain available as reference. A five-screen mobile workflow strip should only be added from real mobile captures with fictitious content.

No active roadmap was found before this file. `docs/old-version.md` remains a historical content/reference file, not an active roadmap.

## Current active / open sprint

Unclear / needs user confirmation.

Most likely next sprint: keep portfolio proof current after Codex project migration, verify all project links/subdomains, and decide which projects should be presented as active, prototype, archived, or learning-only.

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
