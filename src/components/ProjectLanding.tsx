import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import type { ProjectStory } from '../config/projectStories';

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{children}</p>;
}

export function ProjectLanding({ story }: { story: ProjectStory }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-brand">
            <ArrowLeft size={17} /> Terug naar leerportfolio
          </a>
          <a href={story.appHref} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 text-sm font-bold text-brand sm:inline-flex">
            Open app <ExternalLink size={16} />
          </a>
        </header>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
          <Eyebrow>{story.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{story.label}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">{story.summary}</p>
          <a href={story.appHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-bold text-white shadow-lg shadow-teal-500/20 transition-colors hover:bg-brand-dark">
            Open app <ArrowRight size={18} />
          </a>
        </section>

        <div className="mt-12 space-y-12">
          <section>
            <Eyebrow>Kern</Eyebrow>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold">Praktijkprobleem</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{story.problem.situation}</p>
                <p className="mt-4 border-t border-slate-100 pt-4 font-medium leading-relaxed text-slate-700">{story.problem.friction}</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold">Voor wie en wat zij nodig hebben</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{story.users.description}</p>
                <ul className="mt-5 space-y-3">
                  {story.users.needs.map((need) => (
                    <li key={need} className="flex gap-3 text-sm leading-relaxed text-slate-700"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" />{need}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          {story.process ? (
            <section className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
              <Eyebrow>Van probleem naar aanpak</Eyebrow>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {story.process.map((step, index) => (
                  <article key={step.title} className="rounded-2xl bg-slate-50 p-5">
                    <span className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">{index + 1}</span>
                    <h2 className="font-bold">{step.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <Eyebrow>Mijn analyse en keuzes</Eyebrow>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {story.choices.map((choice) => (
                <article key={choice.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h2 className="font-bold">{choice.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{choice.reason}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
            <Eyebrow>Prototype</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold">Zo werkt het in de app</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{story.prototype}</p>
            <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {story.workflow.map((step, index) => (
                <li key={step} className="rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                  <span className="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          {story.images.length > 0 ? (
            <section>
              <Eyebrow>Schermen uit de demo</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold">Schermen uit het leerprototype</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {story.images.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full bg-slate-50 object-contain object-center" />
                    <figcaption className="p-4 text-sm font-medium text-slate-600">{image.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {story.screenshotNote ? (
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">{story.screenshotNote}</p>
          ) : null}

          {story.ai ? (
            <section className="grid gap-6 rounded-3xl bg-slate-900 p-7 text-white md:grid-cols-2 md:p-9">
              <div>
                <Eyebrow>AI waar dat helpt</Eyebrow>
                <h2 className="mt-3 text-2xl font-bold">Wat AI doet — en wat niet</h2>
                <p className="mt-4 leading-relaxed text-slate-200">{story.ai.actual}</p>
                <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-slate-200"><strong className="text-white">Zonder AI: </strong>{story.ai.nonAi}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{story.ai.distinction}</p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-slate-900">
                <ShieldCheck className="text-brand" size={25} />
                <h2 className="mt-4 text-lg font-bold">Waar ik nog op wil letten</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{story.ai.privacy}</p>
                <p className="mt-4 border-t border-slate-200 pt-4 text-sm font-medium leading-relaxed text-slate-700">{story.ai.openPoint}</p>
              </div>
            </section>
          ) : null}

          <section className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Eyebrow>Als ik dit verder breng</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold">Wat nog nodig zou zijn</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{story.implementation.intro}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {story.implementation.questions.map((question) => (
                  <li key={question} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">{question}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <Eyebrow>Wat ik heb geleerd</Eyebrow>
              <ul className="mt-5 space-y-4">
                {story.learning.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-slate-700"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-brand/20 bg-brand-light/40 p-7 md:p-9">
            <Eyebrow>Status en volgende vraag</Eyebrow>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <h2 className="font-bold">Huidige status</h2>
                <p className="mt-2 leading-relaxed text-slate-700">{story.status.current}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600"><strong>Wat al werkt: </strong>{story.status.works}</p>
              </div>
              <div>
                <h2 className="font-bold">Nog open</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{story.status.prototype}</p>
                <p className="mt-4 rounded-2xl bg-white/80 p-4 font-medium leading-relaxed text-slate-800">{story.status.question}</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 p-7 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold">Zelf de huidige app bekijken?</h2>
            <p className="mt-2 max-w-xl text-slate-300">Deze pagina vertelt over vraag, keuzes en open stappen. De app opent afzonderlijk in een nieuw tabblad.</p>
          </div>
          <a href={story.appHref} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-900 transition-colors hover:bg-slate-100">
            Open app <ExternalLink size={17} />
          </a>
        </section>

        <footer className="py-10 text-sm text-slate-500">
          <a href="/" className="inline-flex items-center gap-2 font-bold text-brand"><CheckCircle2 size={16} /> Terug naar LuukCoolen.nl</a>
        </footer>
      </div>
    </main>
  );
}
