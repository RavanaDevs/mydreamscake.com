import { Picture } from "@/components/ui/picture";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featured, type Photo } from "@/content/home";
import { cn } from "@/lib/cn";

export function FeaturedSection() {
  return (
    <section className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tone="light" eyebrow="Featured" title="Crafted for Your Moment" />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <FeaturedFigure
              photo={featured.main}
              caption={featured.main.caption}
              sizes="(min-width: 1280px) 820px, (min-width: 1024px) 66vw, 100vw"
              aspect="aspect-[4/3]"
              captionClass="mt-4 text-xl"
            />
          </Reveal>
          <div className="grid gap-6">
            {featured.side.map((item, index) => (
              <Reveal key={item.caption} delay={150 + index * 100}>
                <FeaturedFigure
                  photo={item}
                  caption={item.caption}
                  sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, 100vw"
                  aspect="aspect-[16/10]"
                  captionClass="mt-3 text-lg"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type FeaturedFigureProps = {
  photo: Photo;
  caption: string;
  sizes: string;
  aspect: string;
  captionClass: string;
};

function FeaturedFigure({ photo, caption, sizes, aspect, captionClass }: FeaturedFigureProps) {
  return (
    <figure className="group overflow-hidden">
      <Picture
        {...photo}
        sizes={sizes}
        className={cn("w-full object-cover transition duration-700 group-hover:scale-105", aspect)}
      />
      <figcaption className={cn("font-display text-champagne italic", captionClass)}>
        {caption}
      </figcaption>
    </figure>
  );
}
