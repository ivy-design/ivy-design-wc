import { defineCustomElement } from 'vue'

const components = import.meta.glob(['./components/**/*.ce.vue', '!./*.ce.vue'], {
    import: 'default'
})

function getComponents() {
    const map: { [x: string]: any } = {}
    for (const path in components) {
        const component = components[path]
        component().then((module: any) => {
            const comp = defineCustomElement(module)
            map[module.name] = comp
        })
    }
    return map
}

const comp = getComponents()

export const Button = comp.Button
export const Grid = comp.Grid
export const GridItem = comp.GridItem
export const Tooltip = comp.Tooltip

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
