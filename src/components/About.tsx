import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Briefcase, ChevronRight, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <Section bg="light" id="over-mij">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Van praktijkervaring naar zorginnovatie</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Ik ben <span className="font-semibold text-slate-900">Luuk Coolen</span>. Vanaf september 2026 werk ik als consultant zorg &amp; IT bij FITZ. Ik heb ervaring als bewindvoerder en persoonlijk begeleider in de GGZ/LVB. Mijn basis ligt in het maatschappelijk werk.
          </p>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Mijn interesse in zorginnovatie ontstond op de werkvloer. Ik zag hoe onduidelijkheid, versnipperde gegevens of een slecht passend systeem direct invloed hebben op cliënten én professionals.
            </p>
            <p>
              Ik vind het interessant om zulke knelpunten uit te pluizen, terug te brengen tot een heldere vraag en ideeën vervolgens praktisch te testen. De projecten op deze site laten zien hoe ik daarin leer.
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-3d p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand/10 text-brand rounded-lg">
                <Briefcase size={20} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Praktijkervaring</h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'Consultant zorg & IT · FITZ',
                  desc: 'Vanaf september 2026: werken op het snijvlak van zorg, IT en procesverbetering.',
                },
                {
                  title: 'Bewindvoerder',
                  desc: 'Werken met complexe dossiers waarin informatie, prioriteiten, afspraken en besluitvorming zorgvuldig moeten samenkomen.',
                },
                {
                  title: 'Persoonlijk begeleider (GGZ / LVB)',
                  desc: 'Begeleiding van cliënten met psychische kwetsbaarheid en behoefte aan duidelijke stappen, overdracht en voorspelbaarheid.',
                },
                {
                  title: 'Vrijwilliger thuisadministratie',
                  desc: 'Ondersteunen bij overzicht in administratie, post, geldzaken en praktische vervolgstappen.',
                },
              ].map((job) => (
                <div key={job.title} className="group relative pl-6 border-l-2 border-slate-100 hover:border-brand transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-100 group-hover:border-brand transition-colors" />
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{job.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-3d p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand/10 text-brand rounded-lg">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Achtergrond</h3>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'HBO Maatschappelijk Werk',
                'Zorginnovatie en procesverbetering',
                'Mensgerichte digitalisering',
                'AI-workflows en digitale ondersteuning',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 text-sm p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <ChevronRight size={14} className="text-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
