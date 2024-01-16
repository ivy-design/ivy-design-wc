# Affix 固钉

将页面元素固定在特定可视区域。

## 基础用法

固钉默认固定在页面顶部。

通过设置 `offset` 属性来改变吸顶距离，默认值为 `0`。

<ivy-affix offset="80">
    <ivy-button type="primary"> Offset Top 80px</ivy-button>
</ivy-affix>

<!-- ## 固定位置

Affix 组件提供 2 个固定的位置参数 `top` 和 `bottom。`

通过设置 `position` 属性来改变固定位置，默认值为 `top` 。 -->

## API

### 属性

| 名称     | 说明     | 类型   | 可选值          | 默认值 |
| -------- | -------- | ------ | --------------- | ------ |
| offset   | 偏移距离 | number | -               | `0`    |
| position | 固钉位置 | string | `top \| bottom` | `top`  |
| z-index  | z-index  | number | -               | `100`  |

### 事件

| 名称   | 说明                     | 类型                                     |
| ------ | ------------------------ | ---------------------------------------- |
| change | 固钉状态改变时触发的事件 | ({fixed:boolean})=>void                  |
| scroll | 滚动时触发的事件         | ({fixed:boolean,scrollTop:number})=>void |
