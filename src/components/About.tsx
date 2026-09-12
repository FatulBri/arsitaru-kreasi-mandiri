import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="tentang"
      className="border-t border-line bg-cream"
      aria-labelledby="tentang-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <Reveal className="md:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep ring-1 ring-line">
            <Image
              src="/images/about/studio.jpg"
              alt="Ruang kerja studio dengan meja gambar, material kayu, dan jendela ke taman tropis — gambar placeholder, dapat diganti."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col justify-center md:col-span-6 md:pl-6">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">
            Tentang studio
          </p>
          <h2
            id="tentang-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Arsitektur dan interior untuk hunian yang dihuni sungguh-sungguh.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            <strong className="font-medium text-ink">{site.legalName}</strong>{" "}
            beroperasi dengan merek{" "}
            <strong className="font-medium text-ink">{site.brand}</strong> —
            studio desain arsitektur dan interior. Kami mengerjakan desain
            arsitektur rumah tinggal, Design &amp; Build, renovasi, desain
            interior, tata ruang, serta konsultasi desain.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Wilayah layanan: {site.area.join(", ")}. Studio berkantor di{" "}
            {site.address.line}.
          </p>
          <dl className="mt-8 grid gap-4 border-t border-line pt-8 text-sm">
            <div>
              <dt className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
                Nama legal
              </dt>
              <dd className="mt-1 text-ink">{site.legalName}</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
                Merek
              </dt>
              <dd className="mt-1 text-ink">{site.brand}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
