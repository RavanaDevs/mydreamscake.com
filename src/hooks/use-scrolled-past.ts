import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled more than `offset` pixels. Always false on the server. */
export function useScrolledPast(offset: number) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > offset,
    () => false,
  );
}
