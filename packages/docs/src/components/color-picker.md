# ColorPicker 取色器

## 基础用法

<ivy-color-picker value="#ffa" id="colorPicker1" @change="handlerChange"></ivy-color-picker>

<div :style="{width: '100px', height: '100px', backgroundColor: val}"></div>

<script setup>
import { ref } from 'vue'
const val = ref()
const handlerChange = (e) => {
    val.value = e.detail[0]
    console.log(e.detail[0])
}
</script>
