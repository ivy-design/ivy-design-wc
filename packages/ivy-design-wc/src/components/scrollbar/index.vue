<script setup lang="ts">
import { computed, ref, onMounted, reactive } from 'vue'
import { useMutationObserver, useThrottleFn, useElementHover, useEventListener } from '@vueuse/core'

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

// 缓存鼠标位置
const prevMousePosition = reactive({
    x: 0,
    y: 0
})

const handleMousedown = useThrottleFn((ev: MouseEvent) => {
    isPress.value = true
    prevMousePosition.x = ev.clientX
    prevMousePosition.y = ev.clientY
}, 10)

const handleMouseup = useThrottleFn(() => {
    isPress.value = false
    prevMousePosition.x = 0
    prevMousePosition.y = 0
}, 10)

const handleMousemove = useThrottleFn((ev: any) => {
    if (!isPress.value) return
    const { clientX, clientY } = ev
    const tmp = {
        x: clientX - prevMousePosition.x,
        y: clientY - prevMousePosition.y
    }
    prevMousePosition.x = clientX
    prevMousePosition.y = clientY

    scrollMove.y = scrollMove.y + tmp.y

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
}, 10)

const { setExpose } = useExpose()

onMounted(() => {
    setExpose('scroll', (value: number, type = 'vertical') => {
        if (type === 'vertical') {
            scrollWrap.value!.scrollTop = value
        } else {
            scrollWrap.value!.scrollLeft = value
        }
    })
    useEventListener(document, 'mouseup', handleMouseup)
    useEventListener(document, 'mousemove', handleMousemove)
    handleWrapSizeChange()
    useMutationObserver(
        scrollWrap.value,
        () => {
            handleWrapSizeChange()
        },
        { attributes: true, childList: true, subtree: true, attributeFilter: ['style', 'class'] }
    )
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
                    @mousedown="handleMousedown"
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
