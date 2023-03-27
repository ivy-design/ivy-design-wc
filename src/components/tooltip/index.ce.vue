<template>
    <div class="ivy-tooltip" v-click-outside="close">
        <transition name="ivy-fade">
            <div
                :class="['ivy-tooltip__content', `ivy-tooltip__content--${placement}`]"
                ref="targetRef"
                v-show="visible"
                part="content"
            >
                <slot name="content">{{ content }}</slot>
            </div>
        </transition>

        <slot
            @click="handleOpen"
            @mouseenter="handleOpen"
            @mouseleave="handleClose"
            class="ivy-tooltip__default"
        ></slot>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ClickOutside from '@/directives/click-outside'

export default {
    name: 'Tooltip',
    directives: {
        ClickOutside
    },
    props: {
        placement: {
            type: String,
            default: 'top'
        },
        trigger: {
            type: String,
            default: 'hover'
        },
        content: {
            type: String,
            default: ''
        }
    },
    setup(props, { expose }) {
        const visible = ref(false)

        const targetRef = ref(null)
        const open = () => {
            visible.value = true
        }
        const close = () => {
            visible.value = false
        }

        expose({
            open,
            close
        })

        const handleOpen = (ev: Event) => {
            const type = ev.type
            if (props.trigger === 'hover' && type === 'mouseenter') {
                open()
            }
            if (props.trigger === 'click' && type === 'click') {
                open()
            }
        }
        const handleClose = (ev: Event) => {
            const type = ev.type
            if (props.trigger === 'hover' && type === 'mouseleave') {
                close()
            }
        }
        return {
            visible,
            handleOpen,
            handleClose,
            targetRef,
            close
        }
    }
}
</script>

<style lang="scss">
:host {
    --ivy-tooltip-color: #fff;
    --ivy-tooltip-background-color: #000;
    --ivy-tooltip-font-size: 13px;
    display: inline-flex;
    position: relative;
    .ivy-tooltip__content {
        position: absolute;
        padding: 4px 8px;
        background-color: var(--ivy-tooltip-background-color);
        color: var(--ivy-tooltip-color);
        border-radius: 4px;
        font-size: var(--ivy-tooltip-font-size);
        z-index: 10;
        width: max-content;
        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px;
            border-color: transparent;
        }
        &.ivy-tooltip__content--top {
            bottom: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
            &::before {
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                border-top-color: var(--ivy-tooltip-background-color);
            }
        }
        &.ivy-tooltip__content--bottom {
            top: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
            &::before {
                top: -8px;
                left: 50%;
                transform: translateX(-50%);
                border-bottom-color: var(--ivy-tooltip-background-color);
            }
        }
        &.ivy-tooltip__content--left {
            top: 50%;
            right: calc(100% + 8px);
            transform: translateY(-50%);
            &::before {
                top: 50%;
                right: -8px;
                transform: translateY(-50%);
                border-left-color: var(--ivy-tooltip-background-color);
            }
        }
        &.ivy-tooltip__content--right {
            top: 50%;
            left: calc(100% + 8px);
            transform: translateY(-50%);
            &::before {
                top: 50%;
                left: -8px;
                transform: translateY(-50%);
                border-right-color: var(--ivy-tooltip-background-color);
            }
        }
    }
    .ivy-tooltip__default {
        cursor: pointer;
    }
}
.ivy-fade-enter-active,
.ivy-fade-leave-active {
    transition: opacity 0.3s;
}

.ivy-fade-enter-from,
.ivy-fade-leave-to {
    opacity: 0;
}
.ivy-fade-enter-to,
.ivy-fade-leave-from {
    opacity: 1;
}
</style>
