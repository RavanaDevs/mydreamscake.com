import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";

// Next.js adds <meta name="robots" content="noindex"> to this page automatically.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-ink px-6 text-center">
      <div className="max-w-md">
        <Logo size={96} priority className="mx-auto" />
        <p className="mt-8 eyebrow">Error 404</p>
        <h1 className="mt-4 text-5xl text-ivory sm:text-6xl">Page not found</h1>
        <div className="mx-auto mt-6 gold-rule" />
        <p className="mt-6 font-light text-ivory/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <ButtonLink href="/" variant="gold" className="mt-10">
          Back to home
        </ButtonLink>
      </div>
    </main>
  );
}
