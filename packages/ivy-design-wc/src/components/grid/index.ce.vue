<script lang="tsx">
import { defineComponent, ref, onMounted, type PropType, onBeforeMount, provide } from 'vue'

export type IvyGridMode = 'grid' | 'flex'

export default defineComponent({
    name: `Grid`,
    props: {
        mode: {
            type: String as PropType<IvyGridMode>,
            default: 'grid',
            validator: (val: string) => {
                return ['grid', 'flex'].includes(val)
            }
        },
        square: Boolean,
        border: {
            type: Boolean,
            default: true
        },
        cols: {
            type: Number,
            default: 3
        }
    },
    setup(props) {
        const wrapRef = ref<HTMLElement | null>(null)
        let resizeObserver: null | ResizeObserver = null

        provide('ivy-grid-mode', props.mode)
        provide('ivy-grid-cols', props.cols)
        provide('ivy-grid-square', props.square)

        const wrapResize = () => {
            resizeObserver = new ResizeObserver((entries) => {
                requestAnimationFrame(() => {
                    for (const entry of entries) {
                        if (entry.contentBoxSize) {
                            const contentBoxSize = Array.isArray(entry.contentBoxSize)
                                ? entry.contentBoxSize[0]
                                : entry.contentBoxSize

                            wrapRef.value?.style.setProperty(
                                '--ivy-grid-col-height',
                                `${(contentBoxSize.inlineSize as number) / props.cols}px`
                            )
                        }
                    }
                })
            })
            resizeObserver.observe(wrapRef.value as Element)
        }
        onMounted(() => {
            if (props.square) {
                wrapResize()
            }
        })
        onBeforeMount(() => {
            resizeObserver?.disconnect()
        })
        return () => (
            <div
                class={['ivy-grid', `ivy-grid--${props.mode}`, { 'is-border': props.border }]}
                ref={wrapRef}
                style={{ '--ivy-grid-cols': props.cols }}
            >
                <slot></slot>
            </div>
        )
    }
})
</script>

<style lang="scss">
:host {
    display: block;
    --ivy-grid-cols: 3;
    --ivy-grid-border-color: var(--ivy-border-color, #dcdfe6);
}
.ivy-grid {
    max-width: 100%;
    &--flex {
        display: flex;

        flex-wrap: wrap;
        &.is-square {
            height: var(--ivy-grid-col-height);
        }

        & ::slotted(ivy-grid-item) {
            flex: 0 0 calc(100% / var(--ivy-grid-cols));
        }
    }
    &--grid {
        display: grid;
        grid-template-columns: repeat(var(--ivy-grid-cols), 1fr);
        &.is-square {
            height: var(--ivy-grid-col-height);
        }
    }

    &.is-border {
        border-top: 1px solid var(--ivy-grid-border-color);
        border-left: 1px solid var(--ivy-grid-border-color);
        & ::slotted(ivy-grid-item) {
            border-right: 1px solid var(--ivy-grid-border-color);
            border-bottom: 1px solid var(--ivy-grid-border-color);
        }
    }
}
</style>
