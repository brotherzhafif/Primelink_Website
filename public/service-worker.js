// Contoh dasar service worker untuk cache (opsional, jika ingin PWA/offline support)
self.addEventListener('install', event => {
    self.skipWaiting();
});
self.addEventListener('activate', event => {
    self.clients.claim();
});
self.addEventListener('fetch', event => {
    // Implementasi cache sesuai kebutuhan
});
