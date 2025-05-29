# PrimeLink Website – React + Vite

PrimeLink Communication adalah perusahaan Internet Service Provider (ISP) yang menyediakan layanan internet cepat, stabil, dan solusi digital untuk rumah maupun bisnis. Website ini dibangun sebagai portal resmi perusahaan untuk menghadirkan informasi lengkap seputar layanan, paket harga, cakupan wilayah, artikel edukasi, serta membuka peluang karir secara profesional dan mudah diakses.

---

## Tentang Website

Website PrimeLink dirancang untuk mendukung kebutuhan digitalisasi perusahaan dengan desain profesional dan pengalaman pengguna yang mudah. Pengunjung dapat mencari informasi layanan, paket, coverage area, membaca blog, menghubungi customer service (termasuk AI Chatbot), serta melamar pekerjaan secara langsung melalui website.

---

## Fitur Utama

- **Landing Page Modern**: Desain responsif, profesional, dan mudah dinavigasi.
- **Layanan & Harga**: Info detail paket internet, fitur, dan harga.
- **Blog & Artikel**: Edukasi, tips, dan update teknologi.
- **Karir & Lowongan**: Daftar pekerjaan, filter, dan tombol Lamar via WhatsApp.
- **Form Kontak & Lokasi**: Formulir, alamat, dan peta cakupan wilayah.
- **AI Chatbot & Customer Service**: Bantuan otomatis dan live chat.
- **Integrasi WhatsApp**: Semua tombol WA (Lamar, Subscribe, Floating WA) pakai nomor dari `.env`.
- **SEO & Social**: Meta tag, Open Graph, Twitter Card, sitemap.xml, robots.txt.
- **PWA Ready**: manifest.json, favicon, og-image, service worker (opsional).

---

## Teknologi & Library Frontend

Website ini dibangun menggunakan:

- **React** – Library utama untuk UI interaktif dan modular.
- **Vite** – Build tool modern untuk pengembangan cepat dan optimalisasi produksi.
- **react-helmet-async** – Manajemen meta tag SEO per halaman.
- **react-router-dom** – Routing single-page application.
- **lucide-react** – Ikon modern dan ringan.
- **Framer Motion** – Animasi UI.
- **AddThis** – Integrasi social sharing (opsional).
- **AI Chatbot** – Komponen chatbot untuk layanan pelanggan otomatis (terhubung ke API backend).
- **Google Analytics** – (opsional) untuk tracking dan analitik pengunjung.

---

## Teknologi & Library Backend

Backend API dibangun menggunakan **Node.js** dan **Express** sebagai framework utama.  
Beberapa library dan modul utama yang digunakan antara lain:

- **express** – Framework utama REST API.
- **dotenv** – Manajemen konfigurasi environment (.env).
- **cors** – Mendukung cross-origin resource sharing.
- **firebase-admin** – Integrasi dengan Firebase untuk autentikasi dan database.
- **groq-sdk** – Koneksi ke layanan AI Groq untuk fitur chatbot.
- **multer** – Middleware untuk upload file/form-data.
- **socket.io** – Real-time communication (opsional).
- **axios** – HTTP client untuk kebutuhan API eksternal.

Semua dependensi backend dikelola melalui `package.json` dan `package-lock.json`.

---

## AI Chatbot

Fitur AI Chatbot pada website ini menggunakan model **Groq Llama 3** (llama-3.3-70b-versatile) melalui layanan Groq API.  
Chatbot didesain untuk menjawab pertanyaan seputar layanan, paket, FAQ, dan kontak resmi Primelink secara profesional dan informatif, serta selalu menggunakan Bahasa Indonesia.

---

## Struktur Folder

```
src/
  ├── assets/            # Gambar, ikon, logo
  ├── components/        # Komponen global (Chatbot, dsb)
  ├── pageSection/       # Section utama (about, career, qna, faq, dst)
  ├── pages/             # Halaman utama (Homepage, ArtikelDetail, dsb)
  ├── App.jsx            # Routing utama
  └── main.jsx           # Entry point React
public/
  ├── index.html         # HTML utama
  ├── favicon.ico        # Favicon
  ├── og-image.jpg       # Social preview
  ├── manifest.json      # PWA manifest
  ├── robots.txt         # SEO robots
  └── sitemap.xml        # Sitemap SEO
.env                     # Konfigurasi environment (WA number, dsb)
```

---

## Konfigurasi WhatsApp Number

Semua tombol WhatsApp (Lamar, Subscribe, Floating WA) mengambil nomor dari file `.env`:

```properties
VITE_WA_NUMBER=6282220368462
```

**Cara ganti nomor WA:**  
Ubah value di `.env`, lalu restart dev server (`npm run dev`).

Di kode, akses dengan:

```js
import.meta.env.VITE_WA_NUMBER;
```

---

## Cara Menjalankan

1. **Install dependencies**

   ```
   npm install
   ```

2. **Konfigurasi .env**

   ```
   VITE_WA_NUMBER=62***********
   ```

3. **Jalankan development server**

   ```
   npm run dev
   ```

4. **Build untuk produksi**
   ```
   npm run build
   ```

---

## SEO & Web Modern

- Setiap halaman sudah menggunakan meta tag dinamis (title, description, canonical, og:_, twitter:_) dengan [react-helmet-async].
- Sitemap (`public/sitemap.xml`) dan robots.txt (`public/robots.txt`) sudah tersedia untuk indexing mesin pencari.
- Social preview (og-image, favicon) sudah diatur.
- Mendukung PWA (Progressive Web App) dengan manifest.json dan service worker (opsional).
- Google Analytics dapat diaktifkan di `public/index.html`.

---

## Catatan

- Untuk sitemap/artikel dinamis, generate sitemap di proses build/deploy.
- Semua file SEO (`manifest.json`, `robots.txt`, `sitemap.xml`, favicon, og-image) ada di folder `public/`.
- Untuk perubahan nomor WhatsApp, cukup edit `.env` dan restart server.

---

> Website ini dibuat untuk mendukung kebutuhan digitalisasi dan layanan pelanggan PrimeLink Communication secara profesional, informatif, dan mudah diakses oleh seluruh calon pelanggan maupun pelamar kerja.

---
