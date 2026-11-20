import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { reasons } from "@/content/home";

/** A compact summary band: four reasons in a row, divided by fine gold rules. */
export function ReasonsSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading compact eyebrow={`Why ${site.name}`} title="Made to Be Remembered" />

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gold/25">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <Reveal as="li" key={title} delay={index * 100} className="text-center lg:px-8">
              <span className="mx-auto grid size-14 place-items-center rounded-full border border-gold/40">
                <Icon className="size-6 text-gold" strokeWidth={1.3} aria-hidden />
              </span>
              <h3 className="mt-4 text-2xl text-charcoal">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
