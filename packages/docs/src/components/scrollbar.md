# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应

<ivy-button @click="handleClick">测试</ivy-button>

<ivy-scrollbar height="500px" ref="a1">
    <div style="height: 30px;background-color:gray;"></div>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <p>测试内容</p>
    <div style="height: 30px;background-color:gray;"></div>
</ivy-scrollbar>

## Props

## Event

## Methods

<script setup>
import { ref } from 'vue'
const a1 = ref(null)
const handleClick = () => {
    a1.value.open()
}
</script>
