# TimeSelect 时间选择

用于选择或输入日期

:::warning
依赖组件 `scrollbar`，请务必导入 `scrollbar` 组件<br>
可用时间范围是 00:00-23:59
:::

## 固定时间点

提供几个固定的时间点供用户选择

使用 el-time-select 标签，然后通过 start、end 和 step 指定起始时间，结束时间和步长。

<ivy-time-select start="08:30" step="01:00" end="18:30" placeholder="选择时间"></ivy-time-select>

## 时间格式

使用 `format` 属性来控制时间格式 (小时以及分钟)。

在[这里](https://day.js.org/docs/zh-CN/display/format) 查看 Day.js 支持的 format 参数。

:::danger 警告
请一定要注意传入参数的大小写是否正确
:::

<ivy-time-select start="08:30" step="01:00" end="18:30" placeholder="选择时间" format="hh:mm A"></ivy-time-select>

## 固定时间范围

如果先选中了开始（或结束）时间，则结束（或开始）时间的状态也将会随之改变。

<ivy-time-select start="08:30" step="01:00" end="18:30" placeholder="开始时间" ref="startRef" @change="startChange"></ivy-time-select>
<ivy-time-select start="08:30" step="01:00" end="18:30" placeholder="结束时间" ref="endRef" @change="endChange"></ivy-time-select>

## Props

| 属性名      | 说明                                 | 类型      | 可选值 | 默认值 |
| ----------- | ------------------------------------ | --------- | ------ | ------ |
| value       | 默认值                               | `string`  | -      | -      |
| disabled    | 禁用状态                             | `boolean` | -      | -      |
| clearable   | 是否显示清除按钮                     | `boolean` | -      | -      |
| placeholder | 占位内容                             | `string`  | -      | -      |
| start       | 开始时间                             | `string`  | -      | 09:00  |
| end         | 结束时间                             | `string`  | -      | 17:00  |
| step        | 间隔时间                             | `string`  | -      | 00:30  |
| min-time    | 最早时间，早于该时间的时间段将被禁用 | `string`  | -      | -      |
| max-time    | 最晚时间，晚于该时间的时间段将被禁用 | `string`  | -      | -      |
| format      | 设置时间格式                         | `string`  | -      | HH:mm  |

## Events

| 事件名 | 说明                   | 类型                      |
| ------ | ---------------------- | ------------------------- |
| change | 用户确认选定的值时触发 | (ev: CustomEvent) => void |
| clear  | 清空选中的值           | (ev: CustomEvent) => void |

<script setup>
import { ref } from 'vue'
const startRef = ref()
const endRef = ref()
const startChange = (val) => {
    endRef.value.minTime = val.detail[0]
}
const endChange = (val) => {
    startRef.value.maxTime = val.detail[0]
}
</script>
