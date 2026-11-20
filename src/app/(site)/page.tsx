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
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/config/site";
import { homeStructuredData, pageMetadata, share, shareImage } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: { absolute: `${site.name} — Custom Birthday & Wedding Cakes` },
  description: site.description,
  path: "/",
  share,
  image: shareImage,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeStructuredData()} />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <FeaturedSection />
      <ReasonsSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
