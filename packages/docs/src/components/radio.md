# Checkbox 多选框

一组备选项中进行多选

:::warning 注意
`radio` 组件必须搭配 `radioGroup` 组件
:::

## 基础用法

<ivy-radio-group value="1" @beforeChange="beforeChange" @change="change">
<ivy-radio label="1">苹果</ivy-radio>
<ivy-radio label="2">橘子</ivy-radio>
<ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>

```html
<ivy-radio-group value="1" onchange="console.log(this.value)">
  <ivy-radio label="1">苹果</ivy-radio>
  <ivy-radio label="2">橘子</ivy-radio>
  <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>
```

## 禁用 Radio 组件

在 `Radio` 上添加 `disabled` 属性可以禁用组件

<ivy-radio-group  value="1">
  <ivy-radio label="1">苹果</ivy-radio>
  <ivy-radio label="2" disabled>橘子</ivy-radio>
  <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>

```html
<ivy-radio-group disabled value="1">
  <ivy-radio label="1">苹果</ivy-radio>
  <ivy-radio label="2">橘子</ivy-radio>
  <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>
```

## 禁用 RadioGroup 组件

在 `RadioGroup` 上添加 `disabled` 属性可以禁用组件

<ivy-radio-group disabled value="1">
  <ivy-radio label="1">苹果</ivy-radio>
  <ivy-radio label="2">橘子</ivy-radio>
  <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>

```html
<ivy-radio-group disabled value="1">
  <ivy-radio label="1">苹果</ivy-radio>
  <ivy-radio label="2">橘子</ivy-radio>
  <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>
```

## Radio Props

| Prop     | 描述       | 类型      | 可选值 | 默认值  |
| -------- | ---------- | --------- | ------ | ------- |
| label    | radio 的值 | _string_  | -      | -       |
| disabled | 是否禁用   | _boolean_ | -      | `false` |

## Radio Group Props

| Prop     | 描述     | 类型      | 可选值 | 默认值  |
| -------- | -------- | --------- | ------ | ------- |
| value    | 默认值   | _string_  | -      | -       |
| disabled | 是否禁用 | _boolean_ | -      | `false` |

## Radio Group Event

| Event  | 描述             |
| ------ | ---------------- |
| change | 选中值改变时触发 |

<script setup>
const beforeChange = ev => {
    console.log(ev);
    return true
}

const change = ev => {
    console.log(ev)
}

</script>
