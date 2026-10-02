import { Maximize2 } from 'lucide-react';
import type { ProjectImage, ProjectMedia } from '../config/projectStories';

type GalleryProps = {
  media: ProjectMedia;
  title: string;
  onOpen: (images: ProjectImage[], initialIndex: number) => void;
};

export function ProjectOverview({ media, title, onOpen }: GalleryProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen([media.overview, ...media.examples], 0)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      aria-label={`Vergroot overzicht van ${title}`}
    >
      <img src={media.overview.src} alt={media.overview.alt} className="aspect-[3/2] w-full object-contain object-center" />
      <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm">
        <Maximize2 size={18} />
      </span>
    </button>
  );
}

export function ProjectExamples({ media, title, onOpen }: GalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {media.examples.map((image, index) => (
        <figure key={image.src} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => onOpen([media.overview, ...media.examples], index + 1)}
            className="group relative block w-full bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand"
            aria-label={`Vergroot voorbeeld van ${title}: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full object-contain object-center" />
            <span className="absolute bottom-2 right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm">
              <Maximize2 size={16} />
            </span>
          </button>
          <figcaption className="p-3 text-sm leading-relaxed text-slate-600">{image.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectGallery(props: GalleryProps) {
  return (
    <div>
      <ProjectOverview {...props} />
      <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-widest text-slate-400">Meer voorbeelden</p>
      <ProjectExamples {...props} />
    </div>
  );
}
