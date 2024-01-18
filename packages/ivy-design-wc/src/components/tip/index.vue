<script lang="ts" setup>
defineOptions({
    name: 'Tip',
    inheritAttrs: false
})

const props = defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: (val: string) =>
            ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
    },
    header: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    line: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <p class="title" v-if="props.header">{{ props.header }}</p>
    <p class="content">
        <slot>{{ props.content }}</slot>
    </p>
</template>

<style lang="scss">
:host {
    --ivy-tip-color: var(--ivy-color-priomary, #409eff);
    --ivy-tip-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
    --ivy-tip-line-color: var(--ivy-color-primary, #409eff);
    --ivy-tip-font-size: 13px;
    --ivy-tip-title-font-size: 14px;
    --ivy-tip-line-width: 4px;
    --ivy-tip-border-radius: var(--ivy-border-radius, 4px);
    display: block;
    width: 100%;
    padding: 12px 24px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--ivy-tip-bg-color);
    color: var(--ivy-tip-color);
    border-radius: var(--ivy-tip-border-radius);
}
:host([line]) {
    border-left-width: var(--ivy-tip-line-width);
    border-left-style: solid;
    border-left-color: var(--ivy-tip-line-color);
}
p {
    margin: 0;
}
.title {
    font-weight: 600;
    font-size: var(--ivy-tip-title-font-size);
    margin-bottom: 6px;
}
.content {
    font-size: var(--ivy-tip-font-size);
}
:host([type='primary']) {
    --ivy-tip-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
    --ivy-tip-color: var(--ivy-color-primary, #409eff);
}
:host([type='primary'][line]) {
    --ivy-tip-line-color: var(--ivy-color-primary, #409eff);
}

:host([type='success']) {
    --ivy-tip-bg-color: var(--ivy-color-success-light-9, #f0f9eb);
    --ivy-tip-color: var(--ivy-color-success, #67c23a);
}
:host([type='success'][line]) {
    --ivy-tip-line-color: var(--ivy-color-success, #67c23a);
}

:host([type='warning']) {
    --ivy-tip-bg-color: var(--ivy-color-warning-light-9, #fdf6ec);
    --ivy-tip-color: var(--ivy-color-warning, #e6a23c);
}
:host([type='warning'][line]) {
    --ivy-tip-line-color: var(--ivy-color-warning, #e6a23c);
}

:host([type='danger']) {
    --ivy-tip-bg-color: var(--ivy-color-danger-light-9, #fef0f0);
    --ivy-tip-color: var(--ivy-color-danger, #f56c6c);
}
:host([type='danger'][line]) {
    --ivy-tip-line-color: var(--ivy-color-danger, #f56c6c);
}

:host([type='info']) {
    --ivy-tip-bg-color: var(--ivy-color-info-light-9, #f4f4f5);
    --ivy-tip-color: var(--ivy-color-info, #909399);
}
:host([type='info'][line]) {
    --ivy-tip-line-color: var(--ivy-color-info, #909399);
}
</style>
