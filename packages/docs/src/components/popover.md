# Popover 弹出框

## 基础用法{#placement}

Popover 是在 IvyTooltip 基础上开发出来的。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释

可选位置：`top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end`

<div style="width: 400px;">
    <ivy-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <ivy-button class="m-2" slot="reference">Hover to activate</ivy-button>
  </ivy-popover>

  <ivy-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <ivy-button slot="reference" class="m-2">Click to activate</ivy-button>
  </ivy-popover>

  <ivy-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <ivy-button slot="reference" class="m-2">Focus to activate</ivy-button>
  </ivy-popover>

  <ivy-popover
    ref="popover"
    title="Title"
    :width="200"
    trigger="contextmenu"
    content="this is content, this is content, this is content"
  >
    <ivy-button slot="reference" class="m-2">contextmenu to activate</ivy-button>
  </ivy-popover>
</div>

## 主题

通过 `theme` 属性可以设置主题，可选值 `light/dark`

<ivy-tooltip content="Tooltip 文字提示">
    <ivy-button type="success">默认/light</ivy-button>
</ivy-tooltip>
<ivy-tooltip content="Tooltip 文字提示" theme="dark" class="margin-left">
    <ivy-button type="success">dark</ivy-button>
</ivy-tooltip>

```html
<ivy-tooltip content="Tooltip 文字提示">
  <ivy-button type="success">默认</ivy-button>
</ivy-tooltip>
<ivy-tooltip content="Tooltip 文字提示" theme="dark" class="margin-left">
  <ivy-button type="success">默认</ivy-button>
</ivy-tooltip>
```

## 多行文本

通过给 `slot=content` 的元素设置 `style="word-break: initial;white-space: initial"`来实现多行文本的需求

<ivy-tooltip content="Tooltip 文字提示">
    <ivy-button type="success">默认</ivy-button>
    <div style="width: 200px;word-break: initial;white-space: initial;" slot="content">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
    </div>
</ivy-tooltip>

```html
<ivy-tooltip content="Tooltip 文字提示">
  <ivy-button type="success">默认</ivy-button>
  <div
    style="width: 200px;word-break: initial;white-space: initial;"
    slot="content"
  >
    史蒂夫·乔布斯（Steve
    Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
  </div>
</ivy-tooltip>
```

## 可用的 css 变量

:::details 点击展开

```css
:host {
  --ivy-tooltip-color: var(--ivy-text-color-primary);
  --ivy-tooltip-background-color: #fff;
  --ivy-tooltip-font-size: 13px;
  --ivy-tooltip-z-index: 1000;
  --ivy-tooltip-arrow-color: #fff;
  --ivy-tooltip-arrow-size: 8px;
  --ivy-tooltip-arrow-border-color: var(--ivy-border-color);
}
```

:::

## Props

| 参数      | 说明             | 类型   | 可选值               | 默认值  |
| --------- | ---------------- | ------ | -------------------- | ------- |
| content   | tooltip 显示内容 | String | -                    | -       |
| placement | 位置             | String | [`enum`](#placement) | `top`   |
| theme     | 主题             | String | `light\dark`         | `light` |

## Slots

| name    | 说明             |
| ------- | ---------------- |
| content | tooltip 内容     |
| default | 用于触发 tooltip |

<script setup>
const placement = 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
</script>
