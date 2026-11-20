import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { galleryCakes } from "@/content/gallery";
import { homeWorkPhotos } from "@/content/home";
import { absoluteImageUrl } from "@/lib/images";
import { galleryShareImage, shareImage } from "@/lib/seo";

export const dynamic = "force-static";

/** Pages plus their photos (image sitemap), so Google Images can find every cake. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      images: [
        `${site.url}${shareImage.url}`,
        ...homeWorkPhotos.map((photo) => absoluteImageUrl(photo.image)),
      ],
    },
    {
      url: `${site.url}/gallery`,
      images: [
        `${site.url}${galleryShareImage.url}`,
        ...galleryCakes.flatMap((cake) => cake.photos.map(absoluteImageUrl)),
      ],
    },
  ];
}
