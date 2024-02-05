# Tour 漫游式引导 <Badge type="tip" text="v1.7.0"></Badge>

用于分步引导用户了解产品功能的气泡组件。 用来引导用户并介绍产品

## 基础用法

<ivy-button @click="handleOpen">打开引导</ivy-button>

---

<ivy-space>
    <ivy-button class="a1">上传</ivy-button>
    <ivy-button class="a2" type="primary">保存</ivy-button>
    <ivy-button class="a3">...</ivy-button>
</ivy-space>

<ivy-tour :steps.prop="steps" ref="targetEl">
    <ivy-tour-step></ivy-tour-step>
</ivy-tour>

## 位置{#placement}

改变引导相对于目标的位置，共有 12 种位置可供选择。

:::info
placement：<br>
`top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end`
:::

<ivy-button class='self' @click="handleOpen1">打开引导</ivy-button>

<ivy-tour :steps.prop="steps1" ref="targetEl1" style="--ivy-tour-width: 300px">
    <ivy-tour-step></ivy-tour-step>
</ivy-tour>

## 可用的 css 变量

:::details 点击展开

```css
:host {
  --ivy-tour-width: 420px;
  --ivy-tour-padding-primary: 16px;
  --ivy-tour-font-line-height: var(--ivy-font-line-height-primary);
  --ivy-tour-title-font-size: 16px;
  --ivy-tour-title-text-color: var(--ivy-text-color-primary);
  --ivy-tour-title-font-weight: 400;
  --ivy-tour-font-size: 14px;
  --ivy-tour-color: var(--ivy-text-color-primary);
  --ivy-tour-bg-color: #ffffff;
  --ivy-tour-border-radius: var(--ivy-border-radius);
  --ivy-tour-border-color: var(--ivy-border-color-lighter);
}
```

:::

## Tour Props

| 参数      | 说明 | 类型         | 可选值               | 默认值 |
| --------- | ---- | ------------ | -------------------- | ------ |
| steps     | 内容 | Array\<Step> | -                    | -      |
| placement | 位置 | String       | [`enum`](#placement) | `top`  |

### Step

| 参数      | 说明                   | 类型                  | 可选值               | 默认值 |
| --------- | ---------------------- | --------------------- | -------------------- | ------ |
| target    | 目标元素               | string \| HTMLElement | -                    | -      |
| title     | 标题                   | string                | -                    | -      |
| content   | 内容                   | string                | -                    | -      |
| allowHtml | 内容可以是 html 字符串 | string                | -                    | -      |
| placement | 位置                   | String                | [`enum`](#placement) | `top`  |

## Tour Events

| 事件名称 | 说明                 | 类型                     |
| -------- | -------------------- | ------------------------ |
| change   | 引导步骤发生变化     | `(index:number) => void` |
| close    | 关闭引导时的回调函数 | `() => void`             |
| finish   | 引导完成时的回调     | `() => void`             |

## Tour Methods

| 方法名 | 说明       | 类型         |
| ------ | ---------- | ------------ |
| open   | 显示引导层 | `() => void` |

<script setup>
import { ref } from 'vue'

const steps = ref([
    {
        target: '.a1',
        title: '第一步',
        content: "这是提示的第一个",
        placement: 'top-end'
    },
    {
        target: '.a2',
        title: '第二步',
        content: "这是提示的第一个",
        placement: 'bottom-end'
    },
    {
        target: '.a3',
        title: '最后',
        content: "这是提示的第一个",
        placement: 'top'
    }
])
const targetEl = ref()
const handleOpen = () => {
    targetEl.value.open()
}

const steps1 = ref([
    { target: '.self', content: "top-end", placement: 'top-end' },
    { target: '.self', content: "top", placement: 'top' },
    { target: '.self', content: "top-start", placement: 'top-start' },
    { target: '.self', content: "right-start", placement: 'right-start' },
    { target: '.self', content: "right", placement: 'right' },
    { target: '.self', content: "right-end", placement: 'right-end' },
    { target: '.self', content: "bottom-end", placement: 'bottom-end' },
    { target: '.self', content: "bottom", placement: 'bottom' },
    { target: '.self', content: "bottom-start", placement: 'bottom-start' },
    { target: '.self', content: "left-end", placement: 'left-end' },
    { target: '.self', content: "left", placement: 'left' },
    { target: '.self', content: "left-start", placement: 'left-start' },
])
const targetEl1 = ref()
const handleOpen1 = () => {
    targetEl1.value.open()
}
</script>
