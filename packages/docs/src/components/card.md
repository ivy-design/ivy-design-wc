# Card 卡片

## 常规用法

包含头部和主题部分，默认不显示阴影

<ivy-card style="width: 300px;">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
</ivy-card>

```html
<ivy-card style="width: 300px;">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
</ivy-card>
```

## 阴影

通过设置 `shadow` 来显示阴影,

<ivy-space size="custom" gap="50px">
<div>
<p>shadow=always 总是显示阴影</p>
<ivy-card style="width: 300px;" shadow="always">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
</ivy-card>
</div>
<div>
<p>shadow=hover hover 时显示阴影</p>
<ivy-card style="width: 300px;" shadow="hover">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
</ivy-card>
</div>
</ivy-space>

```html
<ivy-card style="width: 300px;" shadow="always">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
</ivy-card>
<ivy-card style="width: 300px;" shadow="hover">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
    <div>卡片</div>
</ivy-card>
```
## API

### Props

| 属性      | 描述         | 类型      | 可选值            | 默认值 |
|---------|------------|---------|----------------|-----|
| header  | 标题         | string  | -              | -   |
| shadow  | 卡片阴影-默认不显示 | string  | `always/hover` | -   |