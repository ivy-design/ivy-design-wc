import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.vue'

const AspectRatio = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { AspectRatio, registerComponent as registerAspectRatioComponent }

export default registerComponent
