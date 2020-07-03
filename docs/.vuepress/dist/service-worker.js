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
    "url": "assets/js/11.23837b35.js",
    "revision": "22011d17d5cae9090f8b3add7f62d607"
  },
  {
    "url": "assets/js/12.45e41979.js",
    "revision": "b0e3c3a8aaf3c466952314638a9e904e"
  },
  {
    "url": "assets/js/13.29ccea40.js",
    "revision": "83dfafebb169cc0e8b7e52431c5f9151"
  },
  {
    "url": "assets/js/14.dd03b719.js",
    "revision": "60d823ace1bbf96088bcb370e954ec27"
  },
  {
    "url": "assets/js/15.14075295.js",
    "revision": "18f6b047fa14b60d8355335af7478dee"
  },
  {
    "url": "assets/js/16.41ea8291.js",
    "revision": "9d07b86f0dcd495602181ceba4d1de5d"
  },
  {
    "url": "assets/js/17.122e2175.js",
    "revision": "00d8091faef7ab79bdff6c8f6913f0f0"
  },
  {
    "url": "assets/js/18.41e0dc06.js",
    "revision": "97201f5840a14f644211b0fc98cf7b5f"
  },
  {
    "url": "assets/js/19.7684394c.js",
    "revision": "7ae306ff61e56c34bf3cf67a5bdf251e"
  },
  {
    "url": "assets/js/2.1f4bf701.js",
    "revision": "5b1f671838f5de02d9a277f46f87d3e0"
  },
  {
    "url": "assets/js/20.967e4218.js",
    "revision": "b8aacb9338eca4095891667e8b2e8c27"
  },
  {
    "url": "assets/js/21.11529879.js",
    "revision": "5df0d4d780f71ec59ffe2fe18bf12657"
  },
  {
    "url": "assets/js/22.d54ee35d.js",
    "revision": "098a028abb99cb90c9fffe026b961f37"
  },
  {
    "url": "assets/js/23.a5c8c256.js",
    "revision": "73ef607ca393bdfea44854a969f07f1c"
  },
  {
    "url": "assets/js/24.6e53460f.js",
    "revision": "e024de61b95f013ab8379ca8ca1cf3e9"
  },
  {
    "url": "assets/js/25.dc856608.js",
    "revision": "124adaf640ccfddd6ee8856f5e05b2c3"
  },
  {
    "url": "assets/js/26.389bd7f5.js",
    "revision": "7a2398fcb19a6b99b1965a0cada7212a"
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
    "url": "assets/js/3.5100bfdc.js",
    "revision": "903fd696fa55a943f1a827658132119b"
  },
  {
    "url": "assets/js/4.d3208e0c.js",
    "revision": "ba95ab56ff7c71c60bd6192dafaae779"
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
    "url": "assets/js/app.0e07456d.js",
    "revision": "db6340f1a58a0707076b4326a08077e2"
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
    "revision": "d5cb124617cd137d9ff30cb7c0111f99"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "e2af762afcfebf6418ae7bb699831c54"
  },
  {
    "url": "note/git/base.html",
    "revision": "f0cc3ccc1a5d1d59bac2cfbfda59307c"
  },
  {
    "url": "note/index.html",
    "revision": "56adab26eae42207f95b27dd95112345"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "19c3a43d3891dcb3d7655798bb4526db"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "5b5d74f0b0bc9ae39ee8b034b1190e84"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "d0ac64ebbdf4e7c86837b796c6278f72"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "81f846b74a9503e0c085867bec0a6543"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "438423d7cb24956e3afae941c261ae3f"
  },
  {
    "url": "note/react/base.html",
    "revision": "bc5532a62a03868bac70621c2be49774"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "5406c90a039c0a81b955640bc0fc6691"
  },
  {
    "url": "note/vue/base.html",
    "revision": "c6ee3357ae75d12a285e5895678757d2"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "96c218e3e31cda21774de4b41a8fb5f5"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "35b09e8cd66fc49811d6c48c7b6d16c8"
  },
  {
    "url": "note/vue/index.html",
    "revision": "a5ecc74e8139780158d9530afd0a0456"
  },
  {
    "url": "note/vue/router.html",
    "revision": "0ce25111e64f8576126814b66994795a"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "76c01cd4ec98303da808fdaa54fc7cca"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "59c6d0b30e011a6c2d9dc500035a3f50"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "8a11e0be9048e5db1a93ee29e61133c7"
  },
  {
    "url": "project/index.html",
    "revision": "7591d6f24bc079df1a8e1de3298be45e"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "ba5f608f93b46ff13bf5ca4882283323"
  },
  {
    "url": "work/index.html",
    "revision": "e1b62d1d24b17a53987d955605e08446"
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
