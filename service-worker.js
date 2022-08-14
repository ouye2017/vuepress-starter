/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d10193d093baa5ca490af91382a90195"
  },
  {
    "url": "about.html",
    "revision": "529b4ef1ec0a2ef03ed4c0db1a903537"
  },
  {
    "url": "assets/css/0.styles.bc270b93.css",
    "revision": "a1d23f17eb89c3a3ec61f6b972d6642f"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "c32a10e01380353b4995f6546459b741"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b811b933.js",
    "revision": "c5dce811bd92fcb4358631c32ff1f36b"
  },
  {
    "url": "assets/js/11.4cb8f337.js",
    "revision": "0e493affcc5a953dcf54eec8caf3392a"
  },
  {
    "url": "assets/js/12.f7254844.js",
    "revision": "f1ecf345f4c9c9634e61edd0221837a8"
  },
  {
    "url": "assets/js/13.db99d433.js",
    "revision": "163e5cd5993d7bf244601af3e5d622d7"
  },
  {
    "url": "assets/js/14.1b73801e.js",
    "revision": "c1cb94325294eacc21f01813da51aaa9"
  },
  {
    "url": "assets/js/15.dc99b828.js",
    "revision": "75100e4200e0ad598e2bd913c1d91e1b"
  },
  {
    "url": "assets/js/16.07c4e21d.js",
    "revision": "dc31f910068879f96fe5c6494bae6a93"
  },
  {
    "url": "assets/js/17.1eda5043.js",
    "revision": "04f866a9c76b900475bfc7cc07ce8964"
  },
  {
    "url": "assets/js/18.01a91606.js",
    "revision": "21bf180228c2335adc5ac072f377650b"
  },
  {
    "url": "assets/js/2.dec27463.js",
    "revision": "1495591684732457d0f2c66aaf7eb341"
  },
  {
    "url": "assets/js/3.90952001.js",
    "revision": "bdb773767a5833e31bda5b58d429a545"
  },
  {
    "url": "assets/js/4.59685758.js",
    "revision": "5f5a45cddc080e78f4e4c0e9dcb7b070"
  },
  {
    "url": "assets/js/5.2ea813b0.js",
    "revision": "ee2f83ab509d5de74efefb7ccea7ef42"
  },
  {
    "url": "assets/js/6.93ca7d58.js",
    "revision": "a7e2ea8afe06fce007b3d0967842be96"
  },
  {
    "url": "assets/js/7.41605c26.js",
    "revision": "b796ce88fbddb606be0aeb97a06b0dd7"
  },
  {
    "url": "assets/js/8.aef45956.js",
    "revision": "9e0729a69c11187912b5564d2c6d5f4c"
  },
  {
    "url": "assets/js/9.9cd8f7d2.js",
    "revision": "eee217a6b2ec5b0b9ce179467f029477"
  },
  {
    "url": "assets/js/app.40fac02e.js",
    "revision": "d0087e1eec9ba91491984bdb6132d521"
  },
  {
    "url": "bar/four.html",
    "revision": "7addede5b9e790dbcb50d96b199c63db"
  },
  {
    "url": "bar/index.html",
    "revision": "4dac529fbb23fef6d3af63d4be5b3bac"
  },
  {
    "url": "bar/three.html",
    "revision": "4bdcbbcebfb8f9abaa5dc39de63270b9"
  },
  {
    "url": "contact.html",
    "revision": "f6fc10a83bab502a771dd7bd407773a8"
  },
  {
    "url": "foo/index.html",
    "revision": "bf60f31f58060a34d64294d1f4d5696a"
  },
  {
    "url": "foo/one.html",
    "revision": "aca4c473b8416f4174446e0c134009c5"
  },
  {
    "url": "foo/two.html",
    "revision": "63a1e6b6f43a0a95da6f2874fa7bca31"
  },
  {
    "url": "guide/index.html",
    "revision": "e3e0f416c28876a68a0dfbeff346ffa6"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "36aa64270c2225ab31ac57988881af29"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
