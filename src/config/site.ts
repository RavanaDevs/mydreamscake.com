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
  phone: string;
  location: string;
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
  whatsapp: "",
  phone: "",
  location: "",
  hours: "",
};

const WHATSAPP_GREETING = "Hi My Dreams Cake! I'd like to enquire about a cake.";

/** Where every "Order" button points: WhatsApp when a number is set, otherwise Facebook. */
export const orderLink = site.whatsapp
  ? {
      href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(WHATSAPP_GREETING)}`,
      channelLabel: "Enquire on WhatsApp",
    }
  : {
      href: site.facebook,
      channelLabel: "Message Us on Facebook",
    };
