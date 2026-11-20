import { ArrowRight } from "lucide-react";

import { FacebookIcon } from "@/components/icons/facebook-icon";
import { LightboxTrigger } from "@/components/lightbox/lightbox-trigger";
import { ButtonLink } from "@/components/ui/button-link";
import { Picture } from "@/components/ui/picture";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { galleryPreview } from "@/content/home";
import { lightboxPhoto } from "@/lib/images";

/** A taste of recent work on the home page, leading to the full gallery. */
export function GallerySection() {
  const photos = galleryPreview.map((photo) => lightboxPhoto(photo.image, photo.alt));

  return (
    <section id="gallery" className="bg-card py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={site.handle}
          title="Follow Our Sweet Journey"
          subtitle="Discover more of our creations and get inspired by the moments we help make special."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryPreview.map((photo, index) => (
            <LightboxTrigger
              key={photo.image}
              photos={photos}
              index={index}
              aria-label={`Enlarge photo: ${photo.alt}`}
              className="group block w-full overflow-hidden"
            >
              <Picture
                image={photo.image}
                alt={photo.alt}
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 50vw"
                className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </LightboxTrigger>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/gallery" variant="dark">
            View Full Gallery <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href={site.facebook} external variant="outline">
            <FacebookIcon className="size-4" /> Visit Our Facebook
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
