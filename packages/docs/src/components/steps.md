# steps 步骤条

## 基础用法

只设置时间和描述

<ivy-steps id="steps1">
    <ivy-step  header="验证手机号"></ivy-step>
    <ivy-step header="修改密码"></ivy-step>
    <ivy-step header="完成"></ivy-step>
</ivy-steps>

<ivy-button @click="next">Next</ivy-button >

```html
<ivy-steps>
  <ivy-step header="验证手机号"></ivy-step>
  <ivy-step header="修改密码"></ivy-step>
  <ivy-step header="完成"></ivy-step>
</ivy-steps>
```

## 增加描述文字

可以在标题下方增加描述性文字

<ivy-steps current="2">
    <ivy-step  header="验证手机号">验证手机号是否正确</ivy-step>
    <ivy-step header="修改密码">设置新密码</ivy-step>
    <ivy-step header="完成">修改完成</ivy-step>
</ivy-steps>

```html
<ivy-steps current="2">
  <ivy-step header="验证手机号">验证手机号是否正确</ivy-step>
  <ivy-step header="修改密码">设置新密码</ivy-step>
  <ivy-step header="完成">修改完成</ivy-step>
</ivy-steps>
```

<script setup>
import { ref } from 'vue';
const active = ref('0');

const next = ()=>{
    console.log(active.value);
    const int = parseInt(active.value);
    const el = document.querySelector('#steps1');
    if(int < 3) {
        active.value = String(int + 1);
    } else {
        active.value = "0";
    }
    // el.current = active.value
    el.setAttribute('current', active.value);
}
</script>
