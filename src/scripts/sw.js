import { precacheAndRoute } from "workbox-precaching";
import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("push", () => {
  console.log("Service Worker: Pushed");
});

// Daftar asset yang akan dicaching
const assetsToCache = [
  "./",
  "./icons/icon.png",
  "./icons/icon_x48.png",
  "./icons/icon_x72.png",
  "./icons/icon_x96.png",
  "./icons/icon_x128.png",
  "./icons/icon_x192.png",
  "./icons/icon_x384.png",
  "./icons/icon_x512.png",
  "./index.html",
  "./favicon.png",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
