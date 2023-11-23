import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import indexCeVue from './index.ce.vue'

const Dialog = defineCustomElement(indexCeVue)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${indexCeVue.name}`
    install(key, indexCeVue)
}

export { Dialog, registerComponent as registerDialogComponent }

export default registerComponent
