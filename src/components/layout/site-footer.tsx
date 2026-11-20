import { FacebookIcon } from "@/components/icons/facebook-icon";
import { ExternalLink } from "@/components/ui/external-link";
import { Logo } from "@/components/ui/logo";
import { orderLink, site } from "@/config/site";
import { navItems } from "@/content/home";

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
          <ul className="space-y-2">
            {site.phone && (
              <li>
                Phone:{" "}
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-champagne">
                  {site.phone}
                </a>
              </li>
            )}
            {site.whatsapp && (
              <li>
                <ExternalLink href={orderLink.href} className="hover:text-champagne">
                  WhatsApp
                </ExternalLink>
              </li>
            )}
            {site.location && <li>{site.location}</li>}
            {site.hours && <li>{site.hours}</li>}
            <li>
              <ExternalLink
                href={site.facebook}
                className="inline-flex items-center gap-2 hover:text-champagne"
              >
                <FacebookIcon className="size-4" /> facebook.com/mydreamscakeshop
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      <p className="border-t border-ivory/10 py-6 text-center text-xs">
        © <CurrentYear buildYear={new Date().getFullYear()} /> {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
