<script lang="tsx">
import { type PropType, onMounted, ref, defineComponent } from 'vue'
import { genArrowRight, genArrowLeft } from '../../utils/icons'

type Trigger = 'hover' | 'click' | 'never'
type IndicatorPosition = 'none' | 'outside' | 'inside'

export default defineComponent({
    name: 'Carousel',
    inheritAttrs: false,
    props: {
        initialIndex: {
            type: String,
            default: '0'
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        interval: {
            type: Number,
            default: 3000
        },
        indicator: {
            type: Boolean,
            default: true
        },
        indicatorPosition: {
            type: String as PropType<IndicatorPosition>,
            default: 'inside',
            validator: (val: IndicatorPosition) => {
                return ['none', 'outside', 'inside'].includes(val)
            }
        },
        indicatorCustom: Boolean,
        trigger: {
            type: String as PropType<Trigger>,
            default: 'hover',
            validator: (val: Trigger) => {
                return ['hover', 'click', 'never'].includes(val)
            }
        },
        pauseOnHover: Boolean
    },
    emits: ['change'],
    setup(props, { emit }) {
        const current = ref(0)
        const size = ref(0)

        const handlePrev = () => {
            if (current.value === 0) {
                current.value = size.value - 1
                return
            }
            current.value = current.value - 1
        }

        const handleNext = () => {
            if (current.value >= size.value - 1) {
                current.value = 0
                return
            }
            current.value = current.value + 1
        }

        const handleCurrentChange = (ev: Event) => {
            const type = ev.type as any

            if (type === props.trigger || (type === 'mousemove' && props.trigger === 'hover')) {
                const target = ev.target as HTMLElement
                const clickable = target.dataset.clickable

                if (clickable === 'true') {
                    const index = Number(target.dataset.index)
                    current.value = index
                    emit('change', index)
                }
            }
        }

        const slots = ref<Node[]>([])
        const slotEl = ref<HTMLSlotElement | null>(null)

        onMounted(() => {
            current.value = Number(props.initialIndex)
            const slotTmp = slotEl.value?.assignedElements() ?? []
            size.value = slotTmp.length
            // if (size.value > 1) {
            //     const cloneFinal = slotTmp[size.value - 1].cloneNode(true)
            //     const cloneFirst = slotTmp[0].cloneNode(true)
            //     slots.value = [cloneFinal, ...slotTmp, cloneFirst]
            // } else {
            //     slots.value = [...slotTmp]
            // }
            slots.value = [...slotTmp]
        })

        const calcInitialTranslate = () => {
            if (size.value > 1) {
                return `translateX(-${(Number(current.value || 0) / size.value) * 100}%)`
            }
            return 'translateX(0)'
        }

        return () => {
            return (
                <>
                    <div class="carousel">
                        <div
                            class="carousel-wrap"
                            style={{
                                width: `${slots.value.length}00%`,
                                transform: calcInitialTranslate()
                            }}
                        >
                            {slots.value.map((c: any) => {
                                return (
                                    <div
                                        class="carousel-item"
                                        style={{ flex: `0 0 calc(1/${slots.value.length}*100%` }}
                                        innerHTML={c.innerHTML as string}
                                    ></div>
                                )
                            })}
                        </div>
                        <div class="carousel-wrap__hide">
                            <slot ref={(el: HTMLSlotElement) => (slotEl.value = el)}></slot>
                        </div>
                    </div>
                    <div class="carousel-trigger">
                        <div class="carousel-trigger-item" onClick={handlePrev}>
                            {genArrowLeft()}
                        </div>
                        <div
                            class="carousel-trigger-item carousel-trigger-item-right"
                            onClick={handleNext}
                        >
                            {genArrowRight()}
                        </div>
                    </div>
                    <div
                        onClick={handleCurrentChange}
                        onMousemove={handleCurrentChange}
                        class="carousel-indicator"
                    >
                        <slot name="indicator">
                            {new Array(size.value).fill(0).map((_, i) => {
                                return (
                                    <div
                                        class={[
                                            'carousel-indicator-item',
                                            { 'is-active': current.value === i }
                                        ]}
                                        data-index={i}
                                        data-clickable={current.value === i ? 'false' : 'true'}
                                    ></div>
                                )
                            })}
                        </slot>
                    </div>
                </>
            )
        }
    }
})
</script>

<style lang="scss">
:host {
    display: block;
    position: relative;
    height: 200px;
    overflow-x: hidden;
}

.carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &-wrap {
        height: 100%;
        min-width: 100%;
        display: flex;
        transition: transform 0.3s;
        &__hide {
            display: none;
        }
    }
    &-item {
        display: block;
        height: 100%;
    }
    &-trigger {
        &-item {
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 10;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 20px;
            background-color: rgba($color: #333333, $alpha: 0.4);
            color: white;
            display: inline-flex;
            border-radius: 50%;
            padding: 12px;
            &-right {
                left: auto;
                right: 0;
            }
        }
    }
    &-indicator {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        &-item {
            display: inline-flex;
            width: 16px;
            height: 3px;
            background-color: gray;
            margin: 0 10px;
            border-radius: 1px;
            &:not(.is-active:hover) {
                cursor: pointer;
            }
            &.is-active {
                background-color: #409eff;
            }
        }
    }
}
</style>
