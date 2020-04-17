module.exports = {
  // base: '/vuepress_note/',
  title: 'zhanwei',
  description: '热爱技术，享受生活！',
  head: [
    ['link', { rel: 'icon',  href: '/ico.png'  }]
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
    // sidebar: 'auto', 
    sidebar: {
      '/note/': [
        {
          title: 'Vuepress', children: [
            { title: '快速搭建', path: 'vuepress/step' }
          ]
        },
        {
          title:'学习计划',children:[
            { title:'2020',path:'plan/2020'}
          ]
        },
        {
          title:'JavaScript',children:[
            { title:'收藏的小技巧',path:'javascript/skill'}
          ]
        },
        {
          title: 'Vue',
          children: [
            'vue/router', 'vue/vuex'
          ],
        },
        {
          title: 'React',
          children: [
            'react/base'
          ]
        },
        {
          title: 'Git',
          children:[
            { title:'基础',path:'git/base'}
          ]
        }
      ],
    },
  },
  plugins: ['@vuepress/nprogress']
}