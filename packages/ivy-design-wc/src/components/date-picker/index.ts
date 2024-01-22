import { defineCustomElement } from 'vue'
import { install } from '@/utils'
import comp from './src/index.vue'

const DatePicker = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}
export { DatePicker, registerComponent as registerTimeSelectComponent }

export default registerComponent
