import type { Metadata } from "next";

import { GalleryFilter } from "@/components/gallery/gallery-filter";
import { GalleryHeader } from "@/components/gallery/gallery-header";
import { GalleryTile } from "@/components/gallery/gallery-tile";
import { ContactSection } from "@/components/home/contact-section";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/config/site";
import { galleryCakes, galleryCategories } from "@/content/gallery";
import { galleryShare, galleryShareImage, galleryStructuredData, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: { absolute: `Cake Gallery — Custom Cakes in ${site.address.city} | ${site.name}` },
  description: galleryShare.description,
  path: "/gallery",
  share: galleryShare,
  image: galleryShareImage,
});

const filterOptions = galleryCategories
  .map(({ id, label }) => ({
    id,
    label,
    count: galleryCakes.filter((cake) => cake.category === id).length,
  }))
  .filter((option) => option.count > 0);

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryStructuredData(galleryCakes)} />
      <GalleryHeader cakeCount={galleryCakes.length} />

      <section aria-label="Cakes" className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryFilter options={filterOptions} total={galleryCakes.length}>
            <div className="mt-12 columns-2 gap-4 sm:gap-6 md:columns-3 lg:columns-4">
              {galleryCakes.map((cake) => (
                <GalleryTile key={cake.slug} cake={cake} />
              ))}
            </div>
          </GalleryFilter>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
