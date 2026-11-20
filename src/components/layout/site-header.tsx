"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";
import { orderLink, site } from "@/config/site";
import { navItems } from "@/content/home";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/cn";

import { MobileNav } from "./mobile-nav";

/** Fixed top bar: transparent over the hero, solid once the page scrolls or the menu opens. */
export function SiteHeader() {
  const scrolled = useScrolledPast(40);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || menuOpen
          ? "border-b border-gold/15 bg-ink/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#home" className="flex shrink-0 items-center" aria-label={`${site.name} — home`}>
          <Logo size={56} alt="" priority />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-ivory/80 transition-colors hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={orderLink.href} external variant="gold" size="sm">
            Order <span className="hidden sm:inline">Your Cake</span>
          </ButtonLink>
          <button
            type="button"
            className="text-ivory md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && <MobileNav id="mobile-nav" onNavigate={() => setMenuOpen(false)} />}
    </header>
  );
}
