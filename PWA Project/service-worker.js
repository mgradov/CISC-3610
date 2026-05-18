const CACHE_NAME = 'wild-animals-v2';

const FILES_TO_CACHE = [
  './',
  './Animal Page.html',
  './style.css',
  './app.js',
  './data.json',
  './manifest.json',
  './animal images/app icon.webp',
  './animal images/african elephant.jpg',
  './animal images/bengal tiger.jpg',
  './animal images/emperor penguin.jpg',
  './animal images/giant panda.webp',
  './animal images/polar bear.jpg',
  './animal images/red kangaroo.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
