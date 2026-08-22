import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import type { ProjectStory } from '../config/projectStories';

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
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{story.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{story.label}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">{story.summary}</p>
          <a href={story.appHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-bold text-white shadow-lg shadow-teal-500/20 transition-colors hover:bg-brand-dark">
            Open app <ArrowRight size={18} />
          </a>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold">Welk probleem ik onderzocht</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{story.problem}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold">Voor wie</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{story.audience}</p>
          </article>
        </section>

        <section className="mt-10 grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Workflow</p>
            <h2 className="mt-3 text-3xl font-bold">Van vraag naar volgende stap</h2>
            <ol className="mt-6 space-y-4">
              {story.workflow.map((step, index) => (
                <li key={step} className="flex gap-3 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <ShieldCheck className="text-brand" size={25} />
            <h2 className="mt-4 text-lg font-bold">AI en verantwoord gebruik</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{story.ai}</p>
            <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-600">{story.implementation}</p>
          </div>
        </section>

        {story.images.length > 0 ? (
          <section className="mt-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Actuele fictieve demo</p>
            <h2 className="mt-3 text-3xl font-bold">Schermen uit het leerprototype</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {story.images.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
                  <figcaption className="p-4 text-sm font-medium text-slate-600">{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {story.screenshotNote ? (
          <p className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">{story.screenshotNote}</p>
        ) : null}

        <section className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 p-7 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold">Zelf de huidige app bekijken?</h2>
            <p className="mt-2 max-w-xl text-slate-300">Deze pagina vertelt over het leerproces. De app opent afzonderlijk in een nieuw tabblad.</p>
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
