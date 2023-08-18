<script setup lang="ts">
defineOptions({
    name: 'Split'
})
</script>

<template>
    <div class="split">
        <div class="split-start">
            <slot name="start"></slot>
        </div>
        <div class="split-drag"></div>
        <div class="split-end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.split {
    display: flex;
    &-drag {
        cursor: col-resize;
    }
}
</style>
