# CV. Arsitaru Kreasi Mandiri

**Arsitaru Arsitek** — studio desain arsitektur dan interior yang melayani wilayah Bekasi, Tangerang, dan sekitarnya (Jabodetabek).

Situs profil perusahaan: Next.js (App Router) + Tailwind CSS, siap di-deploy ke Vercel.

## Profil & kontak

| | |
|---|---|
| **Nama legal** | CV. Arsitaru Kreasi Mandiri |
| **Merek** | Arsitaru Arsitek |
| **Alamat kantor** | Jl. Neptunus I No. 01, Kel. Perwira, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat |
| **Wilayah layanan** | Bekasi, Tangerang, dan Jabodetabek |
| **Email** | [arsitar_desain@yahoo.com](mailto:arsitar_desain@yahoo.com) |

Layanan: desain arsitektur rumah tinggal, Design & Build, renovasi, desain interior, tata ruang, dan konsultasi desain.

## Portofolio & media sosial

- [Profil Arsitag — Arsitaru Arsitek](https://www.arsitag.com/profile/arsitaru-arsitek)
- [Instagram @arsitaru.arsitek](https://www.instagram.com/arsitaru.arsitek/)
- Contoh proyek: [Rumah Bpk KH, Pulo Gadung, Jakarta Timur](https://www.arsitag.com/project/rumah-bpk-kh-pulo-gadung-jakarta-timur)

## Menjalankan secara lokal

Prasyarat: Node.js 20+ dan npm.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build produksi

```bash
npm run build
npm start
```

## Deploy ke Vercel

1. Push repositori ini ke GitHub.
2. Di [Vercel](https://vercel.com), pilih **Add New… → Project** dan impor repositori.
3. Framework terdeteksi sebagai **Next.js**. Biarkan perintah default:
   - **Install:** `npm install`
   - **Build:** `npm run build`
   - **Output:** `.next` (dikelola Vercel)
4. Opsional: set environment variable `NEXT_PUBLIC_SITE_URL` ke URL produksi (contoh `https://domain-anda.vercel.app`) agar canonical, sitemap, dan Open Graph memakai host yang benar.
5. Deploy. Tidak ada secret atau backend yang diperlukan — CTA memakai `mailto:arsitar_desain@yahoo.com`.

## Struktur penting

- `src/app/page.tsx` — halaman tunggal (Beranda, Tentang, Layanan, Portofolio, Proses, CTA, Kontak)
- `src/lib/site.ts` — data perusahaan yang terverifikasi
- `src/components/` — navbar, hero, bagian halaman, footer
- `public/images/` — foto placeholder yang bisa diganti (lihat `public/images/README.md`)

## Sumber

1. [Arsitag — Arsitaru Arsitek](https://www.arsitag.com/profile/arsitaru-arsitek)
2. [Instagram @arsitaru.arsitek](https://www.instagram.com/arsitaru.arsitek/)
3. [Proyek Rumah Bpk KH — Pulo Gadung](https://www.arsitag.com/project/rumah-bpk-kh-pulo-gadung-jakarta-timur)
