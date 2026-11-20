import Link from "next/link";

import { isCurrentPage, navItems } from "@/config/navigation";
import { cn } from "@/lib/cn";

type MobileNavProps = {
  id: string;
  pathname: string;
  /** Called when a link is chosen, so the menu can close. */
  onNavigate: () => void;
};

export function MobileNav({ id, pathname, onNavigate }: MobileNavProps) {
  return (
    <nav id={id} aria-label="Main" className="border-t border-gold/15 px-6 pt-4 pb-8 md:hidden">
      {navItems.map((item) => {
        const current = isCurrentPage(item, pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={current ? "page" : undefined}
            className={cn(
              "block border-b border-ivory/10 py-4 font-display text-2xl",
              current ? "text-champagne" : "text-ivory",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
