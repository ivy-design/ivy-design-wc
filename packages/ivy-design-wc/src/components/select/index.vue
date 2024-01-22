<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useHostElement } from '@/hooks/useHostElement'

const { el, getHostElement } = useHostElement()

defineOptions({
    name: 'Select'
})

const props = defineProps({
    value: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: '请选择'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    visible: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['change', 'update:value'])

const dropEl = ref<HTMLElement | null>(null)

const curValue = ref<string | number | null>(null)

const inputEl = ref<HTMLInputElement | null>(null)
const handlerClick = (e: MouseEvent) => {
    const target = e.target as any
    const tagName = target.nodeName.toLowerCase()
    if (tagName === 'ivy-option') {
        const optionValue = target.getAttribute('value')
        if (optionValue !== curValue.value) {
            curValue.value = optionValue
            emit('change', curValue.value)
            ;(inputEl.value as HTMLElement).setAttribute('value', target.label)
            getHostElement().setAttribute('value', curValue.value as string)
        }
    }
    curVisible.value = false
}

const curVisible = ref(false)
const handlerInputClick = () => {
    if (!props.disabled) {
        if (!curVisible.value) {
            curVisible.value = true
        }
    }
}

const handlerHideDrop = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const hostElement = getHostElement()

    const isContains = hostElement.contains(target)
    if (!isContains) {
        curVisible.value = false
    }
}

const handlerScroll = () => {
    curVisible.value = false
}

onMounted(() => {
    curValue.value = props.value
    nextTick(() => {
        const children = getHostElement().children

        for (let i = 0; i < children.length; i++) {
            const child = children[i] as any
            if (child.nodeName.toLowerCase() === 'ivy-option') {
                const optionValue = child.getAttribute('value')

                if (optionValue === curValue.value) {
                    ;(inputEl.value as HTMLElement).setAttribute('value', child.label as string)
                    break
                }
            }
        }
    })

    window.addEventListener('click', handlerHideDrop)
    window.addEventListener('scroll', handlerScroll)
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
    window.removeEventListener('click', handlerHideDrop)
    window.removeEventListener('scroll', handlerScroll)
})
</script>

<template>
    <div @click="handlerInputClick" ref="el">
        <input
            ref="inputEl"
            type="text"
            :placeholder="props.placeholder"
            readonly
            class="ivy-input-inner"
        />
    </div>

    <transition name="dropdown">
        <div class="select-option-wrap" ref="dropEl" v-show="curVisible">
            <div class="select-arrow"></div>
            <div class="select-option-scroll">
                <div class="select-option" @click="handlerClick">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-select-font-size: var(--ivy-font-size, 14px);
    --ivy-select-height: 32px;
    display: block;
    position: relative;
}

.ivy-input-inner {
    background-color: #fff;
    background-image: none;
    border-radius: var(--ivy-border-radius, 4px);
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: var(--ivy-select-height);
    line-height: var(--ivy-select-height);
    outline: none;
    padding: 0 12px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    font-size: var(--ivy-font-size, 14px);
}
.ivy-input-inner::input-placeholder {
    color: #c0c4cc;
    font-size: 14px;
}
.ivy-input-inner::-webkit-input-placeholder {
    color: #c0c4cc;
    font-size: 14px;
}
.ivy-input-inner::-moz-input-placeholder {
    color: #c0c4cc;
    font-size: 14px;
}
.ivy-input-inner:-moz-input-placeholder {
    color: #c0c4cc;
    font-size: 14px;
}
.ivy-input-inner:-ms-input-placeholder {
    color: #c0c4cc;
    font-size: 14px;
}
.ivy-input-inner:active,
.ivy-input-inner:hover,
.ivy-input-inner:focus {
    border-color: var(--ivy-color-primary, #409eff);
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
.select-option-wrap {
    position: absolute;
    width: 100%;
    min-width: 240px;
    left: 0;
    top: calc(var(--ivy-select-height) + 2px);
    border-radius: 2px;
    overflow: hidden;
    z-index: 10;
}

.select-option-scroll {
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    max-height: 274px;
    border-radius: 4px;
    border: 1px solid var(--ivy-border-color, #dcdfe6);
    box-shadow: var(
        --ivy-box-shadow,
        0px 12px 32px 4px rgba(0, 0, 0, 0.04),
        0px 8px 20px rgba(0, 0, 0, 0.08)
    );
}
.select-option {
    margin: 6px 0;
}
.select-arrow {
    height: 6px;
    width: 6px;
    position: absolute;
}

.select-option-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 2px;
}

.select-option-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 1);
    border-radius: 2px;
}
.select-option-scroll::-webkit-scrollbar-track {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 2px;
}
.dropdown {
    &-enter-active,
    &-leave-active {
        transform-origin: top center;
        transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &-enter-from,
    &-leave-to {
        transform: scaleY(0);
    }

    &-enter-to,
    &-leave-from {
        transform: scaleY(1);
    }
}
</style>
