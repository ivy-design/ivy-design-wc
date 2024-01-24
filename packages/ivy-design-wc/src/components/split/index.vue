<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useEventListener, useResizeObserver, useThrottleFn } from '@vueuse/core'

defineOptions({
    name: 'Split',
    inheritAttrs: false
})

interface Props {
    value?: string
    vertical?: boolean
    min?: string
    max?: string
    size?: number
    triggerSize?: string
}

const props = withDefaults(defineProps<Props>(), {
    value: '50%',
    vertical: false,
    min: '40px',
    max: '50%',
    size: 0,
    triggerSize: '2px'
})

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

const drag = ref(false)

const handleDragStart = useThrottleFn((ev: MouseEvent) => {
    console.log(ev)
    drag.value = true

    pressed.value = true
    prevMousePosition.x = ev.clientX
    prevMousePosition.y = ev.clientY
}, 10)

const handleDragMove = useThrottleFn((e: MouseEvent) => {
    if (!pressed.value) return
    if (props.vertical) {
        const { clientY } = e
        const tmp = clientY - prevMousePosition.y
        prevMousePosition.y = clientY
        const numberValue = parseFloat(curValue.value)
        curValue.value = numberValue + tmp + 'px'
    } else {
        const { clientX } = e
        const tmp = clientX - prevMousePosition.x
        prevMousePosition.x = clientX
        const numberValue = parseFloat(curValue.value)
        curValue.value = numberValue + tmp + 'px'
    }
}, 10)

const handleDragEnd = useThrottleFn((e: MouseEvent) => {
    console.log(e)
    drag.value = false
    pressed.value = false
    prevMousePosition.x = 0
    prevMousePosition.y = 0
}, 10)

/**单位是否为 px */
const isPx = (val: string) => {
    return val.endsWith('px')
}

/**计算开始块的大小 */
const curValue = ref(props.value)
console.log(curValue.value, 'curValue.value')
const getSplitStartSize = computed(() => {
    const flag = isPx(curValue.value as string)
    if (flag) {
        console.log('flag', curValue.value)
        return {
            flex: `0 0 ${curValue.value}`
        }
    }
    return {
        flex: `0 0 calc((${curValue.value} - ${props.triggerSize}) / 2)`
    }
})

const wrapEl = ref<HTMLElement>()
const wrapRect = reactive({
    width: 0,
    height: 0
})
const getWrapRect = () => {
    if (!wrapEl.value) return
    const { width, height } = wrapEl.value.getBoundingClientRect()
    wrapRect.width = width
    wrapRect.height = height
}

const init = () => {
    getWrapRect()
}

onMounted(() => {
    useResizeObserver(wrapEl.value, init)
    useEventListener(document, 'mouseup', handleDragEnd)
    useEventListener(document, 'mousemove', handleDragMove)
})
</script>

<template>
    <div ref="wrapEl" :class="['split', { 'is-vertical': props.vertical }]">
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
    &-trigger {
        cursor: col-resize;
        box-sizing: border-box;
        background-color: var(--ivy-split-border-color);
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
