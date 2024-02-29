<script setup lang="ts">
import { ref, provide, inject, computed } from 'vue'

defineOptions({
    name: 'CommandGroup'
})

interface Props {
    label: String
}
const props = withDefaults(defineProps<Props>(), {})

const groupItems = ref<any[]>([])
const appendGroupItems = (item: any) => {
    groupItems.value.push(item)
}
provide('appendGroupItems', appendGroupItems)

const dest = inject('dest', ref<any>(null))

const isShow = computed(() => {
    if (dest.value === null) return true
    return dest.value.some((item: any) => groupItems.value.includes(item))
})
</script>

<template>
    <div class="group" v-if="isShow">
        <div class="group-label">
            <slot name="label" parts="label">{{ props.label }}</slot>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}
.group {
    &-label {
        color: var(--ivy-command-group-label-color);
        padding: 4px 12px;
    }
}
</style>
