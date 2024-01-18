<script setup lang="ts">
defineOptions({
    name: 'DropdownMenu'
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    display: block;
    padding: 2px 0;
}
</style>
