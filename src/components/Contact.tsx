"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Konsultasi desain — ${name || "Arsitaru"}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `${site.mailto}?subject=${subject}&body=${body}`;
    setStatus("ready");
  };

  return (
    <section
      id="kontak"
      className="border-t border-line bg-cream"
      aria-labelledby="kontak-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">
            Kontak
          </p>
          <h2
            id="kontak-heading"
            className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
          >
            Hubungi studio.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Tidak ada formulir terpisah di server. Pesan Anda membuka aplikasi
            email ke {site.email}.
          </p>

          <address className="mt-10 not-italic">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
              Alamat
            </p>
            <p className="mt-2 max-w-sm leading-relaxed text-ink">
              {site.address.line}
            </p>
            <a
              href={site.address.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-ink-soft underline-offset-4 hover:underline"
            >
              Buka di peta
            </a>
          </address>

          <ul className="mt-8 space-y-4 text-ink">
            <li>
              <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
                Email
              </p>
              <a
                href={site.mailto}
                className="mt-1 inline-block underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li>
              <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
                Instagram
              </p>
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block underline-offset-4 hover:underline"
              >
                {site.instagram.handle}
              </a>
            </li>
            <li>
              <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
                Portofolio
              </p>
              <a
                href={site.arsitag.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block underline-offset-4 hover:underline"
              >
                {site.arsitag.label}
              </a>
            </li>
          </ul>
        </div>

        <form
          className="flex flex-col gap-5 md:col-span-7"
          onSubmit={onSubmit}
          noValidate
        >
          <div>
            <label htmlFor="name" className="text-[0.7rem] tracking-[0.18em] uppercase text-muted">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-ink"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[0.7rem] tracking-[0.18em] uppercase text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-ink"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-[0.7rem] tracking-[0.18em] uppercase text-muted">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full resize-y border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-ink"
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex w-fit items-center bg-ink px-6 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase text-cream transition-colors hover:bg-ink-soft"
          >
            Kirim lewat email
          </button>
          {status === "ready" ? (
            <p className="text-sm text-ink-soft" role="status">
              Membuka aplikasi email Anda. Jika tidak terbuka, kirim langsung ke{" "}
              <a className="underline underline-offset-4" href={site.mailto}>
                {site.email}
              </a>
              .
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
