/*
// キャッシュ名とキャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches2';
var urlsToCache = [
	'/primehirota.github.io/test2/'
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
*/
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwa-sample-caches2').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/primehirota.github.io/test2/'
     ]);
   })
 );
});
