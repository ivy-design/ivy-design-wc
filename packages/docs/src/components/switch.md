# Switch 开关

## 基础用法

通过`checked`设置是否开启

<ivy-switch checked></ivy-switch>

```html
<ivy-switch checked></ivy-switch>
```

## 禁止点击

通过设置 `disabled` 属性来禁止点击

<ivy-switch disabled></ivy-switch>

<ivy-switch checked disabled></ivy-switch>

```html
<ivy-switch disabled></ivy-switch>

<ivy-switch checked disabled></ivy-switch>
```

## change 事件

通过判断 `switch` 组件是否拥有 `checked` 属性来判断是否被选中

<ivy-switch checked id="switchChange"></ivy-switch>

```html
<ivy-switch checked id="switchChange"></ivy-switch>
```

## 自定义颜色

通过设置 `--ivy-switch-on-color` 和 `--ivy-switch-off-color` 变量来自定义颜色

<ivy-switch style="--ivy-switch-on-color: #67c23a; --ivy-switch-off-color: #f56c6c;"></ivy-switch>

```html
<ivy-switch
    style="--ivy-switch-on-color: #67c23a; --ivy-switch-off-color: #f56c6c;"></ivy-switch>
```

## 可用的 CSS 变量

:::details 点击查看代码

```css
:host {
    --ivy-switch-on-color: var(--ivy-color-primary, #409eff);
    --ivy-switch-off-color: var(--ivy-border-color, #dcdfe6);
}
```

:::

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Props

| 参数     | 说明     | 类型    | 可选值 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| checked  | 是否选中 | boolean | —      | false  |
| disabled | 是否禁用 | boolean | —      | false  |

### Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 开关状态发生变化后调用 | checked  |

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    document.getElementById('switchChange').addEventListener('change', ev=>{
        console.log(ev.detail)
    })
})

</script>
