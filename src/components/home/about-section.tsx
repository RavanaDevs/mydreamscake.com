import { Picture } from "@/components/ui/picture";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";
import { photos } from "@/content/home";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:py-36"
    >
      <Reveal className="relative">
        <Picture
          {...photos.wedding}
          sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/5] w-full object-cover shadow-2xl"
        />
        <div className="absolute -right-6 -bottom-6 -z-10 hidden h-full w-full border border-gold/40 sm:block" />
      </Reveal>

      <Reveal delay={150}>
        <p className="eyebrow">Our Story</p>
        <h2 className="mt-4 text-4xl leading-tight text-charcoal sm:text-5xl">
          Where Sweet Dreams Become Reality
        </h2>
        <div className="mt-6 gold-rule" />
        <p className="mt-8 text-lg leading-relaxed font-light text-muted-foreground">
          Every cake tells a story. At {site.name}, we believe that every special moment deserves
          something beautiful, memorable, and made with love.
        </p>
        <p className="mt-8 font-script text-4xl text-gold">{site.tagline}</p>
      </Reveal>
    </section>
  );
}
