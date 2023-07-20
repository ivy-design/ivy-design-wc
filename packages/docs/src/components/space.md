# Space 间距

虽然我们拥有 `Divider` 组件，但很多时候我们需要不是一个被 `Divider` 组件 分割开的页面结构，因此我们会重复的使用很多的 `Divider` 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。

## 基本用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

<ivy-space>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>

```html
<ivy-space>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
```

## 垂直布局

使用 `vertical` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

<ivy-space vertical>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>

```html
<ivy-space vertical>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
```

## 控制间距的大小

通过 size 属性可以控制间隔的大小；间隔使用 gap 实现(注意兼容性)

<div class="demo-block">
<ivy-space size="small">
    <ivy-button>8px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
<br>
<ivy-space size="medium" class="margin-top">
    <ivy-button>默认值</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
<br>
<ivy-space size="large" class="margin-top">
    <ivy-button>24px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

```html
<div class="demo-block">
<ivy-space size="small">
    <ivy-button>8px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
<br>
<ivy-space size="medium" class="margin-top">
    <ivy-button>默认值</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
<br>
<ivy-space size="large" class="margin-top">
    <ivy-button>24px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>
```

## 自定义间距的大小

当 `size` 属性为 `custom` 时可以使用 gap 属性来自定义间隔的大小

<input type="range" value="12" @input="handlerChange" />
<br>
<ivy-space size="custom" :gap="gap">
    <ivy-button>自定义</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>

```html
<input type="range" value="12" @input="handlerChange" />
<br>
<ivy-space size="custom" :gap="gap">
    <ivy-button>8px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
```

## 自动换行

利用 `wrap` 属性控制换行

<ivy-space wrap>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>

```html
<ivy-space wrap>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
```


## API

### Props

| 属性      | 描述                           | 类型      | 可选值                         | 默认值 |
|---------|------------------------------|---------|-----------------------------|-----|
| size    | 间隔的大小                        | string  | `small/medium/large/custom` | -   |
| gap     | 间隔的大小-仅 `size` 为 `custom` 可用 | string  | -                           | -   |
| vertical | 竖向                           | boolean | -                           | -   |
| wrap    | 自动换行                         | boolean | -                           | -   |

<script setup>
import { ref } from 'vue';

const gap = ref('12px');
const handlerChange = ev => {
    const value = ev.target.value;
    gap.value = value + 'px'
}
</script>
