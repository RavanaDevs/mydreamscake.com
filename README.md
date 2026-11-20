# My Dreams Cake

Website for [My Dreams Cake](https://mydreamscake.com), a home cake shop in Galgamuwa,
Sri Lanka. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4,
exported as a fully static site and hosted on Vercel.

Pages: the home page (`/`) and the cake gallery (`/gallery`).

## Development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev        # http://localhost:3000
```

| Command                 | What it does                                           |
| ----------------------- | ------------------------------------------------------ |
| `npm run dev`           | Dev server (generates responsive images first)         |
| `npm run build`         | Static build into `out/`                               |
| `npm run preview`       | Serve the built `out/` folder locally                  |
| `npm run lint`          | ESLint (Next.js core-web-vitals + TypeScript rules)    |
| `npm run typecheck`     | TypeScript check                                       |
| `npm run format`        | Prettier, including Tailwind class sorting             |
| `npm run photos:import` | Convert the original photos in `real_images/` to WebP  |
| `npm run images`        | Regenerate responsive image sizes (runs automatically) |

## Editing the site

- **Contact details** (WhatsApp, phone, address, hours): `src/config/site.ts`. Empty fields
  stay hidden.
- **Home page text, collection, featured cakes, steps, testimonials**: `src/content/home.ts`.
- **Gallery cakes** (titles, categories, descriptions): `src/content/gallery.ts`.

### Adding or changing photos

Original photos live in `real_images/` on your computer only (it is gitignored: about
470 MB of PNGs). The site uses compact WebP copies that are committed to git.

1. Put the new photo in `real_images/with watermark/PNG/` (gallery) or
   `real_images/without watermark/PNG/` (home page).
2. List it in `src/content/photo-sources.json`: under `gallery` for a cake (a cake can have
   several photos, cover first) or under `landing` for the home page.
3. Run `npm run photos:import`. This writes `src/assets/images/gallery/<cake>-<n>.webp` and
   `src/assets/images/landing/<name>.webp`, and rebuilds `public/og-gallery.jpg`.
4. For a new gallery cake, add its title, category and description in
   `src/content/gallery.ts` (TypeScript flags cakes without one). For the home page, use the
   photo in `src/content/home.ts`.
5. Commit the new `.webp` files.

Responsive sizes (480 px up to the photo's own width) are generated automatically on every
dev start and build, and cached in `.next/cache/images`, so only new photos are processed.

The hero, Our Story and Collection photos are `src/assets/images/*.jpg`.

### Social share images

`public/og-image.jpg` (home) and `public/og-gallery.jpg` (gallery), 1200×630. WhatsApp and
Facebook cache them by URL, so rename a file when replacing it and update `src/lib/seo.ts`.

## Project structure

```
src/
  app/
    (site)/         pages sharing the header and footer: home, gallery
    layout.tsx      fonts, global metadata;  not-found.tsx, robots.ts, sitemap.ts
  assets/images/    hero/collection photos, gallery/ and landing/ WebP originals, logo
  components/
    home/           one component per home page section
    gallery/        gallery header, category filter, cake tile
    layout/         header, mobile menu, footer, contact list, WhatsApp button
    lightbox/       photo viewer (native <dialog>)
    ui/             Picture, ResponsiveImage, Logo, ButtonLink, SectionHeading, Reveal…
    seo/            JSON-LD
  config/           business details, navigation
  content/          home page copy, gallery cakes, photo source list
  lib/              fonts, images, SEO helpers, cn()
scripts/
  import-photos.mjs real_images/ -> WebP originals
  build-images.mjs  WebP originals -> responsive sizes + typed manifest
```

## Deployment

Hosted on Vercel, which detects Next.js automatically: build command `npm run build`. The
static export lands in `out/`. `vercel.json` adds long-lived caching for `/images/*` (file
names carry a content hash); Next.js already does the same for `/_next/static/*`.
