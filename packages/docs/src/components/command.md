# Command 命令

## 基础用法

<ivy-command>
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

## 弹窗展示

<ivy-button @click="openDialog">点击打开命令窗口</ivy-button>

<ivy-command-dialog id="dialog">
<ivy-command>
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

<script setup>
const openDialog = () => {
    document.querySelector("#dialog").open()
}
</script>
