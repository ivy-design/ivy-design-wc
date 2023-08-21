<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({
    name: 'Split'
})

const props = defineProps({
    /**仅支持 px 和 % */
    value: {
        type: String,
        default: '50%',
        validator: (val: string) => {
            return /(px|%)/.test(val)
        }
    },
    vertical: Boolean,
    min: {
        type: String,
        default: '40px'
    },
    max: {
        type: String,
        default: '50%'
    },
    size: {
        type: Number,
        default: 0
    },
    triggerSize: {
        type: String,
        default: '2px'
    }
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

const handleDragStart = (e: MouseEvent) => {
    console.log(e)
    drag.value = true
}

const handleDragMove = (e: MouseEvent) => {
    if (drag.value) {
        console.log(e)
    }
}

const handleDragEnd = (e: MouseEvent) => {
    console.log(e)
    drag.value = false
}

/**单位是否为 px */
const isPx = (val: string) => {
    return val.endsWith('%')
}

/**计算开始块的大小 */
const curValue = ref(props.value)
const getSplitStartSize = computed(() => {
    const flag = isPx(curValue.value)
    if (flag) {
        return {
            flex: `0 0 ${curValue.value}`
        }
    }
    return {
        flex: `0 0 calc((${curValue.value} - ${props.triggerSize} / 2)`
    }
})

const getSplitEndSize = computed(() => {
    const flag = isPx(curValue.value)
    if (flag) {
        return {
            flex: `1 1 calc(100% - ${curValue.value} - ${props.triggerSize}})`
        }
    }
    return {
        flex: `1 1 calc(100% - ${curValue.value} - ${props.triggerSize} / 2)`
    }
})
</script>

<template>
    <div :class="['split', { 'is-vertical': props.vertical }]">
        <div class="split-start" :style="{ ...getMinSize, ...getSplitStartSize }">
            <slot name="start"></slot>
        </div>
        <div
            class="split-trigger"
            :style="triggerSize"
            @mouseenter="handleDragStart"
            @mousemove="handleDragMove"
            @mouseleave="handleDragEnd"
            draggable
        >
            <slot name="trigger"></slot>
        </div>
        <div class="split-end" :style="{ ...getMinSize, ...getSplitEndSize }">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.split {
    --ivy-split-border-color: var(--ivy-border-color, #dcdfe6);
    display: flex;
    border: 1px solid var(--ivy-split-border-color);
    position: relative;
    box-sizing: border-box;
    &-trigger {
        cursor: col-resize;
        box-sizing: border-box;
        background-color: var(--ivy-split-border-color);
    }
}

.is-vertical.split {
    flex-direction: column;
    .split-trigger {
        cursor: row-resize;
    }
}
</style>
