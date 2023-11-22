import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'
import paneCeVue from './pane.ce.vue'

const Tabs = defineCustomElement(comp)
const registerTabsComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const TabPane = defineCustomElement(paneCeVue)
const registerTabPaneComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${paneCeVue.name}`
    install(key, paneCeVue)
}

export { Tabs, registerTabsComponent, TabPane, registerTabPaneComponent }

export default () => {
    registerTabsComponent()
    registerTabPaneComponent()
}
