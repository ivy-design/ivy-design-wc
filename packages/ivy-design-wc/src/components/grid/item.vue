<script lang="tsx">
import { defineComponent, type PropType } from 'vue'

export type IvyGridMode = 'grid' | 'flex'

export default defineComponent({
    name: `GridItem`,
    props: {
        mode: {
            type: String as PropType<IvyGridMode>,
            default: 'grid',
            validator: (val: string) => {
                return ['grid', 'flex'].includes(val)
            }
        }
    },
    setup() {
        return () => (
            <div class={['ivy-grid-item']}>
                <slot></slot>
            </div>
        )
    }
})
</script>

<style lang="scss">
:host {
    height: var(--ivy-grid-col-height);
}
</style>
