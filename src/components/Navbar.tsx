"use client";

import { useEffect, useId, useState } from "react";
import { navItems, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line/80 bg-paper/92 text-ink shadow-[0_1px_0_rgba(27,25,22,0.04)] backdrop-blur-md"
          : "border-b border-white/10 bg-ink/45 text-cream backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:h-[4.75rem] md:px-8">
        <a href="#beranda" className="group flex flex-col leading-none" onClick={close}>
          <span className="font-serif text-[1.35rem] tracking-[0.18em] uppercase">
            Arsitaru
          </span>
          <span
            className={`mt-1 text-[0.62rem] tracking-[0.32em] uppercase ${
              solid ? "text-muted" : "text-cream/70"
            }`}
          >
            Arsitek
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.78rem] tracking-[0.18em] uppercase transition-opacity hover:opacity-70 ${
                solid ? "text-ink-soft" : "text-cream/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.mailto}
            className={`inline-flex items-center border px-3 py-2 text-[0.65rem] tracking-[0.2em] uppercase sm:px-4 sm:py-2.5 sm:text-[0.72rem] transition-colors ${
              solid
                ? "border-ink bg-ink text-cream hover:bg-ink-soft"
                : "border-cream/80 bg-cream text-ink hover:bg-sand"
            }`}
          >
            Konsultasi
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full transition-all ${
                  solid ? "bg-ink" : "bg-cream"
                } ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full transition-opacity ${
                  solid ? "bg-ink" : "bg-cream"
                } ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-full transition-all ${
                  solid ? "bg-ink" : "bg-cream"
                } ${open ? "top-1.5 -rotate-45" : "top-3.5"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="min-h-[calc(100svh-4.25rem)] border-t border-line bg-paper text-ink lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-6" aria-label="Menu seluler">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-line/70 py-4 font-serif text-3xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.mailto}
            onClick={close}
            className="mt-6 inline-flex items-center justify-center border border-ink bg-ink px-5 py-3 text-[0.72rem] tracking-[0.2em] uppercase text-cream"
          >
            Konsultasi
          </a>
        </nav>
      </div>
    </header>
  );
}
