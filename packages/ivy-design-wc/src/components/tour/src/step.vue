<script setup lang="ts">
defineOptions({
    name: 'TourStep',
    inheritAttrs: false
})

interface Props {
    target: HTMLElement | string
    title: string
    allowHtmlString: boolean
    content: string
    placement: 'top' | 'left' | 'right' | 'bottom'
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    content: '',
    placement: 'top'
})
</script>

<template>
    <div>
        <div>{{ props.title }}</div>
    </div>
</template>
