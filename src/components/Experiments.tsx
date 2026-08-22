import { useState } from 'react';
import type { ReactNode } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Brain, CheckCircle2, Compass, Home, LayoutTemplate, Maximize2, X } from 'lucide-react';
import { motion } from 'motion/react';
import { projectLinks } from '../config/projectLinks';

type Prototype = {
  title: string;
  label: string;
  status: string;
  icon: ReactNode;
  description: string;
  bullets: string[];
  approach: string[];
  image: {
    src: string;
    alt: string;
  };
  examples: {
    src: string;
    alt: string;
  }[];
  href?: string;
  cta: string;
};

const focusFlowPersonalHref = projectLinks.find((project) => project.label === 'FocusFlow Personal')?.href;

const prototypes: Prototype[] = [
  {
    title: 'FocusFlow',
    label: 'dossiers / besluitvorming / dagstructuur',
    status: 'Leerprototype',
    icon: <LayoutTemplate size={24} />,
    description:
      'FocusFlow onderzoekt hoe complexe dossierinformatie kan worden teruggebracht tot heldere keuzes voor de werkdag. De nadruk ligt op ordening, besluitvoorbereiding en een haalbare Top 3; de gebruiker houdt de regie over de afwegingen.',
    bullets: [
      'Versnipperde dossiergegevens en terugkerende stappen in kaart brengen',
      'Urgentie, context en vervolgstap zichtbaar afwegen',
      'Dag- en weekplanning met elkaar verbinden',
      'Planningskeuzes als workflow tonen, niet als AI-advies',
    ],
    approach: [
      'Ik begon bij de dagelijkse werksituatie: waar ontstaat druk en welke keuzes moeten worden voorbereid?',
      'Vervolgens ordende ik signalen, inbox, agenda en planning tot een vaste volgorde voor de werkdag.',
    ],
    image: {
      src: '/projects/focusflow-overview.jpg',
      alt: 'FocusFlow overzicht met werkdagen, prioriteiten en reflectie',
    },
    examples: [
      { src: '/projects/focusflow-stap-2.jpg', alt: 'FocusFlow intake en inbox scan' },
      { src: '/projects/focusflow-stap-4.jpg', alt: 'FocusFlow actieplan en top drie' },
      { src: '/projects/focusflow-weekplanning.jpg', alt: 'FocusFlow weekplanning' },
    ],
    href: 'https://focusflow.luukcoolen.nl/',
    cta: 'Bekijk FocusFlow live hier',
  },
  {
    title: 'Woonbuddy',
    label: 'gebruikersbehoefte / begeleiding / structuur',
    status: 'Leerprototype',
    icon: <Home size={24} />,
    description:
      'Woonbuddy onderzoekt hoe bewoners en begeleiders sneller overzicht krijgen in taken, afspraken en ontwikkeling. Taken en begeleide stappen zijn vaste workflows; de afzonderlijke chat kan AI gebruiken voor extra uitleg.',
    bullets: [
      'Dagelijkse afspraken en taken herkenbaar presenteren',
      'Eenvoudige taal en voorspelbare navigatie gebruiken',
      'Ontwikkeling tonen zonder extra administratieve druk',
      'AI-hulp duidelijk onderscheiden van gewone taakbegeleiding',
    ],
    approach: [
      'Ik begon bij momenten waarop bewoners of begeleiders snel willen weten wat er verwacht wordt en wat er gepland staat.',
      'Die vragen vertaalde ik naar herkenbare onderdelen en ik testte hoeveel uitleg per scherm werkelijk nodig is.',
    ],
    image: {
      src: '/projects/woonbuddy-overview.jpg',
      alt: 'Woonbuddy overzicht met startpagina, taken en ontwikkeling',
    },
    examples: [
      { src: '/projects/woonbuddy-startpagina.jpg', alt: 'Woonbuddy startpagina' },
      { src: '/projects/woonbuddy-taken.jpg', alt: 'Woonbuddy takenoverzicht' },
      { src: '/projects/woonbuddy-ontwikkeling.jpg', alt: 'Woonbuddy ontwikkeling' },
    ],
    href: 'https://woonbuddy.luukcoolen.nl/',
    cta: 'Bekijk Woonbuddy live hier',
  },
  {
    title: 'MindFlow',
    label: 'AI / reflectie / patroonherkenning',
    status: 'Leerprototype',
    icon: <Brain size={24} />,
    description:
      'MindFlow onderzoekt hoe AI patronen en hypotheses kan helpen ordenen zonder de regie van de gebruiker over te nemen. AI-uitkomsten blijven voorlopige werkhypotheses die de gebruiker kan toetsen, aanvullen of verwerpen.',
    bullets: [
      'Beginnen vanuit één concrete startvraag',
      'Observaties en hypotheses herkenbaar van elkaar scheiden',
      'De gebruiker controle houden over inzichten en vervolgstappen',
      'AI-gegenereerde reflecties als controleerbare suggesties behandelen',
    ],
    approach: [
      'Ik onderzocht hoe een AI-gesprek richting krijgt wanneer sessies, profielen, hypotheses en bronnen met elkaar samenhangen.',
      'Daarna bouwde ik de dialoog op rond terugkijken, samenvatten en het voorbereiden van een volgende stap.',
    ],
    image: {
      src: '/projects/mindflow-overview.jpg',
      alt: 'MindFlow overzicht met dashboard, coachsessie en principes',
    },
    examples: [
      { src: '/projects/mindflow-dashboard.jpg', alt: 'MindFlow dashboard' },
      { src: '/projects/mindflow-active-session.jpg', alt: 'MindFlow actieve sessie' },
      { src: '/projects/mindflow-kaders.jpg', alt: 'MindFlow kaders voor coaching' },
    ],
    href: 'https://mindflow.luukcoolen.nl/',
    cta: 'Bekijk MindFlow live hier',
  },
  {
    title: 'FocusFlow Personal',
    label: 'dagritme / focus / zelfsturing',
    status: 'Leerprototype',
    icon: <Compass size={24} />,
    description:
      'FocusFlow Personal ontstond uit de vraag hoe een drukke werkweek meer richting kan krijgen. Het leerprototype helpt niet om méér te doen, maar om bewuster te kiezen wat vandaag aandacht verdient via een vaste, zelfgestuurde workflow.',
    bullets: [
      'Dagstart en weekreview verbinden in één ritme',
      'Een Top 3 gebruiken om keuzes zichtbaar te maken',
      'Taken parkeren om ruimte en grenzen te bewaken',
      'Het ritme ondersteunen zonder keuzes als AI-advies te presenteren',
    ],
    approach: [
      'Ik begon vanuit mijn eigen behoefte aan overzicht tijdens een periode met sollicitaties, projecten en persoonlijke ontwikkeling. Gewone takenlijsten verzamelden vooral meer werk en gaven weinig richting.',
      'Daarom ontwierp ik een ritme van weekreview, dagstart, werkmodus en afsluiting. Met een Top 3, energie-inzicht en parkeerplaats testte ik wat helpt om bewuster te kiezen.',
    ],
    image: {
      src: '/projects/focusflow-personal-overview.jpg',
      alt: 'FocusFlow Personal overzicht met dagstart, werkmodus, reflectie en weekreview',
    },
    examples: [
      { src: '/projects/focusflow-personal-dagstart.png', alt: 'FocusFlow Personal dagstart en morning scan' },
      { src: '/projects/focusflow-personal-werkmodus.png', alt: 'FocusFlow Personal werkmodus met Top 3 en parkeerplaats' },
      { src: '/projects/focusflow-personal-product-overview.jpg', alt: 'FocusFlow Personal productoverzicht met volledige workflow' },
    ],
    href: focusFlowPersonalHref,
    cta: focusFlowPersonalHref ? 'Bekijk FocusFlow Personal live hier' : 'In ontwikkeling',
  },
];

function PrototypeImage({
  image,
  title,
  onOpen,
}: {
  image: Prototype['image'];
  title: string;
  onOpen: (image: Prototype['image']) => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      onClick={() => onOpen(image)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
      aria-label={`Vergroot screenshot van ${title}`}
    >
      <img src={image.src} alt={image.alt} loading="lazy" className="w-full object-contain object-top" />
      <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition-transform group-hover:scale-105">
        <Maximize2 size={18} />
      </span>
      <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        Klik om te vergroten
      </span>
    </motion.button>
  );
}

function PrototypeCase({
  prototype,
  index,
  onOpen,
}: {
  prototype: Prototype;
  index: number;
  onOpen: (image: Prototype['image']) => void;
}) {
  const isEven = index % 2 === 0;
  const isExternalLink = prototype.href?.startsWith('http');

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="card-3d relative p-6 md:p-10">
        <div className={`grid gap-10 lg:grid-cols-12 lg:items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-teal-500/20">
                {prototype.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{prototype.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand">{prototype.label}</p>
              </div>
            </div>

            <div className="mb-6 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
              {prototype.status}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-700">{prototype.description}</p>

            <ul className="mb-8 space-y-4">
              {prototype.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Hoe ik te werk ging</h4>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                  {prototype.approach.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>

            {prototype.href ? (
              <a
                href={prototype.href}
                target={isExternalLink ? '_blank' : undefined}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-bold text-brand group/link"
              >
                {prototype.cta}
                <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-bold text-slate-400">
                {prototype.cta}
                <ArrowRight size={18} />
              </span>
            )}
          </div>

          <div className="lg:col-span-7">
            <PrototypeImage image={prototype.image} title={prototype.title} onOpen={onOpen} />
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Meer voorbeelden</p>
              <div className="grid grid-cols-3 gap-3">
                {prototype.examples.map((example) => (
                  <button
                    key={example.src}
                    type="button"
                    onClick={() => onOpen(example)}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
                    aria-label={`Vergroot voorbeeld van ${prototype.title}: ${example.alt}`}
                  >
                    <img src={example.src} alt={example.alt} loading="lazy" className="aspect-[4/3] w-full object-contain object-top" />
                    <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 text-white transition-colors group-hover:bg-slate-950/25">
                      <Maximize2 size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Experiments() {
  const [activeImage, setActiveImage] = useState<Prototype['image'] | null>(null);

  return (
    <Section bg="light" id="voorbeelden">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Voorbeelden van mijn werkwijze</h2>
          <div className="space-y-6 text-xl leading-relaxed text-slate-600">
            <p>
              Deze leerprototypes laten zien hoe ik praktijksituaties onderzoek, keuzes zichtbaar maak en digitale ideeën toets.
            </p>
            <p className="font-medium text-slate-900">
              De rode draad: zorginnovatie, gebruiksvriendelijkheid en beter georganiseerde zorg — met aandacht voor wanneer AI wel en niet wordt gebruikt.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="space-y-16">
        {prototypes.map((prototype, index) => (
          <div key={prototype.title}>
            <PrototypeCase prototype={prototype} index={index} onOpen={setActiveImage} />
          </div>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
            onClick={() => setActiveImage(null)}
            aria-label="Sluit vergrote afbeelding"
          >
            <X size={22} />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[92vh] max-w-[96vw] rounded-2xl bg-white object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </Section>
  );
}
