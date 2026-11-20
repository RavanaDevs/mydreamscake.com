import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ExternalLink } from "@/components/ui/external-link";
import { whatsappHref } from "@/config/site";

/**
 * WhatsApp chat button pinned to the bottom-right corner on every screen size.
 * Uses WhatsApp's own green so visitors recognise it instantly. Hidden when no number is set.
 */
export function FloatingWhatsAppButton() {
  if (!whatsappHref) return null;

  return (
    <ExternalLink
      href={whatsappHref}
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-ink/25 transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-ink px-4 py-2 text-xs font-medium tracking-wide whitespace-nowrap text-ivory opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Chat with us
      </span>
    </ExternalLink>
  );
}
