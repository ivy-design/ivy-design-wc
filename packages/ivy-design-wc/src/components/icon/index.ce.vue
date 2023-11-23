<script setup lang="ts">
import { computed } from 'vue'
import svg from '@/assets/fonts/iconfont.svg'

defineOptions({
    name: 'Icon',
    inheritAttrs: false
})

const props = defineProps({
    name: String,
    color: String,
    size: String
})

const styles = computed(() => {
    let style = {
        color: 'inherit',
        fontSize: 'inherit'
    }
    if (props.color) style.color = props.color
    if (props.size) style.fontSize = props.size
    return style
})
</script>

<template>
    <svg class="ivy-icon" :style="styles">
        <use :href="`${svg}#ivy-icon-${props.name}`"></use>
    </svg>
</template>

<style>
:host {
    display: inline-flex;
    font-size: inherit;
}
.ivy-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    stroke: currentColor;
    overflow: hidden;
}

:host([spin]) .ivy-icon {
    animation: spin 1.8s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
