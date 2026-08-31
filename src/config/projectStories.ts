import { projectLinks } from './projectLinks';

type ProcessStep = { title: string; text: string };
type Choice = { title: string; reason: string };
type AiStory = { actual: string; nonAi: string; distinction: string; privacy: string; openPoint: string };

export type ProjectStory = {
  slug: string;
  label: string;
  href: string;
  appHref: string;
  eyebrow: string;
  summary: string;
  problem: { situation: string; friction: string };
  users: { description: string; needs: string[] };
  process?: ProcessStep[];
  choices: Choice[];
  prototype: string;
  workflow: string[];
  ai?: AiStory;
  implementation: { intro: string; questions: string[] };
  learning: string[];
  status: { current: string; works: string; prototype: string; question: string };
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
    slug: 'focusflow-personal', label: 'FocusFlow Personal', href: '/projecten/focusflow-personal', appHref: appHref('FocusFlow Personal'), eyebrow: 'Persoonlijke structuur en zelfsturing',
    summary: 'Ik bouwde FocusFlow vanuit een herkenbaar probleem: een volle takenlijst geeft nog geen richting. De app helpt mij eerst kiezen, dan uitvoeren en pas daarna weer vooruitkijken.',
    problem: {
      situation: 'Werk, afspraken, persoonlijke doelen en ideeën vragen soms allemaal tegelijk om aandacht.',
      friction: 'Een takenlijst verzamelt dan vooral meer werk. Het lastige is juist bepalen wat vandaag aandacht verdient — en wat kan wachten.',
    },
    users: {
      description: 'Dit project begon bij mijn eigen manier van werken en groeide mee met wat in de praktijk wel en niet hielp.',
      needs: ['Eerst zien wat er speelt, zonder alles tegelijk te willen doen', 'Kiezen wat vandaag echt belangrijk is', 'Aan het eind van de dag en week terugkijken en bijstellen'],
    },
    process: [
      { title: 'Huidige situatie', text: 'Taken, afspraken en losse ideeën staan naast elkaar.' },
      { title: 'Knelpunt', text: 'Daardoor is de eerstvolgende haalbare stap niet altijd helder.' },
      { title: 'Aanpak', text: 'Eerst overzicht, dan een bewuste keuze, daarna uitvoeren en terugkijken.' },
    ],
    choices: [
      { title: 'Dag en week verbinden', reason: 'Een dagstart werkt beter als die voortbouwt op een weekfocus en eindigt in een korte terugblik.' },
      { title: 'Een begrensde Top 3', reason: 'Drie prioriteiten maken de keuze zichtbaar, zonder opnieuw een lange lijst te maken.' },
      { title: 'Werkmodus met parkeerplaats', reason: 'Nieuwe ideeën mogen binnenkomen, maar hoeven de aandacht voor de huidige taak niet te onderbreken.' },
    ],
    prototype: 'FocusFlow brengt dagstart, Top 3, werkmodus, weekplanning en weekreview samen. Zo werd een persoonlijk ritme zichtbaar in plaats van een verzameling losse schermen.',
    workflow: ['Bekijk wat er vandaag en deze week speelt', 'Kies een haalbare Top 3', 'Werk vanuit één overzicht en parkeer afleiding', 'Sluit af en gebruik de terugblik voor de volgende week'],
    implementation: {
      intro: 'Als ik FocusFlow buiten mijn eigen gebruik verder zou brengen, wil ik vooral dit onderzoeken:',
      questions: ['Voor wie werkt dit ritme ook, en wanneer juist niet?', 'Welke gegevens moeten persoonlijk en lokaal blijven?', 'Hoe ondersteun je een gewoonte zonder dat de app dwingend wordt?', 'Welke feedback maakt het ritme op langere termijn bruikbaar?'],
    },
    learning: ['Mijn eigen werkproces concreet maken in plaats van alleen meer taken verzamelen', 'Beperken als ontwerpkeuze zien: minder kiezen kan juist helpen', 'Dagstart, terugblik en vervolgplanning als één ritme ontwerpen'],
    status: {
      current: 'Ik gebruik dit als doorlopend leerproject en pas het aan op wat ik zelf in de praktijk tegenkom.',
      works: 'De app brengt dagstart, Top 3, werkmodus en weekreview in één duidelijke volgorde.',
      prototype: 'Of hetzelfde ritme voor anderen werkt, en hoe sync daarbij past, wil ik nog onderzoeken.',
      question: 'Wat blijft overeind van dit persoonlijke ritme wanneer anderen ermee werken?',
    },
    images: [
      { src: '/projects/focusflow-personal-workmodus-current-demo.png', alt: 'FocusFlow Personal Werkmodus met weekfocus, taken en agenda' },
      { src: '/projects/focusflow-personal-top3-current-demo.png', alt: 'FocusFlow Personal Dagstart met een Top 3' },
      { src: '/projects/focusflow-personal-weekreview-current-demo.png', alt: 'FocusFlow Personal Weekreview met een terugblik' },
    ],
  },
  {
    slug: 'woonbuddy', label: 'WoonBuddy', href: '/projecten/woonbuddy', appHref: appHref('Woonbuddy'), eyebrow: 'Begeleid wonen en dagelijkse structuur',
    summary: 'Hoe maak je dagelijkse ondersteuning begrijpelijk zonder iemands zelfstandigheid over te nemen? Met WoonBuddy onderzocht ik hoe bewoners rustig kunnen starten met wonen, taken en hulpvragen.',
    problem: {
      situation: 'Taken, afspraken en praktische hulpvragen zijn voor bewoners en begeleiders vaak over verschillende momenten en uitleg verdeeld.',
      friction: 'Als niet duidelijk is wat de volgende stap is of waar hulp te vinden is, kost dat rust en ontstaat er extra uitleg rond gewone dagelijkse zaken.',
    },
    users: {
      description: 'Voor bewoners die baat hebben bij heldere stappen, met begeleiding als gesprekspartner en steun in plaats van als sturende laag.',
      needs: ['Eenvoudige taal en herkenbare navigatie', 'Een taak op eigen tempo kunnen doorlopen', 'Zicht op afspraken, ontwikkeling en hulp die beschikbaar is'],
    },
    process: [
      { title: 'Huidige situatie', text: 'Taken, afspraken en hulp komen op verschillende momenten en plekken voorbij.' },
      { title: 'Knelpunt', text: 'De bewoner moet eerst uitzoeken wat nu past en bij wie hulp beschikbaar is.' },
      { title: 'Aanpak', text: 'Een rustige start, vaste stappen en een duidelijke route naar begeleiding.' },
    ],
    choices: [
      { title: 'Vaste, herkenbare routes', reason: 'Woonstart, taken, activiteiten en ontwikkeling krijgen ieder een eigen, vertrouwde plek.' },
      { title: 'Begeleide stappen zonder overnemen', reason: 'Een taak kan stap voor stap worden uitgelegd zonder dat de app beslist wat iemand moet doen.' },
      { title: 'Hulp dichtbij houden', reason: 'Contact en begeleiding zijn geen nooduitgang, maar een zichtbaar onderdeel van de dagelijkse route.' },
    ],
    prototype: 'Ik vertaalde dit naar een bewonersdashboard met Woonstart, activiteiten, doelen en Contact & Hulp. De demo gebruikt voorbeeldgegevens, zodat het ontwerp veilig te bekijken is.',
    workflow: ['Start vanuit een rustig overzicht', 'Kies een Woonstart-onderdeel, activiteit of taak', 'Volg vaste stappen op eigen tempo', 'Bespreek voortgang en vragen met begeleiding'],
    ai: {
      actual: 'WoonBuddy kan AI gebruiken voor chat, extra taak-uitleg en suggesties bij activiteiten. Dat is ondersteunend, niet de basis van de app.',
      nonAi: 'Woonstart, taken, planning, reminders en rollen volgen vaste stappen in de applicatie.',
      distinction: 'Een chatantwoord kan helpen, maar vervangt geen begeleider en beslist niet wat een bewoner moet doen.',
      privacy: 'De portfolio toont alleen voorbeeldgegevens. Bij echt gebruik moet zorgvuldig worden bepaald welke informatie wel en niet naar een AI-dienst mag.',
      openPoint: 'Ik wil vooral testen hoe duidelijk AI-hulp moet worden uitgelegd, zodat bewoners weten wanneer ze zelf of met begeleiding verder kunnen.',
    },
    implementation: {
      intro: 'Voordat je dit in een woonorganisatie inzet, wil ik eerst samen met bewoners en begeleiders antwoord krijgen op deze vragen:',
      questions: ['Is taal en navigatie voor verschillende bewoners echt begrijpelijk?', 'Welke informatie mag wie zien en aanpassen?', 'Wanneer helpt AI-uitleg, en wanneer is persoonlijk contact beter?', 'Welke instructie, feedback en beheer zijn nodig voor dagelijks gebruik?'],
    },
    learning: ['Begeleiding vertalen naar kleine stappen zonder autonomie weg te nemen', 'Rollen en hulpvragen meenemen in het ontwerp, niet alleen de taak zelf', 'Vaste stappen, menselijke begeleiding en AI-hulp duidelijk van elkaar onderscheiden'],
    status: {
      current: 'Werkend leerprototype met een bewonersdemo op basis van voorbeeldgegevens.',
      works: 'Woonstart, begeleide taken, activiteiten, Contact & Hulp en ontwikkeling vormen samen één route.',
      prototype: 'Ik wil nog leren wat per bewoner en per begeleidingssituatie nodig is.',
      question: 'Welke uitleg en welke vorm van begeleiding helpen zonder de app ingewikkeld te maken?',
    },
    images: [
      { src: '/projects/woonbuddy-overview.png', alt: 'WoonBuddy bewonersdashboard met overzicht, taken en begeleiding' },
      { src: '/projects/woonbuddy-taken.png', alt: 'WoonBuddy begeleide taak met stap voor stap hulp' },
      { src: '/projects/woonbuddy-ontwikkeling.png', alt: 'WoonBuddy doelen en ontwikkeling in de demo' },
    ],
  },
  {
    slug: 'mindflow', label: 'MindFlow', href: '/projecten/mindflow', appHref: appHref('MindFlow'), eyebrow: 'AI, reflectie en voorzichtige hypothesen',
    summary: 'Ik onderzocht hoe AI kan helpen om één concrete situatie beter te begrijpen, zonder te snel te bepalen wat die situatie over iemand zegt.',
    problem: {
      situation: 'Een vraag of ervaring kan tijdens reflectie snel groot en onoverzichtelijk worden.',
      friction: 'Een snel AI-antwoord kan overtuigend klinken, terwijl er vaak meerdere verklaringen mogelijk zijn.',
    },
    users: {
      description: 'Voor mensen die een concrete situatie willen onderzoeken en zelf willen kiezen wat herkenbaar is en wat een passende volgende stap kan zijn.',
      needs: ['Een gesprek dat bij de eigen vraag blijft', 'Mogelijke invalshoeken in plaats van snelle conclusies', 'Zelf bepalen wat wordt bewaard en wat ze willen proberen'],
    },
    process: [
      { title: 'Huidige situatie', text: 'Eén ervaring kan veel verschillende verklaringen oproepen.' },
      { title: 'Knelpunt', text: 'Een snel antwoord voelt al gauw als een conclusie.' },
      { title: 'Aanpak', text: 'Eerst de situatie onderzoeken, daarna zelf een kleine volgende stap kiezen.' },
    ],
    choices: [
      { title: 'Beginnen bij een situatie', reason: 'Ik merkte dat een coachgesprek snel te breed wordt als de app meteen patronen probeert te verklaren. Daarom begint de sessie bij wat er is gebeurd.' },
      { title: 'Patronen als vraag, niet als antwoord', reason: 'Mogelijke patronen zijn er om te onderzoeken, niet om iemand in een hokje te plaatsen.' },
      { title: 'Zelf kiezen wat past', reason: 'De gebruiker bepaalt wat herkenbaar is, wat wordt bewaard en welke vervolgstap de moeite waard is.' },
    ],
    prototype: 'MindFlow combineert een coachsessie met een dashboard, mogelijke patronen, oefeningen en Mijn Data. Daarmee onderzocht ik niet alleen het gesprek zelf, maar ook wat iemand daarna met een inzicht kan doen.',
    workflow: ['Start met een concrete situatie', 'Voer een korte coachsessie', 'Bekijk mogelijke invalshoeken', 'Kies zelf een klein experiment of een oefening'],
    ai: {
      actual: 'AI ondersteunt de coachchat en kan mogelijke invalshoeken teruggeven.',
      nonAi: 'Navigatie, oefeningen, opslag en de gekozen vervolgstap zijn gewone onderdelen van de app.',
      distinction: 'Een AI-reactie is iets om te onderzoeken, geen conclusie over de gebruiker.',
      privacy: 'Reflecties kunnen persoonlijk zijn. Daarom moet iemand goed kunnen bepalen wat wordt bewaard of gedeeld.',
      openPoint: 'Ik wil nog testen wanneer een AI-reactie echt helpt en wanneer een gesprek beter bij een mens past.',
    },
    implementation: {
      intro: 'Als ik MindFlow verder zou brengen, wil ik eerst antwoord op deze praktische vragen:',
      questions: ['Helpt het gesprek mensen echt verder?', 'Wanneer wordt een AI-reactie te stellig?', 'Welke reflecties wil iemand wel of niet bewaren?', 'Wanneer hoort een vraag niet thuis in deze app en is menselijke hulp beter?'],
    },
    learning: ['Een coachgesprek klein houden door bij één situatie te beginnen', 'AI gebruiken om vragen te openen, niet om een antwoord vast te zetten', 'De vervolgstap bij de gebruiker laten'],
    status: {
      current: 'MindFlow werkt als leerprototype met een demo-profiel, coachgesprek, mogelijke patronen en oefeningen.',
      works: 'Coachsessie, dashboard, oefeningen en Mijn Data vormen samen één reflectieroute.',
      prototype: 'Ik wil nog testen hoe andere gebruikers de toon, suggesties en grenzen van de begeleiding ervaren.',
      question: 'Wanneer voelt een AI-gesprek helpend, en wanneer te stellig?',
    },
    images: [
      { src: '/projects/mindflow-dashboard.png', alt: 'MindFlow dashboard met demo-profiel en volgende stap' },
      { src: '/projects/mindflow-active-session.png', alt: 'MindFlow actieve coachsessie met concrete vervolgactie' },
      { src: '/projects/mindflow-kaders.png', alt: 'MindFlow profiel met werkhypotheses en signalen' },
    ],
  },
  {
    slug: 'focusflow-bewind', label: 'FocusFlow Bewind', href: '/projecten/focusflow-bewind', appHref: appHref('FocusFlow Bewind'), eyebrow: 'Werkflow en besluitvoorbereiding',
    summary: 'Vanuit mijn ervaring met bewindvoering onderzocht ik hoe je een drukke werkdag terugbrengt tot een helder proces: signaleren, prioriteren, voorbereiden en plannen.',
    problem: {
      situation: 'Dossiers, inbox, agenda en terugkerende handelingen vragen vaak tegelijk om aandacht.',
      friction: 'Wanneer urgentie, context en vervolgactie verspreid blijven, kost het veel tijd om rustig te bepalen wat eerst moet.',
    },
    users: {
      description: 'Voor bewindvoerders die hun eigen werkdag willen ordenen zonder dat een hulpmiddel de professionele afweging overneemt.',
      needs: ['Signalen en werkmomenten samen kunnen zien', 'Een haalbare prioriteit in plaats van een onbeperkte actielijst', 'Ruimte om cliëntvragen goed voor te bereiden'],
    },
    process: [
      { title: 'Huidige situatie', text: 'Signalen, agenda en dossierwerk vragen op verschillende momenten aandacht.' },
      { title: 'Knelpunt', text: 'Het kost veel denkwerk om urgentie, context en de eerstvolgende handeling te verbinden.' },
      { title: 'Aanpak', text: 'Eerst ordenen, dan een haalbare Top 3 kiezen en verder plannen of terugkijken.' },
    ],
    choices: [
      { title: 'Beginnen bij de werkdag', reason: 'De flow volgt het echte ritme: signaleren, prioriteren, voorbereiden en plannen.' },
      { title: 'De gebruiker weegt af', reason: 'Het hulpmiddel maakt informatie zichtbaar; de professionele keuze blijft bij de bewindvoerder.' },
      { title: 'Klein genoeg houden', reason: 'Ik hield de demo bij overzicht en voorbereiding, in plaats van een compleet dossiersysteem na te bouwen.' },
    ],
    prototype: 'De demo brengt inbox- en agendascan, Top 3, cliëntvoorbereiding, weekplanning en reflectie samen in één werkritme.',
    workflow: ['Breng signalen, inbox en agenda samen', 'Weeg urgentie, context en vervolgstap af', 'Kies een haalbare Top 3', 'Verbind dagplanning, weekplanning en reflectie'],
    implementation: {
      intro: 'Voordat ik dit in de praktijk verder zou brengen, wil ik vooral deze vragen met bewindvoerders onderzoeken:',
      questions: ['Sluit deze volgorde aan op echte werkdruk en uitzonderingen?', 'Welke informatie is nodig om goed te prioriteren?', 'Hoe houd je rollen, rechten en verantwoordelijkheid helder?', 'Welke ondersteuning en evaluatie zijn nodig voordat je breder gaat werken?'],
    },
    learning: ['Een werkdag bekijken als een reeks signalen, keuzes en vervolgacties', 'Een helder hulpmiddel maken zonder te doen alsof het een dossiersysteem of beslissysteem is', 'Eerst het proces zichtbaar maken voordat automatisering wordt overwogen'],
    status: {
      current: 'Leerprototype met voorbeeldinhoud, ontstaan vanuit praktijkervaring met bewindvoering.',
      works: 'De demo laat een vaste route zien van signaleren en prioriteren naar planning en reflectie.',
      prototype: 'Koppelingen met echte systemen en gebruik in de dagelijkse praktijk zijn de volgende onderwerpen om te onderzoeken.',
      question: 'Welke informatie helpt bij prioriteren zonder het professionele oordeel te overschrijven?',
    },
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
