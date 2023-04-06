<script lang="tsx">
import { defineComponent, onMounted, provide, ref } from 'vue'
import useIndex from '@/use/useIndex'

export default defineComponent({
    name: `Collapse`,
    props: {
        modelValue: [String, Number, Array],
        accordion: Boolean,
        arrow: {
            type: String,
            validator(value: string) {
                return ['right', 'none'].includes(value)
            }
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const value: any = ref(null)
        onMounted(() => {
            if (!props.modelValue) {
                value.value = props.accordion ? null : []
            } else {
                value.value = props.accordion
                    ? props.modelValue
                    : (props.modelValue as string).split(',')
            }
        })

        provide('arrow', props.arrow)
        provide('accordion', props.accordion)
        provide('value', value)
        /**对 没有设置 props.index 的collapseItem 生成唯一index */
        const { generateIndex } = useIndex()

        provide('generateIndex', generateIndex)

        provide('update', (index: any) => {
            if (props.accordion) {
                value.value = value.value === index ? null : index
                emit('update:modelValue', value.value)
            } else {
                const has = (value.value as Array<any>).includes(index)
                if (has) {
                    value.value = (value.value as Array<any>).filter((c) => c !== index)
                } else {
                    value.value = [...(value.value as Array<any>), index]
                }
                emit('update:modelValue', value.value)
            }
        })

        return () => (
            <div class="ivy-collapse">
                <slot></slot>
            </div>
        )
    }
})
</script>

<style lang="scss">
:host {
    display: block;
}
.ivy-collapse {
    background-color: #f7f7f7;
    border-radius: 4px;
    border: 1px solid #dcdee2;
}
</style>
