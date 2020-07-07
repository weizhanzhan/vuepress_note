# JavaScript Skill
## 1.取最大值
```js

const arr = [1,2,3,4,5,6,7]
//one
Math.max(...arr)
//two
for (let i = 0; i <arr.length - 1; i++) {
  max = max < arr[i+1] ? arr[i+1] : max
}
//three
arr.sort((num1,num2)=> num2-num1) //arr[0]最大值
```

## 2.动态修改伪类元素content
```html
<div>
  <span data-before='哈哈哈'>你笑啥</span>
  <button onclick="change()">点击改变</button>
</div>
```
```css
span::before{
  content: attr(data-before);
}
```
```js
let change = ()=>{
  let oSpan = document.querySelector("span");
  oSpan.setAttribute("data-before","改变")
};
```

## 3.正则限制输入框只能输入数字和小数点
```vue
<template>
  <el-input :value="count" @input="handleCountIsNumber"/>
</template>
<script>
export default {
  data(){
    return {
      count:0
    }
  },
  methods:{
    handleCountIsNumber(e){
      let value = e.replace(/[^0-9.]/g, '').trim()
      const hasDotted = value.includes('.')
      value = hasDotted ? `${value.split('.')[0]}.${value.split('.')[1].slice(0, 4)}` : value
      // 小数最多可输入4位。（不用.toFixed() 因为不用强制保留4位小数）
      this.count= value
    }
  }
}
</script>
```
## 4.flex自适应宽高，超出滚动条
```html
 <div
    class="container"
    style="height:0px"
  >
    <div style="display:flex;height:100%;width:100%">
      <div style="flex:1;overflow: auto;">
        <div style="height:1000px;width:2000px">
          我是内容
        </div>
      </div>
    </div>
  </div>

```