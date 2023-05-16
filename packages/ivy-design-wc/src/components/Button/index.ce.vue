<script lang="tsx">
import { defineComponent } from 'vue'
import { genLoading } from '@/utils/icons'
import type { IvySize, IvyType } from '@/utils/typescript'

export type ivyButtonType = IvyType | 'default'

export default defineComponent({
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default',
            validator: (val: ivyButtonType) =>
                ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(val)
        },
        size: {
            type: String,
            default: 'medium',
            validator: (val: IvySize) => ['small', 'medium', 'large'].includes(val)
        },
        loading: Boolean
    },
    setup(props) {
        return () => (
            <button
                class={['ivy-button', `ivy-button--${props.type}`, { 'is-loading': props.loading }]}
            >
                {props.loading ? genLoading({ class: 'ivy-loading' }) : null}
                <slot></slot>
            </button>
        )
    },
    methods: {}
})
</script>

<style lang="scss">
:host {
    display: inline-flex;
    border-radius: 4px;
    overflow: hidden;
    --ivy-button-border-color: var(--ivy-border-color, #dcdfe6);
    --ivy-button-text-color: var(--ivy-text-color, #303133);
    --ivy-button-background-color: var(--ivy-color-white, #fff);

    --ivy-button-hover-text-color: var(--el-color-white, #fff);
    --ivy-button-hover-background-color: var(--ivy-color-primary-light-3, #79bbff);
    --ivy-button-hover-border-color: var(--ivy-color-primary-light-3, #79bbff);

    --ivy-button-active-background-color: var(--ivy-color-primary-dark-2, #337ecc);
    --ivy-button-active-border-color: var(--ivy-color-primary-dark-2, #337ecc);

    --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
    --ivy-button-disabled-background-color: var(--ivy-color-primary-light-5, #a0cfff);
    --ivy-button-disabled-border-color: var(--ivy-color-primary-light-5, #a0cfff);

    --ivy-button-height: var(--ivy-size-medium, 32px);
    margin-right: 12px;
}
:host(:last-child) {
    margin-right: 0;
}
.ivy-button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    outline: 0;
    padding: 0 16px;
    height: var(--ivy-button-height);
    background-color: var(--ivy-button-background-color);
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid var(--ivy-button-border-color);
    box-sizing: border-box;
    transition: all 0.3s ease;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    overflow: hidden;
    cursor: pointer;
    color: var(--ivy-button-text-color);
    &:hover,
    &:focus {
        background-color: var(--ivy-button-hover-background-color);
        color: var(--ivy-button-hover-text-color);
        border-color: var(--ivy-button-hover-border-color);
    }
    &:active {
        background-color: var(--ivy-button-active-background-color);
        border-color: var(--ivy-button-active-border-color);
    }
    &:disabled {
        background-color: var(--ivy-button-disabled-background-color);
        border-color: var(--ivy-button-disabled-border-color);
        color: var(--ivy-button-disabled-text-color);
        cursor: not-allowed;
    }
    & .ivy-loading {
        margin-right: 8px;
    }

    &--primary {
        --ivy-button-border-color: var(--ivy-color-primary, #409eff);
        --ivy-button-text-color: var(--ivy-color-white, #fff);
        --ivy-button-background-color: var(--ivy-color-primary, #409eff);

        --ivy-button-hover-text-color: var(--el-color-white, #fff);
        --ivy-button-hover-background-color: var(--ivy-color-primary-light-3, #79bbff);
        --ivy-button-hover-border-color: var(--ivy-color-primary-light-3, #79bbff);

        --ivy-button-active-background-color: var(--ivy-color-primary-dark-2, #337ecc);
        --ivy-button-active-border-color: var(--ivy-color-primary-dark-2, #337ecc);

        --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
        --ivy-button-disabled-background-color: var(--ivy-color-primary-light-5, #a0cfff);
        --ivy-button-disabled-border-color: var(--ivy-color-primary-light-5, #a0cfff);
    }

    &--success {
        --ivy-button-border-color: var(--ivy-color-success, #67c23a);
        --ivy-button-text-color: var(--ivy-color-white, #fff);
        --ivy-button-background-color: var(--ivy-color-success, #67c23a);

        --ivy-button-hover-text-color: var(--el-color-white, #fff);
        --ivy-button-hover-background-color: var(--ivy-color-success-light-3, #95d475);
        --ivy-button-hover-border-color: var(--ivy-color-success-light-3, #95d475);

        --ivy-button-active-background-color: var(--ivy-color-success-dark-2, #529b2e);
        --ivy-button-active-border-color: var(--ivy-color-success-dark-2, #529b2e);

        --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
        --ivy-button-disabled-background-color: var(--ivy-color-success-light-5, #b3e19d);
        --ivy-button-disabled-border-color: var(--ivy-color-success-light-5, #b3e19d);
    }

    &--warning {
        --ivy-button-border-color: var(--ivy-color-warning, #e6a23c);
        --ivy-button-text-color: var(--ivy-color-white, #fff);
        --ivy-button-background-color: var(--ivy-color-warning, #e6a23c);

        --ivy-button-hover-text-color: var(--el-color-white, #fff);
        --ivy-button-hover-background-color: var(--ivy-color-warning-light-3, #eebe77);
        --ivy-button-hover-border-color: var(--ivy-color-warning-light-3, #eebe77);

        --ivy-button-active-background-color: var(--ivy-color-warning-dark-2, #b88230);
        --ivy-button-active-border-color: var(--ivy-color-warning-dark-2, #b88230);

        --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
        --ivy-button-disabled-background-color: var(--ivy-color-warning-light-5, #f3d19e);
        --ivy-button-disabled-border-color: var(--ivy-color-warning-light-5, #f3d19e);
    }

    &--danger {
        --ivy-button-border-color: var(--ivy-color-danger, #f56c6c);
        --ivy-button-text-color: var(--ivy-color-white, #fff);
        --ivy-button-background-color: var(--ivy-color-danger, #f56c6c);

        --ivy-button-hover-text-color: var(--el-color-white, #fff);
        --ivy-button-hover-background-color: var(--ivy-color-danger-light-3, #f89898);
        --ivy-button-hover-border-color: var(--ivy-color-danger-light-3, #f89898);

        --ivy-button-active-background-color: var(--ivy-color-danger-dark-2, #c45656);
        --ivy-button-active-border-color: var(--ivy-color-danger-dark-2, #c45656);

        --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
        --ivy-button-disabled-background-color: var(--ivy-color-danger-light-5, #fab6b6);
        --ivy-button-disabled-border-color: var(--ivy-color-danger-light-5, #fab6b6);
    }

    &--info {
        --ivy-button-border-color: var(--ivy-color-info, #909399);
        --ivy-button-text-color: var(--ivy-color-white, #fff);
        --ivy-button-background-color: var(--ivy-color-info, #909399);

        --ivy-button-hover-text-color: var(--el-color-white, #fff);
        --ivy-button-hover-background-color: var(--ivy-color-info-light-3, #b1b3b8);
        --ivy-button-hover-border-color: var(--ivy-color-info-light-3, #b1b3b8);

        --ivy-button-active-background-color: var(--ivy-color-info-dark-2, #73767a);
        --ivy-button-active-border-color: var(--ivy-color-info-dark-2, #73767a);

        --ivy-button-disabled-text-color: var(--ivy-color-white, #fff);
        --ivy-button-disabled-background-color: var(--ivy-color-info-light-5, #c8c9cc);
        --ivy-button-disabled-border-color: var(--ivy-color-info-light-5, #c8c9cc);
    }
}
.ivy-button.is-loading {
    position: relative;
    pointer-events: none;
    &::before {
        box-sizing: border-box;
        z-index: 1;
        pointer-events: none;
        content: ' ';
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: inherit;
        background-color: var(--ivy-mask-color-extra-light, rgba(255, 255, 255, 0.3));
    }
    & .ivy-loading {
        animation: rotating 2s linear infinite;
    }
}
@keyframes rotating {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
