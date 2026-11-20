"use client";

import { useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type FilterOption = { id: string; label: string; count: number };

type GalleryFilterProps = {
  options: readonly FilterOption[];
  total: number;
  /** The grid. Each item carries `data-gallery-item` and `data-category`. */
  children: ReactNode;
};

const chipClass =
  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition";

/**
 * Category buttons for the gallery. The tiles stay server-rendered: filtering just adds a
 * style rule that hides the other categories, so no tile data is sent to the browser.
 */
export function GalleryFilter({ options, total, children }: GalleryFilterProps) {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? total : (options.find((o) => o.id === active)?.count ?? 0);
  const all: FilterOption = { id: "all", label: "All", count: total };

  return (
    <>
      <div role="group" aria-label="Filter cakes" className="flex flex-wrap justify-center gap-2.5">
        {[all, ...options].map((option) => {
          const selected = option.id === active;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(option.id)}
              className={cn(
                chipClass,
                selected
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/15 text-charcoal hover:border-gold",
              )}
            >
              {option.label}
              <span className={selected ? "text-champagne" : "text-muted-foreground"}>
                {option.count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {shown} cakes
      </p>
      {active !== "all" && (
        <style>{`[data-gallery-item]:not([data-category="${active}"]){display:none}`}</style>
      )}

      {children}
    </>
  );
}
