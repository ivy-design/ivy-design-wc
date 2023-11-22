import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'
import groupCeVue from './group.ce.vue'

const Radio = defineCustomElement(comp)
const registerRadioComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const RadioGroup = defineCustomElement(groupCeVue)
const registerRadioGroupComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${groupCeVue.name}`
    install(key, groupCeVue)
}

export { Radio, registerRadioComponent, RadioGroup, registerRadioGroupComponent }

export default () => {
    registerRadioComponent()
    registerRadioGroupComponent()
}
