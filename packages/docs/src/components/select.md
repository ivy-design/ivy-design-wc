# Select 下拉选择器

## 常规用法

<button @click="handlerClick">获取 select 选中的值</button>

<ivy-select>
    <ivy-option value="1" label="苹果"></ivy-option>
    <ivy-option value="2" label="香蕉"></ivy-option>
    <ivy-option value="3" label="橘子"></ivy-option>
    <ivy-option value="4" label="芒果"></ivy-option>
    <ivy-option value="5" label="火龙果"></ivy-option>
    <ivy-option value="6" label="菠萝"></ivy-option>
    <ivy-option value="7" label="哈密瓜"></ivy-option>
    <ivy-option value="8" label="桃子"></ivy-option>
    <ivy-option value="9" label="梨子"></ivy-option>
    <ivy-option value="10" label="栗子"></ivy-option>
    <ivy-option value="11" label="李子"></ivy-option>
</ivy-select>

```html
<ivy-select>
  <ivy-option value="1" label="苹果"></ivy-option>
  <ivy-option value="2" label="香蕉"></ivy-option>
  <ivy-option value="3" label="橘子"></ivy-option>
  <ivy-option value="4" label="芒果"></ivy-option>
</ivy-select>
```

## 有默认值

<ivy-select value="2" ref="test">
    <ivy-option value="1" label="苹果"></ivy-option>
    <ivy-option value="2" label="香蕉"></ivy-option>
    <ivy-option value="3" label="橘子"></ivy-option>
    <ivy-option value="4" label="芒果"></ivy-option>
</ivy-select>

```html
<ivy-select>
  <ivy-option value="1" label="苹果"></ivy-option>
  <ivy-option value="2" label="香蕉"></ivy-option>
  <ivy-option value="3" label="橘子"></ivy-option>
  <ivy-option value="4" label="芒果"></ivy-option>
</ivy-select>
```

## 禁用选项

通过给 `select` 设置 `disabled` 属性来禁用下拉框

<ivy-select disabled>
    <ivy-option value="1" label="苹果"></ivy-option>
    <ivy-option value="2" label="香蕉"></ivy-option>
    <ivy-option value="3" label="橘子"></ivy-option>
    <ivy-option value="4" label="芒果"></ivy-option>
</ivy-select>

## 禁用某一个选项

通过给 `option` 设置 `disabled` 属性来禁用其中一项

<ivy-select>
    <ivy-option value="1" label="苹果" disabled></ivy-option>
    <ivy-option value="2" label="香蕉"></ivy-option>
    <ivy-option value="3" label="橘子"></ivy-option>
    <ivy-option value="4" label="芒果"></ivy-option>
</ivy-select>

## Select Props

| 参数        | 说明     | 类型    | 默认值 |
| ----------- | -------- | ------- | ------ |
| value       | 选中的值 | string  | -      |
| disabled    | 是否禁用 | boolean | false  |
| placeholder | 占位符   | string  | -      |

## Option Props

| 参数     | 说明       | 类型    | 默认值 |
| -------- | ---------- | ------- | ------ |
| value    | 选项的值   | string  | -      |
| label    | 选项的标签 | string  | -      |
| disabled | 是否禁用   | boolean | false  |
