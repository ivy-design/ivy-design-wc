import { defineCustomElement } from 'vue'
import { install } from '@/utils'
import comp from './src/index.vue'

const TimeSelect = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}
export { TimeSelect, registerComponent as registerTimeSelectComponent }

export default registerComponent
