<script setup lang="ts">
import usePopper from '@/hooks/usePopper'
import { toRef, onMounted, reactive, watch, computed } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useHost } from '@/hooks/useHostElement'
import { color2HslMap, type HslMap, hsl2rgb } from './utils'

import Hue from './hue.vue'
import Alpha from './alpha.vue'
import ColorPane from './color-pane.vue'
import Predefine from './predefine.vue'

const { getHostElement } = useHost()

defineOptions({
    name: 'ColorPicker',
    inheritAttrs: false
})

interface Props {
    value: string
    placement: string
    theme: string
    delay: number
    alpha: boolean
    predefine: string
}

const props = withDefaults(defineProps<Props>(), {
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

const internalState = reactive<HslMap>({ h: 0, s: 100, l: 50, a: 100 })
const handleOpen = () => {
    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }
    timer = setTimeout(() => {
        visible.value = true
    }, props.delay || 10)
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
    internalState.a = tmp?.a || 100
}
onMounted(() => {
    init()
    useEventListener(window, 'click', handleOtherClose)
    useEventListener(window, 'scroll', handlerScroll)
})

const handleColorPaneChange = (val: Record<string, number>) => {
    internalState.s = val.s
    internalState.l = val.l
}
const curColor = computed(() => {
    if (!props.value) return 'rgba(255,255,255,1)'
    const rgba = hsl2rgb(internalState.h, internalState.s, internalState.l, internalState.a / 100)

    return rgba
})
const emit = defineEmits<{ change: [val: string] }>()
watch(internalState, (val) => {
    emit('change', `hsla(${val.h}deg, ${val.s}%, ${val.l}%, ${val.a / 100})`)
})

const alphaComponentBackground = computed(() => {
    const a = `hsla(${internalState.h}deg, ${internalState.s}%, ${internalState.l}%, 0)`
    const b = `hsla(${internalState.h}deg, ${internalState.s}%, ${internalState.l}%, 1)`
    return `linear-gradient(to right, ${a}, ${b})`
})

const handleDefineChange = (color: string) => {
    const tmp = color2HslMap(color) as HslMap

    internalState.h = tmp?.h
    internalState.s = tmp?.s
    internalState.l = tmp?.l
    internalState.a = tmp?.a || 100
}
</script>

<template>
    <div tabindex="0" class="ivy-tooltip-ref" ref="referenceEl" @click="handleOpen">
        <span
            class="color-preview"
            :style="{
                display: 'block',
                width: '100%',
                height: '100%'
            }"
        >
            <span
                :style="{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: curColor as string
                }"
            ></span>
        </span>
    </div>
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
                <ColorPane
                    :hue="internalState.h"
                    :s="internalState.s"
                    :l="internalState.l"
                    @change="handleColorPaneChange"
                />

                <div style="margin-top: 12px">
                    <Hue :width="260" v-model="internalState.h" />
                    <Alpha
                        :width="260"
                        v-model="internalState.a"
                        class="alpha"
                        :bar-color="alphaComponentBackground"
                    />
                </div>
                <Predefine
                    v-if="props.predefine"
                    :data="props.predefine"
                    style="margin-top: 12px"
                    @select="handleDefineChange"
                />
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
    --ivy-size-default: 32px;
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
    box-sizing: border-box;
    cursor: default;
    width: var(--ivy-size-default);
    height: var(--ivy-size-default);
    padding: 5px;
    border: 1px solid var(--ivy-border-color);
    border-radius: var(--ivy-border-radius);
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

.alpha {
    margin-top: 8px;
}
.color-preview {
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
        linear-gradient(135deg, #ccc 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #ccc 75%),
        linear-gradient(135deg, transparent 75%, #ccc 75%);
    background-size: 12px 12px;
    background-position:
        0 0,
        6px 0,
        6px -6px,
        0 6px;

    &-box {
        box-sizing: border-box;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border: 1px solid var(--ivy-border-color);
        border-radius: var(--ivy-border-radius);
    }
}
.color-predefine {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
</style>
