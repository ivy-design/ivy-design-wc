# Tooltip 文字提示

## 基础用法{#placement}

通过设置 placement 属性可以设置 tooltip 的位置;

可选位置：`top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end`

<div style="width: 400px;">
    <div style="display: flex;justify-content: space-between;padding: 0 70px">
        <ivy-tooltip content="Tooltip 文字提示" placement="top-start">
            <ivy-button type="success">上左</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="Tooltip 文字提示" placement="top">
            <ivy-button type="success">上边</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="Tooltip 文字提示" placement="top-end">
            <ivy-button type="success">上右</ivy-button>
        </ivy-tooltip>
    </div>
    <div style="display: flex;justify-content: space-between;height: 180px;padding: 20px 0;">
        <div style="display: inline-flex;justify-content: space-between;flex-direction: column;">
            <ivy-tooltip content="Tooltip 文字提示" placement="left-start">
                <ivy-button type="success">左上</ivy-button>
            </ivy-tooltip>
            <ivy-tooltip content="Tooltip 文字提示" placement="left">
                <ivy-button type="success">左边</ivy-button>
            </ivy-tooltip>
            <ivy-tooltip content="Tooltip 文字提示" placement="left-end">
                <ivy-button type="success">左下</ivy-button>
            </ivy-tooltip>
        </div>
        <div style="flex: auto;"></div>
        <div style="display: inline-flex;justify-content: space-between;flex-direction: column;">
            <ivy-tooltip content="Tooltip 文字提示" placement="right-start">
                <ivy-button type="success">右上</ivy-button>
            </ivy-tooltip>
            <ivy-tooltip content="Tooltip 文字提示" placement="right">
                <ivy-button type="success">右边</ivy-button>
            </ivy-tooltip>
            <ivy-tooltip content="Tooltip 文字提示" placement="right-end">
                <ivy-button type="success">右下</ivy-button>
            </ivy-tooltip>
        </div>
    </div>
    <div style="display: flex;justify-content: space-between;padding: 0 70px">
        <ivy-tooltip content="Tooltip 文字提示" placement="bottom-start">
            <ivy-button type="success">下左</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="Tooltip 文字提示" placement="bottom">
            <ivy-button type="success">下边</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="Tooltip 文字提示" placement="bottom-end">
            <ivy-button type="success">下右</ivy-button>
        </ivy-tooltip>
    </div>
</div>

```html
<div style="width: 400px;">
  <div style="display: flex;justify-content: space-between;padding: 0 70px">
    <ivy-tooltip content="Tooltip 文字提示" placement="top-start">
      <ivy-button type="success">上左</ivy-button>
    </ivy-tooltip>
    <ivy-tooltip content="Tooltip 文字提示" placement="top">
      <ivy-button type="success">上边</ivy-button>
    </ivy-tooltip>
    <ivy-tooltip content="Tooltip 文字提示" placement="top-end">
      <ivy-button type="success">上右</ivy-button>
    </ivy-tooltip>
  </div>
  <div
    style="display: flex;justify-content: space-between;height: 180px;padding: 20px 0;"
  >
    <div
      style="display: inline-flex;justify-content: space-between;flex-direction: column;"
    >
      <ivy-tooltip content="Tooltip 文字提示" placement="left-start">
        <ivy-button type="success">左上</ivy-button>
      </ivy-tooltip>
      <ivy-tooltip content="Tooltip 文字提示" placement="left">
        <ivy-button type="success">左边</ivy-button>
      </ivy-tooltip>
      <ivy-tooltip content="Tooltip 文字提示" placement="left-end">
        <ivy-button type="success">左下</ivy-button>
      </ivy-tooltip>
    </div>
    <div style="flex: auto;"></div>
    <div
      style="display: inline-flex;justify-content: space-between;flex-direction: column;"
    >
      <ivy-tooltip content="Tooltip 文字提示" placement="right-start">
        <ivy-button type="success">右上</ivy-button>
      </ivy-tooltip>
      <ivy-tooltip content="Tooltip 文字提示" placement="right">
        <ivy-button type="success">右边</ivy-button>
      </ivy-tooltip>
      <ivy-tooltip content="Tooltip 文字提示" placement="right-end">
        <ivy-button type="success">右下</ivy-button>
      </ivy-tooltip>
    </div>
  </div>
  <div style="display: flex;justify-content: space-between;padding: 0 70px">
    <ivy-tooltip content="Tooltip 文字提示" placement="bottom-start">
      <ivy-button type="success">下左</ivy-button>
    </ivy-tooltip>
    <ivy-tooltip content="Tooltip 文字提示" placement="bottom">
      <ivy-button type="success">下边</ivy-button>
    </ivy-tooltip>
    <ivy-tooltip content="Tooltip 文字提示" placement="bottom-end">
      <ivy-button type="success">下右</ivy-button>
    </ivy-tooltip>
  </div>
</div>
```

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
