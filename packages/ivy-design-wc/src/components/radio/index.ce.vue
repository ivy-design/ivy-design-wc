<template>
    <div class="ivy-radio" :disabled="props.disabled" :checked="props.checked">
        <span class="ivy-radio-input">
            <span class="ivy-radio-inner"></span>
        </span>
        <span class="ivy-radio-label">
            <slot></slot>
        </span>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Radio'
})

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    disabled: Boolean,
    checked: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss">
:host {
    display: inline-flex;
    margin-right: 24px;
    color: var(--ivy-text-color, #303133);
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    align-items: center;
    align-content: center;
    white-space: nowrap;
    user-select: none;
}
:host(:last-child) {
    margin-right: 0;
}
.ivy-radio {
    display: flex;
    align-items: center;
}
.ivy-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-flex;
    align-items: center;
    line-height: 1;
    position: relative;
}
.ivy-radio-inner {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
}
.ivy-radio-inner::after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #fff;
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.15s ease-in;
}
:host([checked]) .ivy-radio-inner {
    background-color: var(--ivy-color-primary, #409eff);
    border-color: var(--ivy-color-primary, #409eff);
}
:host([checked]) .ivy-radio-inner::after {
    transform: translate(-50%, -50%) scale(1);
}
:host([disabled]) {
    cursor: not-allowed;
}
:host([disabled]) .ivy-radio-inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
}
:host([disabled][checked]) .ivy-radio-inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
}
:host([disabled][checked]) .ivy-radio-inner::after {
    background-color: #c0c4cc;
}
.ivy-radio-label {
    padding-left: 8px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
}
</style>
