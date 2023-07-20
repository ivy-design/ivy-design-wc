<script setup lang="ts">
defineOptions({
  name: "Card",
})

const props = defineProps({
  header: String
})
</script>

<template>
  <div class="ivy-card-header">
    <slot name="header">{{ props.header }}</slot>
  </div>
  <div class="ivy-card-body">
    <slot></slot>
  </div>
</template>

<style lang="scss">
:host {
  display: inline-block;
  border: 1px solid var(--ivy-border-color, #dcdfe6);
  border-radius: var(--ivy-border-radius, 8px);
  font-size: var(--ivy-font-size, 14px);
  transition: box-shadow 0.18s;
}
:host([shadow="always"]) {
  box-shadow: var(--ivy-box-shadow, 0 1px 6px rgba(0, 0, 0, 0.2));
}

:host([shadow="hover"]:hover) {
  box-shadow: var(--ivy-box-shadow, 0 1px 6px rgba(0, 0, 0, 0.2));
}

.ivy-card-header {
  border-bottom: 1px solid var(--ivy-border-color, #dcdfe6);
  padding: 12px 16px;
}
.ivy-card-body {
  padding: 16px;
}
</style>