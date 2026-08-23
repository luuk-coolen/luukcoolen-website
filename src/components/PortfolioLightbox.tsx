import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type GalleryImage = {
  src: string;
  alt: string;
};

type PortfolioLightboxProps = {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
};

export function PortfolioLightbox({ images, initialIndex, onClose }: PortfolioLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && hasMultipleImages) {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
      if (event.key === 'ArrowRight' && hasMultipleImages) {
        setActiveIndex((index) => (index + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultipleImages, images.length, onClose]);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] h-dvh w-screen overflow-hidden bg-slate-950/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Afbeeldingengalerij: ${activeImage.alt}`}
      onClick={onClose}
    >
      <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg sm:right-6 sm:top-6"
          onClick={onClose}
          aria-label="Sluit galerij"
        >
          <X size={22} />
        </button>

        <div className="flex h-full w-full items-center justify-center px-14 pb-24 pt-14 sm:px-20 sm:pb-28 sm:pt-8">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[calc(100dvh-6rem)] max-w-[92vw] rounded-2xl bg-white object-contain shadow-2xl"
          />
        </div>

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg sm:left-5"
              onClick={showPrevious}
              aria-label="Vorige afbeelding"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg sm:right-5"
              onClick={showNext}
              aria-label="Volgende afbeelding"
            >
              <ChevronRight size={24} />
            </button>
          </>
        ) : null}

        <div className="absolute inset-x-0 bottom-2 z-10 px-3 sm:bottom-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-slate-950/75 px-2 py-2 shadow-lg backdrop-blur-sm sm:px-3">
            <div className="mb-1 flex min-w-0 items-center gap-2 px-1 text-xs text-white/80">
              <span className="shrink-0 font-semibold tabular-nums">{activeIndex + 1} / {images.length}</span>
              <span className="truncate">{activeImage.alt}</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-0.5" aria-label="Andere beelden in deze case">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`aspect-[3/2] h-10 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 p-1 sm:h-12 ${index === activeIndex ? 'border-brand' : 'border-transparent opacity-70'}`}
                  aria-label={`Toon afbeelding ${index + 1}: ${image.alt}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                >
                  <img src={image.src} alt="" className="h-full w-full object-contain object-center" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
