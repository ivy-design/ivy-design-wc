<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineOptions({
    name: 'Input',
    inheritAttrs: false
})

const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    autoFocus: {
        type: Boolean,
        default: false
    }
})

const value = ref(props.value)
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

const input = ref(null)
onMounted(() => {
    value.value = props.value
    input.value = props.value
    if (props.autoFocus) input.value.focus()
})
</script>

<template>
    <input
        class="ivy-input-inner"
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
</template>

<style lang="scss">
:host {
    --ivy-input-border-radius: var(--ivy-border-radius, 4px);
    --ivy-inpt-placeholder-color: #c0c4cc;
    --ivy-input-border-color: var(--ivy-border-color, #dcdfe6);
    --ivy-input-border-color-hover: var(--ivy-color-primary, #409eff);
    --ivy-input-color: var(--ivy-text-color-regular, #606266);
    display: block;
    position: relative;
    border-radius: var(--ivy-input-border-radius);
}
.ivy-input-inner {
    background-color: #fff;
    background-image: none;
    border-radius: var(--ivy-input-border-radius);
    border: 1px solid var(--ivy-input-border-color);
    box-sizing: border-box;
    color: var(--ivy-input-color);
    display: inline-block;
    font-size: inherit;
    height: 34px;
    line-height: 34px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
}
.ivy-input-inner::input-placeholder {
    color: var(--ivy-inpt-placeholder-color);
    font-size: 14px;
}
.ivy-input-inner::-webkit-input-placeholder {
    color: var(--ivy-inpt-placeholder-color);
    font-size: 14px;
}
.ivy-input-inner::-moz-input-placeholder {
    color: var(--ivy-inpt-placeholder-color);
    font-size: 14px;
}
.ivy-input-inner:-moz-input-placeholder {
    color: var(--ivy-inpt-placeholder-color);
    font-size: 14px;
}
.ivy-input-inner:-ms-input-placeholder {
    color: var(--ivy-inpt-placeholder-color);
    font-size: 14px;
}
.ivy-input-inner:active,
.ivy-input-inner:hover,
.ivy-input-inner:focus {
    border-color: var(--ivy-input-border-color-hover);
}
:host([disabled]) {
    cursor: not-allowed;
}
:host([disabled]) .ivy-input-inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
}
:host([readonly]) {
    cursor: not-allowed;
}
.ivy-input-icon {
    display: none;
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}
.ivy-input .ivy-input-icon-prefix {
    left: 0;
}
</style>
