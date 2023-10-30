# Clipboard 复制到剪切板

## 复制自身的 `value` 属性值

<ivy-copy-to-clipboard value="自身的 value 属性值" id="s" @clipboard-copy="clipboardCopy">Copy</ivy-copy-to-clipboard>

<textarea value="Paste" rows="5" cols="100">Paste</textarea>

```html
<ivy-copy-to-clipboard value="自身的 value 属性值" id="s">
  Copy
</ivy-copy-to-clipboard>
```

> 可以使用自定义事件 `clipboard-copy` 在复制文本后做一些操作

## 通过 for 属性复制其它元素的内容

<ivy-copy-to-clipboard for="p" id="s" @clipboard-copy="clipboardCopy">Copy</ivy-copy-to-clipboard>

<p id="p">p标签内的内容</p>

<textarea value="Paste" rows="5" cols="100">Paste</textarea>

```html
<ivy-copy-to-clipboard for="p" id="s">Copy</ivy-copy-to-clipboard>

<p id="p">p标签内的内容</p>
```

## 通过 for 属性复制 input 元素的 value 属性

<ivy-copy-to-clipboard for="input" id="s" @clipboard-copy="clipboardCopy">Copy</ivy-copy-to-clipboard>

<input id="input" value="input元素的value值"/>

<textarea value="Paste" rows="5" cols="100">Paste</textarea>

```html
<ivy-copy-to-clipboard for="p" id="s">Copy</ivy-copy-to-clipboard>

<input id="p" value="input元素的value值" />
```

<script setup>
import { message } from '@ivy-design/wc'
const clipboardCopy = (ev) => {
    console.log(ev)
    message.success("Copied! content is " + ev.detail)
}
</script>
