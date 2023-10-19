# Message 全局提示

## 一般用法

<ivy-button type="primary" id="btn">显示 Message</ivy-button>

<script setup>
import { onMounted } from 'vue';
import { message } from '@ivy-design/wc'
onMounted(()=>{
    console.log(message)
    document.getElementById('btn').addEventListener('click', ()=>{
        message({type: 'success',content: '这是测试内容'})
    })
})
</script>
