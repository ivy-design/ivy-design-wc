import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const CopyToClipboard = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { CopyToClipboard, registerComponent as registerCopyToClipboardComponent }

export default registerComponent
