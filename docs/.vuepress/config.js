module.exports = {
    base: '/vuepress_note/',
    title: 'vuepress_note',
    description: 'Vuepress blog demo',
    
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/weizhanzhan/vuepress_note',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                  { text: 'Chinese', link: '/language/chinese' },
                  { text: 'English', link: '/language/english' }
                ]
            },
            { text: 'FirstBlog', link: '/vue/vue_element_style.md' }
        ],
        // sidebarDepth: 2,
        // sidebar: [
        //     {
        //         title: 'Vue',
        //         // collapsable: false,//折叠菜单
        //         children: [
        //             '/blogs/vue/'
        //         ],     
        //     },
        //     {
        //         title: 'React',
        //         children: [
        //             '/blogs/react/'
        //         ]
        //     }           
        // ]
        sidebar: {
            // /bar/ 一个侧边栏，里面的三个页面共用一个侧边栏
            '/bar/': [
              '',           // ./bar/README.md文件，对应页面上/bar/路径
              'one',        // ./bar/one.md文件，对应页面上/bar/one.html
              'two',        // ./bar/two.md文件，对应页面上/bar/two.html
            ],
            '/page-a/': [
              '',
              'a',
              'b',
            ],
            // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
            '/': [
              '',
              'home1',
              'home2',
              'home3',
            ],
          },
    },
  
  }