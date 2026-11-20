import { Picture } from "@/components/ui/picture";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featured } from "@/content/home";
import { cn } from "@/lib/cn";

/**
 * Three of the shop's cakes in portrait frames. On phones the first spans the full
 * width and the other two sit side by side; from large screens all three share a row.
 */
export function FeaturedSection() {
  return (
    <section className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tone="light" eyebrow="Featured" title="Crafted for Your Moment" />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal
              key={item.image}
              delay={index * 120}
              className={cn(index === 0 && "col-span-2 lg:col-span-1")}
            >
              <figure className="group">
                <div className="overflow-hidden">
                  <Picture
                    image={item.image}
                    alt={item.alt}
                    sizes={
                      index === 0
                        ? "(min-width: 1280px) 400px, (min-width: 1024px) 33vw, 100vw"
                        : "(min-width: 1280px) 400px, (min-width: 1024px) 33vw, 50vw"
                    }
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 font-display text-lg text-champagne italic sm:text-xl">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
