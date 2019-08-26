module.exports = {
  title: 'Zerker',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A flutter canvas graphics animation library.',
    }
  },
  base: "/zerkerdocs/",
  dest: "./dist",
  serviceWorker: {},
  themeConfig: {
    repo: 'flutterkit/zerker',
    lastUpdated: 'Last Updated',
    editLinks: true,
    search: false,
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/node/' },
          { text: 'Installing', link: 'https://pub.dev/packages/tweener#-installing-tab-' },
          { text: 'Changelog', link: 'https://github.com/flutterkit/zerker' },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'tutorial',
                'animation',
                'others',
              ],
            },
            {
              title: 'QA',
              collapsable: false,
              children: [
                'qa'
              ],
            }
          ],
          '/api/': [
            {
              title: 'API',
              collapsable: false,
              children: [
                'node',
                'extras',
                'tween',
                'texture',
                'other'
              ],
            },
          ]
        },
      }
    },
  },
};
