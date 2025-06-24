const CACHE_NAME = 'hello-aakriti-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './icon1.png',
  // Add other assets like CSS, JS if needed
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('aakriti-store').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './icon.png'
      ]);
    })
// Install event - cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key)))
    )
);
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
// Fetch event - serve cached content or fetch network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
})
);
});
