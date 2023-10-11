import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    colorMode: 'dark', // dark, light
    // 自动设置分类
    autoSetBlogCategories: true,
    catalogTitle: 'MedBox', // 自定义目录标题
    primaryColor: '#ff00aa',
    autoSetSeries: true,
    series: {
        '/guide/': [ 'README2' ]
    }
  })
})