import { cn } from "@/lib/cn";

import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** "light" for sections on the dark ink background. */
  tone?: "dark" | "light";
  /** "start" left-aligns the heading, for split layouts. */
  align?: "center" | "start";
  /** Smaller title and tighter spacing, for summary bands. */
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  align = "center",
  compact = false,
}: SectionHeadingProps) {
  const light = tone === "light";
  const centered = align === "center";

  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "leading-tight",
          compact ? "mt-3 text-3xl sm:text-4xl" : "mt-4 text-4xl sm:text-5xl",
          light ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      <div className={cn("gold-rule", compact ? "mt-5" : "mt-6", centered && "mx-auto")} />
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed",
            light ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
