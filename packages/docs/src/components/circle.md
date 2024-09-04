# Circle 圆环进度条

## 基础用法

圆形进度环有一系列的参数可配置，具体可以查看下面的 API 文档。

<ivy-circle value="60">60%</ivy-circle>
<ivy-circle value="100" status="success"><ivy-icon name="check" color="var(--ivy-color-success)" size="30px"></ivy-icon></ivy-circle>
<ivy-circle value="60" status="danger"><ivy-icon name="close" color="var(--ivy-color-danger)" size="30px"></ivy-icon></ivy-circle>

## 自定义样式

通过自定义 `slot` 和丰富的配置，可以组合出很多统计效果。

<ivy-circle size="200" value="75">
    <p style="margin:0;">42,001,776</p>
    <span>消费人群规模</span>
    <hr />
    <span>总占人数 75%</span>
</ivy-circle>

## 配合外部组件使用

通过数据的联动和逻辑控制，实现交互效果。

<ivy-circle size="200" :value="val" :status="status">
    <ivy-icon name="check" v-if="status === 'success'" color="var(--ivy-color-success)" size="24px"></ivy-icon>
    <span v-else>{{val}}%</span>
</ivy-circle>

<ivy-button @click="addVal">+</ivy-button>
<ivy-button @click="minusVal">-</ivy-button>

## 支持的 CSS 变量

> 可自定义默认状态的轨道颜色和进度颜色

::: details 点击打开

```css
:host {
    --ivy-circle-color: var(--ivy-color-primary, #409eff);
    --ivy-circle-track-color: var(--ivy-color-border, #e5e9f2);
}
```

:::

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Props

| Prop         | 描述                     | 类型             | 可选值                   | 默认值    |
| ------------ | ------------------------ | ---------------- | ------------------------ | --------- |
| value        | 百分比                   | `string\|number` | -                        | `0`       |
| status       | 状态(进度条的颜色)       | `string`         | `process/success/danger` | `process` |
| stroke-width | 进度环的线宽（px）       | `number\|string` | -                        | `6`       |
| size         | 进度环的宽度和高度（px） | `number\|string` | -                        | `126`     |
| color        | 进度条的颜色(优先级最高) | `string`         | -                        | `false`   |

### Slots

| 名称 | 说明                                 |
| ---- | ------------------------------------ |
| 无   | 自定义显示中间内容，内容默认垂直居中 |

<script setup>
import { ref } from 'vue'

const val = ref(50);
const status = ref('process')

const addVal = () => {
    if(val.value < 100){
        val.value = val.value + 10
    }
    if(val.value === 100){
        status.value = 'success'
    }else {
        status.value = 'process'
    }
}

const minusVal = () => {
    if(val.value > 0){
        val.value = val.value - 10
    }
    if(val.value === 100){
        status.value = 'success'
    }else {
        status.value = 'process'
    }
}

</script>
