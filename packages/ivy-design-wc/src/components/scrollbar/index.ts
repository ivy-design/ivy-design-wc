import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'

const Scrollbar = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Scrollbar, registerComponent as registerScrollbarComponent }

export default registerComponent
