# Split 分割面板

可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。

## 左右分割

左右分割用法。

<ivy-split style="height: 100px;" value="200px">
    <div slot="start">
        <p>左侧面板</p>
    </div>
    <div slot="end">右侧面板</div>
</ivy-split>

```html
<ivy-split style="height: 100px;">
  <div slot="start">
    <p>左侧面板</p>
  </div>
  <div slot="end">右侧面板</div>
</ivy-split>
```

## 上下分割

上下分割用法。

<ivy-split vertical>
    <div slot="start">顶部面板</div>
    <div slot="end">底部面板</div>
</ivy-split>

```html
<ivy-split vertical>
  <div slot="start">顶部面板</div>
  <div slot="end">底部面板</div>
</ivy-split>
```

<style>
.ml-40{
    margin-left: 40px;
}
</style>
