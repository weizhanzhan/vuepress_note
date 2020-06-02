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
    "url": "assets/js/12.53a002ba.js",
    "revision": "df9f34a744da4025384455f48ea77f09"
  },
  {
    "url": "assets/js/13.3e6746c6.js",
    "revision": "c1f441235470dfb63b1ddf379ab62f0f"
  },
  {
    "url": "assets/js/14.4efb44c3.js",
    "revision": "a28a453f4e22f1a843c57cd318b827c6"
  },
  {
    "url": "assets/js/15.af01cf62.js",
    "revision": "a4dbfeaad0883789a2805060ffc511df"
  },
  {
    "url": "assets/js/16.fb0d9a18.js",
    "revision": "85c3b261309f3641a25622e4f636d771"
  },
  {
    "url": "assets/js/17.c867e8c2.js",
    "revision": "e04174ec7f3f1c75623bbf3c81a56e8e"
  },
  {
    "url": "assets/js/18.6d7186c9.js",
    "revision": "f8f3a21d80ad3aa90369a54ba076440f"
  },
  {
    "url": "assets/js/19.cc4a56ff.js",
    "revision": "4174e18669be9101044f52a90863f68b"
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
    "url": "assets/js/21.5456bf01.js",
    "revision": "a252360b01613aea4be043eb99662309"
  },
  {
    "url": "assets/js/22.a1eb938f.js",
    "revision": "10dc9e056f1c47a346662daf1a19b669"
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
    "url": "assets/js/6.5c7d71a2.js",
    "revision": "0ca67e4bfefba750e88775fa697e17ae"
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
    "url": "assets/js/app.1b2b5d4e.js",
    "revision": "28c84449c940c6f4e1bc666d5400300b"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "fd66dac2fd3a006d3fd218b07e00aaa8"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "21b63af7fce4833ecdbd81dae524486f"
  },
  {
    "url": "note/git/base.html",
    "revision": "9f83a147b18545028a67c216bc4aadc7"
  },
  {
    "url": "note/index.html",
    "revision": "7675b2847e08a427cefbee6012e1a5fc"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "af894ad63903cd1eb31848cf98dd2842"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "d01baef8e9ada6951189649b57aac17b"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "06e963baddd6e2a59a10b02014c73fcd"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "56c5fbe84c714878b147601c8107c864"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "7b877208d8d5419466b3279a4f9e1195"
  },
  {
    "url": "note/react/base.html",
    "revision": "9f6920779e2c57d7c58f001dd0af74af"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "201981ae4b59677bc10d79ed3c87a550"
  },
  {
    "url": "note/vue/base.html",
    "revision": "2b03018fdb2b926c4deede637e109b87"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "4b28eff4c5afe831516581070ab32721"
  },
  {
    "url": "note/vue/index.html",
    "revision": "68c9f2a5f0ea4820178fa44de5c371e1"
  },
  {
    "url": "note/vue/router.html",
    "revision": "e9a9ee4025a8c1f8d343fa0f12aaa2fc"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "df8d920a41bea508d17a53805686e34a"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "8d21328d81f1dce6a6d2d5aaa1d61d36"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "7fa220f762a8f2841427f47dfeb2615b"
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
