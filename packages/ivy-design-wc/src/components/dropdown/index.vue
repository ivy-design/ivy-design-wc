<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { useHostElement } from '@/hooks/useHostElement'

defineOptions({
    name: 'Dropdown'
})

const { el, getHostElement } = useHostElement()

const props = defineProps({
    disabled: Boolean,
    trigger: {
        type: String,
        default: 'click'
    }
})

const emit = defineEmits(['command'])

const visible = ref(false)

const handlerClick = () => {
    if (props.disabled) return
    if (!visible.value) {
        visible.value = true
    }
}

const handlerMenuItemClick = (e: Event) => {
    const target = e.target as HTMLElement
    const nodeName = target.nodeName.toLowerCase()
    if (nodeName !== 'ivy-dropdown-item') return
    const command = target.getAttribute('command')

    emit('command', command)

    visible.value = false
}

const handlerHideDrop = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const hostElement = getHostElement()

    const isContains = hostElement.contains(target)
    if (!isContains) {
        visible.value = false
    }
}

const handlerScroll = () => {
    visible.value = false
}

onMounted(() => {
    window.addEventListener('click', handlerHideDrop)
    window.addEventListener('scroll', handlerScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', handlerHideDrop)
    window.removeEventListener('scroll', handlerScroll)
})
</script>

<template>
    <div class="content" @click="handlerClick">
        <slot></slot>
    </div>
    <Transition>
        <div class="dropdown-wrap" ref="el" v-show="visible">
            <div class="dropdown-scroll" @click="handlerMenuItemClick">
                <slot name="dropdown"></slot>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss">
:host {
    --ivy-dropdown-font-size: var(--ivy-font-size, 14px);
    display: inline-block;
    position: relative;
}

.content {
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: default;
}

:host([disabled]) {
    cursor: not-allowed;
}
:host([disabled]) .content {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
}
.dropdown-wrap {
    position: absolute;
    max-width: 80vw;
    left: 0;
    top: calc(100% + 4px);
    z-index: 10;
    border-radius: 4px;
    overflow: hidden;
}

.dropdown-scroll {
    overflow: auto;
    overflow: overlay;
    background-color: #fff;
    max-height: 274px;
    box-shadow: var(
        --ivy-box-shadow,
        0px 12px 32px 4px rgba(0, 0, 0, 0.04),
        0px 8px 20px rgba(0, 0, 0, 0.08)
    );
    border-radius: 4px;
    border: 1px solid var(--ivy-border-color, #dcdfe6);
}

.select-option-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 2px;
}

.select-option-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 1);
    border-radius: 2px;
}
.select-option-scroll::-webkit-scrollbar-track {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 2px;
}
</style>
