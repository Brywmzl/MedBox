---
icon: /media/svgs/med_B_GroupByBound.svg
cmd: B_GroupByBound
title: 群组（区域）
tag:
  - 分组
---

# B_GroupByBound

## 功能说明

按边界区域把物件重新分组；当前页面对应实现源码为 B_GroupByRegion.py。

## 源码要点

- 输入：选择一个或多个物件
- 输出：需要时把结果自动编组
- 可调项：无明显命令行选项。
- 选项记忆：本次源码未见持久化选项。

## 操作步骤

1. 按提示准备输入：选择一个或多个物件。
2. 确认执行后，系统会需要时把结果自动编组。

## 注意事项

- 区域边界来自图层 `med_export::bound` 上的边界曲线。
