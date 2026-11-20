import { site } from "@/config/site";

/** Dark title band at the top of the gallery page (the header sits transparent over it). */
export function GalleryHeader({ cakeCount }: { cakeCount: number }) {
  return (
    <section className="bg-ink px-6 pt-36 pb-20 text-center lg:pt-44 lg:pb-24">
      <p className="eyebrow">Our Work</p>
      <h1 className="mt-5 text-5xl text-ivory sm:text-6xl">The Cake Gallery</h1>
      <div className="mx-auto mt-6 gold-rule" />
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed font-light text-ivory/70">
        {cakeCount} cakes, all made in our kitchen in {site.address.city}. Find one you love, then
        message us to make it yours.
      </p>
    </section>
  );
}
