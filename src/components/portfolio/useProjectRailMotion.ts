import { useEffect, type RefObject } from 'react';

export function useProjectRailMotion(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const rail = ref.current;
    if (!rail) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let manual = false;
    let frame = 0;
    const stop = () => { manual = true; rail.classList.remove('rail-scroll-controlled'); };
    const paint = () => {
      frame = 0;
      if (manual || reduced.matches || innerWidth < 900) { rail.classList.remove('rail-scroll-controlled'); return; }
      const rect = rail.getBoundingClientRect();
      const distance = rail.scrollWidth - rail.clientWidth;
      if (distance <= 0 || rect.bottom < 0 || rect.top > innerHeight) return;
      rail.classList.add('rail-scroll-controlled');
      const progress = Math.max(0, Math.min(1, (innerHeight * .65 - rect.top) / (innerHeight * .95)));
      rail.scrollLeft = distance * progress;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    // Any deliberate interaction takes precedence until this page is reopened.
    const container = rail.parentElement!;
    container.addEventListener('pointerdown', stop);
    rail.addEventListener('wheel', stop, { passive: true });
    rail.addEventListener('keydown', stop);
    rail.addEventListener('focusin', stop);
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    const resize = new ResizeObserver(schedule); resize.observe(rail);
    paint();
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); rail.classList.remove('rail-scroll-controlled');
      container.removeEventListener('pointerdown', stop);
      rail.removeEventListener('wheel', stop); rail.removeEventListener('keydown', stop); rail.removeEventListener('focusin', stop);
      removeEventListener('scroll', schedule); removeEventListener('resize', schedule); reduced.removeEventListener('change', schedule);
    };
  }, [ref]);
}
