<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core'
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { useHost } from '@/hooks/useHostElement'

const { host } = useHost()

defineOptions({
    name: 'Affix',
    inheritAttrs: false
})

interface AffixProps {
    offset?: number
    position?: 'top' | 'bottom'
}

const props = withDefaults(defineProps<AffixProps>(), {
    offset: 0,
    position: 'top'
})

const emit = defineEmits<{
    scroll: [{ fixed: boolean; scrollTop: number }]
    change: [{ fixed: boolean }]
}>()

const targetRef = ref<HTMLElement>()
const getTargetStyle = () => {
    if (targetRef.value === null) return {}
    const styles = getComputedStyle(targetRef.value as HTMLElement)

    return {
        width: styles.getPropertyValue('width'),
        height: styles.getPropertyValue('height')
    }
}
const scrollTop = ref(0)
const fixed = ref(false)
const handlerScroll = useThrottleFn(() => {
    scrollTop.value = window.scrollY
    if (host.value === null) return

    const rect = host.value?.getBoundingClientRect()
    const y = rect?.y || 0

    const diff = y - props.offset
    const styles = getTargetStyle()
    if (diff < 0) {
        if (!fixed.value) {
            host.value?.style.setProperty('width', styles.width as string)
            host.value?.style.setProperty('height', styles.height as string)
            targetRef.value?.style.setProperty('width', styles.width as string)
            targetRef.value?.style.setProperty('height', styles.height as string)
            emit('change', { fixed: true })
            fixed.value = true
        }
    } else {
        if (fixed.value) {
            host.value?.style.setProperty('width', null)
            host.value?.style.setProperty('height', null)
            targetRef.value?.style.setProperty('width', null)
            targetRef.value?.style.setProperty('height', null)
            emit('change', { fixed: false })
            fixed.value = false
        }
    }
    emit('scroll', { fixed: fixed.value, scrollTop: scrollTop.value })
}, 100)

onMounted(() => {
    handlerScroll()
    window.addEventListener('scroll', handlerScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handlerScroll)
})
</script>

<template>
    <div
        ref="targetRef"
        :class="['ivy-affix', { fixed: fixed }]"
        :style="{ top: props.offset + 'px' }"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}
.ivy-affix {
    top: 0;
    z-index: 100;
    &.fixed {
        position: fixed;
    }
}
</style>
