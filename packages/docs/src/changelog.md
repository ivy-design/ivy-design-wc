# 更新日志

## v1.8.0 版本

Feats：

- 增加 `Command` 组件
- 增加 `Textarea` 组件
- `Pagination` 组件增加 `background` 属性

Fixed：

- 修复 `TimeSelect` 组件中的选项 `disabled = true` 时仍可选择问题

Refactor：

- `Tip` 组件更名为 `Alert`

## v1.7.1 版本

Feats：

- `Icon` 组件增加 `spin` 属性

Docs：

- 优化文档首页
- `Icon` 组件文档增加图标来源

Fixed：

- 修复文档打包失败

## v1.7.0 版本

Feats：

- 增加 `tabs` 组件和对应文档
- 增加 `tour` 组件和对应文档
- 使用 floating-ui 重构浮层，涉及组件 `tooltip`、`tour`、`contextmenu`
- 增加 `Circle` 组件和文档

Build：

- 运行在开发环境时不再生成 types 类型文件

CI：

- 增加 issue 提 bug 时模板
- 增加自动发布到 npm

Test：

- 增加 hooks 中的 useIndex 单元测试

## v1.6.0 版本

Feats：

- 增加 `pagination` 组件
- `Icon` 组件实现改为字体图标

Fixed：

- 修复文档在 1920 宽度下标题显示异常

Refactor：

- `Radio` 组件定义 Props 时使用 TS interface 定义

## v1.5.0 版本

Feats：

- 增加 `Notification` 组件
- 增加 `Split` 组件

Chore：

- 尝试修复自定发布 npm action 错误

## v1.4.0 版本

Feats：

- 增加 `scrollbar` 组件
- `select` 和 `timeSelect` 组件下拉框中的滚动条替换为 `scrollbar` 组件
- 优化 `contextmenu` 右键菜单动画效果

Fixed：

- 修复 `details` 组件隐藏动画时箭头仍有动画
- 修复 `table` 组件中 loading 图标加载错误
- 修复 `card` 组件的 vue 警告

Refactor：

- `Loading` 组件更改为 setup 写法

## v1.3.0 版本

Feats：

- 增加 `TimeSelect` 组件
- `Dropdown` 和 `Select` 组件增加下拉动画
- `Input` 组件增加 `clearable` 属性
- 内部的 icon 改为 tsx 写法

Fixed：

- 修复 messageBox 组件 type 属性无效
  Chore：

- 更改 vite 中 vue 插件配置，将 .vue 后缀默认为自定义元素
- 增加 utils 下函数的单元测试

## v1.2.0 版本

Features：

新增 Affix 组件
新增 MessageBox 组件

## v1.1.0 版本

功能：

- 新增组件 `Text`(文字)
- 新增组件 `Link`(链接)

## v1.0.2 版本

修复：

- 修复 `button` 组件处于 loading 状态时，loading 层未完全覆盖 button 的问题

## v1.0.1 版本

docs:

- 完善 readme.md 文件

## v1.0.0 版本

功能：

- 新增组件 `Button`(按钮)
- 新增组件 `Space`(间隔)
- 新增组件 `Collapse`(折叠面板)
- 新增组件 `Divider`(分割线)
- 新增组件 `Card`(卡片)
- 新增组件 `Grid`(宫格)
- 新增组件 `Empty`(空状态)
- 新增组件 `Timeline`(时间轴)
- 新增组件 `Breadcrumb`(面包屑导航)
- 新增组件 `Tag`(标签)
- 新增组件 `Badge`(徽章)
- 新增组件 `Row`(行)
- 新增组件 `Col`(列)
- 新增组件 `Result`(结果)
- 新增组件 `Drawer`(抽屉)
- 新增组件 `Input`(输入框)
- 新增组件 `Tip`(提示)
- 新增组件 `Select`(下拉选择)
- 新增组件 `Loading`(加载)
- 新增组件 `Details`(详情) -同原生的 `details` 标签
- 新增组件 `Progress`(进度条)
- 新增组件 `Dialog`(弹框)
- 新增组件 `Dropdown`(下拉菜单)
- 新增组件 `Steps`(步骤条)
- 新增组件 `Switch`(开关)
- 新增组件 `Radio`(单选框)
- 新增组件 `Checkbox`(多选框)
- 新增组件 `AspectRatio`(固定宽高比例容器)
- 新增组件 `Icon`(图标)
- 新增组件 `Circle`(圆形进度条)
- 新增组件 `Image`(图片)
- 新增组件 `Description`(描述列表)
- 新增组件 `Contextmenu`(邮件菜单)
- 新增组件 `rate`(评分)
- 新增组件 `Avatar`(头像)
- 新增组件 `Carousel`(轮播图)
- 新增组件 `CopyToClipboard`(复制到剪切板)
