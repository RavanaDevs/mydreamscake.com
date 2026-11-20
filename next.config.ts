import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: `next build` writes plain HTML/CSS/JS to `out/`,
  // which any static host (Cloudflare, Vercel, Netlify, S3…) can serve.
  output: "export",
  experimental: {
    // The Tailwind stylesheet is small, so ship it inside the HTML instead of as a
    // render-blocking request. Most visitors are first-time visitors.
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
