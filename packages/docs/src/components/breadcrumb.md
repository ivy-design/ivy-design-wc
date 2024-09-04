# Breadcrumb 面包屑

## 基础用法

基础用法当然是最基础的用法

<ivy-breadcrumb>
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item href="http://www.baidu.com">产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>

```html
<ivy-breadcrumb>
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item href="http://www.baidu.com"
        >产品动态</ivy-breadcrumb-item
    >
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>
```

## 自定义分隔符

通过 `separator` 属性设置分隔符

<ivy-breadcrumb separator=">">
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>

```html
<ivy-breadcrumb separator=">">
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>
```

## 可用的 CSS 变量

:::details 点击展开

```css
:host {
    --ivy-breadcrumb-color: var(--ivy-text-color-primary, #303133);
    --ivy-breadcrumb-hover-color: var(--ivy-color-primary, #409eff);
    --ivy-breadcrumb-separator-color: var(--ivy-text-color-regular, #606266);
}
```

:::

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Breadcrumb Props

| 属性名    | 说明   | 可选值 | 默认值 |
| --------- | ------ | ------ | ------ |
| separator | 分隔符 | -      | `/`    |

### BreadcrumbItem Props

| 属性名    | 说明       | 可选值 | 默认值 |
| --------- | ---------- | ------ | ------ |
| separator | 分隔符     | -      | `/`    |
| href      | 跳转的链接 | -      | -      |
| blank     | 新窗口打开 | -      | -      |
