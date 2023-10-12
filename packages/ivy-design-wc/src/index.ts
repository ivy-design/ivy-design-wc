import { defineCustomElement } from 'vue'

const components = import.meta.glob(['./components/**/*.ce.vue', '!./*.ce.vue'], {
    import: 'default'
})

function getComponents() {
    const map: { [x: string]: any } = {}
    for (const path in components) {
        const component = components[path]
        component().then((module: any) => {
            map[module.name] = defineCustomElement(module)
        })
    }
    return map
}

const comp = getComponents()

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

// console.log(components)

export const registerComponents = (prefix = 'Ivy') => {
    for (const path in components) {
        const component = components[path]
        component().then((module: any) => {
            const comp = defineCustomElement(module)
            const name: string[] = []
            ;`${prefix}${module.name}`.replace(/([A-Z])([a-z]+)/g, (val) => {
                name.push(val.toLocaleLowerCase())
                return val
            })
            customElements.define(name.join('-'), comp)
        })
    }
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
        Radio: typeof comp.Radio
        RadioGroup: typeof comp.RadioGroup
        Checkbox: typeof comp.Checkbox
        CheckboxGroup: typeof comp.CheckboxGroup
        AspectRatio: typeof comp.AspectRatio
    }
}
