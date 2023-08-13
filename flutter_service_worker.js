'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "2a656e2f144238470506d20b83430ef5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "39cdec0c1c9773b1ef6b5948152d5a7a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4bedb2e3464ff25d64d8828dccffe559",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3584f457faff5dbc12b23365ef15231",
".git/logs/refs/heads/main": "a3584f457faff5dbc12b23365ef15231",
".git/logs/refs/remotes/origin/HEAD": "8cba2d685d5c7c200918cdcfd9d8a8ff",
".git/logs/refs/remotes/origin/main": "92efead7226fd5c3dc4c8fec572bffce",
".git/objects/05/8fe896c04c94f6a1b602c89ece54bca8c01621": "2c90489fd3c64748fc1dd9f438783dac",
".git/objects/07/5387d6a13613df829954fd21bb749db180f362": "bbeb37c8a4b5e920a9cd772f6dbdd0c2",
".git/objects/0b/ed709a7d28eb22c1cca4ea0f0aa9b567d96f91": "e07018afb1c7eb738a4ff9ce91159ac2",
".git/objects/0c/3a6e4a2ef7a766f7ac710586fc07c30bc7c87b": "1d965612cfc66d1c0c711e8ce856c570",
".git/objects/15/360016d74ace34ed8fb4bbff7216c4e229e51a": "1db36c67fb8cda78050ccb87b10aa7d1",
".git/objects/17/a4ca7c6602f65e1aeca213122c0115c69bbd32": "bc23b4b83c2a75051ae94763fcbd0241",
".git/objects/19/8549692829f18da43fb0d616ff16474ab6b99f": "58524185b0f13a770c9f2bf028a91d97",
".git/objects/2a/94343d9a19c2dbb5d9745bb00e926de642cc79": "88431bb29864904c5cdb15b91fa815df",
".git/objects/33/197cff1e392f541a7445a7ca4f1c488eb412d1": "73e8154c6f0f37a95b9c66e596e22055",
".git/objects/34/34910783b57ffb6698241407d5af7488e1a55d": "0261bcb23bcccfc4ac77df9cb4b72b86",
".git/objects/3e/8c1a2e5c614785f5caa6d3ff5e6979e1188ece": "f9a90c9975a6b29468c30f0580362e08",
".git/objects/3e/f0a82e8659fd96907ff8e0e59fd6df7c07e545": "cb9ce135513a8e78651e8e6f810a2608",
".git/objects/41/4e6935c64734ebe23d3a187044440d14c6f115": "a93fa96f331b036f9d79b443f217785f",
".git/objects/41/fbe8bef46c21ae49619eb1454f264ae5026153": "d477c7668a542bfa9c1f108990c389a2",
".git/objects/4c/ebea7262819f99dc2cd8ce0e83ab81aae776ff": "395af21aa7502222306b2582e9640427",
".git/objects/4d/f83708e20aebc27773d686aeb67506f86a134a": "46d74cafd5eaa5aa044babc112ead7fb",
".git/objects/56/c5f3ffedd93142bc23a248636f83ddd66a265f": "5e893f9ac15d67e7a627b9fcaa9e8768",
".git/objects/59/a363cb8137d354d06109e42e6e49d6c76d6cc1": "317a6afdb0eacab149c527b5cf53f05e",
".git/objects/5b/83dec060d9a926fe7a27c4fbdb1bdec205de84": "2508f876f30daa4ab78c3af1397da6d4",
".git/objects/5e/3bfa59b6f947fb8590be83c1edd319f7402355": "06580ac0dd54d3dca05933ac4ec4966c",
".git/objects/79/9aaff8ddc43414749c1263596a4f443bc7cab3": "66d502be147281a98715864ce4986776",
".git/objects/95/9c52268739eb6fc1c25afcd56deac10ac22e05": "cebd3fcc25e8d641d6511409bc52d3e0",
".git/objects/a8/bfd25309fabc28b8624d6e71378d59a2264d6c": "df6c96208052933ab9c620836c7eba77",
".git/objects/b1/07b830bc3800769dbe2521c9ab907259711edc": "88f2bb3073ef524330bd09efc4dd157e",
".git/objects/c2/dd1051eb366af7fb9b0834efd4c34f24756029": "03cc1672f09fd8e8a4f5cbc07df219d0",
".git/objects/d8/ebc1b189da76cb18ef854a8d572e9b3760707f": "190205b43c0ccecac92dcd675fe0b71f",
".git/objects/e2/3229c5e0e0af2b792052be799c30f2500bf1eb": "c59eecfc1229849a16ef7daa12c6a550",
".git/objects/e3/15827cfbfe261c36087610abf3cf40a4910834": "b7dbcebbc4e20ff386c647b46c416d87",
".git/objects/eb/9b7987cda7622c967cddbf37e89858d66ba90d": "1b172d68b16986e527292942af7392e9",
".git/objects/eb/f20d27e40410fd5ef8a7854f5d67109e62d59f": "358df8920ab93aeb3e299a57f627de0b",
".git/objects/pack/pack-f2df18d1c55176c667d29807840f9589bdaa4733.idx": "890216b22a0df4ad82b50d1782f39ec3",
".git/objects/pack/pack-f2df18d1c55176c667d29807840f9589bdaa4733.pack": "d255a7784b5fc224877999e09ea82041",
".git/ORIG_HEAD": "71ba243976e045b5945eb50035acb853",
".git/packed-refs": "cfd14e66ca36d8b5e29b7f471d9e6c2e",
".git/refs/heads/main": "81c36ffbc9c3da937b6736fca612b6d7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "81c36ffbc9c3da937b6736fca612b6d7",
"assets/AssetManifest.json": "05df8f0d38b70114a7116c66233068ef",
"assets/AssetManifest.smcbin": "7e0e9cf0c4abaa7e7f1e8ccd489e7793",
"assets/assets/images/404.png": "13fcc8422747ce62cdb21cc810f1c175",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1ae39e4f8f359e330991e81f800258a8",
"assets/NOTICES": "0abccf2d5e589f6f8fc19379647fec58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2621dd917916ba426536ccb43280ac2e",
"/": "2621dd917916ba426536ccb43280ac2e",
"main.dart.js": "63d92a9c5825cf8c4b97e5d8fc4c4f54",
"manifest.json": "e9be6149a557354e62e678e5efa0d028",
"version.json": "48e81b2df43e00977da602f0d33970d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
