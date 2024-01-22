import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const Details = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Details, registerComponent as registerDetailsComponent }

export default registerComponent
