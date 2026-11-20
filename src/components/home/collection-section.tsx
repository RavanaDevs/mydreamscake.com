import { ArrowRight } from "lucide-react";

import { LightboxTrigger } from "@/components/lightbox/lightbox-trigger";
import { Picture } from "@/components/ui/picture";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { collection } from "@/content/home";

export function CollectionSection() {
  return (
    <section id="cakes" className="bg-card py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Collection"
          title="Explore Our Creations"
          subtitle="A little inspiration for your next celebration."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collection.map((item, index) => (
            <Reveal as="li" key={item.name} delay={index * 100}>
              <LightboxTrigger
                photos={collection}
                index={index}
                className="group block w-full text-left"
              >
                <div className="overflow-hidden">
                  <Picture
                    image={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1280px) 296px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-2xl text-charcoal">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  View Details
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                </span>
              </LightboxTrigger>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
