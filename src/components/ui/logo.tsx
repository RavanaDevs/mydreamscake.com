import { site } from "@/config/site";
import { cn } from "@/lib/cn";

import { Picture } from "./picture";

type LogoProps = {
  /** Rendered size in CSS pixels (square). Picks the right file for the screen density. */
  size: number;
  className?: string;
  /** Pass "" for a purely decorative logo. */
  alt?: string;
  priority?: boolean;
};

export function Logo({ size, className, alt = `${site.name} logo`, priority }: LogoProps) {
  return (
    <Picture
      image="logo"
      alt={alt}
      sizes={`${size}px`}
      priority={priority}
      placeholder={false}
      aria-hidden={alt === "" || undefined}
      className={cn("object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}
