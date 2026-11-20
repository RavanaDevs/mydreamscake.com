"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { isCurrentPage, navItems } from "@/config/navigation";
import { orderLink, site } from "@/config/site";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/cn";

import { MobileNav } from "./mobile-nav";

type SiteHeaderProps = {
  /**
   * The logo, rendered on the server and passed in, so the image manifest it reads
   * never ships to the browser with this client component.
   */
  logo: ReactNode;
};

/** Fixed top bar: transparent over dark page tops, solid once the page scrolls or the menu opens. */
export function SiteHeader({ logo }: SiteHeaderProps) {
  const scrolled = useScrolledPast(40);
  const pathname = usePathname();
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
        <Link
          href="/#home"
          className="flex shrink-0 items-center"
          aria-label={`${site.name} — home`}
        >
          {logo}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const current = isCurrentPage(item, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-champagne",
                  current ? "text-champagne" : "text-ivory/80",
                )}
              >
                {item.label}
              </Link>
            );
          })}
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

      {menuOpen && (
        <MobileNav id="mobile-nav" pathname={pathname} onNavigate={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
