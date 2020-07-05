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
    "url": "assets/css/0.styles.5696c783.css",
    "revision": "6dc55a891bcf4f46f2f1c1119e0716ef"
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
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.b11f0785.js",
    "revision": "1877921caaa67e8ee64476b61ef8fe8b"
  },
  {
    "url": "assets/js/11.16362b56.js",
    "revision": "2f26a1c9cc94417193153e16a6eb3f17"
  },
  {
    "url": "assets/js/12.b57f4e6b.js",
    "revision": "7e2c0e7bdf596fda8abc0f3ecace00f8"
  },
  {
    "url": "assets/js/13.da725f67.js",
    "revision": "2fc8d57177b26a8a55c6d2699b02febd"
  },
  {
    "url": "assets/js/14.d2f16b86.js",
    "revision": "f118315ce1f7807633657845573a2f27"
  },
  {
    "url": "assets/js/15.40694831.js",
    "revision": "c53dc7c96a64ab023b6a4554b85e8151"
  },
  {
    "url": "assets/js/16.02a0a4c1.js",
    "revision": "a985dee3df805bb2ac705e40849561ac"
  },
  {
    "url": "assets/js/17.69865095.js",
    "revision": "90d720433cd3b006d26e5bda418f6c42"
  },
  {
    "url": "assets/js/18.42d9ad1d.js",
    "revision": "85cd96e49d923e499cd8ab169ee7a0a7"
  },
  {
    "url": "assets/js/19.77421e7a.js",
    "revision": "1ad18171667c83c0df4857de37ed6820"
  },
  {
    "url": "assets/js/2.1f4bf701.js",
    "revision": "5b1f671838f5de02d9a277f46f87d3e0"
  },
  {
    "url": "assets/js/20.ee756bc7.js",
    "revision": "1d38115c1e46c76ff575de300b060a5d"
  },
  {
    "url": "assets/js/21.929a4356.js",
    "revision": "6468626088ddcbe4cc7843d33f746292"
  },
  {
    "url": "assets/js/22.d54ee35d.js",
    "revision": "098a028abb99cb90c9fffe026b961f37"
  },
  {
    "url": "assets/js/23.838c4732.js",
    "revision": "ecf470db27d61a733a2c1ccc594bfe74"
  },
  {
    "url": "assets/js/24.1ceb4c24.js",
    "revision": "076aa23a5380f65828b39d7ab13d5ef5"
  },
  {
    "url": "assets/js/25.f58f1c72.js",
    "revision": "4b7b4fc92603c5b50574ba1f046af721"
  },
  {
    "url": "assets/js/26.012dffe8.js",
    "revision": "2794e1129fa5840b3d4c03e23a982faa"
  },
  {
    "url": "assets/js/27.20d033f7.js",
    "revision": "3e2a159851cbdff658b2e5b0e6dc87fb"
  },
  {
    "url": "assets/js/28.ff21d022.js",
    "revision": "d6f0049c91a3b986c9059d644aebfb69"
  },
  {
    "url": "assets/js/29.df4c9568.js",
    "revision": "b198b65d498f5241c8003cb25ffdcbb6"
  },
  {
    "url": "assets/js/3.44455da5.js",
    "revision": "ddc42789ef24451a8848d405847ac26e"
  },
  {
    "url": "assets/js/4.fef764ee.js",
    "revision": "53fee27c2f812642d83066b4382aa1b7"
  },
  {
    "url": "assets/js/5.d4ca9c4f.js",
    "revision": "a6e476c956f4275cc01951dc24331cc6"
  },
  {
    "url": "assets/js/6.816b340f.js",
    "revision": "deab661424db24468b721a5504090337"
  },
  {
    "url": "assets/js/7.af3f1d5e.js",
    "revision": "829f645cde9c8dbff8bf36335db0596e"
  },
  {
    "url": "assets/js/8.8e2681ba.js",
    "revision": "afe1c45b7324eee93196b0ecac237659"
  },
  {
    "url": "assets/js/9.cf34aa4c.js",
    "revision": "ceab773adae910b9f6b3211c5b85c0e1"
  },
  {
    "url": "assets/js/app.d4ee678f.js",
    "revision": "9120910c240192778258d38977df27d4"
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
    "revision": "46cd95ad882e2314b76e73b6ade3c80b"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "4cb35498521fb33d8f7980612135ea10"
  },
  {
    "url": "note/git/base.html",
    "revision": "1e51386069c842417933886a45fbdae8"
  },
  {
    "url": "note/index.html",
    "revision": "528c470766ba3adaceab8b750a2d04b5"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "3e4f1cff31984526ec58bc8d6c5afdf0"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "5397e4e9fd553f1706526a46089164dc"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "d341abf69d4cd60a7a0f78893443ef5d"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "532b50635eb55df64d1b4d3861a1d966"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "4ce25590e50715b2bf8fee4713e6b807"
  },
  {
    "url": "note/react/base.html",
    "revision": "43146cf7b4ed9b0ff87e52dac54d9fac"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "e39ff3b1ca67fffae7552a7f5f397789"
  },
  {
    "url": "note/vue/base.html",
    "revision": "de612796a2dd114fc7d9bb83d204d6cf"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "a10eca82755ceeeb33ab2de8b6f6e080"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "99d3747f3ac65365de2b15918d455887"
  },
  {
    "url": "note/vue/index.html",
    "revision": "85825efcf8c8cb2cae6d91e970d8277f"
  },
  {
    "url": "note/vue/router.html",
    "revision": "f5a58d8d2ee206c3c5aef4ef6548d7aa"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "01286e03100a188aeb7d66fdf8494f44"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "667307acb8af31e12ee45fd8e6db2890"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "9208aa3e6ff2325755fe7a5cc3a1b918"
  },
  {
    "url": "project/index.html",
    "revision": "699ccbc1c46010e067b92aed4f2ef46e"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "d1e5b6ca2a463efefce103bfedac805f"
  },
  {
    "url": "work/index.html",
    "revision": "e8351eb281495a8acdee1ccf10138857"
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
