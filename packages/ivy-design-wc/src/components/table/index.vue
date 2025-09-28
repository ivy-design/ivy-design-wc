<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Loading } from '@/utils/icons'

defineOptions({
    name: 'Table',
    inheritAttrs: false
})

const props = defineProps({
    loading: Boolean,
    loadingText: String
})

const root = ref<HTMLDivElement>()
const rootRect = ref<DOMRect>()
const getRootWidth = () => {
    rootRect.value = root.value?.getBoundingClientRect()
}

const _data_col_ = ref<Array<Record<string, any>>>([])
const slot = ref<HTMLSlotElement | null>(null)

const calcColWidth = (arr: Array<Record<string, any>>) => {
    const { width } = rootRect.value as DOMRect

    let positionWidth = 0
    let relativeWidth = 0

    arr.forEach((el) => {
        if (el.width) {
            positionWidth += parseFloat(el.width)
            return
        }

        if (el.minWidth) {
            relativeWidth += parseFloat(el.minWidth)
            return
        }
    })
    const diffWidth = width - positionWidth - relativeWidth
    // console.log(realWidth, width)
    const diff = width - positionWidth

    return arr.map((col) => {
        let width = 0
        if (col.width) {
            width = parseFloat(col.width || '0')
        } else {
            const tmpWidth = parseFloat(col.minWidth)
            if (diffWidth <= 0) {
                width = tmpWidth
            } else {
                width = (diff / relativeWidth) * tmpWidth
            }
        }

        col.width = width + 'px'
        return col
    })
}

const initCol = () => {
    const children = slot.value
        ?.assignedElements()
        .filter((el) => el.tagName === 'IVY-TABLE-COLUMN')

    const tmp = children?.map((el: any) => {
        const { label, prop, width } = el
        const minWidth = el.getAttribute('min-width')
        return {
            label,
            prop,
            width,
            minWidth: minWidth || '80'
        }
    })
    const t = calcColWidth(tmp as Array<Record<string, any>>)

    _data_col_.value = [...t]
}

const _data_row_ = ref([])

const setData = (data: []) => {
    _data_row_.value = data
}

defineExpose({
    setData
})
onMounted(() => {
    getRootWidth()
    initCol()
})
</script>

<template>
    <div class="table" ref="root">
        <slot ref="slot" hidden></slot>
        <div class="head">
            <table cellspacing="0" cellpadding="0" border="0">
                <colgroup>
                    <col v-for="(col, colIndex) in _data_col_" :key="colIndex" :width="col.width" />
                </colgroup>
                <tr>
                    <td v-for="(col, colIndex) in _data_col_" :key="colIndex">
                        <div class="table-cell">{{ col.label }}</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="body">
            <table cellspacing="0" cellpadding="0" border="0">
                <colgroup>
                    <col v-for="(col, colIndex) in _data_col_" :key="colIndex" :width="col.width" />
                </colgroup>
                <tr v-for="(row, rowIndex) in _data_row_" :key="rowIndex">
                    <td v-for="(col, colIndex) in _data_col_" :key="colIndex">
                        <div class="table-cell">{{ row[col.prop] }}</div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <transition name="fade">
        <div class="loading" v-show="props.loading">
            <div class="loading-inner">
                <slot name="loading">
                    <Loading class="loading-icon" />
                    <p v-if="props.loadingText">{{ props.loadingText }}</p>
                </slot>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    display: block;
    position: relative;
}
.table {
    font-size: var(--ivy-font-size);
    box-sizing: border-box;
    table {
        table-layout: fixed;
    }
    &-cell {
        padding: 4px 8px;
        box-sizing: border-box;
    }
}

.loading {
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ivy-mask-color);
    &-inner {
        text-align: center;
        color: var(--ivy-text-color-regular);
    }
    &-icon {
        line-height: 1em;
        font-size: 24px;
        animation: spin 1s linear infinite;
        transform-origin: center center;
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
