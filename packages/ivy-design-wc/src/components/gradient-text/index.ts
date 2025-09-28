import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './src/index.vue'

const GradientText = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export { GradientText, registerComponent as registerGradientTextComponent }

export default registerComponent
