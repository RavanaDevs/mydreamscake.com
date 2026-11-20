import type { ReactNode } from "react";

import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { LightboxProvider } from "@/components/lightbox/lightbox-provider";
import { Logo } from "@/components/ui/logo";
import { RevealObserver } from "@/components/ui/reveal-observer";

/** Chrome shared by every content page: header, footer, WhatsApp button and photo viewer. */
export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <LightboxProvider>
      <SkipLink />
      <SiteHeader logo={<Logo size={56} alt="" priority />} />
      <main id="main">{children}</main>
      <SiteFooter />
      <FloatingWhatsAppButton />
      <RevealObserver />
    </LightboxProvider>
  );
}
