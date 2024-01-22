<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineOptions({
    name: 'Col'
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
const el = ref<HTMLSlotElement>()
onMounted(() => {
    const host = (el.value as any).parentNode.host
    host.style.setProperty('--ivy-span', props.span.toString())
    host.style.setProperty('--ivy-offset', props.offset.toString())
})
</script>

<template>
    <slot ref="el"></slot>
</template>

<style lang="scss">
:host {
    display: inline-flex;
    flex: 0 0 calc(var(--ivy-span) / 24 * 100%);
    margin-left: calc(var(--ivy-offset) / 24 * 100%);
}
</style>
