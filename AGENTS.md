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

- **Static site.** `output: "export"` in `next.config.ts`. Do not add features that need a
  server (Server Actions, `cookies()`, rewrites, redirects, next.config `headers`, default
  `next/image` loader). Route handlers must be `force-static`.
- **Images.** Put photos in `src/assets/images/` and render them with `<Picture>`
  (`src/components/ui/picture.tsx`). `scripts/build-images.mjs` generates the AVIF/WebP
  variants into `public/images/` and the manifest `src/generated/images.ts` before every
  dev/build. Both outputs are gitignored: never edit or commit them.
- **Content and config.** Business details live in `src/config/site.ts`; page copy and photo
  descriptions (alt text) in `src/content/home.ts`. Components read from these, so text
  changes should not touch components.
- **Components.** Server components by default. Add `"use client"` only for state, effects or
  browser APIs, and keep those components small (see `components/lightbox/` and
  `components/layout/site-header.tsx`).
- **Styling.** Tailwind v4, configured in `src/app/globals.css` (`@theme` tokens: ink,
  charcoal, gold, champagne, ivory). Use the tokens, not raw colours. Merge classes with `cn()`.
- **SEO.** Page metadata uses the Next.js Metadata API (`src/app/layout.tsx`, `page.tsx`);
  structured data comes from `src/lib/seo.ts`; robots and sitemap are `src/app/robots.ts` and
  `src/app/sitemap.ts`.
- **Checks before committing:** `npm run lint`, `npm run typecheck`, `npm run build`.
