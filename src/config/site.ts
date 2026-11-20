/**
 * Business details for My Dreams Cake: the one place to update contact info.
 * Optional fields left empty ("") are hidden on the site and left out of the structured data.
 */
type SiteConfig = {
  name: string;
  tagline: string;
  /** Live site address, no trailing slash. Used for canonical URLs, share previews and the sitemap. */
  url: string;
  description: string;
  facebook: string;
  /** Instagram-style handle shown above the gallery. */
  handle: string;
  /** Digits with country code, no "+" or spaces, e.g. "94771234567". */
  whatsapp: string;
  /** Shown as written, e.g. "+94 72 947 9866". */
  phone: string;
  /** Leave `locality` empty to hide the address. */
  address: { locality: string; city: string; country: string; countryCode: string };
  /** Google Maps link for the address. */
  mapsUrl: string;
  hours: string;
};

export const site: SiteConfig = {
  name: "My Dreams Cake",
  tagline: "Your Dream Cake Awaits",
  url: "https://mydreamscake.com",
  description:
    "Custom birthday, wedding and celebration cakes, beautifully designed and made with love. Share your idea with My Dreams Cake and order your dream cake today.",
  facebook: "https://www.facebook.com/mydreamscakeshop",
  handle: "@mydreamscakeshop",
  whatsapp: "94729479866",
  phone: "+94 72 947 9866",
  address: {
    locality: "Mahagalkadawala",
    city: "Galgamuwa",
    country: "Sri Lanka",
    countryCode: "LK",
  },
  mapsUrl: "https://maps.app.goo.gl/AftU9g77RvR9iZUL9",
  hours: "",
};

/** The address on one line, e.g. "Mahagalkadawala, Galgamuwa, Sri Lanka". Empty when unset. */
export const addressLine = site.address.locality
  ? [site.address.locality, site.address.city, site.address.country].filter(Boolean).join(", ")
  : "";

const WHATSAPP_GREETING = "Hi My Dreams Cake! I'd like to enquire about a cake.";

/** WhatsApp chat link with a ready-made greeting. Empty when no number is set. */
export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(WHATSAPP_GREETING)}`
  : "";

/** Where every "Order" button points: WhatsApp when a number is set, otherwise Facebook. */
export const orderLink = whatsappHref
  ? { href: whatsappHref, channel: "whatsapp", channelLabel: "Enquire on WhatsApp" }
  : { href: site.facebook, channel: "facebook", channelLabel: "Message Us on Facebook" };
