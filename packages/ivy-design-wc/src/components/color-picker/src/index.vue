<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import { toRef, onMounted, ref, reactive, watch, computed } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { useHost } from '@/hooks/useHostElement'
import { color2HslMap, calcLightness, calcSaturation, type HslMap } from './utils'

import Hue from './hue.vue'
import Alpha from './alpha.vue'

const { getHostElement } = useHost()

defineOptions({
    name: 'ColorPicker',
    inheritAttrs: false
})

interface Props {
    value: string
    content: string
    placement: string
    theme: string
    delay: number
    alpha: boolean
}

const props = withDefaults(defineProps<Props>(), {
    content: '',
    placement: 'bottom',
    theme: 'light',
    delay: 10
})

const placement = toRef(props, 'placement')

const { createPopper, visible, referenceEl, floatEl, floatArrow } = usePopper({
    placement: placement.value as any
})

const { floatingStyles, middlewareData, finalPlacement } = createPopper()

let timer: any = null

const dispatchEvent = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    timer = setTimeout(() => {
        visible.value = true
        console.log('visible', visible.value)
    }, props.delay || 10)
}
let curColor = computed(() => {
    return `hsl(${internalState.h}deg, 100%, 50%)`
})
const internalState = reactive<HslMap>({
    h: 0,
    s: 0,
    l: 0,
    a: 1
})
const handleOpen = () => {
    dispatchEvent()
}

const handleOtherClose = (e: Event) => {
    const target = e.target as HTMLElement
    const hostElement = getHostElement()

    const isContains = hostElement.contains(target)
    if (!isContains) {
        if (timer !== null) {
            clearTimeout(timer)
            timer = null
        }
        visible.value = false
    }
}
const handlerScroll = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    visible.value = false
}

const init = () => {
    let color = '#f00000'
    if (props.value) {
        color = props.value
    }
    const tmp = color2HslMap(color) as HslMap
    internalState.h = tmp?.h
    internalState.s = tmp?.s
    internalState.l = tmp?.l
    internalState.a = tmp?.a
    console.log('curColor', curColor.value)
}
onMounted(() => {
    init()
    useEventListener(window, 'click', handleOtherClose)
    useEventListener(window, 'scroll', handlerScroll)
})

const point = reactive({
    x: 0,
    y: 0
})
const updatePoint = (x: number, y: number) => {
    let t = { x: x, y: y }
    if (x < 0) {
        t.x = 0
    } else if (x > 260) {
        t.x = 260
    }

    if (y < 0) {
        t.y = 0
    } else if (y > 140) {
        t.y = 140
    }

    return t
}
let isPress = false
const handleChooseDown = (ev: MouseEvent) => {
    isPress = true
    const { offsetX: x, offsetY: y } = ev
    point.x = x
    point.y = y
}

const handleChooseLeave = (ev: MouseEvent) => {
    if (!isPress) return
    isPress = false
    const { offsetX, offsetY } = ev
    const { x, y } = updatePoint(offsetX, offsetY)
    point.x = x
    point.y = y
}

const handleChooseUp = (ev: MouseEvent) => {
    isPress = false
    const { offsetX, offsetY } = ev
    const { x, y } = updatePoint(offsetX, offsetY)
    point.x = x
    point.y = y
}

const handleChooseMove = useThrottleFn((ev: MouseEvent) => {
    if (!isPress) return
    const { offsetX: x, offsetY: y } = ev
    point.x = x
    point.y = y
}, 10)

watch(point, (val, oldVal) => {
    const saturation = calcSaturation(val.x)
    const lightness = calcLightness(val.y)
    internalState.s = saturation
    internalState.l = lightness
    console.log(val, oldVal, internalState)
})
const emit = defineEmits<{ change: [val: string] }>()
watch(internalState, (val) => {
    emit('change', `hsla(${val.h}deg, ${val.s}%, ${val.l}%, ${val.a})`)
})

const alphaComponentBackground = computed(() => {
    const a = `hsla(${internalState.h}deg, ${internalState.s}%, ${internalState.l}%, 0)`
    const b = `hsla(${internalState.h}deg, ${internalState.s}%, ${internalState.l}%, 1)`
    return `linear-gradient(to right, ${a}, ${b})`
})
</script>

<template>
    <div tabindex="0" class="ivy-tooltip-ref" ref="referenceEl" @click="handleOpen">Color</div>
    <transition name="ivy-fade">
        <div
            class="content"
            ref="floatEl"
            v-if="visible"
            :data-placement="finalPlacement"
            :theme="props.theme"
            :style="floatingStyles"
        >
            <div
                class="arrow"
                ref="floatArrow"
                :data-placement="finalPlacement"
                :style="{
                    left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
                    top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : ''
                }"
            ></div>
            <div class="pane">
                <div
                    :style="{ backgroundColor: curColor }"
                    class="pane-choose"
                    @mousedown="handleChooseDown"
                    @mousemove="handleChooseMove"
                    @mouseup="handleChooseUp"
                    @mouseleave="handleChooseLeave"
                >
                    <span
                        class="pane-choose-utils"
                        :style="{ left: `${point.x - 4}px`, top: `${point.y - 4}px` }"
                    ></span>
                </div>
                <div style="margin-top: 12px">
                    <div></div>
                    <div></div>
                    <div>
                        <Hue :width="200" v-model="internalState.h" />
                        <Alpha
                            :width="200"
                            v-model="internalState.a"
                            class="alpha"
                            :style="{
                                background: alphaComponentBackground
                            }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-tooltip-color: var(--ivy-text-color-primary);
    --ivy-tooltip-background-color: #fff;
    --ivy-tooltip-font-size: 13px;
    --ivy-tooltip-z-index: 1000;
    --ivy-tooltip-arrow-color: #fff;
    --ivy-tooltip-arrow-size: 8px;
    --ivy-tooltip-arrow-border-color: var(--ivy-border-color);
    --ivy-popover-min-width: 160px;
    display: inline-flex;
    position: relative;
}

:host([theme='dark']) {
    --ivy-tooltip-color: #fff;
    --ivy-tooltip-background-color: rgb(70, 76, 91);
    --ivy-tooltip-arrow-color: rgb(70, 76, 91);
    --ivy-tooltip-arrow-border-color: rgb(70, 76, 91);
}

.ivy-tooltip-ref {
    display: inline-flex;
    cursor: default;
}

.content {
    position: absolute;
    z-index: var(--ivy-tooltip-z-index);
    border: 1px solid var(--ivy-tooltip-arrow-border-color);
    border-radius: var(--ivy-border-radius);
    background-color: var(--ivy-tooltip-background-color);
    font-size: var(--ivy-tooltip-font-size);
    color: var(--ivy-tooltip-color);
    padding: 12px;
}

.arrow {
    position: absolute;
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    width: var(--ivy-tooltip-arrow-size);
    height: 8px;
    transform: rotate(-45deg);
    border: 1px solid transparent;
    background-color: var(--ivy-tooltip-arrow-color);

    &[data-placement^='top'] {
        border-bottom-color: var(--ivy-tooltip-arrow-border-color);
        border-left-color: var(--ivy-tooltip-arrow-border-color);
        bottom: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }

    &[data-placement^='bottom'] {
        border-top-color: var(--ivy-tooltip-arrow-border-color);
        border-right-color: var(--ivy-tooltip-arrow-border-color);
        top: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }

    &[data-placement^='right'] {
        border-left-color: var(--ivy-tooltip-arrow-border-color);
        border-top-color: var(--ivy-tooltip-arrow-border-color);
        left: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }

    &[data-placement^='left'] {
        border-bottom-color: var(--ivy-tooltip-arrow-border-color);
        border-right-color: var(--ivy-tooltip-arrow-border-color);
        right: calc(0px - var(--ivy-tooltip-arrow-size) / 2);
    }
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

// color picker
.pane {
    width: 260px;
    &-choose {
        height: 140px;
        background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
            linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
        position: relative;
        &-utils {
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            box-sizing: border-box;
            border: 1px solid white;
            position: absolute;
            pointer-events: none;
        }
    }
}

.alpha {
    margin-top: 8px;
}
</style>
