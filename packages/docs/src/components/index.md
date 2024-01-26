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

## 已有组件

| 组件名称        | 组件描述                     |
| :-------------- | ---------------------------- |
| Button          | 按钮                         |
| Space           | 间隔                         |
| Collapse        | 折叠面板                     |
| Divider         | 分割线                       |
| Card            | 卡片                         |
| Grid            | 宫格                         |
| Empty           | 空状态                       |
| Timeline        | 时间轴                       |
| Breadcrumb      | 面包屑导航                   |
| Tag             | 标签                         |
| Badge           | 徽章                         |
| Row             | 行                           |
| Col             | 列                           |
| Result          | 结果                         |
| Drawer          | 抽屉                         |
| Input           | 输入框                       |
| Tip             | 提示                         |
| Select          | 下拉选择                     |
| Loading         | 加载                         |
| Details         | 详情-同原生的 `details` 标签 |
| Progress        | 进度条                       |
| Dialog          | 弹框                         |
| Dropdown        | 下拉菜单                     |
| Steps           | 步骤条                       |
| Switch          | 开关                         |
| Radio           | 单选框                       |
| Checkbox        | 多选框                       |
| AspectRatio     | 固定宽高比例容器             |
| Icon            | 图标                         |
| Circle          | 圆形进度条                   |
| Image           | 图片                         |
| Description     | 描述列表                     |
| Contextmenu     | 邮件菜单                     |
| rate            | 评分                         |
| Avatar          | 头像                         |
| Carousel        | 轮播图                       |
| CopyToClipboard | 复制到剪切板                 |
| Text            | 文字                         |
| Link            | 链接                         |
| Affix           | 固钉                         |
| MessageBox      | 消息弹出框                   |
| TimeSelect      | 时间选择                     |
| Scrollbar       | 滚动条                       |
| split           | 分割面板                     |
| notification    | 通知框                       |

## 未完成组件

| 组件名称   | 组件描述   |
| :--------- | :--------- |
| tabs       | 标签页     |
| message    | 消息提醒   |
| table      | 表格       |
| datePicker | 日期选择器 |
| timePicker | 时间选择器 |
