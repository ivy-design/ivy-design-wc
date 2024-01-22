import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'
import groupCeVue from './group.vue'

const Checkbox = defineCustomElement(comp)

const registerCheckboxComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const CheckboxGroup = defineCustomElement(groupCeVue)
const registerCheckboxGroupComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${groupCeVue.name}`
    install(key, groupCeVue)
}

export { Checkbox, registerCheckboxComponent, CheckboxGroup, registerCheckboxGroupComponent }

export default () => {
    registerCheckboxComponent()
    registerCheckboxGroupComponent()
}
