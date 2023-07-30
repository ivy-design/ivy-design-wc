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

console.log(comp)

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
