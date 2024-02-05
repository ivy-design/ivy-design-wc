# Scrollbar 滚动条

用于替换浏览器原生滚动条。

:::warning 提示
由于使用了 `ResizeObserver` 请注意浏览器兼容性
:::

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应

<ivy-scrollbar height="500px">
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
    <div class="vertical-item">测试内容</div>
</ivy-scrollbar>

## 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

<ivy-scrollbar>
<div style="width: max-content">
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
    <div class="horizontal-item"></div>
</div>
</ivy-scrollbar>

## 最大高度

当元素高度超过最大高度，才会显示滚动条。

<ivy-button type="primary" @click="addItem">添加项目</ivy-button>
<ivy-button type="danger" @click="removeItem">移除项目</ivy-button>

<ivy-scrollbar max-height="300px" style="margin-top: 16px;">
<div class="vertical-item" v-for="item in list" :key="item">{{item}}</div>
</ivy-scrollbar>

## 可用的 css 变量

:::details 点击展开

```css
:host {
  --ivy-scrollbar-thumb-color: var(--ivy-text-color-secondary);
  --ivy-scrollbar-color: transparent;
  --ivy-scrollbar-size: 8px;
}
```

:::

## Props

| 属性名     | 说明                                    | 类型     | 可选值 | 默认值 |
| ---------- | --------------------------------------- | -------- | ------ | ------ |
| height     | 滚动条高度（同style中的height）         | `string` | -      | -      |
| max-height | 滚动条最大高度（同style中的max-height） | `string` | -      | -      |
| min-size   | 下划线                                  | `string` | -      | `20px` |

## Event

| 事件名 | 说明                             | 参数                          |
| ------ | -------------------------------- | ----------------------------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `function(x:number,y:number)` |

## Methods

| 方法名   | 说明               | 类型       |
| -------- | ------------------ | ---------- |
| scrollTo | 设置容器的滚动距离 | `function` |

:::tip 注意
`scrollTo` 方法的签名：<br>
`function (val:number, isHorizontal: boolean=false):void`<br>
`function (conf: {top:number, left: number}):void`
:::

<script setup>
import { ref } from 'vue'
const list = ref([1,2,3,4,5])
const addItem = () => {
    list.value.push(list.value.length + 1)
}
const removeItem = () => {
    list.value.pop()
}
</script>

<style lang="scss" scoped>
.vertical-item {
    line-height: 32px;
    text-align: center;
    background-color: bisque;
    & + & {
        margin-top: 12px;
    }
}
.horizontal-item {
    height: 40px;
    width: 120px;
    background-color:pink;
    display: inline-block;
}
.horizontal-item + .horizontal-item{
    margin-left: 12px;
}
</style>
