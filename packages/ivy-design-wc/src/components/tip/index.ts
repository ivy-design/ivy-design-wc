import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const Tip = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Tip, registerComponent as registerTipComponent }

export default registerComponent
