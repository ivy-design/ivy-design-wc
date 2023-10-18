<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useHostElement from '@/hooks/useHostElement'
import { getElementsByTagName } from '@/utils/dom'

defineOptions({
    name: 'CheckboxGroup'
})

const props = defineProps({
    disabled: Boolean
})

const val = ref<any[]>([])

const { el, getHostElement } = useHostElement()

const getChildren = () => {
    const host = getHostElement()
    const children = getElementsByTagName(host as HTMLElement, 'ivy-checkbox')
    return children
}

onMounted(() => {
    const children = getChildren()
    children.forEach((child: any) => {
        child.__GROUP__ = true
        if (props.disabled) {
            child.disabled = true
        }
        if (child.checked !== undefined) {
            val.value.push(child.label)
        }
    })
})

const handlerClick = (ev: MouseEvent) => {
    if (props.disabled) return

    const target = ev.target as any
    const tagName = target.tagName.toLowerCase()
    if (tagName === 'ivy-checkbox') {
        const label = target.label

        const has = val.value.includes(label)

        if (has) {
            val.value = val.value.filter((item: any) => item !== label)
            target.checked = false
        } else {
            val.value.push(label)
            target.checked = true
        }
        const host = getHostElement() as any
        host.setAttribute('value', val.value.join(','))
        host.value = val.value
    }
}
</script>

<template>
    <div :disabled="props.disabled" ref="el" @click="handlerClick">
        <slot></slot>
    </div>
</template>

<style>
:host {
    display: block;
}
</style>
