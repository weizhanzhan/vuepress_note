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
    "url": "assets/js/10.056554c0.js",
    "revision": "4f60b2b68c51ec56f1f7dd26d598a056"
  },
  {
    "url": "assets/js/11.3c869a3f.js",
    "revision": "9be8c0e116328cfa1ae995518982e7a8"
  },
  {
    "url": "assets/js/12.46295d87.js",
    "revision": "6fbe08e8546232752dbd1eeb779764b7"
  },
  {
    "url": "assets/js/13.f290b6d2.js",
    "revision": "5db8f2a3ce7ac7d6996d0e577f3ad825"
  },
  {
    "url": "assets/js/14.a84aefdc.js",
    "revision": "8682e9d3a4b3336c718c7dec6fc3075e"
  },
  {
    "url": "assets/js/15.3e522e4f.js",
    "revision": "f1626950340c97c7e035f2392266d342"
  },
  {
    "url": "assets/js/16.ed27a660.js",
    "revision": "fcfb78d8132fddd989b02547616f1d9e"
  },
  {
    "url": "assets/js/17.ebea200c.js",
    "revision": "f517defa64ae758863e6119ca43f6fb7"
  },
  {
    "url": "assets/js/18.058e3fd8.js",
    "revision": "b9c05cfa2820917dd9ee4cf06add1f78"
  },
  {
    "url": "assets/js/19.d2039502.js",
    "revision": "c6ed0b8b500852c87deb2685315205c2"
  },
  {
    "url": "assets/js/2.056ead7a.js",
    "revision": "a21ef8e205a9950e8f1f72255d027d73"
  },
  {
    "url": "assets/js/20.6f065925.js",
    "revision": "aed5cdcd9f67350072f9f5fc1a6ded1e"
  },
  {
    "url": "assets/js/21.f7abf2d9.js",
    "revision": "e29f7fb2a38223dcc42b7b5967d0d3d1"
  },
  {
    "url": "assets/js/22.14357a5b.js",
    "revision": "392836a052ff47586aa40ae3ccda2530"
  },
  {
    "url": "assets/js/23.e7cf59e9.js",
    "revision": "6afb32a21800d438eaf8fb51f077d38b"
  },
  {
    "url": "assets/js/24.8fee1643.js",
    "revision": "a943a3fc6aba9729fb8e20fcb5da4567"
  },
  {
    "url": "assets/js/25.db35127e.js",
    "revision": "a6edba704a0baa13c99038785e255016"
  },
  {
    "url": "assets/js/26.95d9a14b.js",
    "revision": "84c91d132730daa672b9d23522d5fa5b"
  },
  {
    "url": "assets/js/27.bd348979.js",
    "revision": "933bd5425478c0094ca66842576dc9c1"
  },
  {
    "url": "assets/js/28.f2854355.js",
    "revision": "425f90927dd602f4cdfcc436e83053ab"
  },
  {
    "url": "assets/js/3.83f5d4f9.js",
    "revision": "c486b2f3acd0dfe16c7ec9df3b7d751b"
  },
  {
    "url": "assets/js/4.411e4545.js",
    "revision": "bee273883c0d6c968668b476e465bf9b"
  },
  {
    "url": "assets/js/5.dc1392fa.js",
    "revision": "d2781f1671b90995c30db55a7c1feb78"
  },
  {
    "url": "assets/js/6.c76d6562.js",
    "revision": "b5d98afde6186466d945ef482207c120"
  },
  {
    "url": "assets/js/7.e3370fc4.js",
    "revision": "d84bb0be890b73db974e73f6701c2f45"
  },
  {
    "url": "assets/js/8.27c3fdcc.js",
    "revision": "c47d4bec4eae85e681a5319426dae03b"
  },
  {
    "url": "assets/js/9.5fe70c71.js",
    "revision": "043a4dae81112d9fe5ca5cddacc8b958"
  },
  {
    "url": "assets/js/app.bcda5c7d.js",
    "revision": "0a8cca607ae202a0a5498f61bf3bd986"
  },
  {
    "url": "bg.jpg",
    "revision": "09e164adfa7558dda834363efcc7cca5"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "de2b49e17dfb7439b8f6b6349e4de297"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "8499891e42e4ca800d5df59b27bb99c2"
  },
  {
    "url": "note/git/base.html",
    "revision": "5ab5733fef24d6b16d1d2a89c3895671"
  },
  {
    "url": "note/index.html",
    "revision": "ff072f5c13aa49a895a489f7e64d2bcb"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "f7616497edcb073f63a04c6bd0430163"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "e41281f3965ad54026eb3518903d277b"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "5b29c4743b6a53b4da9c5da7f5d51075"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "c21e7d6971ccbc11679ee8c359aa7921"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "c7096cf21e607677318050d738419699"
  },
  {
    "url": "note/react/base.html",
    "revision": "73e6391305f115edbd8f8d2688dc8b9f"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "1cba15f7b49cb9e8ec88b55ea0d09e3e"
  },
  {
    "url": "note/vue/base.html",
    "revision": "d05b288a03c626874ce643656b68e699"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "47640bf5b06edf28cd114dcf8e354ffa"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "a69dc99eb835c610c14b0f71bdaf4ff9"
  },
  {
    "url": "note/vue/index.html",
    "revision": "9e4e64f8d084f6bf1b4cdf1f39dd9e67"
  },
  {
    "url": "note/vue/router.html",
    "revision": "a49023e7f3ac815517cb0e62a8319a07"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "7a297f888f23df4095b66085e5818a03"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "1bb55c4c987526bc8e632b447244dbf0"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "ecb932ca7b1094cc7244882cf8670f7a"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "1963281bacb5ccbdf0726ba836cb13f4"
  },
  {
    "url": "work/index.html",
    "revision": "7a6a102a8ce4c80da842f130063feb0a"
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
