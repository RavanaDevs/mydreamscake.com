import { FacebookIcon } from "@/components/icons/facebook-icon";
import { LightboxTrigger } from "@/components/lightbox/lightbox-trigger";
import { ButtonLink } from "@/components/ui/button-link";
import { Picture } from "@/components/ui/picture";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { galleryPhotos } from "@/content/home";
import { cn } from "@/lib/cn";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-card py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={site.handle}
          title="Follow Our Sweet Journey"
          subtitle="Discover more of our creations and get inspired by the moments we help make special."
        />

        <div className="mt-16 columns-2 gap-4 md:columns-3">
          {galleryPhotos.map((photo, index) => (
            <LightboxTrigger
              // The sample gallery repeats photos, so the index keeps keys unique.
              key={`${photo.image}-${index}`}
              photos={galleryPhotos}
              index={index}
              aria-label={`Enlarge photo: ${photo.alt}`}
              className="group mb-4 block w-full overflow-hidden"
            >
              <Picture
                {...photo}
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 50vw"
                className={cn(
                  "w-full object-cover transition duration-700 group-hover:scale-105",
                  index % 3 === 0 ? "aspect-[3/4]" : "aspect-square",
                )}
              />
            </LightboxTrigger>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href={site.facebook} external variant="dark">
            <FacebookIcon className="size-4" /> Visit Our Facebook
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
