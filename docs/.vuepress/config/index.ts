import * as zhConfig from './zh'
// import * as enConfig from './en'

export const themeConfig = {
  colorMode: 'light', // dark, light
  autoSetBlogCategories: true, // 自动设置分类
  catalogTitle: 'MedBox', // 自定义目录标题
  primaryColor: '#ff00aa',
  autoSetSeries: true,
  locales: {
    '/': {
      selectLanguageText: '选择语言',
      selectLanguageName: '简体中文',
      lastUpdatedText: 'Last Updated',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      // commentConfig: zhConfig.commentConfig,
      // bulletin: zhConfig.bulletin,
    },
    // '/en/': {
    //   selectLanguageText: 'Languages',
    //   selectLanguageName: 'English',
    //   navbar: enConfig.navbar,
    //   series: enConfig.series,
    //   commentConfig: enConfig.commentConfig,
    //   bulletin: enConfig.bulletin,
    // },
  },
  // logo: '/logo.png',
  author: 'Brywmzl',
  docsRepo: 'https://github.com/Brywmzl/MedBox',
  docsBranch: 'main',
  docsDir: '/docs',
  vuePreviewsDir: './docs/.vuepress/vue-previews',
  componentsDir: './docs/.vuepress/components',
  editLink: false,
  editLinkText: '帮助我们改善此页面！',
}