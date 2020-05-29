# MVVM

::: warning 原理概述：
数据劫持 Object.defineProperty setter getter 改变发消息给订阅者，触发相应的监听回调
:::

- 实现指令解析器
- 实现数据监听器Observer
- 实现wathcer去更新视图
- 实现一个proxy