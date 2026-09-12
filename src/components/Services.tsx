import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="layanan"
      className="border-t border-line bg-paper"
      aria-labelledby="layanan-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">
            Layanan
          </p>
          <h2
            id="layanan-heading"
            className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
          >
            Dari rancangan rumah hingga ruang di dalamnya.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Lima fokus kerja. Konsultasi desain dapat dimulai kapan saja melalui
            email.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-line">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id}>
              <article className="group grid gap-6 py-8 md:grid-cols-12 md:items-center md:py-10">
                <p className="text-[0.7rem] tracking-[0.2em] text-taupe md:col-span-1">
                  0{index + 1}
                </p>
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep md:col-span-4">
                  <Image
                    src={service.image}
                    alt={`${service.title} — gambar placeholder, dapat diganti.`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="md:col-span-7 md:pl-6">
                  <h3 className="font-serif text-3xl md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
