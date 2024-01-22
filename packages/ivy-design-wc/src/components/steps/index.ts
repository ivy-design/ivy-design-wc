import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'
import stepCeVue from './step.vue'

const Steps = defineCustomElement(comp)
const registerStepsComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const Step = defineCustomElement(stepCeVue)
const registerStepComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${stepCeVue.name}`
    install(key, stepCeVue)
}

export { Steps, registerStepsComponent, Step, registerStepComponent }

export default () => {
    registerStepsComponent()
    registerStepComponent()
}
