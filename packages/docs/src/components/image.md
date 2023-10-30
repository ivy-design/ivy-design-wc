# Image 图片

图片容器，在保留原生 `img` 的特性下，自定义占位、加载失败等

## 基础用法

可通过 `fit` 确定图片如何适应到容器框，同原生 `object-fit`。

<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="fit"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="contain" class="margin-left"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="cover" class="margin-left"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="none" class="margin-left"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="scale-down" class="margin-left"></ivy-image>

```html
<ivy-image
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  style="height: 100px;width: 100px;"
  fit="fit"
></ivy-image>
<ivy-image
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  style="height: 100px;width: 100px;"
  fit="contain"
  class="margin-left"
></ivy-image>
<ivy-image
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  style="height: 100px;width: 100px;"
  fit="cover"
  class="margin-left"
></ivy-image>
<ivy-image
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  style="height: 100px;width: 100px;"
  fit="none"
  class="margin-left"
></ivy-image>
<ivy-image
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
  style="height: 100px;width: 100px;"
  fit="scale-down"
  class="margin-left"
></ivy-image>
```

## 占位内容

可通过 `slot=placeholder` 可自定义占位内容

第一个为默认加载中的占位内容，第二个为自定义加载中的占位内容

<ivy-image lazy src="https://blog.jikun.dev/images/basic/filter.jpg" style="width: 300px;height: 200px;"></ivy-image>
<ivy-image src="https://blog.jikun.dev/images/basic/filter.jpg" style="width: 300px;height: 200px;">
<ivy-icon name="refresh" size="28" spin slot="placeholder"></ivy-icon>
</ivy-image>

```html
<ivy-image
  src="https://blog.jikun.dev/images/basic/filter.jpg"
  style="width: 300px;height: 200px;"
></ivy-image>
<ivy-image
  src="https://blog.jikun.dev/images/basic/filter.jpg"
  style="width: 300px;height: 200px;"
>
  <ivy-icon name="refresh" size="28" spin slot="placeholder"></ivy-icon>
</ivy-image>
```

## 加载失败

可通过 `slot=error` 可自定义加载失败内容

第一个为默认加载失败的显示，第二个为自定义错误信息

<ivy-image style="width: 300px;height: 200px;"></ivy-image>
<ivy-image style="width: 300px;height: 200px;">
<ivy-icon name="picture" size="28" slot="error"></ivy-icon>
</ivy-image>

```html
<ivy-image style="width: 300px;height: 200px;"></ivy-image>
<ivy-image style="width: 300px;height: 200px;">
  <ivy-icon name="picture" size="28" slot="error"></ivy-icon>
</ivy-image>
```

## Props

| 属性名 | 说明                     | 类型      | 可选值                               | 默认值  |
| ------ | ------------------------ | --------- | ------------------------------------ | ------- |
| src    | 图片 url                 | `string`  | -                                    | `-      |
| fit    | 显示方式，同 `objectFit` | `string`  | `fill/contain/cover/none/scale-down` | `fill`  |
| alt    | 图片 alt                 | `string`  | -                                    | -       |
| lazy   | 懒加载                   | `boolean` | -                                    | `false` |

<style scoped>
ivy-image+ivy-image{
    margin-left: 24px;
}
</style>
