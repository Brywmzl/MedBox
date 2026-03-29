---
title: 命令
index: false
article: false
---

# 命令

`docs/cmds/` 目录现在只放命令 `.md` 文件，不再按分类拆文件夹。

左侧命令列表的搜索和标签筛选，统一读取 `docs/.vuepress/command-index.json` 里的 `tags` 字段；一个命令可以挂多个标签，不再受单一分类限制。

## 维护规则

- `docs/cmds/` 根目录只保留命令 `.md` 和当前这个 `README.md`
- 命令标签统一写在每个命令文档的 frontmatter `tag:` 中
- 左侧筛选标签统一维护在 `docs/.vuepress/command-index.json` 的 `tags`
- 命令相关图片统一放在 `docs/.vuepress/public/media/`

## 新增命令模板

```md
---
title: B_CommandName
tag:
  - 标签 1
  - 标签 2
---

# B_CommandName

## 功能说明

一句话说明这个命令做什么。

## 使用场景

- 场景 1
- 场景 2

## 输入

- 输入物件
- 输入条件

## 输出

- 输出结果
```

## 标签建议

- 点
- 曲线
- 曲面
- 标注
- 选择
- 变换
- 物件
- 图层
- 文字
- 分组
- 工具
- 统计
- 分析
