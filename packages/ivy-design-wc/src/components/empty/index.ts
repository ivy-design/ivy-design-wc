import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const Empty = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Empty, registerComponent as registerEmptyComponent }

export default registerComponent
