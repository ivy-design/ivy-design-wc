<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { hslToPoint, pointToHsl } from './utils'

const props = defineProps<{
    hue: number
    s: number
    l: number
    width?: number
}>()

const curColor = computed(() => {
    return `hsl(${props.hue}deg, ${props.s}%, ${props.l}%)`
})

const emit = defineEmits<{
    'update:hue': [val: number]
    change: [val: Record<string, number>]
}>()

const paneColor = computed({
    set: (val) => {
        emit('update:hue', val as unknown as number)
    },
    get: () => {
        return `hsl(${props.hue}deg, 100%, 50%)`
    }
})

const PANE_WIDTH = 260
const PANE_HEIGHT = 140

const point = reactive({
    x: 0,
    y: 0
})

const syncPointFromProps = () => {
    const { x, y } = hslToPoint(props.s, props.l, PANE_WIDTH, PANE_HEIGHT)
    point.x = x
    point.y = y
}
const updatePoint = (x: number, y: number) => {
    let t = { x: x, y: y }
    if (x < 0) {
        t.x = 0
    } else if (x > PANE_WIDTH) {
        t.x = PANE_WIDTH
    }

    if (y < 0) {
        t.y = 0
    } else if (y > PANE_HEIGHT) {
        t.y = PANE_HEIGHT
    }

    return t
}
let isPress = false
const handleChooseDown = (ev: MouseEvent) => {
    isPress = true
    const { offsetX: x, offsetY: y } = ev
    const { x: nx, y: ny } = updatePoint(x, y)
    point.x = nx
    point.y = ny
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
    const { x: nx, y: ny } = updatePoint(x, y)
    point.x = nx
    point.y = ny
}, 10)

watch(point, (val) => {
    const { s, l } = pointToHsl(val.x, val.y, PANE_WIDTH, PANE_HEIGHT)
    emit('change', { s, l })
})

watch(
    [() => props.s, () => props.l],
    () => {
        if (!isPress) {
            syncPointFromProps()
        }
    },
    { immediate: true }
)

syncPointFromProps()
</script>

<template>
    <div
        :style="{
            backgroundColor: paneColor,
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
                backgroundColor: curColor,
                left: `${point.x - 4}px`,
                top: `${point.y - 4}px`
            }"
        ></span>
    </div>
</template>
