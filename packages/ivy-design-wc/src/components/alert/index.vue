<script lang="tsx">
import { defineComponent, h, resolveComponent, type PropType } from 'vue'

const iconName: Record<string, any> = {
    success: 'success-filled',
    warning: 'warning-filled',
    danger: 'circle-close-filled',
    info: 'info-filled'
}

export type ivyAlertType = 'success' | 'warning' | 'danger' | 'info'

export default defineComponent({
    name: `Alert`,
    props: {
        type: {
            type: String as PropType<ivyAlertType>,
            default: 'success',
            validator(value: ivyAlertType) {
                return ['success', 'danger', 'warning', 'info'].includes(value)
            }
        },
        header: String,
        showIcon: Boolean,
        iconSize: {
            type: String,
            default: '16px'
        }
    },
    setup(props, { slots }) {
        const classStr = `ivy-alert is-${props.type}`

        const renderTitle = () => {
            if (slots.header) {
                return (
                    <div class="ivy-alert__title">
                        <slot name="header"></slot>
                    </div>
                )
            } else if (props.header) {
                return <span class="ivy-alert__title">{props?.header || ''}</span>
            } else {
                return []
            }
        }

        const renderDesc = () => {
            return (
                <div class="ivy-alert__description">
                    <slot></slot>
                </div>
            )
        }

        const renderIcon = () => {
            return h(resolveComponent('ivy-icon'), {
                name: iconName[props.type],
                size: props.iconSize,
                class: 'ivy-alert__icon'
            })
        }

        return () => {
            if (props.showIcon) {
                return (
                    <div class={classStr}>
                        {() => [
                            renderIcon(),
                            <div class="ivy-alert__content">
                                {() => [renderTitle(), renderDesc()]}
                            </div>
                        ]}
                    </div>
                )
            } else {
                return (
                    <div class={classStr}>
                        <div class="ivy-alert__content">{() => [renderTitle(), renderDesc()]}</div>
                    </div>
                )
            }
        }
    }
})
</script>
<style lang="scss">
:host {
    display: block;
    --ivy-alert-border-radius: var(--ivy-border-radius, 4px);
    --ivy-alert-font-size: 12px;
    --ivy-alert-header-font-size: 13px;
}
.ivy-alert {
    display: flex;
    align-items: var(--ivy-alert-icon-align, flex-start);
    padding: 10px 20px;
    border-radius: var(--ivy-alert-border-radius);
    font-size: var(--ivy-alert-font-size);
    align-items: center;
    & + & {
        margin-top: 20px;
    }
    &__title {
        font-weight: 700;
        font-size: var(--ivy-alert-header-font-size, 13px);
        line-height: 1em;
    }
    &__icon {
        font-size: var(--ivy-alert-icon-size, 16px);
        margin-right: 8px;
    }
    &__description {
        margin-top: 5px;
    }
    &.is-success {
        background-color: var(--ivy-color-success-light-9);
        color: var(--ivy-color-success);
    }
    &.is-danger {
        background-color: var(--ivy-color-danger-light-9);
        color: var(--ivy-color-danger);
    }
    &.is-warning {
        background-color: var(--ivy-color-warning-light-9);
        color: var(--ivy-color-warning);
    }
    &.is-info {
        background-color: var(--ivy-color-info-light-9);
        color: var(--ivy-color-info);
    }
}
</style>
