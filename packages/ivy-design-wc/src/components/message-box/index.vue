<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CloseIcon, Success, Warning, Error, Info } from '@/utils/icons'
import useExpose from '@/hooks/useExpose'
import { useHost } from '@/hooks/useHostElement'
import { getType, isFunction } from '@/utils/utils'

defineOptions({
    name: 'MessageBox',
    inheritAttrs: false
})

export type Actions = 'confirm' | 'cancel' | 'close'
export type MessageBoxOptionsType = 'info' | 'success' | 'warning' | 'error'
interface Props {
    title: string
    message: string
    type: MessageBoxOptionsType
    showClose: boolean
    showConfirmButton: boolean
    showCancelButton: boolean
    confirmButtonText: string
    cancelButtonText: string
    confirmButtonType: string
    cancelButtonType: string
    callback?: (action: Actions, val?: string) => void
    callbackParams: any
    showInput: boolean
    inputPattern: RegExp
    inputPlaceholder: string
    inputType: string
    inputValue: string
    inputValidator?: (value: string) => boolean
    inputErrorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
    showClose: true,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    confirmButtonType: 'primary',
    cancelButtonType: 'default'
})

export interface Emits {
    (e: 'confirm', value?: string): void
    (e: 'cancel'): void
    (e: 'remove'): void
}

const emit = defineEmits<Emits>()

const visible = ref(false)
const open = () => {
    visible.value = true
}

function close() {
    props.callback && props.callback('cancel')
    emit('cancel')
    visible.value = false
}

function confirm() {
    if (props.showInput && isError.value) return
    if (props.showInput) {
        props.callback && props.callback('confirm', promptValue.value)
        emit('confirm', promptValue.value)
    } else {
        props.callback && props.callback('confirm')
        emit('confirm')
    }
    visible.value = false
}

const { host } = useHost()
const handleTransitionend = () => {
    if (visible.value === false) {
        host.value?.remove()
    }
}

const promptValue = ref()
const isError = ref(false)
const errorMessage = ref(props.inputErrorMessage as string)
const handlePromptInput = (ev: CustomEvent) => {
    const val = ev.detail[0]
    promptValue.value = val
    if (props.inputValidator && isFunction(props.inputValidator)) {
        const flag = props.inputValidator(val)
        const type = getType(flag)
        if (type === 'boolean') {
            isError.value = flag
        } else if (type === 'string') {
            isError.value = !!flag
            errorMessage.value = flag as unknown as string
        }
    } else if (props.inputPattern && getType(props.inputPattern) === 'regexp') {
        isError.value = !props.inputPattern.test(val)
    } else {
        isError.value = false
    }
}

const { setExposes } = useExpose()

onMounted(() => {
    errorMessage.value = props.inputErrorMessage as string
    promptValue.value = props.inputValue as string
    setExposes({
        open
    })
})
</script>

<template>
    <transition name="fade">
        <div class="overlay" v-if="visible"></div>
    </transition>
    <transition name="animated">
        <div class="message-box" v-if="visible" @transitionend="handleTransitionend">
            <div class="message-box-header">
                <p class="message-box-title">{{ props.title }}</p>
                <i v-if="props.showClose" class="message-box-close" @click="close">
                    <CloseIcon />
                </i>
            </div>
            <div class="message-box-body">
                <div style="display: flex; align-content: center">
                    <div v-if="props.type" class="icon-wrap">
                        <Success class="icon-success" v-if="props.type === 'success'" />
                        <Warning class="icon-warning" v-else-if="props.type === 'warning'" />
                        <Error class="icon-error" v-else-if="props.type === 'error'" />
                        <Info class="icon-info" v-else-if="props.type === 'info'" />
                        <span v-else></span>
                    </div>
                    <div>
                        <p>{{ props.message }}</p>
                    </div>
                </div>
                <div v-if="props.showInput" class="input-wrapper">
                    <ivy-input
                        :value="props.inputValue"
                        :placeholder="props.inputPlaceholder"
                        @change="handlePromptInput"
                    ></ivy-input>
                    <p class="input-error" v-show="isError">{{ props.inputErrorMessage }}</p>
                </div>
            </div>
            <div class="message-box-footer">
                <ivy-button
                    v-if="props.showCancelButton"
                    :type="props.cancelButtonType"
                    class="btn"
                    :class="props.cancelButtonType"
                    @click="close"
                >
                    {{ props.cancelButtonText }}
                </ivy-button>
                <ivy-button
                    v-if="props.showConfirmButton"
                    :type="props.confirmButtonType"
                    class="btn"
                    :class="confirmButtonType"
                    @click="confirm"
                >
                    {{ props.confirmButtonText }}
                </ivy-button>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    --ivy-message-box-box-shadow: var(--ivy-box-shadow);
    --ivy-message-box-bg-color: var(--ivy-color-white);
    --ivy-message-box-text-color: var(--ivy-text-color-regular);
    --ivy-message-box-header-color: var(--ivy-text-color-primary);
    --ivy-message-box-icon-close-color: var(--ivy-text-color-regular);
    --ivy-message-box-icon-close-color-hover: var(--ivy-color-primary);
    --ivy-message-box-border-radius: var(--ivy-border-radius-medium);
    --ivy-message-box-width: 420px;
    position: fixed;
    z-index: 1000;
    p {
        margin: 0;
    }
}
.message-box {
    border-radius: var(--ivy-message-box-border-radius);
    background-color: var(--ivy-message-box-bg-color);
    color: var(--ivy-message-box-text-color);
    font-size: 14px;
    line-height: 1.5;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 10;
    width: 100%;
    max-width: var(--ivy-message-box-width);
    box-shadow: var(--ivy-message-box-box-shadow);
    &-header {
        position: relative;
        padding: 12px 16px;
        font-size: 18px;
        line-height: 1em;
        color: var(--ivy-message-box-header-color);
    }
    &-title {
        margin: 0;
        font-weight: 500;
    }

    &-close {
        position: absolute;
        cursor: pointer;
        right: 16px;
        top: 12px;
        z-index: 10;
        color: var(--ivy-message-box-icon-close-color);
        &:hover {
            color: var(--ivy-message-box-icon-close-color-hover);
        }
    }

    &-body {
        padding: 16px;

        .input {
            &-wrapper {
                padding: 8px 0 16px;
                position: relative;
            }
            &-error {
                position: absolute;
                bottom: -4px;
                left: 0;
                color: var(--ivy-color-danger);
                font-size: 12px;
            }
        }
    }
    &-footer {
        padding: 12px 16px;
        display: flex;
        justify-content: flex-end;
    }
}
.icon {
    &-wrap {
        font-size: 18px;
        padding-right: 8px;
    }
    &-success {
        color: var(--ivy-color-success);
    }
    &-warning {
        color: var(--ivy-color-warning);
    }
    &-error {
        color: var(--ivy-color-danger);
    }
    &-info {
        color: var(--ivy-color-info);
    }
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
.animated-enter-active,
.animated-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}
.animated-enter-from,
.animated-leave-to {
    transform: translate3d(-50%, -70%, 0) scale(0);
}
.animated-enter-to,
.animated-leave-from {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scale(1);
}

.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.3s ease;
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
    &-enter-to,
    &-leave-from {
        opacity: 1;
    }
}

ivy-button:not(:defined) {
    display: none;
}
</style>
