# Checkbox 多选框

一组备选项中进行多选

## 基础用法

<ivy-checkbox>苹果</ivy-checkbox>

```html
<ivy-checkbox>苹果</ivy-checkbox>
```

## 自定义选中和没有选中的值

:::tip
通过 `true-label` 和 `false-label` 来设置选中和没有选中的值，通常适用于单个选择框的情况
:::

<ivy-checkbox true-label="1" false-label="0" checked onchange="console.log(this.value)">勾选即同意本协议</ivy-checkbox>

```html
<ivy-checkbox true-label="1" false-label="0">勾选即同意本协议</ivy-checkbox>
```

## 禁用效果

<ivy-checkbox disabled>苹果</ivy-checkbox>
<ivy-checkbox disabled checked>苹果</ivy-checkbox>

```html
<ivy-checkbox disabled>苹果</ivy-checkbox>
<ivy-checkbox disabled checked>苹果</ivy-checkbox>
```

## 配合 `ivy-checkbox-group` 使用

<ivy-checkbox-group onchange="console.log(this.value)">
    <ivy-checkbox label="1" checked>苹果</ivy-checkbox>
    <ivy-checkbox label="2">橘子</ivy-checkbox>
    <ivy-checkbox label="3">香蕉</ivy-checkbox>
</ivy-checkbox-group>

```html
<ivy-checkbox-group onchange="console.log(this.value)">
    <ivy-checkbox label="1" checked>苹果</ivy-checkbox>
    <ivy-checkbox label="2">橘子</ivy-checkbox>
    <ivy-checkbox label="3">香蕉</ivy-checkbox>
</ivy-checkbox-group>
```

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Checkbox Props

| Prop       | 描述                                  | 类型                      | 可选值 | 默认值  |
| ---------- | ------------------------------------- | ------------------------- | ------ | ------- |
| label      | 选中的值，在配合 CheckboxGroup 时可用 | _string\|number\|boolean_ | -      | `false` |
| trueLabel  | 选中的值                              | _string_                  | -      | -       |
| falseLabel | 未选中的值                            | _string_                  | -      | -       |
| disabled   | 是否禁用                              | _boolean_                 | -      | `false` |
| checked    | 选中                                  | _boolean_                 | -      | `false` |

### Checkbox Group Props

| Prop     | 描述     | 类型      | 可选值 | 默认值  |
| -------- | -------- | --------- | ------ | ------- |
| disabled | 是否禁用 | _boolean_ | -      | `false` |

### Checkbox Group Event

| Event  | 描述             |
| ------ | ---------------- |
| change | 选中值改变时触发 |
