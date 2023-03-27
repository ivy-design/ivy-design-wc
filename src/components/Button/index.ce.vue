<template>
    <button class="ivy-button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
export default {
    name: 'Button',
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss">
:host {
    display: inline-flex;
    border-radius: 4px;
    overflow: hidden;
}
.ivy-button {
    display: block;
    outline: none;
    border: none;
    padding: 0 16px;
    margin: none;
    height: 32px;
    background-color: #fff;
    border-radius: 4px;
    font-size: 14px;
    box-shadow: 0 0 0 1px #ccc inset;
    box-sizing: border-box;
    transition: all 0.3s ease;
    overflow: hidden;
    &:hover {
        box-shadow: 0 0 0 1px red inset;
    }
}
</style>
