import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { reasons } from "@/content/home";

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:py-36">
      <SectionHeading eyebrow={`Why ${site.name}`} title="Made to Be Remembered" />

      <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <Reveal as="li" key={title} delay={index * 100} className="text-center">
            <Icon className="mx-auto size-7 text-gold" strokeWidth={1.2} aria-hidden />
            <h3 className="mt-5 text-2xl text-charcoal">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
