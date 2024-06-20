<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    data: string
}>()

const colorList = computed(() => {
    try {
        if (!props.data) return []
        return props.data?.split(';')
    } catch (e) {
        return []
    }
})

const emit = defineEmits(['select'])

const handleClick = (color: string) => {
    emit('select', color)
}
</script>

<template>
    <div class="color-predefine">
        <div
            v-for="color in colorList"
            :key="color"
            class="color-preview color-preview-box"
            @click="handleClick(color)"
        >
            <div :style="{ width: '100%', height: '100%', backgroundColor: color }"></div>
        </div>
    </div>
</template>
