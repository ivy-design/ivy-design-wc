<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHost } from '@/hooks/useHostElement'
import { curMessageIndex } from './utils'
import useBroadCastChannel from '@/hooks/useBroadcastChannel'
import { Success, Warning, Error, Info } from '@/utils/icons'
import { useEventListener } from '@vueuse/core'

defineOptions({
    name: 'Message',
    inheritAttrs: false
})

export type MessagePropsType = 'success' | 'warning' | 'error' | 'info'

export interface MessageProps {
    type: MessagePropsType
    content: string
    duration: number
}

const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    content: '',
    duration: 3000
})

const { getHostElement } = useHost()

const visible = ref(false)
const wrap = ref<HTMLElement>()

const curIndex = ref(curMessageIndex.value)

const { initBroadcastChannel, postMessage, closeBroadcastChannel } =
    useBroadCastChannel('ivy-message')

const calcTop = () => {
    const compHeight = curIndex.value > 0 ? curIndex.value * 40 : 0
    const gapHeight = (curIndex.value + 1) * 20
    return compHeight + gapHeight
}

const broadCastCallback = (data: any, host: HTMLElement) => {
    if (curIndex.value > data) {
        curIndex.value = curIndex.value > 0 ? curIndex.value - 1 : 0
    }
    const top = calcTop()
    host.style.top = `${top}px`
}

const open = () => {
    visible.value = true
}
defineExpose({
    open
})
onMounted(() => {
    // visible.value = true

    const host = getHostElement() as HTMLElement
    initBroadcastChannel((data: any) => broadCastCallback(data, host))
    useEventListener(wrap.value, 'transitionstart', () => {
        if (visible.value) {
            const top = calcTop()
            host.style.top = `${top}px`
            curMessageIndex.value = curIndex.value + 1
        }
    })
    useEventListener(wrap.value, 'transitioncancel', () => {
        if (!visible.value) {
            if (curMessageIndex.value > 1) {
                postMessage(curIndex.value)
                closeBroadcastChannel()
                curMessageIndex.value = curMessageIndex.value - 1
            } else {
                curMessageIndex.value = 0
            }

            host.remove()
        } else {
            const timer = setTimeout(() => {
                visible.value = false
                clearTimeout(timer)
            }, props.duration)
        }
    })
    useEventListener(wrap.value, 'transitionend', () => {
        if (!visible.value) {
            if (curMessageIndex.value > 1) {
                postMessage(curIndex.value)
                closeBroadcastChannel()
                curMessageIndex.value = curMessageIndex.value - 1
            } else {
                curMessageIndex.value = 0
            }

            host.remove()
        } else {
            const timer = setTimeout(() => {
                visible.value = false
                clearTimeout(timer)
            }, props.duration)
        }
    })
})

const iconMap = {
    success: Success,
    warning: Warning,
    error: Error,
    info: Info
}
</script>

<template>
    <transition name="fade-down">
        <div class="message" v-show="visible" ref="wrap">
            <component :is="iconMap[props.type]" class="icon"></component>
            <div class="message-content">{{ props.content }}</div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    width: 100%;
    display: flex;
    justify-content: center;
    pointer-events: none;
    font-size: var(--ivy-font-size);
    transition: all 0.3s;
    font-family: var(--ivy-font-family);
    position: fixed;
    transition: top 0.3s;
}

.message {
    display: inline-flex;
    margin: 0 auto;
    background-color: white;
    pointer-events: all;
    padding: 8px 12px;
    border: 1px solid var(--ivy-border-color-light);
    border-radius: 4px;
    align-items: center;
    box-shadow: var(--ivy-box-shadow-light);
    position: relative;
}
.icon {
    margin-right: 8px;
    font-size: 16px;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
:host([type='success']) .message {
    background-color: var(--ivy-color-success-light-9, #f0f9eb);
    color: var(--ivy-color-success, #67c23a);
}
:host([type='success']) .icon {
    color: var(--ivy-color-success, #67c23a);
}

:host([type='warning']) .message {
    background-color: var(--ivy-color-warning-light-9, #fdf6ec);
    color: var(--ivy-color-warning, #e6a23c);
}
:host([type='warning']) .icon {
    color: var(--ivy-color-warning, #e6a23c);
}

:host([type='info']) .message {
    background-color: var(--ivy-color-info-light-9, #f4f4f5);
    color: var(--ivy-color-info, #909399);
}
:host([type='info']) .icon {
    color: var(--ivy-color-info, #909399);
}

:host([type='error']) .message {
    background-color: var(--ivy-color-danger-light-9, #fef0f0);
    color: var(--ivy-color-danger, #f56c6c);
}
:host([type='error']) .icon {
    color: var(--ivy-color-danger, #f56c6c);
}

.fade-down {
    &-enter-active,
    &-leave-active {
        transition: transform 0.3s ease-in-out;
    }

    &-enter-from,
    &-leave-to {
        transform: translate3d(0, -100%, 0);
    }

    &-enter-to,
    &-leave-from {
        transform: translate3d(0, 0, 0);
    }
}
</style>
