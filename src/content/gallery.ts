import type { ImageName } from "@/generated/images";

import sources from "./photo-sources.json";

// The gallery page: one entry per cake, shown in the order of photo-sources.json.
// Photos are the watermarked originals in src/assets/images/gallery/<cake>-<n>.webp.
// To add a cake: add its photos to photo-sources.json, run `npm run photos:import`,
// then describe it below (TypeScript flags any cake without a description).

export const galleryCategories = [
  { id: "kids", label: "Kids" },
  { id: "her", label: "For Her" },
  { id: "him", label: "For Him" },
  { id: "love", label: "Love & Weddings" },
  { id: "setups", label: "Party Setups" },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]["id"];
type CakeSlug = keyof typeof sources.gallery;

type CakeDetails = {
  /** Short name shown under the photo. */
  title: string;
  category: GalleryCategory;
  /** What the photos show, for search engines and screen readers. Leave out customer names. */
  description: string;
};

const details = {
  "butterfly-three-tier": {
    title: "Three-Tier Butterfly Drip",
    category: "her",
    description:
      "Three-tier pink and lilac cake with a chocolate drip, baby's breath and pink and blue butterflies",
  },
  "fairy-wings": {
    title: "Fairy Wings",
    category: "kids",
    description:
      "Lilac fairy cake with large purple butterfly wings, fairy figures and a little flower-framed door",
  },
  "black-and-gold": {
    title: "Black & Gold",
    category: "him",
    description:
      "Black cake brushed with gold, topped with a black paper fan and gold and black spheres",
  },
  "engagement-rings": {
    title: "Rings & Roses",
    category: "love",
    description:
      "Ivory textured cake with pearl details, cream roses and a gold wedding rings topper",
  },
  "doll-princess": {
    title: "Little Doll",
    category: "kids",
    description:
      "Cream and pink ombre cake topped with a pink-haired doll, butterflies and gold and pink spheres",
  },
  "cat-and-mouse": {
    title: "Cartoon Cat & Mouse",
    category: "kids",
    description:
      "Sky-blue cake with a cartoon cat and mouse, a little mouse-hole door and a number 2 topper",
  },
  "dads-hand": {
    title: "Never Forget the Hand",
    category: "him",
    description:
      "Blue ombre cake with a painted illustration of a little girl holding her father's hand",
  },
  "rose-sheet-cake": {
    title: "Rose Garden Sheet Cake",
    category: "her",
    description: "Rectangular white cake decorated with pink roses, petals and a satin ribbon",
  },
  "teddy-balloons": {
    title: "Teddy & Hot-Air Balloons",
    category: "kids",
    description:
      "First birthday cake with a teddy bear, blue hot-air balloons and a pastel blue rainbow",
  },
  "crown-and-roses": {
    title: "Crown & Roses",
    category: "love",
    description: "Pink ombre cake with a gold crown, pink roses and a gold Happy Birthday topper",
  },
  "construction-twins": {
    title: "Construction Twins",
    category: "kids",
    description:
      "Twin third-birthday cake with toy excavators and dump trucks on two sky-blue cakes",
  },
  "princess-gown": {
    title: "Princess in Pink",
    category: "her",
    description:
      "White cake with a hand-painted girl in a pink ball gown, pink hearts and butterflies",
  },
  "desert-racer": {
    title: "Desert Racers",
    category: "kids",
    description:
      "Racing car cake with desert cactus details, a checkered flag and a number 5 topper",
  },
  "king-dad": {
    title: "King Dad",
    category: "him",
    description:
      "Cream piped cake with a gold Happy Birthday topper and King and Best Dad Ever toppers",
  },
  "cricket-pitch": {
    title: "Cricket Pitch",
    category: "him",
    description:
      "Rectangular cricket field cake with a little batsman, stumps, ball, bat and a white picket fence",
  },
  "best-friends": {
    title: "Best Friends Forever",
    category: "her",
    description:
      "Grey cake with a painted best friends illustration, lilac butterflies and a Best Friends Forever topper",
  },
  "bunny-two-tier": {
    title: "Bunny Two-Tier",
    category: "kids",
    description:
      "Two-tier pink and white bunny cake with long ears, carrots and little bunny figures",
  },
  "pink-balloon-setup": {
    title: "Pink Balloon Setup",
    category: "setups",
    description: "Pink and silver balloon garland with a pink drip cake and a party tray",
  },
  "chocolate-cherries": {
    title: "Chocolate & Cherries",
    category: "her",
    description: "Chocolate drip cake piled with chocolate bars, truffles and cherries",
  },
  "cherry-blossom": {
    title: "Cherry Blossom",
    category: "her",
    description: "White cake with hand-painted pink blossoms and a gold Happy Birthday topper",
  },
  "best-teacher": {
    title: "Best Teacher",
    category: "her",
    description: "Pink ribbed cake with a crown of piped roses for a favourite teacher",
  },
  "navy-my-love": {
    title: "Midnight Blue",
    category: "love",
    description:
      "Navy blue cake with gold sprinkles, gold and black spheres and a gold Happy Birthday topper",
  },
  "green-car": {
    title: "Little Green Car",
    category: "kids",
    description: "Lime green cake with a yellow car topper, clouds, a fondant car and a number 2",
  },
  "floral-ring": {
    title: "Rose Wreath",
    category: "her",
    description: "White cake with a wreath of piped pink roses and green leaves",
  },
  "dad-monogram": {
    title: "DAD",
    category: "him",
    description: "Cream cake with bold DAD lettering and black and silver spheres",
  },
  "football-unicorn": {
    title: "Football & Unicorn",
    category: "kids",
    description:
      "Half blue, half pink cake for siblings with footballs, a race car, a unicorn and a rainbow",
  },
  "school-letters": {
    title: "Back to School",
    category: "kids",
    description:
      "White cake with Sinhala letter blocks, a little chalkboard, pencils and a crayon-coloured border",
  },
  "chocolate-rose": {
    title: "Chocolate Rose",
    category: "love",
    description:
      "Chocolate ribbed cake with a deep red rose, gold pearls and a gold Happy Birthday topper",
  },
  "pink-rosettes": {
    title: "Pink Rosettes",
    category: "her",
    description:
      "Pink buttercream cake with swirled rosettes, pearls and a gold Happy Birthday topper",
  },
  "race-car-blue": {
    title: "Race Car",
    category: "kids",
    description: "White and blue cake with a toy race car and orange and blue spheres",
  },
  "hearts-couple": {
    title: "Sweethearts",
    category: "love",
    description: "White cake with red hearts, a daisy and a sweet couple topper",
  },
  "pink-drip-butterflies": {
    title: "Pink Drip & Butterflies",
    category: "her",
    description:
      "Pink cake with a white chocolate drip, pink butterflies and pastel spheres on a black board",
  },
  "navy-gold-split": {
    title: "Navy & Gold",
    category: "him",
    description: "Half navy, half cream cake divided by a line of gold sprinkles",
  },
  "lovely-hearts": {
    title: "Lovely Hearts",
    category: "her",
    description: "White cake with a pink top, pink hearts and a gold Happy Birthday topper",
  },
  "cake-gift-bouquet": {
    title: "Cake, Gift & Bouquet",
    category: "setups",
    description: "Pink drip cake with butterflies, presented with a flower bouquet and a gift box",
  },
  "pink-ruffle-dress": {
    title: "Ruffled Dress",
    category: "her",
    description: "Round cake with a painted girl in a piped pink ruffled dress and pink flowers",
  },
  "yellow-ombre": {
    title: "Lemon Ombre",
    category: "her",
    description:
      "White to yellow ombre cake with pearls, a white rose and a gold Happy Birthday topper",
  },
  "good-luck-princess": {
    title: "Good Luck, Princess",
    category: "kids",
    description:
      "White cake with colourful letters and numbers, an apple and a big green letter A for the first school day",
  },
  "chocolate-drip": {
    title: "Classic Chocolate Drip",
    category: "her",
    description: "Chocolate drip cake topped with chocolates, wafer rolls and cherries",
  },
  "pink-navy-split": {
    title: "Pink & Navy",
    category: "love",
    description:
      "Two-tone pink and navy cake with pink and black spheres and two gold Happy Birthday toppers",
  },
  "bow-cake": {
    title: "Pretty Bows",
    category: "her",
    description: "Hot pink cake with white bows, gold sprinkles and pearls on a black board",
  },
  "blue-balloon-setup": {
    title: "Blue Balloon Setup",
    category: "setups",
    description: "Blue balloon arch with a cartoon-themed cake on a decorated tray",
  },
  "blue-roses": {
    title: "Blue Roses",
    category: "him",
    description: "Small white cake ringed with piped blue roses and a gold Happy Birthday topper",
  },
  "racing-boy": {
    title: "Little Racer",
    category: "kids",
    description:
      "Blue and white first birthday cake with a painted racing boy, a race car and a number 1 topper",
  },
} satisfies Record<CakeSlug, CakeDetails>;

export type GalleryCake = CakeDetails & {
  slug: CakeSlug;
  /** Image names, cover photo first. */
  photos: ImageName[];
};

export const galleryCakes: readonly GalleryCake[] = (
  Object.keys(sources.gallery) as CakeSlug[]
).map((slug) => ({
  slug,
  ...details[slug],
  photos: sources.gallery[slug].map((_, i) => `gallery/${slug}-${i + 1}` as ImageName),
}));

export const categoryLabel = (id: GalleryCategory) =>
  galleryCategories.find((category) => category.id === id)?.label ?? id;
