import { ExternalLink } from "@/components/ui/external-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
      <SectionHeading eyebrow="Kind Words" title="From Our Customers" />

      {testimonials.length > 0 ? (
        <div className="mt-14 space-y-14">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.quote}>
              <figure>
                <blockquote className="font-display text-2xl leading-relaxed text-charcoal italic sm:text-3xl">
                  “{testimonial.quote}”
                </blockquote>
                {testimonial.name && (
                  <figcaption className="mt-5 eyebrow">
                    {testimonial.name}
                    {testimonial.source && ` · ${testimonial.source}`}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <p className="mt-12 text-muted-foreground">
            Read what our customers say on our{" "}
            <ExternalLink
              href={site.facebook}
              className="text-gold underline-offset-4 hover:underline"
            >
              Facebook page
            </ExternalLink>
            .
          </p>
        </Reveal>
      )}
    </section>
  );
}
