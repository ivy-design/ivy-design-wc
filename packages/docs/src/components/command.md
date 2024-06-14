# Command 命令

## 基础用法

<ivy-command @command="handleCommand">
<ivy-command-search></ivy-command-search>
<ivy-command-list>
<ivy-command-group label="建议">
<ivy-command-item label="日历" shortcut-keys="Ctrl + A"></ivy-command-item>
<ivy-command-item label="表情" shortcut-keys="Alt + A"></ivy-command-item>
<ivy-command-item label="计算器"></ivy-command-item>
</ivy-command-group>
<ivy-command-separator></ivy-command-separator>
<ivy-command-group label="设置">
<ivy-command-item label="个人资料" shortcut-keys="Ctrl + A"></ivy-command-item>
<ivy-command-item label="账单" shortcut-keys="Alt + A"></ivy-command-item>
<ivy-command-item label="设置"></ivy-command-item>
<ivy-command-item label="日期"></ivy-command-item>
</ivy-command-group>
<ivy-command-separator></ivy-command-separator>
<ivy-command-item label="g"></ivy-command-item>
<ivy-command-item label="h"></ivy-command-item>
<ivy-command-item label="i"></ivy-command-item>
<ivy-command-item label="j"></ivy-command-item>
</ivy-command-list>
</ivy-command>

```html
<ivy-command>
  <ivy-command-search></ivy-command-search>
  <ivy-command-list>
    <ivy-command-group label="建议">
      <ivy-command-item
        label="日历"
        shortcut-keys="Ctrl + A"
      ></ivy-command-item>
      <ivy-command-item label="表情" shortcut-keys="Alt + A"></ivy-command-item>
      <ivy-command-item label="计算器"></ivy-command-item>
    </ivy-command-group>
    <ivy-command-separator></ivy-command-separator>
    <ivy-command-group label="设置">
      <ivy-command-item
        label="个人资料"
        shortcut-keys="Ctrl + A"
      ></ivy-command-item>
      <ivy-command-item label="账单" shortcut-keys="Alt + A"></ivy-command-item>
      <ivy-command-item label="设置"></ivy-command-item>
      <ivy-command-item label="日期"></ivy-command-item>
    </ivy-command-group>
    <ivy-command-separator></ivy-command-separator>
    <ivy-command-item label="g"></ivy-command-item>
    <ivy-command-item label="h"></ivy-command-item>
    <ivy-command-item label="i"></ivy-command-item>
    <ivy-command-item label="j"></ivy-command-item>
  </ivy-command-list>
</ivy-command>
```

## 弹窗展示

<ivy-button @click="openDialog">点击打开命令窗口</ivy-button>

<ivy-command-dialog id="dialog">
<ivy-command @command="handleCommand">
    <ivy-command-search></ivy-command-search>
    <ivy-command-list>
        <ivy-command-group label="建议">
            <ivy-command-item label="日历" shortcut-keys="Ctrl + A"></ivy-command-item>
            <ivy-command-item label="表情" shortcut-keys="Alt + A"></ivy-command-item>
            <ivy-command-item label="计算器"></ivy-command-item>
        </ivy-command-group>
        <ivy-command-separator></ivy-command-separator>
        <ivy-command-group label="设置">
            <ivy-command-item label="个人资料" shortcut-keys="Ctrl + A"></ivy-command-item>
            <ivy-command-item label="账单" shortcut-keys="Alt + A"></ivy-command-item>
            <ivy-command-item label="设置"></ivy-command-item>
        </ivy-command-group>
        <ivy-command-separator></ivy-command-separator>
        <ivy-command-item label="g"></ivy-command-item>
        <ivy-command-item label="h"></ivy-command-item>
        <ivy-command-item label="i"></ivy-command-item>
        <ivy-command-item label="j"></ivy-command-item>
    </ivy-command-list>
</ivy-command>
</ivy-command-dialog>

```html
<ivy-button @click="openDialog">点击打开命令窗口</ivy-button>

<ivy-command-dialog id="dialog">
  <ivy-command>
    <ivy-command-search></ivy-command-search>
    <ivy-command-list>
      <ivy-command-group label="建议">
        <ivy-command-item
          label="日历"
          shortcut-keys="Ctrl + A"
        ></ivy-command-item>
        <ivy-command-item
          label="表情"
          shortcut-keys="Alt + A"
        ></ivy-command-item>
        <ivy-command-item label="计算器"></ivy-command-item>
      </ivy-command-group>
      <ivy-command-separator></ivy-command-separator>
      <ivy-command-group label="设置">
        <ivy-command-item
          label="个人资料"
          shortcut-keys="Ctrl + A"
        ></ivy-command-item>
        <ivy-command-item
          label="账单"
          shortcut-keys="Alt + A"
        ></ivy-command-item>
        <ivy-command-item label="设置"></ivy-command-item>
      </ivy-command-group>
      <ivy-command-separator></ivy-command-separator>
      <ivy-command-item label="g"></ivy-command-item>
      <ivy-command-item label="h"></ivy-command-item>
      <ivy-command-item label="i"></ivy-command-item>
      <ivy-command-item label="j"></ivy-command-item>
    </ivy-command-list>
  </ivy-command>
</ivy-command-dialog>
```

```js
<script setup>
  const openDialog = () => {document.querySelector("#dialog").open()}
</script>
```

## 绑定事件

`ivy-command-item` 被点击时会触发 `ivy-command` 的 `command` 事件

<ivy-button @click="openDialog">点击打开命令窗口</ivy-button>

<ivy-command-dialog id="dialog1">
<ivy-command @command="handleCommand">
    <ivy-command-search></ivy-command-search>
    <ivy-command-list>
        <ivy-command-group label="建议">
            <ivy-command-item label="日历" shortcut-keys="Ctrl + A"></ivy-command-item>
            <ivy-command-item label="表情" shortcut-keys="Alt + A"></ivy-command-item>
            <ivy-command-item label="计算器"></ivy-command-item>
        </ivy-command-group>
        <ivy-command-separator></ivy-command-separator>
        <ivy-command-group label="设置">
            <ivy-command-item label="个人资料" shortcut-keys="Ctrl + A"></ivy-command-item>
            <ivy-command-item label="账单" shortcut-keys="Alt + A"></ivy-command-item>
            <ivy-command-item label="设置"></ivy-command-item>
        </ivy-command-group>
        <ivy-command-separator></ivy-command-separator>
        <ivy-command-item label="g"></ivy-command-item>
        <ivy-command-item label="h"></ivy-command-item>
        <ivy-command-item label="i"></ivy-command-item>
        <ivy-command-item label="j"></ivy-command-item>
    </ivy-command-list>
</ivy-command>
</ivy-command-dialog>

```html
<ivy-button @click="openDialog">点击打开命令窗口</ivy-button>

<ivy-command-dialog id="dialog1">
  <ivy-command @command="handleCommand">
    <ivy-command-search></ivy-command-search>
    <ivy-command-list>
      <ivy-command-group label="建议">
        <ivy-command-item
          label="日历"
          shortcut-keys="Ctrl + A"
        ></ivy-command-item>
        <ivy-command-item
          label="表情"
          shortcut-keys="Alt + A"
        ></ivy-command-item>
        <ivy-command-item label="计算器"></ivy-command-item>
      </ivy-command-group>
      <ivy-command-separator></ivy-command-separator>
      <ivy-command-group label="设置">
        <ivy-command-item
          label="个人资料"
          shortcut-keys="Ctrl + A"
        ></ivy-command-item>
        <ivy-command-item
          label="账单"
          shortcut-keys="Alt + A"
        ></ivy-command-item>
        <ivy-command-item label="设置"></ivy-command-item>
      </ivy-command-group>
      <ivy-command-separator></ivy-command-separator>
      <ivy-command-item label="g"></ivy-command-item>
      <ivy-command-item label="h"></ivy-command-item>
      <ivy-command-item label="i"></ivy-command-item>
      <ivy-command-item label="j"></ivy-command-item>
    </ivy-command-list>
  </ivy-command>
</ivy-command-dialog>
```

```js
<script setup>
import { message } from '@ivy-design/ce'
const openDialog1 = () => {
    document.querySelector("#dialog1").open()
}
const handleCommand = (ev) => {
    const val = ev.detail
    console.log('触发：', val)
    message.info(`你点击了：${val}项`)
}
</script>
```

## Command Event

| 事件名  | 说明                          | 参数                          |
| ------- | ----------------------------- | ----------------------------- |
| command | `ivy-command-item` 点击时触发 | `function(label:string):void` |

## CommandDialog Method

| 方法名 | 说明     | 类型       |
| ------ | -------- | ---------- |
| open   | 显示弹窗 | `function` |

## CommandGroup Props

| Prop  | 描述       | 类型     | 可选值 | 默认值 |
| ----- | ---------- | -------- | ------ | ------ |
| label | 分组的标题 | `string` | -      | -      |

## CommandItem Props

| Prop          | 描述   | 类型     | 可选值 | 默认值 |
| ------------- | ------ | -------- | ------ | ------ |
| label         | 名字   | `string` | -      | -      |
| shortcut-keys | 快捷键 | `string` | -      | -      |

## CommandItem Slots

| Slot | 描述                 |
| ---- | -------------------- |
| -    | 名字-同 `label` 属性 |
| icon | 图标                 |

<script setup>
import { message } from '@ivy-design/ce'
const openDialog = () => {
    document.querySelector("#dialog").open()
}
const openDialog1 = () => {
    document.querySelector("#dialog1").open()
}
const handleCommand = (ev) => {
    const val = ev.detail
    console.log('触发：', val)
    message.info(`你点击了：${val}项`)
}
</script>
