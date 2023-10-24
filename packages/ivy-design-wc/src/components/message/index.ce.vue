<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useHostElement from '@/hooks/useHostElement'

// import { genSuccess } from '@/utils/icons'

defineOptions({
    name: 'Message',
    inheritAttrs: false
})

const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (value: string) => {
            return ['success', 'warning', 'error', 'info'].includes(value)
        }
    },
    content: {
        type: String,
        default: ''
    },
    duration: {
        type: Number,
        default: 3000
    }
})

const { el, getHostElement } = useHostElement()

const visible = ref(false)
const wrap = ref<HTMLElement>()

onMounted(() => {
    visible.value = true
    const host = getHostElement()
    console.log(wrap.value)
    wrap.value?.addEventListener('transitionend', () => {
        if (!visible.value) {
            console.log('end')
            host.remove()
        } else {
            console.log('start')
            setTimeout(() => {
                visible.value = false
            }, props.duration)
        }
    })
})
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style="position: absolute; width: 0; height: 0px; overflow: hidden"
        ref="el"
    >
        <symbol id="success" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="m16 24 6 6 12-12"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="warning" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 37a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 12v16"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="error" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="info" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24.5 34V20h-2M21 34h7"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
    </svg>
    <transition name="fade-down">
        <div class="message" v-show="visible" ref="wrap">
            <svg class="icon">
                <use :href="`#${props.type}`"></use>
            </svg>

            <div class="message-content">{{ props.content }}</div>
        </div>
    </transition>
</template>

<style lang="scss">
:host {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    // animation: fadeInDown 0.3s ease-in-out;
    pointer-events: none;
    font-size: var(--ivy-font-size);
    transition: all 0.3s;
    font-family: var(--ivy-font-family);
}
:host + :host {
    margin-top: 20px;
}
.message {
    display: inline-flex;
    margin: 0 auto;
    background-color: white;
    pointer-events: all;
    padding: 8px 12px;
    border: 1px solid var(--ivy-border-color-light);
    border-radius: 4px;
    align-items: center;
    box-shadow: var(--ivy-box-shadow-light);
    position: relative;
}
.icon {
    margin-right: 8px;
    font-size: 16px;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
:host([type='success']) .message {
    background-color: var(--ivy-color-success-light-9, #f0f9eb);
    color: var(--ivy-color-success, #67c23a);
}
:host([type='success']) .icon {
    color: var(--ivy-color-success, #67c23a);
}

:host([type='warning']) .message {
    background-color: var(--ivy-color-warning-light-9, #fdf6ec);
    color: var(--ivy-color-warning, #e6a23c);
}
:host([type='warning']) .icon {
    color: var(--ivy-color-warning, #e6a23c);
}

:host([type='info']) .message {
    background-color: var(--ivy-color-info-light-9, #f4f4f5);
    color: var(--ivy-color-info, #909399);
}
:host([type='info']) .icon {
    color: var(--ivy-color-info, #909399);
}

:host([type='error']) .message {
    background-color: var(--ivy-color-danger-light-9, #fef0f0);
    color: var(--ivy-color-danger, #f56c6c);
}
:host([type='error']) .icon {
    color: var(--ivy-color-danger, #f56c6c);
}
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.fade-down {
    &-enter-active,
    &-leave-active {
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }

    &-enter-to,
    &-leave-from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
</style>
