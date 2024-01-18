<script setup lang="ts">
import { computed, onMounted } from 'vue'
import useHostElement from '../..//hooks/useHostElement'

defineOptions({
    name: 'Description',
    inheritAttrs: false
})

const props = defineProps({
    label: String,
    labelWidth: String,
    span: {
        type: String,
        default: '1'
    },
    gutter: {
        type: String,
        default: '32'
    },
    cols: {
        type: String,
        default: '3'
    },
    header: String,
    border: Boolean
})

const conf = computed(() => {
    return {
        cols: parseInt(props.cols) || 3,
        border: !!props.border,
        gutter: parseInt(props.gutter) || 32,
        span: parseInt(props.span) || 1
    }
})

const { el, getHostElement } = useHostElement()

const init = () => {
    const host = getHostElement() as Element
    const list = [...(host.children || [])].filter((c: Element) => {
        return c.tagName.toLowerCase() === 'ivy-description-item'
    })

    const len = list.length
    for (let index = 0; index < len; index++) {
        const element: any = list[index]
        const curLabelWidth = element.getAttribute('label-width')
        const elementSpan = Number(element.getAttribute('span') || '1')

        element.style.width =
            elementSpan >= conf.value.cols ? '100%' : `${(elementSpan / conf.value.cols) * 100}%`
        const gutter = `${conf.value.gutter / 2}px`
        element.setAttribute('gutter', gutter)
        if ([undefined, null, ''].includes(curLabelWidth) && props.labelWidth) {
            element.setAttribute('label-width', props.labelWidth)
        }
        const curIndex = index + 1
        if (curIndex % conf.value.cols === 0 || len === curIndex) {
            element.style.borderRight = 'none'
        }
        const tmp = len / conf.value.cols
        if (tmp * conf.value.cols <= curIndex) {
            element.style.borderBottom = 'none'
        }

        if (conf.value.border) {
            element.setAttribute('border', '')
        }
    }
}

onMounted(() => {
    init()
})
</script>

<template>
    <div
        class="header"
        :style="{
            padding: `12px ${conf.gutter / 2}px`,
            display: props.header ? 'inherit' : 'none'
        }"
    >
        <slot name="header">{{ props.header }}</slot>
    </div>
    <div class="wrap" ref="el">
        <slot></slot>
    </div>
</template>

<style>
:host {
    display: block;
    border-radius: var(--ivy-border-radius, 4px);
    --ivy-description-label-bg-color: #f5f7fa;
    font-size: var(--ivy-font-size, 14px);
}
:host(:not(:defined)) {
    display: none;
}
.header {
    font-size: 16px;
    padding: 12px 0;
}

.wrap {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
}
:host([border]) {
    border: 1px solid var(--ivy-border-color, #dcdfe6);
}
:host([border]) .header {
    border-bottom: 1px solid var(--ivy-border-color, #dcdfe6);
}
</style>
