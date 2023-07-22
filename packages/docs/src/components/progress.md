# Progress 进度条

## 常规用法

通过设置`value`属性的值来设置进度

<ivy-progress value="70"></ivy-progress>

```html
<ivy-progress value="70"></ivy-progress>
```

## 设置进度条的颜色

通过 CSS 变量`--ivy-progress-color` 来设置进度条的颜色

<ivy-progress value="70"></ivy-progress>
<ivy-progress value="70" color="red" style="--ivy-progress-color: red" class="margin-top"></ivy-progress>

```html
<ivy-progress value="70"></ivy-progress>
<ivy-progress
  value="70"
  color="red"
  style="--ivy-progress-color: red"
></ivy-progress>
```

## 设置进度条的粗细

通过 CSS 变量 `--ivy-progress-stroke-width` 来设置进度条的大小-默认:`8px`

<ivy-progress value="70" style="--ivy-progress-stroke-width: 24px"></ivy-progress>
<ivy-progress value="70" style="--ivy-progress-stroke-width: 15px" class="margin-top"></ivy-progress>

```html
<ivy-progress
  value="70"
  style="--ivy-progress-stroke-width: 24px"
></ivy-progress>
<ivy-progress
  value="70"
  style="--ivy-progress-stroke-width: 15px"
></ivy-progress>
```

## 显示描述文字

通过设置 `show-text` 属性来显示描述文字

<ivy-progress value="70" show-text></ivy-progress>

```html
<ivy-progress value="70" show-text></ivy-progress>
```

## 格式化描述文字

通过设置 `formatter` 属性来设置格式化描述文字，格式 `{value}px`

<ivy-progress value="70" show-text formatter="{value}px"></ivy-progress>

```html
<ivy-progress value="70" show-text formatter="{value}px"></ivy-progress>
```

## 可用的 CSS 变量

::: details 点击打开

```css
:host {
  --ivy-progress-track-color: #ebeef5; /**进度条轨道的颜色 */
  --ivy-progress-stroke-width: 8px; /**进度条大小 */
  --ivy-progress-color: var(--ivy-primary-color, #409eff); /**进度条颜色 */
  --ivy-progress-text-size: 12px; /**进度条描述文字的大小 */
  --ivy-progress-text-color: var(--ivy-text-color-primary, #303133);/**进度条描述文字的颜色 */
```

:::

## Props

| 属性名    | 描述                             | 类型    | 可选值 | 默认值     |
| --------- | -------------------------------- | ------- | ------ | ---------- |
| value     | 进度值                           | number  | -      | `0`        |
| showText  | 显示描述文字                     | boolean | -      | -          |
| formatter | 格式化描述文字-`{value}`是必须的 | string  | -      | `{value}%` |
