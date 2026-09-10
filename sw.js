// Используем библиотеку Workbox от Google, как рекомендует PWABuilder
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// Указываем наш главный файл калькулятора
// ВАЖНО: Если ваш файл на сервере называется иначе (например, hydro_calc.html), 
// обязательно измените название здесь!
const offlineFallbackPage = "index.html"; 

// Указываем стили и шрифты, чтобы калькулятор был красивым без интернета
const ASSETS_TO_CACHE = [
  offlineFallbackPage,
  "manifest.json",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0",
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE)) // Кэшируем сразу всё необходимое
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  // 1. Обработка навигации (загрузка самой страницы HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        // Пытаемся загрузить свежую версию из интернета
        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {
        // Если интернета нет, отдаем закэшированную страницу
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  } 
  // 2. Обработка стилей, шрифтов и иконок
  else {
    event.respondWith((async () => {
      const cachedResp = await caches.match(event.request);
      // Если файл есть в кэше — отдаем его (работает офлайн), иначе качаем из сети
      return cachedResp || fetch(event.request);
    })());
  }
});
