const CACHE_NAME = 'hydrocalc-cache-v2';

// ВАЖНО: Имя HTML-файла здесь должно ТОЧНО совпадать с тем, как он называется на вашем хостинге!
// Если ваш файл называется hydro_calc_android.html, измените './index.html' на './hydro_calc_android.html'
const ASSETS_TO_CACHE = [
    './',
    './index.html', // <-- ПРОВЕРЬТЕ ЭТО ИМЯ ФАЙЛА
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
];

// 1. Установка и кэширование
self.addEventListener('install', (event) => {
    // ЗАСТАВЛЯЕМ воркер активироваться немедленно, не дожидаясь закрытия вкладок
    self.skipWaiting(); 
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Кэширование файлов...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .catch((error) => {
                console.error('[Service Worker] Ошибка кэширования. Проверьте правильность путей в ASSETS_TO_CACHE:', error);
            })
    );
});

// 2. Активация и очистка старого кэша
self.addEventListener('activate', (event) => {
    // ЗАСТАВЛЯЕМ воркер сразу взять под контроль все открытые страницы
    event.waitUntil(self.clients.claim()); 

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Удаление старого кэша:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 3. Перехват запросов (Offline Support - Cache First, then Network)
self.addEventListener('fetch', (event) => {
    // Игнорируем запросы, которые не относятся к GET (например, POST)
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Если файл есть в кэше — отдаем его (работает офлайн!)
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Если файла нет в кэше — пытаемся скачать из интернета
                return fetch(event.request).then((networkResponse) => {
                    // Можно дополнительно кэшировать новые файлы на лету, но для калькулятора это не обязательно
                    return networkResponse;
                }).catch(() => {
                    // Если нет интернета и файла нет в кэше, для навигационных запросов можно отдать главную страницу
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html'); // <-- ПРОВЕРЬТЕ ИМЯ ФАЙЛА ЗДЕСЬ ТОЖЕ
                    }
                });
            })
    );
});
