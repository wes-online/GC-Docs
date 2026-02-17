import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
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
          return `https://github.com/wes-online/GC-Docs/tree/main/docs${filePath}`
        } else {
          return `https://github.com/wes-online/GC-Docs/tree/main/docs${filePath}`
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
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
