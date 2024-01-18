import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'
import item from './item.vue'

const Breadcrumb = defineCustomElement(comp)
const registerBreadcrumbComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const BreadcrumbItem = defineCustomElement(item)
const registerBreadcrumbItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${item.name}`
    install(key, item)
}

export { Breadcrumb, registerBreadcrumbComponent, BreadcrumbItem, registerBreadcrumbItemComponent }

export default (prefix = 'Ivy') => {
    install(`${prefix}${comp.name}`, comp)
    install(`${prefix}${item.name}`, item)
}
