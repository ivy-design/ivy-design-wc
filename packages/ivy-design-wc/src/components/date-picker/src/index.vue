<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import dayjs, { type Dayjs } from 'dayjs'
import { ref, useHost, onMounted, onBeforeUnmount } from 'vue'
import { CloseIcon as Close } from '@/utils/icons'
import CompDate from './date.vue'
import { genDateList } from './utils'

defineOptions({
    name: 'DatePicker',
    inheritAttrs: false
})

const { referenceEl: triggerRef, floatEl: targetRef, floatArrow: arrowRef } = usePopper()

export type PropType = 'date' | 'month' | 'year'

export interface Props {
    type: PropType
    format: string
    value: string
    clearable: boolean
    disabled: boolean
    placeholder: string
}
const props = withDefaults(defineProps<Props>(), {
    type: 'date',
    format: 'YYYY-MM-DD',
    clearable: false,
    disabled: false
})

const inputEl = ref<HTMLInputElement>()

const visible = ref(false)
const host = useHost()
const handlerInputClick = () => {
    if (props.disabled) return
    if (!visible.value) {
        visible.value = true
    }
}

const handlerHideDrop = (e: MouseEvent) => {
    const target = e.target as HTMLElement

    const isContains = host?.contains(target)
    if (!isContains) {
        visible.value = false
    }
}

const handlerScroll = () => {
    visible.value = false
}

const emit = defineEmits<{
    (e: 'change', val?: 'string'): void
    (e: 'clear'): void
}>()

const handlerClick = (e: MouseEvent) => {
    const target = e.target as any
    const val = target.dataset.value
    if (!val) {
        visible.value = false
        return
    }

    if (val == inputEl.value?.value) {
        visible.value = false
        return
    }
    ;(inputEl.value as HTMLInputElement).value = val
    emit('change', val)
    visible.value = false
}

const handleClear = () => {
    if (props.disabled) return
    ;(inputEl.value as HTMLInputElement).value = null as unknown as string
    emit('change')
    emit('clear')
}

const setDefaultValue = () => {}

const dateList = ref<Array<{ value: number; type: string }>>([])
const cur = ref()

const init = () => {
    cur.value = props.value ? dayjs(props.value) : dayjs()

    dateList.value = genDateList(cur.value.year, cur.value.year)
}

onMounted(() => {
    window.addEventListener('click', handlerHideDrop)
    window.addEventListener('scroll', handlerScroll)
    init()
})

onBeforeUnmount(() => {
    window.removeEventListener('click', handlerHideDrop)
    window.removeEventListener('scroll', handlerScroll)
})
</script>

<template>
    <!-- <ivy-input ref="triggerRef" :placeholder="props.placeholder" readonly></ivy-input> -->
    <div class="input-wrap" ref="triggerRef" @click="handlerInputClick">
        <input
            :class="['input-inner', { 'input-inner-clearable': props.clearable }]"
            type="text"
            ref="inputEl"
            :placeholder="props.placeholder"
            readonly
        />
        <div class="input-close" v-if="props.clearable" @click.stop="handleClear">
            <Close />
        </div>
    </div>
    <transition name="dropdown">
        <div class="wrap" ref="targetRef" v-show="visible">
            <div class="wrap-arrow" ref="arrowRef"></div>
            <div class="wrap-inner">
                <CompDate :data="dateList" />
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-time-select-font-size: var(--ivy-font-size, 14px);
    --ivy-time-select-height: 32px;
    display: block;
    position: relative;
}

.input-inner::input-placeholder,
.input-inner::-webkit-input-placeholder,
.input-inner::-moz-input-placeholder,
.input-inner:-moz-input-placeholder,
.input-inner:-ms-input-placeholder {
    color: #c0c4cc;
    font-size: 14px;
}

.input-inner:active,
.input-inner:hover,
.input-inner:focus {
    border-color: var(--ivy-color-primary, #409eff);
}
.input {
    &-wrap {
        position: relative;
    }
    &-inner {
        background-color: #fff;
        background-image: none;
        border-radius: var(--ivy-border-radius, 4px);
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        height: var(--ivy-time-select-height);
        line-height: var(--ivy-time-select-height);
        outline: none;
        padding: 0 12px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        font-size: var(--ivy-time-select-font-size);
        &-clearable {
            padding-right: 38px;
        }
    }
    &-close {
        display: inline-flex;
        cursor: pointer;
        position: absolute;
        font-size: 16px;
        top: 50%;
        right: 12px;
        transform: translate3d(0, -50%, 0);
        &:hover {
            color: var(--ivy-color-primary, #409eff);
        }
    }
}

:host([disabled]) {
    cursor: not-allowed;
    & .input-inner {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
    }
    & .input-close {
        cursor: not-allowed;
        color: #a8abb2;
    }
}

.wrap {
    position: absolute;
    width: 340px;
    left: 0;
    top: calc(var(--ivy-time-select-height) + 2px);
    border-radius: 2px;
    overflow: hidden;
    z-index: 10;
}

.wrap-inner {
    overflow: hidden;
    background-color: #fff;
    height: 274px;
    padding: 0 12px;
    border-radius: 4px;
    border: 1px solid var(--ivy-border-color, #dcdfe6);
    box-shadow: var(
        --ivy-box-shadow,
        0px 12px 32px 4px rgba(0, 0, 0, 0.04),
        0px 8px 20px rgba(0, 0, 0, 0.08)
    );
}
ul {
    padding: 0;
    margin: 0;
}
li {
    list-style: none;
}
.box {
    font-size: var(--ivy-font-size);
}
.year {
    display: flex;
    flex-wrap: wrap;
    &-item {
        flex: 0 0 calc(100% / 7);
        height: 32px;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        &.is-current {
            &:hover {
                .year-item-inner {
                    background-color: #f5f7fa;
                }
            }
        }
        &-inner {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
        }
    }
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
