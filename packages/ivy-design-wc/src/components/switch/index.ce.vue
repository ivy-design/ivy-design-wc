<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHostElement } from '@/use/useHostElement'

const { el, getHostElement } = useHostElement()
defineOptions({
    name: 'Switch'
})

const props = defineProps({
    checked: Boolean,
    disabled: Boolean
})

const emit = defineEmits(['change'])

const isCheck = ref(props.checked)

const changeHandler = (ev: any) => {
    const checked = ev.target.checked
    console.log('changeHandler', checked)
    isCheck.value = checked
    const host = getHostElement()
    if (checked) {
        host.setAttribute('checked', '')
    } else {
        host.removeAttribute('checked')
    }
    emit('change', isCheck.value)
}

onMounted(() => {
    isCheck.value = props.checked
})
</script>

<template>
    <label class="ivy-switch" for="ivy-switch" ref="el">
        <input
            id="ivy-switch"
            type="checkbox"
            :checked="isCheck"
            :disabled="props.disabled"
            hidden
            @change="changeHandler"
        />
    </label>
</template>

<style lang="scss">
:host {
    --ivy-switch-on-color: var(--ivy-color-primary, #409eff);
    --ivy-switch-off-color: var(--ivy-border-color, #dcdfe6);
    display: inline-flex;
}
.ivy-switch {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    background: var(--ivy-switch-off-color);
    border-radius: 10px;
    transition: border-color 0.3s, background-color 0.3s;
    cursor: pointer;
}
.ivy-switch::after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.3s ease;
    position: absolute;
    top: 2px;
    left: 2px;
}
:host([checked]) .ivy-switch {
    background: var(--ivy-switch-on-color);
}
:host([checked]) .ivy-switch::after {
    left: calc(100% - 18px);
}
:host([disabled]) {
    opacity: 0.6;
}
:host([disabled]) .ivy-switch {
    cursor: not-allowed;
}
</style>
