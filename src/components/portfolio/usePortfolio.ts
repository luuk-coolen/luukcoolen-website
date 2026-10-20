import { useEffect } from 'react';

export function useScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const reveals = [...document.querySelectorAll<HTMLElement>('.reveal')];
    const entrances = reveals.map(node => ({ node, hero: !!node.closest('.hero, .story-hero') }));
    const updatePreference = () => root.classList.toggle('js-motion', !reduced.matches);
    updatePreference();
    reduced.addEventListener('change', updatePreference);
    let frame = 0;
    let previousScroll = scrollY;
    let previousTime = performance.now();
    let downward = true;
    const paint = () => {
      frame = 0;
      const now = performance.now();
      const movement = scrollY - previousScroll;
      const delta = Math.abs(movement);
      if (movement !== 0) downward = movement > 0;
      const fast = delta > innerHeight * .4 || (delta > 64 && delta / Math.max(16, now - previousTime) > 3);
      // Down: begin near the screen's centre. Up: preserve the earlier entrance.
      // Read all bounds first so class writes don't cause repeated layout work.
      const bounds = entrances.map(entry => ({ ...entry, box: entry.node.getBoundingClientRect() }));
      bounds.forEach(({ node, hero, box }) => {
        if (box.top >= innerHeight + 40 || box.bottom <= -40) {
          node.classList.remove('in-view', 'motion-immediate');
        } else if (box.bottom > (downward ? 0 : -40) && box.top < (hero || !downward ? innerHeight + 40 : innerHeight * .55)) {
          // Passed-over content stays readable after a large jump.
          if (fast && box.top < 0 && !node.classList.contains('in-view')) node.classList.add('motion-immediate');
          node.classList.add('in-view');
        }
      });
      previousScroll = scrollY;
      previousTime = now;
      const travel = root.scrollHeight - innerHeight;
      root.style.setProperty('--progress', String(travel > 0 ? scrollY / travel : 0));
      const chapter = document.querySelector<HTMLElement>('#werkwijze');
      if (chapter) {
        const box = chapter.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (innerHeight * .7 - box.top) / box.height));
        chapter.style.setProperty('--chapter', reduced.matches ? '0.5' : String(progress));
      }
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(node => {
        const box = node.parentElement!.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - box.top - box.height / 2) / innerHeight));
        node.style.setProperty('--parallax', reduced.matches ? '0px' : `${progress * Number(node.dataset.parallax) * (innerWidth < 700 ? .45 : 1)}px`);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const nav = document.querySelector('.topbar');
    const resize = new ResizeObserver(() => {
      root.style.setProperty('--nav-height', `${nav?.getBoundingClientRect().height || 0}px`);
      schedule();
    });
    if (nav) resize.observe(nav);
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    paint();
    // Direct chapter links arrive before React has rendered their target.
    const hashFrame = requestAnimationFrame(() => {
      if (!location.hash) return;
      try { document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'instant', block: 'start' }); }
      catch { /* A malformed fragment must not prevent the page from rendering. */ }
    });
    return () => {
      resize.disconnect(); cancelAnimationFrame(frame); cancelAnimationFrame(hashFrame);
      reveals.forEach(node => node.classList.remove('motion-immediate'));
      removeEventListener('scroll', schedule); removeEventListener('resize', schedule);
      reduced.removeEventListener('change', updatePreference); root.classList.remove('js-motion');
    };
  }, []);
}

export function usePageMetadata(title: string, description: string, pathname: string) {
  useEffect(() => {
    document.documentElement.lang = 'nl'; document.title = title;
    const setMeta = (attribute: string, name: string, content: string) => {
      let node = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, name); document.head.append(node); }
      node.content = content;
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title); setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website'); setMeta('property', 'og:url', `https://luukcoolen.nl${pathname}`);
    setMeta('property', 'og:image', 'https://luukcoolen.nl/luuk-coolen-portfolio.jpg');
    setMeta('name', 'twitter:card', 'summary_large_image');
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
    canonical.href = `https://luukcoolen.nl${pathname}`;
  }, [title, description, pathname]);
}
