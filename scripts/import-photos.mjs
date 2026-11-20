// Imports the shop's original photos into the repo as compact WebP originals.
//
//   real_images/…/<uuid>.png  (local only, gitignored, ~470 MB)
//     -> src/assets/images/gallery/<cake>-<n>.webp   (watermarked, gallery page)
//     -> src/assets/images/landing/<name>.webp       (no watermark, home page)
//     -> public/og-gallery.jpg                       (1200×630 share image for /gallery)
//
// Which file goes where is listed in src/content/photo-sources.json. Run after editing it:
//   npm run photos:import
// Then commit the WebP files. scripts/build-images.mjs makes the responsive sizes at build time.

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, process.argv[2] ?? "real_images");
const IMAGES_DIR = path.join(ROOT, "src/assets/images");
const OG_FILE = path.join(ROOT, "public/og-gallery.jpg");

/** Longest edge of the stored originals. Most photos are 1448 px tall already. */
const MAX_EDGE = 1600;
/** High quality: these are re-encoded at smaller sizes during the build. */
const MASTER_WEBP = { quality: 88, effort: 6 };
/** Landing photos used for the gallery share image, left to right. */
const OG_PHOTOS = ["dragon-rainbow", "lion-and-roses", "kitty-bows"];

async function writeMaster(sourceFile, target) {
  const input = path.join(SOURCE_DIR, sourceFile);
  if (!existsSync(input)) throw new Error(`Missing source photo: ${sourceFile}`);
  // rotate() applies the camera orientation; metadata (EXIF, GPS) is dropped by default.
  await sharp(input)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp(MASTER_WEBP)
    .toFile(target);
  return target;
}

/** Writes the given masters into `dir` and deletes any other .webp left there from earlier runs. */
async function syncFolder(dir, entries) {
  await mkdir(dir, { recursive: true });
  const written = new Set();
  for (const [name, sourceFile] of entries) {
    await writeMaster(sourceFile, path.join(dir, `${name}.webp`));
    written.add(`${name}.webp`);
  }
  for (const file of await readdir(dir)) {
    if (file.endsWith(".webp") && !written.has(file)) await rm(path.join(dir, file));
  }
  return written.size;
}

async function writeShareImage(landingDir) {
  const width = 400;
  const height = 630;
  const tiles = await Promise.all(
    OG_PHOTOS.map((name) =>
      sharp(path.join(landingDir, `${name}.webp`))
        .resize(width, height, { fit: "cover", position: "centre" })
        .toBuffer(),
    ),
  );
  await sharp({ create: { width: width * 3, height, channels: 3, background: "#0b0b0b" } })
    .composite(tiles.map((input, i) => ({ input, left: i * width, top: 0 })))
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(OG_FILE);
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`Source folder not found: ${SOURCE_DIR}`);
    process.exit(1);
  }
  const sources = JSON.parse(await readFile(path.join(ROOT, "src/content/photo-sources.json")));

  const galleryEntries = Object.entries(sources.gallery).flatMap(([cake, files]) =>
    files.map((file, i) => [`${cake}-${i + 1}`, file]),
  );
  const landingEntries = Object.entries(sources.landing);

  const galleryCount = await syncFolder(path.join(IMAGES_DIR, "gallery"), galleryEntries);
  const landingDir = path.join(IMAGES_DIR, "landing");
  const landingCount = await syncFolder(landingDir, landingEntries);
  await writeShareImage(landingDir);

  console.log(
    `photos: ${galleryCount} gallery + ${landingCount} landing originals written, og-gallery.jpg updated`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
