<script setup lang="ts">
import { type PropType, computed, type StyleValue } from 'vue'

defineOptions({
    name: 'Avatar',
    inheritAttrs: false
})

const props = defineProps({
    src: String,
    srcset: String,
    alt: String,
    content: String,
    fit: {
        type: String,
        default: 'cover'
    },
    shape: {
        type: String as PropType<'circle' | 'square'>,
        default: 'circle',
        validator: (val: string) => ['circle', 'square'].includes(val)
    }
})

const isImage = computed(() => {
    return props.src || props.srcset
})
</script>

<template>
    <div class="avatar">
        <img
            v-if="isImage"
            class="avatar-img"
            :src="props.src"
            :srcset="$props.srcset"
            :alt="props.alt"
            :style="{ 'object-fit': props.fit } as StyleValue"
        />
        <div v-else class="avatar-content">
            <slot>{{ props.content }}</slot>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-avatar-background-color: var(--ivy-text-color-disabled);
    --ivy-avatar-size: 40px;
    --ivy-avatar-color: var(--ivy-color-white);
    --ivy-avatar-font-size: var(--ivy-font-size);
    display: inline-flex;
    overflow: hidden;

    border-radius: 50%;
}

:host([shape='square']) {
    border-radius: var(--ivy-border-radius);
}

.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: var(--ivy-avatar-background-color);
    width: var(--ivy-avatar-size);
    height: var(--ivy-avatar-size);
    color: var(--ivy-avatar-color);
    font-size: var(--ivy-avatar-font-size);
    &-img {
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
    &-content {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding: 4px;
        max-width: 100%;
        max-height: 100%;
        font-size: var(--ivy-avatar-font-size);
    }
}
</style>
