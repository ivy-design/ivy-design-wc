<script setup lang="ts">
import { ref } from 'vue'
import useHostElement from '@/hooks/useHostElement'

defineOptions({
    name: 'Checkbox'
})

const props = defineProps({
    __GROUP__: Boolean,
    label: [String, Number, Boolean],
    checked: Boolean,
    disabled: Boolean,
    trueLabel: {
        type: [String, Number, Boolean],
        default: true
    },
    falseLabel: {
        type: [String, Number, Boolean],
        default: false
    }
})

const emit = defineEmits(['change'])

const checked = ref(!!props.checked)

const { el, getHostElement } = useHostElement()

const handlerClick = () => {
    if (props.__GROUP__) return
    if (props.disabled) return
    checked.value = !checked.value
    const value = checked.value ? props.trueLabel : props.falseLabel

    emit('change', value)
    const host = getHostElement() as any

    host.checked = checked.value
    host.value = value
}
</script>

<template>
    <div
        :class="['ivy-checkbox', { 'is-checked': checked, 'is-disabled': props.disabled }]"
        ref="el"
        @click="handlerClick"
    >
        <span class="ivy-checkbox-input"> </span>
        <span class="ivy-checkbox-label">
            <slot></slot>
        </span>
    </div>
</template>

<style>
:host {
    margin-right: 30px;
    color: var(--ivy-text-color, #303133);
    font-weight: 500;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
}
:host(:last-of-type) {
    margin-right: 0;
}
.ivy-checkbox {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    white-space: nowrap;
    user-select: none;
}
.ivy-checkbox-input {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}

.ivy-checkbox-input::after {
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform 0.15s ease-in 0.05s;
    transform-origin: center;
}
:host([checked]) .ivy-checkbox-input,
.ivy-checkbox.is-checked .ivy-checkbox-input {
    background-color: var(--ivy-color-primary, #409eff);
    border-color: var(--ivy-color-primary, #409eff);
}
:host([checked]) .ivy-checkbox-input::after,
.ivy-checkbox.is-checked .ivy-checkbox-input::after {
    transform: rotate(45deg) scaleY(1);
}
:host([disabled]) .ivy-checkbox-input,
.ivy-checkbox.is-disabled .ivy-checkbox-input {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
}
:host([disabled][checked]) .ivy-checkbox-input,
.ivy-checkbox.is-disabled.is-checked .ivy-checkbox-input {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
}
:host([disabled][checked]) .ivy-checkbox-input::after,
.ivy-checkbox.is-disabled.is-checked .ivy-checkbox-input::after {
    border-color: #c0c4cc;
}

.ivy-checkbox-label {
    display: inline-block;
    padding-left: 8px;
    line-height: 19px;
    font-size: 14px;
}
</style>
