<script setup lang="ts">
import { CloseIcon as Close } from '@/utils/icons'
import { useHost } from '@/hooks/useHostElement'

defineOptions({
    name: 'CommandSearch'
})
const { host } = useHost()
const handleChange = (e: CustomEvent) => {
    const val = e.detail[0]
    console.log(val)
    const parent = host.value?.parentNode as HTMLElement
    const items = parent.querySelectorAll('ivy-command-item')
    console.log(parent, items)
    items.forEach((item: any) => {
        const label = item.getAttribute('label')

        if (label.toLowerCase().indexOf(val.toLowerCase()) === -1) {
            item.hide = true
        } else {
            item.hide = false
        }
    })
}
</script>

<template>
    <div class="box">
        <div style="flex: auto">
            <ivy-input @change="handleChange"></ivy-input>
        </div>
        <div class="close"><Close /></div>
    </div>
    <div class="separator"></div>
</template>

<style lang="scss">
:host {
    display: block;
}
.box {
    display: flex;
    padding: 6px 16px 12px;
}
.close {
    flex: 0 0 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.separator {
    height: 1px;
    background-color: var(--ivy-command-border-color);
}
</style>
