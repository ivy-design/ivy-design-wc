<script setup lang="ts">
import { toRef, provide } from "vue";

defineOptions({
  name: "Breadcrumb"
})

const props = defineProps({
  separator: {
    type: String,
    default: "/"
  }
})

provide('separator', toRef(props, "separator"))
</script>

<template>
  <slot></slot>
</template>

<style lang="scss">
:host {
  --ivy-breadcrumb-color: var(--ivy-text-color-primary, #303133);
  --ivy-breadcrumb-hover-color: var(--ivy-color-primary, #409eff);
  --ivy-breadcrumb-separator-color: var(--ivy-text-color-regular, #606266);
  display: flex;
  align-items: center;
}
</style>