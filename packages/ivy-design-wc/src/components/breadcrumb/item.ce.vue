<script setup lang="ts">
import {computed, inject, ref, type Ref } from "vue";

defineOptions({
  name: "BreadcrumbItem"
})

const props = defineProps({
  blank: Boolean,
  href: String,
  separator: String
})

const parentSeparator: Ref<string> = inject('separator', ref("/"))
const separator = computed(() => {
  return props.separator ? props.separator : parentSeparator.value
})



const routeJump = () => {
  if (props.blank) {
    window.open(props.href);
  } else {
    window.location.href = props.href;
  }
}
</script>

<template>
  <div class="separator" part="separator">
    {{ separator }}
  </div>
  <div class="content" @click="routeJump">
    <slot></slot>
  </div>
</template>

<style lang="scss">
:host {
  display: inline-flex;
  align-items: center;
}

.separator {
  padding: 0 8px;
  user-select: none;
  color: var(--ivy-breadcrumb-separator-color);
}
:host(:first-child) .separator {
  display: none;
  padding-left: 0;
}

.content {
  cursor: default;
  transition: color 0.15s;
  color: var(--ivy-breadcrumb-color);
}

:host([href]) .content:hover {
  color: var(--ivy-breadcrumb-hover-color);
  cursor: pointer;
}

</style>