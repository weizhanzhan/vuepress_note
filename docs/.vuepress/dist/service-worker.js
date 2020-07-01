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
    "url": "assets/js/10.cc86770e.js",
    "revision": "1cbb689cc11e8c075c8dac72ecfa0401"
  },
  {
    "url": "assets/js/11.fbf25132.js",
    "revision": "c7e7d6d20b0f6b3d9f1af57fcd692f89"
  },
  {
    "url": "assets/js/12.000983c0.js",
    "revision": "045ef2f9faca4a729e6decab499c42ed"
  },
  {
    "url": "assets/js/13.29062f58.js",
    "revision": "504d43aff4f93df02b92a1212a4b7379"
  },
  {
    "url": "assets/js/14.435f140e.js",
    "revision": "82ec513487fc041bc077f9347e3950ef"
  },
  {
    "url": "assets/js/15.d5f67d32.js",
    "revision": "388f23c96539fdbf9afcbbe70d5fdfcc"
  },
  {
    "url": "assets/js/16.f48e4ee5.js",
    "revision": "9e5cd7cf55bd44b56c409c80e671c564"
  },
  {
    "url": "assets/js/17.ebea200c.js",
    "revision": "f517defa64ae758863e6119ca43f6fb7"
  },
  {
    "url": "assets/js/18.46127a32.js",
    "revision": "28f5231780315a4a6647f49b72e3003d"
  },
  {
    "url": "assets/js/19.546d48f6.js",
    "revision": "6b2b307d281722b96b9d802ef29d111b"
  },
  {
    "url": "assets/js/2.056ead7a.js",
    "revision": "a21ef8e205a9950e8f1f72255d027d73"
  },
  {
    "url": "assets/js/20.8804ad73.js",
    "revision": "89dbaf36f22bd56512f6e68493e1677e"
  },
  {
    "url": "assets/js/21.1105e742.js",
    "revision": "05846a7244cd090c19fc19788f51d698"
  },
  {
    "url": "assets/js/22.282df64f.js",
    "revision": "f4e91d34a0ea6543ec21e9fb82f16da5"
  },
  {
    "url": "assets/js/23.299a980e.js",
    "revision": "cdeee612444e2fed111837b32005c054"
  },
  {
    "url": "assets/js/24.e8d5435b.js",
    "revision": "7587fe5943bfde331020fc8568767e60"
  },
  {
    "url": "assets/js/25.db35127e.js",
    "revision": "a6edba704a0baa13c99038785e255016"
  },
  {
    "url": "assets/js/26.1fbd78fd.js",
    "revision": "e2f3ed4d4f985516d233a147a614cf7b"
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
    "url": "assets/js/3.961aebce.js",
    "revision": "d6bd99e772c67124434b102fef0a140f"
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
    "url": "assets/js/7.72cd2e9b.js",
    "revision": "8cdf5dafacaf8eb5f5ec906370b6fc5a"
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
    "url": "assets/js/app.7f2c897a.js",
    "revision": "69449223b94b670cac7bbfb04991a72c"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "21cc3d65555b2f6c71b38dc8bc2fecc1"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "72b1ad3a58df906646be30f99b70d759"
  },
  {
    "url": "note/git/base.html",
    "revision": "d25920af665bb8fa0f232b57653dd417"
  },
  {
    "url": "note/index.html",
    "revision": "d78e5400b81b28b0daf34ac11c4d30df"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "90600e2bacaeafd98b752433abee50b7"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "99c8563d587fd8c6cf19bceca87fa332"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "7b7eef340846bce55fc23211b2bbad83"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "3bf7812a865b6ef391b00607839f32f8"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "b60ab96c9a8101c02604881563f65d67"
  },
  {
    "url": "note/react/base.html",
    "revision": "38a6bac6d1180eafaf2850a274a0adb6"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "da59664bbf043a36c4b416c9264fdd7a"
  },
  {
    "url": "note/vue/base.html",
    "revision": "99b4008fa6931517f1618d129db59ccd"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "65c8d88ffe3926daa15f54dec6f5c212"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "5b2203fd33f5b7cd16f14b55f0161ffc"
  },
  {
    "url": "note/vue/index.html",
    "revision": "52703572f7f03c7b4a2b654a265cef47"
  },
  {
    "url": "note/vue/router.html",
    "revision": "efac9937c9c8124fe88dd1197da990bc"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "c2b569b13de986d047fd545ba9558c0e"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "f0a7f27126aa9ec0d3aa8f408b6b08ef"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "0235b56f2d3557afbfa6f594c2effebf"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "432707771a026e45806dfb773505b6dd"
  },
  {
    "url": "work/index.html",
    "revision": "8704da76595d460c8a144566bb3bd027"
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
