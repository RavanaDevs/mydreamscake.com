import { Logo } from "@/components/ui/logo";
import { site } from "@/config/site";
import { navItems } from "@/content/home";

import { ContactList } from "./contact-list";
import { CurrentYear } from "./current-year";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 bg-ink text-ivory/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo size={96} />
          <p className="mt-3 font-script text-2xl text-champagne">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 eyebrow">Explore</p>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-champagne">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="mb-4 eyebrow">Contact</p>
          <ContactList />
        </div>
      </div>

      <p className="border-t border-ivory/10 py-6 text-center text-xs">
        © <CurrentYear buildYear={new Date().getFullYear()} /> {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
