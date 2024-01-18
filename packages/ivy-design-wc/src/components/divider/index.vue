<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
    name: 'Divider'
})

const props = defineProps({
    placement: {
        type: String,
        default: 'center',
        validator(value: string) {
            return ['left', 'center', 'right'].includes(value)
        }
    },
    vertical: Boolean,
    dashed: Boolean,
    value: String
})
const classList = ref([
    'ivy-divider',
    `ivy-divider-dir-${props.vertical ? 'vertical' : 'horizontal'}`,
    {
        'is-dashed': props.dashed
    }
])

if (props.value) {
    classList.value.push(`ivy-divider-text-${props.placement}`)
} else {
    classList.value.push('ivy-divider-default')
}
</script>

<template>
    <div :class="classList">
        <span v-if="!props.vertical && props.value" class="ivy-divider-inner__text">{{
            props.value
        }}</span>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-divider-color: var(--ivy-color-text-primary, #303133);
    --ivy-divider-line-color: var(--ivy-border-color-light, #e4e7ed);
}
.ivy-divider {
    display: inline-block;
    font-size: 14px;
    line-height: 1.5;
    color: var(--ivy-divider-color);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    &-dir-horizontal {
        display: block;
        height: 1px;
        width: 100%;
        min-width: 100%;
        margin: 24px 0;
        clear: both;
        .ivy-divider-inner__text {
            display: inline-block;
            margin: 0 20px;
        }
    }
    &-default {
        background-color: var(--ivy-divider-line-color);
    }
    &-dir-vertical {
        display: inline-block;
        margin: 0 10px;
        width: 1px;
        height: 0.9em !important;
        background-color: var(--ivy-divider-line-color);
        vertical-align: middle;
    }
    &-text-center,
    &-text-left,
    &-text-right {
        display: table;
        white-space: nowrap;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        margin: 16px 0;
        border-top: none;
        &:before,
        &:after {
            content: '';
            display: table-cell;
            position: relative;
            width: 50%;
            transform: translateY(50%);
            top: 50%;
            border-top: 1px solid var(--ivy-divider-line-color);
        }
        .ivy-divider-inner__text {
            display: inline-block;
            padding: 0;
        }
    }
    &-text-left {
        &:before {
            width: 5%;
        }
        &:after {
            width: 95%;
        }
    }
    &-text-right {
        &:before {
            width: 95%;
        }
        &:after {
            width: 5%;
        }
    }
    .ivy-divider-inner__text {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: text-bottom;
    }
}
.is-dashed {
    background-color: transparent;
    height: 1px;
    display: table;
    &:before,
    &:after {
        content: '';
        display: table-cell;
        position: relative;
        width: 50%;
        top: 50%;
        border-top: 1px dashed var(--ivy-divider-line-color);
    }
}
</style>
