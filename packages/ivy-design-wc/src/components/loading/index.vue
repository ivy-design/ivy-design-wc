<script lang="ts" setup>
import { computed } from 'vue'
import { Loading } from '@/utils/icons'

defineOptions({
    name: 'Loading',
    inheritAttrs: false
})

interface Props {
    text: string
    loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
    loading: false
})

const isLoad = computed(() => {
    return props.loading
})
</script>

<template>
    <div class="loading" v-show="isLoad">
        <div class="icon">
            <slot name="icon">
                <Loading class="icon-loading" />
            </slot>
        </div>
        <div class="text" v-if="props.text">{{ props.text }}</div>
    </div>
    <div class="content">
        <slot></slot>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-loading-mask-color: var(--ivy-mask-color);
    --ivy-loading-text-color: var(--ivy-text-color-regular, #606266);
    --ivy-loading-text-margin-top: 12px;
    --ivy-loading-text-font-size: 13px;
    position: relative;
    display: block;
}
.loading {
    background-color: var(--ivy-loading-mask-color);
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.icon {
    line-height: 1em;
    font-size: 24px;
    animation: spin 1s linear infinite;
    transform-origin: center center;
}
.icon-loading {
    display: block;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}
.text {
    margin-top: var(--ivy-loading-text-margin-top);
    color: var(--ivy-loading-text-color);
    font-size: var(--ivy-loading-text-font-size);
}
</style>
