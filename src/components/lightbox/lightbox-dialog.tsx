"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from "react";

import { ResponsiveImage } from "@/components/ui/responsive-image";

import type { LightboxPhoto } from "./types";

type LightboxDialogProps = {
  photos: readonly LightboxPhoto[];
  index: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

const controlClass =
  "grid size-12 place-items-center rounded-full text-ivory/80 transition hover:bg-ivory/10 hover:text-ivory";

/**
 * Full-screen photo viewer built on the native <dialog>: Escape closes it, focus stays
 * inside while open and returns to the clicked photo afterwards. Arrow keys browse.
 */
export function LightboxDialog({ photos, index, onNavigate, onClose }: LightboxDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = photos[index];
  const hasMany = photos.length > 1;

  // Open as a modal on mount. Every close path goes through dialog.close(), which fires
  // `close` -> onClose -> unmount; no cleanup here, or StrictMode's re-run would close it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  if (!photo) return null;

  const close = () => dialogRef.current?.close();
  const step = (delta: number) => onNavigate((index + delta + photos.length) % photos.length);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!hasMany) return;
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  // Clicking the dark backdrop (anything but the photo or a control) closes the viewer.
  const handleClick = (event: MouseEvent) => {
    if (!(event.target as Element).closest("img, button")) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Photo viewer"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none bg-ink/95 p-6 text-ivory backdrop:bg-transparent open:grid open:place-items-center"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        autoFocus
        className={`${controlClass} absolute top-4 right-4`}
      >
        <X className="size-7" />
      </button>

      <figure className="flex flex-col items-center">
        <ResponsiveImage
          key={photo.image.src}
          image={photo.image}
          alt={photo.alt}
          sizes="100vw"
          priority
          placeholder={false}
          className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-4 max-w-xl text-center font-display text-lg text-champagne italic">
          {photo.caption ?? photo.alt}
          {hasMany && (
            <span className="mt-1 block font-sans text-xs tracking-[0.2em] text-ivory/50 not-italic">
              {index + 1} / {photos.length}
            </span>
          )}
        </figcaption>
      </figure>

      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className={`${controlClass} absolute top-1/2 left-2 -translate-y-1/2 sm:left-6`}
          >
            <ChevronLeft className="size-8" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className={`${controlClass} absolute top-1/2 right-2 -translate-y-1/2 sm:right-6`}
          >
            <ChevronRight className="size-8" />
          </button>
        </>
      )}
    </dialog>
  );
}
