<script setup lang="ts">
import { onMounted } from 'vue'
import { useHost } from '@/hooks/useHostElement'

defineOptions({
    name: 'GradientText',
    inheritAttrs: false
})

const props = defineProps({
    gradient: String,
    size: String,
    type: {
        type: String,
        default: 'primary',
        validator: (value: string) =>
            ['primary', 'success', 'error', 'warning', 'info'].includes(value)
    }
})

const { host } = useHost()
onMounted(() => {
    if (props.gradient) {
        console.log(props.gradient, host.value)
        host.value.style.backgroundImage = `linear-gradient(${props.gradient})`
    }
    if (props.size) {
        host.value.style.fontSize = props.size
    }
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    --start-color: var(--ivy-color-primary);
    --end-color: var(--ivy-color-primary-light-5);
    display: inline-block;
    background-clip: text;
    white-space: nowrap;
    color: rgba($color: #000000, $alpha: 0);
    background-image: linear-gradient(90deg, var(--start-color), var(--end-color));
    font-size: var(--ivy-font-size);
}
:host([type='success']) {
    --start-color: var(--ivy-color-success);
    --end-color: var(--ivy-color-success-light-5);
}
:host([type='error']) {
    --start-color: var(--ivy-color-error);
    --end-color: var(--ivy-color-error-light-5);
}
:host([type='warning']) {
    --start-color: var(--ivy-color-warning);
    --end-color: var(--ivy-color-warning-light-5);
}
:host([type='info']) {
    --start-color: var(--ivy-color-info);
    --end-color: var(--ivy-color-info-light-5);
}
</style>
