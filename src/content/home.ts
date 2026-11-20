import { Heart, Palette, PartyPopper, Sparkles, type LucideIcon } from "lucide-react";

import type { ImageName } from "@/generated/images";

/** Any image from src/assets/images/ except the logo. */
export type PhotoName = Exclude<ImageName, "logo">;
export type Photo = { image: PhotoName; alt: string };

// Sample photos: replace the files in src/assets/images/ with the shop's real cakes,
// and keep each description below in sync with what the photo actually shows
// (used as alt text by search engines and screen readers).
export const photos = {
  hero: { image: "cake-hero", alt: "Three-tier ivory cake with gold leaf and fresh roses" },
  birthday: {
    image: "cake-birthday",
    alt: "Pastel rainbow birthday cake with buttercream swirls and a Happy Birthday topper",
  },
  wedding: {
    image: "cake-wedding",
    alt: "Ivory two-tier wedding cake with sugar roses and pearls",
  },
  chocolate: {
    image: "cake-chocolate",
    alt: "Chocolate drip cake with gold macarons and fresh berries",
  },
} as const satisfies Record<string, Photo>;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Cakes", href: "#cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const collection: readonly (Photo & { name: string; description: string })[] = [
  {
    name: "Birthday Cakes",
    description: "Playful, colourful designs for every age.",
    ...photos.birthday,
  },
  {
    name: "Wedding Cakes",
    description: "Timeless tiers for the most important day.",
    ...photos.wedding,
  },
  {
    name: "Celebration Cakes",
    description: "Rich, indulgent cakes for life's big moments.",
    ...photos.chocolate,
  },
  {
    name: "Custom Cakes",
    description: "Your idea, shaped into something beautiful.",
    ...photos.hero,
  },
];

export const featured = {
  main: { ...photos.chocolate, caption: "Chocolate, berries & gold" },
  side: [
    { ...photos.wedding, caption: "Pearls & sugar roses" },
    { ...photos.birthday, caption: "A rainbow birthday" },
  ],
} as const;

export const reasons: readonly { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "Beautiful Designs",
    description: "Cakes made to be the centrepiece of the table.",
  },
  {
    icon: Palette,
    title: "Personalised",
    description: "Shaped around your theme, colours and ideas.",
  },
  {
    icon: PartyPopper,
    title: "Every Occasion",
    description: "Birthdays, weddings, anniversaries and more.",
  },
  { icon: Heart, title: "Made with Love", description: "Care and attention in every detail." },
];

export const orderSteps = [
  { title: "Explore", description: "Browse cake designs and find inspiration." },
  {
    title: "Share Your Idea",
    description: "Contact the shop with your preferred design, occasion, size, and requirements.",
  },
  {
    title: "Confirm Your Order",
    description:
      "Discuss availability, pricing, pickup or delivery, and finalise directly with the shop.",
  },
] as const;

/** Add only genuine customer reviews. While empty, the section links to Facebook reviews. */
export const testimonials: readonly { quote: string; name?: string; source?: string }[] = [];

export const galleryPhotos: readonly Photo[] = [
  photos.hero,
  photos.birthday,
  photos.chocolate,
  photos.wedding,
  photos.chocolate,
  photos.birthday,
];
