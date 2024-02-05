# ContentMenu 右键菜单

## 基础用法

使用 `contextmenu` 标签来生成自定义右键菜单的区域，带有 `slot='meu'` 的为菜单项
添加 `data-command` 属性可以使用预设样式（公两种 `item|line`,分别代表菜单项和分割线）
菜单项 `command` 属性的值会传递到自定义事件 `command` 的 `ev.detail` 上。

示例如下：

<ivy-contextmenu @command="menuClick" class="menu-wrap">

<div>这里是显示右键菜单的区域</div>
<p>这里是显示右键菜单的区域</p>
<p>这里是显示右键菜单的区域</p>
<p>这里是显示右键菜单的区域</p>
<p>这里是显示右键菜单的区域</p>
<p>这里是显示右键菜单的区域</p>
<p>这里是显示右键菜单的区域</p>
<p>这里是显示右键菜单的区域</p>
<div>这里是显示右键菜单的区域</div>

<div slot="menu" data-command="item" command="copy">复制</div>
<div slot="menu" data-command="item" command="cute">剪切</div>
<div slot="menu" data-command="item" command="paste">粘贴</div>
<div slot="menu" data-command="line"></div>
<div slot="menu" data-command="item" command="print">打印</div>
<div slot="menu" data-command="item" command="saveAs">另存为</div>
<div slot="menu" data-command="item" command="translate">翻译</div>
<div slot="menu" data-command="item" command="snip">截图</div>
</ivy-contextmenu>

```html
<ivy-contextmenu @command="menuClick">
  <div>这里是显示右键菜单的区域</div>
  <p>这里是显示右键菜单的区域</p>
  <p>这里是显示右键菜单的区域</p>
  <p>这里是显示右键菜单的区域</p>
  <p>这里是显示右键菜单的区域</p>
  <p>这里是显示右键菜单的区域</p>
  <p>这里是显示右键菜单的区域</p>
  <p>这里是显示右键菜单的区域</p>
  <div>这里是显示右键菜单的区域</div>

  <div slot="menu" data-command="item" command="copy">复制</div>
  <div slot="menu" data-command="item" command="cute">剪切</div>
  <div slot="menu" data-command="item" command="paste">粘贴</div>
  <div slot="menu" data-command="line"></div>
  <div slot="menu" data-command="item" command="print">打印</div>
  <div slot="menu" data-command="item" command="saveAs">另存为</div>
  <div slot="menu" data-command="item" command="translate">翻译</div>
  <div slot="menu" data-command="item" command="snip">截图</div>
</ivy-contextmenu>
<script setup>
  import { message } from "@ivy-design/ce";
  const menuClick = (ev) => {
    message.success(`点击了菜单：${ev.detail}`);
  };
</script>
```

<script setup>
  import { message } from "@ivy-design/ce";
  const menuClick = (ev) => {
    message.success(`点击了菜单：${ev.detail}`);
  };
</script>

<style scoped>
.menu-wrap{
    display: block;
    background-color: #fff;
    border: 1px solid #cacaca;
    list-style: none;
    padding: 12px;
    border-radius: 4px;
}
.menu-wrap-item{
    white-space: none;
    width: 160px;
    padding: 0 24px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    line-height: 2em;
}
.menu-wrap-item:hover{
    background-color: #efefef;
}
</style>
