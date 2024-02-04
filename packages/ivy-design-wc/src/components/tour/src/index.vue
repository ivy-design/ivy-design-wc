<script setup lang="tsx">
import { onMounted, ref, reactive, computed } from 'vue'
import { getType } from '@/utils/index'
import { useExpose } from '@/hooks/useExpose'
import { useAppendTo } from '@/hooks/useAppendTo'
import { CloseIcon as Close } from '@/utils/icons'
import { usePopper } from '@/hooks/usePopper'
import { type Placement } from '@floating-ui/vue'

defineOptions({
    name: 'Tour',
    inheritAttrs: false
})

interface Step {
    target: HTMLElement | string
    title: string
    allowHtml: boolean
    content: string
    placement: Placement
}

interface Props {
    steps: Array<Step>
    appendToBody: boolean
}

const props = withDefaults(defineProps<Props>(), {
    steps: () => [],
    appendToBody: false
})

const emit = defineEmits(['finish', 'close', 'change'])

const { createPopper, visible, referenceEl, floatEl, floatArrow, placement } = usePopper()

const { floatingStyles, update, middlewareData, finalPlacement } = createPopper()

const getElRect = (el: HTMLElement | string) => {
    let targetEl: any = el
    if (getType(el) === 'string') {
        targetEl = document.querySelector(el as string)
    }

    if (!targetEl) {
        return
    }

    return targetEl.getBoundingClientRect() || null
}

const index = ref(0)
const curStep = ref<Step | null>(props.steps[index.value] as Step)

const openTour = () => {
    visible.value = true

    getStep()
}

const close = () => {
    visible.value = false
    index.value = 0
    curStep.value = props.steps[0] as Step
}

const closeTour = () => {
    close()
    emit('close')
}

const finishTour = () => {
    close()
    emit('finish')
}

const getStep = () => {
    placement.value = curStep.value?.placement || 'bottom'
    referenceEl.value = {
        getBoundingClientRect() {
            return getElRect(curStep.value?.target as any)
        },
        contextElement: document.querySelector(curStep.value?.target as string) as HTMLElement
    }

    update()
    emit('change', index.value)
}

const prevStep = () => {
    if (index.value > 0) {
        curStep.value = props.steps[index.value - 1] as Step
        index.value = index.value - 1

        getStep()
    }
}

const nextStep = () => {
    if (index.value < props.steps.length - 1) {
        curStep.value = props.steps[index.value + 1] as Step
        index.value = index.value + 1

        getStep()
    }
}

const client = reactive({
    width: window.innerWidth,
    height: window.innerHeight
})

const path = computed(() => {
    const targetRect = referenceEl.value?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    }
    return `M${client.width},0 L0,0 L0,${client.height} L${client.width},${client.height} L${
        client.width
    },0 Z M${targetRect.left},${targetRect.top - 2} h${targetRect.width} a2,2 0 0 1 2,2 v${
        targetRect.height
    } a2,2 0 0 1 -2,2 h-${targetRect.width} a2,2 0 0 1 -2,-2 v-${
        targetRect.height
    } a2,2 0 0 1 2,-2 z`
})

const { setExposes } = useExpose()
const { appendTo } = useAppendTo()
onMounted(() => {
    const rect = document.body.getBoundingClientRect()
    client.width = rect.width
    client.height = rect.height
    setExposes({
        open: openTour
    })
    if (props.appendToBody) appendTo()
})
</script>

<template>
    <div class="ivy-tour" v-show="visible">
        <div class="ivy-tour__mask">
            <svg style="width: 100%; height: 100%">
                <path :d="path" class="ivy-tour__mask-path"></path>
            </svg>
        </div>
        <div
            ref="floatEl"
            class="ivy-tour__dialog"
            :data-placement="finalPlacement"
            :style="floatingStyles"
            v-if="referenceEl"
        >
            <div
                ref="floatArrow"
                :data-placement="finalPlacement"
                class="ivy-tour__dialog--arrow"
                :style="{
                    left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
                    top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : ''
                }"
            ></div>
            <div class="ivy-tour__dialog--inner">
                <div class="ivy-tour__dialog--body">
                    <span class="ivy-tour__dialog--title">{{ curStep?.title }}</span>
                    <div v-if="curStep?.allowHtml" innerHTML="{curStep.value?.content}"></div>
                    <div v-else>{{ curStep?.content }}</div>
                </div>
                <div class="ivy-tour__dialog--footer">
                    <div class="ivy-tour__dialog--footer-no">
                        <template v-for="(it, i) in props.steps" :key="i">
                            <div
                                class="ivy-tour__dialog--footer-no-item is-active"
                                v-if="i === index"
                            ></div>
                            <div class="ivy-tour__dialog--footer-no-item" v-else></div>
                        </template>
                    </div>
                    <div>
                        <button class="ivy-tour__dialog-btn" v-show="index > 0" @click="prevStep">
                            上一步
                        </button>
                        <button
                            class="ivy-tour__dialog-btn"
                            v-show="index < props.steps.length - 1"
                            @click="nextStep"
                        >
                            下一步
                        </button>
                        <button
                            class="ivy-tour__dialog-btn is-finish"
                            v-show="index === props.steps.length - 1"
                            @click="finishTour"
                        >
                            结束
                        </button>
                    </div>
                </div>
            </div>
            <div class="ivy-tour__close" @click="closeTour"><Close /></div>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    --ivy-tour-width: 420px;
    --ivy-tour-padding-primary: 16px;
    --ivy-tour-font-line-height: var(--ivy-font-line-height-primary);
    --ivy-tour-title-font-size: 16px;
    --ivy-tour-title-text-color: var(--ivy-text-color-primary);
    --ivy-tour-title-font-weight: 400;
    --ivy-tour-font-size: 14px;
    --ivy-tour-color: var(--ivy-text-color-primary);
    --ivy-tour-bg-color: #ffffff;
    --ivy-tour-border-radius: var(--ivy-border-radius);
    --ivy-tour-border-color: var(--ivy-border-color-lighter);
}
.ivy-tour {
    &__mask {
        position: fixed;
        inset: 0;
        z-index: 9999990;
        pointer-events: none;
        &-path {
            fill: rgba(0, 0, 0, 0.5);
            pointer-events: auto;
            cursor: auto;
            transition: all 0.3s ease;
        }
    }
    &__dialog {
        z-index: 9999991;
        width: var(--ivy-tour-width);

        font-size: var(--ivy-tour-font-size);
        color: var(--ivy-tour-color);
        background-color: var(--ivy-tour-bg-color);
        border-radius: var(--ivy-tour-border-radius);
        border: 1px solid var(--ivy-tour-border-color);

        transition: transform 0.3s ease;

        &--arrow {
            position: absolute;

            box-sizing: border-box;
            display: inline-block;
            position: absolute;
            z-index: 1;
            width: 8px;
            height: 8px;
            transform: rotate(-45deg);
            border: 1px solid transparent;
            background-color: white;

            &[data-placement^='top'] {
                bottom: -4px;
            }

            &[data-placement^='bottom'] {
                top: -4px;
            }
            &[data-placement^='right'] {
                left: -4px;
            }
            &[data-placement^='left'] {
                right: -4px;
            }
        }

        &--inner {
            padding: var(--ivy-tour-padding-primary);
        }

        &--body {
            font-size: var(--ivy-tour-font-size);
        }

        &--title {
            font-size: var(--ivy-tour-title-font-size);
            color: var(--ivy-tour-title-text-color);
            font-weight: var(--ivy-tour-title-font-weight);
            line-height: var(--ivy-tour-font-line-height);
        }

        &--footer {
            display: flex;
            justify-content: space-between;
            min-width: 260px;
            margin-top: 12px;
            align-items: center;
            &-no {
                display: flex;
                width: max-content;
                flex: auto;
                &-item {
                    border-radius: 50%;
                    width: 6px;
                    height: 6px;
                    margin: 0 2px;
                    background-color: #ddd;
                    &.is-active {
                        background-color: var(--ivy-color-primary);
                    }
                }
            }
            &-operate {
                flex: auto;
            }
        }

        &-btn {
            box-sizing: border-box;
            border-radius: 4px;
            padding: 0 1.2em;
            font-weight: 500;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.25s;
            font-size: 12px;
            line-height: 24px;
            border: 1px solid #ddd;
            background-color: white;
            outline: none;
            & + & {
                margin-left: 12px;
            }
            &:hover {
                border-color: var(--ivy-color-primary);
                color: var(--ivy-color-primary);
            }
            &.is-finish {
                background-color: var(--ivy-color-primary);
                border-color: var(--ivy-color-primary);
                color: white;
            }
        }
    }

    &__close {
        position: absolute;
        top: 12px;
        right: 16px;
        cursor: pointer;
        font-size: var(--ivy-tour-title-font-size);
        &:hover {
            color: var(--ivy-color-primary);
        }
    }
}
</style>
