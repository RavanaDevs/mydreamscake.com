# My Dreams Cake

Website for [My Dreams Cake](https://mydreamscake.com), a home cake shop. Built with
Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4, exported as a fully
static site.

## Development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev        # http://localhost:3000
```

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Dev server (generates responsive images first)      |
| `npm run build`     | Static build into `out/`                            |
| `npm run preview`   | Serve the built `out/` folder locally               |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | TypeScript check                                    |
| `npm run format`    | Prettier, including Tailwind class sorting          |
| `npm run images`    | Regenerate responsive images (runs automatically)   |

## Editing the site

- **Contact details** (WhatsApp, phone, location, hours): `src/config/site.ts`. Empty fields
  stay hidden. Once a WhatsApp number is set, every "Order" button opens WhatsApp instead of
  Facebook.
- **Text, cake collection, steps, testimonials**: `src/content/home.ts`.
- **Photos**: replace the files in `src/assets/images/` (keep the file names, or update the
  names in `src/content/home.ts`) and update each photo's description in
  `src/content/home.ts`. Optimised AVIF/WebP sizes are generated automatically.
- **Social share image**: `public/og-image.jpg` (1200×630). Rename it when replacing it, so
  WhatsApp and Facebook stop showing the cached old one, and update `src/lib/seo.ts`.

## Project structure

```
src/
  app/              layout, home page, 404, robots.txt, sitemap.xml, global styles
  components/
    home/           one component per page section
    layout/         header, mobile menu, footer, floating order button
    lightbox/       photo viewer (native <dialog>)
    ui/             Picture, Logo, ButtonLink, SectionHeading, Reveal…
    seo/            JSON-LD
  config/site.ts    business details
  content/home.ts   page copy and photo descriptions
  lib/              fonts, SEO helpers, cn()
scripts/
  build-images.mjs  responsive image generator
```

## Deployment

`npm run build` writes a static site to `out/`, deployable to any static host:

- **Cloudflare** (Pages or Workers static assets): build command `npm run build`, output
  directory `out`. `public/_headers` sets long-lived caching for hashed assets.
- **Vercel / Netlify**: detected automatically.
