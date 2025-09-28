<script setup lang="ts">
import { onMounted, onBeforeUnmount, useHost } from 'vue'
import { copyNode, copyText } from '@/utils/clipboard'

defineOptions({
    name: 'CopyToClipboard',
    inheritAttrs: false
})

async function copy(button: HTMLElement) {
    const id = button.getAttribute('for')
    const text = button.getAttribute('value')
    function trigger() {
        button.dispatchEvent(new CustomEvent('clipboard-copy', { bubbles: true }))
    }

    if (text) {
        await copyText(text)
        trigger()
    } else if (id) {
        const root =
            'getRootNode' in Element.prototype ? button.getRootNode() : button.ownerDocument
        if (!(root instanceof Document || ('ShadowRoot' in window && root instanceof ShadowRoot)))
            return
        const node = root.getElementById(id)
        if (node) {
            await copyTarget(node)
            trigger()
        }
    }
}

function copyTarget(content: HTMLElement) {
    if (content instanceof HTMLInputElement || content instanceof HTMLTextAreaElement) {
        return copyText(content.value)
    } else if (content instanceof HTMLAnchorElement && content.hasAttribute('href')) {
        return copyText(content.href)
    } else {
        return copyNode(content)
    }
}

function clicked(event: Event) {
    const button = event.currentTarget
    if (button instanceof HTMLElement) {
        copy(button)
    }
}

function keydown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
        const button = event.currentTarget
        if (button instanceof HTMLElement) {
            event.preventDefault()
            copy(button)
        }
    }
}

function focused(event: any) {
    event.currentTarget.addEventListener('keydown', keydown)
}

function blurred(event: any) {
    event.currentTarget.removeEventListener('keydown', keydown)
}

const host = useHost()

onMounted(() => {
    host?.addEventListener('click', clicked)
    host?.addEventListener('focus', focused)
    host?.addEventListener('blur', blurred)
})

onBeforeUnmount(() => {
    host?.removeEventListener('click', clicked)
    host?.removeEventListener('focus', focused)
    host?.removeEventListener('blur', blurred)
})
</script>

<template>
    <slot></slot>
</template>
