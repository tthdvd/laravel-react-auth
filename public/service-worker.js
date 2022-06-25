const cacheName = 'my-cache-2'

const cachedFiles = [
    '/',
    '/js/app.js',
    '/api/user',
    '/app/dashboard'
];

self.addEventListener('activate', e => self.clients.claim())

self.addEventListener('install', e => {
    console.log('installed')
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(cachedFiles))
    )
})


self.addEventListener('fetch', e => {
    console.log(e)
    e.respondWith(
        caches.match(e.request)
            .then(response => response ? response : fetch(e.request))
    )
});
