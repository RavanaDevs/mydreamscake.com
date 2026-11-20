import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const variants = {
  gold: "bg-gold text-ink hover:-translate-y-0.5 hover:bg-champagne",
  ghost: "border border-champagne/50 text-ivory hover:border-champagne hover:bg-ivory/5",
  dark: "bg-charcoal text-ivory hover:bg-ink",
} as const;

const sizes = {
  md: "px-7 py-3.5 tracking-[0.2em]",
  sm: "px-5 py-2.5 tracking-[0.18em]",
} as const;

type ButtonLinkProps = ComponentProps<"a"> & {
  variant: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Opens in a new tab (for WhatsApp, Facebook and other external sites). */
  external?: boolean;
};

/** A link styled as the site's pill button. */
export function ButtonLink({
  variant,
  size = "md",
  external = false,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold uppercase transition",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
