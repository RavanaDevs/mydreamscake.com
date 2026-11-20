import { cn } from "@/lib/cn";

import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** "light" for sections on the dark ink background. */
  tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, subtitle, tone = "dark" }: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-4xl leading-tight sm:text-5xl",
          light ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      <div className="mx-auto mt-6 gold-rule" />
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
