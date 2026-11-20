import type { Metadata } from "next";

import { AboutSection } from "@/components/home/about-section";
import { CollectionSection } from "@/components/home/collection-section";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowToOrderSection } from "@/components/home/how-to-order-section";
import { ReasonsSection } from "@/components/home/reasons-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FloatingOrderButton } from "@/components/layout/floating-order-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LightboxProvider } from "@/components/lightbox/lightbox-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { site } from "@/config/site";
import { homeStructuredData, share, shareImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Custom Birthday & Wedding Cakes` },
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    title: share.title,
    description: share.description,
    images: [
      {
        url: shareImage.url,
        secureUrl: shareImage.absoluteUrl,
        type: shareImage.type,
        width: shareImage.width,
        height: shareImage.height,
        alt: shareImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: share.title,
    description: share.description,
    images: [{ url: shareImage.url, alt: shareImage.alt }],
  },
};

export default function HomePage() {
  return (
    <LightboxProvider>
      <JsonLd data={homeStructuredData()} />
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-gold px-5 py-2.5 text-xs font-semibold tracking-[0.18em] text-ink uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <FeaturedSection />
        <ReasonsSection />
        <HowToOrderSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingOrderButton />
      <RevealObserver />
    </LightboxProvider>
  );
}
