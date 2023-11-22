import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'
import itemCeVue from './item.ce.vue'

const Timeline = defineCustomElement(comp)
const registerTimelineComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const TimelineItem = defineCustomElement(itemCeVue)
const registerTimelineItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${itemCeVue.name}`
    install(key, itemCeVue)
}

export { Timeline, registerTimelineComponent, TimelineItem, registerTimelineItemComponent }

export default () => {
    registerTimelineComponent()
    registerTimelineItemComponent()
}
