# AspectRatio 固定比例容器

使用在需要保持容器比例的场景

## 基础用法

<ivy-aspect-ratio style="background-color: #efefef"></ivy-aspect-ratio>

```html
<ivy-aspect-ratio style="background-color: #efefef"></ivy-aspect-ratio>
```

## 设置比例

可使用 `ratio` 自定义宽高比例,默认值为 `1:1`。

<ivy-aspect-ratio style="background-color: #efefef" ratio="3:1"></ivy-aspect-ratio>

```html
<ivy-aspect-ratio
  style="background-color: #efefef"
  ratio="3:1"
></ivy-aspect-ratio>
```

## Props

| 属性名 | 描述     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| ratio  | 宽高比例 | string | -      | `1:1`  |
