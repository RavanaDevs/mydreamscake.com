import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Facebook, Heart, MessageCircle, Palette, PartyPopper, Sparkles, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { collection, images, nav, orderHref, site, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Dreams Cake — Every Celebration Deserves a Dream Cake" },
      { name: "description", content: "Beautifully crafted cakes for birthdays, weddings and every special moment. Your Dream Cake Awaits." },
      { property: "og:title", content: "My Dreams Cake — Your Dream Cake Awaits" },
      { property: "og:description", content: "Beautifully crafted cakes to make your most special moments unforgettable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnGold = "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-champagne hover:-translate-y-0.5";
const btnGhost = "inline-flex items-center justify-center gap-2 rounded-full border border-champagne/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition hover:border-champagne hover:bg-ivory/5";
const btnDark = "inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition hover:bg-ink";

function Heading({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 text-4xl leading-tight sm:text-5xl ${light ? "text-ivory" : "text-charcoal"}`}>{title}</h2>
      <div className="gold-rule mx-auto mt-6" />
      {sub && <p className={`mt-6 text-base leading-relaxed ${light ? "text-ivory/70" : "text-muted-foreground"}`}>{sub}</p>}
    </Reveal>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const gallery = [images.hero, images.birthday, images.chocolate, images.wedding, images.chocolate, images.birthday];
  return (
    <div className="bg-background">
      <Nav />
      <main>
        {/* Hero */}
        <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
          <div className="absolute inset-0 grid lg:grid-cols-2">
            <div className="hidden lg:block" />
            <div className="relative overflow-hidden">
              <img src={images.hero} alt="Three-tier ivory cake with gold leaf and fresh roses" width={1280} height={1600}
                className="animate-slow-zoom h-full w-full object-cover opacity-60 lg:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
            </div>
          </div>
          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-16 pt-28">
            <div className="max-w-xl">
              <img src={logo} alt="" className="mb-8 h-28 w-28 object-contain" />
              <p className="eyebrow">{site.tagline}</p>
              <h1 className="mt-5 text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
                Every Celebration Deserves a <em className="text-champagne">Dream Cake.</em>
              </h1>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-ivory/75">
                Beautifully crafted cakes to make your most special moments unforgettable.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#cakes" className={btnGold}>Explore Our Cakes <ArrowRight className="h-4 w-4" /></a>
                <a href={orderHref()} target="_blank" rel="noreferrer" className={btnGhost}>Order Your Dream Cake</a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:py-36">
          <Reveal className="relative">
            <img src={images.wedding} alt="Ivory two-tier cake with sugar roses and pearls" width={1024} height={1280} loading="lazy"
              className="aspect-[4/5] w-full object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 -z-10 hidden h-full w-full border border-gold/40 sm:block" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 text-4xl leading-tight text-charcoal sm:text-5xl">Where Sweet Dreams Become Reality</h2>
            <div className="gold-rule mt-6" />
            <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
              Every cake tells a story. At My Dreams Cake, we believe that every special moment deserves something
              beautiful, memorable, and made with love.
            </p>
            <p className="mt-8 font-script text-4xl text-gold">{site.tagline}</p>
          </Reveal>
        </section>

        {/* Collection */}
        <section id="cakes" className="bg-card py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Heading eyebrow="The Collection" title="Explore Our Creations" sub="A little inspiration for your next celebration." />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {collection.map((c, i) => (
                <Reveal key={c.name} delay={i * 100}>
                  <button onClick={() => setLightbox(c.img)} className="group block w-full text-left">
                    <div className="overflow-hidden">
                      <img src={c.img} alt={c.name} width={1024} height={1280} loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className="mt-5 text-2xl text-charcoal">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      View Details <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="bg-ink py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Heading light eyebrow="Featured" title="Crafted for Your Moment" />
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              <Reveal className="lg:col-span-2">
                <figure className="group overflow-hidden">
                  <img src={images.chocolate} alt="Chocolate drip cake with gold macarons and berries" loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <figcaption className="mt-4 font-display text-xl italic text-champagne">Chocolate, berries & gold</figcaption>
                </figure>
              </Reveal>
              <div className="grid gap-6">
                {[{ src: images.wedding, cap: "Pearls & sugar roses" }, { src: images.birthday, cap: "A rainbow birthday" }].map((f, i) => (
                  <Reveal key={f.cap} delay={150 + i * 100}>
                    <figure className="group overflow-hidden">
                      <img src={f.src} alt={f.cap} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                      <figcaption className="mt-3 font-display text-lg italic text-champagne">{f.cap}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <Heading eyebrow="Why My Dreams Cake" title="Made to Be Remembered" />
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, t: "Beautiful Designs", d: "Cakes made to be the centrepiece of the table." },
              { icon: Palette, t: "Personalised", d: "Shaped around your theme, colours and ideas." },
              { icon: PartyPopper, t: "Every Occasion", d: "Birthdays, weddings, anniversaries and more." },
              { icon: Heart, t: "Made with Love", d: "Care and attention in every detail." },
            ].map((w, i) => (
              <Reveal key={w.t} delay={i * 100} className="text-center">
                <w.icon className="mx-auto h-7 w-7 text-gold" strokeWidth={1.2} />
                <h3 className="mt-5 text-2xl text-charcoal">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How to order */}
        <section className="bg-muted py-28 lg:py-36">
          <div className="mx-auto max-w-6xl px-6">
            <Heading eyebrow="How to Order" title="Three Simple Steps" />
            <ol className="mt-16 grid gap-12 md:grid-cols-3">
              {[
                { n: "01", t: "Explore", d: "Browse cake designs and find inspiration." },
                { n: "02", t: "Share Your Idea", d: "Contact the shop with your preferred design, occasion, size, and requirements." },
                { n: "03", t: "Confirm Your Order", d: "Discuss availability, pricing, pickup or delivery, and finalise directly with the shop." },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 120}>
                  <li className="border-t border-gold/40 pt-6">
                    <span className="font-display text-5xl text-gold">{s.n}</span>
                    <h3 className="mt-3 text-2xl text-charcoal">{s.t}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <div className="mt-14 text-center">
              <a href={orderHref()} target="_blank" rel="noreferrer" className={btnDark}>
                <MessageCircle className="h-4 w-4" /> {site.whatsapp ? "Enquire on WhatsApp" : "Message Us on Facebook"}
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <Heading eyebrow="Kind Words" title="From Our Customers" />
          {testimonials.length ? (
            <div className="mt-14 space-y-14">
              {testimonials.map((t, i) => (
                <Reveal key={i}>
                  <blockquote className="font-display text-2xl italic leading-relaxed text-charcoal sm:text-3xl">“{t.quote}”</blockquote>
                  {t.name && <p className="eyebrow mt-5">{t.name}{t.source ? ` · ${t.source}` : ""}</p>}
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="mt-12 text-muted-foreground">
                Read what our customers say on our{" "}
                <a href={site.facebook} target="_blank" rel="noreferrer" className="text-gold underline-offset-4 hover:underline">Facebook page</a>.
              </p>
            </Reveal>
          )}
        </section>

        {/* Social gallery */}
        <section id="gallery" className="bg-card py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Heading eyebrow="@mydreamscakeshop" title="Follow Our Sweet Journey"
              sub="Discover more of our creations and get inspired by the moments we help make special." />
            <div className="mt-16 columns-2 gap-4 md:columns-3">
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setLightbox(g)} className="group mb-4 block w-full overflow-hidden" aria-label="Open image">
                  <img src={g} alt="Cake from the gallery" loading="lazy"
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`} />
                </button>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href={site.facebook} target="_blank" rel="noreferrer" className={btnDark}><Facebook className="h-4 w-4" /> Visit Our Facebook</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="relative overflow-hidden bg-ink py-32 text-center">
          <img src={logo} alt="" aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
          <Reveal className="relative mx-auto max-w-2xl px-6">
            <p className="eyebrow">Begin Your Order</p>
            <h2 className="mt-5 text-5xl text-ivory sm:text-6xl">Let's Make Your Dream Cake.</h2>
            <p className="mt-6 text-lg font-light text-ivory/70">Have a special celebration coming up? Let's create something beautiful together.</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={orderHref()} target="_blank" rel="noreferrer" className={btnGold}>Order Your Cake</a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className={btnGhost}>Contact Us</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-gold/15 bg-ink text-ivory/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <img src={logo} alt={`${site.name} logo`} className="h-24 w-24 object-contain" />
            <p className="mt-3 font-script text-2xl text-champagne">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2 text-sm">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-champagne">{n.label}</a></li>)}</ul>
          </nav>
          <div className="text-sm">
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2">
              {site.phone && <li>Phone: {site.phone}</li>}
              {site.whatsapp && <li><a href={orderHref()} className="hover:text-champagne">WhatsApp</a></li>}
              {site.location && <li>{site.location}</li>}
              {site.hours && <li>{site.hours}</li>}
              <li><a href={site.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-champagne"><Facebook className="h-4 w-4" /> facebook.com/mydreamscakeshop</a></li>
            </ul>
          </div>
        </div>
        <p className="border-t border-ivory/10 py-6 text-center text-xs">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </footer>

      {/* Mobile floating order */}
      <a href={orderHref()} target="_blank" rel="noreferrer" aria-label="Order your cake"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-xl md:hidden">
        <MessageCircle className="h-6 w-6" />
      </a>

      {lightbox && (
        <div role="dialog" aria-modal className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-6" onClick={() => setLightbox(null)}>
          <button className="absolute right-6 top-6 text-ivory" aria-label="Close"><X className="h-7 w-7" /></button>
          <img src={lightbox} alt="Cake enlarged" className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}
    </div>
  );
}
