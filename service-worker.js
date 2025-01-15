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
  const { url } = event.request;

  // Skip caching for any API requests
  if (url.includes("/todos") || url.startsWith("http://localhost:3004")) {
    console.log(`Skipping caching for API call: ${url}`);
    return; // Allow the request to pass through to the network
  }

  // Handle static asset caching
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Serve cached response, but check for updates
        return fetch(event.request).then((response) => {
          if (response.status === 200) {
            // Update the cache with the new response
            caches.open(cacheName).then((cache) => {
              cache.put(event.request, response.clone());
            });
          }
          return response;
        });
      }
      // If not cached, fetch and cache the response
      return fetch(event.request).then((response) => {
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, response.clone());
        });
        return response;
      });
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
