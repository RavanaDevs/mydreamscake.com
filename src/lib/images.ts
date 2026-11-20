import type { LightboxPhoto } from "@/components/lightbox/types";
import { site } from "@/config/site";
import { images, type GeneratedImage, type ImageName } from "@/generated/images";

export type { GeneratedImage as ImageData, ImageName };

/** Looks up an image from the generated manifest. Fails the build if it is missing. */
export function getImage(name: ImageName): GeneratedImage {
  const image = images[name] as GeneratedImage | undefined;
  if (!image) throw new Error(`Unknown image "${name}". Run \`npm run images\`.`);
  return image;
}

/** Absolute URL of an image's largest file, for sitemaps and structured data. */
export function absoluteImageUrl(name: ImageName) {
  return `${site.url}${getImage(name).full}`;
}

/** Resolves an image for the lightbox, which runs in the browser without the full manifest. */
export function lightboxPhoto(name: ImageName, alt: string, caption?: string): LightboxPhoto {
  return { image: getImage(name), alt, ...(caption && { caption }) };
}
