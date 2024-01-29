<script setup lang="ts">
import { watch } from 'vue'
import { useHostElement } from '@/hooks/useHostElement'

defineOptions({
    name: 'Dialog',
    inheritAttrs: false
})

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    header: {
        type: String,
        default: ''
    },
    showMask: {
        type: String,
        default: 'true',
        validator: (val: string) => ['true', 'false'].includes(val)
    },
    maskClosable: {
        type: String,
        default: 'true',
        validator: (val: string) => ['true', 'false'].includes(val)
    },
    sureText: {
        type: String,
        default: '确定'
    },
    cancelText: {
        type: String,
        default: '取消'
    }
})

const emit = defineEmits(['sure', 'close', 'change'])

const { el, getHostElement } = useHostElement()
const handleClose = (type = 'close') => {
    ;(getHostElement() as any).open = false
    emit('close', type)
}

const handlerSure = () => {
    emit('sure')
}

const handlerMaskClose = () => {
    if (props.maskClosable === 'true') {
        handleClose()
    }
}

watch(
    () => props.open,
    (val) => {
        emit('change', val)
        if (val) {
            el.value?.focus()
        }
    }
)
</script>

<template>
    <transition name="fade">
        <div class="ivy-mask" v-if="props.showMask === 'true'" @click="handlerMaskClose"></div>
    </transition>
    <transition name="zoom-in">
        <div class="ivy-modal" ref="el" v-if="props.open">
            <div class="ivy-modal-header">
                <slot name="header">{{ props.header }}</slot>
            </div>
            <div class="ivy-modal-content">
                <slot></slot>
            </div>
            <div class="ivy-modal-footer">
                <slot name="footer">
                    <button
                        class="ivy-modal-button ivy-modal-button-cancel"
                        @click="handleClose('cancel')"
                    >
                        {{ props.cancelText }}
                    </button>
                    <button class="ivy-modal-button ivy-modal-button-primary" @click="handlerSure">
                        {{ props.sureText }}
                    </button>
                </slot>
            </div>
            <div class="ivy-modal-close" @click="handleClose('close')"></div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-dialog-header-padding: 16px;
    --ivy-dialog-body-padding: 16px;
    --ivy-dialog-footer-padding: 16px;
    --ivy-dialog-width: 500px;
    --ivy-dialog-top: 14vh;

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9000;
    display: none;
}
:host([open]) {
    display: block;
}
.ivy-mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
}
.ivy-modal {
    width: var(--ivy-dialog-width);
    margin: var(--ivy-dialog-top) auto 0;
    background-color: #ffffff;
    border-radius: var(--border-radius, 8px);
    position: relative;
    box-shadow: var(--ivy-box-shadow);
    border: 1px solid var(--ivy-border-color, #dcdfe6);
}
.ivy-modal-header {
    padding: var(--ivy-dialog-header-padding);
    border-bottom: 1px solid var(--ivy-border-color, #dcdfe6);
}
.ivy-modal-content {
    padding: var(--ivy-dialog-body-padding);
}
.ivy-modal-footer {
    padding: var(--ivy-dialog-footer-padding);
    border-top: 1px solid var(--ivy-border-color, #dcdfe6);
    text-align: right;
}
.ivy-modal-button {
    line-height: 1em;
    font-size: 14px;
    padding: 8px 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.1s;
}
.ivy-modal-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.ivy-modal-button + .ivy-modal-button {
    margin-left: 10px;
}
.ivy-modal-button-primary {
    background-color: var(--color-primary, #409eff);
    border-color: var(--color-primary, #409eff);
    color: white;
}
.ivy-modal-button-primary:hover {
    background-color: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
.ivy-modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    z-index: 1;
}
.ivy-modal-close::before,
.ivy-modal-close::after {
    content: '';
    display: block;
    position: absolute;
    left: 8px;
    top: 0;
    width: 1px;
    height: 16px;
    background-color: #999;
    border-radius: 0.5px;
    transform: rotate(-45deg);
    z-index: -1;
}
.ivy-modal-close::before {
    transform: rotate(45deg);
}
.ivy-modal-close:hover::before,
.ivy-modal-close:hover::after {
    background-color: #444;
}

.zoom-in {
    &-enter-active,
    &-leave-active {
        transition: all 0.3s;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }

    &-enter-to,
    &-leave-from {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}
</style>
