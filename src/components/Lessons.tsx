import { Bot, GitBranch, Network, Search, Waypoints } from 'lucide-react';
import { motion } from 'motion/react';
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">Ontwikkeling</p>
        <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Wat deze projecten mij hebben geleerd</h2>
        <div className="max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
          <p>
            Door te bouwen en testen leerde ik dat een goede digitale oplossing niet bij technologie begint, maar bij de mensen die ermee werken. Daardoor werk ik nu minder vanuit losse functies en meer vanuit analyse, kleine stappen en tussentijds toetsen.
          </p>
          <p className="mt-5">
            Ik kijk daarbij ook naar wat er ná het prototype nodig is: hoe gebruikers begrijpen wat een systeem doet, waar AI wel en niet wordt gebruikt, welke informatie zorgvuldig verwerkt moet worden en hoe een oplossing verantwoord in de praktijk kan landen.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson, index) => (
          <motion.article
            key={lesson.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
              {lesson.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold leading-snug">{lesson.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{lesson.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
        <p className="max-w-4xl text-lg leading-relaxed text-slate-700">
          Deze manier van werken versterkte mijn interesse in zorginnovatie: technologie niet als doel, maar als middel om mensen en hun werk beter te ondersteunen.
        </p>
      </div>
    </Section>
  );
}
