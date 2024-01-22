import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'
import itemCeVue from './item.vue'

const Description = defineCustomElement(comp)
const registerDescriptionComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const DescriptionItem = defineCustomElement(itemCeVue)
const registerDescriptionItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${itemCeVue.name}`
    install(key, itemCeVue)
}

export {
    Description,
    registerDescriptionComponent,
    DescriptionItem,
    registerDescriptionItemComponent
}

export default () => {
    registerDescriptionComponent()
    registerDescriptionItemComponent()
}
