<script setup lang="ts">
defineOptions({
    name: 'DropdownItem'
})

defineProps({
    divided: Boolean,
    disabled: Boolean,
    command: {
        type: [String, null],
        default: null
    }
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    display: block;
    padding: 0 16px;
    line-height: 32px;
    height: 32px;
    cursor: pointer;
    transition: background-color 0.15s ease;
    font-size: var(--ivy-dropdown-font-size);
    user-select: none;
    word-break: keep-all;
}

:host([disabled]) {
    cursor: not-allowed;
    color: #a8abb2;
    background-color: transparent;
    pointer-events: none;
}
:host(:hover) {
    background-color: var(--ivy-border-color, #dcdfe6);
}
:host([divided]) {
    height: 1px;
    overflow: hidden;
    color: transparent;
    background-color: var(--ivy-border-color, #dcdfe6);
    padding: 0;
    pointer-events: none;
}
</style>
