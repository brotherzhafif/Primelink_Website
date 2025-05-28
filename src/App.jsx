import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ArtikelDetail from "./pages/ArtikelDetail";


function App() {
  return (
    // Hapus <Router> di sini, karena sudah ada di index.js atau entry point utama
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/artikel/:slug/:id" element={<ArtikelDetail />} />
    </Routes>
  );
}

export default App;

// Untuk sitemap di React frontend, biasanya sitemap.xml dihasilkan oleh backend atau proses build (bukan di komponen React).
// Jika ingin sitemap.xml, gunakan tools seperti vite-plugin-sitemap, react-router-sitemap, atau generate manual di public/sitemap.xml.
// Tidak perlu diubah di file App.jsx.

// Untuk SEO dan web modern, selain sitemap.xml, sebaiknya juga ada:
// - robots.txt (atur crawling bot search engine)
// - manifest.json (PWA support, icon, dsb.)
// - favicon.ico & og:image (untuk icon dan social preview)
// - meta tag SEO (title, description, og:*, twitter:* di setiap halaman, sudah ada di ArtikelDetail)
// - analytics (Google Analytics, dsb.)
// - service worker (jika ingin PWA/offline support)
// Semua file ini biasanya diletakkan di folder public/ dan diatur di index.html atau masing-masing halaman.