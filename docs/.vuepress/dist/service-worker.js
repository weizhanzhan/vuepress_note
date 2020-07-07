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
    "url": "assets/js/10.af2348c5.js",
    "revision": "58f1bae1059f03acc669840cf081ecab"
  },
  {
    "url": "assets/js/11.79a6c8b9.js",
    "revision": "e65985f094cbd78ae1e7ee3b1c5340a8"
  },
  {
    "url": "assets/js/12.b92d4de0.js",
    "revision": "bdc747b9495e1f5034ec6d7df94d0458"
  },
  {
    "url": "assets/js/13.44329d09.js",
    "revision": "2caa3055f35936257977808dd9ec2464"
  },
  {
    "url": "assets/js/14.419ec847.js",
    "revision": "64c00ecce84fbb61aa8da84bc0492e11"
  },
  {
    "url": "assets/js/15.5f1cffd0.js",
    "revision": "a1706a3b24f99e46add01bc67fd48e13"
  },
  {
    "url": "assets/js/16.33585ae9.js",
    "revision": "f99c143481fe72e24f957f7dd394f5b0"
  },
  {
    "url": "assets/js/17.16f96c6d.js",
    "revision": "f792dfb1963cb50e2f2cadc45067671f"
  },
  {
    "url": "assets/js/18.664fa202.js",
    "revision": "b7a92ceb883f2006c18ca0881e098a79"
  },
  {
    "url": "assets/js/19.ae27136b.js",
    "revision": "10efece40a5bc1d25c04b7e343a3c135"
  },
  {
    "url": "assets/js/2.1f4bf701.js",
    "revision": "5b1f671838f5de02d9a277f46f87d3e0"
  },
  {
    "url": "assets/js/20.31c1e3ac.js",
    "revision": "5cade9c5091f75ae0d4c78503e124753"
  },
  {
    "url": "assets/js/21.968f1be0.js",
    "revision": "95e37ab7870949eb0cc344578178c73c"
  },
  {
    "url": "assets/js/22.6be2dbac.js",
    "revision": "58937d5f5dd3b1d28bbcfde1c288def7"
  },
  {
    "url": "assets/js/23.c1a2937c.js",
    "revision": "c747328fe9cc0fdae18b743bf446d42a"
  },
  {
    "url": "assets/js/24.8a930f43.js",
    "revision": "43e366be2f44d3e0cb4535cfda25fb99"
  },
  {
    "url": "assets/js/25.c8784b81.js",
    "revision": "81780d0c9ab0643a121328fdd5818be0"
  },
  {
    "url": "assets/js/26.d323493c.js",
    "revision": "5eef94e001479ca2ee0dcdfff59467cf"
  },
  {
    "url": "assets/js/27.bfc09615.js",
    "revision": "9ecb2944aea45c7b137086611b48289f"
  },
  {
    "url": "assets/js/28.b500ba2a.js",
    "revision": "3151181ec712f4553fe80b800848acfa"
  },
  {
    "url": "assets/js/29.d8d370ba.js",
    "revision": "5d1438814462df15b1f9d51bcd4895ee"
  },
  {
    "url": "assets/js/3.3e077406.js",
    "revision": "0e70ee86be7b2f7ce131cfecc3a0c3d7"
  },
  {
    "url": "assets/js/30.c0f3232f.js",
    "revision": "a6fd8b004b01a7a428b26a766a71589d"
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
    "url": "assets/js/6.d315a3b0.js",
    "revision": "216e43c1f2f55ca2a6134c0aa6ca4071"
  },
  {
    "url": "assets/js/7.0bd0bc12.js",
    "revision": "ecd42736a5c6684cccec674ffe2487c3"
  },
  {
    "url": "assets/js/8.8e2681ba.js",
    "revision": "afe1c45b7324eee93196b0ecac237659"
  },
  {
    "url": "assets/js/9.58e88b8f.js",
    "revision": "8c1caf41a7f8ba8f5324a57c0677db47"
  },
  {
    "url": "assets/js/app.5d52a731.js",
    "revision": "d92cdbad43627ad155026e5d91b3df51"
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
    "revision": "06465730cbebfdacb93e8990d3947936"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "311832d8e5ad7c6cdf2e45389802ea58"
  },
  {
    "url": "note/git/base.html",
    "revision": "d936a4231ddf7b3f2e21b7fe17fb3e52"
  },
  {
    "url": "note/index.html",
    "revision": "ff6ac0f39c35e7e6da740dbe0b958e29"
  },
  {
    "url": "note/javascript/algorithm.html",
    "revision": "ff63d125a5f370703e8a12c673219820"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "a9528321c9c8b1d49a6b519c87fe90f6"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "e6f2fb219e207b45d7072968126a66b5"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "8a4f2b9df091191699c21534e334eea7"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "bea0c9a66faa7d595756e4d6d3947059"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "50dc7b9127c25dbb6e559b1523589441"
  },
  {
    "url": "note/react/base.html",
    "revision": "f279ebce2db86eeea3718ec20e8b3ca5"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "9ea68985132a4f4648917bef436e7b7b"
  },
  {
    "url": "note/vue/base.html",
    "revision": "bc09028cc4ef0cb71f79576958d4f8f4"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "40992c95e62055954ef548fc49eac96a"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "a153dc02e4d80883aab8f12a8498dfff"
  },
  {
    "url": "note/vue/index.html",
    "revision": "30c0bb53e533d1fecea321cc8f284808"
  },
  {
    "url": "note/vue/router.html",
    "revision": "871d543ed87f7d7bb23e4e8963eca29b"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "e1d3fe541d64c9db07d17308bad32d1c"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "a4d741786d4bd89f9b4f931163ba2b63"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "6460adbb4f70c643d217436c2f1676e3"
  },
  {
    "url": "project/index.html",
    "revision": "84884c7a6bdbbdac090bafc65f25a255"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "2dc47900c81e1c428f83083e4d50579c"
  },
  {
    "url": "work/index.html",
    "revision": "fbd71aa9ed426dc4be6a2524dd6eaa55"
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
