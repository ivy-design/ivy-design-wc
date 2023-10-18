<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useHostElement } from '@/hooks/useHostElement'

defineOptions({
    name: 'Drawer',
    inheritAttrs: false
})

const props = defineProps({
    open: Boolean,
    width: {
        type: String,
        default: '36vw'
    },
    header: String,
    maskClosable: {
        type: Boolean,
        default: true
    },
    placement: {
        type: String,
        default: 'right',
        validator(val: string) {
            return ['left', 'right', 'top', 'bottom'].includes(val)
        }
    }
})

const emit = defineEmits(['update:open', 'close'])

const visible = ref(false)
watch(
    () => props.open,
    (val) => {
        console.log(val, 'watch open')
        visible.value = val
    }
)

const { el: maskRef, getHostElement } = useHostElement()
const maskClose = () => {
    if (props.maskClosable) {
        visible.value = false
        emit('update:open', false)
        const host = getHostElement()
        ;(host as any).open = false
        emit('close')
    }
}

const getStyle = computed(() => {
    return {
        width: ['left', 'right'].includes(props.placement) ? props.width : '100%',
        height: ['top', 'bottom'].includes(props.placement) ? props.width : '100%'
    }
})
</script>

<template>
    <div class="ivy-mask" @click="maskClose" ref="maskRef"></div>
    <div class="ivy-drawer" :style="getStyle">
        <div class="ivy-drawer-header">
            {{ props.header }}
        </div>

        <div class="ivy-drawer-body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100vw;
    height: 100vh;
    display: none;
    overflow: hidden;
    transition: all 0.3s;
}
.ivy-mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--ivy-mask-color, rgba(55, 55, 55, 0.6));
}
.ivy-drawer {
    position: absolute;
    z-index: 1;
    height: 100%;
    background-color: #ffffff;
}
.ivy-drawer-header {
    padding: 12px 16px;
    border-bottom: 1px solid var(--ivy-border-color, #dcdfe6);
    display: none;
}
:host([show-header]) .ivy-drawer-header {
    display: block;
}
.ivy-drawer-body {
    padding: 16px;
}

:host([open]) {
    display: block;
}
:host([open]) .ivy-drawer {
    animation-delay: 0.05s;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
}

:host .ivy-drawer,
:host([placement='right']) .ivy-drawer {
    right: 0;
    top: 0;
    transform: translate3d(100%, 0, 0);
}
:host([open]) .ivy-drawer,
:host([placement='right'][open]) .ivy-drawer {
    animation-name: slideInRight;
}

:host([placement='left']) .ivy-drawer {
    left: 0;
    top: 0;
    transform: translate3d(-100%, 0, 0);
}
:host([placement='left'][open]) .ivy-drawer {
    animation-name: slideInLeft;
}

:host([placement='top']) .ivy-drawer {
    left: 0;
    top: 0;
    transform: translate3d(0, -100%, 0);
}
:host([placement='top'][open]) .ivy-drawer {
    animation-name: slideInDown;
}

:host([placement='bottom']) .ivy-drawer {
    left: 0;
    bottom: 0;
    transform: translate3d(0, 100%, 0);
}
:host([placement='bottom'][open]) .ivy-drawer {
    animation-name: slideInUp;
}

@keyframes slideInLeft {
    from {
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInRight {
    from {
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInDown {
    from {
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInUp {
    from {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}
</style>
