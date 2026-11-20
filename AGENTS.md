<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

> [!IMPORTANT]
> This repository was previously a Lovable project synced to `main`. Never force push or
> rewrite published history. Disconnect the GitHub sync in Lovable before this Next.js
> code lands on `main`, otherwise Lovable will try to sync a project it cannot run.

- **Static site on Vercel.** `output: "export"` in `next.config.ts`. Do not add features that
  need a server (Server Actions, `cookies()`, rewrites, redirects, next.config `headers`,
  default `next/image` loader). Route handlers must be `force-static`. HTTP headers go in
  `vercel.json`.
- **Photos.** Originals are in `real_images/` (local only, gitignored). The mapping to cakes is
  `src/content/photo-sources.json`; `npm run photos:import` writes the committed WebP originals
  to `src/assets/images/gallery/` (watermarked, gallery page) and `landing/` (no watermark,
  home page). Never commit `real_images/`.
- **Images.** Render with `<Picture image="…">` (server) or `<ResponsiveImage>` (takes resolved
  data; use in client components). `scripts/build-images.mjs` writes WebP sizes to
  `public/images/` and the manifest `src/generated/images.ts` before every dev/build. Both are
  gitignored: never edit or commit them. Never import the manifest (or `Picture`/`Logo`) into
  a client component: pass resolved data or server-rendered elements instead.
- **Content and config.** Business details: `src/config/site.ts`; navigation:
  `src/config/navigation.ts`; home copy: `src/content/home.ts`; gallery cakes:
  `src/content/gallery.ts`. Descriptions double as alt text: describe the cake, never the
  customer names written on it.
- **Components.** Server components by default. Add `"use client"` only for state, effects or
  browser APIs, and keep those components small (see `components/lightbox/`,
  `components/gallery/gallery-filter.tsx`, `components/layout/site-header.tsx`).
- **Styling.** Tailwind v4, configured in `src/app/globals.css` (`@theme` tokens: ink,
  charcoal, gold, champagne, ivory). Use the tokens, not raw colours. Merge classes with `cn()`.
- **SEO.** Each page builds its metadata with `pageMetadata()` and its JSON-LD from
  `src/lib/seo.ts`; robots and the image sitemap are `src/app/robots.ts` and
  `src/app/sitemap.ts`. New pages go in `src/app/(site)/` and need a sitemap entry.
- **Checks before committing:** `npm run lint`, `npm run typecheck`, `npm run build`.
