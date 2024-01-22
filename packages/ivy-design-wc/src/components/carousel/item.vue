<script setup lang="ts">
defineOptions({
    name: 'CarouselItem',
    inheritAttrs: false
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    display: block;
    width: 100%;
}
</style>
