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
    "url": "assets/css/0.styles.54c6c2ef.css",
    "revision": "406d22e5ab34b72f0b6e056847abf499"
  },
  {
    "url": "assets/img/apicloud-zs.96466582.png",
    "revision": "96466582633953497d890a2723fcc64b"
  },
  {
    "url": "assets/img/apicloud.7b408c4c.png",
    "revision": "7b408c4c6a6e2d818638b268bb07270e"
  },
  {
    "url": "assets/img/home.37531eb7.png",
    "revision": "37531eb7dc7bc057b86388eba200ab04"
  },
  {
    "url": "assets/img/jiguang.7c81be9a.png",
    "revision": "7c81be9ab45974b18ecb2fcd80c6959c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90e71bed.js",
    "revision": "c6fefd79dba7c386b51b40e2f3f27901"
  },
  {
    "url": "assets/js/11.f48b7722.js",
    "revision": "fe9e8d3f8518e1fb491c4bad7e9515ef"
  },
  {
    "url": "assets/js/12.53a002ba.js",
    "revision": "df9f34a744da4025384455f48ea77f09"
  },
  {
    "url": "assets/js/13.946f0e51.js",
    "revision": "07c8428d2ffbe9d7f2428b15f3b9f91a"
  },
  {
    "url": "assets/js/14.c8be4986.js",
    "revision": "2243fc9ed6e17af3c50ff9ef7597e8f5"
  },
  {
    "url": "assets/js/15.f77ca6ea.js",
    "revision": "8d35149215a017e39310d00da5b4372f"
  },
  {
    "url": "assets/js/16.c4c59863.js",
    "revision": "d14759509d48b83991afb1d867a4ebe7"
  },
  {
    "url": "assets/js/17.02e3f272.js",
    "revision": "40ccfb20462e89fd5fe316959659a9f5"
  },
  {
    "url": "assets/js/18.16d6e7b8.js",
    "revision": "26a1646575de94d054efffa7ac232849"
  },
  {
    "url": "assets/js/19.10b036f1.js",
    "revision": "8344b5747f0986292247b0667ab9bdb1"
  },
  {
    "url": "assets/js/2.d572bafc.js",
    "revision": "a517377a1bb2cc256f6e7175778816b3"
  },
  {
    "url": "assets/js/20.217eef37.js",
    "revision": "48f367b8c64afd6685ee58db5f8b66d5"
  },
  {
    "url": "assets/js/21.275fd31a.js",
    "revision": "f1ef3f448db87d9d04d2f5e3cde4b265"
  },
  {
    "url": "assets/js/22.461b43d1.js",
    "revision": "a2328ec92f358c3ff38d799c60eeb0df"
  },
  {
    "url": "assets/js/23.9bf1df3e.js",
    "revision": "77add905035fab841381774a71fcb15b"
  },
  {
    "url": "assets/js/24.1aeb875b.js",
    "revision": "f37688f4dbdbf50b946508eb3f58fc49"
  },
  {
    "url": "assets/js/3.4e08b983.js",
    "revision": "c82066a1755375770504cbde9967ca02"
  },
  {
    "url": "assets/js/4.4dd6ec4e.js",
    "revision": "07c90a7f3e6db6b26972d86c26ceed32"
  },
  {
    "url": "assets/js/5.4072612c.js",
    "revision": "f57d86b6baf43228087854abc867ffd2"
  },
  {
    "url": "assets/js/6.79096846.js",
    "revision": "bf85067494b5ca0f9e947809f9c6856f"
  },
  {
    "url": "assets/js/7.865be3be.js",
    "revision": "69968953fe90d5379d7cd199a014a1bc"
  },
  {
    "url": "assets/js/8.c6b291c4.js",
    "revision": "e4f6f606ffbc3437437ba492c8d2c5e2"
  },
  {
    "url": "assets/js/9.10ca6a84.js",
    "revision": "6b2d1661c3315e45f2ea29a2c6c35c2c"
  },
  {
    "url": "assets/js/app.dcd4f11b.js",
    "revision": "613e3b16a70dc195931d09a955d59b27"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "92bb090b26076aba4e9e2eb765ed12cd"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "97fdc4c6261530c822d4a1b8e040c789"
  },
  {
    "url": "note/git/base.html",
    "revision": "75d526ffb2bcd4e6dd93daa6777e2800"
  },
  {
    "url": "note/index.html",
    "revision": "fb6063573d9d2b17e51f873b1d7ccf7e"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "0f2034e52144b7a8f4c1a9a3b1dab251"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "8687fdf4c5bd9eb3b8b0750bedc5862a"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "59badfc302604c7deec28984dee384f5"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "925b7523f3468a48d57f2e843fc3d285"
  },
  {
    "url": "note/react/base.html",
    "revision": "7f13c77e5d836c25cb19ec1b06dd14e7"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "80f3046a1202047c758600f0fef07b31"
  },
  {
    "url": "note/vue/base.html",
    "revision": "3c3eee1c76526aa13ab7d14215f549df"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "ff0f20efeba2f8061eca27037a3c28ec"
  },
  {
    "url": "note/vue/index.html",
    "revision": "b64ff915d7b58627f601d4eedd06b667"
  },
  {
    "url": "note/vue/router.html",
    "revision": "f6ef8f3ae3d615e1235a93cd4f35c714"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "751319cf2eabb3072b8509c05228118c"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "4c99b08b4a3afcadc844a17a7c83f527"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "172701ad25ed7e8130764b37e45fc6ba"
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
