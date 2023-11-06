<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useMutationObserver, useThrottleFn, useElementHover } from '@vueuse/core'

import useExpose from '@/hooks/useExpose'

defineOptions({
    name: 'Scrollbar',
    inheritAttrs: false
})

const props = defineProps({
    height: {
        type: String,
        default: '100%'
    },
    maxHeight: {
        type: String,
        default: '100%'
    },
    minSize: {
        type: String,
        default: '20'
    }
})

const conf = computed(() => {
    return {
        minSize: parseFloat(props.minSize)
    }
})

const root = ref()

const isHovered = useElementHover(root, {
    delayEnter: 10,
    delayLeave: 10
})

// const root = ref<HTMLElement | null>(null)
const scrollbarView = ref<HTMLElement | null>(null)
const scrollWrap = ref<HTMLElement | null>(null)

// const scrollTop: number = ref(0)
// const maxScrollTop: number = ref(0)

const statusX = ref(false)
const statusY = ref(false)

const scrollbarSizeX = ref(0)
const scrollbarSizeY = ref(0)

const init = () => {
    const rootStyles = getComputedStyle(root.value as HTMLElement)
    const width = rootStyles.getPropertyValue('width')
    const height = rootStyles.getPropertyValue('height')
    const scrollbarViewStyles = getComputedStyle(scrollbarView.value as HTMLElement)
    const scrollbarViewWidth = scrollbarViewStyles.getPropertyValue('width')
    const scrollbarViewHeight = scrollbarViewStyles.getPropertyValue('height')
    if (parseFloat(scrollbarViewHeight) > parseFloat(height)) {
        statusY.value = true
        scrollbarSizeY.value = Math.max(
            parseFloat(height) / (parseFloat(scrollbarViewHeight) / parseFloat(height)),
            conf.value.minSize
        )
        console.log(scrollbarSizeY.value)
    }
    if (parseFloat(scrollbarViewWidth) > parseFloat(width)) {
        statusX.value = true
    }
    console.log(width, height, scrollbarViewWidth, scrollbarViewHeight)
}

const isPress = ref(false)

/**处理滚动条 */

const initMap = ref({
    x: 0,
    y: 0
})

const scrollMap = ref({
    x: 0,
    y: 0
})

const verticalScrollbar = ref<HTMLElement | null>(null)
const horizontalScrollbar = ref<HTMLElement | null>(null)

const handleMousedown = (e: MouseEvent) => {
    console.log(e)
    isPress.value = true
    initMap.value.x = e.x
    initMap.value.y = e.y
}

const handleMouseup = (e: MouseEvent) => {
    console.log(e)
    isPress.value = false
}

const calcRealMove = (distance: number, isVertical = false) => {
    const rootStyles = getComputedStyle(root.value as HTMLElement)
    const width = rootStyles.getPropertyValue('width')
    const height = rootStyles.getPropertyValue('height')
    const scrollbarViewStyles = getComputedStyle(scrollbarView.value as HTMLElement)
    const scrollbarViewWidth = scrollbarViewStyles.getPropertyValue('width')
    const scrollbarViewHeight = scrollbarViewStyles.getPropertyValue('height')
    if (isVertical) {
        return (distance * parseFloat(scrollbarViewWidth)) / parseFloat(width)
    } else {
        return (distance * parseFloat(scrollbarViewHeight)) / parseFloat(height)
    }
}

const handleMousemove = useThrottleFn((ev: any) => {
    if (!isPress.value) {
        return
    }
    const move = calcRealMove(ev.layerY)
    console.log(ev, ev.offsetX, ev.offsetY, ev.layerX, ev.layerY, move)
    scrollMap.value.y = ev.y - initMap.value.y + scrollMap.value.y
    // initMap.value.y = 0
    // scrollMap.value.y = ev.y - initMap.value.y + scrollMap.value.y
    if (scrollbarView.value) scrollWrap.value.scrollTo(0, move)
}, 10)

const { setExpose } = useExpose()

onMounted(() => {
    setExpose('open', () => {
        console.log(123)
    })
    init()
    useMutationObserver(
        scrollbarView.value,
        (mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'attributes') {
                    console.log(123)
                    init()
                }
            }
        },
        { attributes: true, childList: true, subtree: true, attributeFilter: ['style'] }
    )
})
</script>

<template>
    <div ref="root" :style="{ height: props.height, maxHeight: props.maxHeight }">
        <div
            class="scrollbar__wrap"
            :style="{ height: props.height, maxHeight: props.maxHeight }"
            ref="scrollWrap"
        >
            <div class="scrollbar__view" ref="scrollbarView">
                <slot></slot>
            </div>
        </div>

        <transition name="fade">
            <div
                class="scrollbar__bar is-vertical"
                ref="verticalScrollbar"
                v-show="statusY && isHovered"
            >
                <div
                    class="scrollbar__thumb"
                    :style="{
                        height: `${scrollbarSizeY}px`,
                        transform: `translateY(${scrollMap.y}px)`
                    }"
                    @mousedown="handleMousedown"
                    @mouseup="handleMouseup"
                    @mousemove="handleMousemove"
                ></div>
            </div>
        </transition>
        <transition name="fade">
            <div
                class="scrollbar__bar is-horizontal"
                ref="horizontalScrollbar"
                v-show="statusX && isHovered"
            >
                <div
                    class="scrollbar__thumb"
                    :style="{ width: `${scrollbarSizeX}px` }"
                    @mousedown="handleMousedown"
                    @mouseup="handleMouseup"
                    @mousemove="handleMousemove"
                ></div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}
.scrollbar__wrap {
    overflow: auto;
    scrollbar-width: none;
}
.scrollbar__view {
    width: max-content;
    height: max-content;
}
.scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 10;
    border-radius: 4px;
    box-sizing: border-box;
    &.is-vertical {
        width: 8px;
        top: 0;
        height: 100%;
    }
    .is-horizontal {
        height: 8px;
        left: 0;
        width: 100%;
    }
}
.scrollbar__thumb {
    background-color: var(--ivy-scrollbar-thumb-background-color, #ddd);
    border-radius: 4px;
    transform: translate(0, 0);
}

.scrollbar__bar.is-vertical .scrollbar__thumb {
    width: 100%;
    height: 100px;
}
.scrollbar__bar.is-horizontal .scrollbar__thumb {
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
