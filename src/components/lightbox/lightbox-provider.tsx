"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

import type { Photo } from "@/content/home";

import { LightboxDialog } from "./lightbox-dialog";

type OpenLightbox = (photos: readonly Photo[], index: number) => void;

const LightboxContext = createContext<OpenLightbox | null>(null);

/** Holds the one lightbox for the page. Wrap the content that contains <LightboxTrigger>s. */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ photos: readonly Photo[]; index: number } | null>(null);

  const open = useCallback<OpenLightbox>((photos, index) => setState({ photos, index }), []);
  const close = useCallback(() => setState(null), []);
  const navigate = useCallback(
    (index: number) => setState((current) => current && { ...current, index }),
    [],
  );

  return (
    <LightboxContext value={open}>
      {children}
      {state && (
        <LightboxDialog
          photos={state.photos}
          index={state.index}
          onNavigate={navigate}
          onClose={close}
        />
      )}
    </LightboxContext>
  );
}

export function useLightbox() {
  const open = useContext(LightboxContext);
  if (!open) throw new Error("useLightbox must be used inside <LightboxProvider>");
  return open;
}
