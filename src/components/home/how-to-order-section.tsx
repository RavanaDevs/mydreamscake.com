import { MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { orderLink } from "@/config/site";
import { orderSteps } from "@/content/home";

export function HowToOrderSection() {
  return (
    <section className="bg-muted py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="How to Order" title="Three Simple Steps" />

        <ol className="mt-16 grid gap-12 md:grid-cols-3">
          {orderSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 120}
              className="border-t border-gold/40 pt-6"
            >
              <span className="font-display text-5xl text-gold" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <ButtonLink href={orderLink.href} external variant="dark">
            <MessageCircle className="size-4" /> {orderLink.channelLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
