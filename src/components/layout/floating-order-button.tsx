import { MessageCircle } from "lucide-react";

import { ExternalLink } from "@/components/ui/external-link";
import { orderLink } from "@/config/site";

/** Always-visible order button on phones, where the header button is small. */
export function FloatingOrderButton() {
  return (
    <ExternalLink
      href={orderLink.href}
      aria-label="Order your cake"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-gold text-ink shadow-xl transition hover:bg-champagne md:hidden"
    >
      <MessageCircle className="size-6" />
    </ExternalLink>
  );
}
