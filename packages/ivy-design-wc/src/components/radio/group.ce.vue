<template>
    <div @click="handlerClick" ref="el">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHostElement } from '@/use/useHostElement'

defineOptions({
    name: 'radioGroup'
})

const props = defineProps({
    value: {
        type: String,
        default: ''
    }
})

const value = ref(props.value)
const { el, getHostElement } = useHostElement()
const children = ref<any[]>([])

onMounted(() => {
    const host = getHostElement()
    children.value = (host.children as unknown as any[]).filter(
        (c) => c.nodeName.toLowerCase() === 'ivy-radio'
    )
})

const handlerClick = (ev: Event) => {
    console.log('radioGroup click', ev)
    const target = ev.target as any
    const nodeName = target.nodeName.toLowerCase()
    if (nodeName === 'ivy-radio') {
        const label = target.label
        value.value = label
    }
}
</script>

<style>
:host {
    display: block;
}
</style>
