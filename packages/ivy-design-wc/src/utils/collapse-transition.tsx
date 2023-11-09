import { addClass, removeClass } from '@/utils/dom'
import { Transition, type SetupContext, type RendererElement } from 'vue'

const reset = (el: RendererElement) => {
    // removeClass(el as HTMLElement, 'collapse-transition')
    el.style.maxHeight = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
}

class CollapseTransition {
    constructor() {
        return {
            onBeforeEnter(el: any) {
                addClass(el, 'collapse-transition')
                if (!el.dataset) el.dataset = {}

                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.style.height = '0'
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
            },

            onEnter(el: any) {
                el.dataset.oldOverflow = el.style.overflow
                if (el.scrollHeight !== 0) {
                    el.style.height = el.scrollHeight + 'px'
                    el.style.paddingTop = el.dataset.oldPaddingTop
                    el.style.paddingBottom = el.dataset.oldPaddingBottom
                } else {
                    el.style.height = ''
                    el.style.paddingTop = el.dataset.oldPaddingTop
                    el.style.paddingBottom = el.dataset.oldPaddingBottom
                }

                el.style.overflow = 'hidden'
            },

            onAfterEnter(el: any) {
                // for safari: remove class then reset height is necessary
                removeClass(el, 'collapse-transition')
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
            },

            onBeforeLeave(el: any) {
                if (!el.dataset) el.dataset = {}
                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.dataset.oldOverflow = el.style.overflow

                el.style.height = el.scrollHeight + 'px'
                el.style.overflow = 'hidden'
            },

            onLeave(el: any) {
                if (el.scrollHeight !== 0) {
                    // for safari: add class after set height, or it will jump to zero height suddenly, weired
                    addClass(el, 'collapse-transition')
                    el.style.height = 0
                    el.style.paddingTop = 0
                    el.style.paddingBottom = 0
                }
            },

            onAfterLeave(el: any) {
                removeClass(el, 'collapse-transition')
                reset(el)
            },

            onEnterCancelled(el: any) {
                removeClass(el, 'collapse-transition')
                reset(el)
            },

            onLeaveCancelled(el: any) {
                removeClass(el, 'collapse-transition')
                reset(el)
            }
        }
    }
}

export const transition = function () {
    return {
        onBeforeEnter(el: any) {
            addClass(el, 'collapse-transition')
            if (!el.dataset) el.dataset = {}

            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom
            el.style.height = '0'
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
        },

        onEnter(el: any) {
            el.dataset.oldOverflow = el.style.overflow
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px'
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
            } else {
                el.style.height = ''
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
            }

            el.style.overflow = 'hidden'
        },

        onAfterEnter(el: any) {
            // for safari: remove class then reset height is necessary
            removeClass(el, 'collapse-transition')
            el.style.height = ''
            el.style.overflow = el.dataset.oldOverflow
        },

        onBeforeLeave(el: any) {
            if (!el.dataset) el.dataset = {}
            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom
            el.dataset.oldOverflow = el.style.overflow

            el.style.height = el.scrollHeight + 'px'
            el.style.overflow = 'hidden'
        },

        onLeave(el: any) {
            if (el.scrollHeight !== 0) {
                // for safari: add class after set height, or it will jump to zero height suddenly, weired
                addClass(el, 'collapse-transition')
                el.style.height = 0
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
            }
        },

        onAfterLeave(el: any) {
            removeClass(el, 'collapse-transition')
            el.style.height = ''
            el.style.overflow = el.dataset.oldOverflow
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
        }
    }
}

export default function (props: any, { attrs, slots }: SetupContext) {
    const Tr = new CollapseTransition()
    // console.log(Tr)
    return <Transition {...Tr} {...props} {...attrs} v-slots={slots}></Transition>
}
