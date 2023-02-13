module.exports = {
  title: '大前端漫谈',
  description: '公众号: 大前端漫谈, 欢迎大家关注， 一个聚焦于web、混合开发、架构的公众号',
  themeConfig: {
    // nav: [
    //   { text: '首页', link: '/' },
    //   { 
    //       text: '大前端漫谈 博客', 
    //       items: [
    //           { text: 'Github', link: 'https://github.com/easyhappy/travel-coding' },
    //           { text: '公众号', link: 'https://mp.weixin.qq.com/s/Npkk0oHEszZrUP2yRiTaSA' }
    //       ]
    //   }
    // ],
    sidebar: [
      {
        title: 'css小册',
        path: '/',
        collapsable: true, // 不折叠
        children: [
          { title: "居中", path: "/css/居中", },
          { title: "css", path: "/css/brief", },
        ]
      },
      {
        title: '关于我',
        path: '/',
        collapsable: false, // 不折叠
        children: [
            { title: "公众号", path: "/about/brief"},
        ]
      }
    ]
  },
}

