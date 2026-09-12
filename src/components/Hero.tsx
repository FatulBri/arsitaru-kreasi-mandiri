import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/hero/hero.jpg"
        alt="Hunian tropis kontemporer dengan dinding plester hangat dan rangka jendela gelap — gambar placeholder, dapat diganti."
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/25 to-ink/85"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-36 md:px-8 md:pb-24">
        <p className="mb-6 text-[0.72rem] tracking-[0.32em] uppercase text-sand">
          {site.brand} · {site.area.join(" · ")}
        </p>
        <h1
          id="hero-heading"
          className="max-w-4xl font-serif text-[2.75rem] leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          {site.tagline}
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          {site.studio}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.mailto}
            className="inline-flex items-center justify-center bg-cream px-6 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase text-ink transition-colors hover:bg-sand"
          >
            Konsultasi desain
          </a>
          <a
            href="#portofolio"
            className="inline-flex items-center justify-center border border-cream/50 px-6 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase text-cream transition-colors hover:bg-cream/10"
          >
            Lihat portofolio
          </a>
        </div>
      </div>
    </section>
  );
}
