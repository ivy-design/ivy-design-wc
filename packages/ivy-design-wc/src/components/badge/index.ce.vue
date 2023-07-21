<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "Badge",
  inheritAttrs: false,
})

const props = defineProps({
  type: {
    type: String,
    default: "danger",
    validator(val: string) {
      return ["primary", "success", "warning", "danger", "info"].includes(val)
    }
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  value: {
    type: [Number, String],
    default: 0
  }
})

const value = computed(() => {
  console.log(props.value, props.max)
  if (props.isDot) {
    return ""
  }

  if (!isNaN(Number(props.value)) && Number(props.value) > props.max) {
    return `${props.max}+`
  }
  if(typeof props.value === "string") {
    return props.value
  }
  return props.value
})
</script>

<template>
  <sup class="ivy-badge-content">{{ value }}</sup>
  <slot></slot>
</template>

<style lang="scss">
:host {
  --ivy-badge-bg-color: var(--ivy-color-danger, #f56c6c);
  --ivy-badge-color: var(--ivy-color-white, #ffffff);
  --ivy-badge-radius: 10px;
  --ivy-badge-font-size: 12px;
  --ivy-badge-padding: 6px;
  --ivy-badge-size: 18px;

  position: relative;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
}

.ivy-badge-content {
  background-color: var(--ivy-badge-bg-color);
  border-radius: var(--ivy-badge-radius);
  color: var(--ivy-badge-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--ivy-badge-font-size);
  height: var(--ivy-badge-size);
  padding: 0 var(--ivy-badge-padding);
  white-space: nowrap;
  border: 1px solid #fff;

  position: absolute;
  top: 0;
  right: calc(1px + var(--ivy-badge-size) / 2);
  z-index: 1;
  transform: translateY(-50%) translate(100%);
  box-sizing: border-box;

  line-height: 0;
  vertical-align: baseline;
  font-family: var(--ivy-font-family, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif);
}
:host([type='primary']) .ivy-badge-content {
  --ivy-badge-bg-color: var(--ivy-color-primary, #409eff);
}
:host([type='success']) .ivy-badge-content {
  --ivy-badge-bg-color: var(--ivy-color-success, #67c23a);
}
:host([type='warning']) .ivy-badge-content {
  --ivy-badge-bg-color: var(--ivy-color-warning, #e6a23c);
}
:host([type='danger']) .ivy-badge-content {
  --ivy-badge-bg-color: var(--ivy-color-danger, #f56c6c);
}
:host([type='info']) .ivy-badge-content {
  --ivy-badge-bg-color: var(--ivy-color-info, #909399);
}

:host([is-dot]) sup.ivy-badge-content {
  height: 8px;
  width: 8px;
  line-height: 8px;
  padding: 0;
  right: 5px;
  border-radius: 50%;
  color: transparent;
}

</style>