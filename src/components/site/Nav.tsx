import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { nav, orderHref, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500",
      scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-gold/15" : "bg-transparent")}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#home" className="flex shrink-0 items-center" aria-label={site.name}>
          <img src={logo} alt={`${site.name} logo`} className="h-14 w-14 object-contain" />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm tracking-wide text-ivory/80 transition-colors hover:text-champagne">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={orderHref()} target="_blank" rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-champagne">
            Order <span className="hidden sm:inline">Your Cake</span>
          </a>
          <button className="text-ivory md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-gold/15 px-6 pb-8 pt-4 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="block border-b border-ivory/10 py-4 font-display text-2xl text-ivory">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
