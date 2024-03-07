<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { CloseIcon as Close } from '@/utils/icons'

defineOptions({
    name: 'CommandSearch'
})

const handleSearch: any = inject('handleSearch')

const handleChange = (e: CustomEvent) => {
    const val = e.detail[0]
    handleSearch?.(val)
}

const handleClose = inject('handleClose', null)

const visible = inject('visible', ref(false))

const el = ref()
watch(visible, (val, oldVal) => {
    console.log('visible', val, oldVal)
    if (oldVal !== val && !val && oldVal) {
        console.log(1)
        el.value.value = null
    }
})
</script>

<template>
    <div class="box">
        <div style="flex: auto">
            <ivy-input ref="el" @change="handleChange"></ivy-input>
        </div>
        <div class="close" v-if="handleClose" @click="handleClose"><Close /></div>
    </div>
    <div class="separator"></div>
</template>

<style lang="scss">
:host {
    display: block;
}
.box {
    display: flex;
    padding: 6px 12px 12px;
}
.close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    &:hover {
        color: var(--ivy-color-primary);
    }
}

.separator {
    height: 1px;
    background-color: var(--ivy-command-border-color);
}
</style>
