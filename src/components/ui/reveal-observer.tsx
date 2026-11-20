"use client";

import { useEffect } from "react";

/** Adds `.is-visible` to every `.reveal` element as it scrolls into view. Mount once per page. */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
