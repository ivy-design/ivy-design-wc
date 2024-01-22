<script setup lang="ts">
defineOptions({
    name: 'DescriptionItem',
    inheritAttrs: false
})

const props = defineProps({
    label: String,
    labelWidth: String,
    span: {
        type: String,
        default: '1'
    },
    gutter: String
})
</script>

<template>
    <div class="label" :style="{ flex: `0 0 ${props.labelWidth || '100px'}` }">
        {{ props.label }}
    </div>
    <div class="content">
        <slot></slot>
    </div>
</template>

<style>
:host {
    display: flex;
    box-sizing: border-box;
}
:host(:not(:defined)) {
    display: none;
}

.content {
    flex: auto;
}

.label,
.content {
    padding: 8px 12px;
    box-sizing: border-box;
}

:host([border]) {
    border-bottom: 1px solid var(--ivy-border-color, #dcdfe6);
    border-right: 1px solid var(--ivy-border-color, #dcdfe6);
}
:host([border]) .label {
    background-color: var(--ivy-description-label-bg-color);
}
</style>
