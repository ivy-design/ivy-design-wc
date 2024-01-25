<script setup lang="ts">
import { CloseIcon as Close, Success, Warning, Error, Info } from '@/utils/icons'

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
    type: 'info',
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0
})
</script>

<template>
    <div class="ivy-notification">
        <div class="ivy-notification-type" v-if="props.type">
            <component :is="iconMap[props.type]"></component>
        </div>
        <div class="ivy-notification-content">
            <div class="ivy-notification-header">
                <div class="ivy-notification-title">{{ props.title }}</div>
                <div class="ivy-notification-close"><Close /></div>
            </div>
            <div class="ivy-notification-body">
                {{ props.message }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    display: inline-block;
}
.ivy-notification {
    display: flex;
    width: 340px;
    padding: 12px 16px;
}
</style>
