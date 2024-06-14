<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { calcLightness, calcSaturation } from './utils'

const props = defineProps<{
    hue: number
    s: number
    l: number
    width?: number
}>()

const curColor = computed(() => {
    return `hsl(${props.hue}deg, ${props.s}%, ${props.l}%)`
})

const s2x = (s: number) => {
    return (s / 100) * 140
}

const l2y = (l: number) => {
    return -((l / 100) * 250 - 100)
}

const point = reactive({
    x: s2x(props.s),
    y: l2y(props.l)
})
const updatePoint = (x: number, y: number) => {
    let t = { x: x, y: y }
    if (x < 0) {
        t.x = 0
    } else if (x > 260) {
        t.x = 260
    }

    if (y < 0) {
        t.y = 0
    } else if (y > 140) {
        t.y = 140
    }

    return t
}
let isPress = false
const handleChooseDown = (ev: MouseEvent) => {
    isPress = true
    const { offsetX: x, offsetY: y } = ev
    point.x = x
    point.y = y
}

const handleChooseLeave = (ev: MouseEvent) => {
    if (!isPress) return
    isPress = false
    const { offsetX, offsetY } = ev
    const { x, y } = updatePoint(offsetX, offsetY)
    point.x = x
    point.y = y
}

const handleChooseUp = (ev: MouseEvent) => {
    isPress = false
    const { offsetX, offsetY } = ev
    const { x, y } = updatePoint(offsetX, offsetY)
    point.x = x
    point.y = y
}

const handleChooseMove = useThrottleFn((ev: MouseEvent) => {
    if (!isPress) return
    const { offsetX: x, offsetY: y } = ev
    point.x = x
    point.y = y
}, 10)
const emit = defineEmits<{ change: [val: Record<string, number>] }>()
watch(point, (val) => {
    const saturation = calcSaturation(val.x)
    const lightness = calcLightness(val.y)
    emit('change', { s: saturation, l: lightness })
})
</script>

<template>
    <div
        :style="{
            backgroundColor: curColor,
            height: '140px',
            backgroundImage:
                'linear-gradient(0deg, rgb(0, 0, 0), transparent), linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0))',
            position: 'relative',
            width: '260px'
        }"
        class="pane-choose"
        @mousedown="handleChooseDown"
        @mousemove="handleChooseMove"
        @mouseup="handleChooseUp"
        @mouseleave="handleChooseLeave"
    >
        <span
            class="pane-choose-utils"
            :style="{
                display: 'block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                boxSizing: 'border-box',
                border: '1px solid white',
                position: 'absolute',
                pointerEvents: 'none',
                left: `${point.x - 4}px`,
                top: `${point.y - 4}px`
            }"
        ></span>
    </div>
</template>
