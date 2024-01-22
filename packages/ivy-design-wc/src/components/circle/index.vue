<script setup lang="ts">
import { computed, type PropType } from 'vue'

export type IvyCircleStatus = 'success' | 'danger'

defineOptions({
    name: 'Circle',
    inheritAttrs: false
})

const props = defineProps({
    value: {
        type: [String, Number],
        required: true
    },

    status: {
        type: String as PropType<IvyCircleStatus>,
        validator(value: IvyCircleStatus) {
            return ['success', 'danger'].includes(value)
        }
    },
    color: String,
    strokeWidth: {
        type: Number,
        default: 6
    },
    width: {
        type: Number,
        default: 126
    }
})

const getCircleWidth = computed(() => {
    const multiple = props.width / 100
    const r = props.strokeWidth / multiple
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
            return '#409eff'
        }
    }
})
</script>

<template>
    <div
        class="ivy-circle"
        :style="{
            width: `${props.width}px`,
            height: `${props.width}px`
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
    </div>
</template>

<style lang="scss">
:host {
    --ivy-circle-color: var(--ivy-color-primary, #409eff);
    --ivy-circle-track-color: var(--ivy-color-border, #e5e9f2);
    display: inline-flex;
}
</style>
