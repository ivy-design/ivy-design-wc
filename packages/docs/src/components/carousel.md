# Carousel 轮播图

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

结合使用 `ivy-carousel` 和 `ivy-carousel-item` 标签就得到了一个走马灯。
每一个页面的内容是完全可定制的，把你想要展示的内容放在 `ivy-carousel-item` 标签内。
默认情况下，在鼠标 `hover` 底部的指示器时就会触发切换。 通过设置 `trigger` 属性为 `click`，可以达到点击触发的效果。

<ivy-carousel>
    <ivy-carousel-item>1</ivy-carousel-item>
    <ivy-carousel-item>2</ivy-carousel-item>
    <ivy-carousel-item>3</ivy-carousel-item>
    <ivy-carousel-item>4</ivy-carousel-item>
    <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>

<ivy-carousel trigger="click">
    <ivy-carousel-item>1</ivy-carousel-item>
    <ivy-carousel-item>2</ivy-carousel-item>
    <ivy-carousel-item>3</ivy-carousel-item>
    <ivy-carousel-item>4</ivy-carousel-item>
    <ivy-carousel-item>5</ivy-carousel-item>
</ivy-carousel>
