<script setup lang="ts">
import { onMounted, useHost } from 'vue'

defineOptions({
    name: 'Col',
    inheritAttrs: false
})

const props = defineProps({
    span: {
        type: Number,
        default: 24
    },
    offset: {
        type: Number,
        default: 0
    }
})
const host: any = useHost()
onMounted(() => {
    host.style.setProperty('--ivy-span', props.span.toString())
    host.style.setProperty('--ivy-offset', props.offset.toString())
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    display: inline-flex;
    flex: 0 0 calc(var(--ivy-span) / 24 * 100%);
    margin-left: calc(var(--ivy-offset) / 24 * 100%);
}
</style>
