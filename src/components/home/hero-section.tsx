import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";
import { Picture } from "@/components/ui/picture";
import { orderLink, site } from "@/config/site";
import { photos } from "@/content/home";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-ink">
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="hidden lg:block" />
        <div className="relative overflow-hidden">
          <Picture
            {...photos.hero}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="h-full w-full animate-slow-zoom object-cover opacity-60 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-7xl items-center px-6 pt-28 pb-16">
        <div className="max-w-xl">
          <Logo size={112} alt={site.name} priority className="mb-8" />
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Every Celebration Deserves a{" "}
            {/* Regular weight: the brand's italic is the 400 cut, even inside a 500 heading. */}
            <em className="font-normal text-champagne">Dream Cake.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed font-light text-ivory/75">
            Beautifully crafted birthday, wedding and custom cakes to make your most special moments
            unforgettable.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#cakes" variant="gold">
              Explore Our Cakes <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={orderLink.href} external variant="ghost">
              Order Your Dream Cake
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
