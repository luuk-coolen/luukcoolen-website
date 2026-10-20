import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Laptop, Network, Sparkles } from 'lucide-react';

const activities = [
  {
    title: 'Overzicht en samenwerking',
    status: 'Bijdragen aan de projectgroep',
    contribution: 'Ik help mee om het applicatielandschap en de verschillende taken bij Riwis in kaart te brengen. In de projectgroep denk ik mee over werkzaamheden en projecten. Ik pak onderwerpen snel op en werk ideeën uit in samenwerking met collega’s.',
    learning: 'Mijn leervraag: hoe verbind ik applicaties, taken en de vragen van collega’s tot een begrijpelijk overzicht?',
  },
  {
    title: 'Praktische IT-ondersteuning',
    status: 'Dagelijkse werkzaamheden',
    contribution: 'Ik ondersteun gebruikers bij IT-vragen, behandel TOPdesk-meldingen en installeer laptops en telefoons zodat collega’s ermee aan het werk kunnen. Door mee te lopen met de strategisch adviseur leer ik de organisatie, processen en het werk van functioneel beheer beter kennen.',
    learning: 'Mijn leervraag: hoe vertaal ik een gebruikersvraag naar een duidelijke vervolgstap en herken ik wanneer afstemming met applicatiebeheer nodig is?',
  },
  {
    title: 'Automatisering verkennen',
    status: 'Ideeën en voorbereiding',
    contribution: 'Met Copilot-agents verken ik ideeën voor een kennisbankartikelgenerator en een functioneel-beheer-sparringspartner. Toepassing en resultaten zijn nog niet bevestigd.',
    learning: 'Mijn leervraag: welke ondersteuning helpt in de praktijk, en hoe houd ik de inhoud controleerbaar en de collega zelf aan het stuur?',
  },
];

const icons = [Network, Laptop, Sparkles];
const summaries = [
  'Applicaties, taken en vragen van collega’s verbinden tot een begrijpelijk overzicht.',
  'Gebruikers helpen met IT-vragen, meldingen en apparaten. Leren wanneer afstemming nodig is.',
  'Ideeën met Copilot-agents onderzoeken. Toepassing en resultaten zijn nog niet bevestigd.',
];

export function FitzLearning() {
  return (
    <Section id="fitz" bg="white" className="scroll-mt-36">
      <Reveal className="mb-12 max-w-3xl">
        <p className="eyebrow mb-5">FITZ · opdracht bij Riwis zorg en welzijn</p>
        <h2 className="section-title">Dicht bij de praktijk.<br />Blijven leren.</h2>
        <p className="section-intro">
          Sinds september 2026 werk ik als consultant zorg &amp; IT bij FITZ. Bij Riwis voer ik servicedesk- en ondersteunende IT-taken uit. Vanuit die praktijk ontwikkel ik mij richting functioneel beheer en procesverbetering.
        </p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {activities.map((activity, index) => {
          const Icon = icons[index];
          return (
          <Reveal as="article" key={activity.title} delay={index * 0.06} className="rounded-3xl bg-slate-50 p-7 md:p-8">
            <div className="mb-10 flex items-center justify-between text-brand-dark"><Icon size={32} strokeWidth={1.5} aria-hidden="true" /><span className="text-sm tabular-nums">0{index + 1}</span></div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-brand-dark">{activity.status}</p>
            <h3 className="mb-4 text-xl font-bold text-slate-900">{activity.title}</h3>
            <p className="leading-relaxed text-slate-600">{summaries[index]}</p>
            <details className="mt-6 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-700">
              <summary className="cursor-pointer font-semibold text-brand-dark">Mijn bijdrage en leervraag</summary>
              <p className="mt-4">{activity.contribution}</p>
              <p className="mt-4">{activity.learning}</p>
            </details>
          </Reveal>
          );
        })}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-500">
        Hier beschrijf ik mijn eigen bijdrage en leerproces. De projecten hieronder zijn mijn eigen experimenten, afzonderlijk van mijn opdracht bij Riwis.
      </p>
    </Section>
  );
}
