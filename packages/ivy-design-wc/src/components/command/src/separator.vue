<script setup lang="ts">
import { inject, computed, ref } from 'vue'
defineOptions({
    name: 'CommandSeparator'
})

const dest = inject('dest', ref<any[]>([]))
const isShow = computed(() => {
    return dest.value === null
})
</script>

<template>
    <div class="separator" v-if="isShow"></div>
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
