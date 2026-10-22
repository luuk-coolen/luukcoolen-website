import { useEffect, useRef, useState } from 'react';
import { useProjectRailMotion } from './useProjectRailMotion';
import { portfolioStories } from './stories';
import { ChapterPicto } from './ChapterPicto';

export function ProjectShowcase() {
  const woon = portfolioStories.find(story => story.slug === 'woonbuddy')!;
  const images = [woon.media.overview, ...woon.media.examples];
  const [slide, setSlide] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  useProjectRailMotion(rail);
  const [edges, setEdges] = useState({ previous: false, next: false });
  const updateEdges = () => {
    const node = rail.current; if (!node) return;
    const previous = node.scrollLeft > 2, next = node.scrollLeft + node.clientWidth < node.scrollWidth - 2;
    setEdges(value => value.previous === previous && value.next === next ? value : { previous, next });
  };
  useEffect(() => { const observer = new ResizeObserver(updateEdges); if (rail.current) observer.observe(rail.current); updateEdges(); return () => observer.disconnect(); }, []);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * ((rail.current.firstElementChild?.getBoundingClientRect().width || 300) + 22), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  const cards = ['focusflow-remixed', 'mindflow', 'focusflow-personal', 'focusflow-bewind'];
  const copy: Record<string, string> = {
    'focusflow-remixed': 'Mijn gepubliceerde webapp voor dagstart, focus en reflectie. Een remix van Personal, dat zelf voortkwam uit mijn eerste Bewind-project.',
    'focusflow-personal': 'Een remix van Bewind voor mijn eigen planning, sollicitaties en projecten. Deze tussenstap werd de basis voor FocusFlow Remixed.',
    mindflow: 'Ik wilde onderzoeken hoe een coachgesprek bij één concrete situatie blijft. MindFlow verbindt het gesprek aan reflectie en een kleine vervolgstap.',
    'focusflow-bewind': 'Een van mijn eerste projecten, begonnen in AI Studio en later overgebracht naar Codex. De demo verkent overzicht en planning vanuit bewindvoering.',
  };
  const approach: Record<string, string> = {
    'focusflow-remixed': 'Ik verbind overzicht, kiezen, uitvoeren en terugkijken in één dagritme, met een afzonderlijke Werkmodus.',
    'focusflow-personal': 'Ik verbind dagstart en weekreview en beperk de keuze tot drie prioriteiten. Ik stel het ritme bij vanuit mijn eigen gebruik.',
    mindflow: 'Ik begin bij wat er is gebeurd en laat de gebruiker zelf kiezen welke invalshoek past. De toon en grenzen wil ik nog met anderen toetsen.',
    'focusflow-bewind': 'Ik volg de werkdag: signaleren, afwegen, voorbereiden en plannen. Ik houd de demo bewust kleiner dan een dossiersysteem.',
  };
  const boundaries: Record<string, string> = {
    'focusflow-remixed': 'Ik kies zelf mijn prioriteiten. De gepubliceerde app is beveiligd en bedoeld voor mijn eigen gebruik.',
    'focusflow-personal': 'De planning is een vaste workflow. Ik kies zelf mijn prioriteiten; de app neemt die afweging niet over.',
    mindflow: 'AI ondersteunt het gesprek. Suggesties blijven voorlopige werkhypotheses; de gebruiker beoordeelt wat past.',
    'focusflow-bewind': 'De demo ordent informatie en voorbereiding. De professionele afweging blijft bij de bewindvoerder; de planning is geen AI-advies.',
  };
  return <section className="projects section" id="voorbeelden" aria-labelledby="projects-title"><div className="wrap">
    <div className="section-heading reveal"><div><p className="label">03 · Eigen projecten</p><h2 id="projects-title">Wat ik maak.</h2></div><p>Zelfgebouwde hulpmiddelen en leerprototypes. Bekijk wat ik maak en lees verder op de projectpagina.</p></div>
    <article className="featured"><div className="reveal" data-direction="left"><p className="label">Begeleid wonen · leerprototype</p><h3>WoonBuddy</h3><p className="lead">Wat moet je regelen als je in een nieuwe kamer gaat wonen?</p><p>Je huurcontract bekijken, de huurbetaling regelen, weten wie je kunt bellen. Met WoonBuddy onderzoek ik hoe bewoners zulke praktische zaken in overzichtelijke stappen kunnen doorlopen.</p><div className="project-mini-process"><h4>Hoe ik te werk ging</h4><p>Ik groepeer praktische vragen op herkenbare onderwerpen en maak de vervolgstap aanklikbaar. De route wil ik nog met bewoners en begeleiders toetsen.</p><p className="project-boundary">Taken en begeleiding volgen vaste stappen. Alleen de aparte chat kan AI gebruiken voor extra uitleg.</p></div><div className="project-actions"><a className="primary" href={woon.href}>Lees het projectverhaal</a><a className="text-link" href={woon.appHref} target="_blank" rel="noopener noreferrer">Open de app</a></div></div>
      <div className="gallery reveal" data-direction="right" role="region" aria-label="WoonBuddy demoschermen" aria-roledescription="carrousel">
        <div className={`gallery-stage ${slide === 0 ? 'is-overview' : ''}`}><a className="project-image-link" href={woon.href} aria-label="Lees het projectverhaal van WoonBuddy"><img src={images[slide].src} alt={images[slide].alt} loading="lazy" /></a></div>
        <div className="gallery-footer"><div><p>{['Projectoverzicht', 'Woonstart', 'Activiteiten', 'Contact & hulp'][slide]}</p><span>{slide + 1} / {images.length}</span></div><div className="arrows"><button className="round" aria-label="Vorig WoonBuddy-scherm" onClick={() => setSlide(value => (value + 3) % 4)}>←</button><button className="round" aria-label="Volgend WoonBuddy-scherm" onClick={() => setSlide(value => (value + 1) % 4)}>→</button></div></div><p className="caption" aria-live="polite">{images[slide].alt}</p><p className="caption">Demo met fictieve bewonersgegevens.</p>
      </div></article>
    <div className="rail-heading"><h3>Meer projecten</h3>{(edges.previous || edges.next) && <div className="arrows"><button className="round" disabled={!edges.previous} aria-label="Vorige projecten" onClick={() => move(-1)}>←</button><button className="round" disabled={!edges.next} aria-label="Volgende projecten" onClick={() => move(1)}>→</button></div>}</div>
    <nav className="project-index" aria-label="Kies een projectverhaal">{portfolioStories.map(story => <a key={story.slug} href={story.href}>{story.label}</a>)}</nav>
    <div className="project-rail" ref={rail} onScroll={updateEdges} tabIndex={0} aria-label="Meer projecten; veeg of gebruik de pijltjes" onKeyDown={event => { if (event.target === event.currentTarget && ['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}>
      {cards.map(slug => { const story = portfolioStories.find(item => item.slug === slug)!; return <article className="project-card" key={slug}><div className="card-image"><a className="project-image-link" href={story.href} aria-label={`Lees het projectverhaal van ${story.label}`}><img src={story.media.examples[slug === 'focusflow-personal' ? 1 : 0].src} alt={story.media.examples[slug === 'focusflow-personal' ? 1 : 0].alt} loading="lazy" /></a></div><div className="card-copy"><p className="label">{story.projectKind || (slug === 'focusflow-personal' ? 'Eigen hulpmiddel in ontwikkeling' : 'Leerprototype')}</p><h3>{story.label}</h3><p>{copy[slug]}</p><div className="project-mini-process"><h4>Hoe ik te werk ging</h4><p>{approach[slug]}</p><p className="project-boundary">{boundaries[slug]}</p></div><div className="project-actions"><a className="primary" href={story.href}>Lees het projectverhaal</a><a className="text-link" href={story.appHref} target="_blank" rel="noopener noreferrer">Open de app</a></div></div></article>; })}
    </div></div></section>;
}

const lessons = [
  ['Van idee naar probleemanalyse', 'Ik onderzoek eerst waar iemand tegenaan loopt, wat het doel is en welke vraag echt opgelost moet worden.'],
  ['Van losse prompts naar sprints', 'Ik werk in kleine stappen, leg keuzes vast en toets eerder of een richting bruikbaar is.'],
  ['Van functionaliteit naar workflow', 'Een scherm werkt pas als volgorde, overdracht en handelingen logisch op elkaar aansluiten.'],
  ['Van AI gebruiken naar AI aansturen', 'AI versnelt het verkennen, maar goede vragen, kaders en controle bepalen de kwaliteit.'],
  ['Van prototype naar procesdenken', 'Ik kijk ook naar data, implementatie, adoptie en wat nodig is om iets bruikbaar te houden.'],
];

export function LearningChapter() {
  return <section className="learning section" id="leren" aria-labelledby="learning-title"><div className="wrap">
    <div className="learning-intro reveal"><div className="learning-intro-copy"><p className="label">04 · Leren · ontwikkeling</p><h2 id="learning-title">Wat deze projecten mij hebben geleerd.</h2><p>Door te bouwen en testen leerde ik dat een goede digitale oplossing niet bij technologie begint, maar bij de mensen die ermee werken. Daardoor werk ik nu minder vanuit losse functies en meer vanuit analyse, kleine stappen en tussentijds toetsen.</p><p>Ik kijk daarbij ook naar wat er ná het prototype nodig is: hoe gebruikers begrijpen wat een systeem doet, waar AI wel en niet wordt gebruikt, welke informatie zorgvuldig verwerkt moet worden en hoe een oplossing verantwoord in de praktijk kan landen.</p></div><figure className="learning-intro-art"><img src="/portfolio/leren-bijstellen.svg" alt="Illustratie van onderzoeken, een idee uitwerken en bijstellen" width="280" height="280" loading="lazy" /></figure></div>
    <div className="learning-grid restored-lessons">{lessons.map(([title, description], index) => <article className="learning-note reveal" key={title}><ChapterPicto index={index} /><h3>{title}</h3><p>{description}</p></article>)}</div>
    <p className="learning-source caption">Deze manier van werken versterkte mijn interesse in zorginnovatie: technologie niet als doel, maar als middel om mensen en hun werk beter te ondersteunen.</p>
  </div></section>;
}

export function ApproachChapter() {
  return <section className="process section" id="werkwijze" aria-labelledby="process-title"><div className="wrap process-layout"><div className="process-intro"><p className="label">05 · Werkwijze</p><h2 id="process-title">Van een vraag<br/>naar een scherm.</h2><p>WoonBuddy als voorbeeld: hoe maak je duidelijk wat er geregeld moet worden?</p><div className="process-art" aria-hidden="true"><div className="process-window"><div className="window-top"><i></i><i></i><i></i><span>Woonstart · bewonersdemo</span></div><div className="window-screen"><img src="/projects/woonbuddy-v2-source-woonstart.png" alt="" loading="lazy"/><div className="window-detail"><img src="/projects/woonbuddy-v2-source-woonstart.png" alt="" loading="lazy"/></div></div></div><div className="process-symbol symbol-one">?</div><div className="process-symbol symbol-two">≡</div><div className="process-symbol symbol-three">↗</div></div><p className="caption">Scroll verder om de ontwerpstappen te volgen.</p></div><div className="process-steps"><article className="process-step reveal"><span>01 · De vraag</span><h3>Wat is de volgende stap?</h3><p>Taken, afspraken en hulp komen op verschillende momenten voorbij. De bewoner moet terug kunnen vinden wat er geregeld moet worden.</p></article><article className="process-step reveal" data-direction="right"><span>02 · De keuze</span><h3>Groepeer op herkenbare onderwerpen.</h3><p>Woonstart krijgt onderwerpen zoals wonen, geldzaken en gezondheid. Daaronder staan de afzonderlijke onderdelen met hun status.</p></article><article className="process-step reveal"><span>03 · Het prototype</span><h3>Maak de route aanklikbaar.</h3><p>De bewonersdemo gebruikt voorbeeldgegevens. Daarmee kan ik de indeling en uitleg bekijken en aanpassen.</p></article><article className="process-step reveal" data-direction="right"><span>04 · Nog te toetsen</span><h3>Begrijpen bewoners de route?</h3><p>Met bewoners en begeleiders wil ik onderzoeken welke uitleg ontbreekt, of de navigatie begrijpelijk is en wie informatie mag zien of wijzigen. Deze toets is nog niet afgerond.</p></article></div></div></section>;
}
