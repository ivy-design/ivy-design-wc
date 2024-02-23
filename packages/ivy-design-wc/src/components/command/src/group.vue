<script setup lang="ts">
defineOptions({
    name: 'CommandGroup'
})

interface Props {
    label: String
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="group">
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
        padding: 4px 16px;
    }
}
</style>
