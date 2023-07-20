# Detail 详情

增强原生 `details` 元素

## 常规用法

<ivy-details>
    details 的内容
</ivy-details>

## 设置标题

通过设置 `summary` 属性来设置标题

<ivy-details summary="查看更多内容">
    details 的内容
</ivy-details>

## 可用的 CSS 变量

通过暴露的 CSS 变量可以修改其 `ivy-details` 的样式

::: details 点击代开
```css
:host {
    --ivy-details-border-radius: 8px;
    --ivy-background-color: #f7f7f7;
    --ivy-details-summary-color: #666;
    --ivy-details-color: #515a6e;
    --ivy-details-font-size: 13px;
    --ivy-details-summary-font-size: 14px;
}
```
:::

## Props

| Prop      | 描述 | 类型       | 可选值 | 默认值 |
|-----------|----|----------|-----|----|
| `summary` | 标题 | `string` | -   | `详细信息`   |