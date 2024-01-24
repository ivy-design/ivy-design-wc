# Tag 标签

## 常规用法

默认显示的样式

<ivy-tag>default</ivy-tag>
<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">danger</ivy-tag>
<ivy-tag type="info">info</ivy-tag>

## theme

通过`theme`属性来设置主题,一共有三种`plain`、`dark`、`default`,其中`default`是默认的不用写

default：
<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">#F56C6C</ivy-tag>
<ivy-tag type="info">info</ivy-tag>

dark：
<ivy-tag theme="dark" type="primary">primary</ivy-tag>
<ivy-tag theme="dark" type="success">success</ivy-tag>
<ivy-tag theme="dark" type="warning">warning</ivy-tag>
<ivy-tag theme="dark" type="danger">danger</ivy-tag>
<ivy-tag theme="dark" type="info">info</ivy-tag>

```html
default：
<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">#F56C6C</ivy-tag>
<ivy-tag type="info">info</ivy-tag>

dark：
<ivy-tag theme="dark" type="primary">primary</ivy-tag>
<ivy-tag theme="dark" type="success">success</ivy-tag>
<ivy-tag theme="dark" type="warning">warning</ivy-tag>
<ivy-tag theme="dark" type="danger">danger</ivy-tag>
<ivy-tag theme="dark" type="info">info</ivy-tag>
```

## Size 大小

通过`size`属性来设置主题,一共有四种`mini`、`default`、`medium`、`large`,其中`default`是默认的不用写

<ivy-tag size="large">small</ivy-tag>
<ivy-tag size="medium">medium</ivy-tag>
<ivy-tag>default</ivy-tag>
<ivy-tag size="mini">mini</ivy-tag>

```html
<ivy-tag>default</ivy-tag>
<ivy-tag size="medium">medium</ivy-tag>
<ivy-tag size="small">small</ivy-tag>
<ivy-tag size="mini">mini</ivy-tag>
```

## 自定义颜色

通过 css 变量可以自定义颜色

<ivy-tag style="--ivy-tag-color: #008000;--ivy-tag-border-color: red; --ivy-tag-bg-color: white;">#008000</ivy-tag>

```html
<ivy-tag
  style="--ivy-tag-color: #008000;--ivy-tag-border-color: red; --ivy-tag-bg-color: white;"
  >#008000</ivy-tag
>
```

## 可用的 CSS 变量

:::details 点击打开

```css
:host {
  --ivy-tag-color: var(--ivy-color-primary, #409eff);
  --ivy-tag-border-color: var(--ivy-color-primary-light-8, #d9ecff);
  --ivy-tag-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
}
```

:::

## props

| 属性名 | 说明 | 可选值                                | 默认值    |
| ------ | ---- | ------------------------------------- | --------- |
| type   | 类型 | `primary/success/warning/danger/info` | `primary` |
| theme  | 主题 | `plain/dark`                          | -         |
| size   | 大小 | `mini/small/medium/large`             | `small`   |
