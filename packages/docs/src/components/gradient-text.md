# Gradient Text 渐变文字

这个东西看起来没啥用，如果你不需要

## 基础用法

它有不同的类型，使用属性 `type` 定义， 默认类型是 `primary`

<ivy-gradient-text type="primary">Primary</ivy-gradient-text><br/>
<ivy-gradient-text type="success">Success</ivy-gradient-text><br/>
<ivy-gradient-text type="warning">Warning</ivy-gradient-text><br/>
<ivy-gradient-text type="error">Error</ivy-gradient-text><br/>
<ivy-gradient-text type="info">Info</ivy-gradient-text>

## 设置大小

使用属性 `size` 定义大小，其实使用css直接定义也挺方便

<ivy-gradient-text size="12px">设置文字大小</ivy-gradient-text><br/>
<ivy-gradient-text size="14px">设置文字大小</ivy-gradient-text><br/>
<ivy-gradient-text size="16px">设置文字大小</ivy-gradient-text><br/>
<ivy-gradient-text size="18px">设置文字大小</ivy-gradient-text><br/>
<ivy-gradient-text size="20px">设置文字大小</ivy-gradient-text>

## 自定义

<ivy-gradient-text gradient="90deg, red 0%, blue 100%">定制渐变颜色</ivy-gradient-text><br/>

<ivy-gradient-text gradient="90deg, green 0%, blue 100%">定制渐变颜色</ivy-gradient-text><br/>

<ivy-gradient-text gradient="90deg, red 0%, green 50%, blue 100%">定制渐变颜色</ivy-gradient-text>

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Props

| 属性     | 说明           | 类型    | 可选值                               | 默认值    |
| -------- | -------------- | ------- | ------------------------------------ | --------- |
| type     | 渐变文字的类型 | String  | `primary/success/warning/error/info` | `primary` |
| size     | 文字大小       | Boolean | -                                    | false     |
| gradient | 文字渐变色参数 | Boolean | -                                    | false     |

### Slots

| slot 名称 | 描述           |
| --------- | -------------- |
| default   | 渐变文字的内容 |
