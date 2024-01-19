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
import { Affix } from './components/affix/index'

import { MessageBox, msgBox } from './components/message-box/index'
import { TimeSelect } from './components/time-select/index'

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
    Text,
    Affix,
    MessageBox,
    TimeSelect
}

const registerComponents = async (prefix = 'Ivy') => {
    for (const key in comp) {
        const name: string = `${prefix}${key}`.replace(/([A-Z])([a-z]+)/g, (val, _, p, offset) => {
            return offset > 0 ? `-${val.toLowerCase()}` : `${val.toLowerCase()}`
        })

        customElements.define(name, comp[key])
    }
}

const message = createMessage(Message)

const registerComponent = (name: string, component: any) => {
    customElements.define(name, component)
}

const $alert = msgBox.alert
const $confirm = msgBox.confirm
const $ivy = {
    message,
    msgBox,
    alert: $alert,
    confirm: $confirm
}

// const $prompt = msgBox.prompt
// const $notify = msgBox.notify
// const $message = msgBox.message

export { message, msgBox, registerComponents, registerComponent, $ivy, $alert, $confirm }

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
        Affix: typeof comp.Affix
        MessageBox: typeof comp.MessageBox
        TimeSelect: typeof comp.TimeSelect
    }
}
