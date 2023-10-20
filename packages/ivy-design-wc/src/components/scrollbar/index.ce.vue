<script setup lang="ts">
import { computed, ref } from 'vue'

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

const root = ref<HTMLElement | null>(null)
const scrollbarView = ref<HTMLElement | null>(null)

const scrollTop: number = ref(0)
const maxScrollTop: number = ref(0)

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
</script>

<template>
    <div ref="el" :style="{ height: this.height, maxHeight: this.maxHeight }">
        <div class="ivy-scrollbar__view" ref="scrollbarView">
            <slot></slot>
        </div>
        <div
            class="ivy-scrollbar__bar is-vertical"
            style="{ height: `${this.scrollbarSizeY}px` }"
            :data-show="this.statusY ? 'show' : ''"
        >
            <div class="el-scrollbar__thumb"></div>
        </div>
        <div
            class="ivy-scrollbar__bar is-horizontal"
            :style="{ width: `${this.scrollbarSizeX}px` }"
            data-show="this.statusX ? 'show' : ''"
        >
            <div class="el-scrollbar__thumb"></div>
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
    z-index: 1;
    border-radius: 4px;
    box-sizing: border-box;
    display: none;
}
.el-scrollbar__thumb {
    background-color: var(--ivy-scrollbar-thumb-background-color, #ddd);
    border-radius: 4px;
}
.ivy-scrollbar__bar.is-vertical {
    width: 8px;
    top: 0;
}
.ivy-scrollbar__bar.is-horizontal {
    height: 8px;
    left: 0;
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
