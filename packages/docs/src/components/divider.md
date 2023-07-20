# Divider 分割线

## 基础用法

Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
<ivy-divider></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.

```html
Steven Paul Jobs was an American entrepreneur and business magnate. He was the
chairman, chief executive officer, and a co-founder of Apple Inc.
<ivy-divider></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the
chairman, chief executive officer, and a co-founder of Apple Inc.
```

## 设置分割线上的文案

通过 `value` 属性设置文案

Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="分割线"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.

```html
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="分割线"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
```

## 设置文案的位置

通过属性 `placement` 设置分割线文案的位置;可选值：`left/center/right`

Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.

```html
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
```

## 虚线

通过属性 `dashed` 设置分割线为虚线

Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider dashed></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider dashed value="分割线"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.

## 竖向分割线

通过设置属性 `vertical` 来设置为竖向分割线

<div>
Steven Paul
<ivy-divider vertical>default</ivy-divider>
Steven Paul
<ivy-divider vertical>default</ivy-divider>
Steven Paul
<ivy-divider vertical>default</ivy-divider>
Steven Paul
</div>

```html
<div>
    Steven Paul
    <ivy-divider vertical>default</ivy-divider>
    Steven Paul
    <ivy-divider vertical>default</ivy-divider>
    Steven Paul
    <ivy-divider vertical>default</ivy-divider>
    Steven Paul
</div>
```

## 支持的 Css 变量

:::details 点击打开
```css
:host{
    --ivy-divier-color: var(--ivy-color-text-primary, #303133);
    --ivy-divider-line-color: var(--ivy-border-color-light, #e4e7ed);
}
```
:::

## Props

| 属性名       | 说明          | 可选值                 | 默认值       |
|-----------|-------------|---------------------|-----------|
| value     | 分割线的文案      | -                   | `default` |
| placement | 文案的位置       | `left/center/right` | `center`  |
| vertical  | 竖向分割线       | -                   | -         |
| dashed    | 虚线-仅横向分割线可用 | -                   | -         |
