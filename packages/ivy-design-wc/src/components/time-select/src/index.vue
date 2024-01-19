<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import dayjs from 'dayjs'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useHost } from '@/hooks/useHostElement'

defineOptions({
    name: 'TimeSelect',
    inheritAttrs: false
})

const { triggerRef, targetRef, arrowRef } = usePopper()

export interface Props {
    start: string
    end: string
    step: string
    placeholder: string
    disabled: boolean
}
const props = withDefaults(defineProps<Props>(), {
    start: '00:00',
    end: '23:59',
    step: '01:00',
    placeholder: '请选择时间'
})

const dateList = computed(() => {
    const target = []
    const curDate = dayjs().format('YYYY-MM-DD')
    const start = dayjs(curDate + ' ' + props.start)
    let cloneStart = start.clone()
    const end = dayjs(curDate + ' ' + props.end)
    const step = dayjs(curDate + ' ' + props.step)

    while (cloneStart.isBefore(end)) {
        cloneStart = cloneStart.add(step.hour(), 'hour').add(step.minute(), 'minute')
        target.push(cloneStart.format('HH:mm'))
    }
    return [...target]
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

const handlerClick = (e: MouseEvent) => {
    const target = e.target as any
    const val = target.dataset.value
    if (val) {
        // const optionValue = target.getAttribute('value')
        // if (optionValue !== curValue.value) {
        // curValue.value = optionValue
        // emit('change', curValue.value)
        // ;(inputEl.value as HTMLElement).setAttribute('value', target.label)
        // getHostElement().setAttribute('value', curValue.value as string)
        // }
    }
    visible.value = false
}

onMounted(() => {
    window.addEventListener('click', handlerHideDrop)
    window.addEventListener('scroll', handlerScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', handlerHideDrop)
    window.removeEventListener('scroll', handlerScroll)
})
</script>

<template>
    <div ref="triggerRef" @click="handlerInputClick">
        <input class="ivy-input-inner" type="text" :placeholder="props.placeholder" readonly />
    </div>
    <transition>
        <div class="select-option-wrap" ref="dropEl" v-show="visible">
            <div class="select-arrow"></div>
            <div class="select-option-scroll">
                <div class="select-option" @click="handlerClick">
                    <div
                        v-for="item in dateList"
                        :key="item"
                        :data-value="item"
                        class="option-item"
                    >
                        {{ item }}
                    </div>
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

.option-item {
    display: block;
    padding: 0 12px;
    line-height: 34px;
    height: 34px;
    cursor: pointer;
    transition: background-color 0.15s ease;
    font-size: var(--ivy-select-font-size);
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
</style>
