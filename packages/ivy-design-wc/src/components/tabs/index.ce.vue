<script setup lang="ts">
import { onMounted, onUpdated, ref, nextTick } from 'vue'

defineOptions({
    name: 'Tabs',
    inheritAttrs: false
})

const props = defineProps({
    active: String
})

const btnLeft = ref<HTMLElement>()
const btnRight = ref<HTMLElement>()
const tabHeaderWrap = ref<HTMLElement>()
const tableInnerEl = ref<HTMLElement>()

const scrollLeft = () => {
    const left = getComputedStyle(tableInnerEl.value as HTMLElement)['left']
    const leftN = parseFloat(left)

    if (leftN < -60) {
        ;(tableInnerEl.value as any).style.left = `${leftN + 60}px`
    } else {
        ;(tableInnerEl.value as any).style.left = 0
    }
}
const scrollRight = () => {
    const innerStyle = getComputedStyle(tableInnerEl.value as HTMLElement)
    const left = innerStyle['left']
    const width = innerStyle['width']
    const leftN = parseFloat(left)
    const widthN = parseFloat(width)
    const wrapWidth = parseFloat(getComputedStyle(tabHeaderWrap.value as HTMLElement)['width'])

    if (wrapWidth - leftN < widthN - 60) {
        ;(tableInnerEl.value as any).style.left = `${leftN - 60}px`
    } else {
        ;(tableInnerEl.value as any).style.left = `-${widthN - wrapWidth}px`
    }
}

const emit = defineEmits(['tab-click'])

const w = ref(0)
const x = ref(0)
const headerItemClick = (ev: any) => {
    const target = ev.target
    const index = target.getAttribute('data-index')

    children.value.forEach((el) => {
        if (el.getAttribute('index') === index) {
            ;(el as any).show = true
            const rect = target.getBoundingClientRect()

            w.value = rect.width
            x.value = (target as any).offsetLeft
        } else {
            ;(el as any).show = false
        }
    })
    emit('tab-click', index)
}

const slotEl = ref<HTMLSlotElement>()
const children = ref<any[]>([])

onMounted(() => {
    const list = (slotEl.value as HTMLSlotElement)
        .assignedElements()
        .filter((c) => c.nodeName === 'IVY-TAB-PANE')
    // console.log(list, 'list')
    children.value = list.map((el: any, index) => {
        const elIndex = el.getAttribute('index')

        if (!elIndex) {
            el.index = index.toString()
        }
        if (props.active === el.getAttribute('index') || (!props.active && index === 0)) {
            ;(el as any).show = true
            const rect = el.getBoundingClientRect()

            w.value = rect.width
            x.value = (el as any).offsetLeft
        } else {
            ;(el as any).show = false
        }

        return el
    })
})
onUpdated(() => {
    // nextTick(() => {
    //     const children = (tableInnerEl.value as HTMLElement).children
    //     for (let index = 0; index < children.length; index++) {
    //         const el = children[index]
    //         if (props.active === el.getAttribute('data-index')) {
    //             const rect = el.getBoundingClientRect()
    //             w.value = rect.width
    //             x.value = (el as any).offsetLeft
    //         }
    //     }
    //     const tableWrapInnerWidth = getComputedStyle(tableInnerEl.value as HTMLElement)['width']
    //     const tableWrapWidth = getComputedStyle(tabHeaderWrap.value as HTMLElement)['width']
    //     if (parseFloat(tableWrapWidth) < parseFloat(tableWrapInnerWidth)) {
    //         ;(tabHeaderWrap.value as HTMLElement).style.flex = '0 0 calc(100% - 60px)'
    //         ;(btnLeft.value as any).style.display = 'inline-block'
    //         ;(btnRight.value as any).style.display = 'inline-block'
    //     }
    // })
})
</script>

<template>
    <div class="ivy-tab-header">
        <div
            class="ivy-tab-header-arrow ivy-tab-header-arrow-left"
            ref="btnLeft"
            @click="scrollLeft"
        ></div>
        <div class="ivy-tab-wrap" ref="tabHeaderWrap">
            <div class="ivy-tab-wrap-inner" ref="tableInnerEl">
                <div
                    v-for="item in children"
                    :key="item.index"
                    class="ivy-tab-wrap-item"
                    :data-index="item.index"
                    @click="headerItemClick"
                >
                    {{ item.label }}
                </div>
                <div class="ivy-tab-wrap-line" :style="{ width: `${w}px`, left: `${x}px` }"></div>
            </div>
        </div>
        <div
            class="ivy-tab-header-arrow ivy-tab-header-arrow-right"
            ref="btnRight"
            @click="scrollRight"
        ></div>
    </div>
    <div>
        <slot ref="slotEl"></slot>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}

.ivy-tab-header {
    margin-bottom: 15px;
    display: flex;
    position: relative;
    overflow: hidden;
}
.ivy-tab-header::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--ivy-border-color, #dcdfe6);
    z-index: -1;
}
.ivy-tab-header-arrow {
    flex: 0 0 30px;
    width: 30px;
    cursor: pointer;
    display: none;
    position: relative;
}
.ivy-tab-header-arrow::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border: 1px solid transparent;
    position: absolute;
    top: 18px;
    right: 8px;
    transform: rotateZ(-45deg);
    pointer-events: none;
}
.ivy-tab-header-arrow-right::before {
    border-right-color: #303133;
    border-bottom-color: #303133;
}
.ivy-tab-header-arrow-left::before {
    border-top-color: #303133;
    border-left-color: #303133;
    left: 8px;
}
.ivy-tab-header-arrow:hover .ivy-tab-header-arrow-right::before {
    border-right-color: var(--ivy-color-primary, #409eff);
    border-bottom-color: var(--ivy-color-primary, #409eff);
}
.ivy-tab-header-arrow:hover .ivy-tab-header-arrow-left::before {
    border-top-color: var(--ivy-color-primary, #409eff);
    border-left-color: var(--ivy-color-primary, #409eff);
}
.ivy-tab-wrap {
    flex: 0 0 100%;
    overflow: hidden;
    display: inline-flex;
    position: relative;
}
.ivy-tab-wrap-inner {
    display: flex;
    transition: left 0.3s;
    left: 0;
    position: relative;
}
.ivy-tab-wrap-item {
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    cursor: pointer;
    word-break: keep-all;
}
.ivy-tab-wrap-item-first {
    padding-left: 0;
}
.ivy-tab-wrap-item-last {
    padding-right: 0;
}
.ivy-tab-wrap-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: var(--ivy-color-primary, #409eff);
    transition: left 0.3s, width 0.3s;
}
</style>
