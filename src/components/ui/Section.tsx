import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'light' | 'white' | 'dark';
}

export function Section({ id, className = '', children, bg = 'light' }: SectionProps) {
  const bgColors = {
    light: 'bg-slate-50',
    white: 'bg-white',
    dark: 'bg-slate-950 text-slate-50',
  };

  return (
    <section id={id} className={`portfolio-section ${bgColors[bg]} ${className}`}>
      <div className="portfolio-container">
        {children}
      </div>
    </section>
  );
}
