<script lang="tsx">
import { transition } from '@/utils/collapse-transition'
import { ArrowRight } from '@/utils/icons'

import { computed, defineComponent, inject, Transition } from 'vue'

export default defineComponent({
    name: `CollapseItem`,
    props: {
        header: String,
        index: String
    },
    setup(props) {
        const transitionAttrs = transition()
        const arrowPosition = inject('arrow')
        const collapseValue: any = inject('value')
        const accordion = inject('accordion')
        const update: any = inject('update')

        const generateIndex: any = inject('generateIndex')

        const index = props.index ?? generateIndex()
        const isActive = computed(() => {
            if (accordion) {
                return collapseValue.value === index.toString()
            } else {
                return collapseValue.value?.includes(index.toString())
            }
        })
        const handleChange = () => {
            update(index.toString())
        }

        return () => (
            <div class={['ivy-collapse-item', { 'ivy-collapse-item-active': isActive.value }]}>
                <div class="ivy-collapse-item__header" onClick={handleChange}>
                    <span class={['ivy-icon-right', `ivy-collapse-arrow-${arrowPosition}`]}>
                        <slot name="icon">{ArrowRight()}</slot>
                    </span>

                    <span>
                        <slot name="header">{props.header}</slot>
                    </span>
                </div>
                <Transition
                    onBeforeEnter={transitionAttrs.onBeforeEnter}
                    onEnter={transitionAttrs.onEnter}
                    onAfterEnter={transitionAttrs.onAfterEnter}
                    onBeforeLeave={transitionAttrs.onBeforeLeave}
                    onLeave={transitionAttrs.onLeave}
                    onAfterLeave={transitionAttrs.onAfterLeave}
                >
                    <div v-show={isActive.value} class="ivy-collapse-item__wrap">
                        <div class="ivy-collapse-item__wrap-box">
                            <slot></slot>
                        </div>
                    </div>
                </Transition>
            </div>
        )
    }
})
</script>

<style lang="scss">
:host {
    display: block;
    border-top: 1px solid var(--ivy-collapse-border-color);
}
:host(:first-child) {
    border-top: none;
}
.ivy-collapse-item {
    position: relative;
    &__header {
        height: 38px;
        line-height: 38px;
        padding-left: 16px;
        color: var(--ivy-collapse-color);
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid transparent;
        font-size: 14px;
        display: flex;
        align-items: center;
        & > .ivy-icon-right {
            width: 1em;
            height: 1em;
            line-height: 1em;
            display: inline-block;
            transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
            margin-right: 10px;
        }
        & > .ivy-icon-right.ivy-collapse-arrow-right {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -7px;
            margin-right: 16px;
        }
        & > .ivy-icon-right.ivy-collapse-arrow-none {
            display: none;
        }
    }
    &__wrap {
        color: #515a6e;
        padding: 0 16px;
        background-color: #fff;
        box-sizing: border-box;
        font-size: 13px;
        &-box {
            padding: 16px 0;
        }
    }
}
.ivy-collapse-item-active {
    .ivy-collapse-item__header {
        & > .ivy-icon-right {
            transform: rotateZ(90deg);
        }
    }
}
.collapse-transition {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
        0.3s padding-bottom ease-in-out;
}
</style>
