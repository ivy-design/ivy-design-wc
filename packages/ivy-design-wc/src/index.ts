import { defineCustomElement } from 'vue'
import './assets/main.scss'

import IvyButton from './components/button/index.ce.vue'
import IvyGrid from './components/grid/index.ce.vue'
import IvyGridItem from './components/grid/item.ce.vue'
import IvyTooltip from './components/tooltip/index.ce.vue'
import IvyCollapse from './components/collapse/index.ce.vue'
import IvyCollapseItem from './components/collapse/item.ce.vue'
import IvyDivider from './components/divider/index.ce.vue'
import IvyCard from './components/card/index.ce.vue'
import IvySpace from './components/space/index.ce.vue'
import IvyEmpty from './components/empty/index.ce.vue'
import IvyTimeline from './components/timeline/index.ce.vue'
import IvyTimelineItem from './components/timeline/item.ce.vue'
import IvyBreadcrumb from './components/breadcrumb/index.ce.vue'
import IvyBreadcrumbItem from './components/breadcrumb/item.ce.vue'
import IvyTag from './components/tag/index.ce.vue'
import IvyBadge from './components/badge/index.ce.vue'
import IvyRow from './components/layout/row.ce.vue'
import IvyCol from './components/layout/col.ce.vue'
import IvyResult from './components/result/index.ce.vue'
import IvyProgress from './components/progress/index.ce.vue'
import IvyDrawer from './components/drawer/index.ce.vue'
import IvyInput from './components/input/index.ce.vue'
import IvyTip from './components/tip/index.ce.vue'
import IvySelect from './components/select/index.ce.vue'
import IvyOption from './components/select/option.ce.vue'
import IvyLoading from './components/loading/index.ce.vue'
import IvyDetails from './components/details/index.ce.vue'
import IvyDialog from './components/dialog/index.ce.vue'
import IvyDropdown from './components/dropdown/index.ce.vue'
import IvyDropdownMenu from './components/dropdown/menu.ce.vue'
import IvyDropdownItem from './components/dropdown/item.ce.vue'
import IvySteps from './components/steps/index.ce.vue'
import IvyStep from './components/steps/step.ce.vue'
import IvySwitch from './components/switch/index.ce.vue'
import IvyRadio from './components/radio/index.ce.vue'
import IvyRadioGroup from './components/radio/group.ce.vue'
import IvyCheckbox from './components/checkbox/index.ce.vue'
import IvyCheckboxGroup from './components/checkbox/group.ce.vue'
import IvyAspectRatio from './components/aspect-ratio/index.ce.vue'
import IvyMessage from './components/message/index.ce.vue'
import IvyIcon from './components/icon/index.ce.vue'
import IvyCircle from './components/circle/index.ce.vue'
import IvyPagination from './components/pagination/index.ce.vue'
import IvyCarousel from './components/carousel/index.ce.vue'
import IvyCarouselItem from './components/carousel/item.ce.vue'
import IvyImage from './components/image/index.ce.vue'
import IvyDescription from './components/description/index.ce.vue'
import IvyDescriptionItem from './components/description/item.ce.vue'
import IvyTabs from './components/tabs/index.ce.vue'
import IvyTabPane from './components/tabs/pane.ce.vue'
import IvyContextmenu from './components/contextmenu/index.ce.vue'
import IvyRate from './components/rate/index.ce.vue'
import IvyAvatar from './components/avatar/index.ce.vue'
import IvyScrollbar from './components/scrollbar/index.ce.vue'
import IvyTable from './components/table/index.ce.vue'
import IvyTableColumn from './components/table/column.ce.vue'
import IvyCopyToClipboard from './components/copy-to-clipboard/index.ce.vue'
import IvyTree from './components/tree/index.ce.vue'

import { createMessage } from './utils/utils'

const comp: Record<string, any> = {
    Button: defineCustomElement(IvyButton),
    Grid: defineCustomElement(IvyGrid),
    GridItem: defineCustomElement(IvyGridItem),
    Tooltip: defineCustomElement(IvyTooltip),
    Collapse: defineCustomElement(IvyCollapse),
    CollapseItem: defineCustomElement(IvyCollapseItem),
    Divider: defineCustomElement(IvyDivider),
    Card: defineCustomElement(IvyCard),
    Space: defineCustomElement(IvySpace),
    Empty: defineCustomElement(IvyEmpty),
    Timeline: defineCustomElement(IvyTimeline),
    TimelineItem: defineCustomElement(IvyTimelineItem),
    Breadcrumb: defineCustomElement(IvyBreadcrumb),
    BreadcrumbItem: defineCustomElement(IvyBreadcrumbItem),
    Tag: defineCustomElement(IvyTag),
    Badge: defineCustomElement(IvyBadge),
    Row: defineCustomElement(IvyRow),
    Col: defineCustomElement(IvyCol),
    Result: defineCustomElement(IvyResult),
    Progress: defineCustomElement(IvyProgress),
    Drawer: defineCustomElement(IvyDrawer),
    Input: defineCustomElement(IvyInput),
    Tip: defineCustomElement(IvyTip),
    Select: defineCustomElement(IvySelect),
    Option: defineCustomElement(IvyOption),
    Loading: defineCustomElement(IvyLoading),
    Details: defineCustomElement(IvyDetails),
    Dialog: defineCustomElement(IvyDialog),
    Dropdown: defineCustomElement(IvyDropdown),
    DropdownMenu: defineCustomElement(IvyDropdownMenu),
    DropdownItem: defineCustomElement(IvyDropdownItem),
    Steps: defineCustomElement(IvySteps),
    Step: defineCustomElement(IvyStep),
    Switch: defineCustomElement(IvySwitch),
    Radio: defineCustomElement(IvyRadio),
    RadioGroup: defineCustomElement(IvyRadioGroup),
    Checkbox: defineCustomElement(IvyCheckbox),
    CheckboxGroup: defineCustomElement(IvyCheckboxGroup),
    AspectRatio: defineCustomElement(IvyAspectRatio),
    Message: defineCustomElement(IvyMessage),
    Icon: defineCustomElement(IvyIcon),
    Circle: defineCustomElement(IvyCircle),
    Pagination: defineCustomElement(IvyPagination),
    Carousel: defineCustomElement(IvyCarousel),
    CarouselItem: defineCustomElement(IvyCarouselItem),
    Image: defineCustomElement(IvyImage),
    Description: defineCustomElement(IvyDescription),
    DescriptionItem: defineCustomElement(IvyDescriptionItem),
    Tabs: defineCustomElement(IvyTabs),
    TabPane: defineCustomElement(IvyTabPane),
    Contextmenu: defineCustomElement(IvyContextmenu),
    Rate: defineCustomElement(IvyRate),
    Avatar: defineCustomElement(IvyAvatar),
    Scrollbar: defineCustomElement(IvyScrollbar),
    Table: defineCustomElement(IvyTable),
    TableColumn: defineCustomElement(IvyTableColumn),
    CopyToClipboard: defineCustomElement(IvyCopyToClipboard),
    Tree: defineCustomElement(IvyTree)
}

export const Button = comp.Button
export const Grid = comp.Grid
export const GridItem = comp.GridItem
export const Tooltip = comp.Tooltip
export const Collapse = comp.Collapse
export const CollapseItem = comp.CollapseItem
export const Divider = comp.Divider
export const Card = comp.Card
export const Space = comp.Space
export const Empty = comp.Empty
export const Timeline = comp.Timeline
export const TimelineItem = comp.TimelineItem
export const Breadcrumb = comp.Breadcrumb
export const BreadcrumbItem = comp.BreadcrumbItem
export const Tag = comp.Tag
export const Badge = comp.Badge
export const Row = comp.Row
export const Col = comp.Col
export const Result = comp.Result
export const Progress = comp.Progress
export const Drawer = comp.Drawer
export const Input = comp.Input
export const Tip = comp.Tip
export const Select = comp.Select
export const Option = comp.Option
export const Loading = comp.Loading
export const Details = comp.Details
export const Dialog = comp.Dialog
export const Dropdown = comp.Dropdown
export const DropdownMenu = comp.DropdownMenu
export const DropdownItem = comp.DropdownItem
export const Steps = comp.Steps
export const Step = comp.Step
export const Switch = comp.Switch
export const Radio = comp.Radio
export const RadioGroup = comp.RadioGroup
export const Checkbox = comp.Checkbox
export const CheckboxGroup = comp.CheckboxGroup
export const AspectRatio = comp.AspectRatio
export const Message = comp.Message
export const Icon = comp.Icon
export const Circle = comp.Circle
export const Pagination = comp.Pagination
export const Carousel = comp.Carousel
export const CarouselItem = comp.CarouselItem
export const Image = comp.Image
export const Description = comp.Description
export const DescriptionItem = comp.DescriptionItem
export const Tabs = comp.Tabs
export const TabPane = comp.TabPane
export const Contextmenu = comp.Contextmenu
export const Rate = comp.Rate
export const Avatar = comp.Avatar
export const Scrollbar = comp.Scrollbar
export const Table = comp.Table
export const TableColumn = comp.TableColumn
export const CopyToClipboard = comp.CopyToClipboard
export const Tree = comp.Tree

export const registerComponents = async (prefix = 'Ivy') => {
    for (const key in comp) {
        const name: string[] = []
        ;`${prefix}${key}`.replace(/([A-Z])([a-z]+)/g, (val) => {
            name.push(val.toLocaleLowerCase())
            return val
        })

        customElements.define(name.join('-'), comp[key])
    }
}

export const message = createMessage(Message)

export const registerComponent = (name: string, component: any) => {
    customElements.define(name, component)
}

export default {
    registerComponents,
    registerComponent,
    ...comp
}

declare module 'vue' {
    export interface GlobalComponents {
        Button: typeof comp.Button
        Grid: typeof comp.Grid
        GridItem: typeof comp.GridItem
        Tooltip: typeof comp.Tooltip
        Collapse: typeof comp.Collapse
        CollapseItem: typeof comp.CollapseItem
        Divider: typeof comp.Divider
        Card: typeof comp.Card
        Space: typeof comp.Space
        Empty: typeof comp.Empty
        Timeline: typeof comp.Timeline
        TimelineItem: typeof comp.TimelineItem
        Breadcrumb: typeof comp.Breadcrumb
        BreadcrumbItem: typeof comp.BreadcrumbItem
        Tag: typeof comp.Tag
        Badge: typeof comp.Badge
        Row: typeof comp.Row
        Col: typeof comp.Col
        Result: typeof comp.Result
        Progress: typeof comp.Progress
        Drawer: typeof comp.Drawer
        Input: typeof comp.Input
        Tip: typeof comp.Tip
        Select: typeof comp.Select
        Option: typeof comp.Option
        Loading: typeof comp.Loading
        Details: typeof comp.Details
        Dialog: typeof comp.Dialog
        Dropdown: typeof comp.Dropdown
        DropdownMenu: typeof comp.DropdownMenu
        DropdownItem: typeof comp.DropdownItem
        Steps: typeof comp.Steps
        Step: typeof comp.Step
        Switch: typeof comp.Switch
        Radio: typeof comp.Radio
        RadioGroup: typeof comp.RadioGroup
        Checkbox: typeof comp.Checkbox
        CheckboxGroup: typeof comp.CheckboxGroup
        AspectRatio: typeof comp.AspectRatio
        Message: typeof comp.Message
        Icon: typeof comp.Icon
        Circle: typeof comp.Circle
        Pagination: typeof comp.Pagination
        Carousel: typeof comp.Carousel
        CarouselItem: typeof comp.CarouselItem
        Image: typeof comp.Image
        Description: typeof comp.Description
        DescriptionItem: typeof comp.DescriptionItem
        Tabs: typeof comp.Tabs
        TabPane: typeof comp.TabPane
        Contextmenu: typeof comp.Contextmenu
        Rate: typeof comp.Rate
        Avatar: typeof comp.Avatar
        Scrollbar: typeof comp.Scrollbar
        Table: typeof comp.Table
        TableColumn: typeof comp.TableColumn
        CopyToClipboard: typeof comp.CopyToClipboard
        Tree: typeof comp.Tree
    }
}
