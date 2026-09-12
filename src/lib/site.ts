export const site = {
  legalName: "CV. Arsitaru Kreasi Mandiri",
  brand: "Arsitaru Arsitek",
  tagline: "Merancang Ruang, Mewujudkan Hunian.",
  studio:
    "Studio desain arsitektur & interior yang mendampingi perencanaan hunian di Bekasi, Tangerang, dan Jabodetabek.",
  email: "arsitar_desain@yahoo.com",
  mailto: "mailto:arsitar_desain@yahoo.com",
  instagram: {
    handle: "@arsitaru.arsitek",
    href: "https://www.instagram.com/arsitaru.arsitek/",
  },
  arsitag: {
    label: "Profil Arsitag",
    href: "https://www.arsitag.com/profile/arsitaru-arsitek",
  },
  address: {
    line: "Jl. Neptunus I No. 01, Kel. Perwira, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat",
    maps: "https://www.google.com/maps/search/?api=1&query=Jl.+Neptunus+I+No.+01%2C+Kel.+Perwira%2C+Kec.+Bekasi+Utara%2C+Kota+Bekasi%2C+Jawa+Barat",
  },
  area: ["Bekasi", "Tangerang", "Jabodetabek"],
} as const;

export const navItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const services = [
  {
    id: "desain-arsitektur",
    title: "Desain Arsitektur",
    image: "/images/services/desain-arsitektur.jpg",
    description:
      "Perencanaan desain arsitektur rumah tinggal — dari ide awal, konsep massa, hingga pengembangan gambar kerja.",
  },
  {
    id: "design-build",
    title: "Design & Build",
    image: "/images/services/design-build.jpg",
    description:
      "Pendampingan terpadu desain dan pelaksanaan agar rancangan dan pembangunan berjalan dalam satu alur kerja.",
  },
  {
    id: "renovasi",
    title: "Renovasi",
    image: "/images/services/renovasi.jpg",
    description:
      "Perencanaan renovasi hunian yang sudah ada: penyesuaian fungsi, sirkulasi, dan karakter ruang tanpa mengada-ada.",
  },
  {
    id: "desain-interior",
    title: "Desain Interior",
    image: "/images/services/desain-interior.jpg",
    description:
      "Desain interior yang selaras dengan arsitektur — material, cahaya, dan tata letak untuk hunian yang nyaman dihuni.",
  },
  {
    id: "tata-ruang",
    title: "Tata Ruang",
    image: "/images/services/tata-ruang.jpg",
    description:
      "Penataan ruang agar kebutuhan sehari-hari, privasi, dan keterhubungan antar ruang saling mendukung.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusi kebutuhan, lokasi, dan arah desain. Mulai lewat email — tanpa komitmen di luar yang Anda siapkan.",
  },
  {
    number: "02",
    title: "Konsep",
    description:
      "Penyusunan ide ruang dan massa bangunan sebagai dasar kesepahaman sebelum desain dikembangkan lebih jauh.",
  },
  {
    number: "03",
    title: "Pengembangan Desain",
    description:
      "Pendalaman denah, tampak, potongan, dan interior hingga rancangan siap dibahas untuk tahap berikutnya.",
  },
  {
    number: "04",
    title: "Pelaksanaan",
    description:
      "Untuk skema Design & Build atau pendampingan pelaksanaan, rancangan diterjemahkan ke lapangan secara bertahap.",
  },
  {
    number: "05",
    title: "Serah Terima",
    description:
      "Penutupan tahapan kerja: dokumen, hasil desain, atau hunian yang telah disepakati diserahkan kepada klien.",
  },
] as const;

export const portfolio = [
  {
    id: "rumah-bpk-kh",
    title: "Rumah Bpk KH",
    location: "Pulo Gadung, Jakarta Timur",
    image: "/images/portfolio/01-rumah-bpk-kh.jpg",
    href: "https://www.arsitag.com/project/rumah-bpk-kh-pulo-gadung-jakarta-timur",
    verified: true,
    note: "Proyek terverifikasi di Arsitag",
    span: "featured",
  },
  {
    id: "studi-halaman",
    title: "Studi visual — halaman dalam",
    location: "Gambar placeholder",
    image: "/images/portfolio/02-studi-halaman.jpg",
    href: null,
    verified: false,
    note: "Bukan proyek terverifikasi. Ganti dengan foto aktual.",
    span: "tall",
  },
  {
    id: "studi-ruang-tamu",
    title: "Studi visual — ruang tamu",
    location: "Gambar placeholder",
    image: "/images/portfolio/03-studi-ruang-tamu.jpg",
    href: null,
    verified: false,
    note: "Bukan proyek terverifikasi. Ganti dengan foto aktual.",
    span: "wide",
  },
  {
    id: "studi-fasad",
    title: "Studi visual — fasad malam",
    location: "Gambar placeholder",
    image: "/images/portfolio/04-studi-fasad.jpg",
    href: null,
    verified: false,
    note: "Bukan proyek terverifikasi. Ganti dengan foto aktual.",
    span: "wide",
  },
  {
    id: "studi-dapur",
    title: "Studi visual — dapur & ruang makan",
    location: "Gambar placeholder",
    image: "/images/portfolio/05-studi-dapur.jpg",
    href: null,
    verified: false,
    note: "Bukan proyek terverifikasi. Ganti dengan foto aktual.",
    span: "square",
  },
  {
    id: "studi-privat",
    title: "Studi visual — ruang privat",
    location: "Gambar placeholder",
    image: "/images/portfolio/06-studi-privat.jpg",
    href: null,
    verified: false,
    note: "Bukan proyek terverifikasi. Ganti dengan foto aktual.",
    span: "tall",
  },
] as const;
