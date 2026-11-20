import { Heart, Palette, PartyPopper, Sparkles, type LucideIcon } from "lucide-react";

import type { ImageName } from "@/generated/images";

/** A photo plus its description (alt text for search engines and screen readers). */
export type Photo = { image: ImageName; alt: string };

// Styled photos for the hero, Our Story and Collection sections
// (src/assets/images/*.jpg). Keep each description in sync with what the photo shows.
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

// The shop's own cakes, without watermark (src/assets/images/landing/, imported with
// `npm run photos:import`). The watermarked set is used on the gallery page.
const work = {
  dragonRainbow: {
    image: "landing/dragon-rainbow",
    alt: "White cake with baby dragons, a fairytale castle, a gold-crowned number 4 and a layered rainbow",
  },
  lionAndRoses: {
    image: "landing/lion-and-roses",
    alt: "Half pink, half black cake with a butterfly and a pink rose on one side and a painted golden lion on the other",
  },
  pinkButterfly: {
    image: "landing/pink-butterfly",
    alt: "Pink and white cake with a large hand-painted pink butterfly and a gold Happy Birthday topper",
  },
  kittyBows: {
    image: "landing/kitty-bows",
    alt: "Pink and cream cake with cartoon kitty toppers, pink bows, hearts and a number 3",
  },
  gym: {
    image: "landing/gym-cake",
    alt: "Black and gold gym bag cake with fondant dumbbells, a gym mat and a muscle silhouette topper",
  },
  chocolateShards: {
    image: "landing/chocolate-shards",
    alt: "Chocolate drip cake topped with milk chocolate shards and a gold Happy Birthday topper",
  },
  teddy: {
    image: "landing/teddy-first-birthday",
    alt: "Blue and white first birthday cake with stars, balloons, a number 1 and a teddy bear",
  },
  pinkMarble: {
    image: "landing/pink-marble-flowers",
    alt: "Pink marbled buttercream cake with a posy of baby's breath, pearls and pink spheres",
  },
  hairBow: {
    image: "landing/hair-bow",
    alt: "White cake with a painted girl's long brown hair tied with a pink bow, surrounded by pink butterflies",
  },
  navyGoldHearts: {
    image: "landing/navy-gold-hearts",
    alt: "Cream ribbed cake with a navy blue border, gold spheres, navy hearts and a gold Happy Birthday topper",
  },
} as const satisfies Record<string, Photo>;

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

export const featured: readonly (Photo & { caption: string })[] = [
  { ...work.dragonRainbow, caption: "Dragons, castles & rainbows" },
  { ...work.lionAndRoses, caption: "Half lion, half roses" },
  { ...work.pinkButterfly, caption: "Painted butterflies in pink" },
];

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

/** Shown beside the ordering steps. */
export const orderPhoto: Photo = work.navyGoldHearts;

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

/**
 * Genuine customer reviews only (from Facebook, WhatsApp…). The "Kind Words" section stays
 * hidden while this list is empty. Example:
 *   { quote: "The cake was beautiful and tasted amazing!", name: "Nadeesha", source: "Facebook" }
 */
export const testimonials: readonly { quote: string; name?: string; source?: string }[] = [];

/** Preview of recent work in the home page gallery section. */
export const galleryPreview: readonly Photo[] = [
  work.kittyBows,
  work.gym,
  work.chocolateShards,
  work.teddy,
  work.pinkMarble,
  work.hairBow,
];

/** Every real-work photo on the home page, for the sitemap. */
export const homeWorkPhotos: readonly Photo[] = Object.values(work);
