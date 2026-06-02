# PuddingHolic Website

Website promosi untuk PuddingHolic dengan landing page interaktif, slideshow hero, dan pilihan varian rasa.

## Fitur Utama

- Hero slideshow otomatis.
- Pilih varian rasa untuk melihat foto produk.
- CTA terhubung ke Google Form pemesanan.
- Tampilan responsif untuk mobile dan desktop.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS

## Prasyarat

- Node.js 18+ (disarankan LTS)
- npm (atau pnpm/yarn/bun)

## Menjalankan Secara Lokal

1) Install dependencies

```bash
npm install
```

2) Jalankan dev server

```bash
npm run dev
```

3) Buka di browser

- http://localhost:3000

## Struktur Folder

```text
public/
	images/
src/
	app/
		data.js
		globals.css
		layout.js
		page.js
```

## Konfigurasi

- Data konten utama ada di `src/app/data.js`.
- Metadata dan font ada di `src/app/layout.js`.

## Build Produksi

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1) Push repo ke GitHub.
2) Impor project di Vercel.
3) Framework preset: Next.js (auto).
4) Klik Deploy.

## Troubleshooting (Dev di Jaringan Lokal)

Jika akses lewat IP jaringan tidak bisa (slideshow/tombol tidak jalan), tambahkan `allowedDevOrigins` pada `next.config.mjs` lalu restart dev server.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
	allowedDevOrigins: ['192.168.0.193'],
};

export default nextConfig;
```
