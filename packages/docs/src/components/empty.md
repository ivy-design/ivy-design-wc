# Empty 空状态

## 常规用法

空状态时的占位提示。

<ivy-empty>描述文字</ivy-empty>

```html
<ivy-empty>描述文字</ivy-empty>
```

## 禁用选项

通过 `name` 为 `image` 的 `slot` 来重写占位图片

<ivy-empty>
    <img src="/images/icon-1.svg" alt="icon" slot="image" />
    暂无数据
</ivy-empty>

```html
<ivy-empty>
    <ivy-icon
        name="picture-outline"
        size="160"
        color="#cfcfcf"
        slot="image"></ivy-icon>
    暂无数据
</ivy-empty>
```

## 可用的 CSS 变量

::: details

```css
:host {
    --ivy-empty-text-color: var(--ivy-text-color-regular, #606266);
}
```

:::

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Slots

| slot 名称 | 描述           |
| --------- | -------------- |
| default   | 内容为空的提示 |
| image     | 图标           |
