const guide = [
    {
        text: "基础",
        items: [
            { text: "快速开始", link: "/guide/index", items: [] },
            { text: "Color 色彩", link: "/guide/color", items: [] },
            { text: "theme 主题", link: "/guide/theme", items: [] },
        ],
    },
];

const basic = [
    { text: "AspectRatio 比例容器", link: "/components/aspect-ratio" },
    { text: "Button 按钮", link: "/components/button" },
    { text: "Divider 分割线", link: "/components/divider" },
    { text: "Icon 图标", link: "/components/icon" },
    { text: "Space 间距", link: "/components/space" },
    { text: "Grid 宫格布局", link: "/components/grid-layout.md" },
    { text: "Row/Col 栅格", link: "/components/grid" },
    { text: "Split 分割面板", link: "/components/split" },
    { text: "Scrollbar 滚动条", link: "/components/scrollbar" },
    { text: "Link 链接", link: "/components/link" },
    { text: "Text 文字", link: "/components/text" },
];

const form = [
    { text: "Checkbox 多选框", link: "/components/checkbox" },
    { text: "ColorPicker 取色器", link: "/components/color-picker" },
    { text: "DatePicker 日期选择", link: "/components/date-picker" },
    { text: "Input 输入框", link: "/components/input" },
    { text: "Radio 单选框", link: "/components/radio" },
    { text: "Rate 评分", link: "/components/rate" },
    { text: "Select 选择框", link: "/components/select" },
    { text: "Switch 开关", link: "/components/switch" },
    { text: "Textarea 文本域", link: "/components/textarea" },
    { text: "TimePicker 时间选择器", link: "/components/time-picker" },
    { text: "TimeSelect 时间选择", link: "/components/time-select" },
];

const data = [
    { text: "Avatar 头像", link: "/components/avatar" },
    { text: "Description 描述列表", link: "/components/description" },
    { text: "Badge 徽标", link: "/components/badge" },
    { text: "Card 卡片", link: "/components/card" },
    { text: "Carousel 轮播图", link: "/components/carousel" },
    { text: "Circle 环形进度条", link: "/components/circle" },
    { text: "Collapse 折叠面板", link: "/components/collapse" },
    { text: "Empty 空状态", link: "/components/empty" },
    { text: "Image 图片", link: "/components/image" },
    { text: "Pagination 分页", link: "/components/pagination" },
    { text: "Progress 进度条", link: "/components/progress" },
    { text: "Table 表格", link: "/components/table" },
    { text: "Tag 标签", link: "/components/tag" },
    { text: "Tour 漫游式引导", link: "/components/tour" },
    { text: "Timeline 时间线", link: "/components/timeline" },
    { text: "Tree 树形控件", link: "/components/tree" },
];

const notify = [
    { text: "Dialog 对话框", link: "/components/dialog" },
    { text: "Drawer 抽屉", link: "/components/drawer" },
    { text: "Loading 加载", link: "/components/loading" },
    { text: "Message 消息提示", link: "/components/message" },
    { text: "MessageBox 消息弹出框", link: "/components/message-box" },
    { text: "Notification 通知框", link: "/components/notification" },
    { text: "Popover 弹出框", link: "/components/popover" },
    { text: "Result 结果", link: "/components/result" },
    { text: "Alert 提示", link: "/components/alert" },
    { text: "Tooltip 文字提示", link: "/components/tooltip" },
];

const navigation = [
    { text: "Affix 固钉", link: "/components/affix" },
    { text: "Breadcrumb 面包屑", link: "/components/breadcrumb" },
    { text: "Dropdown 下拉菜单", link: "/components/dropdown" },
    { text: "Steps 步骤条", link: "/components/steps" },
    { text: "Tabs 标签页", link: "/components/tab" },
];

const other = [
    { text: "Clipboard 复制到剪切板", link: "/components/clipboard" },
    { text: "ContextMenu 右键菜单", link: "/components/contextmenu" },
    { text: "Details 详情", link: "/components/details" },
    { text: "Command 命令", link: "/components/command" },
];

const components = [
    { text: "基础/布局", collapsed: false, items: basic },
    { text: "表单", collapsed: false, items: form },
    { text: "数据展示", collapsed: false, items: data },
    { text: "通知/反馈", collapsed: false, items: notify },
    { text: "导航", collapsed: false, items: navigation },
    { text: "其它", collapsed: false, items: other },
];

const sidebar = {
    "/guide/": guide,
    "/components/": components,
};

export default sidebar;
