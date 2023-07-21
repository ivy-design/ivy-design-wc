<script setup lang="ts">
defineOptions({
  name: "Tag"
})

defineProps({
  type: {
    type: String,
    default: "primary",
    validator(val: string) {
      return ["primary", "warning", "danger", "success", "info"].includes((val))
    }
  },
  size: {
    type: String,
    default: "small",
    validator(val: string) {
      return ["mini", "small", "medium", "large"].includes(val)
    }
  }
})
</script>

<template>
  <slot></slot>
</template>

<style lang="scss">
:host {
  --ivy-tag-color: var(--ivy-color-primary, #409eff);
  --ivy-tag-border-color: var(--ivy-color-primary-light-8, #d9ecff);
  --ivy-tag-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
  display: inline-block;
  font-size: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 10px;
  border: 1px solid var(--ivy-tag-border-color);
  color: var(--ivy-tag-color);
  background-color: var(--ivy-tag-bg-color);
}
:host(:first-child) {
  margin-left: 0;
}

:host([size='large']) {
  line-height: 30px;
  height: 32px;
  padding: 0 12px;
}

:host([size='medium']) {
  line-height: 26px;
  height: 28px;
  padding: 0 10px;
}
:host,
:host([size='small']) {
  line-height: 22px;
  height: 24px;
  padding: 0 8px;
}
:host([size='mini']) {
  line-height: 18px;
  height: 20px;
  padding: 0 6px;
}


:host([type='primary']) {
  --ivy-tag-color: var(--ivy-color-primary, #409eff);
  --ivy-tag-border-color: var(--ivy-color-primary-light-8, #d9ecff);
  --ivy-tag-bg-color: var(--ivy-color-primary-light-9, #ecf5ff);
}
:host([type='success']) {
  --ivy-tag-color: var(--ivy-color-success, #67c23a);
  --ivy-tag-border-color: var(--ivy-color-success-light-8, #e1f3d8);
  --ivy-tag-bg-color: var(--ivy-color-success-light-9, #f0f9eb);
}
:host([type='warning']) {
  --ivy-tag-color: var(--ivy-color-warning, #e6a23c);
  --ivy-tag-border-color: var(--ivy-color-warning-light-8, #faecd8);
  --ivy-tag-bg-color: var(--ivy-color-warning-light-9, #fdf6ec);
}
:host([type='danger']) {
  --ivy-tag-color: var(--ivy-color-danger, #f56c6c);
  --ivy-tag-border-color: var(--ivy-color-danger-light-8, #fde2e2);
  --ivy-tag-bg-color: var(--ivy-color-danger-light-9, #fef0f0);
}
:host([type='info']) {
  --ivy-tag-color: var(--ivy-color-info, #909399);
  --ivy-tag-border-color: var(--ivy-color-info-light-8, #e9e9eb);
  --ivy-tag-bg-color: var(--ivy-color-info-light-9, #f4f4f5);
}

:host([theme='plain']) {
  --ivy-tag-bg-color: var(--ivy-color-white, #ffffff);
}

:host([theme='plain'][type='primary']) {
  --ivy-tag-border-color: var(--ivy-color-primary-light-6, #b3d8ff);
  --ivy-tag-color: var(--ivy-color-primary, #409eff);
}
:host([theme='plain'][type='success']) {
  --ivy-tag-border-color: var(--ivy-color-success-light-6, #c2e7b0);
  --ivy-tag-color: var(--ivy-color-success, #67c23a);
}
:host([theme='plain'][type='warning']) {
  --ivy-tag-border-color: var(--ivy-color-warning-light-6, #f5dab1);
  --ivy-tag-color: var(--ivy-color-warning, #e6a23c);
}
:host([theme='plain'][type='danger']) {
  --ivy-tag-border-color: var(--ivy-color-danger-light-6, #fbc4c4);
  --ivy-tag-color: var(--ivy-color-danger, #f56c6c);
}
:host([theme='plain'][type='info']) {
  --ivy-tag-border-color: var(--ivy-color-info-light-6, #d3d4d6);
  --ivy-tag-color: var(--ivy-color-info, #909399);
}

:host([theme='dark']) {
  --ivy-tag-color: var(--ivy-color-white, #ffffff);
}
:host([theme='dark'][type='primary']) {
  --ivy-tag-border-color: var(--ivy-color-primary, #409eff);
  --ivy-tag-bg-color: var(--ivy-color-primary, #409eff);
}
:host([theme='dark'][type='success']) {
  --ivy-tag-border-color: var(--ivy-color-success, #67c23a);
  --ivy-tag-bg-color: var(--ivy-color-success, #67c23a);
}
:host([theme='dark'][type='warning']) {
  --ivy-tag-border-color: var(--ivy-color-warning, #e6a23c);
  --ivy-tag-bg-color: var(--ivy-color-warning, #e6a23c);
}
:host([theme='dark'][type='danger']) {
  --ivy-tag-border-color: var(--ivy-color-danger, #f56c6c);
  --ivy-tag-bg-color: var(--ivy-color-danger, #f56c6c);
}
:host([theme='dark'][type='info']) {
  --ivy-tag-border-color: var(--ivy-color-info, #909399);
  --ivy-tag-bg-color: var(--ivy-color-info, #909399);
}
</style>