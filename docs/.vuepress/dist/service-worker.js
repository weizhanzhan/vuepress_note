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
    "url": "assets/js/10.8ae0a76f.js",
    "revision": "866f66077ae6cc5a1f3a26c6a11d95c6"
  },
  {
    "url": "assets/js/11.2a0af8ba.js",
    "revision": "1f6ed0f559e41d9cee010b87ef6e0aa6"
  },
  {
    "url": "assets/js/12.33a67b51.js",
    "revision": "79e34a0a8ff412e64a745a288b1cf6b1"
  },
  {
    "url": "assets/js/13.2430722d.js",
    "revision": "5ef569a2353ba8729ef0e6e953bf65ae"
  },
  {
    "url": "assets/js/14.dad467f6.js",
    "revision": "f3ae14f53904072d53ba2c40a51e7956"
  },
  {
    "url": "assets/js/15.7b260fc6.js",
    "revision": "3e87ecee556a10c553bf5e3a1a8d5b63"
  },
  {
    "url": "assets/js/16.30b43634.js",
    "revision": "d323c49cee97c6e8a53dcc3af5a4044e"
  },
  {
    "url": "assets/js/17.eabec648.js",
    "revision": "f63a0d5f07829fe0d5ef3826d9706322"
  },
  {
    "url": "assets/js/18.5b8b4683.js",
    "revision": "b48b6e56bd2e8d00bfa3674d8a7cfabf"
  },
  {
    "url": "assets/js/19.e5c834e2.js",
    "revision": "82542e6a6e88ebe38e4a354ae8e68fe4"
  },
  {
    "url": "assets/js/2.d572bafc.js",
    "revision": "a517377a1bb2cc256f6e7175778816b3"
  },
  {
    "url": "assets/js/20.76f0ce09.js",
    "revision": "8d5a7118199ffec9943ab35aa47d68cf"
  },
  {
    "url": "assets/js/21.d09014a2.js",
    "revision": "3d1a9a82913a2ce69ef1b95fa5c8f930"
  },
  {
    "url": "assets/js/3.ffcb49ef.js",
    "revision": "0487fe75fdd9ed84bc8940f1c7c7401d"
  },
  {
    "url": "assets/js/4.4dd6ec4e.js",
    "revision": "07c90a7f3e6db6b26972d86c26ceed32"
  },
  {
    "url": "assets/js/5.b5014e90.js",
    "revision": "63dd34ad615ff415f22579fd9aa20776"
  },
  {
    "url": "assets/js/6.6bfc06c2.js",
    "revision": "57dc8438ede1cb3cdb2dfbf37ac800aa"
  },
  {
    "url": "assets/js/7.865be3be.js",
    "revision": "69968953fe90d5379d7cd199a014a1bc"
  },
  {
    "url": "assets/js/8.5271c4ee.js",
    "revision": "dbabcc13107e9fe3afcdbceeb178ff7b"
  },
  {
    "url": "assets/js/9.fb676af7.js",
    "revision": "f4d6b3526bea835dd3dc844afd4c5454"
  },
  {
    "url": "assets/js/app.2b25d2a7.js",
    "revision": "88064c984ccbf902962042d39a60cec7"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "1f9ec1d7a1012ba426fbdde7b3200ff8"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "924454a1326bf2e4bbecc81af1318899"
  },
  {
    "url": "note/git/base.html",
    "revision": "1354b7755f3cb6910178f16d557d29b1"
  },
  {
    "url": "note/index.html",
    "revision": "07387628e922c0a684647d292a7eae29"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "7f9fab99dcb97254e0062ee57cd93155"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "5af72b8603a6242abfb0fcba0465552d"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "61e48c12e1f930fe9d34831a4338daa8"
  },
  {
    "url": "note/react/base.html",
    "revision": "25ad2238222f2ccabea46ae4535f2613"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "0486eaed3e036f1faf53087549b2e878"
  },
  {
    "url": "note/vue/index.html",
    "revision": "ba910d5d54ce828c52338d11d8ee2ddd"
  },
  {
    "url": "note/vue/router.html",
    "revision": "f3c24c6a2edb16badd1b358fe7db8ec0"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "5e4a6d534af989ac945fd89930d1107f"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "87d9335aedb86e870ae7189c2487187b"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "07acf5045c8e8f58efb82cb771cc64dd"
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
