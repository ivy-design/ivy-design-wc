<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { ArrowRight, ArrowLeft } from '@/utils/icons'

defineOptions({
    name: 'Tabs',
    inheritAttrs: false
})

const props = defineProps({
    active: String
})

const current = ref('0')
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

const setTabBodyShow = (index: string) => {
    const list = getChildren()
    list.forEach((el) => {
        if (el.getAttribute('index') === index) {
            ;(el as any).setAttribute('show', 'true')
        } else {
            ;(el as any).removeAttribute('show')
        }
    })
}

const w = ref('0px')
const x = ref('0px')
const headerItemClick = (ev: any) => {
    const target = ev.target
    const index = target.dataset.index
    const disabled = target.classList.contains('is-disabled')
    if (disabled) return
    current.value = index
    setTabBodyShow(index)

    setActive()

    emit('tab-click', index)
}

const slotEl = ref<HTMLSlotElement>()
const headerList = ref<any[]>([])

/**获取 tab-pane 元素集合 */
const getChildren = () => {
    if (!slotEl.value) return []
    return (slotEl.value as HTMLSlotElement)
        .assignedElements()
        .filter((c) => c.nodeName === 'IVY-TAB-PANE')
}

const showBtn = ref(false)
const showOperateBtn = () => {
    nextTick(() => {
        const { width: wrapWidth = 0 } = (
            tabHeaderWrap.value as HTMLElement
        ).getBoundingClientRect()
        const { width = 0 } = (tableInnerEl.value as HTMLElement).getBoundingClientRect()

        showBtn.value = wrapWidth < width
    })
}

/**设置活动的 header */
const setActive = () => {
    nextTick(() => {
        const itemList = tableInnerEl.value?.querySelectorAll('.ivy-tab-wrap-item')
        itemList?.forEach((el: any) => {
            if (el.dataset.index === current.value) {
                const rect = getComputedStyle(el)
                w.value = rect.getPropertyValue('width')
                x.value = el.offsetLeft
            }
        })
    })
}

/**暴露在自定义元素上的方法 */
const jumpTo = (val: string) => {
    current.value = val
    setTabBodyShow(current.value)
    setActive()
}

defineExpose({
    setActive: jumpTo
})

onMounted(() => {
    current.value = props.active || '0'
    const list = getChildren()
    // console.log(list, 'list')
    headerList.value = list.map((el: any, index) => {
        const elIndex = el.getAttribute('index')

        if (!elIndex) {
            el.index = index.toString()
        }
        if (props.active === el.getAttribute('index') || (!props.active && index === 0)) {
            ;(el as any).setAttribute('show', null)
        } else {
            ;(el as any).removeAttribute('show')
        }

        return {
            label: el.getAttribute('label'),
            index: el.getAttribute('index') || index.toString(),
            disabled: el.getAttribute('disabled') !== null
        }
    })
    showOperateBtn()
    setActive()
})
</script>

<template>
    <div class="ivy-tab-header">
        <div
            v-show="showBtn"
            class="ivy-tab-header-arrow ivy-tab-header-arrow-left"
            ref="btnLeft"
            @click="scrollLeft"
        >
            <ArrowLeft />
        </div>
        <div class="ivy-tab-wrap" ref="tabHeaderWrap">
            <div class="ivy-tab-wrap-inner" ref="tableInnerEl">
                <div
                    v-for="item in headerList"
                    :key="item.index"
                    :class="['ivy-tab-wrap-item', { 'is-disabled': item.disabled }]"
                    :data-index="item.index"
                    @click="headerItemClick"
                >
                    {{ item.label }}
                </div>

                <div class="ivy-tab-wrap-line" :style="{ width: `${w}`, left: `${x}px` }"></div>
            </div>
        </div>
        <div
            v-show="showBtn"
            class="ivy-tab-header-arrow ivy-tab-header-arrow-right"
            ref="btnRight"
            @click="scrollRight"
        >
            <ArrowRight />
        </div>
    </div>
    <div>
        <slot ref="slotEl"></slot>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-tabs-active-color: var(--ivy-color-primary, #409eff);
    --ivy-tabs-header-color: var(--ivy-text-color-primary, #303133);
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
    position: relative;
    color: var(--ivy-tabs-header-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.ivy-tab-header-arrow:hover .ivy-tab-header-arrow-right::before {
    border-right-color: var(--ivy-tabs-active-color);
    border-bottom-color: var(--ivy-tabs-active-color);
}
.ivy-tab-header-arrow:hover .ivy-tab-header-arrow-left::before {
    border-top-color: var(--ivy-tabs-active-color);
    border-left-color: var(--ivy-tabs-active-color);
}
.ivy-tab-wrap {
    flex: auto;
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
    &.is-disabled {
        cursor: not-allowed;
        color: #c0c4cc;
    }
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
    transition:
        left 0.3s,
        width 0.3s;
}
</style>
