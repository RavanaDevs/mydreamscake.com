import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { galleryPhotos } from "@/content/home";
import { images } from "@/generated/images";
import { shareImage } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Unique cake photos, so Google Images can find them.
  const photos = [...new Set(galleryPhotos.map((photo) => photo.image))].map(
    (name) => `${site.url}${images[name].src}`,
  );

  return [
    {
      url: `${site.url}/`,
      images: [shareImage.absoluteUrl, ...photos],
    },
  ];
}
