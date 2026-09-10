const CACHE_NAME = 'hydrocalc-cache-v1';

// Список всех файлов и внешних ссылок, которые нужно сохранить для офлайн-работы
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    // Если у вас есть иконки, раскомментируйте строки ниже и укажите правильные имена
    // './icon-192.png',
    // './icon-512.png',
    
    // Внешние ресурсы (шрифты и Tailwind CSS)
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
];

// Установка сервис-воркера и сохранение файлов в кэш
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Кэширование файлов для офлайн-работы...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Активация и удаление старых кэшей (если вы обновите версию CACHE_NAME)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Перехват запросов: если нет интернета, отдаем из кэша
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Возвращаем файл из кэша, если он там есть
                if (response) {
                    return response;
                }
                // Иначе пробуем скачать из интернета
                return fetch(event.request);
            })
    );
});
