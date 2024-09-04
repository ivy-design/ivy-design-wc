<script setup lang="ts">
defineOptions({
    name: 'Row',
    inheritAttrs: false
})
</script>

<template>
    <slot style="gap: 24px"></slot>
</template>

<style lang="scss">
:host {
    display: flex;
    width: 100%;
}
</style>
