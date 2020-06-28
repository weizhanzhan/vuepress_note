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
    "url": "assets/js/10.aac79c53.js",
    "revision": "ff31baead5dd5a08d1415ec225727fc7"
  },
  {
    "url": "assets/js/11.9ceaa1b5.js",
    "revision": "cbee875928f598985b7f6a7dc25ae27c"
  },
  {
    "url": "assets/js/12.443cf444.js",
    "revision": "8ce90674cf8ea631249ec1a7e698c12d"
  },
  {
    "url": "assets/js/13.f290b6d2.js",
    "revision": "5db8f2a3ce7ac7d6996d0e577f3ad825"
  },
  {
    "url": "assets/js/14.17ff9167.js",
    "revision": "7286d9517771c6967660cc1ddf561c92"
  },
  {
    "url": "assets/js/15.de4d0d68.js",
    "revision": "28c889cad69a41cb249f07cec0f570ac"
  },
  {
    "url": "assets/js/16.9d82363b.js",
    "revision": "9d20a4fb8b0da88fe606893cac7de753"
  },
  {
    "url": "assets/js/17.df5659f9.js",
    "revision": "8bbd8f5bec7cd213c07a0386642dbe6f"
  },
  {
    "url": "assets/js/18.46127a32.js",
    "revision": "28f5231780315a4a6647f49b72e3003d"
  },
  {
    "url": "assets/js/19.243afa29.js",
    "revision": "3be2ac5279a1b82078ba265fd5673199"
  },
  {
    "url": "assets/js/2.056ead7a.js",
    "revision": "a21ef8e205a9950e8f1f72255d027d73"
  },
  {
    "url": "assets/js/20.cccf70c9.js",
    "revision": "26b3cad0c154adb765c7de1537eff497"
  },
  {
    "url": "assets/js/21.27453689.js",
    "revision": "688bb026604ea95e1772d42d5c33cc31"
  },
  {
    "url": "assets/js/22.e6384506.js",
    "revision": "8718d264efad021d36ebf56b8e921d9a"
  },
  {
    "url": "assets/js/23.9711512e.js",
    "revision": "a09dfed5b9ab08ef946edb500c6c6007"
  },
  {
    "url": "assets/js/24.ad9a9cd0.js",
    "revision": "46785418520335e35379d2c60ae974fc"
  },
  {
    "url": "assets/js/25.0a8d1a99.js",
    "revision": "5cf7e84c9ef9e3d2d9eabafd3c544b37"
  },
  {
    "url": "assets/js/26.53deb1b5.js",
    "revision": "0a3eb3525e56e444890a7b3ccab8caae"
  },
  {
    "url": "assets/js/27.367356b1.js",
    "revision": "f33dd2cecbc5d70c89c3ecb1d6a8a594"
  },
  {
    "url": "assets/js/3.b051efed.js",
    "revision": "88eef55d7c295a84d19f3951a42715c7"
  },
  {
    "url": "assets/js/4.2cbf51eb.js",
    "revision": "3f7921566e428297fcad0b033b2bdfd1"
  },
  {
    "url": "assets/js/5.dc1392fa.js",
    "revision": "d2781f1671b90995c30db55a7c1feb78"
  },
  {
    "url": "assets/js/6.496fcc97.js",
    "revision": "09f1e7de75b83142130b6c507f54fb39"
  },
  {
    "url": "assets/js/7.6fa4dc6e.js",
    "revision": "2517c0ac891224e41f37d38fc839769a"
  },
  {
    "url": "assets/js/8.27c3fdcc.js",
    "revision": "c47d4bec4eae85e681a5319426dae03b"
  },
  {
    "url": "assets/js/9.9c26f300.js",
    "revision": "918cd6f65a0b4bbbee2675f9a4194218"
  },
  {
    "url": "assets/js/app.ce469fdb.js",
    "revision": "6730305f62c94c10cdaee921e6954e34"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "dafde00147aaad4783cd42d00e181a40"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "1af0955aa71827688ce33be9dd710ac5"
  },
  {
    "url": "note/git/base.html",
    "revision": "26cfd86fe606d1c3c49ea9d8f73b9b46"
  },
  {
    "url": "note/index.html",
    "revision": "8eb308f9e11a2f1220d5015cf949391e"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "9091874f63cac18355df7dc604986fe5"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "a23d0b33749e1d97907acb2609c9feaa"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "1cfa14203cf4437946d67c8e409a701b"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "6a3524e73fbc533c8178fa389d92da2d"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "5b31e3d461c5ca546c9085a844195787"
  },
  {
    "url": "note/react/base.html",
    "revision": "9b9829967c3044e4c6d1b9b87c046f6f"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "c58968f3c6136a6c31edd53b34b2f340"
  },
  {
    "url": "note/vue/base.html",
    "revision": "9a048e92e01cdeae041449f7bdb92da6"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "0fa7c6d725484935623f3bdbd4f1e4e1"
  },
  {
    "url": "note/vue/index.html",
    "revision": "554a42ed5d1e0181798050eb4688d059"
  },
  {
    "url": "note/vue/router.html",
    "revision": "547b9f79cd91e8416fb323212f34a957"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "dabc0b39006f71d898571c943d88c717"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "1c5a702e1217b8f43c8f3ccdbe2d62bf"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "8f1a02a7fe9213a5fd34b4c06de87c37"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "2ac79f18a6fc3d4933f148fb712a23df"
  },
  {
    "url": "work/index.html",
    "revision": "2352c6ab962e681e60cf61db6f825451"
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
