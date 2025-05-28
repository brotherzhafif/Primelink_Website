# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Sitemap

Untuk SEO, sitemap biasanya berupa file `sitemap.xml` yang diletakkan di folder `public/` pada project React.  
Sitemap ini berisi daftar URL penting di website, misal:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://primelink.id/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://primelink.id/artikel/slug-judul/id</loc>
    <priority>0.8</priority>
  </url>
  <!-- Tambahkan URL lain sesuai kebutuhan -->
</urlset>
```

**Cara membuat sitemap di React:**

- Buat file `public/sitemap.xml` secara manual, atau
- Gunakan plugin seperti [vite-plugin-sitemap](https://www.npmjs.com/package/vite-plugin-sitemap) untuk generate otomatis saat build.

Jangan lupa submit sitemap ke Google Search Console agar website lebih mudah terindeks.

## Sitemap Otomatis di React

Sitemap **tidak bisa digenerate otomatis dari kode React client-side saat dijalankan di browser**.  
Sitemap biasanya digenerate saat proses build (CI/CD) atau oleh backend/server.

### Cara umum generate sitemap otomatis:

1. **Static Site Generator/Build Plugin**  
   Gunakan plugin seperti:

   - [vite-plugin-sitemap](https://www.npmjs.com/package/vite-plugin-sitemap) (untuk Vite)
   - [react-router-sitemap](https://www.npmjs.com/package/react-router-sitemap) (untuk React Router)
   - [next-sitemap](https://www.npmjs.com/package/next-sitemap) (untuk Next.js)

2. **Manual Script Node.js**  
   Buat script Node.js yang membaca daftar route/artikel dari API atau file, lalu generate `public/sitemap.xml` sebelum deploy.

3. **Backend API**  
   Jika punya backend, endpoint `/sitemap.xml` bisa mengenerate sitemap secara dinamis.

### Contoh generate sitemap dengan vite-plugin-sitemap

1. Install:
   ```
   npm install vite-plugin-sitemap --save-dev
   ```
2. Tambahkan ke `vite.config.js`:

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import { ViteSitemapPlugin } from "vite-plugin-sitemap";

   export default defineConfig({
     plugins: [
       react(),
       ViteSitemapPlugin({
         hostname: "https://primelink.id",
         routes: [
           "/",
           "/artikel/:slug/:id", // gunakan dynamic route jika perlu
           // Tambahkan route lain jika perlu
         ],
       }),
     ],
   });
   ```

3. Setelah build (`npm run build`), file `dist/sitemap.xml` akan otomatis dibuat.

**Catatan:**

- Untuk artikel dinamis, sebaiknya fetch data artikel dari API lalu generate sitemap di proses build/deploy.
- Untuk project React murni (tanpa SSR/SSG), sitemap tetap harus digenerate di luar kode React (bukan di komponen).

## File penting untuk SEO & Web Modern

- **sitemap.xml**  
  Untuk membantu search engine mengindeks halaman website.

- **robots.txt**  
  Mengatur halaman mana yang boleh/tidak boleh di-crawl oleh search engine.  
  Contoh isi:

  ```
  User-agent: *
  Allow: /
  Sitemap: https://primelink.id/sitemap.xml
  ```

- **manifest.json**  
  Untuk Progressive Web App (PWA), mengatur icon, nama, dsb.

- **favicon.ico & og-image.jpg**  
  Untuk icon browser dan preview di media sosial.

- **Meta tag SEO**  
  Pastikan setiap halaman punya `<title>`, `<meta name="description">`, dan tag Open Graph (`og:*`) serta Twitter Card.

- **Google Analytics / Tag Manager**  
  Untuk tracking pengunjung.

- **service-worker.js** (opsional)  
  Untuk PWA/offline support.

Semua file di atas biasanya diletakkan di folder `public/` pada project React.

## SEO & Performance Checklist

- [x] **HTML Compression**: Use Vercel/Netlify/Cloudflare or similar for HTML minification.
- [x] **Custom 404 Page**: See `public/404.html` for a user-friendly error page.
- [x] **Structured Data**: JSON-LD for Organization & Website in `index.html`.
- [x] **Eliminate Render-Blocking Resources**: Preload critical CSS, use async/defer for scripts.
- [x] **Modern Image Formats**: Use `.webp` for icons/og-image if possible.
- [x] **Reduce HTML Size**: Minify HTML, move inline CSS to `main.css`.
- [x] **Social Media Integration**: AddThis widget in `index.html` for sharing.
- [x] **Google Analytics**: GA4 script in `index.html`.
- [x] **Properly Sized Images**: Use `img { max-width: 100%; height: auto; }` in CSS.
- [x] **Canonical Link**: Ensure canonical URL is correct.
- [x] **robots.txt & sitemap.xml**: Present in `public/`.
- [x] **manifest.json**: For PWA support.
- [x] **favicon.ico & og:image**: Use modern formats if possible.
- [x] **Meta tags**: SEO, Open Graph, Twitter Card.
- [x] **Service Worker**: (Optional, for PWA/offline).
- [x] **SPF Record**: Set up in DNS for email security (not in code).
- [x] **Obfuscate Email**: Use contact forms, not plain email addresses.
- [x] **Reduce HTTP Requests**: Combine/minify assets.
- [x] **Move Inline CSS**: Use `main.css` for styles.

> **Note:** For best results, deploy on a platform that supports HTML/CSS/JS minification and HTTP/2.
