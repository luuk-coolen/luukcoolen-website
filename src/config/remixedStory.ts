import type { ProjectStory } from './projectStories';
import { projectLinks } from './projectLinks';

const app = projectLinks.find(project => project.label === 'FocusFlow Remixed');
if (!app) throw new Error('Ontbrekende projectlink voor FocusFlow Remixed');

export const remixedStory: ProjectStory = {
  slug: 'focusflow-remixed', label: 'FocusFlow Remixed',
  href: '/projecten/focusflow-remixed', appHref: app.href,
  projectKind: 'Eigen webapp', appAction: 'Open de beveiligde app ↗',
  appNotice: 'De app is gepubliceerd op het eigen adres. Hij is voor mijn eigen gebruik en vraagt om aanmelding.',
  origin: 'Remixed is letterlijk een remix van FocusFlow Personal. Personal was op zijn beurt een remix van mijn eerdere Bewind-project: Bewind → Personal → Remixed.',
  eyebrow: 'Dagstart, focus en reflectie',
  summary: 'Een volle takenlijst zegt nog niet wat vandaag aandacht verdient. Met FocusFlow Remixed verbind ik een bewuste dagstart, werken aan een kleine selectie en terugkijken op de dag en week.',
  problem: {
    situation: 'Afspraken, taken en ideeën komen uit verschillende plekken. Tussen het plannen en het uitvoeren raak je gemakkelijk het overzicht kwijt.',
    friction: 'Steeds opnieuw kiezen kost aandacht. Alleen taken verzamelen helpt niet om rustig aan één volgende stap te beginnen.',
  },
  users: {
    description: 'Ik bouw Remixed voor mijn eigen werkritme: overzicht krijgen, bewust kiezen en leren van wat wel en niet lukt.',
    needs: ['Afspraken en taken naast elkaar kunnen bekijken', 'Zelf een haalbare Top 3 kiezen', 'Een concrete eerste stap en ruimte voor terugblik'],
  },
  process: [{ title: 'Aanpak', text: 'Ik werk het dagritme uit in afzonderlijke momenten. Dagstart helpt kiezen; Werkmodus houdt de uitvoering in beeld. Dagafronding en weekreview verbinden ervaringen aan de volgende planning.' }],
  choices: [
    { title: 'Vier stappen om de dag te beginnen', reason: 'Eerst zien wat er speelt, dan richting kiezen, een Top 3 maken en de eerste stap concreet maken.' },
    { title: 'Plannen en uitvoeren uit elkaar houden', reason: 'Werkmodus heeft een eigen plek. Daar blijven de actuele taak en context bereikbaar, zonder steeds de hele dagstart te doorlopen.' },
    { title: 'Terugkijken op basis van eigen gegevens', reason: 'Dagreflecties en weekreview geven ruimte aan mijn eigen uitleg. Berekende inzichten worden onderscheiden van AI-ondersteuning.' },
  ],
  prototype: 'Remixed heeft een vierdelige Dagstart, een afzonderlijke Werkmodus, dagafronding, weekreview, historie en inzichten. Google Agenda en Todoist kunnen bestaande afspraken en taken beschikbaar maken. De portfolioafbeeldingen komen uit de offline demo, waarin deze koppelingen uitstaan.',
  workflow: ['Bekijk je afspraken en taken', 'Kies je richting en maximaal drie prioriteiten', 'Maak de eerste stap concreet en ga naar Werkmodus', 'Rond de dag af en neem je ervaringen mee in de weekreview'],
  support: {
    role: 'AI kan ondersteunen bij samenvatten en reflecteren. De selectie van mijn prioriteiten blijft mijn eigen keuze.',
    workflow: 'Dagstart, Werkmodus, dagafronding en weekreview vormen vaste routes. De inzichten zijn berekend uit de beschikbare FocusFlow-gegevens, zonder AI-analyse.',
    control: 'Ik bepaal zelf wat belangrijk is, welke suggesties passen en wat ik met een reflectie doe. De app neemt die afweging niet over.',
    dataConsiderations: 'Taken, afspraken en reflecties kunnen persoonlijk zijn. Daarom gebruik ik op deze pagina uitsluitend fictieve demodata. De gepubliceerde app vraagt om aanmelding; het portfolio geeft geen toegang tot mijn persoonlijke gegevens.',
    openQuestion: 'Welke ondersteuning helpt mij door te werken zonder het kiezen en terugkijken over te nemen?',
  },
  implementation: {
    intro: 'De app is gepubliceerd. In mijn eigen gebruik wil ik blijven toetsen:',
    questions: ['Helpt de dagstart om haalbaar te kiezen?', 'Blijft Werkmodus rustig bij een volle takenlijst?', 'Welke terugblik helpt om de volgende dag anders aan te pakken?'],
  },
  learning: ['Een samenhangend dagritme ontwerpen in plaats van losse functies toevoegen', 'Een visueel werkende app onderscheiden van een gecontroleerde productieomgeving', 'Eigen afwegingen, berekende inzichten en AI-ondersteuning herkenbaar scheiden'],
  status: {
    current: 'Gepubliceerd als eigen webapp op focusflow.luukcoolen.nl, met beveiligde toegang.',
    works: 'Dagstart, Werkmodus, terugblik en weekreview zijn onderdeel van het huidige project. De ontwikkeling bouwt voort op Bewind en Personal.',
    prototype: 'In dagelijks gebruik blijven toetsen wat helpt en wat onnodige stappen toevoegt.',
    question: 'Blijft de app rustig en bruikbaar wanneer ik hem dagelijks gebruik?',
  },
  media: {
    overview: { src: '/projects/remixed/werkmodus.jpg', alt: 'FocusFlow Remixed Werkmodus met fictieve taken en dagcontext' },
    examples: [
      { src: '/projects/remixed/dagstart.jpg', alt: 'Dagstart met voorbeeldafspraken en een bewuste selectie van taken' },
      { src: '/projects/remixed/weekreview.jpg', alt: 'Weekreview met fictieve dagreflecties en feiten uit de week' },
      { src: '/projects/remixed/inzichten.jpg', alt: 'Berekende inzichten met expliciete datadekking in de offline demo' },
    ],
  },
  screenshotNote: 'Offline UX-demo met fictieve gegevens, vastgelegd op 21 oktober 2026. Koppelingen en import staan uit. De lokale vormgeving kan afwijken van de gepubliceerde versie.',
};
