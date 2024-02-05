<script setup lang="ts">
import { computed } from 'vue'

export type IvyCircleStatus = 'success' | 'danger' | 'process'

defineOptions({
    name: 'Circle',
    inheritAttrs: false
})

interface Props {
    value: string | number
    status: IvyCircleStatus
    color: string
    strokeWidth: number | string
    size: number | string
}

const props = withDefaults(defineProps<Props>(), {
    value: 0,
    status: 'process',
    strokeWidth: 6,
    size: 126
})

const size = computed(() => {
    try {
        return parseFloat(props.size as string) as number
    } catch (e) {
        return props.size as number
    }
})

const strokeWidth = computed(() => {
    try {
        return parseFloat(props.strokeWidth as string) as number
    } catch (e) {
        return props.strokeWidth as number
    }
})

const getCircleWidth = computed(() => {
    const multiple = size.value / 100
    const r = strokeWidth.value / multiple
    return r.toFixed(2)
})

const gets = computed(() => {
    const cr = 50 - parseFloat(getCircleWidth.value)
    const circle = 2 * 3.14 * cr
    let s = ((props.value as number) * circle) / 100
    s = parseFloat((circle - s).toFixed(2))
    return {
        strokeDasharray: `${circle}px, ${circle}px`,
        strokeDashoffset: `${s}px`,
        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s'
    }
})

const getPath = computed(() => {
    const r = 50 - parseFloat(getCircleWidth.value)
    const s = ['M', 50, 50, 'm', 0, -r, 'a', r, r, 0, 1, 1, 0, 2 * r, 'a', r, r, 0, 1, 1, 0, -2 * r]
    return s.join(' ')
})

const getColor = computed(() => {
    if (props.color) {
        return props.color
    } else {
        if (props.status === 'success') {
            return '#67C23A'
        } else if (props.status === 'danger') {
            return '#F56C6C'
        } else {
            return 'var(--ivy-circle-color)'
        }
    }
})
</script>

<template>
    <div
        class="ivy-circle"
        :style="{
            width: `${size}px`,
            height: `${size}px`
        }"
    >
        <svg viewBox="0 0 100 100">
            <path
                :d="getPath"
                stroke="var(--ivy-circle-track-color)"
                :stroke-width="getCircleWidth"
                fill="none"
                class="ivy-circle__track"
            ></path>
            <path
                :d="getPath"
                stroke-linecap="round"
                :stroke="getColor"
                :stroke-width="getCircleWidth"
                fill="none"
                class="ivy-circle__path"
                :style="gets"
            ></path>
        </svg>
        <div class="ivy-circle-content" :style="{ borderWidth: `${size}px` }">
            <div class="ivy-circle-content-inner"><slot></slot></div>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-circle-color: var(--ivy-color-primary, #409eff);
    --ivy-circle-track-color: var(--ivy-color-border, #e5e9f2);
    display: inline-flex;
}
.ivy-circle {
    position: relative;
    &-content {
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-color: transparent;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        clip-path: circle(50%);
    }
}
</style>
