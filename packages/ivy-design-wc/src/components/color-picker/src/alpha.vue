<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

defineOptions({
    name: 'Alpha'
})

export interface HueProps {
    modelValue: number
    width: number
    barColor: string
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

const value2x = () => {
    return Math.round((value.value / 100) * props.width)
}

const x = ref(value2x())
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
const calcAlpha = (x: number) => {
    return Math.round((x / props.width) * 100)
}

const handlerMouseDown = (e: MouseEvent) => {
    pressed = true
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcAlpha(x.value)
}
const handlerMouseMove = (e: MouseEvent) => {
    if (!pressed) return
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcAlpha(x.value)
}
const handleMouseUp = (e: MouseEvent) => {
    if (!pressed) return
    pressed = false
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcAlpha(x.value)
}
const handleMouseLeave = (e: MouseEvent) => {
    if (!pressed) return
    pressed = false
    const { offsetX } = e
    x.value = updateX(offsetX)
    value.value = calcAlpha(x.value)
}

watchEffect(() => {
    console.log(value.value, x.value)
})
</script>

<template>
    <div
        style="
            background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
                linear-gradient(135deg, #ccc 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #ccc 75%),
                linear-gradient(135deg, transparent 75%, #ccc 75%);
            height: 12px;
            position: relative;
            background-size: 12px 12px;
            background-position:
                0 0,
                6px 0,
                6px -6px,
                0 6px;
        "
        @mousedown="handlerMouseDown"
        @mousemove="handlerMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseLeave"
        :style="{ width: `${props.width}px` }"
    >
        <div :style="{ background: props.barColor, height: '100%' }"></div>
        <div
            :style="{
                position: 'absolute',
                left: `${x}px`,
                top: 0,
                cursor: 'pointer',
                width: '4px',
                height: '100%',
                borderRadius: '1px',
                backgroundColor: 'white',
                boxSizing: 'border-box',
                boxShadow: `0 0 2px rgba(0, 0, 0, 0.5)`,
                pointerEvents: 'none'
            }"
        ></div>
    </div>
</template>
