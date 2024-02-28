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
        <ivy-input @change="handleChange"></ivy-input>
        <div><Close /></div>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}
.box {
    display: flex;
}
</style>
