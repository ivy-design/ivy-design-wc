import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const Icon = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Icon, registerComponent as registerIconComponent }

export default registerComponent
