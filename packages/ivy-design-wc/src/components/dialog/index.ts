import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import Comp from './index.vue'

const Dialog = defineCustomElement(Comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${Comp.name}`
    install(key, Comp)
}

export { Dialog, registerComponent as registerDialogComponent }

export default registerComponent
