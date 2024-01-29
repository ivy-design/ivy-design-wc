<script setup lang="ts">
import { onMounted } from 'vue'
import { useHost } from '@/hooks/useHostElement'
import type { StyleValue } from 'vue'

defineOptions({
    name: 'Icon',
    inheritAttrs: false
})

const props = defineProps({
    name: String,
    color: String,
    size: String
})

const getStyle = () => {
    let style: Record<string, StyleValue> = {
        color: 'inherit',
        'font-size': 'inherit'
    }
    if (props.color) style.color = props.color
    if (props.size) style['font-size'] = props.size
    return style
}

const getClass = () => {
    const target = ['ivy-icon']
    if (props.name) target.push(`ivy-icon-${props.name}`)
    return target
}
const { host } = useHost()
onMounted(() => {
    if (!host.value) return
    const classList = getClass()

    host.value.classList.add(...classList)
    const styles = getStyle()
    for (let key in styles) {
        host.value.style.setProperty(key, styles[key] as string)
    }
})
</script>

<template>
    <slot> </slot>
</template>

<style>
:host {
    display: inline-flex;
    font-size: inherit;
}

:host([spin]) .ivy-icon {
    animation: spin 1.8s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
