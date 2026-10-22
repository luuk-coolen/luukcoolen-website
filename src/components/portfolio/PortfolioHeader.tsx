import { useEffect, useRef } from 'react';
import { projectStories } from '../../config/projectStories';
import { projectLinks } from '../../config/projectLinks';
import { portfolioOrder } from './stories';

export function PortfolioHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const outside = (event: MouseEvent) => { if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false; };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.current?.open) { menu.current.open = false; menu.current.querySelector('summary')?.focus(); }
    };
    document.addEventListener('click', outside); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('click', outside); document.removeEventListener('keydown', escape); };
  }, []);
  return <header className="topbar"><nav className="wrap nav" aria-label="Hoofdnavigatie">
    <a className="wordmark" href="#intro">Luuk Coolen<span>.</span></a>
    <div className="nav-links"><a href="#fitz">Werk bij FITZ</a><a href="#missie">Missie</a>
      <details className="more-projects" ref={menu}><summary>Projecten</summary><div className="project-menu"><p className="label">Portfolio-projecten</p>
        {portfolioOrder.map(slug => {
          const story = projectStories.find(item => item.slug === slug)!;
          const description = projectLinks.find(project => project.href === story.appHref)?.description;
          return <a key={slug} href={story.appHref} target="_blank" rel="noopener noreferrer"><span>{story.label}</span>{description && <small>{description}</small>}</a>;
        })}<details className="development-projects"><summary>In ontwikkeling</summary><div>
          {projectLinks.filter(project => project.section !== 'portfolio').map(project => <a key={project.href} href={project.href} target="_blank" rel="noopener noreferrer"><span>{project.label}</span>{project.description && <small>{project.description}</small>}</a>)}
        </div></details><a className="all-projects" href="#voorbeelden" onClick={() => { if (menu.current) menu.current.open = false; }}>Alle projecten bekijken</a>
      </div></details><a href="#leren">Leren</a><a href="#werkwijze">Werkwijze</a><a href="#over-mij">Over mij</a><a className="nav-contact" href="#contact">Contact</a>
    </div></nav><div className="reading-progress" aria-hidden="true" /></header>;
}
