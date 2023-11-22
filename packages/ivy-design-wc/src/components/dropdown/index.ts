import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'
import menuCeVue from './menu.ce.vue'
import itemCeVue from './item.ce.vue'

const Dropdown = defineCustomElement(comp)
const registerDropdownComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const DropdownMenu = defineCustomElement(menuCeVue)
const registerDropdownMenuComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${menuCeVue.name}`
    install(key, menuCeVue)
}

const DropdownItem = defineCustomElement(itemCeVue)
const registerDropdownItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${itemCeVue.name}`
    install(key, itemCeVue)
}

export {
    Dropdown,
    registerDropdownComponent,
    DropdownMenu,
    registerDropdownMenuComponent,
    DropdownItem,
    registerDropdownItemComponent
}

export default () => {
    registerDropdownComponent()
    registerDropdownMenuComponent()
    registerDropdownItemComponent()
}
