# 快速开始

## 通过 script 引入

```html
<!--最新版-->
<script type="module" src="//cdn.jsdelivr.net/npm/@ivy-design/ce"></script>
<!--指定版本号-->
<script
  type="module"
  src="//cdn.jsdelivr.net/npm/@ivy-design/ce@0.4.0"
></script>
```

## 通过包管理器使用

### 安装

```bash
npm i @ivy-design/ce
#OR
yarn add @ivy-design/ce
#OR
pnpm add @ivy-design/ce
```

### vue 中使用

```js
// vue2
import Vue from "vue";
import { registerComponents } from "@ivy-design/ce";
import "@ivy-design/ce/dist/style.css";
registerComponents();
Vue.config.ignoredElements = [
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ivy-/,
];

// vue3
import { createApp } from "vue";
import { registerComponents } from "@ivy-design/ce";
import "@ivy-design/ce/dist/style.css";
registerComponents();
createApp().config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("ivy-");
```

### react 中使用

```js
import { registerComponents } from "@ivy-design/ce";
import "@ivy-design/ce/dist/style.css";
registerComponents();
//如需单独使用
import { defineCustomElement } from "ivy-ui/dist/components/ivy-button.js";
ReactDOM.render(<ivy-button>button</ivy-button>, document.body);
```
