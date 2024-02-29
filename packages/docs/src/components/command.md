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
<ivy-command @command="handleCommand">
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

```js
<script setup>
import { message } from '@ivy-design/ce'
const handleCommand = (ev) => {
    const val = ev.detail
    console.log('触发：', val)
    message.info(`你点击了：${val}项`)
}
</script>
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
const openDialog = () => {
    document.querySelector("#dialog").open()
}
const handleCommand = (ev) => {
    const val = ev.detail
    console.log('触发：', val)
    message.info(`你点击了：${val}项`)
}
</script>
```

<script setup>
import { message } from '@ivy-design/ce'
const openDialog = () => {
    document.querySelector("#dialog").open()
}
const handleCommand = (ev) => {
    const val = ev.detail
    console.log('触发：', val)
    message.info(`你点击了：${val}项`)
}
</script>
