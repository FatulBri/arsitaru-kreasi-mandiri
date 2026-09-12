import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.brand,
    legalName: site.legalName,
    description: site.studio,
    email: site.email,
    url: site.arsitag.href,
    image: "/images/og.jpg",
    sameAs: [site.instagram.href, site.arsitag.href],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Neptunus I No. 01, Kel. Perwira",
      addressLocality: "Bekasi Utara, Kota Bekasi",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    areaServed: site.area.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan desain",
      itemListElement: [
        "Desain arsitektur rumah tinggal",
        "Design & Build",
        "Renovasi",
        "Desain interior",
        "Tata ruang",
        "Konsultasi desain",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
