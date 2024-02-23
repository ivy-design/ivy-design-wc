<script setup lang="ts">
defineOptions({
    name: 'CommandSeparator'
})
</script>

<template>
    <div class="separator"></div>
</template>

<style lang="scss">
:host {
    display: block;
}
.separator {
    height: 1px;
    background-color: var(--ivy-command-border-color);
}
</style>
