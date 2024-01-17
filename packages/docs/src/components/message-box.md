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

## 可用的 CSS 变量

:::details 点击查看

```css
:host {
  --ivy-message-box-box-shadow: var(--ivy-box-shadow);
  --ivy-message-box-bg-color: var(--ivy-color-white);
  --ivy-message-box-text-color: var(--ivy-text-color-regular);
  --ivy-message-box-header-color: var(--ivy-text-color-primary);
  --ivy-message-box-icon-close-color: var(--ivy-text-color-regular);
  --ivy-message-box-icon-close-color-hover: var(--ivy-color-primary);
  --ivy-message-box-border-radius: var(--ivy-border-radius-medium);
  --ivy-message-box-width: 420px;
}
```

:::

## API

### 属性

| 名称                | 说明                   | 类型     | 可选值                       | 默认值                          |
| ------------------- | ---------------------- | -------- | ---------------------------- | ------------------------------- |
| title               | massageBox 的标题      | string   | -                            | -                               |
| type                | 消息类型，用于图标显示 | string   | `success/info/warning/error` | -                               |
| message             | massageBox 的内容      | string   | -                            | -                               |
| callback            | 指定关闭后的回调       | function | -                            | -                               |
| show-close          | 是否显示右上角关闭按钮 | boolean  | -                            | `true`                          |
| show-cancel-button  | 是否显示取消按钮       | boolean  | -                            | false(confirm/prompt 时为 true) |
| show-confirm-button | 是否显示确定按钮       | boolean  | -                            | true                            |
| cancel-button-text  | 取消按钮的文本内容     | string   | -                            | 取消                            |
| confirm-button-text | 确定按钮的文本内容     | string   | -                            | 确定                            |
| show-input          | 是否显示输入框         | boolean  | -                            | false（prompt 方式调用为 true） |
| input-placeholder   | 输入框占位文本         | string   | -                            | ''                              |
| input-type          | 输入框的类型           | string   | -                            | 'text'                          |
| input-value         | 输入框的初始文本       | string   | -                            | ''                              |
| input-pattern       | 输入框的校验表达式     | regexp   | -                            | -                               |
| input-validator     | 输入框的校验函数       | regexp   | -                            | -                               |
| input-error-message | 校验未通过时的提示文本 | string   | -                            | 输入的数据不合法!               |

:::warning 注意
input-validator：应该返回一个 boolean 或者 string， 如果返回的是一个 string 类型，那么该返回值会被赋值给 inputErrorMessage 用于向用户展示错误消息。

input-pattern：优先级比 `input-validator` 低，如果同时出现以 `input-validator` 为准
:::

### 事件

| 名称   | 说明                     | 类型                                     |
| ------ | ------------------------ | ---------------------------------------- |
| change | 固钉状态改变时触发的事件 | ({fixed:boolean})=>void                  |
| scroll | 滚动时触发的事件         | ({fixed:boolean,scrollTop:number})=>void |

<script setup>
import { $ivy } from '@ivy-design/ce'
const showMsgBox = () => {
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
        inputValue: '123',
        inputErrorMessage: '只能输入数字',
        inputPlaceholder: '请输入内容',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: (val)=>{
            return !/^[a-zA-Z0-9]+$/.test(val)
        },
        callback(action,val){
            console.log(action, val)
        }
    })
}
</script>
