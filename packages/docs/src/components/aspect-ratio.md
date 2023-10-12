# AspectRatio 固定比例容器

使用在需要保持容器比例的场景

## 基础用法

默认的宽高比例为 `1/1`，可以通过设置 `ratio` 属性来更改宽高比例。

<ivy-button @click="handleClick('1/1')">default</ivy-button>
<ivy-button @click="handleClick('16/9')">16/9</ivy-button>
<ivy-button @click="handleClick('2/1')">2/1</ivy-button>

<div style="height: 12px;"></div>

<ivy-aspect-ratio style="border: 1px solid red" ratio="1/1" id="wrap">
    <div style="text-align:center;line-height: 2em;">{{ ratioStr }}</div>
</ivy-aspect-ratio>

```html
<ivy-aspect-ratio
  style="border: 1px solid red"
  aspect-ratio="1/1"
></ivy-aspect-ratio>
```

## Props

| 属性名 | 描述                            | 类型   | 可选值 | 默认值 |
| ------ | ------------------------------- | ------ | ------ | ------ |
| ratio  | 宽高比例，格式为 `x/x` 的字符串 | string | -      | `1/1`  |

<script setup>
import { ref } from 'vue'
const ratioStr = ref('1/1')
const handleClick = (ratio) => {
    ratioStr.value = ratio
    document.querySelector("#wrap").setAttribute('ratio', ratio)
}
</script>
