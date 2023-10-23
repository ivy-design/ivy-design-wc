# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

## 基础用法

使用 `shape` 和 `size` 属性来设置 Avatar 的形状和大小

<ivy-space size="custom" gap="24px">
<ivy-avatar content="U" style="--ivy-avatar-size: 28px"></ivy-avatar>
<ivy-avatar content="User"></ivy-avatar>
<ivy-avatar content="User" style="--ivy-avatar-size: 60px"></ivy-avatar>

<ivy-avatar content="U" shape="square" style="--ivy-avatar-size: 28px"></ivy-avatar>
<ivy-avatar content="User" shape="square"></ivy-avatar>
<ivy-avatar content="User" shape="square" style="--ivy-avatar-size: 60px"></ivy-avatar>
</ivy-space>

```html
<ivy-space size="custom" gap="24px">
  <ivy-avatar content="U" style="--ivy-avatar-size: 28px"></ivy-avatar>
  <ivy-avatar content="User"></ivy-avatar>
  <ivy-avatar content="User" style="--ivy-avatar-size: 60px"></ivy-avatar>

  <ivy-avatar
    content="U"
    shape="square"
    style="--ivy-avatar-size: 28px"
  ></ivy-avatar>
  <ivy-avatar content="User" shape="square"></ivy-avatar>
  <ivy-avatar
    content="User"
    shape="square"
    style="--ivy-avatar-size: 60px"
  ></ivy-avatar>
</ivy-space>
```

## 展示类型

支持使用图片，图标或者文字作为 Avatar。

<ivy-space size="custom" gap="24px">
<ivy-avatar content="User"></ivy-avatar>
<ivy-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></ivy-avatar>
<ivy-avatar><ivy-icon name="user" size="24px"></ivy-icon></ivy-avatar>
</ivy-space>

```html
<ivy-space size="custom" gap="24px">
  <ivy-avatar content="User"></ivy-avatar>
  <ivy-avatar
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  ></ivy-avatar>
  <ivy-avatar><ivy-icon name="user" size="24px"></ivy-icon></ivy-avatar>
</ivy-space>
```

## Props

| 属性名  | 描述                                         | 类型   | 可选值                                | 默认值   |
| ------- | -------------------------------------------- | ------ | ------------------------------------- | -------- |
| shape   | 形状                                         | string | `circle/square`                       | `circle` |
| size    | 大小-css 大小都可以                          | string | -                                     | `40px`   |
| content | 显示的文字内容                               | string | -                                     | -        |
| type    | 类型                                         | string | `primary/success/warning/danger/info` | `danger` |
| src     | Avatar 图片的源地址                          | string | —                                     | -        |
| srcset  | 图片 Avatar 的原生 srcset 属性               | string | —                                     | -        |
| alt     | 图片 Avatar 的原生 alt 属性                  | string | —                                     | -        |
| fit     | 当展示类型为图片的时候，设置图片如何适应容器 | string | -                                     | `cover`  |
