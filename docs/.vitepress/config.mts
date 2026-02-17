import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SerfCraft",
  description: "A Minecraft Civilization Server",
  base: '/GC-Docs/',
  lastUpdated: true,

  markdown: {
    config: (md) => {
      md.use(MarkdownItFootnote);
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('packages/')) {
          return `https://github.com/wes-online/GC-Docs/blob/main/docs/${filePath}`
        } else {
          return `https://github.com/wes-online/GC-Docs/blob/main/docs/${filePath}`
        }
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Before You Connect', link: '/before-you-connect' },
          { text: 'Guides', collapsed: true, link: '/guides', items: [
            { text: 'Plugin Help', link: '/plugins' }
          ] }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
