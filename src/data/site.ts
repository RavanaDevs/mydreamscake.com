// Central business content. Replace placeholders with verified details from the shop.
import hero from "@/assets/cake-hero.jpg";
import birthday from "@/assets/cake-birthday.jpg";
import wedding from "@/assets/cake-wedding.jpg";
import chocolate from "@/assets/cake-chocolate.jpg";

export const site = {
  name: "My Dreams Cake",
  tagline: "Your Dream Cake Awaits",
  // Live site address, no trailing slash. Used for the canonical URL, Open Graph share
  // previews (WhatsApp/Facebook need absolute image URLs) and structured data.
  // If the primary domain changes (e.g. to www), also update public/robots.txt and public/sitemap.xml.
  url: "https://mydreamscake.com",
  description:
    "Custom birthday, wedding and celebration cakes, beautifully designed and made with love. Share your idea with My Dreams Cake and order your dream cake today.",
  facebook: "https://www.facebook.com/mydreamscakeshop",
  // Add verified details here (leave empty to hide). Format WhatsApp as digits with country code, e.g. "94771234567".
  whatsapp: "",
  phone: "",
  location: "",
  hours: "",
};

// Sample images — replace with the shop's real cake photos.
export const images = { hero, birthday, wedding, chocolate };

// Describe what each photo actually shows (used as alt text for search engines and screen readers).
// Update these whenever you swap a photo.
export const imageAlt = {
  hero: "Three-tier ivory cake with gold leaf and fresh roses",
  birthday: "Pastel rainbow birthday cake with buttercream swirls and a Happy Birthday topper",
  wedding: "Ivory two-tier wedding cake with sugar roses and pearls",
  chocolate: "Chocolate drip cake with gold macarons and fresh berries",
};

export const collection = [
  {
    name: "Birthday Cakes",
    desc: "Playful, colourful designs for every age.",
    img: birthday,
    alt: imageAlt.birthday,
  },
  {
    name: "Wedding Cakes",
    desc: "Timeless tiers for the most important day.",
    img: wedding,
    alt: imageAlt.wedding,
  },
  {
    name: "Celebration Cakes",
    desc: "Rich, indulgent cakes for life's big moments.",
    img: chocolate,
    alt: imageAlt.chocolate,
  },
  {
    name: "Custom Cakes",
    desc: "Your idea, shaped into something beautiful.",
    img: hero,
    alt: imageAlt.hero,
  },
];

// Add only genuine customer reviews here.
export const testimonials: { quote: string; name?: string; source?: string }[] = [];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Cakes", href: "#cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const orderHref = () =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi My Dreams Cake! I'd like to enquire about a cake.")}`
    : site.facebook;
