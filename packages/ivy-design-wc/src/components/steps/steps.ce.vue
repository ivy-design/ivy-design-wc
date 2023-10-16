<script setup lang="ts">
import { onMounted, watch, toRef } from 'vue'
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

const { el } = useHostElement()
const init = () => {
    let children = (el.value as HTMLSlotElement)
        .assignedElements()
        .filter((c: any) => c.tagName === 'IVY-STEP')
    const current = parseInt(props.current)
    children.forEach((el: any, index: number) => {
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
watch(currentIndex, () => {
    init()
})
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
