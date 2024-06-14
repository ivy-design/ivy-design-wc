<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import dayjs, { type Dayjs } from 'dayjs'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useHost } from '@/hooks/useHostElement'
import { CloseIcon as Close } from '@/utils/icons'
import Pane from './pane.vue'

defineOptions({
    name: 'TimePicker',
    inheritAttrs: false
})

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

const { createPopper, visible, referenceEl, floatEl } = usePopper()

const { floatingStyles, finalPlacement } = createPopper()

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

const { host } = useHost()
const handlerInputClick = () => {
    if (props.disabled) return
    if (!visible.value) {
        if (!props.value) {
            const curDate = dayjs()
            const data = {
                hour: curDate.hour(),
                minute: curDate.minute(),
                second: curDate.second()
            }
            console.log(data, 'data')
        }
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

const handleClear = () => {
    if (props.disabled) return
        ; (inputEl.value as HTMLInputElement).value = null as unknown as string
    emit('change')
    emit('clear')
}

const handlePaneChange = (val: any) => {
    console.log(val)
}

const setDefaultValue = () => {
    if (props.value && dateList.value.find((item) => item.value === props.value)) {
        ; (inputEl.value as HTMLInputElement).value = props.value
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
    <div class="input-wrap" ref="referenceEl" @click="handlerInputClick">
        <input :class="['input-inner', { 'input-inner-clearable': props.clearable }]" type="text" ref="inputEl"
            :placeholder="props.placeholder" readonly />
        <div class="input-close" v-if="props.clearable" @click.stop="handleClear">
            <Close />
        </div>
    </div>
    <transition name="dropdown">
        <div class="dropdown" ref="floatEl" v-if="visible" :data-placement="finalPlacement" :style="floatingStyles">
            <Pane @change="handlePaneChange" />
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

.dropdown {
    position: absolute;
    width: fit-content;
    background-color: var(--ivy-color-white);
    min-width: 240px;
    left: 0;
    top: calc(var(--ivy-time-select-height) + 2px);
    border-radius: 2px;
    z-index: 10;
    box-shadow: var(--ivy-box-shadow);
    max-height: 274px;
    padding: 8px 0;
    box-sizing: border-box;
    border: 1px solid var(--ivy-border-color);
    border-radius: var(--ivy-border-radius);
}

.pane {
    display: flex;
    justify-content: flex-start;
    max-height: 258px;
    overflow: hidden;
    font-size: 14px;

    &-list {
        flex: 0 1 80px;
        max-width: 140px;
        padding: 0 12px;
    }

    .item {
        display: block;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
            background-color: #f5f5f5;
        }

        &-checked {
            background-color: var(--ivy-color-primary, #409eff);
            color: #fff;

            &:hover {
                background-color: var(--ivy-color-primary, #409eff);
            }
        }
    }
}

.dropdown {

    &-enter-active,
    &-leave-active {
        transform-origin: top center;
        transition:
            transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
            opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: scaleY(0.2);
    }

    &-enter-to,
    &-leave-from {
        opacity: 1;
        transform: scaleY(1);
    }
}
</style>
