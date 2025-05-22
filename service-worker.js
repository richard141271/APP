
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('ai-innovate-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'profil.html',
        'style.css',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
