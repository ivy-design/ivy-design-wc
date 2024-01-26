<script setup lang="ts">
import { CloseIcon as Close, Success, Warning, Error, Info } from '@/utils/icons'
import { useExpose } from '@/hooks/useExpose'
import { onMounted, ref, computed } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useHost } from '@/hooks/useHostElement'

const { host } = useHost()

const iconMap = {
    success: Success,
    warning: Warning,
    error: Error,
    info: Info
}
defineOptions({
    name: 'Notification',
    inheritAttrs: false
})

interface Props {
    type?: 'success' | 'info' | 'warning' | 'error'
    title?: string
    message?: string
    duration?: number
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
    showClose?: boolean
    offset?: number
    onClose?: () => void
}

const props = withDefaults(defineProps<Props>(), {
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0
})
const visible = ref(false)

const wrapEl = ref<HTMLElement>()

const openMethod = () => {
    visible.value = true
}
const handleClose = () => {
    visible.value = false
    clearTimeout(timer.value)
}
const { setExposes } = useExpose()
const timer = ref()

const autoClose = () => {
    if (props.duration > 0) {
        timer.value = setTimeout(() => {
            visible.value = false
            clearTimeout(timer.value)
        }, props.duration)
    }
}

const handleTransitionEnd = () => {
    if (visible.value) {
        autoClose()
    } else {
        host.value?.remove()
        props.onClose?.()
    }
}
onMounted(() => {
    setExposes({
        open: openMethod,
        close: handleClose
    })

    useEventListener(wrapEl.value, 'transitioncancel', handleTransitionEnd)
    useEventListener(wrapEl.value, 'transitionend', handleTransitionEnd)
})

const getTransitionName = computed(() => {
    const position = props.position
    const direction = position.split('-')[1]
    return `slide-${direction}`
})
</script>

<template>
    <transition :name="getTransitionName">
        <div class="ivy-notification" v-show="visible" ref="wrapEl">
            <div class="ivy-notification-type" :data-type="props.type" v-if="props.type">
                <component :is="iconMap[props.type]"></component>
            </div>
            <div class="ivy-notification-content">
                <div class="ivy-notification-header">
                    <div class="ivy-notification-title">{{ props.title }}</div>
                    <div class="ivy-notification-close" v-if="props.showClose" @click="handleClose">
                        <Close />
                    </div>
                </div>
                <div class="ivy-notification-body">
                    {{ props.message }}
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-notification-font-size: var(--ivy-font-size);
    --ivy-notification-title-font-size: 16px;
    --ivy-notification-width: 340px;
    display: inline-block;
    position: fixed;
    z-index: 1000;
    background-color: transparent;
}
:host([position$='left']) {
    left: 12px;
}
:host([position$='right']) {
    right: 12px;
}
:host([position^='top']) {
    top: 12px;
}
:host([position^='bottom']) {
    bottom: 12px;
}
.ivy-notification {
    display: flex;
    width: var(--ivy-notification-width);
    padding: 12px 16px;
    border: 1px solid var(--ivy-border-color);
    border-radius: var(--ivy-border-radius-medium);
    box-shadow: var(--ivy-box-shadow);
    position: relative;
    background-color: var(--ivy-color-white);
    &-type {
        font-size: 16px;
        padding-top: 2px;
        margin-right: 8px;
        &[data-type='success'] {
            color: var(--ivy-color-success);
        }
        &[data-type='warning'] {
            color: var(--ivy-color-warning);
        }
        &[data-type='error'] {
            color: var(--ivy-color-danger);
        }
        &[data-type='info'] {
            color: var(--ivy-color-info);
        }
    }
    &-close {
        position: absolute;
        right: 16px;
        top: 12px;
        cursor: pointer;
    }
    &-title {
        font-size: var(--ivy-notification-title-font-size);
        color: var(--ivy-text-color-primary);
    }
    &-body {
        font-size: var(--ivy-notification-font-size);
        color: var(--ivy-text-color-secondary);
        margin-top: 8px;
    }
}
.slide {
    &-left {
        &-enter-active,
        &-leave-active {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            transform-origin: left center;
        }

        &-enter-to,
        &-leave-from {
            transform: scale3d(1, 1, 1);
        }

        &-enter-from,
        &-leave-to {
            transform: scale3d(0, 0, 1);
        }
    }
    &-right {
        &-enter-active,
        &-leave-active {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            transform-origin: right center;
        }
        &-enter-to,
        &-leave-from {
            transform: scale3d(1, 1, 1);
        }

        &-enter-from,
        &-leave-to {
            transform: scale3d(0, 0, 1);
        }
    }
}
</style>
