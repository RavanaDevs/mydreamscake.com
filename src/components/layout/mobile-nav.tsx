import { navItems } from "@/content/home";

type MobileNavProps = {
  id: string;
  /** Called when a link is chosen, so the menu can close. */
  onNavigate: () => void;
};

export function MobileNav({ id, onNavigate }: MobileNavProps) {
  return (
    <nav id={id} aria-label="Main" className="border-t border-gold/15 px-6 pt-4 pb-8 md:hidden">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="block border-b border-ivory/10 py-4 font-display text-2xl text-ivory"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
