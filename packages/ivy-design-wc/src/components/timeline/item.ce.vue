<script setup lang="ts">
import { toRef } from 'vue'
defineOptions({
    name: 'TimelineItem'
})
const props = defineProps({
    timestamp: String,
    hideTimestamp: Boolean
})

const timestamp = toRef(props, 'timestamp')
</script>

<template>
    <div class="ivy-timeline-dot"></div>
    <div class="ivy-timeline-line"></div>
    <div class="ivy-timeline-ctx">
        <div class="ivy-timeline-timestamp" v-if="!props.hideTimestamp">{{ timestamp }}</div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
:host {
    display: block;
    position: relative;
    padding: 4px 0 20px 28px;
}
:host(:last-child) .ivy-timeline-line {
    display: none;
}
:host([reverse]:first-child) .ivy-timeline-line {
    display: none;
}
:host([reverse]:last-child) .ivy-timeline-line {
    display: block;
}
:host([hide-timestamp]) .ivy-timeline-timestamp {
    display: none;
}
:host([type='primary']) .ivy-timeline-dot {
    background-color: var(--ivy-timeline-type-primary);
}
:host([type='success']) .ivy-timeline-dot {
    background-color: var(--ivy-timeline-type-success);
}
:host([type='warning']) .ivy-timeline-dot {
    background-color: var(--ivy-timeline-type-warning);
}
:host([type='danger']) .ivy-timeline-dot {
    background-color: var(--ivy-timeline-type-danger);
}
.ivy-timeline-dot {
    position: absolute;
    left: -1px;
    width: 12px;
    height: 12px;
    background-color: #e4e7ed;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.ivy-timeline-line {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
}
.ivy-timeline-timestamp {
    line-height: 1em;
    margin-bottom: 6px;
    color: #666;
    font-size: var(--ivy-timeline-font-size, 12px);
}
</style>
