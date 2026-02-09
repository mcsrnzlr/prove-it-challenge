var CACHE_NAME = 'prove-it-v2';
var LOCAL_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install - cache local assets only
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Cache opened');
      return cache.addAll(LOCAL_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) { return name !== CACHE_NAME; })
             .map(function(name) { return caches.delete(name); })
      );
    })
  );
  self.clients.claim();
});

// Fetch - network first for external, cache first for local
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // For same-origin requests: cache first, then network
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
      }).catch(function() {
        // If both fail, return the cached index for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
    );
  } else {
    // For external requests (fonts etc): network first, cache as fallback
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  }
});
