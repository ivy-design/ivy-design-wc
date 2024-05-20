# Popover 弹出框

## 基础用法{#placement}

Popover 是在 IvyTooltip 基础上开发出来的。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释

可选位置：`top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end`

<div>
    <ivy-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <ivy-button class="m-2" slot="reference">Hover 触发</ivy-button>
  </ivy-popover>

<ivy-popover
class="margin-left"
placement="bottom"
title="Title"
:width="200"
trigger="click"
content="this is content, this is content, this is content">
<ivy-button slot="reference" class="m-2">Click 触发</ivy-button>
</ivy-popover>

<ivy-popover
class="margin-left"
ref="popover"
title="Title"
:width="200"
trigger="contextmenu"
content="this is content, this is content, this is content">
<ivy-button slot="reference" class="m-2">contextmenu 触发</ivy-button>
</ivy-popover>

</div>

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
    --ivy-popover-min-width: 160px;
}
```

## Api

:::

### Props

| 参数      | 说明             | 类型   | 可选值               | 默认值  |
| --------- | ---------------- | ------ | -------------------- | ------- |
| title     | 标题             | String | -                    | -       |
| content   | popover 显示内容 | String | -                    | -       |
| placement | 位置             | String | [`enum`](#placement) | `top`   |
| theme     | 主题             | String | `light\dark`         | `light` |

### Slots

| name      | 说明             |
| --------- | ---------------- |
| default   | popover 内容     |
| reference | 用于触发 popover |

### Parts

| name    | 说明                |
| ------- | ------------------- |
| title   | 设置 title 的样式   |
| content | 设置 content 的样式 |

<script setup>
const placement = 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
</script>
