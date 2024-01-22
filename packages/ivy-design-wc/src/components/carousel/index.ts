import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import index from './index.vue'
import item from './item.vue'

const Carousel = defineCustomElement(index)
const registerCarouselComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${index.name}`
    install(key, index)
}

const CarouselItem = defineCustomElement(item)
const registerCarouselItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${item.name}`
    install(key, item)
}

export { Carousel, registerCarouselComponent, CarouselItem, registerCarouselItemComponent }

export default (prefix = 'Ivy') => {
    registerCarouselComponent(prefix)
    registerCarouselItemComponent(prefix)
}
