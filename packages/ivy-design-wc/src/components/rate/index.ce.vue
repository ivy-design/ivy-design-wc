<script lang="tsx">
import { computed, ref, defineComponent } from 'vue'
import { Star, StarFilled } from '@/utils/icons'

export default defineComponent({
    name: 'Rate',
    inheritAttrs: false,
    props: {
        value: String,
        size: String,
        count: {
            type: String,
            default: '5'
        },
        color: {
            type: String,
            default: '#c0c4cc'
        },
        activeColor: {
            type: String,
            default: '#f5a623'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        trigger: {
            type: String,
            default: 'hover',
            validator(value: string) {
                return ['hover', 'click'].includes(value)
            }
        }
    },
    emits: ['change'],
    setup(props, { emit }) {
        const curIndex = ref(props.value ? parseInt(props.value) : 1)

        const handleMouseenter = (val: number) => {
            if (props.disabled) {
                return false
            }
            if (props.trigger === 'hover') {
                curIndex.value = val
                emit('change', curIndex.value)
            }
        }
        const handleMouseleave = (index: number) => {
            console.log(index)
        }
        const handleClick = (val: number) => {
            if (props.disabled) {
                return false
            }
            if (props.trigger === 'click') {
                curIndex.value = val
                emit('change', curIndex.value)
            }
        }
        const getIconColor = (item: number) => {
            if (curIndex.value < item) {
                return {
                    color: props.color
                }
            } else {
                return {
                    color: props.activeColor
                }
            }
        }

        const total = computed(() => {
            return parseInt(props.count) || 5
        })

        return () => {
            return (
                <div class="fox-rate">
                    {new Array(total.value).fill(0).map((item, index) => {
                        return (
                            <div
                                class="fox-rate__icon"
                                style={{ ...getIconColor(index + 1), fontSize: props.size }}
                                onMouseenter={() => handleMouseenter(index + 1)}
                                onMouseleave={() => handleMouseleave(index + 1)}
                                onClick={() => handleClick(index + 1)}
                            >
                                {curIndex.value < index + 1 ? Star() : StarFilled()}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
})
</script>

<style lang="scss">
:host {
    display: inline-flex;
}
.fox-rate {
    display: flex;
    &__icon {
        margin: 0 2px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        font-size: 16px;
    }
}
</style>
