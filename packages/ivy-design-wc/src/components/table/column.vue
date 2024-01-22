<script setup lang="ts">
defineOptions({
    name: 'TableColumn',
    inheritAttrs: false
})
defineProps({
    label: String,
    prop: String,
    width: String,
    minWidth: String
})
</script>

<template>
    <slot></slot>
</template>
