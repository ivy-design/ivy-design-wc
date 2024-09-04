# Grid 宫格布局

## 基础用法

常规用法

<ivy-grid class="grid-row">
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
</ivy-grid>

```html
<ivy-grid class="grid-row">
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
</ivy-grid>
```

## 边框

通过`border`设置 grid 组件的边框

<ivy-grid class="grid-row" border>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem1">12</ivy-grid-item>
</ivy-grid>

```html
<ivy-grid class="grid-row" border>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
</ivy-grid>
```

## 宽高一致

通过 `square` 设置宽高一样

<ivy-grid class="grid-row" border square>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
    <ivy-grid-item span="12" :class="$style.gridItem">12</ivy-grid-item>
</ivy-grid>

```html
<ivy-grid class="grid-row" border square>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
    <ivy-grid-item span="12" class="grid-item">12</ivy-grid-item>
</ivy-grid>
```

## 可用的 CSS 变量

::: details 点击打开

```css
:host {
    --ivy-grid-border-color: var(--ivy-border-color, #dcdfe6);
}
```

:::

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Props

| 属性名 | 说明         | 可选值    | 默认值 |
| ------ | ------------ | --------- | ------ |
| mode   | 布局模式     | grid/flex | `grid` |
| square | 是否宽高等比 | -         | -      |
| border | 是否显示边框 | -         | -      |
| cols   | 列数         | -         | `3`    |

<style module>
.gridItem {
    line-height: 32px;
    text-align: center;
}
.gridItem1{
    line-height: 32px;
    text-align: center;
    height: 100px;
}

</style>
