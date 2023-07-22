<script setup lang="ts">
defineOptions({
    name: 'Progress',
    inheritAttrs: false
})

const props = defineProps({
    value: {
        type: Number,
        default: 0
    },
    showText: {
        type: Boolean,
        default: false
    },
    formatter: {
        type: String,
        default: '{value}%'
    }
})
</script>

<template>
    <div class="bar">
        <div
            class="inner"
            :style="{
                width: `${props.value}%`
            }"
        ></div>
    </div>
    <span v-if="$props.showText" class="text">
        <slot>{{ props.formatter.replace('{value}', props.value.toString()) }}</slot>
    </span>
</template>

<style>
:host {
    --ivy-progress-track-color: #ebeef5;
    --ivy-progress-stroke-width: 8px;
    --ivy-progress-color: var(--ivy-primary-color, #409eff);
    --ivy-progress-text-size: 12px;
    --ivy-progress-text-color: var(--ivy-text-color-primary, #303133);
    display: flex;
    align-items: center;
}
.bar {
    background-color: var(--ivy-progress-track-color);
    height: var(--ivy-progress-stroke-width);
    border-radius: calc(var(--ivy-progress-stroke-width, 6px) / 2);
    overflow: hidden;
    flex: auto;
}
.inner {
    background-color: var(--ivy-progress-color);
    height: 100%;
    width: 0%;
    border-radius: calc(var(--ivy-progress-stroke-width, 6px) / 2);
    transition: width 0.3s;
}

.text {
    font-size: var(--ivy-progress-text-size);
    color: var(--ivy-progress-text-color);
    flex: none;
    margin-left: 6px;
}
</style>
