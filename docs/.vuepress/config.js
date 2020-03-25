module.exports = {
  // base: '/vuepress_note/',
  title: 'vuepress_note',
  description: 'Vuepress blog demo',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/weizhanzhan/vuepress_note',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '记录',
        link: '/note/'
      },
      {
        text: 'Languages',
        items: [{
            text: 'Chinese',
            link: '/language/chinese'
          },
          {
            text: 'English',
            link: '/language/english'
          }
        ]
      }
    ],
    // sidebarDepth: 2,
    // sidebar: 'auto', 
    sidebar: {
      // /bar/ 一个侧边栏，里面的三个页面共用一个侧边栏
      '/note/': [{
        title: 'vue',
        // path:'vue',
        // collapsable: false,//折叠菜单
        children: [
          'vue/router', 'vue/vuex'
        ],
      },{
        title:'react',
        children:[
          'react/base'
        ]
      }],
    },
  },
  plugins: ['@vuepress/nprogress']
}