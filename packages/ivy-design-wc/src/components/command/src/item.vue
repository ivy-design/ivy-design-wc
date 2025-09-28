<script setup lang="ts">
import { computed, onMounted, useHost } from 'vue'
import { inject, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

defineOptions({
    name: 'CommandItem'
})

interface Props {
    disabled: boolean
    icon: string
    label: string
    shortcutKeys: string
    hide: boolean
}
const props = withDefaults(defineProps<Props>(), {
    hide: false
})

const dest = inject('dest', ref<any>(null))

const isShow = computed(() => {
    if (dest.value === null) return true
    return dest.value.some((item: any) => item === props.label)
})

const appendCommandItems: any = inject('appendCommandItems')
appendCommandItems?.(props.label)

const appendGroupItems: any = inject('appendGroupItems', null)
if (appendGroupItems !== null) {
    appendGroupItems?.(props.label)
}

const handleClick: any = inject('handleClick', null)

const handleClickItem = () => {
    if (props.disabled) return
    handleClick?.(props.label)
}
const host = useHost()
onMounted(() => {
    useEventListener(host, 'click', handleClickItem)
})
</script>

<template>
    <div class="command-item" v-if="isShow">
        <div class="command-item-content">
            <slot name="icon" parts="icon"> </slot>

            <slot name="label" parts="label">{{ props.label }}</slot>
        </div>

        <span class="command-item-s-key" v-if="props.shortcutKeys">{{ $props.shortcutKeys }}</span>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}
.command-item {
    font-size: var(--ivy-command-font-size);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
    user-select: none;
    color: var(--ivy-command-text-color);
    background-color: var(--ivy-command-background-color);
    transition: background-color 0.3s;
    &:hover {
        background-color: var(--ivy-command-item-hover-background-color);
        .command-item-s-key {
            background-color: var(--ivy-command-background-color);
        }
    }
    &-content {
        flex: 1;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    &-s-key {
        background-color: var(--ivy-command-item-hover-background-color);
        font-size: 12px;
        display: inline-flex;
        height: 1.8em;
        line-height: 1em;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
        border-radius: 4px;
        transition: background-color 0.3s;
    }
}
</style>
