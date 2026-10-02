import { useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Brain, CheckCircle2, Compass, Home, LayoutTemplate } from 'lucide-react';
import { motion } from 'motion/react';
import { getProjectStory, type ProjectMedia } from '../config/projectStories';
import { PortfolioLightbox, type GalleryImage } from './PortfolioLightbox';
import { ProjectGallery } from './ProjectGallery';

type Prototype = {
  title: string;
  label: string;
  status: string;
  icon: ReactNode;
  description: string;
  bullets: string[];
  approach: string[];
  media: ProjectMedia;
  href?: string;
  cta: string;
};

const focusFlowPersonalHref = getProjectStory('focusflow-personal')?.href;

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
    media: getProjectStory('focusflow-bewind')!.media,
    href: getProjectStory('focusflow-bewind')?.href,
    cta: 'Lees het projectverhaal',
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
    media: getProjectStory('woonbuddy')!.media,
    href: getProjectStory('woonbuddy')?.href,
    cta: 'Lees het projectverhaal',
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
    media: getProjectStory('mindflow')!.media,
    href: getProjectStory('mindflow')?.href,
    cta: 'Lees het projectverhaal',
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
    media: getProjectStory('focusflow-personal')!.media,
    href: focusFlowPersonalHref,
    cta: focusFlowPersonalHref ? 'Lees het projectverhaal' : 'In ontwikkeling',
  },
];

function PrototypeCase({
  prototype,
  index,
  onOpen,
}: {
  prototype: Prototype;
  index: number;
  onOpen: (images: GalleryImage[], activeIndex: number) => void;
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
            <ProjectGallery media={prototype.media} title={prototype.title} onOpen={onOpen} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Experiments() {
  const [activeGallery, setActiveGallery] = useState<{ images: GalleryImage[]; initialIndex: number } | null>(null);
  const closeGallery = useCallback(() => setActiveGallery(null), []);
  const orderedPrototypes = [prototypes[1], prototypes[3], prototypes[2], prototypes[0]];

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
        {orderedPrototypes.map((prototype, index) => (
          <div key={prototype.title}>
            <PrototypeCase prototype={prototype} index={index} onOpen={(images, initialIndex) => setActiveGallery({ images, initialIndex })} />
          </div>
        ))}
      </div>

      {activeGallery ? (
        <PortfolioLightbox images={activeGallery.images} initialIndex={activeGallery.initialIndex} onClose={closeGallery} />
      ) : null}
    </Section>
  );
}
