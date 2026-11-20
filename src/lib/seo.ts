import { site } from "@/config/site";

/** Title and description used for social share previews (WhatsApp, Facebook, X). */
export const share = {
  title: `${site.name} — Custom Cakes for Every Celebration`,
  description:
    "Beautifully crafted birthday, wedding and custom cakes, made with love for your most special moments.",
};

/**
 * Social preview image, 1200×630. Social apps cache it per URL: if you replace
 * public/og-image.jpg, rename it (or add ?v=2) so WhatsApp and Facebook fetch the new one.
 */
export const shareImage = {
  url: "/og-image.jpg",
  absoluteUrl: `${site.url}/og-image.jpg`,
  type: "image/jpeg",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

/** schema.org data describing the shop, rendered as JSON-LD on the home page. */
export function homeStructuredData() {
  const organizationId = `${site.url}/#organization`;
  const pageUrl = `${site.url}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": organizationId,
        name: site.name,
        slogan: site.tagline,
        description: site.description,
        url: pageUrl,
        logo: { "@type": "ImageObject", url: `${site.url}/icon-512.png`, width: 512, height: 512 },
        image: shareImage.absoluteUrl,
        sameAs: [site.facebook],
        ...(site.phone && { telephone: site.phone }),
        ...(site.location && { address: site.location }),
        ...(site.hours && { openingHours: site.hours }),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: pageUrl,
        inLanguage: "en",
        publisher: { "@id": organizationId },
      },
    ],
  };
}
