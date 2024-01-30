# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

<ivy-pagination total="700" prev-text="上一页" next-text="下一页"></ivy-pagination>

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过 `pager-count` 属性可以设置最大页码按钮数。

<ivy-pagination total="700" pager-count="9" prev-text="上一页" next-text="下一页"></ivy-pagination>

## Props

| 属性名      | 说明                                     | 类型      | 可选值 | 默认值 |
| ----------- | ---------------------------------------- | --------- | ------ | ------ |
| current     | 类型                                     | `string`  | -      | 1      |
| size        | 每页显示条目个数                         | `boolean` | -      | 10     |
| total       | 总条目数                                 | `boolean` | -      | 0      |
| pager-count | 最大页码按钮数。当总页数超过该值时会折叠 | `string`  | -      | 7      |
| prev-text   | 显示的上一页文字                         | `string`  | -      | Prev   |
| next-text   | 显示的下一页文字                         | `string`  | -      | Next   |

## Events

| 名称           | 说明                 | 类型                         |
| -------------- | -------------------- | ---------------------------- |
| current-change | 当页码改变时触发     | `({current:number}) => void` |
| prev-page      | 点击上一页按钮时触发 | `({current:number}) => void` |
| next-page      | 点击下一页按钮时触发 | `({current:number}) => void` |
