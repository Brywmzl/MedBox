---
title: 命令索引
icon: fa-solid fa-book
index: false
article: false
---

# MedBox 命令文档骨架

这个页面先作为总入口，你后续只需要继续往各分类目录里补 `.md` 文件即可。

## 使用方式

- 每个命令建议一个单独的 `.md` 文件
- 文件名建议直接使用命令名，例如 `B_AddLinearDimension.md`
- 写好后会自动成为静态页面
- 左侧侧边栏会按目录结构自动生成

## 推荐的单个命令文档模板

```md
---
title: B_CommandName
icon: fa-solid fa-screwdriver-wrench
article: true
---

# B_CommandName

## 功能说明

一句话说明这个命令是做什么的。

## 使用场景

- 场景 1
- 场景 2

## 输入

- 输入对象
- 输入条件

## 输出

- 输出结果

## 操作步骤

1. 第一步
2. 第二步
3. 第三步

## 注意事项

- 注意点 1
- 注意点 2
```

## 分类总览

### Dimension

- [Dimension 分类入口](./Dimension/)
- 适合放置标注、引线、尺寸调整相关命令

### Plane

- [Plane 分类入口](./Plane/)
- 适合放置构造平面、切割、相交、修剪相关命令

### Analysis

- [Analysis 分类入口](./Analysis/)
- 适合放置面积、长度、体积、质量与统计分析命令

### Array

- [Array 分类入口](./Array/)
- 适合放置阵列、复制与排布命令

### Block

- [Block 分类入口](./Block/)
- 适合放置块对齐、替换、复制等命令

### Bounding

- [Bounding 分类入口](./Bounding/)
- 适合放置包围盒、边界、轮廓相关命令

### Trim

- [Trim 分类入口](./Trim/)
- 适合放置碰撞裁切、半径修剪、镜像修剪等命令

### Connect

- [Connect 分类入口](./Connect/)
- 适合放置连线、连点、投影连接类命令

### Convert

- [Convert 分类入口](./Convert/)
- 适合放置格式转换、注释转换、网格与曲线互转命令

### Curve

- [Curve 分类入口](./Curve/)
- 适合放置曲线拟合、延伸、重建、转折线等命令

### Layer

- [Layer 分类入口](./Layer/)
- 适合放置图层导入导出、筛选、重命名与显示控制命令

### Draw

- [Draw 分类入口](./Draw/)
- 适合放置绘制边界、网格、表格、多重曲面等命令

### Mesh

- [Mesh 分类入口](./Mesh/)
- 适合放置网格生成、偏移、结构、法线与网格转实体命令

### Surface

- [Surface 分类入口](./Surface/)
- 适合放置曲面整合、放平、重建、展开类命令

### Tube

- [Tube 分类入口](./Tube/)
- 适合放置各类管件、线性型材、封口、分割与修剪命令

### Group

- [Group 分类入口](./Group/)
- 适合放置群组、重组、按区域或磁吸分组命令

### Selection

- [Selection 分类入口](./Selection/)
- 适合放置按方向、边、面、顶点、长度与相似性选择命令

### Object

- [Object 分类入口](./Object/)
- 适合放置对象属性、颜色、过滤、命名、共享与下落命令

### Placement

- [Placement 分类入口](./Placement/)
- 适合放置摆放、投影、平面对平面与基于面的定位命令

### Transform

- [Transform 分类入口](./Transform/)
- 适合放置旋转、缩放、滑动、拉长、镜像与变换整理命令

### Point

- [Point 分类入口](./Point/)
- 适合放置点提取、导入、定位、捕捉与点生成命令

### Text

- [Text 分类入口](./Text/)
- 适合放置文字查找、替换、偏移、富文本与用户字符串处理命令

### Layout

- [Layout 分类入口](./Layout/)
- 适合放置表格、排版、编号、序列和布局命令

### Utility

- [Utility 分类入口](./Utility/)
- 适合放置菜单、快捷键、主题色、导入导出与系统工具命令

### Other

- [Other 分类入口](./Other/)
- 适合放置暂时不方便归类的命令
