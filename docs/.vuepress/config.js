module.exports = {
  base: "/vuepress-starter/",
  title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    logo: '/assets/img/logo.jpg',
    sidebar: 'auto',
	nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://www.baidu.com/' },
    ],
   //多个侧边栏方式
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
    
      ]
    }
    // 侧边栏方式
    // sidebar: [
    //   '',
    //   'about',
    //   'contact',
    //   {
    //     title: 'hello foo',   // 必要的
    //     path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/foo/one',
    //       '/foo/two'
    //     ]
    //   },
    //   {
    //     title: 'hello bar',   // 必要的
    //     path: '/bar/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/bar/three',
    //       '/bar/four'
    //     ]
    //   },
    // ]
  },

}