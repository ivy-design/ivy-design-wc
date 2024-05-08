<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import { toRef } from 'vue'

defineOptions({
    name: 'Popover',
    inheritAttrs: false
})

interface Props {
    content: string
    placement: string
    theme: string
    delay: number
    trigger: string
}

const props = withDefaults(defineProps<Props>(), {
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

const handlerFocus = () => {
    console.log('focus')
    if (props.trigger !== 'focus') return
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
const handleBlur = () => {
    if (props.trigger !== 'focus') return
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    visible.value = false
}
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
        @focus="handlerFocus"
        @blur="handleBlur"
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
            <div class="text">
                <slot name="content">{{ content }}</slot>
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

.text {
    padding: 4px 12px;
    word-break: keep-all;
    white-space: nowrap;
    border: 1px solid var(--ivy-tooltip-arrow-border-color);
    border-radius: var(--ivy-border-radius);
    background-color: var(--ivy-tooltip-background-color);
    font-size: var(--ivy-tooltip-font-size);
    color: var(--ivy-tooltip-color);
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
