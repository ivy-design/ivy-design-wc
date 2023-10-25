<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useExpose from '@/hooks/useExpose'

defineOptions({
    name: 'Table',
    inheritAttrs: false
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
    console.log(_data_col_.value, t)
}

const _data_row_ = ref([])

const setData = (data: []) => {
    _data_row_.value = data
}

const { setExposes } = useExpose()
onMounted(() => {
    setExposes({
        setData
    })
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
</template>

<style lang="scss">
:host {
    display: block;
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
</style>
