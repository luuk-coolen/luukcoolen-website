import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { Hero } from './components/Hero';
import { Experiments } from './components/Experiments';
import { WhyProjects } from './components/WhyProjects';
import { Lessons } from './components/Lessons';
import { Approach } from './components/Approach';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Privacy } from './components/Privacy';
import { projectLinks } from './config/projectLinks';
import { getProjectStory } from './config/projectStories';
import { ProjectLanding } from './components/ProjectLanding';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
  const projectsMenuRef = useRef<HTMLDivElement>(null);
  const moreProjectLinks = projectLinks.filter((project) => project.section === 'more');
  const storyMatch = window.location.pathname.match(/^\/projecten\/([^/]+)\/?$/);
  const story = storyMatch ? getProjectStory(storyMatch[1]) : undefined;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!projectsMenuRef.current?.contains(event.target as Node)) {
        setIsProjectsOpen(false);
        setIsDevelopmentOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (story) return <ProjectLanding story={story} />;

  return (
    <div className="min-h-screen bg-mesh font-sans text-slate-900">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass z-50 rounded-2xl border-slate-200/50">
        <div className="px-4 md:px-10 h-16 flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-col">
            <span className="font-serif font-semibold text-lg tracking-tight text-slate-900 leading-none">Luuk Coolen</span>
            <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mt-1">Leerportfolio</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-500">
            <a href="#voorbeelden" className="hover:text-brand transition-colors">Voorbeelden</a>
            <a href="#missie" className="hover:text-brand transition-colors">Missie</a>
            <a href="#leren" className="hover:text-brand transition-colors">Leren</a>
            <a href="#werkwijze" className="hover:text-brand transition-colors">Werkwijze</a>
            <a href="#over-mij" className="hover:text-brand transition-colors">Over mij</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div ref={projectsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsProjectsOpen((isOpen) => !isOpen);
                  setIsDevelopmentOpen(false);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/75 px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-teal-200 hover:text-brand md:px-4"
                aria-expanded={isProjectsOpen}
                aria-haspopup="menu"
              >
                Projecten
                <ChevronDown size={16} className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProjectsOpen ? (
                <div
                  className="absolute right-0 top-full mt-3 max-h-[70vh] w-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10"
                  role="menu"
                >
                  <div className="py-2">
                    <p className="px-4 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Portfolio-projecten
                    </p>
                    {projectLinks
                      .filter((project) => project.section === 'portfolio')
                      .map((project) => (
                        <a
                          key={project.href}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setIsProjectsOpen(false);
                            setIsDevelopmentOpen(false);
                          }}
                          className="flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors hover:bg-brand-light"
                          role="menuitem"
                        >
                          <span>
                            <span className="block text-sm font-bold text-slate-800">{project.label}</span>
                            {project.description ? (
                              <span className="mt-0.5 block text-xs font-medium text-slate-500">{project.description}</span>
                            ) : null}
                          </span>
                          <ExternalLink size={15} className="shrink-0 text-slate-400" />
                        </a>
                      ))}

                    <div className="mt-2 border-t border-slate-100 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsDevelopmentOpen((isOpen) => !isOpen)}
                        className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-brand-light hover:text-brand"
                        aria-expanded={isDevelopmentOpen}
                        aria-controls="development-projects"
                      >
                        In ontwikkeling
                        <ChevronDown size={16} className={`transition-transform ${isDevelopmentOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isDevelopmentOpen ? (
                        <div id="development-projects">
                          {projectLinks
                            .filter((project) => project.section === 'development')
                            .map((project) => (
                              <a
                                key={project.href}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                  setIsProjectsOpen(false);
                                  setIsDevelopmentOpen(false);
                                }}
                                className="flex items-center justify-between gap-3 py-2.5 pl-6 pr-4 text-left transition-colors hover:bg-brand-light"
                                role="menuitem"
                              >
                                <span>
                                  <span className="block text-sm font-bold text-slate-800">{project.label}</span>
                                  {project.description ? (
                                    <span className="mt-0.5 block text-xs font-medium text-slate-500">{project.description}</span>
                                  ) : null}
                                </span>
                                <ExternalLink size={15} className="shrink-0 text-slate-400" />
                              </a>
                            ))}
                        </div>
                      ) : null}
                    </div>

                    {moreProjectLinks.length > 0 ? (
                      <div className="border-t border-slate-100 pt-2">
                        <p className="px-4 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Meer</p>
                        {moreProjectLinks.map((project) => (
                          <a
                            key={project.href}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setIsProjectsOpen(false);
                              setIsDevelopmentOpen(false);
                            }}
                            className="flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors hover:bg-brand-light"
                            role="menuitem"
                          >
                            <span>
                              <span className="block text-sm font-bold text-slate-800">{project.label}</span>
                              {project.description ? (
                                <span className="mt-0.5 block text-xs font-medium text-slate-500">{project.description}</span>
                              ) : null}
                            </span>
                            <ExternalLink size={15} className="shrink-0 text-slate-400" />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>

            <a href="#contact" className="text-sm font-bold bg-brand text-white px-4 py-2.5 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-teal-500/20 active:scale-95 md:px-5">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5 overflow-x-auto border-t border-slate-200/60 px-4 py-2 text-xs font-medium text-slate-500 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">
          <a href="#voorbeelden" className="shrink-0 hover:text-brand transition-colors">Voorbeelden</a>
          <a href="#missie" className="shrink-0 hover:text-brand transition-colors">Missie</a>
          <a href="#leren" className="shrink-0 hover:text-brand transition-colors">Leren</a>
          <a href="#werkwijze" className="shrink-0 hover:text-brand transition-colors">Werkwijze</a>
          <a href="#over-mij" className="shrink-0 hover:text-brand transition-colors">Over mij</a>
        </div>
      </nav>

      <main className="pt-24 md:pt-32">
        <Hero />
        <Experiments />
        <WhyProjects />
        <Lessons />
        <Approach />
        <About />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <p className="mb-2">&copy; {new Date().getFullYear()} Luuk Coolen. Leerportfolio rond zorginnovatie, procesverbetering en mensgerichte digitalisering.</p>
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
          className="inline-flex font-medium text-slate-300 transition-colors hover:text-white"
        >
          Privacy
        </button>
        <div className="flex justify-center gap-4 mt-4">
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div className="w-1 h-1 rounded-full bg-slate-700" />
        </div>
      </footer>

      {isPrivacyOpen ? <Privacy onClose={() => setIsPrivacyOpen(false)} /> : null}
      <Analytics />
    </div>
  );
}
