import { Images } from "lucide-react";

import { LightboxTrigger } from "@/components/lightbox/lightbox-trigger";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { categoryLabel, type GalleryCake } from "@/content/gallery";
import { getImage, lightboxPhoto } from "@/lib/images";

const TILE_SIZES =
  "(min-width: 1280px) 300px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw";

/** One cake in the gallery grid: its cover photo, title and category. Opens all its photos. */
export function GalleryTile({ cake }: { cake: GalleryCake }) {
  const photos = cake.photos.map((name) => lightboxPhoto(name, cake.description, cake.title));
  const cover = getImage(cake.photos[0]!);
  const count = photos.length;

  return (
    <LightboxTrigger
      photos={photos}
      index={0}
      data-gallery-item=""
      data-category={cake.category}
      aria-label={`View ${cake.title}${count > 1 ? `, ${count} photos` : ""}`}
      className="group mb-8 block w-full break-inside-avoid text-left"
    >
      <div className="relative overflow-hidden">
        <ResponsiveImage
          image={cover}
          alt={cake.description}
          sizes={TILE_SIZES}
          className="h-auto w-full transition duration-700 group-hover:scale-105"
        />
        {count > 1 && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-ivory backdrop-blur-sm">
            <Images className="size-3.5" aria-hidden />
            {count}
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-xl leading-snug text-charcoal">{cake.title}</p>
      <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase">
        {categoryLabel(cake.category)}
      </p>
    </LightboxTrigger>
  );
}
