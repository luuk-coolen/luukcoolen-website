const personalLabels = [
  ['Weekfocus', 'Dagstart', 'Terugblik'],
  ['Alles wat speelt', 'Kies maximaal 3', 'De rest kan wachten'],
  ['Huidige taak', 'Nieuw idee', 'Parkeerplaats'],
];

const projectLabels: Record<string, string[][]> = {
  'focusflow-personal': personalLabels,
  woonbuddy: [['Woonstart', 'Taken', 'Ontwikkeling'], ['Taak', 'Vaste stappen', 'Eigen tempo'], ['Vraag', 'Contact', 'Begeleiding']],
  mindflow: [['Situatie', 'Gesprek', 'Reflectie'], ['Observatie', 'Hypothese?', 'Zelf toetsen'], ['Herkenbaar?', 'Zelf kiezen', 'Vervolgstap']],
  'focusflow-bewind': [['Signalen', 'Afwegen', 'Plannen'], ['Informatie', 'Context', 'Eigen oordeel'], ['Overzicht', 'Voorbereiden', 'Top 3']],
};

export function ProjectDesignVisual({ index, slug, caption }: { index: number; slug: string; caption: string }) {
  const words = projectLabels[slug]?.[index];
  if (!words) return null;
  return <figure className={`personal-design-visual personal-design-${index}`} aria-label={`Ontwerpschema: ${words.join(', ')}`}>
    <svg viewBox="0 0 360 210" role="img" aria-label={`Ontwerpschema: ${words.join(', ')}`}>
      <rect x="0" y="0" width="360" height="210" rx="18" fill="#deedf5" />
      {words.map((word, i) => <g key={word}>
        <rect x={index === 1 ? 65 : 24 + i * 104} y={index === 1 ? 34 + i * 49 : i === 1 ? 54 : 95} width={index === 1 ? 230 : 94} height="39" rx="10" fill={i === 0 ? '#17657c' : '#f8fbfd'} />
        <text x={index === 1 ? 180 : 71 + i * 104} y={index === 1 ? 59 + i * 49 : i === 1 ? 79 : 120} textAnchor="middle" fill={i === 0 ? '#fff' : '#17657c'} fontSize="12" fontFamily="Arial, sans-serif">{word}</text>
      </g>)}
      {index !== 1 && <path d="M118 112c12 0 12-39 24-39M222 73c12 0 12 39 24 39" fill="none" stroke="#86aebb" strokeWidth="2" />}
    </svg>
    <figcaption>{caption}</figcaption>
  </figure>;
}
