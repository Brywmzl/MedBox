import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'

export default defineUserConfig({
  base: "/MedBox/",
  editLinks: false,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'MedBox',
      description: 'Rhino Utility Plugin & Grasshopper Component',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'MedBox',
    //   description: 'Rhino Utility Plugin & Grasshopper Component',
    // },
  },
  theme: recoTheme(themeConfig),
  // debug: true,
})