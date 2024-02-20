import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './src/index.vue'

const Textarea = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { Textarea, registerComponent as registerTextareaComponent }

export default registerComponent
