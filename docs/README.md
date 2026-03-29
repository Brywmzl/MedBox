---
home: true
title: MedBox
heroFullScreen: true
heroText: MedBox
tagline: MedBox is a Rhino utility plugin and GH component.
heroImage: /media/svgs/logo.svg
heroImageDark: /media/svgs/logo-dark.svg
heroImageStyle:
  width: 164px
actions:
  - text: 立即查看指南
    link: ./cmds/
    type: primary

  - text: GitHub Releases
    link: https://github.com/Brywmzl/MedBox/releases

highlights:

  - header: 为什么用 MedBox
    description: 这次先把站点骨架搭好，你后续只需要持续补充各命令的 Markdown 页面
    image: /assets/image/box.svg
    features:

      - title: Markdown 驱动
        icon: fa-solid fa-file-lines
        details: 首页、分类页、命令页都可以直接用 Markdown 编写，适合长期维护与持续补充
        link: /cmds/

      - title: 先搭骨架
        icon: fa-solid fa-sitemap
        details: 我先把分类、入口页、导航和基础视觉搭好，你再逐步把每个命令的文档补进去
        link: /cmds/

      - title: 一键操作
        icon: fa-solid fa-wand-magic-sparkles
        details: 所有命令按功能分组组织，后续查找与扩展都会比现在清晰很多
        link: /cmds/

      - title: 面向生产
        icon: fa-solid fa-compass-drafting
        details: 围绕建模、整理、标注、导入导出等真实场景持续扩展
        link: /cmds/

      - title: 学习成本低
        icon: fa-solid fa-bolt
        details: 按功能分组浏览，找到对应能力后即可直接进入说明页
        link: /cmds/

  - header: Markdown 如何生成页面
    description: 你后续补充文档时，只要专注写 `.md` 文件，站点会自动渲染成静态页面
    image: /assets/image/markdown.svg
    features:

      - title: 首页即 README
        icon: fa-solid fa-house
        details: docs/README.md 决定首页展示结构，适合后续继续迭代站点介绍和视觉内容
        link: /

      - title: 文档即页面
        icon: fa-solid fa-book-open
        details: docs/cmds 下每个命令文件都会自动生成独立页面，非常适合 github.io 文档站
        link: /cmds/

      - title: 分类即导航
        icon: fa-solid fa-folder-tree
        details: 先按分类目录建立结构，侧边栏会自动跟随目录生成，维护成本更低
        link: /cmds/

  - header: 现在的基础结构
    description: 已经按你的命令清单搭出可持续扩展的分类框架，后面只需往里面补内容
    image: /assets/image/features.svg
    features:

      - title: Dimension
        icon: fa-solid fa-ruler-combined
        details: 标注相关命令单独成组，适合优先补完最常用文档
        link: /cmds/

      - title: Tube
        icon: fa-solid fa-grip-lines
        details: 管件、线性构件、截面与修整命令已独立整理
        link: /cmds/

      - title: Surface
        icon: fa-solid fa-clone
        details: 曲面处理、展开、重建和整合类命令已单独分区
        link: /cmds/

      - title: Selection
        icon: fa-solid fa-arrow-pointer
        details: 选择、筛选、跳选和按规则选取命令已整理成独立入口
        link: /cmds/

      - title: Placement
        icon: fa-solid fa-crosshairs
        details: 摆放、投影、定位和滑移类命令已经预留扩展空间
        link: /cmds/

      - title: Utility
        icon: fa-solid fa-screwdriver-wrench
        details: 启动、导入导出、主题、快捷操作等底层工具集中管理
        link: /cmds/

copyright: false
footer: Copyright © 2022-2026 Brywmzl
---
