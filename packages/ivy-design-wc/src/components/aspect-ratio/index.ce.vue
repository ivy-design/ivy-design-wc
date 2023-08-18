<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted, ref } from 'vue'
defineOptions({
    name: 'AspectRatio'
})

const props = defineProps({
    ratio: {
        type: String,
        default: '1:1'
    }
})

const getRatio = computed(() => {
    const [width, height] = props.ratio.split(':')
    return {
        width: Number(width),
        height: Number(height)
    }
})

const el = ref<HTMLElement>()

const setHeight = () => {
    const { width: widthRatio, height: heightRatio } = getRatio.value
    const rect = el.value?.getBoundingClientRect()
    const width = rect?.width as number
    const height = width * (heightRatio / widthRatio)

    el.value?.style.setProperty('height', `${height}px`)
}

const handlerWindowResize = () => {
    const uid = requestAnimationFrame(() => {
        setHeight()
        cancelAnimationFrame(uid)
    })
}

onMounted(() => {
    setHeight()
    window.addEventListener('resize', handlerWindowResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handlerWindowResize)
})

watch(
    () => props.ratio,
    () => {
        handlerWindowResize()
    }
)
</script>

<template>
    <div class="aspect-ratio" ref="el">
        <slot></slot>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}
</style>
