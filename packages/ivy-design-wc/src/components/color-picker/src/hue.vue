<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

defineOptions({
    name: 'Hue'
})

export interface HueProps {
    modelValue: number
    width: number
}

const props = defineProps<HueProps>()

const emit = defineEmits<{ 'update:modelValue': [val: number] }>()

const value = computed({
    get() {
        return props.modelValue
    },
    set(value: number) {
        emit('update:modelValue', value)
    }
})

const x = ref(0)
const updateX = (x: number) => {
    if (x < 0) {
        return 0
    } else if (x > props.width) {
        return props.width
    } else {
        return x
    }
}
let pressed = false
const calcHue = (x: number) => {
    return Math.round((x / props.width) * 360)
}

const handlerMouseDown = (e: MouseEvent) => {
    pressed = true
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcHue(x.value)
}
const handlerMouseMove = (e: MouseEvent) => {
    if (!pressed) return
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcHue(x.value)
}
const handleMouseUp = (e: MouseEvent) => {
    if (!pressed) return
    pressed = false
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcHue(x.value)
}
const handleMouseLeave = (e: MouseEvent) => {
    if (!pressed) return
    pressed = false
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcHue(x.value)
}

watchEffect(() => {
    console.log(value.value, x.value)
})
</script>

<template>
    <div
        @mousedown="handlerMouseDown"
        @mousemove="handlerMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseLeave"
        :style="{
            width: `${props.width}px`,
            height: '8px',
            position: 'relative',
            background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)'
        }"
    >
        <div
            :style="{
                position: 'absolute',
                left: `${x}px`,
                top: 0,
                cursor: 'pointer',
                width: '3px',
                height: '100%',
                backgroundColor: 'white',
                boxSizing: 'border-box',
                boxShadow: `0 0 2px rgba(0, 0, 0, 0.5)`,
                pointerEvents: 'none'
            }"
        ></div>
    </div>
</template>
