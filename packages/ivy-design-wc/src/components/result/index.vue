<script setup lang="ts">
defineOptions({
    name: 'Result'
})

const props = defineProps({
    type: {
        type: String,
        default: 'success',
        validator(val: string) {
            return ['success', 'warning', 'error', 'info'].includes(val)
        }
    },
    header: String,
    description: String
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" hidden>
        <symbol id="success" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="m16 24 6 6 12-12"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="warning" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 37a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 12v16"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="error" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
        <symbol id="info" fill="none" viewBox="0 0 48 48">
            <path
                stroke-linejoin="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                data-follow-stroke="#9b9b9b"
            />
            <path
                fill="currentColor"
                d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                data-follow-fill="#9b9b9b"
            />
            <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3"
                stroke="currentColor"
                d="M24.5 34V20h-2M21 34h7"
                data-follow-stroke="#9b9b9b"
            />
        </symbol>
    </svg>
    <div class="ivy-result">
        <div :class="['ivy-result__icon', `is-${props.type}`]">
            <slot name="icon">
                <svg class="icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <use :href="`#${props.type}`"></use>
                </svg>
            </slot>
        </div>
        <div class="ivy-result__header">{{ props.header }}</div>
        <div class="ivy-result__description">{{ props.description }}</div>
        <div class="ivy-result__extra">
            <slot name="extra"></slot>
        </div>
        <div class="ivy-result__content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
}

.ivy-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--ivy-font-size, 14px);
}

.ivy-result__icon {
    display: flex;
    justify-content: center;
    font-size: 64px;
}
.icon {
    line-height: 1em;
    height: 1em;
    width: 1em;
    fill: currentColor;
    display: inline-block;
}

.ivy-result__icon.is-success {
    color: var(--ivy-color-success, #67c23a);
}
.ivy-result__icon.is-warning {
    color: var(--ivy-color-warning, #e6a23c);
}
.ivy-result__icon.is-info {
    color: var(--ivy-color-info, #909399);
}
.ivy-result__icon.is-error {
    color: var(--ivy-color-danger, #f56c6c);
}

.ivy-result__header {
    margin-top: 16px;
    line-height: 1.3em;
    font-size: 18px;
    font-weight: 500;
}

.ivy-result__description {
    line-height: 1.3em;
    margin-top: 12px;
    font-size: var(--ivy-font-size-small, 12px);
    color: var(--ivy-color-text-secondary, #909399);
}

.ivy-result__extra {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.ivy-result__content {
    margin-top: 24px;
}
</style>
