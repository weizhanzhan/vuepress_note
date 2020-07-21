# Vue源码

## 目录
参考http://caibaojian.com/vue-design/art/3vue-example.html
## 构造函数
定义了构造函数,引入依赖,调用初始化函数,最后导出Vue
```js
//vue-dev\vue-dev\src\core\instance\index.js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

## initMixin
vue的初始化操作
```js
Vue.prototype._init = function (options) {} 
```



new Proxy()

*has方法:隐藏某些属性，不被in运算符发现(对for...in循环不生效)
只要再执行 in运算后 才会有执行has方法


- initLifecycle
```
1.查找最顶层的组件，把当前vm实例push到其children里
2.为当前vue实例 初始化$parent,$root,$children,$refs,$_watcher,$_inactive,$_directInactive,$_isMounted,$_isDestroyed,$_isBeingDestroyed,$children
```

- initEvents
```
1.初始化vm._events 一个空对象，_hasHookEvent为false，后面判断$options._parentListeners 执行updateComponentListeners方法（待研究）
```

## stateMixin
```js
Vue.prototype.$data 
Vue.prototype.$props 
Vue.prototype.$set = set 
Vue.prototype.$delete = del 
Vue.prototype.$watch = function(){} 
```

## eventsMixin
```js
Vue.prototype.$on 
Vue.prototype.$once 
Vue.prototype.$off 
Vue.prototype.$emit
```

## lifecycleMixin

```js
Vue.prototype._update 
Vue.prototype.$forceUpdate 
Vue.prototype.$destroy  
```

## renderMixin

```js
Vue.prototype.$nextTick 
Vue.prototype._render 
Vue.prototype._o = markOnce 
Vue.prototype._n = toNumber 
Vue.prototype._s = toString 
Vue.prototype._l = renderList 
Vue.prototype._t = renderSlot
Vue.prototype._q = looseEqual 
Vue.prototype._i = looseIndexOf 
Vue.prototype._m = renderStatic 
Vue.prototype._f = resolveFilter 
Vue.prototype._k = checkKeyCodes 
Vue.prototype._b = bindObjectProps 
Vue.prototype._v = createTextVNode 
Vue.prototype._e = createEmptyVNode 
Vue.prototype._u = resolveScopedSlots 
Vue.prototype._g = bindObjectListeners
```