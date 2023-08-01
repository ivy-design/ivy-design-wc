<script setup lang="ts">
defineOptions({
    name: 'Step',
    inheritAttrs: false
})

const props = defineProps({
    description: {
        type: String,
        default: ''
    },
    header: {
        type: String,
        default: ''
    },
    index: Number
})
</script>

<template>
    <div class="step-inner">
        <div class="step-icon">{{ props.index }}</div>
        <div class="step-wrap">
            <h2 class="step-title">
                <slot name="header">{{ props.header }}</slot>
            </h2>
            <p class="step-content">
                <slot>{{ props.description }}</slot>
            </p>
        </div>
    </div>
    <div class="step-line"></div>
</template>

<style lang="scss">
:host {
    display: inline-flex;
    flex: 1 0 auto;
    flex-direction: column;
    position: relative;
}
:host(:not(:first-child)) {
    margin-left: 12px;
}
:host(:last-child) {
    flex: none;
}
.step-inner {
    display: flex;
    position: relative;
    z-index: 1;
}
.step-title {
    margin: 0;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(32, 44, 61, 0.6);
    line-height: 24px;
    background-color: #fff;
    padding-left: 8px;
    padding-right: 8px;
    display: inline-flex;
}
.step-content {
    font-size: 14px;
    margin: 12px 0 0;
    color: rgba(32, 44, 61, 0.6);
    background-color: #fff;
    padding-left: 8px;
}
.step-icon {
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 1px solid rgba(32, 44, 61, 0.4);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    color: rgba(32, 44, 61, 0.4);
    font-style: normal;
    background-color: #fff;
}
.step-line {
    width: 100%;
    height: 1px;
    background: rgba(32, 44, 61, 0.16);
    flex: auto;
    position: absolute;
    top: 14px;
}
:host(:last-child) .step-line {
    display: none;
}
:host([status='process']) .step-icon {
    border-color: rgba(0, 102, 255, 1);
    color: rgba(0, 102, 255, 1);
}
:host([status='process']) .step-title {
    color: rgba(32, 44, 61, 1);
}
:host([status='finish']) .step-line {
    background-color: rgba(0, 102, 255, 1);
}
:host([status='finish']) .step-title {
    border-color: rgba(0, 102, 255, 1);
    color: rgba(0, 102, 255, 1);
}
:host([status='finish']) .step-icon {
    background-color: rgba(0, 102, 255, 1);
    border-color: rgba(0, 102, 255, 1);
    color: white;
}
</style>
