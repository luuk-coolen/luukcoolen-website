import { FileSearch, HeartHandshake, Workflow } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';

const questions = [
  {
    icon: <FileSearch size={21} />,
    text: 'Hoe maken we belangrijke gegevens sneller vindbaar en begrijpelijk?',
  },
  {
    icon: <Workflow size={21} />,
    text: 'Hoe brengen we meer rust in terugkerende werkstappen?',
  },
  {
    icon: <HeartHandshake size={21} />,
    text: 'Waar helpt technologie en waar blijft menselijk contact leidend?',
  },
];

export function WhyProjects() {
  return (
    <Section bg="dark" id="missie">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">Mijn missie</p>
          <h2 className="section-title mb-8 text-white">Meer ruimte voor het echte werk.</h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              In zorg en bewindvoering zag ik hoe onduidelijke stappen en versnipperde informatie tijd kosten. Ik onderzoek hoe digitale hulpmiddelen meer overzicht geven, met ruimte voor menselijk contact.
            </p>
          </div>
        </Reveal>

        <Reveal
          className="rounded-3xl bg-white/5 p-6 md:p-8"
        >
          <p className="mb-5 text-sm font-semibold text-white">Vragen die steeds terugkomen</p>
          <div className="divide-y divide-white/10">
            {questions.map((question) => (
              <div key={question.text} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                  {question.icon}
                </div>
                <p className="pt-1 text-sm font-medium leading-relaxed text-slate-200">{question.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </Section>
  );
}
