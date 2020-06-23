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
    "url": "assets/js/11.e9dc7e2a.js",
    "revision": "6ef7ea74067dfaa10028c94ffd199c70"
  },
  {
    "url": "assets/js/12.53a002ba.js",
    "revision": "df9f34a744da4025384455f48ea77f09"
  },
  {
    "url": "assets/js/13.7f1e7f88.js",
    "revision": "717b02716fe0c2513d8385526fd3eb43"
  },
  {
    "url": "assets/js/14.0256fa31.js",
    "revision": "ad09f2ec7afcaa700bb0dca00e851df8"
  },
  {
    "url": "assets/js/15.e1b47e48.js",
    "revision": "30fa0881b51ccaa030f00dc303935b30"
  },
  {
    "url": "assets/js/16.c6477c2d.js",
    "revision": "8258158b2c16a3738aa6048379cd757a"
  },
  {
    "url": "assets/js/17.b039398c.js",
    "revision": "844dd5d4c0b6db2856314a9a8ab5f869"
  },
  {
    "url": "assets/js/18.6d7186c9.js",
    "revision": "f8f3a21d80ad3aa90369a54ba076440f"
  },
  {
    "url": "assets/js/19.1ecdbd22.js",
    "revision": "d5fa344a38b0e406f9a057a195653b27"
  },
  {
    "url": "assets/js/2.d572bafc.js",
    "revision": "a517377a1bb2cc256f6e7175778816b3"
  },
  {
    "url": "assets/js/20.8fe8fc89.js",
    "revision": "b0055c87d97f06239ed3e2f9eb448093"
  },
  {
    "url": "assets/js/21.4ea8ea0f.js",
    "revision": "ae96752b3c9821d7f872f195db395dfa"
  },
  {
    "url": "assets/js/22.bb4fb348.js",
    "revision": "41132860f89bfdf77c5198cefe5489a0"
  },
  {
    "url": "assets/js/23.26d203d0.js",
    "revision": "d08275b0487e021669080ba77b629a0b"
  },
  {
    "url": "assets/js/24.499ca216.js",
    "revision": "8e1e3c7a0542618f5739256b752a78fe"
  },
  {
    "url": "assets/js/25.4c04831d.js",
    "revision": "ca8d265f2bd8c28d9dde749453a6aab7"
  },
  {
    "url": "assets/js/3.be656e44.js",
    "revision": "d46a3384ca80aac5a65593513a4a31e3"
  },
  {
    "url": "assets/js/4.4dd6ec4e.js",
    "revision": "07c90a7f3e6db6b26972d86c26ceed32"
  },
  {
    "url": "assets/js/5.4688aa04.js",
    "revision": "22453085e9cd88a0115c006009a17b17"
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
    "url": "assets/js/8.c35f50f7.js",
    "revision": "a316fc2a94e20273e39e669f354f57a5"
  },
  {
    "url": "assets/js/9.4ae26835.js",
    "revision": "8b865d999ad69dc47f2f74d36f980f24"
  },
  {
    "url": "assets/js/app.2fd3017b.js",
    "revision": "69e38be5821bd83ae6479f8a158e5dab"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "f06a5e265e16e794600cd0bb5995d305"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "ce463df31e6f9712e821d0970c1cdccf"
  },
  {
    "url": "note/git/base.html",
    "revision": "e5c213067baa6a0648cd81ca04ea9dbc"
  },
  {
    "url": "note/index.html",
    "revision": "e09849b438f417e8913b9637d932dd8f"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "9a4f1c4adf063e9310015e788dedffda"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "3b67453df5d40f4c4f78f91f7007d7d2"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "238a96cbec99140781a4862040884fae"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "7b0cabfd2f778a1389a9206e599340d0"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "0d07da8d81bb00f4c0d7153cb265e439"
  },
  {
    "url": "note/react/base.html",
    "revision": "72a71dd9b70b2451a1405cdf95643d04"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "274ebabf263758e748c0bbf582b7f8ce"
  },
  {
    "url": "note/vue/base.html",
    "revision": "911bb06c55d920673922b52a57b8f3cc"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "c6067ed21b807dc5574af7e768855ac0"
  },
  {
    "url": "note/vue/index.html",
    "revision": "a0aab4397bce7414fd9b4591f94b3cb7"
  },
  {
    "url": "note/vue/router.html",
    "revision": "a60cabe77886d9573c03771b5324794c"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "0054b496d509e7b83ea00cb89ea24d83"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "c8cad40845ea8f8f8f0d7d11b1daf5f6"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "a826e22739afd6098b5b25251db398d1"
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
