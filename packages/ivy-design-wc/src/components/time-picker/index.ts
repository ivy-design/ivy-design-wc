import { defineCustomElement } from 'vue'
import { install } from '@/utils'
import comp from './src/index.vue'

const TimePicker = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}
export { TimePicker, registerComponent as registerTimeSelectComponent }

export default registerComponent
