import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './src/index.vue'

const Pagination = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Pagination, registerComponent as registerPaginationComponent }

export default registerComponent
