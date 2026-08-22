# AI-transparantie en portfolio-review

Datum: 22 augustus 2026. Dit is een product- en transparantiereview, geen juridisch oordeel of claim van volledige EU AI Act-compliance. Welke verplichtingen gelden, hangt af van de rol, toepassing, risico en feitelijke inzet.

## Herbruikbaar patroon

- Direct gesprek of vrije AI-hulp: maak duidelijk dat de gebruiker met AI spreekt.
- AI-uitkomst: benoem die als suggestie of werkhypothese en vraag om controle voordat iemand ernaar handelt.
- Gewone softwarelogica: noem vaste stappen, filters, planning en begeleide workflows geen AI.
- Houd menselijk oordeel zichtbaar waar een uitkomst invloed kan hebben op een keuze, begeleiding of reflectie.

## WoonBuddy

- **Praktijkprobleem en gebruikers:** bewoners en begeleiders hebben overzicht en begrijpelijke hulp bij dagelijkse woontaken nodig.
- **AI-rol:** Gemini levert chatantwoorden, alternatieve uitleg in begeleide taken, tekst- en beeldsuggesties bij activiteiten en optionele tekst-naar-spraak. De code gebruikt server-side Gemini-modellen voor tekst en beeld; tekst-naar-spraak gebruikt een afzonderlijk Gemini-model.
- **Niet-AI:** taken, Woonstart, navigatie, huishoudcontext, planning, reminders en rolgebonden workflows zijn reguliere applicatielogica.
- **Transparantiebeeld:** privacycopy legt de Gemini-doorsturing uit; alternatieve taak-uitleg is als door WoonBuddy gegenereerd herkenbaar. De chat en sommige gegenereerde suggesties vragen nog om een korte, consistente labelregel plus controleboodschap.
- **Privacy en implementatie:** alleen fictieve demo-/pilotdata; vrije tekst naar Gemini, retentie en toegestane context blijven organisatorische reviewpunten.
- **Vervolg:** voeg proportionele AI-labels toe bij chat en elke gegenereerde suggestie, zonder vaste taakstappen als AI te framen.

## FocusFlow Bewind

- **Praktijkprobleem en gebruikers:** bewindvoerders helpen bij een rustige, geordende werkdag, prioritering en besluitvoorbereiding.
- **AI-rol:** geen generatieve-AI-provider of -route is aangetroffen in de lokale broncode.
- **Niet-AI:** inbox/agenda-scan, Top 3, cliëntvoorbereiding, weekplanning en reflectie zijn prototype-workflows en gebruikerskeuzes.
- **Privacy en implementatie:** uitsluitend fictieve demo-inhoud; geen cliëntdossier, financieel systeem of professioneel advies.
- **Vervolg:** houd de portfolio- en demo-copy bij vaste workflows weg van AI-taal.

## FocusFlow Personal

- **Praktijkprobleem en gebruikers:** een persoonlijke werkweek ondersteunen met dagstart, Top 3, werkmodus, parkeren en weekreview.
- **AI-rol:** de bronrepository was in deze werkomgeving niet beschikbaar; er is daarom geen uitspraak over provider, model of feitelijk gebruik.
- **Niet-AI:** de publiek beschreven dagstart-, Top 3-, werkmodus- en reviewflow zijn als zelfgestuurde workflow gepresenteerd.
- **Open reviewpunt:** verifieer in de broncode en UI of er ergens AI-output wordt aangeboden; voeg alleen dan de standaard AI-labels en datastroomuitleg toe.

## MindFlow NLP Coach

- **Praktijkprobleem en gebruikers:** een coaching-first reflectieomgeving voor mensen die situaties en patronen voorzichtig willen onderzoeken.
- **AI-rol:** Gemini verzorgt de coachchat en analyse van sessies. De actuele code noemt afzonderlijke standaardmodellen voor chat en analyse, met een analysefallback.
- **Niet-AI:** navigatie, studiegidsinhoud, lokale opslag, exports, oefeningen en expliciet gekozen vervolgstappen zijn geen AI-uitvoer.
- **Transparantiebeeld:** onboarding en Mijn Data leggen uit welke inhoud tijdelijk naar Gemini gaat; profielpunten worden als hypotheses en niet als diagnose of waarheid gepresenteerd.
- **Privacy en implementatie:** persoonlijke reflecties en exportbestanden vragen zorgvuldige omgang; lokale opslag is niet als volledig privé of versleuteld te presenteren. Providerlogging, retentie en livegebruik blijven organisatorische reviewpunten.
- **Vervolg:** controleer of de directe coachinterface zelf altijd dezelfde korte AI-identificatie en controleboodschap toont als onboarding en Mijn Data.

## Portfolio en screenshots

De websitecopy onderscheidt nu AI en gewone workflows per project en maakt verantwoord implementeren zichtbaar in de leersectie. WoonBuddy en MindFlow zijn op 22 augustus 2026 vervangen door actuele screenshots uit hun expliciet fictieve demo's: WoonBuddy toont start, begeleide taak en ontwikkeling; MindFlow toont dashboard, actieve sessie en demo-profiel.

FocusFlow Bewind is inhoudelijk niet opnieuw onderzocht en behoudt zijn bestaande beelden. FocusFlow Personal is inhoudelijk vergeleken met de actuele publieke app, maar de beschikbare sessie bevat persoonlijke planning. Vervang die beelden pas uit een gecontroleerde fictieve demosessie met dagstart, Top 3, werkmodus en weekreview.
