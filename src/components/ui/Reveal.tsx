import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type RevealProps = { children: ReactNode; key?: string; className?: string; as?: 'div' | 'article' | 'section'; delay?: number };

export function Reveal({ children, className, as = 'div', delay = 0 }: RevealProps) {
  const reduced = useReducedMotion();
  const Element = as === 'article' ? motion.article : as === 'section' ? motion.section : motion.div;
  return (
    <Element initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay }} className={className}>
      {children}
    </Element>
  );
}
