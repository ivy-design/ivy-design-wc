<script setup lang="ts">
import { onMounted, provide, toRef } from 'vue'
import { useHostElement } from '@/use/useHostElement'

defineOptions({
    name: 'Steps',
    inheritAttrs: false
})

const props = defineProps({
    current: {
        type: String,
        default: '0'
    }
})

const currentIndex = toRef(props, 'current')

const { el, getHostElement } = useHostElement()
const init = () => {
    const children = el.value
        .assignedElements()
        .filter((c: HTMLElement) => c.tagName === 'IVY-STEP')
    const current = parseInt(props.current)
    children.forEach((el: any, index: Number) => {
        el.index = index + 1
        if (index < current) {
            el.setAttribute('status', 'finish')
        } else if (index === current) {
            el.setAttribute('status', 'process')
        } else {
            el.setAttribute('status', 'wait')
        }
    })
}
onMounted(() => {
    init()
})
</script>

<template>
    <slot ref="el"></slot>
</template>

<style lang="scss">
:host {
    display: flex;
    background-color: #fff;
}
</style>
