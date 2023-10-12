---
home: true

modules: # 指定首页展示模块
  - CustomBanner
  # - Banner
  # - BannerBrand
  # - Blog
  - MdContent
  - Footer

customBanner:
  title: MedBox
  description: Rhino Utility Plugin & GH Component
  tagline: 持续领先， 遥遥领先同行50%以上
  bgImage: '/bg.svg'
  buttons:
    - { text: Guide, link: '/MedBox/guide/', type: 'plain'} # type: 按钮风格，默认带背景色，如果不需要可以设置为 'plain'
    - { text: Releases, link: 'https://github.com/Brywmzl/MedBox/releases'}

banner: # banner 模块的配置
  heroText: MedBox
  tagline: Rhino Utility Plugin & Grasshopper Component
  heroImage: /icon.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  # bgImage: /img/icon.png
  # bgImageStyle:
    # height: 450px

bannerBrand: # bannerBrand 模块的配置
  title: MedBox
  description: Rhino Utility Plugin & GH Component
  tagline: 持续领先， 遥遥领先同行50%以上
  bgImage: '/bg.svg'
  bgImageStyle:
    height: 1000px
  buttons:
    - { text: Guide, link: '/guide/', type: 'plain'} # type: 按钮风格，默认带背景色，如果不需要可以设置为 'plain'
    - { text: Releases, link: 'https://github.com/Brywmzl/MedBox/releases'}

footer: # 底部模块的配置
  # record: MedBox
  # recordLink: MedBox
  # cyberSecurityRecord: MedBox
  # cyberSecurityLink: MedBox
  startYear: 2022

---


