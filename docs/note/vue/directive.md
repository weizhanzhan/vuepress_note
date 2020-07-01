# 自定义Vue指令

除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令

以下是TypeScript语法：
```js
import Vue from 'vue'

const directives:{ [key:string]:any } = {
  /**
   * ElInput输入框 限制只能输入数字
   */
  number: {
    bind(el:HTMLElement) {
      el.handler = function() { 
        const input = el as HTMLInputElement
        input.value = input.value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1') // 保留两位小数
       
      }
      el.addEventListener('input', el.handler)
    },
    unbind(el:HTMLElement) {
      el.removeEventListener('input', el.handler as VoidFunction)
    }
  },
  /**
   * ElInput输入框 自动获取焦点
   */
  foucs: {
    inserted: function(el:HTMLInputElement) {
      input.focus()
    }
  }
}
Object.keys(directives).forEach(directiveName => {
  Vue.directive(directiveName, directives[directiveName])
})

```
整理中...