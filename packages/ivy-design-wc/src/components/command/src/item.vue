<script setup lang="ts">
defineOptions({
    name: 'CommandItem'
})

interface Props {
    disabled: Boolean
    icon: String
    label: String
    shortcutKeys: String
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="command-item">
        <div class="command-item-content">
            <slot name="icon" parts="icon"></slot>
            <slot name="label" parts="label">{{ props.label }}</slot>
        </div>

        <span class="command-item-s-key" v-if="props.shortcutKeys">{{ $props.shortcutKeys }}</span>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}
.command-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
    user-select: none;
    color: var(--ivy-command-text-color);
    background-color: var(--ivy-command-background-color);
    transition: background-color 0.3s;
    &:hover {
        background-color: var(--ivy-command-item-hover-background-color);
        .command-item-s-key {
            background-color: var(--ivy-command-background-color);
        }
    }
    &-content {
        flex: 1;
    }
    &-s-key {
        background-color: var(--ivy-command-item-hover-background-color);
        font-size: 12px;
        display: inline-flex;
        height: 1.8em;
        line-height: 1em;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
        border-radius: 4px;
        transition: background-color 0.3s;
    }
}
</style>
