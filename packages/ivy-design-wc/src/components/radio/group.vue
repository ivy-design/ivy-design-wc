<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHost } from '@/hooks/useHostElement'
import { getElementsByTagName } from '@/utils/dom'

defineOptions({
    name: 'RadioGroup',
    inheritAttrs: false
})

interface Props {
    value: string
    disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
    value: '',
    disabled: false
})

const emit = defineEmits(['beforeChange', 'change'])

const value = ref(props.value)
const { host } = useHost()

const getChildren = () => {
    return getElementsByTagName(host.value as HTMLElement, 'ivy-radio')
}

const setChecked = () => {
    const children = getChildren()
    children.forEach((child: any) => {
        if (props.disabled) {
            child.disabled = true
        }
        const label = child.label || child.getAttribute('label')
        child.checked = label === value.value
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
        ;(host.value as any).value = label
        emit('change', label)
    }
}
</script>

<template>
    <div @click="handlerClick" ref="el">
        <slot></slot>
    </div>
</template>

<style>
:host {
    display: block;
}
</style>
