<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useEventListener, useResizeObserver, useThrottleFn } from '@vueuse/core'

defineOptions({
    name: 'Split',
    inheritAttrs: false
})

interface Props {
    value?: number
    unit?: 'px' | '%'
    vertical?: boolean
    min?: string
    max?: string
    size?: number
    triggerSize?: string
}

const props = withDefaults(defineProps<Props>(), {
    value: 50,
    unit: '%',
    vertical: false,
    min: '40px',
    size: 0,
    triggerSize: '4px'
})

interface Emits {
    (e: 'moveStart'): void
    (e: 'moving', value: number): void
    (e: 'moveEnd'): void
}
const emit = defineEmits<Emits>()

const pressed = ref(false)

const prevMousePosition = reactive({
    x: 0,
    y: 0
})

const triggerSize = computed(() => {
    if (props.vertical) {
        return {
            height: props.triggerSize,
            minHeight: props.triggerSize,
            maxHeight: props.triggerSize
        }
    }
    return {
        flex: props.triggerSize,
        minWidth: props.triggerSize,
        maxWidth: props.triggerSize
    }
})

// 获取分割面板的最小尺寸
const getMinSize = computed(() => {
    if (props.vertical) {
        return {
            minHeight: props.min
        }
    }
    return {
        minWidth: props.min
    }
})

const handleDragStart = useThrottleFn((ev: MouseEvent) => {
    pressed.value = true
    prevMousePosition.x = ev.clientX
    prevMousePosition.y = ev.clientY
    emit('moveStart')
}, 10)
const startSizeRange = computed(() => {
    const minSize = parseFloat(props.min)
    const triggerSize = parseFloat(props.triggerSize)
    if (props.vertical) {
        return {
            max: wrapRect.height - minSize - triggerSize,
            min: minSize
        }
    }
    return {
        max: wrapRect.width - minSize - triggerSize,
        min: minSize
    }
})
const handleDragMove = useThrottleFn((e: MouseEvent) => {
    if (!pressed.value) return
    if (props.vertical) {
        const { clientY } = e
        const tmp = clientY - prevMousePosition.y
        prevMousePosition.y = clientY
        const newVal = curValue.value + tmp
        if (startSizeRange.value.max < newVal) {
            curValue.value = startSizeRange.value.max
        } else if (startSizeRange.value.min > newVal) {
            curValue.value = startSizeRange.value.min
        } else {
            curValue.value = newVal
        }
    } else {
        const { clientX } = e
        const tmp = clientX - prevMousePosition.x
        prevMousePosition.x = clientX
        const newVal = curValue.value + tmp
        if (startSizeRange.value.max < newVal) {
            curValue.value = startSizeRange.value.max
        } else if (startSizeRange.value.min > newVal) {
            curValue.value = startSizeRange.value.min
        } else {
            curValue.value = newVal
        }
    }
    emit('moving', curValue.value)
}, 10)

const handleDragEnd = useThrottleFn(() => {
    pressed.value = false
    prevMousePosition.x = 0
    prevMousePosition.y = 0
    emit('moveEnd')
}, 10)

/**计算开始块的大小 */
const curValue = ref(props.value)

const getSplitStartSize = computed(() => {
    return {
        flex: `0 0 ${curValue.value}px`
    }
})

const wrapEl = ref<HTMLElement>()
const wrapRect = reactive({
    width: 0,
    height: 0
})

const initStartSize = () => {
    const val = typeof props.value === 'string' ? parseFloat(props.value as string) : props.value
    if (props.unit === 'px') {
        curValue.value = val
    } else {
        let realMaxSize = 0
        const triggerSize = parseFloat(props.triggerSize)

        if (props.vertical) {
            realMaxSize = wrapRect.height - triggerSize
            curValue.value = (realMaxSize * val) / 100
        } else {
            realMaxSize = wrapRect.width - triggerSize
            curValue.value = (realMaxSize * val) / 100
        }
    }
}
const getWrapRect = () => {
    if (!wrapEl.value) return
    const { width, height } = wrapEl.value.getBoundingClientRect()
    wrapRect.width = width
    wrapRect.height = height
}

const init = () => {
    getWrapRect()
    initStartSize()
}

const handleResize = () => {
    getWrapRect()
}

onMounted(() => {
    init()
    useResizeObserver(wrapEl.value, handleResize)
    useEventListener(document, 'mouseup', handleDragEnd)
    useEventListener(document, 'mousemove', handleDragMove)
})
</script>

<template>
    <div ref="wrapEl" :class="['split', { 'is-vertical': props.vertical, 'is-move': pressed }]">
        <div class="split-start" :style="{ ...getMinSize, ...getSplitStartSize }">
            <slot name="start"></slot>
        </div>
        <div class="split-trigger" :style="triggerSize" @mousedown="handleDragStart">
            <slot name="trigger"></slot>
        </div>
        <div class="split-end" :style="{ ...getMinSize }">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-split-border-color: var(--ivy-border-color, #dcdfe6);
    font-size: inherit;
    display: block;
}
.split {
    display: flex;
    border: 1px solid var(--ivy-split-border-color);
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-size: inherit;
    &-trigger {
        cursor: col-resize;
        box-sizing: border-box;
        background-color: var(--ivy-split-border-color);
    }

    &.is-move {
        user-select: none;
    }
    &-end {
        flex: auto;
    }
}

.is-vertical.split {
    flex-direction: column;
    .split-trigger {
        cursor: row-resize;
    }
}
</style>
