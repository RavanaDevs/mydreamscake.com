import { Clock, MapPin, Phone } from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

import { FacebookIcon } from "@/components/icons/facebook-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ExternalLink } from "@/components/ui/external-link";
import { addressLine, site, whatsappHref } from "@/config/site";

/** Footer contact details. Each line appears only when its value is set in site config. */
export function ContactList() {
  return (
    <ul className="space-y-3">
      {site.phone && (
        <ContactItem icon={Phone}>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-champagne">
            {site.phone}
          </a>
        </ContactItem>
      )}
      {whatsappHref && (
        <ContactItem icon={WhatsAppIcon}>
          <ExternalLink href={whatsappHref} className="hover:text-champagne">
            Chat on WhatsApp
          </ExternalLink>
        </ContactItem>
      )}
      {addressLine && (
        <ContactItem icon={MapPin}>
          {site.mapsUrl ? (
            <ExternalLink href={site.mapsUrl} className="hover:text-champagne">
              {addressLine}
            </ExternalLink>
          ) : (
            <address className="not-italic">{addressLine}</address>
          )}
        </ContactItem>
      )}
      {site.hours && <ContactItem icon={Clock}>{site.hours}</ContactItem>}
      <ContactItem icon={FacebookIcon}>
        <ExternalLink href={site.facebook} className="hover:text-champagne">
          facebook.com/mydreamscakeshop
        </ExternalLink>
      </ContactItem>
    </ul>
  );
}

type ContactItemProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
};

function ContactItem({ icon: Icon, children }: ContactItemProps) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
      <span>{children}</span>
    </li>
  );
}
