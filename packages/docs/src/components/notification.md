# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

Ivy Design 注册了 $notify 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。
默认情况下，通知在 `4500` 毫秒后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。
如果你将它设置为 `0`，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 `Number`，单位为毫秒。

<ivy-button @click="test(true)"> 自动关闭 </ivy-button>
<ivy-button @click="test(false)"> 不自动关闭 </ivy-button>

```html
<ivy-button> 点击打开Notification</ivy-button>
```

## 不同类型的通知

我们提供了四种不同类型的提醒框：success、warning、info 和 error。

Ivy Design 为 Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。
他们可以设置 type 字段来修改，除上述的四个值之外的值会被忽略。
同时，我们也为 Notification 的各种 `type` 注册了单独的方法，可以在不传入 `type` 字段的情况下像[基础用法中]那样直接调用。

<ivy-button type="success" @click="handleSuccess"> Success </ivy-button>
<ivy-button type="warning" @click="handleWarning"> Warning </ivy-button>
<ivy-button type="danger" @click="handleError"> Error </ivy-button>
<ivy-button type="info" @click="handleInfo"> Info </ivy-button>

## 自定义弹出的位置

可以让 Notification 从屏幕四角中的任意一角弹出

使用 `position` 属性设置 Notification 的弹出位置，
支持四个选项：`top-right`、`top-left`、`bottom-right` 和 `bottom-left`， 默认为 `top-right`。

<ivy-button @click="handlePosition('top-left')"> Top Left </ivy-button>
<ivy-button @click="handlePosition('top-right')"> Top Right </ivy-button>
<ivy-button @click="handlePosition('bottom-left')"> Bottom Left </ivy-button>
<ivy-button @click="handlePosition('bottom-right')"> Bottom Right </ivy-button>

## 隐藏关闭按钮

通知的关闭按钮可以被设置为隐藏。

将 `showClose` 属性设置为 `false` 即可隐藏关闭按钮。

<ivy-button @click="hideClose"> 隐藏关闭按钮 </ivy-button>

## 使用 HTML 片段作为正文内容

`message` 支持传入 HTML 字符串来作为正文内容。

将 `useHtmlString` 属性设置为 `true`，`message` 属性就会被当作 HTML 片段处理。

<ivy-button @click="useHtml"> 使用 HTML 字符串 </ivy-button>

## 可用的 CSS 变量

:::details 点击查看

```css
:host {
  --ivy-notification-font-size: var(--ivy-font-size);
  --ivy-notification-title-font-size: 16px;
  --ivy-notification-width: 340px;
}
```

:::

## API

### 属性

| 名称          | 说明                            | 类型     | 可选值                        | 默认值    |
| ------------- | ------------------------------- | -------- | ----------------------------- | --------- |
| type          | 通知的类型                      | string   | `success/info/warning/error`  | -         |
| title         | 通知的标题                      | string   | -                             | '通知'    |
| message       | 正文内容                        | string   | -                             | -         |
| useHtmlString | message 作为 HTML 处理          | boolean  | -                             | false     |
| show-close    | 是否显示右上角关闭按钮          | boolean  | -                             | true      |
| duration      | 显示时间(ms)。 0 则不会自动关闭 | number   | -                             | 4500      |
| onClose       | 关闭时的回调函数                | Function | -                             | -         |
| position      | 关闭时的回调函数                | string   | `(top\|bottom)-(left\|right)` | top-right |

## Methods

| 方法名 | 说明                    | 类型               |
| ------ | ----------------------- | ------------------ |
| close  | 关闭当前的 Notification | `function()=>void` |

<script setup>
import { $notify } from '@ivy-design/ce';

const test = (autoClose) => {
    $notify({
        duration: autoClose ? 4500 : 0,
        title: "通知",
        message: "这是通知的内容部分"
    })
}
const handleSuccess = () => {
    $notify.success({
        title: "通知",
        message: "这是通知的内容部分"
    })
}

const handleWarning = () => {
    $notify.warning({
        title: "通知",
        message: "这是通知的内容部分"
    })
}

const handleError = () => {
    $notify.error({
        title: "通知",
        message: "这是通知的内容部分"
    })
}

const handleInfo = () => {
    $notify.info({
        title: "通知",
        message: "这是通知的内容部分"
    })
}
const handlePosition = (val) => {
    $notify({
        position: val || 'top-right',
        title: "通知",
        message: "这是通知的内容部分"
    })
}

const hideClose = () => {
    $notify({
        showClose: false,
        title: "通知",
        message: "这是通知的内容部分"
    })
}

const useHtml = () => {
    $notify({
        showClose: false,
        title: "通知",
        useHtmlString: true,
        message: `<p>我是使用<b style="color: red;margin: 0 8px"><i>html</i></b>字符串来作为正文内容</p>`
    })
}
</script>
