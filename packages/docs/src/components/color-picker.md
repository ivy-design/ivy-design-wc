# ColorPicker 取色器

## 基础用法

<ivy-color-picker value="#ffa" id="colorPicker1" @change="handlerChange"></ivy-color-picker>
<ivy-color-picker id="colorPicker1" @change="handlerChange"></ivy-color-picker>

<div :style="{width: '100px', height: '100px', backgroundColor: val}"></div>

## 预定义颜色

通过设置 `predefine` 属性来预定义一系列的颜色，用 `;` 分割的字符串

<ivy-color-picker value="#ffa" :predefine="predefine"></ivy-color-picker>

```vue
<template>
    <ivy-color-picker value="#ffa" :predefine="predefine"></ivy-color-picker>
</template>
<script setup>
const predefine = [
    "#ff4500",
    "#ff8c00",
    "#ffd700",
    "#90ee90",
    "#00ced1",
    "#1e90ff",
    "#c71585",
    "rgba(255, 69, 0, 0.68)",
    "rgb(255, 120, 0)",
    "hsv(51, 100, 98)",
    "hsva(120, 40, 94, 0.5)",
    "hsl(181, 100%, 37%)",
    "hsla(209, 100%, 56%, 0.73)",
    "#c7158577",
].join(";");
</script>
```

<script setup>
import { ref } from 'vue'
const predefine = ['#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',].join(';')
const val = ref()
const handlerChange = (e) => {
    val.value = e.detail[0]
    console.log(val.value)
}
</script>
