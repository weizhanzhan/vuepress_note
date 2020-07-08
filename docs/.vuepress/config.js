module.exports = {
  base: '/zhanwei/',
  title: 'manda',
  description: 'weizhanzhan | zhanwei | manda |博客 |Live a good life meet slowly',//好好生活，慢慢相遇
  head: [
    ['link', { rel: 'icon',  href: '/manda.jpg'  }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: 'zhanwei,weizhanzhan,vuepress,blog,manda,博客,笔记,魏展，魏展展' }]

  ],
  theme: 'antdocs',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/weizhanzhan/vuepress_note',
    // 自定义仓库链接文字。
    repoLabel: 'github',
    lastUpdated: '上次更新',
    logo: '/manda.jpg',
    nav: require('./config/nav'),
    // sidebarDepth: 2,
    // sidebar: 'auto', /zhanwei/ico.png
    sidebar: require('./config/sidebar'),
    plugins: [
      [ '@vuepress/nprogress', true ],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }
      ],
      ['@vuepress/last-updated',true]
    ]
  }
}