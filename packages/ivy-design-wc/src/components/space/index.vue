<script lang="tsx">
import type { StyleValue } from 'vue'
import { defineComponent, ref, onMounted, computed, watch } from 'vue'

export default defineComponent({
    name: 'Space',
    inheritAttrs: false,
    props: {
        vertical: Boolean,
        alignment: {
            type: String,
            default: 'center',
            validator(val: string) {
                return ['flex-start', 'flex-end', 'center', 'normal', 'stretch'].includes(val)
            }
        },
        wrap: Boolean,
        size: {
            type: String,
            default: 'medium',
            validator: (val: string) => {
                return ['small', 'medium', 'large', 'custom'].includes(val)
            }
        },
        gap: {
            type: String,
            default: '12px'
        }
    },
    setup(props) {
        const slot = ref()
        const children = ref<any>([])
        onMounted(() => {
            slot.value.assignedNodes().forEach((c: Element) => {
                if (c.nodeType === Node.ELEMENT_NODE) {
                    children.value.push(c.outerHTML)
                } else if (c.nodeType === Node.TEXT_NODE && !/^\s+$/.test(c.nodeValue as string)) {
                    children.value.push(c.nodeValue)
                }
            })
        })

        const sizeMap = {
            small: '8px',
            medium: '12px',
            large: '24px'
        }
        const gap = ref(
            props.size === 'custom' ? props.gap : sizeMap[props.size as keyof typeof sizeMap]
        )

        const spaceStyle = computed<StyleValue>(() => {
            return {
                alignItems: props.alignment,
                flexDirection: props.vertical ? 'column' : 'row',
                gap: gap.value
            }
        })

        watch(
            () => props.gap,
            (val) => {
                gap.value =
                    props.size === 'custom' ? val : sizeMap[props.size as keyof typeof sizeMap]
            }
        )

        return () => (
            <div class={['space', { 'is-wrap': props.wrap }]} style={spaceStyle.value}>
                <slot ref={(el: HTMLSlotElement) => (slot.value = el)}>
                    {children.value.map((c: any) => {
                        return <div class="space-item" innerHTML={c}></div>
                    })}
                </slot>
            </div>
        )
    }
})
</script>

<style lang="scss">
:host {
    display: inline-block;
    font-size: inherit;
}
.space {
    display: flex;
    gap: 12px;
    font-size: inherit;
    &.is-wrap {
        flex-wrap: wrap;
    }
    &-item {
        flex: 0 0 auto;
        font-size: inherit;
    }
}
</style>
