<script setup lang="ts">
import { ref, onMounted } from 'vue'
import usePopper from '@/hooks/usePopper'
import { shift, type VirtualElement } from '@floating-ui/vue'
import { useEventListener } from '@vueuse/core'
import { useHost } from '@/hooks/useHostElement'

defineOptions({
    name: 'Contextmenu',
    inheritAttrs: false
})

const wrapper = ref<HTMLElement | null>(null)

const {
    visible,
    referenceEl,
    floatEl: contextmenu,
    createPopper
} = usePopper({
    middleware: [shift()]
})
const { floatingStyles } = createPopper()

const handleClose = () => {
    visible.value = false
}

const handleContextmenu = (event: any) => {
    let { clientX, clientY } = event
    referenceEl.value = {
        getBoundingClientRect: () => {
            return {
                width: 0,
                height: 0,
                x: clientX,
                y: clientY,
                top: clientY,
                left: clientX,
                right: clientX,
                bottom: clientY
            }
        }
    } as VirtualElement
    visible.value = true
}

const handleScroll = () => {
    handleClose()
}

const { host } = useHost()
const handleCommand = (ev: any) => {
    const target: HTMLElement = ev.target

    const isCommandItem = target.dataset.command
    if (isCommandItem) {
        const command = target.getAttribute('command')
        host.value?.dispatchEvent(
            new CustomEvent('command', {
                detail: command
            })
        )
        handleClose()
    }
}

onMounted(() => {
    useEventListener(window, 'scroll', handleScroll)
    useEventListener(window, 'click', handleScroll)
    useEventListener(window, 'contextmenu', handleScroll)
})
</script>

<template>
    <div class="contextmenu" ref="wrapper" @contextmenu.stop.prevent="handleContextmenu">
        <slot></slot>
        <transition name="zoom-in">
            <div
                ref="contextmenu"
                v-if="visible"
                class="contextmenu__wrap"
                :style="floatingStyles"
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
    box-sizing: border-box;
}
.contextmenu {
    position: relative;
    width: 100%;
    height: 100%;

    &__wrap {
        box-shadow: var(--ivy-box-shadow);
        position: absolute;

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
