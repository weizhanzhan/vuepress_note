# Css

## Sass 

### 为 sass 提供全局样式，以及全局变量
可以通过在 main.js 中 Vue.prototype.$src = process.env.VUE_APP_PUBLIC_PATH;挂载环境变量中的配置信息，然后在js中使用$src 访问。

  css 中可以使用注入 sass 变量访问环境变量中的配置信息
```js
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        prependData: `
        @import "@scss/variables.scss";
        @import "@scss/mixins.scss";
        @import "@scss/function.scss";
        $src: "${process.env.VUE_APP_OSS_SRC}";
        `
      }
    }
  }
};
```
在 scss 中引用
```css
.home {
  background: url($src+"/images/500.png");
}
```

## stylus

### 为 stylus 提供全局变量
```
npm i -D style-resources-loader
```
```js
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const addStylusResource = rule => {
  rule
    .use("style-resouce")
    .loader("style-resources-loader")
    .options({
      patterns: [resolve("src/assets/stylus/variable.styl")]
    });
};
module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStylusResource(config.module.rule("stylus").oneOf(type))
    );
  }
};
```