# 前端微服务 Single-spa
::: tip 链接
[single-spa官网](https://zh-hans.single-spa.js.org/docs/getting-started-overview)
[参考](https://www.cnblogs.com/scdisplay/p/11648701.html)
:::


### 基本概念

一种由独立交付的多个前端应用组成整体的架构风格。将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，而在用户看来仍然是内聚的单个产品。

实现一套微前端架构，可以把其分成四部分

- 加载器：也就是微前端架构的核心，主要用来调度子应用，决定何时展示哪个子应用， 可以把它理解成电源。

- 包装器：有了加载器，可以把现有的应用包装，使得加载器可以使用它们，它相当于电源适配器。

- 主应用：一般是包含所有子应用公共部分的项目—— 它相当于电器底座

- 子应用：众多展示在主应用内容区的应用—— 它相当于你要使用的电器

所以是这么个概念：电源(加载器)→电源适配器(包装器)→️电器底座(主应用)→️电器(子应用)️

总的来说是这样一个流程：用户访问index.html后，浏览器运行加载器的js文件，加载器去配置文件，然后注册配置文件中配置的各个子应用后，首先加载主应用(菜单等)，再通过路由判定，动态远程加载子应用。

### 为何要微前端
 微前端的实现，意味着对前端应用的拆分。拆分应用的目的，并不只是为了架构上好看，还为了提升开发效率。
 将庞大的整体拆成可控的小块，并明确它们之间的依赖关系。关键优势在于：
- 代码库更小，更内聚、可维护性更高
- 松耦合、自治的团队可扩展性更好
- 渐进地升级、更新甚至重写部分前端功能成为了可能

#### 简单、松耦合的代码库
比起一整块的前端代码库，微前端架构下的代码库倾向于更小/简单、更容易开发

此外，更重要的是避免模块间不合理的隐式耦合造成的复杂度上升。通过界定清晰的应用边界来降低意外耦合的可能性，增加子应用间逻辑耦合的成本，促使开发者明确数据和事件在应用程序中的流向

#### 增量升级
理想的代码自然是模块清晰、依赖明确、易于扩展、便于维护的……然而，实践中出于各式各样的原因：
- 历史项目，祖传代码
- 交付压力，当时求快
- 就近就熟，当时求稳……

总存在一些不那么理想的代码
- 技术栈落后，甚至强行混用多种技术栈
- 耦合混乱，不敢动，牵一发何止动全身
- 重构不彻底，重构-烂尾，换个姿势重构-又烂尾……

#### 部署

- 原项目牵一发而动全身
- 初始化项目会加载整个的项目静态资源文件和相关的其他文件
- 技术栈升级压力大

### 原有项目改造

#### Vue
1. 安装 single-spa-vue 、systemjs-webpack-interop、vue-cli-plugin-single-spa（解决访问跨域）
2. vue.config.js 添加
```js
module.exports = {
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', false)
    config.output.filename(`[name].js`)
    config.externals(['vue', 'vue-router'])
  },
  filenameHashing: false
}
```
3.新建set-public-path.js
```js
import { setPublicPath } from 'systemjs-webpack-interop';

setPublicPath('注册的服务名称');
```
4.main.js调整
```js
import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = false


const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
```
#### react
暂未整理~~
### 新建子应用项目

如果你想全局安装 create-single-spa ，请在终端中运行如下命令：
```yarm
npm install --global create-single-spa
# or
yarn global add create-single-spa
```
你也可以选择本地安装 create-single-spa
```yarm
npm init single-spa
# or
npx create-single-spa
# or 
yarn create single-spa
```
最终的创建命令（[参考官网](https://zh-hans.single-spa.js.org/docs/create-single-spa)）
```
# Different ways of doing the same thing
create-single-spa --framework react（不同框架，可还成vue）
npm init single-spa --framework react
npx create-single-spa --framework react
yarn create single-spa --framework react
```

### 创建主应用
- 创建文件夹，然后npm初始化,安装依赖 npm i serve --s
- 创建index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>test</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="importmap-type" content="systemjs-importmap" />
    <script type="systemjs-importmap"  src="/importmap-config.json"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/extras/amd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/extras/named-exports.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/extras/named-register.js"></script> 
    <body>
      <script>
        System.import('/single-spa-config.js')
      </script>

    </body>
</html>
```
- 新建single-spa-config.js,启动single spa ,注册服务
```js
;(function() {
  Promise.all([System.import('single-spa')]).then( function (modules) {
    var singleSpa = modules[0]
    singleSpa.registerApplication(
      '服务名（对应子项目setPublicPath的名字）',
      ()=>{
        return System.import('服务名（对应子项目setPublicPath的名字）')
      },
      location=> true
    );
    singleSpa.start();
  })
})()
```
- 新建importmap-config.json，配置服务和其他库对应的链接,服务名，比方说下面的base。就是我的子应用，后面的链接就是子项目运行起来之后的app.js的地址
```json
{
  "imports": {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.1.1/lib/system/single-spa.min.js",
    "base":"http://localhost:8080/app.js",
    "system":"http://localhost:8082/app.js",
    "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js",
    "vue": "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"
  }
}
```
- 在package.json中的scripts中增加启动命令"serve": "serve -s -l 7000"。运行后就可以看到你的子应用展示出来了。