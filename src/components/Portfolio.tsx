import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { portfolio, site } from "@/lib/site";

const spanClass: Record<string, string> = {
  featured: "md:col-span-8 md:row-span-2",
  tall: "md:col-span-4",
  wide: "md:col-span-8",
  square: "md:col-span-4",
};

export function Portfolio() {
  return (
    <section
      id="portofolio"
      className="border-t border-line bg-cream"
      aria-labelledby="portofolio-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">
              Portofolio
            </p>
            <h2
              id="portofolio-heading"
              className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
            >
              Karya yang dapat diverifikasi, dan ruang untuk foto aktual.
            </h2>
          </div>
          <a
            href={site.arsitag.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[0.72rem] tracking-[0.2em] uppercase text-ink underline-offset-4 hover:underline"
          >
            Lihat Semua Proyek
            <span className="sr-only"> di Arsitag (tab baru)</span>
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          {portfolio.map((item) => {
            const card = (
              <>
                <div
                  className={`relative ${
                    item.span === "featured"
                      ? "aspect-[4/3] md:aspect-[5/4]"
                      : item.span === "tall"
                        ? "aspect-[3/4]"
                        : item.span === "wide"
                          ? "aspect-[16/10]"
                          : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={
                      item.verified
                        ? `${item.title}, ${item.location}. Foto ilustratif placeholder hingga foto proyek resmi dipasang.`
                        : `${item.title}. Gambar placeholder, bukan proyek terverifikasi.`
                    }
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 60vw, 100vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-cream md:p-7">
                    <p className="text-[0.65rem] tracking-[0.22em] uppercase text-sand">
                      {item.verified ? "Proyek Arsitag" : "Placeholder"}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream/80">{item.location}</p>
                    <p className="mt-2 text-xs leading-relaxed text-cream/70">
                      {item.note}
                    </p>
                  </div>
                </div>
              </>
            );

            return (
              <Reveal
                key={item.id}
                className={spanClass[item.span] ?? "md:col-span-4"}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden bg-paper-deep"
                  >
                    {card}
                  </a>
                ) : (
                  <article className="group relative overflow-hidden bg-paper-deep">
                    {card}
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
