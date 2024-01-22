<script setup lang="ts">
import { ref } from 'vue'
// import ClickOutside from '@/directives/click-outside'

defineOptions({
    name: 'Tooltip',
    inheritAttrs: false
})

const props = defineProps({
    content: String,
    placement: {
        type: String,
        default: 'top',
        validator: (val: string) => {
            const flag = /^(top|right|bottom|left)(-(start|end)$)?/.test(val)
            return flag
        }
    },
    theme: {
        type: String,
        default: 'light',
        validator: (val: string) => {
            const flag = ['dark', 'light'].includes(val)
            return flag
        }
    },
    delay: {
        type: Number,
        default: 10
    }
})

const show = ref(false)

// const el: HTMLElement = ref()

let timer: any = null
const handleOpen = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    timer = setTimeout(() => {
        show.value = true
    }, props.delay || 10)
}

const handleClose = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    show.value = false
}
</script>

<template>
    <div class="ivy-tooltip-ref" @mouseenter="handleOpen" @mouseleave="handleClose">
        <slot></slot>
    </div>
    <transition name="ivy-fade">
        <div class="content" v-show="show" :placement="props.placement" :theme="props.theme">
            <div class="arrow"></div>
            <div class="text">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    display: inline-flex;
    position: relative;
    --ivy-tooltip-color: #fff;
    --ivy-tooltip-background-color: #000;
    --ivy-tooltip-font-size: 13px;
}
.ivy-tooltip-ref {
    display: inline-flex;
}
.content {
    position: absolute;
    z-index: 10;
}
.arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        box-sizing: border-box;
        height: 0;
        width: 0;
        border: 5px solid transparent;
        z-index: 1;
    }
    &::before {
        border-width: 6px;
        z-index: 0;
    }
}

.text {
    padding: 4px 12px;
    word-break: keep-all;
    white-space: nowrap;
    border: 1px solid var(--ivy-border-color);
    border-radius: var(--ivy-border-radius);
    background-color: #fff;
    font-size: var(--ivy-tooltip-font-size);
}

.content[placement='top'] {
    left: 50%;
    transform: translateX(-50%);
}

.content[placement|='top'] {
    bottom: calc(100% + 8px);
    &[placement$='-start'] {
        left: 0;
    }
    &[placement$='-end'] {
        right: 0;
    }
    .arrow {
        bottom: 0;
        left: 50%;
        margin-left: -6px;
    }
    .arrow::before {
        top: 7px;
        border-top-color: var(--ivy-border-color);
    }
    .arrow::after {
        left: 1px;
        top: 7px;
        border-top-color: white;
    }
}
.content[theme='dark'][placement|='top'] {
    .arrow::before {
        border-top-color: rgb(70, 76, 91);
    }
    .arrow::after {
        border-top-color: rgb(70, 76, 91);
    }
    .text {
        border: 1px solid rgb(70, 76, 91);
        background-color: rgb(70, 76, 91);
        color: white;
    }
}

.content[placement|='bottom'] {
    top: calc(100% + 8px);
}
.content[placement='bottom'] {
    left: 50%;
    transform: translateX(-50%);
}
.content[placement='bottom-start'] {
    left: 0;
}
.content[placement='bottom-end'] {
    right: 0;
}
.content[placement|='bottom'] {
    .arrow {
        top: -4px;
        left: 50%;
        margin-left: -6px;
    }
    .arrow::before {
        top: -7px;
        border-bottom-color: var(--ivy-border-color);
    }
    .arrow::after {
        left: 1px;
        top: -5px;
        border-bottom-color: white;
    }
}
.content[theme='dark'][placement|='bottom'] {
    .arrow::before {
        border-bottom-color: rgb(70, 76, 91);
    }
    .arrow::after {
        border-bottom-color: rgb(70, 76, 91);
    }
    .text {
        border: 1px solid rgb(70, 76, 91);
        background-color: rgb(70, 76, 91);
        color: white;
    }
}

.content[placement='top-start'] .arrow,
.content[placement='bottom-start'] .arrow {
    left: 20px;
}
.content[placement='top-end'] .arrow,
.content[placement='bottom-end'] .arrow {
    left: calc(100% - 20px);
}

.content[placement|='left'] {
    right: calc(100% + 8px);
}
.content[placement='left'] {
    top: 50%;
    transform: translateY(-50%);
}
.content[placement='left-start'] {
    top: 0;
}
.content[placement='left-end'] {
    bottom: 0;
}
.content[placement|='left'] {
    .arrow {
        right: -4px;
        top: 50%;
        margin-top: -6px;
    }
    .arrow::before {
        right: -7px;
        border-left-color: var(--ivy-border-color);
    }
    .arrow::after {
        top: 1px;
        right: -5px;
        border-left-color: #ffffff;
    }
}

.content[theme='dark'][placement|='left'] {
    .arrow::before {
        border-left-color: rgb(70, 76, 91);
    }
    .arrow::after {
        border-left-color: rgb(70, 76, 91);
    }
    .text {
        border: 1px solid rgb(70, 76, 91);
        background-color: rgb(70, 76, 91);
        color: white;
    }
}
.content[placement|='right'] {
    left: calc(100% + 8px);
}
.content[placement='right'] {
    top: 50%;
    transform: translateY(-50%);
}
.content[placement='right-start'] {
    top: 0;
}
.content[placement='right-end'] {
    bottom: 0;
}
.content[placement|='right'] {
    .arrow {
        left: -4px;
        top: 50%;
        margin-top: -6px;
    }
    .arrow::before {
        left: -7px;
        border-right-color: var(--ivy-border-color);
    }
    .arrow::after {
        top: 1px;
        left: -5px;
        border-right-color: #ffffff;
    }
}

.content[theme='dark'][placement|='right'] {
    .arrow::before {
        border-right-color: rgb(70, 76, 91);
    }
    .arrow::after {
        border-right-color: rgb(70, 76, 91);
    }
    .text {
        border: 1px solid rgb(70, 76, 91);
        background-color: rgb(70, 76, 91);
        color: white;
    }
}

.content[placement='left-start'] .arrow,
.content[placement='right-start'] .arrow {
    top: 12px;
}
.content[placement='left-end'] .arrow,
.content[placement='right-end'] .arrow {
    top: calc(100% - 12px);
}

.ivy-fade-enter-active,
.ivy-fade-leave-active {
    transition: opacity 0.3s;
}

.ivy-fade-enter-from,
.ivy-fade-leave-to {
    opacity: 0;
}
.ivy-fade-enter-to,
.ivy-fade-leave-from {
    opacity: 1;
}
</style>
