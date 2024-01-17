# MessageBox 消息弹出框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

:::tip 提示
从设计上来说，MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 Dialog。
:::

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用 MessageBox.alert 方法以打开 `alert` 框。 它模拟了系统的 `alert`

<ivy-button type="primary" @click="showMsgBox"> 打开一个 Alert 消息框 </ivy-button>

## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用 ElMessageBox.confirm 方法以打开 confirm 框。它模拟了系统的 confirm。
Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。
type 字段表明消息类型，可以为success，error，info和 warning，无效的设置将会被忽略。
需要注意的是，第二个参数 title 必须定义为 String 类型，如果是 Object，会被当做为 options使用。 在这里我们返回了一个 Promise 来处理后续响应。

<ivy-button type="primary" @click="showConfirmBox"> 打开一个 Confirm 消息框 </ivy-button>

## 提交内容

当需要用户输入内容时，可以使用 Prompt 类型的消息框。

调用 ElMessageBox.prompt 方法以打开 prompt 框。它模拟了系统的 prompt。
可以用 inputPattern 字段自己规定匹配模式， 使用 inputValidator 来指定验证方法，它应该返回 Boolean 或 String。
返回 false 或 String 表示验证失败， 返回的字符串将用作 inputErrorMessage，用来提示用户错误原因。
此外，可以用 inputPlaceholder 字段来定义输入框的占位符。

<ivy-button type="primary" @click="showPromptBox"> 打开一个 Prompt 消息框 </ivy-button>

## API

### 属性

| 名称     | 说明     | 类型   | 可选值          | 默认值 |
| -------- | -------- | ------ | --------------- | ------ |
| offset   | 偏移距离 | number | -               | `0`    |
| position | 固钉位置 | string | `top \| bottom` | `top`  |
| z-index  | z-index  | number | -               | `100`  |

### 事件

| 名称   | 说明                     | 类型                                     |
| ------ | ------------------------ | ---------------------------------------- |
| change | 固钉状态改变时触发的事件 | ({fixed:boolean})=>void                  |
| scroll | 滚动时触发的事件         | ({fixed:boolean,scrollTop:number})=>void |

<script setup>
import { $ivy } from '@ivy-design/ce'
const showMsgBox = () => {
    console.log('click', $ivy)
    $ivy.msgBox({
        title: '提示',
        message: '这是一条提示消息',
    })
}

const showConfirmBox = () => {
    $ivy.msgBox.confirm('你确定要删除这条信息吗？', "提示", {
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(() => {
        console.log('confirm')
    }).catch(() => {
        console.log('cancel')
    })
}

const showPromptBox = () => {
    $ivy.msgBox.prompt('请输入内容', "提示", {
        inputPattern: /^[a-zA-Z0-9]+$/,
        inputErrorMessage: '只能输入数字',
        inputPlaceholder: '请输入内容',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: (val)=>{
            return !/^[a-zA-Z0-9]+$/.test(val)
        }
    }).then((value) => {
        console.log('confirm', value)
    }).catch(() => {
        console.log('cancel')
    })
}
</script>
