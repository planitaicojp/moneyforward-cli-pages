import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'Money Forward CLI',
  base: '/moneyforward-cli-pages/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/moneyforward-cli-pages/favicon.ico' }],
  ],

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/planitaicojp/moneyforward-cli-pages' },
    ],
    search: {
      provider: 'local',
    },
  },
})
