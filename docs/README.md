---
home: true
title: MedBox
heroFullScreen: true
layout: BlogHome
heroText: MedBox
tagline: 基于 Markdown 渲染的静态站点，用更轻的方式展示 Rhino 工具能力
bgImage: /assets/background/endless-constellation-light.svg
bgImageDark: /assets/background/endless-constellation-dark.svg
bgImageStyle:
  background-attachment: fixed
  background-position: center
  background-size: cover
actions:
  - text: 立即查看指南
    link: ./guide/
    type: primary

  - text: GitHub Releases
    link: https://github.com/Brywmzl/MedBox/releases

  - text: 源码仓库
    link: https://github.com/Brywmzl/MedBox

highlights:

  - header: 为什么用 MedBox
    description: 直接写 Markdown，就能生成结构清晰、可部署到 github.io 的静态页面
    image: /assets/image/features.svg
    features:

      - title: Markdown 驱动
        icon: fa-solid fa-file-lines
        details: 首页、文档页、分类页都由 Markdown 内容渲染生成，改文案不用碰复杂前端代码
        link: /guide/

      - title: 一键操作
        icon: fa-solid fa-wand-magic-sparkles
        details: 把点选、筛选、命名、标注这些高频动作压缩成更短路径
        link: /guide/

      - title: 面向生产
        icon: fa-solid fa-compass-drafting
        details: 围绕建模、整理、标注、导入导出等真实场景持续扩展
        link: /guide/

      - title: 学习成本低
        icon: fa-solid fa-bolt
        details: 按功能分组浏览，找到对应能力后即可直接进入说明页
        link: /guide/

  - header: Markdown 如何生成页面
    description: 现在这个站点本身就是 Markdown 驱动，前台页面由 VuePress 自动渲染
    image: /assets/image/markdown.svg
    features:

      - title: 首页即 README
        icon: fa-solid fa-house
        details: docs/README.md 里的 Frontmatter 和内容，直接决定首页结构与展示
        link: /

      - title: 文档即页面
        icon: fa-solid fa-book-open
        details: docs/guide 下每个 .md 文件都会生成独立静态页面，天然适合 github.io
        link: /guide/

      - title: 主题负责样式
        icon: fa-solid fa-palette
        details: Markdown 管内容，主题和样式表负责视觉，所以后续继续改版也很方便
        link: /guide/

  - header: 核心能力
    description: 按 Rhino 实际工作内容组织，快速定位你需要的模块
    image: /assets/image/medbox-plus.svg
    features:

      - title: Point
        icon: fa-solid fa-circle-small
        details: 支持 90%+ 全站仪文件格式
        link: /guide/Point
      
      - title: Dimension
        icon: fa-solid fa-arrows-left-right-to-line
        details: 标注仅需一键即可完成
        link: /guide/Dimension
      
      - title: Text
        icon: fa-solid fa-a
        details: 面对大量文本也能轻松应对
        link: /guide/Text

      - title: Group
        icon: fa-solid fa-objects-column
        details: 不再对零散的物件束手无策
        link: /guide/Group

      - title: Layer
        icon: fa-solid fa-layer-group
        details: 可帮你完成繁琐的图层操作
        link: /guide/Layer

      - title: Object
        icon: fa-solid fa-shapes
        details: 对物件了如指掌操作自如
        link: /guide/Object

      - title: Selection
        icon: fa-solid fa-check
        details: 在茫茫物件之中快速准确拾取物件
        link: /guide/Selection

      - title: Multiple
        icon: fa-solid fa-list
        details: 物件再多也能井然有序
        link: /guide/Multiple

      - title: Transform
        icon: fa-solid fa-vector-square
        details: 在它眼里就没有参考线这一说
        link: /guide/Transform

      - title: Utility
        icon: fa-solid fa-hammer
        details: 这里有你意想不到的惊喜
        link: /guide/Utility

      - title: Macro
        icon: fa-solid fa-keyboard
        details: 提升效率少不了快捷操作
        link: /guide/Utility

      - title: AirShared
        icon: fa-solid fa-truck-fast
        details: 连接内部服务器可快速分享文档物件
        link: /guide

  - header: 典型使用场景
    description: 从数据进场到图纸整理，覆盖常见设计与加工辅助流程
    image: /assets/image/layout.svg
    features:

      - title: 点位导入
        icon: fa-solid fa-location-dot
        details: 导入测量点、处理坐标、快速生成几何参考
        link: /guide/Point

      - title: 批量标注
        icon: fa-solid fa-ruler-combined
        details: 处理长度、角度、圆弧与定位标注，减少重复点击
        link: /guide/Dimension

      - title: 文本治理
        icon: fa-solid fa-font
        details: 查找、替换、批量整理文字与对象名称，降低出图错误
        link: /guide/Text

      - title: 图层与对象整理
        icon: fa-solid fa-layer-group
        details: 快速筛选、分组、归档与统一属性，保持模型结构清晰
        link: /guide/Layer

      - title: 形体调整
        icon: fa-solid fa-vector-square
        details: 投影、拉直、缩放、旋转等变换操作更稳定更高效
        link: /guide/Transform

      - title: 杂项增强
        icon: fa-solid fa-screwdriver-wrench
        details: 通过零散但关键的小工具，补齐日常工作缝隙
        link: /guide/Utility

copyright: false
footer: Copyright © 2023 Brywmzl
---
