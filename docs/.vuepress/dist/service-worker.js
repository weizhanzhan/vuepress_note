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
    "url": "assets/js/15.a1b67342.js",
    "revision": "4267565f326d9eb0f803c8d0b7b02be5"
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
    "url": "assets/js/20.ee756bc7.js",
    "revision": "1d38115c1e46c76ff575de300b060a5d"
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
    "url": "assets/js/23.e812e771.js",
    "revision": "d0dbde8a8ce3fda6980960cba3d8fc54"
  },
  {
    "url": "assets/js/24.1ceb4c24.js",
    "revision": "076aa23a5380f65828b39d7ab13d5ef5"
  },
  {
    "url": "assets/js/25.142600dd.js",
    "revision": "419d5d3edba582ae12db842b230b345c"
  },
  {
    "url": "assets/js/26.389bd7f5.js",
    "revision": "7a2398fcb19a6b99b1965a0cada7212a"
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
    "url": "assets/js/4.cc7a07e6.js",
    "revision": "44eef7b5db89f8d6fac5f2318a4cc4c2"
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
    "url": "assets/js/7.1672255e.js",
    "revision": "63d9e6d1c3aa21a7e8add34fb6b69db6"
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
    "url": "assets/js/app.7b55409e.js",
    "revision": "65c28696b136217556c454a862eb3e27"
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
    "revision": "e9914ff98c5861375310ad66d70941b9"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "47df2ff60788d4bc0648ad9b356e0b83"
  },
  {
    "url": "note/git/base.html",
    "revision": "d1e0013730a5aae820544987cbc5d4e4"
  },
  {
    "url": "note/index.html",
    "revision": "8030496d7af2e2668be6778ee40e7bd9"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "4b6e877821fba906d7a12abc69e6d371"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "2a73eac921155bcd1744bab6479b8ffa"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "8cd4108819a7a2e8493e7681901f02aa"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "c453e369cd2d261b2f9dda8758164d99"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "1f3f640cf22e027d3f340f1e5b3a731c"
  },
  {
    "url": "note/react/base.html",
    "revision": "c18bb9b15cb911e0a7748dfcff2adb2b"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "ca48259e46074a0fb269122f7769ede8"
  },
  {
    "url": "note/vue/base.html",
    "revision": "d2a3cf18681a00f9aeaa0d16a24138ec"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "676de5959690d55173638b43f66d3e73"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "18077a193d8723190cce98d1d104f2e4"
  },
  {
    "url": "note/vue/index.html",
    "revision": "ee28d8c2aa33c425431a82efddaad807"
  },
  {
    "url": "note/vue/router.html",
    "revision": "8f7ea8d22fb354654bff412cc60f4919"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "2dd5c86bf637ac90d11de20b6ba2daec"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "1eff9ce8f9f9ab0b80055e42fef35217"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "8a07943c0554b7693202efa098ab4798"
  },
  {
    "url": "project/index.html",
    "revision": "3340ae77248e76faf0947be57fee97f9"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "ea15d0cde9bbf190fd04aee7dc27771b"
  },
  {
    "url": "work/index.html",
    "revision": "4b4fbdfc511a39117fcc737b5e4a2294"
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
