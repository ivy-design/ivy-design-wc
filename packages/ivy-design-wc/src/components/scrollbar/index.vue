<script setup lang="ts">
import { computed, ref, onMounted, reactive } from 'vue'
import { useThrottleFn, useElementHover, useEventListener, useResizeObserver } from '@vueuse/core'
import { getType } from '@/utils/utils'

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

const isHovered = useElementHover(root.value, {
    delayEnter: 10,
    delayLeave: 10
})

const scrollWrap = ref<HTMLElement | null>(null)
const scrollWrapSize = reactive({
    width: 0,
    height: 0
})
const getScrollWrapSize = () => {
    const rootStyles = getComputedStyle(root.value as HTMLElement)
    const width = rootStyles.getPropertyValue('width')
    const height = rootStyles.getPropertyValue('height')
    scrollWrapSize.width = parseFloat(width)
    scrollWrapSize.height = parseFloat(height)
}

const scrollView = ref<HTMLElement | null>(null)
const scrollViewSize = reactive({
    width: 0,
    height: 0
})
const getScrollViewSize = () => {
    const rootStyles = getComputedStyle(scrollView.value as HTMLElement)
    const width = rootStyles.getPropertyValue('width')
    const height = rootStyles.getPropertyValue('height')
    scrollViewSize.width = parseFloat(width)
    scrollViewSize.height = parseFloat(height)
}

const scrollbarSize = reactive({
    horizontal: 0,
    vertical: 0
})
const calcScrollbarSize = () => {
    // wA = scrollWrapSize.width / scrollViewSize.width * scrollWrapSize.width
    if (scrollWrapSize.width < scrollViewSize.width) {
        scrollbarSize.horizontal = Math.max(
            (scrollWrapSize.width / scrollViewSize.width) * scrollWrapSize.width,
            conf.value.minSize
        )
    } else {
        scrollbarSize.horizontal = 0
    }

    if (scrollWrapSize.height < scrollViewSize.height) {
        scrollbarSize.vertical = Math.max(
            (scrollWrapSize.height / scrollViewSize.height) * scrollWrapSize.height,
            conf.value.minSize
        )
    } else {
        scrollbarSize.vertical = 0
    }
}

const scrollMove = reactive({
    x: 0,
    y: 0
})

const handleWrapSizeChange = () => {
    getScrollWrapSize()
    getScrollViewSize()
    calcScrollbarSize()
}

// 鼠标左键处于按下状态
const isPress = ref(false)
// 方向
const direction = ref<'vertical' | 'horizontal'>()

// 缓存鼠标位置
const prevMousePosition = reactive({
    x: 0,
    y: 0
})

const handleMousedown = useThrottleFn((ev: MouseEvent) => {
    isPress.value = true
    prevMousePosition.x = ev.clientX
    prevMousePosition.y = ev.clientY
    const target = ev.target as HTMLElement
    const dataset = target.dataset
    direction.value = dataset.direction as 'vertical' | 'horizontal'
}, 10)

const handleMouseup = useThrottleFn(() => {
    isPress.value = false
    prevMousePosition.x = 0
    prevMousePosition.y = 0
    direction.value = undefined
}, 10)

const handleMousemove = useThrottleFn((ev: any) => {
    if (!isPress.value) return
    if (!direction.value) return
    if (direction.value === 'vertical') {
        const { clientY } = ev
        const tmp = clientY - prevMousePosition.y

        prevMousePosition.y = clientY

        scrollMove.y = scrollMove.y + tmp

        const max = scrollWrapSize.height - scrollbarSize.vertical
        if (scrollMove.y < 0) {
            scrollMove.y = 0
        } else if (scrollMove.y > max) {
            scrollMove.y = max
        }
        const movingDistance =
            (scrollMove.y / (scrollWrapSize.height - scrollbarSize.vertical)) *
            (scrollViewSize.height - scrollWrapSize.height)
        ;(scrollWrap.value as HTMLElement).scrollTop = movingDistance
    } else if (direction.value === 'horizontal') {
        // 水平
        const { clientX } = ev
        const tmp = clientX - prevMousePosition.x
        prevMousePosition.x = clientX
        scrollMove.x = scrollMove.x + tmp

        const max = scrollWrapSize.width - scrollbarSize.horizontal
        if (scrollMove.x < 0) {
            scrollMove.x = 0
        } else if (scrollMove.x > max) {
            scrollMove.x = max
        }
        const movingDistance =
            (scrollMove.x / (scrollWrapSize.width - scrollbarSize.horizontal)) *
            (scrollViewSize.width - scrollWrapSize.width)
        ;(scrollWrap.value as HTMLElement).scrollLeft = movingDistance
    }
}, 10)

interface ScrollToConf {
    top?: number
    left?: number
}
const exposeScrollTo = (conf: ScrollToConf | number, isHorizontal: boolean = false) => {
    const type = getType(conf)
    if (type === 'object') {
        const tmp = conf as ScrollToConf
        if (tmp.top) {
            scrollWrap.value!.scrollTop = tmp.top
        } else if (tmp.left) {
            scrollWrap.value!.scrollLeft = tmp.left
        }
    } else if (type === 'number') {
        if (isHorizontal) {
            ;(scrollWrap.value as HTMLDivElement).scrollLeft = conf as number
        } else {
            ;(scrollWrap.value as HTMLDivElement).scrollTop = conf as number
        }
    } else {
        throw new Error('参数类型错误')
    }
}

defineExpose({
    scrollTo: exposeScrollTo
})

onMounted(() => {
    useEventListener(document, 'mouseup', handleMouseup)
    useEventListener(document, 'mousemove', handleMousemove)
    handleWrapSizeChange()

    useResizeObserver(scrollView.value, () => {
        handleWrapSizeChange()
    })
})

// 计算滚动条的位置
const calculateScrollbarPosition = (type = 'vertical') => {
    if (type === 'vertical') {
        const diff = scrollViewSize.height - scrollWrapSize.height
        return (
            ((scrollWrap.value?.scrollTop as number) / diff) *
            (scrollWrapSize.height - scrollbarSize.vertical)
        )
    } else {
        return (
            ((scrollWrap.value?.scrollLeft as number) /
                (scrollViewSize.width - scrollWrapSize.width)) *
            (scrollWrapSize.width - scrollbarSize.horizontal)
        )
    }
}

const handleScroll = useThrottleFn(() => {
    if (scrollbarSize.horizontal) {
        scrollMove.x = calculateScrollbarPosition('horizontal')
    }
    if (scrollbarSize.vertical) {
        scrollMove.y = calculateScrollbarPosition('vertical')
    }
}, 10)
</script>

<template>
    <div class="root" ref="root" :style="{ height: props.height, maxHeight: props.maxHeight }">
        <div
            class="scrollbar__wrap"
            :style="{
                height: props.height,
                maxHeight: props.maxHeight,
                userSelect: isPress ? 'none' : 'auto'
            }"
            ref="scrollWrap"
            @scroll="handleScroll"
        >
            <div class="scrollbar__view" ref="scrollView">
                <slot></slot>
            </div>
        </div>

        <transition name="fade">
            <div
                class="scrollbar__bar is-vertical"
                v-show="scrollbarSize.vertical && (isHovered || isPress)"
            >
                <div
                    class="scrollbar__thumb"
                    :style="{
                        height: `${scrollbarSize.vertical}px`,
                        transform: `translateY(${scrollMove.y}px)`
                    }"
                    data-direction="vertical"
                    @mousedown="handleMousedown"
                ></div>
            </div>
        </transition>
        <transition name="fade">
            <div
                class="scrollbar__bar is-horizontal"
                v-show="scrollbarSize.horizontal && (isHovered || isPress)"
            >
                <div
                    class="scrollbar__thumb"
                    :style="{
                        width: `${scrollbarSize.horizontal}px`,
                        transform: `translateX(${scrollMove.x}px)`
                    }"
                    data-direction="horizontal"
                    @mousedown="handleMousedown"
                ></div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-scrollbar-thumb-color: var(--ivy-text-color-secondary);
    --ivy-scrollbar-color: transparent;
    --ivy-scrollbar-size: 8px;
    display: block;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}
.root {
    display: block;
}
.scrollbar__wrap {
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
}
.scrollbar__view {
    width: fit-content;
    min-width: 100%;
    & slot {
        display: block;
    }
}

.scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 10;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: var(--ivy-scrollbar-color);
    &.is-vertical {
        width: var(--ivy-scrollbar-size);
        top: 0;
        height: 100%;
    }
    &.is-horizontal {
        height: var(--ivy-scrollbar-size);
        left: 0;
        width: 100%;
    }
}
.scrollbar__thumb {
    background-color: var(--ivy-scrollbar-thumb-color);
    border-radius: 4px;
    transform: translate(0, 0);
    opacity: 0.5;
    &:hover,
    &:active {
        opacity: 0.7;
    }
}

.scrollbar__bar.is-vertical .scrollbar__thumb {
    width: 100%;
}
.scrollbar__bar.is-horizontal .scrollbar__thumb {
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
