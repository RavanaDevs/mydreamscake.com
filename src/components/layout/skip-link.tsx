/** Lets keyboard users jump past the header. Visible only when focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-[70] rounded-full bg-gold px-5 py-2.5 text-xs font-semibold tracking-[0.18em] text-ink uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Skip to content
    </a>
  );
}
