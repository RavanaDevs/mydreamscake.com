"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The static HTML is built once, so it carries the build year; the browser swaps in the
 * current year after loading. Keeps the copyright line correct without a rebuild each January.
 */
export function CurrentYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => buildYear,
  );
  return <>{year}</>;
}
