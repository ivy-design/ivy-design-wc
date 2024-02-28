<script lang="ts" setup>
defineOptions({
    name: 'Alert',
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
    --ivy-alert-color: var(--ivy-color-primary, #409eff);
    --ivy-alert-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
    --ivy-alert-line-color: var(--ivy-color-primary, #409eff);
    --ivy-alert-font-size: 13px;
    --ivy-alert-title-font-size: 14px;
    --ivy-alert-line-width: 4px;
    --ivy-alert-border-radius: var(--ivy-border-radius, 4px);
    display: block;
    width: 100%;
    padding: 12px 24px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--ivy-alert-bg-color);
    color: var(--ivy-alert-color);
    border-radius: var(--ivy-alert-border-radius);
}
:host([line]) {
    border-left-width: var(--ivy-alert-line-width);
    border-left-style: solid;
    border-left-color: var(--ivy-alert-line-color);
}
p {
    margin: 0;
}
.title {
    font-weight: 600;
    font-size: var(--ivy-alert-title-font-size);
    margin-bottom: 6px;
}
.content {
    font-size: var(--ivy-alert-font-size);
}
:host([type='primary']) {
    --ivy-alert-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
    --ivy-alert-color: var(--ivy-color-primary, #409eff);
}
:host([type='primary'][line]) {
    --ivy-alert-line-color: var(--ivy-color-primary, #409eff);
}

:host([type='success']) {
    --ivy-alert-bg-color: var(--ivy-color-success-light-9, #f0f9eb);
    --ivy-alert-color: var(--ivy-color-success, #67c23a);
}
:host([type='success'][line]) {
    --ivy-alert-line-color: var(--ivy-color-success, #67c23a);
}

:host([type='warning']) {
    --ivy-alert-bg-color: var(--ivy-color-warning-light-9, #fdf6ec);
    --ivy-alert-color: var(--ivy-color-warning, #e6a23c);
}
:host([type='warning'][line]) {
    --ivy-alert-line-color: var(--ivy-color-warning, #e6a23c);
}

:host([type='danger']) {
    --ivy-alert-bg-color: var(--ivy-color-danger-light-9, #fef0f0);
    --ivy-alert-color: var(--ivy-color-danger, #f56c6c);
}
:host([type='danger'][line]) {
    --ivy-alert-line-color: var(--ivy-color-danger, #f56c6c);
}

:host([type='info']) {
    --ivy-alert-bg-color: var(--ivy-color-info-light-9, #f4f4f5);
    --ivy-alert-color: var(--ivy-color-info, #909399);
}
:host([type='info'][line]) {
    --ivy-alert-line-color: var(--ivy-color-info, #909399);
}
</style>
