import { MessageCircle } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { Picture } from "@/components/ui/picture";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { orderLink } from "@/config/site";
import { orderPhoto, orderSteps } from "@/content/home";

/** Dark split section: a cake photo beside the ordering steps laid out as a gold timeline. */
export function HowToOrderSection() {
  return (
    <section id="how-to-order" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative isolate mx-auto w-full max-w-md lg:max-w-none">
          <Picture
            {...orderPhoto}
            sizes="(min-width: 1280px) 570px, (min-width: 1024px) 45vw, (min-width: 448px) 448px, 100vw"
            className="aspect-[4/5] w-full object-cover shadow-2xl"
          />
          <div
            aria-hidden
            className="absolute -top-6 -left-6 -z-10 hidden h-full w-full border border-gold/30 sm:block"
          />
        </Reveal>

        <div>
          <SectionHeading
            tone="light"
            align="start"
            eyebrow="How to Order"
            title="Three Simple Steps"
          />

          <ol className="mt-12 border-l border-gold/25">
            {orderSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 120}
                className="relative pb-10 pl-8 last:pb-0 sm:pl-10"
              >
                <span
                  aria-hidden
                  className="absolute top-3 -left-[5px] size-2.5 rounded-full bg-gold ring-4 ring-ink"
                />
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl leading-none text-gold" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl text-ivory">{step.title}</h3>
                </div>
                <p className="mt-3 max-w-md leading-relaxed font-light text-ivory/65">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12">
            <ButtonLink href={orderLink.href} external variant="gold">
              {orderLink.channel === "whatsapp" ? (
                <WhatsAppIcon className="size-4" />
              ) : (
                <MessageCircle className="size-4" />
              )}
              {orderLink.channelLabel}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
