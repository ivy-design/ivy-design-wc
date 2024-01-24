<script lang="tsx">
import { defineComponent, ref, Transition } from 'vue'
import { transition } from '@/utils/collapse-transition'
import { ArrowRight } from '@/utils/icons'

export default defineComponent({
    name: `Details`,
    props: {
        summary: {
            type: String,
            default: '详细信息'
        },
        removeTransition: Boolean
    },
    setup(props) {
        const transitionAttrs = transition()
        const visible = ref(false)

        const handlerClick = () => {
            visible.value = !visible.value
        }

        return () => (
            <div class="details">
                <div class="details-summary" onClick={handlerClick}>
                    <ArrowRight
                        class={[
                            'details-icon',
                            { 'is-open': visible.value, 'has-transition': !props.removeTransition }
                        ]}
                    />
                    <slot name="summary">{props.summary}</slot>
                </div>
                {props.removeTransition ? (
                    <div class="details-content" v-show={visible.value}>
                        <div class="details-content-inner">
                            <slot></slot>
                        </div>
                    </div>
                ) : (
                    <Transition
                        onBeforeEnter={transitionAttrs.onBeforeEnter}
                        onEnter={transitionAttrs.onEnter}
                        onAfterEnter={transitionAttrs.onAfterEnter}
                        onBeforeLeave={transitionAttrs.onBeforeLeave}
                        onLeave={transitionAttrs.onLeave}
                        onAfterLeave={transitionAttrs.onAfterLeave}
                    >
                        <div class="details-content" v-show={visible.value}>
                            <div class="details-content-inner">
                                <slot></slot>
                            </div>
                        </div>
                    </Transition>
                )}
            </div>
        )
    }
})
</script>

<style lang="scss">
:host {
    display: block;
    --ivy-details-border-radius: 8px;
    --ivy-background-color: #f7f7f7;
    --ivy-details-summary-color: #666;
    --ivy-details-color: #515a6e;
    --ivy-details-font-size: 13px;
    --ivy-details-summary-font-size: 14px;
}
.details {
    padding: 16px;
    border-radius: var(--ivy-details-border-radius);
    background-color: var(--ivy-background-color);
    color: var(--ivy-details-color);
    font-size: var(--ivy-details-font-size);
    &-summary {
        line-height: 1em;
        display: flex;
        align-items: center;
        align-content: center;
        color: var(--ivy-details-summary-color);
        cursor: pointer;
        font-size: var(--ivy-details-summary-font-size);
    }
    &-icon {
        display: inline-block;
        margin-right: 10px;
        &.has-transition {
            transition: transform 0.3s ease-in-out;
        }
        &.is-open {
            transform: rotate(90deg);
        }
    }
    &-summary + &-content > &-content-inner {
        padding-top: 16px;
    }
    &-content {
        &-inner {
            box-sizing: border-box;
            font-size: 13px;
        }
    }
}
.collapse-transition {
    transition:
        0.3s height ease-in-out,
        0.3s padding-top ease-in-out,
        0.3s padding-bottom ease-in-out;
}
</style>
