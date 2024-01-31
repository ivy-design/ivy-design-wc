# @ivy-design/ce

使用 vue3 构建的 web component 组件库

## 使用

**安装**

```bash
pnpm add @ivy-design/ce
```

**使用**

```js
// 全部注册
import { registerComponents } from "@ivy-design/ce";
import "@ivy-design/ce/dist/style.css";
registerComponents();
// 单个组件注册
import { registerComponent, Button } from "@ivy-design/ce";
import "@ivy-design/ce/dist/style.css";
registerComponent("ce-button", Button);
```

## 参与开发

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### 单元测试

```sh
pnpm test:unit
```

## 现有组件

| 组件名称        | 组件描述                |
| :-------------- | :---------------------- |
| Button          | 按钮                    |
| Space           | 间隔                    |
| Collapse        | 折叠面板                |
| Divider         | 分割线                  |
| Card            | 卡片                    |
| Grid            | 宫格                    |
| Empty           | 空状态                  |
| Timeline        | 时间轴                  |
| Breadcrumb      | 面包屑导航              |
| Tag             | 标签                    |
| Badge           | 徽章                    |
| Row             | 行                      |
| Col             | 列                      |
| Result          | 结果                    |
| Drawer          | 抽屉                    |
| Input           | 输入框                  |
| Tip             | 提示                    |
| Select          | 下拉选择                |
| Loading         | 加载                    |
| Details         | 详情-同原生的 `details` |
| Progress        | 进度条                  |
| Dialog          | 弹框                    |
| Dropdown        | 下拉菜单                |
| Steps           | 步骤条                  |
| Switch          | 开关                    |
| Radio           | 单选框                  |
| Checkbox        | 多选框                  |
| AspectRatio     | 固定宽高比例容器        |
| Icon            | 图标                    |
| Circle          | 圆形进度条              |
| Image           | 图片                    |
| Description     | 描述列表                |
| Contextmenu     | 邮件菜单                |
| rate            | 评分                    |
| Avatar          | 头像                    |
| Carousel        | 轮播图                  |
| CopyToClipboard | 复制到剪切板            |
| Text            | 文字                    |
| Link            | 链接                    |
| Affix           | 固钉                    |
| MessageBox      | 消息弹出框              |
| TimeSelect      | 时间选择                |
| Scrollbar       | 滚动条                  |
| split           | 分割面板                |
| notification    | 通知框                  |
| pagination      | 分页器                  |
| tabs            | 标签页                  |
| message         | 消息提醒                |

## 代办

| 组件名称   | 组件描述   |
| :--------- | :--------- |
| table      | 表格       |
| datePicker | 日期选择器 |
| timePicker | 时间选择器 |
