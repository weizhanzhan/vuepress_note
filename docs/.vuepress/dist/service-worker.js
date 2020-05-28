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
    "url": "assets/js/10.b2a708fd.js",
    "revision": "96a0bdac28c57a5bc1f204c45d4b532a"
  },
  {
    "url": "assets/js/11.d0bbccb4.js",
    "revision": "5d3f33344126f8f3430fbbe838cfab8e"
  },
  {
    "url": "assets/js/12.a2ee7623.js",
    "revision": "4a72d4c3e8ccf9f0d9f07bbb7409f897"
  },
  {
    "url": "assets/js/13.29602a20.js",
    "revision": "d4bbc9e51a5f285dfaf50bc8ad483887"
  },
  {
    "url": "assets/js/14.c8be4986.js",
    "revision": "2243fc9ed6e17af3c50ff9ef7597e8f5"
  },
  {
    "url": "assets/js/15.0439d981.js",
    "revision": "c29a2019f75d6f1c3065e28ae6f44a8f"
  },
  {
    "url": "assets/js/16.6de18657.js",
    "revision": "0e086c68a3ebe99d83f24194d1f22a91"
  },
  {
    "url": "assets/js/17.02e3f272.js",
    "revision": "40ccfb20462e89fd5fe316959659a9f5"
  },
  {
    "url": "assets/js/18.c904025e.js",
    "revision": "a61174820a885c159b0414d6e0292445"
  },
  {
    "url": "assets/js/19.05b51402.js",
    "revision": "4f14255fdecfbc2891e2d8a74526e833"
  },
  {
    "url": "assets/js/2.d572bafc.js",
    "revision": "a517377a1bb2cc256f6e7175778816b3"
  },
  {
    "url": "assets/js/20.0d5666c5.js",
    "revision": "af578e9c702b6e4b28343f62005661f6"
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
    "url": "assets/js/3.ffcb49ef.js",
    "revision": "0487fe75fdd9ed84bc8940f1c7c7401d"
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
    "url": "assets/js/6.79096846.js",
    "revision": "bf85067494b5ca0f9e947809f9c6856f"
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
    "url": "assets/js/9.7f2656a4.js",
    "revision": "a11e5035f193211a1006a5f86675d387"
  },
  {
    "url": "assets/js/app.caf300f6.js",
    "revision": "2ef6254ff56a477b1cbb4e0c559aac3a"
  },
  {
    "url": "ico.png",
    "revision": "9690202ab999ada35cfb11df23ea3a08"
  },
  {
    "url": "index.html",
    "revision": "fe8163a0d519006bb46de20aff648f2e"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "355ba79268d8fad3d93ae658ea4d6381"
  },
  {
    "url": "note/git/base.html",
    "revision": "1f06f31b08103baf5e90b79741ceff35"
  },
  {
    "url": "note/index.html",
    "revision": "06606f8090f852cf45e886e7d89a98ae"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "0af12c77c51c83d76567e0f9bd16ee8e"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "15d5100a098da67d7da52946e10aa28d"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "fdff11b72f7c0ea5f972afe5e90ebb58"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "30a98da1f4ec78abad579001fc440dca"
  },
  {
    "url": "note/react/base.html",
    "revision": "a469d068e719052c05ea11cd3b23f917"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "eeaac8da719736daa33ffbcdab485999"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "58b81b62038c7e21bef2663445ea21bd"
  },
  {
    "url": "note/vue/index.html",
    "revision": "7a121b3f2cb6151d42c046b4a778a15b"
  },
  {
    "url": "note/vue/router.html",
    "revision": "e13829e6ec447e94633f95086479e651"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "31c147b0fe2190a44b51e4d6d1b31c5f"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "97c1bde87ba05ae491cd3a1d4403a3fc"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "7beb432617cb361e09b99e7f0c911f5a"
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
