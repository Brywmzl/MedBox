---
title: 曲线拉直
tag:
  - 曲线
  - 变换
---

# B_ToPolyline

## 功能说明

按容差把曲线转换或拉直为多段线。

## 源码要点

- 输入：选择曲线物件
- 输出：直接替换原始物件
- 可调项：简化、Distance Tolerance、Angle Tolerance Radians
- 选项记忆：会记住上一次设置。

## 操作步骤

1. 按提示准备输入：选择曲线物件。
2. 根据需要调整命令行选项：简化、Distance Tolerance、Angle Tolerance Radians。
3. 确认执行后，系统会直接替换原始物件。

## 注意事项

- 命令会记住上一次使用的选项。
- 结果会受到模型公差或命令容差设置影响。
