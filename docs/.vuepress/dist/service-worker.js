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
    "url": "assets/js/11.7d6842ab.js",
    "revision": "fdd366e7bf69f9322e30f42c38c20266"
  },
  {
    "url": "assets/js/12.cf6a70f0.js",
    "revision": "957c550574aa9a132c2b23409ae2c502"
  },
  {
    "url": "assets/js/13.29ccea40.js",
    "revision": "83dfafebb169cc0e8b7e52431c5f9151"
  },
  {
    "url": "assets/js/14.a9b579d5.js",
    "revision": "ec35c125b9cef33c6d4d6969593b657a"
  },
  {
    "url": "assets/js/15.50b23daf.js",
    "revision": "bd1cc8b9a7e0ef2a39004e00ec4fa068"
  },
  {
    "url": "assets/js/16.d880e5c1.js",
    "revision": "e65757d0d56c9b835fea0e82bd9c1d43"
  },
  {
    "url": "assets/js/17.122e2175.js",
    "revision": "00d8091faef7ab79bdff6c8f6913f0f0"
  },
  {
    "url": "assets/js/18.89d47134.js",
    "revision": "af7197be0af842f6b6b607dbaabf0eae"
  },
  {
    "url": "assets/js/19.6f52e034.js",
    "revision": "eca6d113dd545427e3ebc80ea94dec99"
  },
  {
    "url": "assets/js/2.1f4bf701.js",
    "revision": "5b1f671838f5de02d9a277f46f87d3e0"
  },
  {
    "url": "assets/js/20.5a4a3c47.js",
    "revision": "06fda3758d0afe6e11cde6d3729f87ad"
  },
  {
    "url": "assets/js/21.11529879.js",
    "revision": "5df0d4d780f71ec59ffe2fe18bf12657"
  },
  {
    "url": "assets/js/22.f3650cff.js",
    "revision": "d52b54b1776dce3702485e77b967426f"
  },
  {
    "url": "assets/js/23.e812e771.js",
    "revision": "d0dbde8a8ce3fda6980960cba3d8fc54"
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
    "url": "assets/js/26.414d2271.js",
    "revision": "aafd1762e709c445791aba3c43a09d4a"
  },
  {
    "url": "assets/js/27.d964fd14.js",
    "revision": "30c17546f80e45821286987923e5e51b"
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
    "url": "assets/js/6.8505d51d.js",
    "revision": "30b1f1ddfd7b668b66c536ed80341c3b"
  },
  {
    "url": "assets/js/7.af3f1d5e.js",
    "revision": "829f645cde9c8dbff8bf36335db0596e"
  },
  {
    "url": "assets/js/8.2e3b5cce.js",
    "revision": "3e6e9f9a2e63f0df0eeb559bcfcf5fef"
  },
  {
    "url": "assets/js/9.cf34aa4c.js",
    "revision": "ceab773adae910b9f6b3211c5b85c0e1"
  },
  {
    "url": "assets/js/app.5e56aeeb.js",
    "revision": "37d2a36f9c7f83f26de222fcd9e37f2f"
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
    "revision": "5bc4e6dec66e08b24fe66a203c4b7503"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "6ee7ad36d9ff5806f315f3ef03935fe9"
  },
  {
    "url": "note/git/base.html",
    "revision": "51c07a4c2fe285de159d3bbd8055a219"
  },
  {
    "url": "note/index.html",
    "revision": "379c5a888665bd8fef44bb38cc3d70ca"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "5a2102a77a9a23580f893b2c21c0698a"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "9ebbc514de7f819e748fe341bce559c3"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "525b209b6d9411e05c814080306aab1f"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "99df366426ddf019c3d47d36dfe489da"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "9ff4b9bd9a7f6bee1d87899997e5237b"
  },
  {
    "url": "note/react/base.html",
    "revision": "21b44c39997e91ba0fa589c6cc880309"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "236d828a1a9b7950090b832126268f21"
  },
  {
    "url": "note/vue/base.html",
    "revision": "31af76247fe3cedb2f214dcca1dd4ed1"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "2ae550c9bbff5f02d587006b6963a9d8"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "8dfae689c753791630d77c5c8a8d274e"
  },
  {
    "url": "note/vue/index.html",
    "revision": "d150a36ced000a24adf9cc92710fa54b"
  },
  {
    "url": "note/vue/router.html",
    "revision": "4004312108952231c44984457d51736b"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "c3dbce5167cf784fe86b389f82c8d3e0"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "e9452bc39e13bfff21e62973b8294255"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "be99a93e63d8f1090b59d553637dffd7"
  },
  {
    "url": "project/index.html",
    "revision": "cfe66f4223b759df05419b4b661dd221"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "2789b76695ece5dc3e646d48a4f1063e"
  },
  {
    "url": "work/index.html",
    "revision": "605eb6f11102292ae21b730cce244599"
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
