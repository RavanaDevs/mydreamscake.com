import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before fading in, in milliseconds. Use to stagger items in a row. */
  delay?: number;
  /** Element to render; use "li" inside lists to keep the markup valid. */
  as?: "div" | "li";
};

/**
 * Fades its content in when scrolled into view. A server component: the single
 * <RevealObserver> on the page does the watching, so each Reveal ships no JavaScript.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
