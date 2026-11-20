import type { Metadata } from "next";

import { site } from "@/config/site";
import type { GalleryCake } from "@/content/gallery";

import { absoluteImageUrl, getImage } from "./images";

type Share = { title: string; description: string };
type ShareImage = { url: string; width: number; height: number; alt: string };

/** Title and description used for social share previews (WhatsApp, Facebook, X). */
export const share: Share = {
  title: `${site.name} — Custom Cakes for Every Celebration`,
  description:
    "Beautifully crafted birthday, wedding and custom cakes, made with love for your most special moments.",
};

/**
 * Social preview images, 1200×630. Social apps cache them per URL: if you replace one,
 * rename it (or add ?v=2) so WhatsApp and Facebook fetch the new one.
 */
export const shareImage: ShareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

export const galleryShare: Share = {
  title: `Cake Gallery — ${site.name}`,
  description:
    "Real cakes from our kitchen in Galgamuwa: kids' birthday cakes, cakes for her and him, wedding and anniversary cakes, and party setups.",
};

/** Built from real cakes by `npm run photos:import`. */
export const galleryShareImage: ShareImage = {
  url: "/og-gallery.jpg",
  width: 1200,
  height: 630,
  alt: `Three cakes made by ${site.name}`,
};

const absolute = (path: string) => `${site.url}${path}`;
const organizationId = absolute("/#organization");
const websiteId = absolute("/#website");

/** Page metadata with canonical URL and matching Open Graph / X share previews. */
export function pageMetadata({
  title,
  description,
  path,
  share,
  image,
}: {
  title: Metadata["title"];
  description: string;
  path: string;
  share: Share;
  image: ShareImage;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      siteName: site.name,
      url: path,
      title: share.title,
      description: share.description,
      images: [{ ...image, secureUrl: absolute(image.url), type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: share.title,
      description: share.description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

/** schema.org data describing the shop, rendered as JSON-LD on the home page. */
export function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": organizationId,
        name: site.name,
        slogan: site.tagline,
        description: site.description,
        url: absolute("/"),
        logo: { "@type": "ImageObject", url: absolute("/icon-512.png"), width: 512, height: 512 },
        image: absolute(shareImage.url),
        sameAs: [site.facebook],
        ...(site.phone && { telephone: site.phone.replace(/\s/g, "") }),
        ...(site.address.locality && {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.locality,
            addressLocality: site.address.city,
            addressCountry: site.address.countryCode,
          },
        }),
        ...(site.mapsUrl && { hasMap: site.mapsUrl }),
        ...(site.hours && { openingHours: site.hours }),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: absolute("/"),
        inLanguage: "en",
        publisher: { "@id": organizationId },
      },
    ],
  };
}

/** schema.org data for the gallery: an image gallery of every cake, plus breadcrumbs. */
export function galleryStructuredData(cakes: readonly GalleryCake[]) {
  const pageUrl = absolute("/gallery");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "ImageGallery"],
        "@id": `${pageUrl}#gallery`,
        url: pageUrl,
        name: galleryShare.title,
        description: galleryShare.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        image: cakes.map((cake) => {
          const cover = cake.photos[0]!;
          const { width, height } = getImage(cover);
          return {
            "@type": "ImageObject",
            contentUrl: absoluteImageUrl(cover),
            name: cake.title,
            caption: cake.description,
            width,
            height,
            creator: { "@id": organizationId },
            copyrightHolder: { "@id": organizationId },
          };
        }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
          { "@type": "ListItem", position: 2, name: "Gallery", item: pageUrl },
        ],
      },
    ],
  };
}
