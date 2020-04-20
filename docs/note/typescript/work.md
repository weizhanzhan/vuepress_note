# TypeScript实战中的细节整理
## 在Typescript中定义Promise的返回值类型
:::tip
typescript中，请求接口需要封装Promise的话，默认的话，Promise的返回值是Promise<'unknown'>,但在具体的项目中，数据的结构都是前端要定义好的，所以就要对Promise的返回值约束结构类型，这里记录下几种方式:
:::

1. 定义获取数据的方法的时候处理
```typescript
import request from '封装的axios'
const getUserInfo = (id:string):Promise<{name:string;age:number}> =>{
  return request({
    url:'api/getInfo/'+id,
    methods:'get',
  })
}
```
2. 调用方法时处理
```ts
import request from '封装的axios'
const getUserInfo = (id:string) =>{
  return request({
    url:'api/getInfo/'+id,
    methods:'get',
  })
}

interface Info {
  name:string;
  age:number
}

getUserInfo(1)
  .then((res:Info)=>{})
  .catch(()=>{})
```

3.自定义返回Promise的数据结构
```ts
// 方法1 
const promise = new Promise<number>((reslove,reject) => {
  reslove(1)
})

// 方法2
const promise = new Promise((reslove: (value:number) => void,reject) => {
  reslove(1)
})
```