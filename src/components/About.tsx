import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Briefcase, ChevronRight, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <Section bg="light" id="over-mij">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <Reveal
        >
          <p className="eyebrow mb-5">Over mij</p>
          <h2 className="section-title mb-8">Van mensenwerk<br />naar zorg &amp; IT.</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Ik ben <span className="font-semibold text-slate-900">Luuk Coolen</span>. Vanaf september 2026 werk ik als consultant zorg &amp; IT bij FITZ. Mijn ervaring als bewindvoerder en persoonlijk begeleider in de GGZ/LVB vormt de praktijkbasis voor mijn werk; mijn basis ligt in het maatschappelijk werk.
          </p>
          <div className="text-slate-600 leading-relaxed text-lg">
            <p>
              Mijn interesse in digitalisering ontstond op de werkvloer. Ik zoek graag uit waar het vastloopt, breng dat terug tot een heldere vraag en test ideeën in de praktijk.
            </p>
          </div>
          <img src="/luuk-coolen-portfolio.jpg" alt="Luuk Coolen" width={800} height={1000} loading="lazy" className="mt-8 aspect-[4/3] w-full max-w-md rounded-3xl object-cover object-[48%_24%]" />
        </Reveal>

        <div className="space-y-10">
          <Reveal
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
          </Reveal>

          <Reveal
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
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
