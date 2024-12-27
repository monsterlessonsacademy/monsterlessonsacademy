const cacheName = "todo-app-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "css/base.css",
  "css/index.css",
  "main.js",
];
self.addEventListener("install", (event) => {
  console.log("SW install");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("SW fetch");

  if (event.request.url.includes("/todos")) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          return caches.open(cacheName).then((cache) => {
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
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("SW activate");
  const cacheWhiteList = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
