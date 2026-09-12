import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-[0.16em] uppercase">
            {site.brand}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            {site.legalName}. Studio desain arsitektur &amp; interior.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Tautan footer">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
            Navigasi
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ink-soft hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
            Studio
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {site.address.line}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={site.mailto} className="text-ink-soft hover:text-ink">
              {site.email}
            </a>
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-ink"
            >
              Instagram {site.instagram.handle}
            </a>
            <a
              href={site.arsitag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-ink"
            >
              {site.arsitag.label}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>Bekasi · Tangerang · Jabodetabek</p>
        </div>
      </div>
    </footer>
  );
}
