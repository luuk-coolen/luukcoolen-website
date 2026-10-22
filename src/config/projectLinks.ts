export type ProjectLink = {
  label: string;
  href: string;
  description?: string;
  section: 'portfolio' | 'development' | 'more';
};

export const projectLinks: ProjectLink[] = [
  {
    label: 'FocusFlow Remixed',
    href: 'https://focusflow.luukcoolen.nl/',
    description: 'Dagstart, focus en reflectie',
    section: 'portfolio',
  },
  {
    label: 'FocusFlow Bewind',
    href: 'https://focusflow-bewind.luukcoolen.nl/',
    description: 'Vroeg leerproject · workflow en prioritering',
    section: 'portfolio',
  },
  {
    label: 'Woonbuddy',
    href: 'https://woonbuddy.luukcoolen.nl/',
    description: 'Wonen en begeleiding',
    section: 'portfolio',
  },
  {
    label: 'MindFlow',
    href: 'https://mindflow.luukcoolen.nl/',
    description: 'AI en reflectie',
    section: 'portfolio',
  },
  {
    label: 'FocusFlow Personal',
    href: 'https://focusflow-personal.luukcoolen.nl/',
    description: 'Persoonlijke structuur',
    section: 'portfolio',
  },
  {
    label: 'FitFlow',
    href: 'https://fitflow-tracker-759367249229.europe-west2.run.app',
    description: 'Fitness en voortgang',
    section: 'development',
  },
  {
    label: 'VibeAudit',
    href: 'https://ai.studio/apps/5ae532db-f9a9-4c28-a16c-0362ddfe2344',
    description: 'Nog niet publiek',
    section: 'development',
  },
  {
    label: 'Eerste Stap',
    href: 'https://luukcoolen.nl/eerstestap',
    description: 'Demo',
    section: 'development',
  },
  {
    label: 'Bruiloft Gasten',
    href: 'https://bruiloft-gasten-app-759367249229.us-west1.run.app',
    description: 'Gasten en planning',
    section: 'development',
  },
  {
    label: 'Midstar',
    href: 'https://midstar.ai.studio/',
    section: 'development',
  },
];
