# Carousel 轮播图

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

结合使用 `ivy-carousel` 和 `ivy-carousel-item` 标签就得到了一个走马灯。
每一个页面的内容是完全可定制的，把你想要展示的内容放在 `ivy-carousel-item` 标签内。

<ivy-carousel>
    <ivy-carousel-item>1</ivy-carousel-item>
    <ivy-carousel-item>2</ivy-carousel-item>
    <ivy-carousel-item>3</ivy-carousel-item>
    <ivy-carousel-item>4</ivy-carousel-item>
    <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>

```html
<ivy-carousel>
  <ivy-carousel-item>1</ivy-carousel-item>
  <ivy-carousel-item>2</ivy-carousel-item>
  <ivy-carousel-item>3</ivy-carousel-item>
  <ivy-carousel-item>4</ivy-carousel-item>
  <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>
```

## 切换箭头

可以设置切换箭头的显示时机

`arrow` 属性定义了切换箭头的显示时机。 默认情况下，切换箭头只有在鼠标 `hover` 到走马灯上时才会显示。
若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。

<ivy-carousel arrow='always'>
    <ivy-carousel-item>1</ivy-carousel-item>
    <ivy-carousel-item>2</ivy-carousel-item>
    <ivy-carousel-item>3</ivy-carousel-item>
    <ivy-carousel-item>4</ivy-carousel-item>
    <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>

```html
<ivy-carousel arrow="always">
  <ivy-carousel-item>1</ivy-carousel-item>
  <ivy-carousel-item>2</ivy-carousel-item>
  <ivy-carousel-item>3</ivy-carousel-item>
  <ivy-carousel-item>4</ivy-carousel-item>
  <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>
```

## 指示器的触发方式

默认情况下，在鼠标 `hover` 底部的指示器时就会触发切换。 通过设置 `trigger` 属性为 `click`，可以达到点击触发的效果。

<ivy-carousel trigger="click">
    <ivy-carousel-item>1</ivy-carousel-item>
    <ivy-carousel-item>2</ivy-carousel-item>
    <ivy-carousel-item>3</ivy-carousel-item>
    <ivy-carousel-item>4</ivy-carousel-item>
    <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>

```html
<ivy-carousel trigger="click">
  <ivy-carousel-item>1</ivy-carousel-item>
  <ivy-carousel-item>2</ivy-carousel-item>
  <ivy-carousel-item>3</ivy-carousel-item>
  <ivy-carousel-item>4</ivy-carousel-item>
  <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>
```
