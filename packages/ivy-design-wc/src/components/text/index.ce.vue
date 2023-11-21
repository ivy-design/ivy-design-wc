<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
    name: 'Text',
    inheritAttrs: false
})

const props = defineProps({
    type: {
        type: String,
        validator: (val: string) => {
            return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
        }
    },
    lineClamp: {
        type: Number
    },
    truncated: Boolean
})

const style = computed(() => {
    const style: Record<string, string> = {}

    if (props.lineClamp) {
        style['-webkit-line-clamp'] = `${props.lineClamp}`
    }

    return style
})
</script>

<template>
    <div
        :class="['text', { 'is-truncated': props.truncated, 'is-line-clamp': props.lineClamp }]"
        :style="style"
    >
        <slot></slot>
    </div>
</template>

<style>
:host {
    --ivy-text-color: var(--ivy-text-color-regular, #606266);
    --ivy-text-font-size: var(--ivy-font-size, 14px);
    display: inline-flex;
    margin: 0;
    padding: 0;
}
:host([type='primary']) {
    --ivy-text-color: var(--ivy-color-primary);
}
:host([type='success']) {
    --ivy-text-color: var(--ivy-color-success);
}
:host([type='warning']) {
    --ivy-text-color: var(--ivy-color-warning);
}
:host([type='danger']) {
    --ivy-text-color: var(--ivy-color-danger);
}
:host([type='info']) {
    --ivy-text-color: var(--ivy-color-info);
}

.text {
    color: var(--ivy-text-color);
    font-size: var(--ivy-text-font-size);
    word-break: break-all;
}
.text.is-truncated {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.text.is-line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>
