<template>
    <div @click="handlerClick" ref="el">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHostElement } from '@/use/useHostElement'
import { getElementsByTagName } from '@/utils/dom'

defineOptions({
    name: 'RadioGroup'
})

const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    disabled: Boolean
})

const emit = defineEmits(['beforeChange', 'change'])

const value = ref(props.value)
const { el, getHostElement } = useHostElement()

const getChildren = () => {
    const host = getHostElement()
    return getElementsByTagName(host as HTMLElement, 'ivy-radio')
}

const setChecked = () => {
    const children = getChildren()
    children.forEach((child: any) => {
        if (props.disabled) {
            child.disabled = true
        }
        child.checked = child.label === value.value
    })
}

onMounted(() => {
    setChecked()
})

const handlerClick = (ev: Event) => {
    if (props.disabled) return
    const target = ev.target as any
    const nodeName = target.nodeName.toLowerCase()
    if (nodeName === 'ivy-radio') {
        const disabled = target.disabled
        if (disabled !== undefined) return
        const label = target.label
        emit('beforeChange', label)
        value.value = label
        setChecked()
        ;(getHostElement() as any).value = label
        emit('change', label)
    }
}
</script>

<style>
:host {
    display: block;
}
</style>
