# Dropdown 下拉菜单

## 常规用法

<ivy-dropdown @command="handlerCommand">
<ivy-button>下拉菜单</ivy-button>
<ivy-dropdown-menu slot="dropdown">
<ivy-dropdown-item command="option 1">选项一</ivy-dropdown-item>
<ivy-dropdown-item command="option 2">选项二</ivy-dropdown-item>
<ivy-dropdown-item command="option 3">选项三</ivy-dropdown-item>
<ivy-dropdown-item command="option 4">选项四</ivy-dropdown-item>
</ivy-dropdown-menu>
</ivy-dropdown>

```vue
<ivy-dropdown @command="handlerCommand">
    <ivy-button>下拉菜单</ivy-button>
    <ivy-dropdown-menu slot="dropdown">
        <ivy-dropdown-item command="option 1">选项一</ivy-dropdown-item>
        <ivy-dropdown-item command="option 2">选项二</ivy-dropdown-item>
        <ivy-dropdown-item command="option 3">选项三</ivy-dropdown-item>
        <ivy-dropdown-item command="option 4">选项四</ivy-dropdown-item>
    </ivy-dropdown-menu>
</ivy-dropdown>
```

## 分割线

如果你想要在第三和第四个选项之间添加一个分隔符，你只需要在第三和第四个选项添加一个 `<ivy-dropdown-item divided></ivy-dropdown-item>` 即可。

<ivy-dropdown @command="handlerCommand">
<ivy-button>下拉菜单</ivy-button>
<ivy-dropdown-menu slot="dropdown">
<ivy-dropdown-item command="option 1">选项一</ivy-dropdown-item>
<ivy-dropdown-item command="option 2">选项二</ivy-dropdown-item>
<ivy-dropdown-item command="option 3">选项三</ivy-dropdown-item>
<ivy-dropdown-item divided></ivy-dropdown-item>
<ivy-dropdown-item command="option 4">选项四</ivy-dropdown-item>
</ivy-dropdown-menu>
</ivy-dropdown>

```vue
<ivy-dropdown @command="handlerCommand">
    <ivy-button>下拉菜单</ivy-button>
    <ivy-dropdown-menu slot="dropdown">
        <ivy-dropdown-item command="option 1">选项一</ivy-dropdown-item>
        <ivy-dropdown-item command="option 2">选项二</ivy-dropdown-item>
        <ivy-dropdown-item command="option 3">选项三</ivy-dropdown-item>
        <ivy-dropdown-item divided></ivy-dropdown-item>
        <ivy-dropdown-item command="option 4">选项四</ivy-dropdown-item>
    </ivy-dropdown-menu>
</ivy-dropdown>
```

## 禁用某一项

如果你想要在第三和第四个选项之间添加一个分隔符，你只需要在第三和第四个选项添加一个 `<ivy-dropdown-item divided></ivy-dropdown-item>` 即可。

<ivy-dropdown @command="handlerCommand">
<ivy-button>下拉菜单</ivy-button>
<ivy-dropdown-menu slot="dropdown">
<ivy-dropdown-item command="option 1">选项一</ivy-dropdown-item>
<ivy-dropdown-item command="option 2" disabled>选项二</ivy-dropdown-item>
<ivy-dropdown-item command="option 3">选项三</ivy-dropdown-item>
<ivy-dropdown-item command="option 4">选项四</ivy-dropdown-item>
</ivy-dropdown-menu>
</ivy-dropdown>

```vue
<ivy-dropdown @command="handlerCommand">
    <ivy-button>下拉菜单</ivy-button>
    <ivy-dropdown-menu slot="dropdown">
        <ivy-dropdown-item command="option 1">选项一</ivy-dropdown-item>
        <ivy-dropdown-item command="option 2" disabled>选项二</ivy-dropdown-item>
        <ivy-dropdown-item command="option 3">选项三</ivy-dropdown-item>
        <ivy-dropdown-item command="option 4">选项四</ivy-dropdown-item>
    </ivy-dropdown-menu>
</ivy-dropdown>
```

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Dropdown Events

| 事件    | 说明                                                   |
| ------- | ------------------------------------------------------ |
| command | 点击菜单项的事件，通过 `event.detail` 获取点击项的标识 |

### Dropdown Slots

| 插槽名称 | 说明               |
| -------- | ------------------ |
| default  | 触发下拉菜单的元素 |
| dropdown | 下拉菜单           |

### DropdownItem Props

| 属性     | 说明     | 类型    | 可选值 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| command  | 命令     | String  | -      | -      |
| disabled | 是否禁用 | Boolean | -      | false  |
| divided  | 分割线   | Boolean | -      | false  |

<script setup>
const handlerCommand = (ev) => {
    console.log(ev.detail)
}
</script>
