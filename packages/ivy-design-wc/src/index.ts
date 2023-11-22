import './assets/main.scss'

import { Button } from './components/button/index'
import { Grid, GridItem } from './components/grid/index'

import { Tooltip } from './components/tooltip/index'
import { Collapse, CollapseItem } from './components/collapse/index'

import { Divider } from './components/divider/index'
import { Card } from './components/card/index'
import { Space } from './components/space/index'
import { Empty } from './components/empty/index'
import { Timeline, TimelineItem } from './components/timeline/index'

import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb/index'

import { Tag } from './components/tag/index'
import { Badge } from './components/badge/index'
import { Row, Col } from './components/layout/index'

import { Result } from './components/result/index'
import { Progress } from './components/progress/index'
import { Drawer } from './components/drawer/index'
import { Input } from './components/input/index'
import { Tip } from './components/tip/index'
import { Select, Option } from './components/select/index'

import { Loading } from './components/loading/index'
import { Details } from './components/details/index'
import { Dialog } from './components/dialog/index'
import { Dropdown, DropdownMenu, DropdownItem } from './components/dropdown/index'

import { Steps, Step } from './components/steps/index'

import { Switch } from './components/switch/index'
import { Radio, RadioGroup } from './components/radio/index'

import { Checkbox, CheckboxGroup } from './components/checkbox/index'

import { AspectRatio } from './components/aspect-ratio/index'
import { Message } from './components/message/index'
import { Icon } from './components/icon/index'
import { Circle } from './components/circle/index'
import { Pagination } from './components/pagination/index'
import { Carousel, CarouselItem } from './components/carousel/index'

import { Image } from './components/image/index'
import { Description, DescriptionItem } from './components/description/index'

import { Tabs, TabPane } from './components/tabs/index'

import { Contextmenu } from './components/contextmenu/index'
import { Rate } from './components/rate/index'
import { Avatar } from './components/avatar/index'
import { Scrollbar } from './components/scrollbar/index'
import { Table, TableColumn } from './components/table/index'

import { CopyToClipboard } from './components/copy-to-clipboard/index'
import { Tree } from './components/tree/index'
import { Link } from './components/link/index'
import { Text } from './components/text/index'

import { createMessage } from './utils/utils'

const comp: Record<string, any> = {
    Button,
    Grid,
    GridItem,
    Tooltip,
    Collapse,
    CollapseItem,
    Divider,
    Card,
    Space,
    Empty,
    Timeline,
    TimelineItem,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Badge,
    Row,
    Col,
    Result,
    Progress,
    Drawer,
    Input,
    Tip,
    Select,
    Option,
    Loading,
    Details,
    Dialog,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Steps,
    Step,
    Switch,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    AspectRatio,
    Message,
    Icon,
    Circle,
    Pagination,
    Carousel,
    CarouselItem,
    Image,
    Description,
    DescriptionItem,
    Tabs,
    TabPane,
    Contextmenu,
    Rate,
    Avatar,
    Scrollbar,
    Table,
    TableColumn,
    CopyToClipboard,
    Tree,
    Link,
    Text
}

// export const Button = comp.Button
// export const Grid = comp.Grid
// export const GridItem = comp.GridItem
// export const Tooltip = comp.Tooltip
// export const Collapse = comp.Collapse
// export const CollapseItem = comp.CollapseItem
// export const Divider = comp.Divider
// export const Card = comp.Card
// export const Space = comp.Space
// export const Empty = comp.Empty
// export const Timeline = comp.Timeline
// export const TimelineItem = comp.TimelineItem
// export const Breadcrumb = comp.Breadcrumb
// export const BreadcrumbItem = comp.BreadcrumbItem
// export const Tag = comp.Tag
// export const Badge = comp.Badge
// export const Row = comp.Row
// export const Col = comp.Col
// export const Result = comp.Result
// export const Progress = comp.Progress
// export const Drawer = comp.Drawer
// export const Input = comp.Input
// export const Tip = comp.Tip
// export const Select = comp.Select
// export const Option = comp.Option
// export const Loading = comp.Loading
// export const Details = comp.Details
// export const Dialog = comp.Dialog
// export const Dropdown = comp.Dropdown
// export const DropdownMenu = comp.DropdownMenu
// export const DropdownItem = comp.DropdownItem
// export const Steps = comp.Steps
// export const Step = comp.Step
// export const Switch = comp.Switch
// export const Radio = comp.Radio
// export const RadioGroup = comp.RadioGroup
// export const Checkbox = comp.Checkbox
// export const CheckboxGroup = comp.CheckboxGroup
// export const AspectRatio = comp.AspectRatio
// export const Message = comp.Message
// export const Icon = comp.Icon
// export const Circle = comp.Circle
// export const Pagination = comp.Pagination
// export const Carousel = comp.Carousel
// export const CarouselItem = comp.CarouselItem
// export const Image = comp.Image
// export const Description = comp.Description
// export const DescriptionItem = comp.DescriptionItem
// export const Tabs = comp.Tabs
// export const TabPane = comp.TabPane
// export const Contextmenu = comp.Contextmenu
// export const Rate = comp.Rate
// export const Avatar = comp.Avatar
// export const Scrollbar = comp.Scrollbar
// export const Table = comp.Table
// export const TableColumn = comp.TableColumn
// export const CopyToClipboard = comp.CopyToClipboard
// export const Tree = comp.Tree
// export const Link = comp.Link
// export const Text = comp.Text

export const registerComponents = async (prefix = 'Ivy') => {
    for (const key in comp) {
        const name: string = `${prefix}${key}`.replace(/([A-Z])([a-z]+)/g, (val, _, p, offset) => {
            return offset > 0 ? `-${val.toLowerCase()}` : `${val.toLowerCase()}`
        })

        customElements.define(name, comp[key])
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
        Link: typeof comp.Link
        Text: typeof comp.Text
    }
}
