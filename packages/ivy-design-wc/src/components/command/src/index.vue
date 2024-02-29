<script setup lang="ts">
import { ref, provide } from 'vue'
import { useHost } from '@/hooks/useHostElement'
import { inject } from 'vue'

defineOptions({
    name: 'Command'
})

const commandItems = ref<any[]>([])
const appendCommandItems = (item: any) => {
    commandItems.value.push(item)
}
const removeCommandItems = (item: any) => {
    const index = commandItems.value.indexOf(item)
    if (index > -1) {
        commandItems.value.splice(index, 1)
    }
}

provide('appendCommandItems', appendCommandItems)
provide('removeCommandItems', removeCommandItems)

const dest = ref<any>(null)
provide('dest', dest)

const handleSearch = (val: any) => {
    dest.value = val
        ? commandItems.value.filter((item: any) => {
              return item.toLowerCase().indexOf(val.toLowerCase()) !== -1
          })
        : null
}
provide('handleSearch', handleSearch)

const handleClose: any = inject('handleClose', null)

// const emit = defineEmits(['command'])

const { host } = useHost()
const handleClick = (item: any) => {
    const event = new CustomEvent('command', {
        detail: item
    })
    host.value?.dispatchEvent(event)
    if (handleClose) handleClose?.()
}

provide('handleClick', handleClick)
</script>

<template>
    <div class="command">
        <slot></slot>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-command-border-radius: var(--ivy-border-radius-medium, 8px);
    --ivy-command-border-color: var(--ivy-border-color, #d9d9d9);
    --ivy-command-background-color: var(--ivy-color-white, #fff);
    --ivy-command-text-color: var(--ivy-text-color-primary, #303133);
    --ivy-command-group-label-color: var(--ivy-text-color-secondary, #606266);
    --ivy-command-item-hover-background-color: var(--ivy-fill-color, #f5f7fa);
    --ivy-command-box-shadow: var(--ivy-box-shadow, 0 2px 12px 0 rgba(0, 0, 0, 0.1));
    --ivy-command-font-size: var(--ivy-font-size, 14px);
    display: block;
}
.command {
    border-radius: var(--ivy-command-border-radius);
    border: 1px solid var(--ivy-command-border-color);
    padding: 8px;
    box-shadow: var(--ivy-command-box-shadow);
    background-color: var(--ivy-command-background-color);
}
</style>
