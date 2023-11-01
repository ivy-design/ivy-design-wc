<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useMutationObserver } from '@vueuse/core'
import useHostElement from '@/hooks/useHostElement'
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

const { el: root } = useHostElement()

// const root = ref<HTMLElement | null>(null)
const scrollbarView = ref<HTMLElement | null>(null)

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
        <div class="ivy-scrollbar__view" ref="scrollbarView">
            <slot></slot>
        </div>
        <div class="ivy-scrollbar__bar is-vertical" :data-show="statusY ? 'show' : ''">
            <div class="el-scrollbar__thumb" :style="{ height: `${scrollbarSizeY}px` }"></div>
        </div>
        <div class="ivy-scrollbar__bar is-horizontal" :data-show="statusX ? 'show' : ''">
            <div class="el-scrollbar__thumb" :style="{ width: `${scrollbarSizeX}px` }"></div>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}
.ivy-scrollbar__view {
    width: max-content;
    height: max-content;
}
.ivy-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 10;
    border-radius: 4px;
    box-sizing: border-box;
    display: none;
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
.el-scrollbar__thumb {
    background-color: var(--ivy-scrollbar-thumb-background-color, #ddd);
    border-radius: 4px;
}

.ivy-scrollbar__bar.is-vertical .el-scrollbar__thumb {
    width: 100%;
    height: 100px;
}
.ivy-scrollbar__bar.is-horizontal .el-scrollbar__thumb {
    height: 100%;
}

:host(:hover) .ivy-scrollbar__bar[data-show='show'] {
    display: initial;
}
</style>
