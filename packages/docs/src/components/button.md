# Button 按钮

## 基本用法

基础用法，通过`type`切换不同颜色的按钮

<ivy-button>默认</ivy-button>
<ivy-button type="primary">主要</ivy-button>
<ivy-button type="success">成功</ivy-button>
<ivy-button type="warning">警告</ivy-button>
<ivy-button type="danger">错误</ivy-button>
<ivy-button type="info">提示</ivy-button>

```html
<ivy-button>默认</ivy-button>
<ivy-button type="primary">主要</ivy-button>
<ivy-button type="success">成功</ivy-button>
<ivy-button type="warning">警告</ivy-button>
<ivy-button type="danger">错误</ivy-button>
<ivy-button type="info">提示</ivy-button>
```

## 圆角按钮

通过 `round` 属性设置按钮为圆角

<ivy-button round>默认按钮</ivy-button>
<ivy-button type="primary" round>主要</ivy-button>
<ivy-button type="success" round>成功</ivy-button>
<ivy-button type="warning" round>警告</ivy-button>
<ivy-button type="danger" round>错误</ivy-button>
<ivy-button type="info" round>提示</ivy-button>

```html
<ivy-button round>默认按钮</ivy-button>
<ivy-button type="primary" round>主要</ivy-button>
<ivy-button type="success" round>成功</ivy-button>
<ivy-button type="warning" round>警告</ivy-button>
<ivy-button type="danger" round>错误</ivy-button>
<ivy-button type="info" round>提示</ivy-button>
```

## 加载中

添加`loading`属性来表示加载中的状态

<ivy-button loading>默认按钮</ivy-button>
<ivy-button type="primary" loading>主要</ivy-button>
<ivy-button type="success" loading>成功</ivy-button>
<ivy-button type="warning" loading>警告</ivy-button>
<ivy-button type="danger" loading>错误</ivy-button>
<ivy-button type="info" loading>提示</ivy-button>

```html
<ivy-button loading>默认按钮</ivy-button>
<ivy-button type="primary" loading>主要</ivy-button>
<ivy-button type="success" loading>成功</ivy-button>
<ivy-button type="warning" loading>警告</ivy-button>
<ivy-button type="danger" loading>错误</ivy-button>
<ivy-button type="info" loading>提示</ivy-button>
```

## 禁用

添加`disabled`属性来表示禁用状态

<ivy-button disabled>默认按钮</ivy-button>
<ivy-button type="primary" disabled>主要</ivy-button>
<ivy-button type="success" disabled>成功</ivy-button>
<ivy-button type="warning" disabled>警告</ivy-button>
<ivy-button type="danger" disabled>错误</ivy-button>
<ivy-button type="info" disabled>提示</ivy-button>

```html
<ivy-button disabled>默认按钮</ivy-button>
<ivy-button type="primary" disabled>主要</ivy-button>
<ivy-button type="success" disabled>成功</ivy-button>
<ivy-button type="warning" disabled>警告</ivy-button>
<ivy-button type="danger" disabled>错误</ivy-button>
<ivy-button type="info" disabled>提示</ivy-button>
```

## 支持的 Css 变量

:::details 点击打开

```css
:host {
  --ivy-button-border-color: var(--ivy-border-color, #dcdfe6);
  --ivy-button-text-color: var(--ivy-text-color, #303133);
  --ivy-button-background-color: var(--ivy-color-white, #fff);

  --ivy-button-hover-text-color: var(--el-color-white, #fff);
  --ivy-button-hover-background-color: var(
    --ivy-color-primary-light-3,
    #79bbff
  );
  --ivy-button-hover-border-color: var(--ivy-color-primary-light-3, #79bbff);

  --ivy-button-active-background-color: var(
    --ivy-color-primary-dark-2,
    #337ecc
  );
  --ivy-button-active-border-color: var(--ivy-color-primary-dark-2, #337ecc);

  --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
  --ivy-button-disabled-background-color: var(
    --ivy-color-primary-light-5,
    #a0cfff
  );
  --ivy-button-disabled-border-color: var(--ivy-color-primary-light-5, #a0cfff);

  --ivy-button-height: var(--ivy-size-medium, 32px);
}
```

:::

## Props

| 属性名   | 说明   | 可选值                                      | 默认值    |
| -------- | ------ | ------------------------------------------- | --------- |
| type     | 类型   | default/primary/success/warning/danger/info | `default` |
| round    | 圆角   | -                                           | -         |
| disabled | 禁用   | -                                           | -         |
| loading  | 加载中 | -                                           | -         |
