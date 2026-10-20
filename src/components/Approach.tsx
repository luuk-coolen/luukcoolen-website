import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Bot, ClipboardList, MousePointerClick, Search } from 'lucide-react';

export function Approach() {
  const steps = [
    {
      icon: <Search size={24} />,
      title: 'Praktijkprobleem analyseren',
      description: 'Ik begin op de werkvloer: waar loopt het vast, welke stap is onduidelijk en wat heeft de gebruiker nodig om verder te kunnen?',
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Stappen en keuzes ordenen',
      description: 'Ik teken de handelingen uit, groepeer wat bij elkaar hoort en zoek waar overdracht of gebruiksgemak beter kan.',
    },
    {
      icon: <Bot size={24} />,
      title: 'AI-tools inzetten als hulpmiddel',
      description: 'Met AI-tools verken ik scenario’s en schermteksten. AI is geen doel, maar een manier om sneller te onderzoeken en vergelijken.',
    },
    {
      icon: <MousePointerClick size={24} />,
      title: 'Iteratief toetsen en verbeteren',
      description: 'Ik maak een klein aanklikbaar voorbeeld, kijk waar het helpt of schuurt en pas de gekozen richting aan.',
    },
  ];

  return (
    <Section bg="white" id="werkwijze">
      <div className="w-full">
        <Reveal
        >
          <p className="eyebrow mb-5">Hoe ik werk</p>
          <h2 className="section-title mb-8">Begrijpen. Ordenen.<br />Toetsen. Verbeteren.</h2>
          <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl">
            Mijn werkwijze is rustig en stapsgewijs: begrijpen, ordenen, toetsen en verbeteren. Zo onderzoek ik wat in de praktijk werkelijk helpt.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}
              className="relative min-w-0 border-t border-slate-200 pt-6"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-brand-dark">
                {step.icon}
              </div>
              <div className="min-w-0">
                <div className="mb-4 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark">Stap {index + 1}</span>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
