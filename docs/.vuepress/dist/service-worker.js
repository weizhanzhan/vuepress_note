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
    "url": "assets/js/10.142ace3f.js",
    "revision": "a291971d7bacb9ae6e7a78be80e1e154"
  },
  {
    "url": "assets/js/11.e79fb204.js",
    "revision": "585d1d15cc097df4971c45a7232e38d7"
  },
  {
    "url": "assets/js/12.e36a5dea.js",
    "revision": "1e65039df852895485a98f834472760f"
  },
  {
    "url": "assets/js/13.946f0e51.js",
    "revision": "07c8428d2ffbe9d7f2428b15f3b9f91a"
  },
  {
    "url": "assets/js/14.3f26403a.js",
    "revision": "1a9a6259628136f3290e222582b9dace"
  },
  {
    "url": "assets/js/15.50dcdd01.js",
    "revision": "30fbd9eb2114c6f243414d967d7a9010"
  },
  {
    "url": "assets/js/16.00149190.js",
    "revision": "78f9036c52248d28e6a29e767dd6257b"
  },
  {
    "url": "assets/js/17.f8af39d4.js",
    "revision": "9864b3821ce702596a8b51a327546c7c"
  },
  {
    "url": "assets/js/18.6f77a165.js",
    "revision": "cb8f3e017a951b841fd1744faafbb187"
  },
  {
    "url": "assets/js/19.8696465e.js",
    "revision": "ae6d73b4ca45832615e8a03fda63c0c5"
  },
  {
    "url": "assets/js/2.d572bafc.js",
    "revision": "a517377a1bb2cc256f6e7175778816b3"
  },
  {
    "url": "assets/js/20.278094fa.js",
    "revision": "6b89911ddcdd7e3f8cfe1e7d22d2a5e9"
  },
  {
    "url": "assets/js/21.264375d4.js",
    "revision": "bae64598c2642018337efac12cbbe594"
  },
  {
    "url": "assets/js/22.3021ace1.js",
    "revision": "28ce66c21732921e7375a937c0afd52c"
  },
  {
    "url": "assets/js/23.2c70bd9b.js",
    "revision": "3350f9ed8864d65924068cf8d533608e"
  },
  {
    "url": "assets/js/3.047d39df.js",
    "revision": "762e73c4c326c973a718de100c2cbd98"
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
    "url": "assets/js/6.a3f3a53b.js",
    "revision": "cc00e5ac282cc9bbd2fc641fdb946f7f"
  },
  {
    "url": "assets/js/7.865be3be.js",
    "revision": "69968953fe90d5379d7cd199a014a1bc"
  },
  {
    "url": "assets/js/8.5f2e7ce9.js",
    "revision": "6de7636c0207887142c92a779f8ca698"
  },
  {
    "url": "assets/js/9.a18267b3.js",
    "revision": "b6e4b3a6eafe6e981de42c1405ba17ed"
  },
  {
    "url": "assets/js/app.83ae5ff6.js",
    "revision": "e9392b54979a726d4dd81c6f85afdf58"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "dde7fcbdc6c514aa1d5e52ca5751ed93"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "a8ca7231ab58eb9d5e1ea8098ca477b2"
  },
  {
    "url": "note/git/base.html",
    "revision": "381e0be2073fb42ae711acd6bbbb6a7e"
  },
  {
    "url": "note/index.html",
    "revision": "ef58bc00251e5feeb7ab83f77b52390d"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "8d9cffca127eb5c57b640eba0228ee7c"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "ee947c2a6a89202ee328226a84104959"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "dac6da7e53637c2e8fe19f3415de8214"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "daf6ddd3fef58aa55b9110096e7f62b1"
  },
  {
    "url": "note/react/base.html",
    "revision": "c66d842ef7a7755a17a79bf46c2578bc"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "d1a4e396b5d397770e76d7d161b2b831"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "8facdc94cf2a93dbb33bf39f60c0731d"
  },
  {
    "url": "note/vue/index.html",
    "revision": "cf88a18f05c909c06683a91d1581066c"
  },
  {
    "url": "note/vue/router.html",
    "revision": "6f389e2ec8d7eecf68b666ba8e2bb8fc"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "080b99cfde0a73537b715a941a167024"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "502686a93ad6c4ddd60ae42609c497a0"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "85c41324699150d03741b9bc7cb58e9f"
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
