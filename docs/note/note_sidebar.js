module.exports =  [
  '/note/',
  {
    title: 'vuepress', children: [
      { title: '快速搭建', path: 'vuepress/step' }
    ]
  },
  {
    title:'学习计划',children:[
      { title:'2020',path:'plan/2020'}
    ]
  },
  {
    title:'javascript',children:[
      { title:'log',path:'javascript/skill'},
      { title:'算法',path:'javascript/algorithm'},
      { title:'设计模式',path:'javascript/design'},
    ]
  },
  { title:'HTML' , path:'HTML'},
  { title:'Css' , path:'Css'},
  {
    title:'typescript',children:[
      { title:'笔记',path:'typescript/work'}
    ]
  },
  {
    title: 'vue', children: [
      { title:'自定义组件的v-model',path:'vue/v-model'},
      { title:'ElementUI',path:'vue/elementui'},
      { title:'基础原理',path:'vue/base'},
      { title:'Directive',path:'vue/directive'},
      { title:'Vue配置',path:'vue/optimization'}
    ],
  },
  {
    title: 'react', children: [
      'react/base'
    ]
  },
  {
    title:'极光推送', children:[
      { title:'APICloud',path:'jpush/apicloud'}
    ]
  },
  {
    title:'前端微服务', children:[
      { title:'Single-spa',path:'micro-fe/single-spa'}
    ]
  },
  {
    title: 'git', children:[
      { title:'基础',path:'git/base'},
      { title:'自动部署项目',path:'git/autoplay'}
    ]
  },
  { title:'Interview questions',path:'interview'},
  { title:'总结',path:'summary' },
]