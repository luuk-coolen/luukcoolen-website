import { projectLinks } from './projectLinks';

export type ProjectStory = {
  slug: string;
  label: string;
  href: string;
  appHref: string;
  eyebrow: string;
  summary: string;
  problem: string;
  audience: string;
  workflow: string[];
  ai: string;
  implementation: string;
  images: { src: string; alt: string }[];
  screenshotNote?: string;
};

function appHref(label: string) {
  const href = projectLinks.find((project) => project.label === label)?.href;
  if (!href) throw new Error(`Ontbrekende projectlink voor ${label}`);
  return href;
}

export const projectStories: ProjectStory[] = [
  {
    slug: 'focusflow-personal',
    label: 'FocusFlow Personal',
    href: '/projecten/focusflow-personal',
    appHref: appHref('FocusFlow Personal'),
    eyebrow: 'Persoonlijke structuur en zelfsturing',
    summary: 'Een leerprototype voor een rustige, bewuste werkweek: eerst context verzamelen, daarna kiezen wat vandaag aandacht verdient.',
    problem: 'Losse takenlijsten helpen weinig wanneer werk, afspraken, energie en persoonlijke doelen tegelijk om aandacht vragen.',
    audience: 'Voor mensen die hun eigen werkweek willen structureren zonder van hun planning een systeem van steeds meer taken te maken.',
    workflow: ['Dagstart met context uit agenda en taken', 'Kiezen en begrenzen met een Top 3', 'Werkmodus voor focus en parkeren', 'Weekplanning, reflectie en een bewuste afsluiting'],
    ai: 'De kern is een zelfgestuurde workflow. Een eventuele AI-koppeling voor planning wordt niet als vervanging van eigen keuzes gepresenteerd.',
    implementation: 'De actuele app bevat ook historie, account/sync en data/backup. De portfolio toont het als leerprototype, niet als afgeronde productoplossing.',
    images: [],
    screenshotNote: 'De actuele publieke sessie bevat persoonlijke planning. Nieuwe portfoliobeelden volgen pas uit een gecontroleerde fictieve demosessie.',
  },
  {
    slug: 'woonbuddy',
    label: 'WoonBuddy',
    href: '/projecten/woonbuddy',
    appHref: appHref('Woonbuddy'),
    eyebrow: 'Begeleid wonen en dagelijkse structuur',
    summary: 'Een leerprototype dat bewoners helpt met een rustige start, duidelijke taken en begeleiding die aansluit bij het moment.',
    problem: 'Dagelijkse woontaken, afspraken en hulpvragen kunnen versnipperd en onduidelijk zijn voor bewoners én begeleiders.',
    audience: 'Bewoners die baat hebben bij begrijpelijke taakbegeleiding, met begeleiders als ondersteunende gesprekspartner.',
    workflow: ['Start met het overzicht van vandaag', 'Kies een taak of Woonstart-onderdeel', 'Volg vaste stappen op eigen tempo', 'Bespreek voortgang, doelen en praktische context samen'],
    ai: 'Chat en optionele extra uitleg kunnen AI gebruiken. Taken, Woonstart, planning en begeleide stappen zijn vaste workflows en geen AI-advies.',
    implementation: 'De openbare bewonersdemo gebruikt uitsluitend fictieve browserdata; een afgeschermde pilot blijft gescheiden van de demo.',
    images: [
      { src: '/projects/woonbuddy-overview.png', alt: 'WoonBuddy bewonersdashboard met overzicht, taken en begeleiding' },
      { src: '/projects/woonbuddy-taken.png', alt: 'WoonBuddy begeleide taak met stap voor stap hulp' },
      { src: '/projects/woonbuddy-ontwikkeling.png', alt: 'WoonBuddy doelen en ontwikkeling in de fictieve demo' },
    ],
  },
  {
    slug: 'mindflow',
    label: 'MindFlow',
    href: '/projecten/mindflow',
    appHref: appHref('MindFlow'),
    eyebrow: 'AI, reflectie en voorzichtige hypothesen',
    summary: 'Een coaching-first leerprototype waarin een gesprek, reflectie en kleine vervolgexperimenten samenkomen.',
    problem: 'Reflectie wordt onbruikbaar wanneer een systeem te snel conclusies trekt, theorie overneemt of persoonlijke patronen als feiten presenteert.',
    audience: 'Mensen die een concrete situatie willen onderzoeken en een volgende, toetsbare stap willen kiezen.',
    workflow: ['Start vanuit een concrete situatie', 'Voer een korte coachsessie', 'Orden inzichten als hypotheses', 'Kies een klein vervolgexperiment of verdiepende lens'],
    ai: 'Gemini ondersteunt de coachchat en sessieanalyse. Uitkomsten zijn voorstellen en werkhypotheses, geen diagnose, profielwaarheid of vervanging van eigen oordeel.',
    implementation: 'De demo-profielroute gebruikt fictieve voorbeelddata en maakt zichtbaar welke informatie lokaal blijft en welke inhoud tijdelijk via Gemini loopt.',
    images: [
      { src: '/projects/mindflow-dashboard.png', alt: 'MindFlow dashboard met demo-profiel en volgende stap' },
      { src: '/projects/mindflow-active-session.png', alt: 'MindFlow actieve coachsessie met concrete vervolgactie' },
      { src: '/projects/mindflow-kaders.png', alt: 'MindFlow demo-profiel met werkhypotheses en signalen' },
    ],
  },
  {
    slug: 'focusflow-bewind',
    label: 'FocusFlow Bewind',
    href: '/projecten/focusflow-bewind',
    appHref: appHref('FocusFlow Bewind'),
    eyebrow: 'Werkflow en besluitvoorbereiding',
    summary: 'Een leerprototype voor een meer geordende werkdag in bewindvoering, met rust en overzicht als uitgangspunt.',
    problem: 'Versnipperde dossierinformatie, terugkerende stappen en beperkte aandacht maken het lastig om rustig tot een volgende keuze te komen.',
    audience: 'Bewindvoerders die willen onderzoeken hoe workflow en besluitvoorbereiding beter kunnen aansluiten op hun dagelijkse werk.',
    workflow: ['Breng signalen, inbox en agenda samen', 'Weeg urgentie, context en vervolgstap af', 'Kies een haalbare Top 3', 'Verbind dagplanning, weekplanning en reflectie'],
    ai: 'De getoonde prototypeflow is gewone workflowlogica en gebruikerskeuze; de portfolio presenteert dit niet als AI-advies.',
    implementation: 'De demo gebruikt fictieve inhoud en is geen cliëntdossier, financieel systeem of professioneel advies.',
    images: [
      { src: '/projects/focusflow-overview.jpg', alt: 'FocusFlow Bewind overzicht met prioriteiten en reflectie' },
      { src: '/projects/focusflow-stap-4.jpg', alt: 'FocusFlow Bewind actieplan en Top 3' },
      { src: '/projects/focusflow-weekplanning.jpg', alt: 'FocusFlow Bewind weekplanning' },
    ],
  },
];

export function getProjectStory(slug: string) {
  return projectStories.find((story) => story.slug === slug);
}
