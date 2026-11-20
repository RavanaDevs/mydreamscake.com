import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const variants = {
  gold: "bg-gold text-ink hover:-translate-y-0.5 hover:bg-champagne",
  ghost: "border border-champagne/50 text-ivory hover:border-champagne hover:bg-ivory/5",
  dark: "bg-charcoal text-ivory hover:bg-ink",
  outline: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal/5",
} as const;

const sizes = {
  md: "px-7 py-3.5 tracking-[0.2em]",
  sm: "px-5 py-2.5 tracking-[0.18em]",
} as const;

type ButtonLinkProps = ComponentProps<"a"> & {
  href: string;
  variant: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Opens in a new tab (for WhatsApp, Facebook and other external sites). */
  external?: boolean;
};

/**
 * A link styled as the site's pill button. Links to other pages ("/gallery") use
 * next/link for instant navigation; external links open in a new tab.
 */
export function ButtonLink({
  href,
  variant,
  size = "md",
  external = false,
  className,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold uppercase transition",
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props} />
    );
  }
  if (href.startsWith("/")) return <Link href={href} className={classes} {...props} />;
  return <a href={href} className={classes} {...props} />;
}
