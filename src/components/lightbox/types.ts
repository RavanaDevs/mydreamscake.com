import type { GeneratedImage } from "@/generated/images";

/** One photo in the lightbox. Image data is resolved on the server (see lib/images.ts). */
export type LightboxPhoto = {
  image: GeneratedImage;
  alt: string;
  /** Short title shown under the photo; falls back to `alt`. */
  caption?: string;
};
