import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Hero() {
  return (
    <header className="hero-stage">
      <div className="portfolio-container grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal className="relative z-10">
          <p className="eyebrow mb-7">Luuk Coolen · Leerportfolio</p>
          <h1 className="hero-title">Zorg slimmer organiseren.<br /><span className="text-brand-dark">Met oog voor mensen.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl">
            Ik verbind praktijkervaring met digitale workflows en AI. Als consultant zorg &amp; IT bij FITZ onderzoek ik wat mensen en hun werk verder helpt.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#fitz" className="button-primary">Werk en leren bij FITZ <ArrowUpRight size={18} /></a>
            <a href="#voorbeelden" className="button-secondary">Ontdek mijn projecten <ArrowDown size={18} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="hero-portrait">
          <div className="portrait-orbit" aria-hidden="true" />
          <figure className="relative">
            <img src="/luuk-coolen-portfolio.jpg" alt="Luuk Coolen" width={800} height={1000} fetchPriority="high" className="hero-photo" />
            <figcaption className="portrait-caption"><span className="status-dot" aria-hidden="true" />Zorg · IT · blijven leren</figcaption>
          </figure>
        </Reveal>
      </div>
      <div className="portfolio-container mt-12 flex items-center gap-3 text-xs font-medium text-slate-500 md:mt-16">
        <span className="h-px w-10 bg-brand/40" aria-hidden="true" /> Praktijkvragen. Eigen experimenten. Eerlijke leerpunten.
      </div>
    </header>
  );
}
