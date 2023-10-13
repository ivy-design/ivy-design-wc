<script setup lang="ts">
defineOptions({
    name: 'TabPane',
    inheritAttrs: false
})

defineProps({
    label: String,
    index: String,
    disabled: Boolean
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    display: none;
}
:host([show]) {
    display: block;
}
</style>
