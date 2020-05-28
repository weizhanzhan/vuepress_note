module.exports = {
  base: '/zhanwei/',
  title: 'manda',
  description: 'weizhanzhan | zhanwei | manda |博客 |Live a good life meet slowly',//好好生活，慢慢相遇
  head: [
    ['link', { rel: 'icon',  href: '/manda.jpg'  }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/weizhanzhan/vuepress_note',
    // 自定义仓库链接文字。
    repoLabel: 'github',
    nav: [
      { text: 'Home', link: '/'  },
      { text: '记录', link: '/note/'   },
      { text: 'Languages', items: [ { text: 'Chinese', link: '/language/chinese' },  { text: 'English',  link: '/language/english' } ] }
    ],
    // sidebarDepth: 2,
    // sidebar: 'auto', /zhanwei/ico.png
    sidebar: {
      '/note/': [
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
            { title:'笔记',path:'javascript/skill'},
            { title:'设计模式',path:'javascript/design'}
          ]
        },
        {
          title:'typescript',children:[
            { title:'笔记',path:'typescript/work'}
          ]
        },
        {
          title: 'vue', children: [
            { title:'自定义组件的v-model',path:'vue/v-model'},
            { title:'ElementUI',path:'vue/elementui'},
            'vue/router', 'vue/vuex'
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
          title: 'git', children:[
            { title:'基础',path:'git/base'},
            { title:'自动部署项目',path:'git/autoplay'}
          ]
        }
      ],
    },
  },
  plugins: {
    '@vuepress/nprogress':true,
    '@vuepress/pwa':{
      serviceWorker: true,
      updatePopup: true
    }
  }
}