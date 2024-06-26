<script setup lang="ts">
defineOptions({
    name: 'Link',
    inheritAttrs: false
})

const props = defineProps({
    type: {
        type: String,
        validator: (val: string) => {
            return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
        }
    },
    underline: Boolean,
    href: String,
    disabled: Boolean
})
</script>

<template>
    <a
        :href="props.href"
        :class="['link', { 'is-underline': props.underline, 'is-disabled': props.disabled }]"
    >
        <span class="text-inner">
            <slot></slot>
        </span>
    </a>
</template>

<style lang="scss">
:host {
    --ivy-link-font-size: var(--ivy-font-size, 14px);
    --ivy-link-font-weight: var(--ivy-font-weight-primary);
    --ivy-link-text-color: var(--ivy-text-color-regular);
    --ivy-link-hover-text-color: var(--ivy-color-primary);
    --ivy-link-disabled-text-color: var(--ivy-text-color-placeholder);
}
:host([type='primary']) {
    --ivy-link-text-color: var(--ivy-color-primary);
    --ivy-link-hover-text-color: var(--ivy-color-primary-light-3);
    --ivy-link-disabled-text-color: var(--ivy-color-primary-light-5);
}
:host([type='success']) {
    --ivy-link-text-color: var(--ivy-color-success);
    --ivy-link-hover-text-color: var(--ivy-color-success-light-3);
    --ivy-link-disabled-text-color: var(--ivy-color-success-light-5);
}
:host([type='warning']) {
    --ivy-link-text-color: var(--ivy-color-warning);
    --ivy-link-hover-text-color: var(--ivy-color-warning-light-3);
    --ivy-link-disabled-text-color: var(--ivy-color-warning-light-5);
}
:host([type='danger']) {
    --ivy-link-text-color: var(--ivy-color-danger);
    --ivy-link-hover-text-color: var(--ivy-color-danger-light-3);
    --ivy-link-disabled-text-color: var(--ivy-color-danger-light-5);
}
:host([type='info']) {
    --ivy-link-text-color: var(--ivy-color-info);
    --ivy-link-hover-text-color: var(--ivy-color-info-light-3);
    --ivy-link-disabled-text-color: var(--ivy-color-info-light-5);
}
.link {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: var(--ivy-link-font-size);
    font-weight: var(--ivy-link-font-weight);
    color: var(--ivy-link-text-color);
    &-inner {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    &.is-disabled {
        cursor: not-allowed;
        color: var(--ivy-link-disabled-text-color);
        pointer-events: none;
    }
    &.is-underline:not(.is-disabled) {
        &:hover {
            &::after {
                content: '';
                height: 1px;
                display: block;
                position: absolute;
                z-index: 1;
                bottom: 0;
                width: 100%;
                background-color: var(--ivy-link-text-color);
            }
        }
    }
}
</style>
