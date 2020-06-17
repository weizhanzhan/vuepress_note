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
    "url": "assets/js/11.e79fb204.js",
    "revision": "585d1d15cc097df4971c45a7232e38d7"
  },
  {
    "url": "assets/js/12.eaf48369.js",
    "revision": "c349a6d1beeafdf05014337aade291e6"
  },
  {
    "url": "assets/js/13.b7973ed2.js",
    "revision": "d506c3bac300b2c78b9069eee4f0bd5b"
  },
  {
    "url": "assets/js/14.4919f0d2.js",
    "revision": "b58e98e4b3c86e38076db40f7f857bec"
  },
  {
    "url": "assets/js/15.c57cbd42.js",
    "revision": "bbdb1a4cf26423610304e12baa27ffa3"
  },
  {
    "url": "assets/js/16.4c71ad5e.js",
    "revision": "0283a75156f2d7b854631ce6813b5d48"
  },
  {
    "url": "assets/js/17.7aae0672.js",
    "revision": "f21f732a3d5f309b0a8a9bef9d759956"
  },
  {
    "url": "assets/js/18.826db841.js",
    "revision": "ae8e388d031701a6c3031ba876258375"
  },
  {
    "url": "assets/js/19.ceabe98c.js",
    "revision": "be3e89c0def888d017229e0333962b9f"
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
    "url": "assets/js/22.8044d4cf.js",
    "revision": "791f85c3c04a52830e1134f3306aa608"
  },
  {
    "url": "assets/js/23.8e770762.js",
    "revision": "d5cb3f1079c0c7e0c266d4b4d19ee193"
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
    "url": "assets/js/3.4e08b983.js",
    "revision": "c82066a1755375770504cbde9967ca02"
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
    "url": "assets/js/app.ab0bfe5e.js",
    "revision": "5cc7e8ca94b57c4608a2200fdcd27b96"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "46619c78c8e0756be2128bcbcf8362bd"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "b38ea2bb729ae60f1b8b72fd3343dc1f"
  },
  {
    "url": "note/git/base.html",
    "revision": "5728b9f2d3433b3dcd918533030ae41c"
  },
  {
    "url": "note/index.html",
    "revision": "782b39eb6ecc9d8e80252553ac01d2b2"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "fb7cd274869563ae9e4063bbf70b04cc"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "71d4751ae4884d7a1746f0876f80541d"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "07aa02bfe37f686d21bf0967de08c1dc"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "bfa96ea541aa15f891caff33e1ce7956"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "6d2dc6d7c3d08ed7f1fcbf66fca7fb97"
  },
  {
    "url": "note/react/base.html",
    "revision": "3077881ee951a985294d3ab50ff3c0c8"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "9c466f73a9484d58d5ed074e1677fe46"
  },
  {
    "url": "note/vue/base.html",
    "revision": "81052d6d36b895ac5380431722b4bee8"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "11f59ba155a7519b75e398fcb4a564c2"
  },
  {
    "url": "note/vue/index.html",
    "revision": "0e73dc94cd06f3d026eeef30d191cad3"
  },
  {
    "url": "note/vue/router.html",
    "revision": "dea0d7de16652e642de874621d42f603"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "be86a84e3c96096ca825f1b5cfa017ac"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "44801ab64243cf7bbc385f0371df9c26"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "aaa03e69ecaf5e92feb409667d1c4133"
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
