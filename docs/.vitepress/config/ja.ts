import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ja: LocaleSpecificConfig<DefaultTheme.Config> = {
  label: '日本語',
  lang: 'ja',
  description: 'Money Forward クラウドをコマンドラインから操作するCLIツール',

  themeConfig: {
    nav: [
      { text: 'ガイド', link: '/guide/getting-started' },
      { text: 'リファレンス', link: '/reference/auth' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: 'はじめに', link: '/guide/getting-started' },
            { text: '認証', link: '/guide/auth' },
            { text: '請求書', link: '/guide/invoice' },
            { text: '経費精算', link: '/guide/expense' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'コマンドリファレンス',
          items: [
            { text: 'auth', link: '/reference/auth' },
            { text: 'config', link: '/reference/config' },
            { text: 'invoice', link: '/reference/invoice' },
            { text: 'expense', link: '/reference/expense' },
          ],
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/planitaicojp/moneyforward-cli-pages/edit/main/docs/:path',
      text: 'このページを編集する',
    },

    lastUpdated: {
      text: '最終更新',
    },

    outline: {
      label: '目次',
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
  },
}
