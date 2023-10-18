<script setup lang="ts">
import { type PropType, onBeforeUnmount, onMounted, ref } from 'vue'
import useHostElement from '@/hooks/useHostElement'

defineOptions({
    name: 'Image',
    inheritAttrs: false
})
const props = defineProps({
    src: String,
    fit: {
        type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
        default: 'fill'
    },
    alt: String,
    lazy: Boolean
})

const { el, getHostElement } = useHostElement()
const imgSrc = ref<string | undefined>(undefined)
const success = ref<boolean>(true)
const loadStyle = ref({})
const errStyle = ref({})

const loadHandler = () => {
    errStyle.value = {
        opacity: 0,
        zIndex: -1
    }
    loadStyle.value = {
        opacity: 0,
        zIndex: -1
    }
}
const imgErrorHandler = () => {
    success.value = false
    loadStyle.value = {
        opacity: 0,
        zIndex: -1
    }
    errStyle.value = {
        opacity: 1,
        zIndex: 1
    }
}

const handleScroll = () => {
    if (!props.lazy) return

    requestAnimationFrame(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.disconnect()
                    imgSrc.value = props.src || ''
                }
                // 每个成员都是一个IntersectionObserverEntry对象。
                // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
                // entry.boundingClientRect //目标元素的位置信息
                // entry.intersectionRatio //目标元素的可见比例
                // entry.intersectionRect //交叉部分的位置信息
                // entry.isIntersecting
                // entry.rootBounds //根元素的位置
                // entry.target
                // entry.time //时间戳
            })
        })
        const host = getHostElement()
        if (host) observer.observe(host as HTMLElement)
    })
}

onMounted(() => {
    if (!props.lazy) {
        imgSrc.value = props.src || ''
    }

    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <img
        ref="el"
        class="image-inner"
        :src="imgSrc"
        :style="{ display: success ? 'inherit' : 'none', objectFit: props.fit }"
        :alt="props.alt"
        @load="loadHandler"
        @error="imgErrorHandler"
    />
    <div class="image-error" :style="{ ...errStyle, display: success ? 'none' : 'flex' }">
        <slot name="error">加载失败</slot>
    </div>

    <div class="image-placeholder" :style="loadStyle">
        <slot name="placeholder">
            <svg
                viewBox="0 0 1024 1024"
                class="ivy-icon"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                aria-hidden="true"
            >
                <path
                    d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"
                ></path>
            </svg>
        </slot>
    </div>
</template>

<style lang="scss">
:host {
    display: inline-block;
    width: var(--ivy-image-width);
    height: var(--ivy-image-height);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}
.image-inner {
    width: var(--ivy-image-width, 100%);
    height: var(--ivy-image-height, 100%);
    object-fit: var(--ivy-image-fit, fill);
}

.image-placeholder {
    z-index: 1;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #c0c4cc;
    vertical-align: middle;
}
.image-error {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    vertical-align: middle;
    transition: all 0.3s;
    z-index: -1;
    opacity: 0;
    color: #c0c4cc;
    background: #f5f7fa;
}

.ivy-icon {
    width: 18px;
    height: 18px;
    animation: spin 1.8s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
