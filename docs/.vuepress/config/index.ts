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
      lastUpdatedText: '最后更新时间',
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
  logo: '/img/icon.png',
  author: 'Brywmzl',
  docsRepo: 'https://github.com/Brywmzl/MedBox',
  docsBranch: 'main',
  docsDir: '/docs',
  componentsDir: './docs/.vuepress/components',
//   algolia: {
//     appId: '38R2J3MTQC',
//     apiKey: '583d3caf699630b08a9bc2d12d599701',
//     indexName: 'v2-vuepress-reco-recoluan',
//     // inputSelector: '### REPLACE ME ####',
//     // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
//     // debug: false // Set debug to true if you want to inspect the dropdown
//   },
}
