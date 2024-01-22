# Input 输入框

## 基础用法

最常见的用法

<ivy-input id="input1" style="width: 224px;" placeholder="请输入"></ivy-input>

```html
<ivy-input style="width: 224px;" placeholder="请输入"></ivy-input>
```

## 禁用状态

通过设置 `disabled` 属性来禁用输入框

<ivy-input disabled style="width: 224px;" placeholder="请输入"></ivy-input>

```html
<ivy-input disabled style="width: 224px;" placeholder="请输入"></ivy-input>
```

## 只读状态

通过设置 `readonly` 属性来禁用输入框

<ivy-input readonly style="width: 224px;" placeholder="请输入"></ivy-input>

```html
<ivy-input readonly style="width: 224px;" placeholder="请输入"></ivy-input>
```

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

<ivy-input  placeholder="请输入" clearable></ivy-input>

```html
<ivy-input placeholder="请输入" clearable></ivy-input>
```

## Props

| 参数        | 说明         | 类型    | 可选值                                         | 默认值 |
| ----------- | ------------ | ------- | ---------------------------------------------- | ------ |
| type        | 类型         | string  | `text/textarea/password/url/email/date/number` | `text` |
| value       | 绑定值       | string  | -                                              | -      |
| placeholder | 占位文本     | string  | -                                              | -      |
| disabled    | 是否禁用     | boolean | -                                              | false  |
| readonly    | 是否只读     | boolean | -                                              | false  |
| autoFocus   | 自动获取焦点 | boolean | -                                              | false  |
| clearable   | 显示清除按钮 | boolean | -                                              | false  |
