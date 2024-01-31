<script setup lang="ts">
import type { Rect } from '@popperjs/core'
import { nextTick } from 'vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineOptions({
    name: 'Contextmenu',
    inheritAttrs: false
})

const visible = ref(false)
const contextmenu = ref<HTMLElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

const emit = defineEmits(['command'])

const handleClose = () => {
    visible.value = false
}

const point = ref({ x: 0, y: 0 })

const handleContextmenu = (event: any) => {
    let { layerX: x, layerY: y } = event
    visible.value = true
    nextTick(() => {
        const { width: wrapWidth = 0 } = wrapper.value?.getBoundingClientRect() as Rect
        const styles = getComputedStyle(contextmenu.value as HTMLElement)
        const width = parseFloat(styles.getPropertyValue('width'))

        if (wrapWidth < width + x) {
            x = x - width
        }
        point.value.x = x
        point.value.y = y
    })
}

const handleScroll = () => {
    handleClose()
}

const handleCommand = (ev: any) => {
    const target: HTMLElement = ev.target

    const isCommandItem = target.dataset.command
    if (isCommandItem) {
        const command = target.getAttribute('command')
        emit('command', command)
        handleClose()
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleScroll)
    window.addEventListener('contextmenu', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('click', handleScroll)
    window.removeEventListener('contextmenu', handleScroll)
})
</script>

<template>
    <div class="contextmenu" ref="wrapper" @contextmenu.stop.prevent="handleContextmenu">
        <slot></slot>
        <transition name="zoom-in">
            <div
                ref="contextmenu"
                v-show="visible"
                class="contextmenu__wrap"
                :style="{ top: `${point.y}px`, left: `${point.x}px` }"
                @click="handleCommand"
            >
                <slot name="menu"> </slot>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
    position: relative;
}
.contextmenu {
    position: relative;
    width: 100%;
    height: 100%;

    &__wrap {
        box-shadow: var(--ivy-box-shadow);
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--ivy-color-white);
        z-index: var(--ivy-contextmenu-z-index, 10);
        padding: 4px 0;
        font-size: 14px;
        border-radius: var(--ivy-border-radius-medium);
        border: 1px solid var(--ivy-border-color-light);
        overflow: hidden;
    }
}
::slotted([data-command='item']) {
    display: block;
    padding: 0 12px;
    line-height: 30px;
    transition: background-color 0.3s;
    cursor: pointer;
    user-select: none;
    min-width: 140px;
}
::slotted([data-command='item']:hover) {
    background-color: var(--ivy-border-color-light);
}
::slotted([data-command='line']) {
    height: 1px;
    background-color: var(--ivy-border-color);
    padding: 0;
    pointer-events: none;
    cursor: default;
}
.zoom-in-enter-active,
.zoom-in-leave-active {
    transform-origin: top center;
    transition:
        transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
        opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.zoom-in-enter-from,
.zoom-in-leave-to {
    opacity: 0;
    transform: scale(0, 0);
}

.zoom-in-leave-from,
.zoom-in-enter-to {
    opacity: 1;
    transform: scale(1, 1);
}
</style>