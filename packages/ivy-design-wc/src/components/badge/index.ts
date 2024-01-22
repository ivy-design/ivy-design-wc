import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const Badge = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Badge, registerComponent as registerBadgeComponent }

export default registerComponent
