import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";

// Self-hosted at build time by next/font: no request to Google Fonts and no layout shift.
// Only the fonts visible above the fold are preloaded.

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
  preload: false,
});

export const fontVariables = [inter.variable, cormorant.variable, greatVibes.variable].join(" ");
