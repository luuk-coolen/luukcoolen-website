const drawings = [
  <><circle cx="21" cy="21" r="10"/><path d="m29 29 10 10M17 21h8M21 17v8"/></>,
  <><path d="M10 14h10v10H10zM28 24h10v10H28zM10 34h10v10H10zM20 19h8v10M28 29h-4v10h-4"/></>,
  <><rect x="7" y="17" width="10" height="14" rx="3"/><rect x="31" y="17" width="10" height="14" rx="3"/><path d="M17 24h14M21 19l5 5-5 5"/></>,
  <><rect x="9" y="13" width="27" height="24" rx="6"/><path d="M17 13V8M28 13V8M15 22h1M29 22h1M16 29h12M32 36l4 4 8-10"/></>,
  <><circle cx="12" cy="13" r="5"/><circle cx="36" cy="13" r="5"/><circle cx="24" cy="36" r="5"/><path d="M17 13h14M14 18l7 13M34 18l-7 13"/></>,
  <><circle cx="18" cy="14" r="6"/><path d="M7 35v-7a11 11 0 0 1 22 0v7M29 18h12v18H29M33 23h4M33 28h4M13 34h10"/></>,
];

/** Small explanatory vector pictograms, separate from the project screenshots. */
export function ChapterPicto({ index }: { index: number }) {
  return <span className="chapter-picto" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{drawings[index]}</svg></span>;
}
