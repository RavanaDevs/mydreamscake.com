import { getImage, type ImageName } from "@/lib/images";

import { ResponsiveImage, type ResponsiveImageProps } from "./responsive-image";

type PictureProps = Omit<ResponsiveImageProps, "image"> & {
  /** Image name: the file path under src/assets/images/ without extension. */
  image: ImageName;
};

/** Server-side shorthand for <ResponsiveImage> that looks the image up by name. */
export function Picture({ image, ...props }: PictureProps) {
  return <ResponsiveImage image={getImage(image)} {...props} />;
}
