<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import { toRef, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useHost } from '@/hooks/useHostElement'

const { getHostElement } = useHost()

defineOptions({
    name: 'Popover',
    inheritAttrs: false
})

interface Props {
    title: string
    content: string
    placement: string
    theme: string
    delay: number
    trigger: 'hover' | 'click' | 'contextmenu'
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    content: '',
    placement: 'top',
    theme: 'light',
    delay: 10,
    trigger: 'hover'
})

const placement = toRef(props, 'placement')

const { createPopper, visible, referenceEl, floatEl, floatArrow } = usePopper({
    placement: placement.value as any
})

const { floatingStyles, middlewareData, finalPlacement } = createPopper()

let timer: any = null

const dispatchEvent = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    timer = setTimeout(() => {
        visible.value = true
        console.log('visible', visible.value)
    }, props.delay || 10)
}
const handleOpen = () => {
    if (props.trigger !== 'hover') return
    dispatchEvent()
}

const handlerClick = () => {
    if (props.trigger !== 'click') return
    dispatchEvent()
}

const handlerContextmenu = () => {
    if (props.trigger !== 'contextmenu') return
    dispatchEvent()
}

const handleClose = () => {
    if (props.trigger !== 'hover') return
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    visible.value = false
}
const handleOtherClose = (e: Event) => {
    const target = e.target as HTMLElement
    const hostElement = getHostElement()

    const isContains = hostElement.contains(target)
    if (!isContains) {
        if (timer !== null) {
            clearTimeout(timer)
            timer = null
        }
        visible.value = false
    }
}
const handlerScroll = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    visible.value = false
}
onMounted(() => {
    if (props.trigger === 'click' || props.trigger === 'contextmenu') {
        useEventListener(window, 'click', handleOtherClose)
        useEventListener(window, 'scroll', handlerScroll)
    }
})
</script>

<template>
    <div
        tabindex="0"
        class="ivy-tooltip-ref"
        ref="referenceEl"
        @mouseenter="handleOpen"
        @mouseleave="handleClose"
        @click="handlerClick"
        @contextmenu.prevent="handlerContextmenu"
    >
        <slot name="reference"></slot>
    </div>
    <transition name="ivy-fade">
        <div
            class="content"
            ref="floatEl"
            v-if="visible"
            :data-placement="finalPlacement"
            :theme="props.theme"
            :style="floatingStyles"
        >
            <div
                class="arrow"
                ref="floatArrow"
                :data-placement="finalPlacement"
                :style="{
                    left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
                    top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : ''
                }"
            ></div>
            <div class="title" part="title" v-if="props.title">{{ props.title }}</div>
            <div class="text" part="content">
                <slot>{{ content }}</slot>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-tooltip-color: var(--ivy-text-color-primary);
    --ivy-tooltip-background-color: #fff;
    --ivy-tooltip-font-size: 13px;
    --ivy-tooltip-z-index: 1000;
    --ivy-tooltip-arrow-color: #fff;
    --ivy-tooltip-arrow-size: 8px;
    --ivy-tooltip-arrow-border-color: var(--ivy-border-color);
    --ivy-popover-min-width: 160px;
    display: inline-flex;
    position: relative;
}

:host([theme='dark']) {
    --ivy-tooltip-color: #fff;
    --ivy-tooltip-background-color: rgb(70, 76, 91);
    --ivy-tooltip-arrow-color: rgb(70, 76, 91);
    --ivy-tooltip-arrow-border-color: rgb(70, 76, 91);
}

.ivy-tooltip-ref {
    display: inline-flex;
}

.content {
    position: absolute;
    z-index: var(--ivy-tooltip-z-index);
    border: 1px solid var(--ivy-tooltip-arrow-border-color);
    border-radius: var(--ivy-border-radius);
    background-color: var(--ivy-tooltip-background-color);
    font-size: var(--ivy-tooltip-font-size);
    color: var(--ivy-tooltip-color);
    min-width: var(--ivy-popover-min-width);
}

.arrow {
    position: absolute;
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    width: var(--ivy-tooltip-arrow-size);
    height: 8px;
    transform: rotate(-45deg);
    border: 1px solid transparent;
    background-color: var(--ivy-tooltip-arrow-color);

    &[data-placement^='top'] {
        border-bottom-color: var(--ivy-tooltip-arrow-border-color);
        border-left-color: var(--ivy-tooltip-arrow-border-color);
        bottom: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }

    &[data-placement^='bottom'] {
        border-top-color: var(--ivy-tooltip-arrow-border-color);
        border-right-color: var(--ivy-tooltip-arrow-border-color);
        top: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }

    &[data-placement^='right'] {
        border-left-color: var(--ivy-tooltip-arrow-border-color);
        border-top-color: var(--ivy-tooltip-arrow-border-color);
        left: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }

    &[data-placement^='left'] {
        border-bottom-color: var(--ivy-tooltip-arrow-border-color);
        border-right-color: var(--ivy-tooltip-arrow-border-color);
        right: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }
}
.title {
    padding: 2px 12px;
    border-bottom: 1px solid var(--ivy-border-color);
    color: var(--ivy-text-color-primary);
    font-weight: 500;
}
.text {
    padding: 4px 12px;
    line-height: 1.5em;
}

.ivy-fade-enter-active,
.ivy-fade-leave-active {
    transition: opacity 0.3s;
}

.ivy-fade-enter-from,
.ivy-fade-leave-to {
    opacity: 0;
}

.ivy-fade-enter-to,
.ivy-fade-leave-from {
    opacity: 1;
}
</style>
