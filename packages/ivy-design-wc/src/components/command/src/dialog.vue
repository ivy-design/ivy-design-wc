<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useExpose } from '@/hooks/useExpose'

defineOptions({
    name: 'CommandDialog',
    inheritAttrs: false
})

const visible = ref(false)
provide('visible', visible)

const handleOpen = () => {
    visible.value = true
}
const { setExpose } = useExpose()

onMounted(() => {
    setExpose('open', handleOpen)
})

const handleClose = () => {
    visible.value = false
}
provide('handleClose', handleClose)
</script>

<template>
    <div class="mask" v-show="visible"></div>
    <transition>
        <div v-show="visible" class="content">
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-command-dialog-mask-background: rgba(0, 0, 0, 0.5);
    display: block;
}
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--ivy-command-dialog-mask-background);
    z-index: 1000;
}
:host([hide-mask]) .mask {
    display: none;
}
.content {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1001;
    & ::slotted(ivy-command) {
        width: 580px;
    }
}
</style>
