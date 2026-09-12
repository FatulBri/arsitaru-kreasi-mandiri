import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-paper px-6 text-center">
      <p className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl text-ink">Halaman tidak ditemukan.</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        Kembali ke beranda Arsitaru Arsitek.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-ink px-6 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase text-cream"
      >
        Ke beranda
      </Link>
    </main>
  );
}
