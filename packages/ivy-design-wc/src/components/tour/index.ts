import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './src/index.vue'
import step from './src/step.vue'

const Tour = defineCustomElement(comp)

const registerTourComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const TourStep = defineCustomElement(step)
const registerTourStepComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const createTour = (options: any[] = []) => {
    const tour = new Tour()

    options.forEach(() => {
        const step = new TourStep()
        tour.appendChild(step)
    })
}

export { Tour, registerTourComponent, registerTourStepComponent, createTour }

export default () => {
    registerTourComponent()
    registerTourStepComponent()
}
