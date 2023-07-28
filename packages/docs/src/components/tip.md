# Tip 提示

用于页面中展示重要的提示信息。

## 常规用法

没有任何参数

<ivy-tip>默认消息提示的文案</ivy-tip>


```html
<ivy-tip>默认消息提示的文案</ivy-tip>
```

## Header

通过 设置 `header` 属性来设置标题

<ivy-tip header="提示">主要消息提示的文案</ivy-tip>

```html
<ivy-tip title="提示">主要消息提示的文案</ivy-tip>
```


## Type

通过 设置 `type` 属性来改变颜色

<ivy-tip type="info">主要消息提示的文案</ivy-tip>
<ivy-tip type="success" class="margin-top">成功消息提示的文案</ivy-tip>
<ivy-tip type="warning" class="margin-top">警告消息提示的文案</ivy-tip>
<ivy-tip type="danger" class="margin-top">错误消息提示的文案</ivy-tip>

```html
<ivy-tip type="info">主要消息提示的文案</ivy-tip>
<ivy-tip type="success">成功消息提示的文案</ivy-tip>
<ivy-tip type="warning">警告消息提示的文案</ivy-tip>
<ivy-tip type="danger">错误消息提示的文案</ivy-tip>
```

## Line

通过 设置 `line` 属性在左侧添加一条竖线

<ivy-tip line>默认消息提示的文案</ivy-tip>
<ivy-tip line type="info" class="margin-top">主要消息提示的文案</ivy-tip>
<ivy-tip line type="success" class="margin-top">成功消息提示的文案</ivy-tip>
<ivy-tip line type="warning" class="margin-top">警告消息提示的文案</ivy-tip>
<ivy-tip line type="danger" class="margin-top">错误消息提示的文案</ivy-tip>

```html
<ivy-tip line>默认消息提示的文案</ivy-tip>
<ivy-tip line type="info">主要消息提示的文案</ivy-tip>
<ivy-tip line type="success">成功消息提示的文案</ivy-tip>
<ivy-tip line type="warning">警告消息提示的文案</ivy-tip>
<ivy-tip line type="danger">错误消息提示的文案</ivy-tip>
```

## 支持的`CSS`变量

可以通过更改一下属性来自定义 `tip` 组件的样式

```css
--ivy-tip-color: var(--ivy-color-priomary, #409eff);
--ivy-tip-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
--ivy-tip-line-color: var(--ivy-color-primary, #409eff);
--ivy-tip-font-size: 13px;
--ivy-tip-title-font-size: 14px;
--ivy-tip-line-width: 4px;
--ivy-tip-border-radius: var(--ivy-border-radius, 4px);
```

## Props

| 参数      | 说明 | 类型 | 可选值                         | 默认值 |
|---------| --- | --- |-----------------------------| --- |
| header  | 标题 | String | -                           | - |
| content | 标题 | String | -                           | - |
| type    | 类型 | String | info/success/warning/danger | - |
| line    | 是否显示左侧竖线 | Boolean | -                           | false |
    


## Slots

| name    | 说明                            |
|---------|-------------------------------|
| header  | 标题插槽，用于放置标题内容                 |
| default | 默认插槽，用于放置内容，会 content prop 内容 |