---
home: true
title: MedBox
heroFullScreen: true
layout: BlogHome
heroText: MedBox
tagline: 先搭好结构，再用 Markdown 持续补全文档内容
heroImage: /logo.svg
heroImageStyle:
  width: 220px
bgImage: /assets/background/liquid-cheese-light.svg
bgImageDark: /assets/background/liquid-cheese-dark.svg
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

  - text: 命令索引
    link: ./guide/

  - text: 分类目录
    link: ./guide/#分类总览

highlights:

  - header: 为什么用 MedBox
    description: 这次先把站点骨架搭好，你后续只需要持续补充各命令的 Markdown 页面
    image: /assets/image/box.svg
    features:

      - title: Markdown 驱动
        icon: fa-solid fa-file-lines
        details: 首页、分类页、命令页都可以直接用 Markdown 编写，适合长期维护与持续补充
        link: /guide/

      - title: 先搭骨架
        icon: fa-solid fa-sitemap
        details: 我先把分类、入口页、导航和基础视觉搭好，你再逐步把每个命令的文档补进去
        link: /guide/

      - title: 一键操作
        icon: fa-solid fa-wand-magic-sparkles
        details: 所有命令按功能分组组织，后续查找与扩展都会比现在清晰很多
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
    description: 你后续补充文档时，只要专注写 `.md` 文件，站点会自动渲染成静态页面
    image: /assets/image/markdown.svg
    features:

      - title: 首页即 README
        icon: fa-solid fa-house
        details: docs/README.md 决定首页展示结构，适合后续继续迭代站点介绍和视觉内容
        link: /

      - title: 文档即页面
        icon: fa-solid fa-book-open
        details: docs/guide 下每个命令文件都会自动生成独立页面，非常适合 github.io 文档站
        link: /guide/

      - title: 分类即导航
        icon: fa-solid fa-folder-tree
        details: 先按分类目录建立结构，侧边栏会自动跟随目录生成，维护成本更低
        link: /guide/

  - header: 现在的基础结构
    description: 已经按你的命令清单搭出可持续扩展的分类框架，后面只需往里面补内容
    image: /assets/image/features.svg
    features:

      - title: Dimension
        icon: fa-solid fa-ruler-combined
        details: 标注相关命令单独成组，适合优先补完最常用文档
        link: /guide/Dimension
      
      - title: Tube
        icon: fa-solid fa-grip-lines
        details: 管件、线性构件、截面与修整命令已独立整理
        link: /guide/Tube
      
      - title: Surface
        icon: fa-solid fa-clone
        details: 曲面处理、展开、重建和整合类命令已单独分区
        link: /guide/Surface

      - title: Selection
        icon: fa-solid fa-arrow-pointer
        details: 选择、筛选、跳选和按规则选取命令已整理成独立入口
        link: /guide/Selection

      - title: Placement
        icon: fa-solid fa-crosshairs
        details: 摆放、投影、定位和滑移类命令已经预留扩展空间
        link: /guide/Placement

      - title: Utility
        icon: fa-solid fa-screwdriver-wrench
        details: 启动、导入导出、主题、快捷操作等底层工具集中管理
        link: /guide/Utility

  - header: 你接下来怎么补
    description: 站点骨架已经适合长期填充，后面只要围绕每个命令持续加文档就行
    image: /assets/image/medbox-plus.svg
    features:

      - title: 先补高频命令
        icon: fa-solid fa-star
        details: 建议先补最常用的 20 到 30 个命令，这样站点会最快形成可用内容
        link: /guide/Dimension

      - title: 一命令一页面
        icon: fa-solid fa-file-circle-plus
        details: 每个命令单独一个 .md 文件，命名直接用命令名，后续最好维护
        link: /guide/

      - title: 先写四段内容
        icon: fa-solid fa-list-check
        details: 功能说明、输入输出、操作步骤、注意事项，这样最容易形成稳定模板
        link: /guide/

      - title: 边写边发布
        icon: fa-solid fa-rocket
        details: 结构先稳定下来后，后续每次新增 Markdown 都能直接进入静态站内容体系
        link: /guide/

copyright: false
footer: Copyright © 2023 Brywmzl
---
