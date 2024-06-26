# Table 表格

## 基础用法

<ivy-table id="table">
    <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
    <ivy-table-column label="日期" prop="date" min-width="120px"></ivy-table-column>
    <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>

```html
<ivy-table id="table">
  <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
  <ivy-table-column
    label="日期"
    prop="date"
    min-width="120px"
  ></ivy-table-column>
  <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>
```

## 加载中

通过设置 `loading` 属性来展示加载中的状态

<div style="display:flex;align-items:center;">切换状态：<ivy-switch id="iSwitch" checked></ivy-switch></div>

<ivy-table id="table1" loading loading-text="Loading...">
    <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
    <ivy-table-column label="日期" prop="date" min-width="120px"></ivy-table-column>
    <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>

```html
<div style="display:flex;align-items:center;">
  切换状态：<ivy-switch id="iSwitch" checked></ivy-switch>
</div>
<ivy-table id="table1" loading>
  <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
  <ivy-table-column
    label="日期"
    prop="date"
    min-width="120px"
  ></ivy-table-column>
  <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>
<script setup>
  import { onMounted } from "vue";
  onMounted(() => {
    document.getElementById("iSwitch").addEventListener("change", (ev) => {
      const checked = ev.detail[0];
      if (checked) {
        document.getElementById("table1").setAttribute("loading", "");
      } else {
        document.getElementById("table1").removeAttribute("loading");
      }
    });
  });
</script>
```

## Table Props

| 名称         | 说明             | 类型      | 可选值 | 默认值 |
| ------------ | ---------------- | --------- | ------ | ------ |
| border       | 边框             | `boolean` | -      | -      |
| loading      | 加载状态         | `boolean` | -      | -      |
| loading-text | 加载中的提示文字 | `string`  | -      | -      |

## TableColumn Props

| 名称      | 说明             | 类型   | 可选值 | 默认值 |
| --------- | ---------------- | ------ | ------ | ------ |
| prop      | 数据源中的 key   | String | -      | -      |
| label     | 表格的 title     | String | -      | -      |
| width     | 表格列的宽度     | String | -      | -      |
| min-width | 表格列的最小宽度 | String | -      | -      |

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById('iSwitch').addEventListener('change', ev=>{
        const checked = ev.detail[0];
        if(checked){
            document.getElementById('table1').setAttribute('loading', "")
        }else{
            document.getElementById('table1').removeAttribute('loading')
        }
    })
    const data = [
        {"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},
        {"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},
        {"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路1519 弄"},
        {"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}
    ]
    document.querySelector('#table').setData(data)
    document.querySelector('#table1').setData(data)
})
</script>
