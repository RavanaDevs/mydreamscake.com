"use client";

import type { ComponentProps } from "react";

import type { LightboxPhoto } from "./types";

import { useLightbox } from "./lightbox-provider";

type LightboxTriggerProps = Omit<ComponentProps<"button">, "onClick" | "type"> & {
  /** The set of photos the viewer can browse through. */
  photos: readonly LightboxPhoto[];
  /** Which photo to open first. */
  index: number;
};

/** A button that opens the page lightbox. Its children (usually a <Picture>) stay server-rendered. */
export function LightboxTrigger({ photos, index, ...props }: LightboxTriggerProps) {
  const open = useLightbox();

  return (
    <button type="button" aria-haspopup="dialog" onClick={() => open(photos, index)} {...props} />
  );
}
