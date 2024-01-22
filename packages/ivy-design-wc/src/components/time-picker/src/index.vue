<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import dayjs, { type Dayjs } from 'dayjs'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useHost } from '@/hooks/useHostElement'
import { CloseIcon as Close } from '@/utils/icons'

defineOptions({
    name: 'TimePicker',
    inheritAttrs: false
})

const { triggerRef, targetRef, arrowRef } = usePopper()

export interface Props {
    start: string
    end: string
    step: string
    placeholder: string
    disabled: boolean
    format: string
    value: string
    minTime: string
    maxTime: string
    clearable: boolean
}
const props = withDefaults(defineProps<Props>(), {
    start: '09:00',
    end: '17:00',
    step: '00:30',
    placeholder: '请选择时间',
    format: 'HH:mm'
})

const isDisabled = (cur: Dayjs, min: Dayjs, max: Dayjs) => {
    if (min || max) {
        return cur.isBefore(min) || cur.isAfter(max)
    } else {
        return false
    }
}
const inputEl = ref<HTMLInputElement>()

const dateList = computed(() => {
    const target = []
    const curDate = dayjs().format('YYYY-MM-DD')
    const start = dayjs(curDate + ' ' + props.start)
    let cloneStart = start.clone()
    const end = dayjs(curDate + ' ' + props.end)
    const step = dayjs(curDate + ' ' + props.step)
    const minTime = dayjs(curDate + ' ' + props.minTime)
    const maxTime = dayjs(curDate + ' ' + props.maxTime)

    while (cloneStart.isBefore(end)) {
        cloneStart = cloneStart.add(step.hour(), 'hour').add(step.minute(), 'minute')
        target.push({
            value: cloneStart.format(props.format),
            disabled: isDisabled(cloneStart, minTime, maxTime)
        })
    }
    const lastIndex = target.length - 1
    if (target[lastIndex].value === end.format(props.format)) {
        target.pop()
    }

    const result = [
        {
            value: start.format(props.format),
            disabled: isDisabled(start, minTime, maxTime)
        },
        ...target,
        {
            value: end.format(props.format),
            disabled: isDisabled(end, minTime, maxTime)
        }
    ]

    return result
})

const visible = ref(false)
const { host } = useHost()
const handlerInputClick = () => {
    if (props.disabled) return
    if (!visible.value) {
        visible.value = true
    }
}

const handlerHideDrop = (e: MouseEvent) => {
    const target = e.target as HTMLElement

    const isContains = host.value?.contains(target)
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

const setDefaultValue = () => {
    if (props.value && dateList.value.find((item) => item.value === props.value)) {
        ;(inputEl.value as HTMLInputElement).value = props.value
    }
}

onMounted(() => {
    window.addEventListener('click', handlerHideDrop)
    window.addEventListener('scroll', handlerScroll)
    setDefaultValue()
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
        <div class="select-option-wrap" ref="targetRef" v-show="visible">
            <div class="select-arrow" ref="arrowRef"></div>
            <div class="select-option-scroll">
                <div class="select-option" @click="handlerClick">
                    <div
                        v-for="item in dateList"
                        :key="item.value"
                        :data-value="item.value"
                        class="option-item"
                        :data-disabled="item.disabled === true"
                    >
                        {{ item.value }}
                    </div>
                </div>
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

.select-option-wrap {
    position: absolute;
    width: 100%;
    min-width: 240px;
    left: 0;
    top: calc(var(--ivy-time-select-height) + 2px);
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
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(144, 147, 153, 1);
        border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(144, 147, 153, 0.3);
        border-radius: 2px;
    }
}
.select-option {
    margin: 6px 0;
}
.select-arrow {
    height: 6px;
    width: 6px;
    position: absolute;
}

.option-item {
    display: block;
    padding: 0 12px;
    line-height: 34px;
    height: 34px;
    cursor: pointer;
    transition: background-color 0.15s ease;
    font-size: var(--ivy-time-select-font-size);
    &[data-disabled='true'] {
        color: #a8abb2;
        cursor: not-allowed;
    }
}

.option-item:hover {
    background-color: #f4f4f5;
}

.option-item[disabled] {
    cursor: not-allowed;
    color: #a8abb2;
    background-color: transparent;
    pointer-events: none;
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
