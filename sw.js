var GHPATH = "/gredez";
var APP_PREFIX = "gredez_";
var VERSION = "version_002";
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/radar.html`,
  `${GHPATH}/aladin.html`,
  `${GHPATH}/epsgram.html`,
  `${GHPATH}/blitz.html`,
  `${GHPATH}/gefs.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/js/app.js`,
  `${GHPATH}/manifest.webmanifest`
];

var CACHE_NAME = APP_PREFIX + VERSION;
self.addEventListener("fetch", function (e) {
  console.log("Fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log("Responding with cache : " + e.request.url);
        return request;
      } else {
        console.log("File is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }
    })
  );
});

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Installing cache : " + CACHE_NAME);
      // Magic is here. Look the  mode: 'no-cors' part.
      cache
        .addAll(
          URLS.map(function (urlToPrefetch) {
            return new Request(urlToPrefetch, { mode: "no-cors" });
          })
        )
        .then(function () {
          console.log("All resources have been fetched and cached.");
        });
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log("Deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
