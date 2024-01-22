<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CloseIcon as Close } from '@/utils/icons'

defineOptions({
    name: 'Input',
    inheritAttrs: false
})

export interface Props {
    value: string | number
    type: string
    placeholder: string
    disabled: boolean
    readonly: boolean
    autoFocus: boolean
    clearable: boolean
}

const props = withDefaults(defineProps<Props>(), {
    value: '',
    type: 'text',
    placeholder: '',
    disabled: false,
    readonly: false,
    autoFocus: false,
    clearable: false
})

const value = ref<string | number>(props.value)
const isComposition = ref(false)

const emit = defineEmits(['change'])
const changeHandler = (e: Event) => {
    if (isComposition.value) return
    const target = e.target as HTMLInputElement
    value.value = target.value
    emit('change', target.value)
}
const compositionStartHandler = () => {
    isComposition.value = true
}
const compositionEndHandler = (e: Event) => {
    isComposition.value = false
    if (!isComposition.value) changeHandler(e)
}

const input = ref<HTMLInputElement | null>(null)

const setInputElValue = (val: string | number, isInit = false) => {
    value.value = val
    ;(input.value as HTMLInputElement).value = val as string
    if (!isInit) {
        val ? emit('change', val) : emit('change')
    }
}

const handleClear = () => {
    if (props.disabled) return
    setInputElValue(null as unknown as string)
}

onMounted(() => {
    setInputElValue(props.value, true)
    if (props.autoFocus) (input.value as HTMLInputElement).focus()
})
</script>

<template>
    <input
        ref="input"
        class="input-inner"
        :autoFocus="props.autoFocus"
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.value"
        :disabled="props.disabled"
        :readonly="props.readonly"
        @input="changeHandler"
        @compositionstart="compositionStartHandler"
        @compositionend="compositionEndHandler"
    />
    <div
        class="input-icon input-icon-close"
        @click.stop="handleClear"
        v-if="!props.disabled && props.clearable"
    >
        <Close />
    </div>
</template>

<style lang="scss">
:host {
    --ivy-input-border-radius: var(--ivy-border-radius, 4px);
    --ivy-input-placeholder-color: #c0c4cc;
    --ivy-input-border-color: var(--ivy-border-color, #dcdfe6);
    --ivy-input-border-color-hover: var(--ivy-color-primary, #409eff);
    --ivy-input-color: var(--ivy-text-color-regular, #606266);
    --ivy-input-font-size: var(--ivy-font-size, 14px);
    display: block;
    position: relative;
    border-radius: var(--ivy-input-border-radius);
}
.input-inner {
    background-color: #fff;
    background-image: none;
    border-radius: var(--ivy-input-border-radius);
    border: 1px solid var(--ivy-input-border-color);
    box-sizing: border-box;
    color: var(--ivy-input-color);
    display: inline-block;
    font-size: var(--ivy-input-font-size);
    height: 34px;
    line-height: 34px;
    outline: none;
    padding: 0 12px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
}
.input-inner::input-placeholder,
.input-inner::-webkit-input-placeholder,
.input-inner::-moz-input-placeholder,
.input-inner:-moz-input-placeholder,
.input-inner:-ms-input-placeholder {
    color: var(--ivy-input-placeholder-color);
    font-size: 14px;
}

.input-inner:active,
.input-inner:hover,
.input-inner:focus {
    border-color: var(--ivy-input-border-color-hover);
    & + .input-icon-close {
        display: inline-flex;
    }
}

:host([disabled]) {
    cursor: not-allowed;
}
:host([disabled]) .input-inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
}
:host([readonly]) {
    cursor: not-allowed;
}
.input-icon {
    display: none;
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    &-close {
        cursor: pointer;
        z-index: 10;
        pointer-events: initial;
        &:hover {
            display: inline-flex;
        }
    }
    &:hover {
        color: var(--ivy-color-primary, #409eff);
    }
}
.input .input-icon-prefix {
    left: 0;
}
</style>
