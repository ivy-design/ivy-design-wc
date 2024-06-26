# Timeline 时间线

## 基础用法

只设置时间和描述

<ivy-timeline>
  <ivy-timeline-item timestamp="2020-8-12">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-9-12">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-10-12">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-11-12">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-12-12">
  本周美国大选公布结果
  </ivy-timeline-item>
</ivy-timeline>

```html
<ivy-timeline>
  <ivy-timeline-item timestamp="2020-8-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-9-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-10-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-11-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-12-12">
    本周美国大选公布结果
  </ivy-timeline-item>
</ivy-timeline>
```

## 反转顺序

通过设置 `reverse` 属性来反转 timeline 的顺序

<ivy-timeline reverse>
<ivy-timeline-item timestamp="2020-8-12">
本周美国大选公布结果
</ivy-timeline-item>
<ivy-timeline-item timestamp="2020-9-12">
本周美国大选公布结果
</ivy-timeline-item>
<ivy-timeline-item timestamp="2020-10-12">
本周美国大选公布结果
</ivy-timeline-item>
<ivy-timeline-item timestamp="2020-11-12">
本周美国大选公布结果
</ivy-timeline-item>
<ivy-timeline-item timestamp="2020-12-12">
本周美国大选公布结果
</ivy-timeline-item>
</ivy-timeline>

```html
<ivy-timeline reverse>
  <ivy-timeline-item timestamp="2020-8-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-9-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-10-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-11-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-12-12">
    本周美国大选公布结果
  </ivy-timeline-item>
</ivy-timeline>
```

## 设置左侧小圆点的类型

通过设置 `type` 属性来设置小圆点的颜色。共五种：`primary`,`success`,`warn`,`error`,`error`

<ivy-timeline>
    <ivy-timeline-item timestamp="2020-8-12" type="primary">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-9-12" type="success">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-10-12" type="warning">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-11-12" type="danger">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-12-12">
    本周美国大选公布结果
    </ivy-timeline-item>
</ivy-timeline>

```html
<ivy-timeline>
  <ivy-timeline-item timestamp="2020-8-12" hide-timestamp type="primary">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-9-12" hide-timestamp type="success">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-10-12" hide-timestamp type="warn">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-11-12" hide-timestamp type="error">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-12-12" hide-timestamp>
    本周美国大选公布结果
  </ivy-timeline-item>
</ivy-timeline>
```

## 隐藏时间戳

通过设置 `timelineItem` 的 `hide-timestamp` 属性来显示和隐藏时间戳。

<ivy-timeline>
    <ivy-timeline-item timestamp="2020-8-12" hide-timestamp>
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-9-12">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-10-12">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-11-12">
    本周美国大选公布结果
    </ivy-timeline-item>
    <ivy-timeline-item timestamp="2020-12-12">
    本周美国大选公布结果
    </ivy-timeline-item>
</ivy-timeline>

```html
<ivy-timeline>
  <ivy-timeline-item timestamp="2020-8-12" hide-timestamp>
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-9-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-10-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-11-12">
    本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-12-12">
    本周美国大选公布结果
  </ivy-timeline-item>
</ivy-timeline>
```

## 可用的 CSS 变量

::: details 点击打开

```css
:host {
  --ivy-timeline-type-primary: var(--ivy-color-primary, #409eff);
  --ivy-timeline-type-success: var(--ivy-color-success, #67c23a);
  --ivy-timeline-type-warning: var(--ivy-color-warning, #e6a23c);
  --ivy-timeline-type-danger: var(--ivy-color-danger, #f56c6c);
  --ivy-timeline-type-info: var(--ivy-color-info, #909399);
}
```

:::

## Timeline Props

| 属性    | 描述 | 类型    | 可选值 | 默认值 |
| ------- | ---- | ------- | ------ | ------ |
| reverse | 反转 | boolean | -      | -      |

## TimelineItem Props

| 属性           | 描述         | 类型    | 可选值                                | 默认值 |
| -------------- | ------------ | ------- | ------------------------------------- | ------ |
| timestamp      | 时间戳       | string  | -                                     | -      |
| hide-timestamp | 隐藏时间戳   | boolean | -                                     | -      |
| type           | 小圆点的类型 | string  | `primary/success/warning/danger/info` | `info` |
