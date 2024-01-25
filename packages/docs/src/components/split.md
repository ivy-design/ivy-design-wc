# Split 分割面板

可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。

## 左右分割

左右分割用法。

<ivy-split style="height: 100px;" value="200" unit="px">
    <div slot="start">
        <p>左侧面板</p>
    </div>
    <div slot="end">右侧面板</div>
</ivy-split>

```html
<ivy-split style="height: 100px;" value="200">
  <div slot="start">
    <p>左侧面板</p>
  </div>
  <div slot="end">右侧面板</div>
</ivy-split>
```

## 上下分割

通过设置 `vertical` 属性来实现上下分割用法。

:::danger 警告
上下分割必须给容器设置一个固定高度
:::

<ivy-split vertical style="height: 500px">
    <div slot="start">顶部面板</div>
    <div slot="end">底部面板</div>
</ivy-split>

```html
<ivy-split vertical>
  <div slot="start">顶部面板</div>
  <div slot="end">底部面板</div>
</ivy-split>
```

## 嵌套使用

上下分割用法。

:::danger 警告
已知限制：<br>
只能嵌套一次<br>
且横向的里面只能嵌套竖向的/竖向的只能嵌套横向的
:::
<ivy-split value="200" unit="px">

<div slot="start">
<p>左侧面板</p>
</div>
<div slot="end">
<ivy-split vertical style="height: 500px">
<div slot="start">顶部面板</div>
<div slot="end">底部面板</div>
</ivy-split>
</div>
</ivy-split>

```html
<ivy-split value="200" unit="px">
  <div slot="start">
    <p>左侧面板</p>
  </div>
  <div slot="end">
    <ivy-split vertical style="height: 500px">
      <div slot="start">顶部面板</div>
      <div slot="end">底部面板</div>
    </ivy-split>
  </div>
</ivy-split>
```

## 可用的 css 变量

:::details 点击展开

```css
:host {
  --ivy-split-border-color: var(--ivy-border-color, #dcdfe6);
}
```

:::

### Props

| 属性        | 描述                | 类型    | 可选值 | 默认值                       |
| ----------- | ------------------- | ------- | ------ | ---------------------------- |
| value       | slot="start" 的大小 | number  | -      | 50                           |
| unit        | value 的单位        | string  | `px/%` | %                            |
| min         | slot 的最小值       | string  | -      | 40px                         |
| max         | slot 的最大值       | string  | -      | 容器大小 - triggerSize - min |
| vertical    | 竖向                | boolean | -      | false                        |
| triggerSize | 分割线的大小        | string  | -      | 4px                          |

## Slots

| 插槽名 | 描述              |
| ------ | ----------------- |
| start  | 左边面板/顶部面板 |
| end    | 右边面板/底部面板 |

## Events

| 事件名     | 描述     | 类型                                  |
| ---------- | -------- | ------------------------------------- |
| move-start | 拖拽开始 | Event                                 |
| moving     | 拖拽中   | Event-event.detail中为start部分的大小 |
| move-end   | 拖拽结束 | Event                                 |

<style>
.ml-40{
    margin-left: 40px;
}
</style>
