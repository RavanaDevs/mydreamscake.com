import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { orderLink, site } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 text-center">
      <Logo
        size={520}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <Reveal className="relative mx-auto max-w-2xl px-6">
        <p className="eyebrow">Begin Your Order</p>
        <h2 className="mt-5 text-5xl text-ivory sm:text-6xl">Let&apos;s Make Your Dream Cake.</h2>
        <p className="mt-6 text-lg font-light text-ivory/70">
          Have a special celebration coming up? Let&apos;s create something beautiful together.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href={orderLink.href} external variant="gold">
            Order Your Cake
          </ButtonLink>
          <ButtonLink href={site.facebook} external variant="ghost">
            Contact Us
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
