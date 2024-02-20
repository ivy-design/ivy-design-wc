<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

defineOptions({
    name: 'Textarea',
    inheritAttrs: false
})

interface Props {
    placeholder: string
    disabled: boolean
    readonly: boolean
    rows: number
    resize: 'none' | 'both' | 'horizontal' | 'vertical'
    maxlength: number
    showWordLimit: boolean
    wrap: 'hard' | 'soft'
    cols: number
    autocomplete: 'on' | 'off'
    autofocus: boolean
    minlength: number
    name: string
    required: boolean
    spellcheck: boolean | 'auto'
}
const props = withDefaults(defineProps<Props>(), {
    readonly: false,
    rows: 3,
    resize: 'vertical',
    disabled: false,
    showWordLimit: false,
    wrap: 'soft',
    spellcheck: 'auto',
    autocomplete: 'off'
})

const attrs = computed<Record<string, any>>(() => {
    return {
        readonly: props.readonly,
        disabled: props.disabled,
        placeholder: props.placeholder,
        rows: props.rows,
        wrap: props.wrap,
        spellcheck: props.spellcheck,
        autocomplete: props.autocomplete,
        autofocus: props.autofocus,
        minlength: props.minlength,
        name: props.name,
        required: props.required
    }
})

const styles = computed(() => {
    return {
        resize: props.resize
    }
})

const curLength = ref(0)
const handlerChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement
    curLength.value = target.value.length
}
</script>

<template>
    <textarea
        class="input-inner"
        v-bind="attrs"
        :style="styles"
        @keypress="handlerChange"
        @compositionend="handlerChange"
    ></textarea>
    <span v-if="props.showWordLimit" class="input-count">
        {{ `${curLength}/${maxlength || 0}` }}
    </span>
</template>

<style lang="scss">
:host {
    --ivy-textarea-border-radius: var(--ivy-border-radius, 4px);
    --ivy-textarea-placeholder-color: #c0c4cc;
    --ivy-textarea-border-color: var(--ivy-border-color, #dcdfe6);
    --ivy-textarea-border-color-hover: var(--ivy-color-primary, #409eff);
    --ivy-textarea-color: var(--ivy-text-color-regular, #606266);
    --ivy-textarea-font-size: var(--ivy-font-size, 14px);
    display: block;
    position: relative;
    border-radius: var(--ivy-textarea-border-radius);
    font-size: inherit;
    font-family: inherit;
}
.input-inner {
    background-color: #fff;
    background-image: none;
    border-radius: var(--ivy-textarea-border-radius);
    border: 1px solid var(--ivy-textarea-border-color);
    box-sizing: border-box;
    color: var(--ivy-textarea-color);
    font-size: var(--ivy-textarea-font-size);
    line-height: 1.5em;
    outline: none;
    padding: 8px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    display: block;
    font-size: inherit;
    font-family: inherit;
}
.input-inner::input-placeholder,
.input-inner::-webkit-input-placeholder,
.input-inner::-moz-input-placeholder,
.input-inner:-moz-input-placeholder,
.input-inner:-ms-input-placeholder {
    color: var(--ivy-textarea-placeholder-color);
    font-size: 14px;
}

.input-inner:active,
.input-inner:hover,
.input-inner:focus {
    border-color: var(--ivy-textarea-border-color-hover);
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
.input-count {
    color: var(--ivy-color-info);
    background: var(--ivy-fill-color-blank);
    position: absolute;
    font-size: 12px;
    line-height: 14px;
    bottom: 5px;
    right: 10px;
}
</style>
