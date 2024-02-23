<script setup lang="ts">
defineOptions({
    name: 'CommandDialog'
})
</script>

<template>
    <slot></slot>
</template>

<style lang="scss">
:host {
    --ivy-command-dialog-mask-background: rgba(0, 0, 0, 0.5);
    display: block;
}
</style>
