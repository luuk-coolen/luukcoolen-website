import { Bot, GitBranch, Network, Search, Waypoints } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

const lessons = [
  {
    icon: <Search size={21} />,
    title: 'Van idee naar probleemanalyse',
    description: 'Ik onderzoek eerst waar iemand tegenaan loopt, wat het doel is en welke vraag echt opgelost moet worden.',
  },
  {
    icon: <GitBranch size={21} />,
    title: 'Van losse prompts naar sprints',
    description: 'Ik werk in kleine stappen, leg keuzes vast en toets eerder of een richting bruikbaar is.',
  },
  {
    icon: <Waypoints size={21} />,
    title: 'Van functionaliteit naar workflow',
    description: 'Een scherm werkt pas als volgorde, overdracht en handelingen logisch op elkaar aansluiten.',
  },
  {
    icon: <Bot size={21} />,
    title: 'Van AI gebruiken naar AI aansturen',
    description: 'AI versnelt het verkennen, maar goede vragen, kaders en controle bepalen de kwaliteit.',
  },
  {
    icon: <Network size={21} />,
    title: 'Van prototype naar procesdenken',
    description: 'Ik kijk ook naar data, implementatie, adoptie en wat nodig is om iets bruikbaar te houden.',
  },
];

export function Lessons() {
  return (
    <Section bg="light" id="leren" className="border-y border-slate-100">
      <Reveal
        className="max-w-4xl"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">Ontwikkeling</p>
        <h2 className="mb-8 section-title">Bouwen verandert<br />hoe ik kijk.</h2>
        <div className="max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
          <p>Een goede digitale oplossing begint bij mensen. Door te bouwen leerde ik beter analyseren, keuzes begrenzen en eerder toetsen wat werkt.</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson, index) => (
          <Reveal as="article" key={lesson.title} delay={index * 0.04}
            className="rounded-3xl bg-white p-7"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
              {lesson.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold leading-snug">{lesson.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{lesson.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
