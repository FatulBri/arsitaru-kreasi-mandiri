import { site } from "@/lib/site";

export function Cta() {
  return (
    <section
      className="border-t border-ink bg-ink text-cream"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-end md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-sand">
            Mulai percakapan
          </p>
          <h2
            id="cta-heading"
            className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
          >
            Siap merancang hunian Anda?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/75">
            Ceritakan kebutuhan desain rumah, renovasi, atau interior. Kami
            merespons melalui email.
          </p>
        </div>
        <a
          href={site.mailto}
          className="inline-flex items-center bg-cream px-6 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase text-ink transition-colors hover:bg-sand"
        >
          Konsultasi
        </a>
      </div>
    </section>
  );
}
