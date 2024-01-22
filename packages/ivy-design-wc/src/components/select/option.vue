<script setup lang="ts">
defineOptions({
    name: 'Option'
})

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <slot>{{ props.label }}</slot>
</template>

<style lang="scss">
:host {
    display: block;
    padding: 0 12px;
    line-height: 34px;
    height: 34px;
    cursor: pointer;
    transition: background-color 0.15s ease;
    font-size: var(--ivy-select-font-size);
}

:host(:hover) {
    background-color: #f4f4f5;
}

:host([disabled]) {
    cursor: not-allowed;
    color: #a8abb2;
    background-color: transparent;
    pointer-events: none;
}
</style>
