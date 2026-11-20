// Builds responsive WebP sizes of every image under src/assets/images/.
//
//   src/assets/images/cake-hero.jpg          -> image name "cake-hero"
//   src/assets/images/gallery/fairy-wings-1.webp -> image name "gallery/fairy-wings-1"
//     -> public/images/<name>-<hash>-<width>.webp  (480w, 768w, … up to the source width)
//     -> src/generated/images.ts                    (typed manifest used by <Picture>)
//
// Runs automatically before `npm run dev` and `npm run build`. File names carry a content hash,
// so replacing a photo produces new URLs and browsers never show a stale cached copy.
//
// Encoded files are kept in .next/cache/images (Vercel keeps that folder between deploys), so
// only new or changed photos are encoded; everything else is copied in well under a second.

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { copyFile, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "src/assets/images");
const CACHE_DIR = path.join(ROOT, ".next/cache/images");
const OUTPUT_DIR = path.join(ROOT, "public/images");
const MANIFEST_FILE = path.join(ROOT, "src/generated/images.ts");
const PUBLIC_PATH = "/images";

/** Candidate widths. Widths within 10% of the source width are skipped; the source width is always included. */
const DEFAULT_WIDTHS = [480, 768, 1080, 1440];
/** Per-image widths, keyed by image name. */
const WIDTH_OVERRIDES = { logo: [128, 256, 384] };
/** Width of the plain `src` fallback (the closest generated width at or below it). */
const FALLBACK_WIDTH = 1080;
const WEBP = { quality: 80, effort: 5 };
const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const CONCURRENCY = 4;

const toHex = ({ r, g, b }) => `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;

function widthsFor(name, sourceWidth) {
  const override = WIDTH_OVERRIDES[name];
  if (override) return [...new Set(override.map((w) => Math.min(w, sourceWidth)))];
  return [...DEFAULT_WIDTHS.filter((w) => w < sourceWidth * 0.9), sourceWidth];
}

async function listSources(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return listSources(full, `${prefix}${entry.name}/`);
      if (!SUPPORTED.has(path.extname(entry.name).toLowerCase())) return [];
      return [{ full, name: `${prefix}${path.parse(entry.name).name}` }];
    }),
  );
  return files.flat();
}

async function buildImage({ full, name }) {
  const input = await readFile(full);
  const hash = createHash("sha256")
    .update(input)
    .update(JSON.stringify(WEBP))
    .digest("hex")
    .slice(0, 8);
  const image = sharp(input);
  const [{ width, height }, { dominant }] = await Promise.all([image.metadata(), image.stats()]);
  const widths = widthsFor(name, width);
  const slug = name.replaceAll("/", "-");

  const outputs = [];
  for (const w of widths) {
    const fileName = `${slug}-${hash}-${w}.webp`;
    const cached = path.join(CACHE_DIR, fileName);
    if (!existsSync(cached)) {
      await sharp(input).resize({ width: w, withoutEnlargement: true }).webp(WEBP).toFile(cached);
    }
    await copyFile(cached, path.join(OUTPUT_DIR, fileName));
    outputs.push(fileName);
  }

  const fallbackWidth = widths.filter((w) => w <= FALLBACK_WIDTH).at(-1) ?? widths[0];
  return {
    name,
    outputs,
    entry: {
      width,
      height,
      color: toHex(dominant),
      src: `${PUBLIC_PATH}/${slug}-${hash}-${fallbackWidth}.webp`,
      full: `${PUBLIC_PATH}/${slug}-${hash}-${widths.at(-1)}.webp`,
      srcSet: widths.map((w) => `${PUBLIC_PATH}/${slug}-${hash}-${w}.webp ${w}w`).join(", "),
    },
  };
}

/** Runs `task` over `items` with at most `limit` in flight, preserving order. */
async function mapLimit(items, limit, task) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await task(items[index]);
    }
  };
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

async function main() {
  const started = performance.now();
  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await Promise.all(
    [OUTPUT_DIR, CACHE_DIR, path.dirname(MANIFEST_FILE)].map((dir) =>
      mkdir(dir, { recursive: true }),
    ),
  );

  const sources = (await listSources(SOURCE_DIR)).sort((a, b) => a.name.localeCompare(b.name));
  const results = await mapLimit(sources, CONCURRENCY, buildImage);

  // Drop cached encodes of photos that were replaced or removed.
  const expected = new Set(results.flatMap((r) => r.outputs));
  for (const file of await readdir(CACHE_DIR)) {
    if (!expected.has(file)) await rm(path.join(CACHE_DIR, file));
  }

  const manifest = Object.fromEntries(results.map((r) => [r.name, r.entry]));
  const source = `// Generated by scripts/build-images.mjs. Do not edit: changes are overwritten.

export type GeneratedImage = {
  /** Intrinsic size of the source image, used to reserve layout space. */
  width: number;
  height: number;
  /** Dominant colour, shown while the image loads. */
  color: string;
  /** Fallback URL for browsers that ignore srcset. */
  src: string;
  /** The largest generated file, for sitemaps and structured data. */
  full: string;
  /** WebP files at every generated width. */
  srcSet: string;
};

export const images = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, GeneratedImage>;

export type ImageName = keyof typeof images;
`;
  const current = existsSync(MANIFEST_FILE) ? await readFile(MANIFEST_FILE, "utf8") : "";
  if (current !== source) await writeFile(MANIFEST_FILE, source);

  const ms = Math.round(performance.now() - started);
  console.log(`images: ${results.length} sources, ${expected.size} WebP files ready (${ms} ms)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
