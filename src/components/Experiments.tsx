import { useCallback, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getProjectStory } from '../config/projectStories';
import { PortfolioLightbox, type GalleryImage } from './PortfolioLightbox';
import { ProjectOverview } from './ProjectGallery';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

const projects = [
  { slug: 'woonbuddy', question: 'Een duidelijke volgende stap.', description: 'Hoe geef je bewoners en begeleiders meer overzicht in taken, afspraken en ontwikkeling?' },
  { slug: 'focusflow-personal', question: 'Eerst kiezen. Dan doen.', description: 'Hoe maak je ruimte voor wat vandaag aandacht verdient, in plaats van een steeds langere takenlijst?' },
  { slug: 'mindflow', question: 'Reflecteren met eigen regie.', description: 'Hoe helpt AI bij het ordenen van patronen, terwijl de gebruiker hypotheses zelf blijft toetsen?' },
  { slug: 'focusflow-bewind', question: 'Van dossier naar dagstructuur.', description: 'Hoe breng je complexe informatie terug tot heldere keuzes en haalbare vervolgstappen?' },
];

export function Experiments() {
  const [activeGallery, setActiveGallery] = useState<{ images: GalleryImage[]; initialIndex: number } | null>(null);
  const closeGallery = useCallback(() => setActiveGallery(null), []);
  const openGallery = (images: GalleryImage[], initialIndex: number) => setActiveGallery({ images, initialIndex });
  return (
    <Section bg="light" id="voorbeelden">
      <Reveal className="mb-14 max-w-3xl md:mb-20">
        <p className="eyebrow mb-5">Eigen projecten en experimenten</p>
        <h2 className="section-title">Praktijkvragen.<br />Zichtbaar gemaakt.</h2>
        <p className="section-intro">Met eigen leerprototypes onderzoek ik digitale ideeën. Geen opdrachten van FITZ of Riwis, maar voorbeelden van mijn keuzes, aanpak en leerproces.</p>
      </Reveal>
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => {
          const story = getProjectStory(project.slug)!;
          return (
            <Reveal as="article" key={project.slug} className="project-feature">
              <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <p className="text-sm font-semibold text-slate-600"><span className="mr-3 text-brand-dark tabular-nums">0{index + 1}</span>{story.label}</p>
                <span className="prototype-badge">Leerprototype</span>
              </div>
              <div className={'grid items-center gap-8 lg:gap-14 ' + (index % 2 ? 'lg:[&>div:first-child]:order-2 lg:grid-cols-[1.3fr_0.7fr]' : 'lg:grid-cols-[0.7fr_1.3fr]')}>
                <div className="min-w-0">
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{project.question}</h3>
                  <p className="my-6 text-lg leading-relaxed text-slate-600">{project.description}</p>
                  <a href={story.href} className="project-link">Lees het projectverhaal <ArrowUpRight size={19} /></a>
                </div>
                <div className="min-w-0"><ProjectOverview media={story.media} title={story.label} onOpen={openGallery} /></div>
              </div>
            </Reveal>
          );
        })}
      </div>
      {activeGallery ? <PortfolioLightbox images={activeGallery.images} initialIndex={activeGallery.initialIndex} onClose={closeGallery} /> : null}
    </Section>
  );
}
