import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "产品设计室-前端开发规范",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '概览', link: 'files/overview' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '概览', link: 'files/overview' },
          { text: '设计风格', link: 'files/design-style' },
          { text: '交互规范', link: 'files/interaction' },
          { text: '公共函数', link: 'files/common-function' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/ui-standards/'
})
