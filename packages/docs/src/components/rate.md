# Rate 评分

## 基础用法

<ivy-rate value="2"></ivy-rate>

```html
<ivy-rate value="2"></ivy-rate>
```

## 只读

通过添加 `disabled` 属性是其处于只读状态

<ivy-rate disabled></ivy-rate>

<ivy-rate value="2" disabled></ivy-rate>

```html
<ivy-rate disabled></ivy-rate> <ivy-rate value="2" disabled></ivy-rate>
```

## 尺寸 size

通过 `size` 可以设置组件尺寸，默认为 `font-size` 大小（20px）。

<ivy-rate value="2"></ivy-rate>
<ivy-rate value="2" size="20px"></ivy-rate>
<ivy-rate value="2" size="28px"></ivy-rate>
<ivy-rate value="2" size="34px"></ivy-rate>

```html
<ivy-rate value="2"></ivy-rate>
<ivy-rate value="2" size="20px"></ivy-rate>
<ivy-rate value="2" size="28px"></ivy-rate>
<ivy-rate value="2" size="34px"></ivy-rate>
```

## 颜色

通过 `active-color` 可以设置图标的颜色。

<ivy-rate value="2"></ivy-rate>
<ivy-rate value="2" active-color="green"></ivy-rate>
<ivy-rate value="2" active-color="red"></ivy-rate>
<ivy-rate value="2" active-color="blue"></ivy-rate>

```html
<ivy-rate value="2"></ivy-rate>
<ivy-rate value="2" active-color="green"></ivy-rate>
<ivy-rate value="2" active-color="red"></ivy-rate>
<ivy-rate value="2" active-color="blue"></ivy-rate>
```

## 自定义事件

通过 `onchange` 事件可以在分值变化后执行操作

<ivy-rate value="2" onchange="alert(`当前的value：${this.value}`)" ></ivy-rate>

```html
<ivy-rate value="2" onchange="alert(`当前的value：${this.value}`)"></ivy-rate>
```

其它的触发方式

```js
<script>
rate.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail);
})
</script>
```

## Rate Props

| 名称         | 说明         | 类型   | 可选值 | 默认值 |
| ------------ | ------------ | ------ | ------ | ------ |
| value        | 评分的值     | String | 1-5    | -      |
| disabled     | 只读         | String | -      | -      |
| size         | 大小         | String | -      | -      |
| color        | 未选中的颜色 | String | -      | -      |
| active-color | 选中的颜色   | String | -      | -      |
