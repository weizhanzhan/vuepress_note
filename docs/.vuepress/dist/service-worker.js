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
    "url": "assets/js/10.c5e78b67.js",
    "revision": "397181f1fdcf94a3b511f9467e8a9f10"
  },
  {
    "url": "assets/js/11.65493a0e.js",
    "revision": "08a558964616d85ba778d2a2fecfe7cc"
  },
  {
    "url": "assets/js/12.f94f78fd.js",
    "revision": "43396ea39627a3300afc968ff387d61a"
  },
  {
    "url": "assets/js/13.5c82bbec.js",
    "revision": "882974a0056a5ab6238dd45ec0dc689c"
  },
  {
    "url": "assets/js/14.419ec847.js",
    "revision": "64c00ecce84fbb61aa8da84bc0492e11"
  },
  {
    "url": "assets/js/15.4ed72e6a.js",
    "revision": "09858fec262d4d1db57e35c0174d035e"
  },
  {
    "url": "assets/js/16.e5003aaa.js",
    "revision": "a90cf4c2855817f75a3a30dad27d8f72"
  },
  {
    "url": "assets/js/17.66f7b22c.js",
    "revision": "c83d817b4feb97ce482761143c0847f4"
  },
  {
    "url": "assets/js/18.0ea24a0b.js",
    "revision": "d86fd8d67a02f1ae649df1d9f7f8bc47"
  },
  {
    "url": "assets/js/19.42c7a183.js",
    "revision": "0dc547bfe8e96eee2eef86f96fbb3ede"
  },
  {
    "url": "assets/js/2.1f4bf701.js",
    "revision": "5b1f671838f5de02d9a277f46f87d3e0"
  },
  {
    "url": "assets/js/20.5c1b0d40.js",
    "revision": "495f6558b68ec6ca356d98fd549ba5fa"
  },
  {
    "url": "assets/js/21.f8df5903.js",
    "revision": "b6e4e12a1ec3e5d65512f3a034f615ea"
  },
  {
    "url": "assets/js/22.521f3a56.js",
    "revision": "a6723b6bd2f6f855e3e377514e16cf69"
  },
  {
    "url": "assets/js/23.44c96d16.js",
    "revision": "f9468059e31e8abd71084f462567ec6e"
  },
  {
    "url": "assets/js/24.d122aff8.js",
    "revision": "d3065708339b32d37d5cdc1ddcc2781a"
  },
  {
    "url": "assets/js/25.78803bbc.js",
    "revision": "e7b10346e62e9459511c5a113cdf6000"
  },
  {
    "url": "assets/js/26.b9860b09.js",
    "revision": "b743a0f591d5f72792649ec389fb9752"
  },
  {
    "url": "assets/js/27.bfc09615.js",
    "revision": "9ecb2944aea45c7b137086611b48289f"
  },
  {
    "url": "assets/js/28.31c6bc4e.js",
    "revision": "f5c6e8f6fed0bc0d1182f6ee52f949c5"
  },
  {
    "url": "assets/js/29.d8d370ba.js",
    "revision": "5d1438814462df15b1f9d51bcd4895ee"
  },
  {
    "url": "assets/js/3.d0d914b8.js",
    "revision": "2e1226b78f45fe54e17ee3e5b10ebb09"
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
    "url": "assets/js/7.4bafd6f0.js",
    "revision": "b2cc6eaf3b4909823b4303ea2421b436"
  },
  {
    "url": "assets/js/8.8e2681ba.js",
    "revision": "afe1c45b7324eee93196b0ecac237659"
  },
  {
    "url": "assets/js/9.bf8973d1.js",
    "revision": "6d8ed9a2b16c8c5c45d8b7ce64084fe5"
  },
  {
    "url": "assets/js/app.2c56439d.js",
    "revision": "8a65e51ab207ec855e23ee0430e866f8"
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
    "revision": "cabf8acbc559fb9982e37b59f42ab9b1"
  },
  {
    "url": "manda.jpg",
    "revision": "0175c2a01d99c0e97c1ca44cc47e6c18"
  },
  {
    "url": "note/git/autoplay.html",
    "revision": "80088b2be0c260e7d238710c6bd74957"
  },
  {
    "url": "note/git/base.html",
    "revision": "069bf41b1274cf7f2ef52a710554da2a"
  },
  {
    "url": "note/index.html",
    "revision": "30d6209fdf841211198165886e3c7b4e"
  },
  {
    "url": "note/javascript/algorithm.html",
    "revision": "0e87dd670e5a298fb72fb4ca5d7fde10"
  },
  {
    "url": "note/javascript/design.html",
    "revision": "e0fe3c5d5b0427901286be3bd7f066be"
  },
  {
    "url": "note/javascript/skill.html",
    "revision": "0f2fe934092f61ed04c1caa96077d8f0"
  },
  {
    "url": "note/jpush/apicloud.html",
    "revision": "b718b4f5b895e773973acfd2184868fa"
  },
  {
    "url": "note/micro-fe/single-spa.html",
    "revision": "1c7fb4be90ccabb39a1bfa6b14fb27c0"
  },
  {
    "url": "note/plan/2020.html",
    "revision": "2cba156e362e23e537d31a604bfb1185"
  },
  {
    "url": "note/react/base.html",
    "revision": "f434b1bdf2a560d8aa482f146d29a5b8"
  },
  {
    "url": "note/typescript/work.html",
    "revision": "aea055ac5586123ebd4b1cc6f74dfe94"
  },
  {
    "url": "note/vue/base.html",
    "revision": "07f5eb227a4db89b7447eb80f9d8fd2f"
  },
  {
    "url": "note/vue/directive.html",
    "revision": "7043992bb5a38b806afaa801bf4f82b3"
  },
  {
    "url": "note/vue/elementui.html",
    "revision": "5d327ad2b2a32b945b0c657bbb263889"
  },
  {
    "url": "note/vue/index.html",
    "revision": "92b2cca63d1b84d4fcab797d2a59f3d0"
  },
  {
    "url": "note/vue/router.html",
    "revision": "834144dec43d6217cc2deb9f39ec0f44"
  },
  {
    "url": "note/vue/v-model.html",
    "revision": "acbc6a4c644254646b1877f7b91af2b8"
  },
  {
    "url": "note/vue/vuex.html",
    "revision": "6f93484cca1297cc786577469d4606ae"
  },
  {
    "url": "note/vuepress/step.html",
    "revision": "2f86641699bb74297022b42c96685b22"
  },
  {
    "url": "project/index.html",
    "revision": "18fe925d52117979cbe82e3daff5a7a4"
  },
  {
    "url": "work/amole/vsp.html",
    "revision": "b0aa8c9ec43ea3bff26a205ca765c963"
  },
  {
    "url": "work/index.html",
    "revision": "9f6d17ac881295fec76e88c596a6bcce"
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
