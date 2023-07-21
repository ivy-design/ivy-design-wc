<script setup lang="ts">
import { ref, onMounted } from 'vue'
defineOptions({
    name: 'Timeline'
})
const props = defineProps({
    reverse: Boolean
})

const el = ref()

onMounted(() => {
    if (props.reverse) {
        el.value.assignedElements().forEach((item: Element) => {
            item.setAttribute('reverse', '')
        })
    }
})
</script>

<template>
    <slot ref="el"></slot>
</template>

<style lang="scss">
:host {
    /* primary*/
    --ivy-timeline-type-primary: var(--ivy-color-primary, #409eff);
    /* success*/
    --ivy-timeline-type-success: var(--ivy-color-success, #67c23a);
    /* warning*/
    --ivy-timeline-type-warning: var(--ivy-color-warning, #e6a23c);
    /* danger*/
    --ivy-timeline-type-danger: var(--ivy-color-danger, #f56c6c);
    /* info*/
    --ivy-timeline-type-info: var(--ivy-color-info, #909399);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
:host([reverse]) {
    flex-direction: column-reverse;
}
</style>
