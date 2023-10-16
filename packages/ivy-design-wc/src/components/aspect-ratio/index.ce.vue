<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import useHostElement from '@/use/useHostElement'

defineOptions({
    name: 'AspectRatio',
    inheritAttrs: false
})

const { el, getHostElement } = useHostElement()

const props = defineProps({
    ratio: {
        type: String,
        default: '1/1',
        validator: (value: string) => {
            const [ratioX = 1, ratioY = 1] = value.split('/')
            return !isNaN(Number(ratioX)) && !isNaN(Number(ratioY))
        }
    }
})
const resize = () => {
    const host = getHostElement()
    if (!host) (host as any).style.height = 0
    const rect = host.getBoundingClientRect()
    const [ratioX = 1, ratioY = 1] = props.ratio.split('/')
    const width = rect.width
    const height = (width / Number(ratioX)) * Number(ratioY)
    ;(host as any).style.height = `${height}px`
}

watch(
    () => props.ratio,
    () => {
        resize()
    }
)

onMounted(() => {
    resize()
    window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
})
</script>

<template>
    <div class="ivy-aspect-ratio" ref="el">
        <slot></slot>
    </div>
</template>

<style>
:host {
    display: block;
}
</style>
