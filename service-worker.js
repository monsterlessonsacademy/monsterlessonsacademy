const CACHE_NAME = "todo-app-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/base.css",
  "/css/index.css",
  "/main.js",
];

self.addEventListener("install", (event) => {
  console.log("SW install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Requests
self.addEventListener("fetch", (event) => {
  console.log("SW fetch", event.request.url);

  if (event.request.url.includes("/todos")) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            } else {
              return new Response(JSON.stringify([]), {
                headers: { "Content-Type": "application/json" },
              });
            }
          });
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  console.log("SW activate");
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
