import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/home";

/**
 * Customer reviews as quote cards: a swipeable row on phones, a grid on larger screens.
 * Renders nothing until genuine reviews are added in src/content/home.ts.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Kind Words" title="From Our Customers" />

        <ul className="-mx-6 mt-14 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="li"
              key={testimonial.quote}
              delay={index * 100}
              className="w-[85%] shrink-0 snap-center md:w-auto"
            >
              <figure className="flex h-full flex-col bg-card p-8 shadow-sm lg:p-10">
                <span aria-hidden className="font-display text-6xl leading-none text-gold/70">
                  “
                </span>
                <blockquote className="mt-2 flex-1 font-display text-xl leading-relaxed text-charcoal italic sm:text-2xl">
                  {testimonial.quote}
                </blockquote>
                {testimonial.name && (
                  <figcaption className="mt-6 eyebrow">
                    {testimonial.name}
                    {testimonial.source && ` · ${testimonial.source}`}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
