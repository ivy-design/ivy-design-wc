import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'
import optionCeVue from './option.vue'

const Select = defineCustomElement(comp)
const registerSelectComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const Option = defineCustomElement(optionCeVue)
const registerOptionComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${optionCeVue.name}`
    install(key, optionCeVue)
}

export { Select, registerSelectComponent, Option, registerOptionComponent }

export default () => {
    registerSelectComponent()
    registerOptionComponent()
}
