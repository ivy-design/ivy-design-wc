import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'
import itemCeVue from './item.vue'

const Grid = defineCustomElement(comp)
const registerGridComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const GridItem = defineCustomElement(itemCeVue)
const registerGridItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${itemCeVue.name}`
    install(key, itemCeVue)
}

export { Grid, registerGridComponent, GridItem, registerGridItemComponent }

export default () => {
    registerGridComponent()
    registerGridItemComponent()
}
