import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import index from './index.vue'
import item from './item.vue'

const Collapse = defineCustomElement(index)
const registerCollapseComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${index.name}`
    install(key, index)
}

const CollapseItem = defineCustomElement(item)
const registerCollapseItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${item.name}`
    install(key, item)
}

export { Collapse, registerCollapseComponent, CollapseItem, registerCollapseItemComponent }

export default (prefix = 'Ivy') => {
    registerCollapseComponent(prefix)
    registerCollapseItemComponent(prefix)
}
