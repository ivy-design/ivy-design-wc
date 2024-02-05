import { ref, getCurrentInstance } from 'vue'
import { getType } from '@/utils'

export const useAppendTo = () => {
    const instance = getCurrentInstance()
    const host = ref<HTMLElement>()
    const getHostElement = () => instance?.proxy?.$el.parentNode.host

    const appendTo = (el?: HTMLElement | string) => {
        const type = getType(el)
        let target = el as HTMLElement
        if (type === 'String') {
            target = document.querySelector(el as string) as HTMLElement
        } else if (type === 'undefined' || type === 'null') {
            el = document.body
        }
        host.value = getHostElement()
        target.appendChild(host.value as HTMLElement)
    }

    return { instance, getHostElement, host, appendTo }
}
