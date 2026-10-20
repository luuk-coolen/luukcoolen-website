import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import type { ProjectImage } from '../../config/projectStories';

type Gallery = { images: ProjectImage[]; index: number; opener: HTMLElement | null };
const GalleryContext = createContext<(images: ProjectImage[], index: number) => void>(() => {});

export function PortfolioImages({ children }: { children: ReactNode }) {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  return <GalleryContext.Provider value={(images, index) => setGallery({ images, index, opener: document.activeElement instanceof HTMLElement ? document.activeElement : null })}>
    {children}{gallery && createPortal(<ZoomGallery gallery={gallery} close={() => setGallery(null)} />, document.body)}
  </GalleryContext.Provider>;
}

export function PortfolioImage({ media, images = [media], className = '', priority = false }: { media: ProjectImage; images?: ProjectImage[]; className?: string; priority?: boolean }) {
  const open = useContext(GalleryContext);
  return <button type="button" className={`image-open ${className}`} aria-label={`Vergroot: ${media.alt}`} onClick={() => open(images, Math.max(0, images.findIndex(item => item.src === media.src)))}>
    <img src={media.src} alt={media.alt} loading={priority ? 'eager' : 'lazy'} /><span className="image-expand" aria-hidden="true">⤢</span>
  </button>;
}

function ZoomGallery({ gallery, close }: { gallery: Gallery; close: () => void }) {
  const [index, setIndex] = useState(gallery.index);
  const [zoom, setZoom] = useState(1);
  const [fit, setFit] = useState(600);
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const media = gallery.images[index];
  const changeImage = (delta: number) => { setIndex(value => (value + delta + gallery.images.length) % gallery.images.length); setZoom(1); };
  const fitImage = () => {
    const img = image.current, box = viewport.current;
    if (!img?.naturalWidth || !box) return;
    setFit(Math.min(box.clientWidth - 24, (box.clientHeight - 24) * img.naturalWidth / img.naturalHeight, img.naturalWidth));
  };
  useEffect(() => {
    const opener = gallery.opener;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.current?.open) dialog.current?.showModal();
    const resize = new ResizeObserver(fitImage);
    if (viewport.current) resize.observe(viewport.current);
    return () => { resize.disconnect(); document.body.style.overflow = overflow; if (opener?.isConnected) opener.focus({ preventScroll: true }); };
  }, []);
  useEffect(() => { viewport.current?.scrollTo(0, 0); }, [index]);
  return <dialog ref={dialog} className="image-viewer react-viewer" aria-label="Vergrote projectafbeelding" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === dialog.current) close(); }} onKeyDown={event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); changeImage(event.key === 'ArrowLeft' ? -1 : 1); }
  }}>
    <div className="image-toolbar">
      <button className="round" aria-label="Vorig beeld" disabled={gallery.images.length < 2} onClick={() => changeImage(-1)}>←</button>
      <button className="round" aria-label="Volgend beeld" disabled={gallery.images.length < 2} onClick={() => changeImage(1)}>→</button>
      <button className="round" aria-label="Uitzoomen" disabled={zoom <= 1} onClick={() => setZoom(value => Math.max(1, value / 1.5))}>−</button>
      <button className="round" aria-label="Inzoomen" disabled={zoom >= 8} onClick={() => setZoom(value => Math.min(8, value * 1.5))}>+</button>
      <button className="round" onClick={() => { setZoom(1); viewport.current?.scrollTo(0, 0); }}>Passend</button>
      <button className="round" aria-label="Sluit afbeelding" autoFocus onClick={close}>×</button>
    </div>
    <p className="image-status" aria-live="polite">{index + 1} / {gallery.images.length} · {media.alt} · {Math.round(zoom * 100)}% van passend</p>
    <div ref={viewport} className="image-viewport" tabIndex={0} aria-label="Vergrote afbeelding: scroll of sleep om het beeld te verplaatsen"
      onPointerDown={event => {
        if (zoom <= 1 || event.pointerType !== 'mouse') return;
        event.preventDefault(); const box = event.currentTarget;
        drag.current = { x: event.clientX, y: event.clientY, left: box.scrollLeft, top: box.scrollTop }; box.setPointerCapture(event.pointerId);
      }} onPointerMove={event => {
        if (!drag.current) return;
        event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
        event.currentTarget.scrollTop = drag.current.top - (event.clientY - drag.current.y);
      }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}>
      <img ref={image} src={media.src} alt={media.alt} draggable={false} onLoad={fitImage} style={{ width: fit * zoom, height: 'auto' }} />
    </div>
  </dialog>;
}
