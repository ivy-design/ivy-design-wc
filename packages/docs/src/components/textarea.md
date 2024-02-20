# Textarea 文本域

## 基础用法

<ivy-textarea placeholder="请输入" maxlength="200"></ivy-textarea>

```html
<ivy-textarea placeholder="请输入"></ivy-textarea>
```

## 只读

<ivy-textarea placeholder="请输入" readonly></ivy-textarea>

```html
<ivy-textarea placeholder="请输入" readonly></ivy-textarea>
```

## 禁用

<ivy-textarea placeholder="请输入" disabled></ivy-textarea>

```html
<ivy-textarea placeholder="请输入" disabled></ivy-textarea>
```

## 显示字数统计

<ivy-textarea placeholder="请输入" maxlength="200" show-word-limit></ivy-textarea>

```html
<ivy-textarea
  placeholder="请输入"
  maxlength="200"
  show-word-limit
></ivy-textarea>
```

## Props

| Prop            | 描述            | 类型      | 可选值      | 默认值  |
| --------------- | --------------- | --------- | ----------- | ------- |
| placeholder     | 提示语          | `string`  | -           | -       |
| readonly        | 只读            | `boolean` | -           | `false` |
| disabled        | 是否禁用        | `boolean` | -           | `false` |
| show-word-limit | 字数统计        | `boolean` | -           | `false` |
| maxlength       | 最大长度        | `number`  | -           | -       |
| minlength       | 最小长度        | `number`  | -           | -       |
| autocomplete    | 自动填充        | `string`  | -           | -       |
| spellcheck      | 原生 spellcheck | `string`  | -           | `auto`  |
| wrap            | 原生 wrap       | `string`  | `hard/soft` | `soft`  |
| rows            | 行数            | `number`  | -           | -       |
| cols            | 列数            | `number`  | -           | -       |
