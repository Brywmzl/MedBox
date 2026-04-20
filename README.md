# MedBox

MedBox Rhino 实用插件 & GH 组件的在线文档站点。

**在线地址**：[https://brywmzl.github.io/MedBox/](https://brywmzl.github.io/MedBox/)

---

## 快速开始

```bash
# 安装依赖
pnpm install

# 本地开发（热更新）
pnpm docs:dev

# 清除缓存开发
pnpm docs:clean-dev

# 构建生产版本
pnpm docs:build
```

---

## 添加命令图标

将 SVG 图标放入以下目录，命名规则为 `med_<命令名>.svg`：

```
docs/.vuepress/public/media/svgs/med_B_YourCommand.svg
```

> 图标会同时用于侧栏列表和页面标题区域，建议尺寸保持一致（正方形）。

---

## 添加命令文档

### 1. 创建 Markdown 文件

在 `docs/guide/` 下新建文件，文件名与命令名一致：

```
docs/guide/B_YourCommand.md
```

### 2. 编写 Frontmatter

文件头部必须包含以下字段：

```yaml
---
icon: /media/svgs/med_B_YourCommand.svg   # 图标路径
cmd: B_YourCommand                         # 命令名（用于标题副标题）
title: 你的命令中文名                        # 中文标题
shortTitle: B_YourCommand                  # 面包屑导航显示名
tag:                                       # 分类标签（用于侧栏筛选）
  - 标注
  - 曲线
---
```

**可用标签**：`点`、`曲线`、`曲面`、`标注`、`选择`、`变换`、`物件`、`图层`、`文字`、`分组`、`工具`、`统计`、`分析`

### 3. 编写正文

推荐使用以下章节结构：

```markdown
# B_YourCommand

## 功能说明

简要描述命令的功能。

## 选项说明

- 输入：...
- 输出：...
- 可调项：...
- 选项记忆：...

## 操作步骤

1. ...
2. ...

## 注意事项

...
```

### 4. 注册到命令索引

编辑 `docs/.vuepress/command-index.json`，添加新条目：

```json
{
  "title": "B_YourCommand",
  "label": "你的命令中文名",
  "link": "/guide/B_YourCommand",
  "icon": "/media/svgs/med_B_YourCommand.svg",
  "tags": ["标注", "曲线"]
}
```

> 该文件决定了侧栏列表和命令筛选的数据来源。

---

## 发布到 GitHub Pages

### 自动发布（推荐）

项目已配置 GitHub Actions（`.github/workflows/gh_pages.yml`），**推送到 `main` 分支即自动构建并部署**：

```bash
git add .
git commit -m "docs: add B_YourCommand"
git push origin main
```

推送后约 2 分钟，更新会自动生效。

### 手动发布

如需手动部署，可执行项目根目录的 `deploy.sh`：

```bash
pnpm docs:build
bash deploy.sh
```

---

## 项目结构

```
MedBox/
├── docs/
│   ├── guide/                          # 命令文档 (.md)
│   └── .vuepress/
│       ├── config.ts                   # 站点配置
│       ├── theme.ts                    # 主题配置
│       ├── sidebar.ts                  # 侧栏配置
│       ├── client.ts                   # 客户端组件注册
│       ├── command-index.json          # 命令索引（侧栏数据源）
│       ├── styles/index.scss           # 自定义样式
│       ├── public/media/svgs/          # 命令图标 (SVG)
│       └── theme/components/           # 自定义组件
├── .github/workflows/gh_pages.yml      # 自动部署工作流
├── package.json
└── pnpm-lock.yaml
```

## License

MIT © Brywmzl