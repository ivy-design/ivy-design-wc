# Modal 对话框

## 基础用法

通过设置 `open` 属性来显示 Dialog，通过 `close` 事件来监听 Dialog 关闭事件。

<ivy-button type="primary" @click="showDialog">显示 Dialog</ivy-button>

<ivy-dialog id="modal1" @close="closed" header="Dialog 标题">
<div>这是 Dialog 的内容部分<br>这是 Dialog 的内容部分<br>这是 Dialog 的内容部分<br></div>
</ivy-dialog>

```vue
<template>
    <ivy-button type="primary" @click="showDialog">显示 Dialog</ivy-button>

    <ivy-dialog id="modal1" @close="closed" header="Dialog 标题">
        <div>
            这是 Dialog 的内容部分<br />这是 Dialog 的内容部分<br />这是 Dialog
            的内容部分<br />
        </div>
    </ivy-dialog>
</template>
<script setup>
const showDialog = () => {
    document.getElementById("modal1").open = true;
};
const closed = () => {
    console.log("关闭了Modal");
};
</script>
```

## 禁用遮罩层

通过配置 `show-mask` 为 `false` 来禁止点击遮罩层关闭 Dialog。

<ivy-button type="primary" @click="showDialog2">显示 Dialog</ivy-button>

<ivy-dialog id="modal2" @close="closed" show-mask="false">
<span slot="header">Dialog 标题</span>
<div>这是 Dialog 的内容部分<br>这是 Dialog 的内容部分<br>这是 Dialog 的内容部分<br></div>
</ivy-dialog>

```vue
<template>
    <ivy-button type="primary" @click="showDialog2">显示 Dialog</ivy-button>

    <ivy-dialog id="modal2" @close="closed" show-mask="false">
        <span slot="header">Dialog 标题</span>
        <div>
            这是 Dialog 的内容部分<br />这是 Dialog 的内容部分<br />这是 Dialog
            的内容部分<br />
        </div>
    </ivy-dialog>
</template>
<script setup>
const showDialog2 = () => {
    document.getElementById("modal2").open = true;
};
const closed = () => {
    console.log("关闭了Modal");
};
</script>
```

## 禁用遮罩层关闭

通过配置 `mask-closable` 为 `false` 来禁止点击遮罩层关闭 Dialog。

<ivy-button type="primary" @click="showDialog3">显示 Dialog</ivy-button>

<ivy-dialog id="modal3" @close="closed" mask-closable="false">
<span slot="header">Dialog 标题</span>
<div>这是 Dialog 的内容部分<br>这是 Dialog 的内容部分<br>这是 Dialog 的内容部分<br></div>
</ivy-dialog>

```vue
<template>
    <ivy-button type="primary" @click="showDialog3">显示 Dialog</ivy-button>

    <ivy-dialog id="modal3" @close="closed" mask-closable="false">
        <span slot="header">Dialog 标题</span>
        <div>
            这是 Dialog 的内容部分<br />这是 Dialog 的内容部分<br />这是 Dialog
            的内容部分<br />
        </div>
    </ivy-dialog>
</template>
<script setup>
const showDialog2 = () => {
    document.getElementById("modal3").open = true;
};
const closed = () => {
    console.log("关闭了Modal");
};
</script>
```

## 可用的 CSS 变量

:::details 点击查看

```css
:host {
    --ivy-dialog-header-padding: 16px;
    --ivy-dialog-body-padding: 16px;
    --ivy-dialog-footer-padding: 16px;
    --ivy-dialog-width: 500px;
    --ivy-dialog-top: 14vh;
}
```

:::

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Props

| Prop          | 描述                          | 类型    | 可选值 | 默认值 |
| ------------- | ----------------------------- | ------- | ------ | ------ |
| open          | 是否显示 Dialog               | Boolean | -      | false  |
| header        | Dialog 标题                   | String  | -      | -      |
| show-mask     | 是否显示遮罩层                | Boolean | -      | true   |
| mask-closable | 是否允许点击遮罩层关闭 Dialog | Boolean | -      | true   |

### Events

| 事件名 | 描述                                                      | 回调参数       |
| ------ | --------------------------------------------------------- | -------------- |
| sure   | 点击确认按钮时触发                                        | -              |
| close  | 点击关闭/取消时触发，可以通过回调参数判断是那个按钮触发的 | `close/cancel` |
| change | Dialog 打开/关闭时出发                                    | `true/false`   |

<script setup>
import { onMounted } from 'vue';
function sure(ev){
    console.log(ev)
}
onMounted(()=>{
    document.getElementById('modal1').addEventListener('sure', ev=>{
        console.log(ev)
    });
    document.getElementById('modal2').addEventListener('change', ev=>{
        console.log(ev)
    })
});

const showDialog = ()=>{
    document.getElementById('modal1').open = true
};

const showDialog2 = ()=>{
    document.getElementById('modal2').open = true
};

const showDialog3 = ()=>{
    document.getElementById('modal3').open = true
};

const closed = ()=>{
    console.log('关闭了Modal')
}

</script>
