<script setup lang="ts">
defineOptions({
    name: 'Row'
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    display: flex;
    width: 100%;
}
</style>
