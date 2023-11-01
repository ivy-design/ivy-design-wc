# Message 全局提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 一般用法

从顶部出现，3 秒后自动消失。

<ivy-button type="primary" id="btn">显示 Message</ivy-button>

## 不同类型

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为 info。 此时正文内容以 message 的值传入。
同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。

<ivy-button type="success" id="btn-s">显示 Message</ivy-button>
<ivy-button type="warning" id="btn-w">显示 Message</ivy-button>
<ivy-button type="danger" id="btn-e">显示 Message</ivy-button>
<ivy-button type="info" id="btn-i">显示 Message</ivy-button>

<script setup>
import { onMounted } from 'vue';
import { message } from '@ivy-design/ce'
onMounted(()=>{
    console.log(message)
    document.getElementById('btn').addEventListener('click', ()=>{
        message({type: 'success',content: '这是测试内容'})
    })
    document.getElementById('btn-s').addEventListener('click', ()=>{
        message.success('这是测试内容')
    })
    document.getElementById('btn-w').addEventListener('click', ()=>{
        message.warning('这是测试内容')
    })
    document.getElementById('btn-e').addEventListener('click', ()=>{
        message.error('这是测试内容')
    })
    document.getElementById('btn-i').addEventListener('click', ()=>{
        message.info('这是测试内容')
    })
})
</script>
