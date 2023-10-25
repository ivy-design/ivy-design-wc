import { getCurrentInstance, unref, warn } from 'vue'
import { hasOwn } from '@/utils'

export const useExpose = () => {
    const instance = getCurrentInstance()

    function setExpose<T>(key: string, value: T): void
    function setExpose<T>(key: string, value: T) {
        const host = instance?.proxy?.$el.parentNode.host

        if (!host) {
            return false
        }
        const exposed: Record<string, T> = {}
        if (typeof key === 'string') {
            exposed[key as string] = value
        }
        for (const key of Object.keys(exposed)) {
            // if existing attributes are exposed
            if (hasOwn(host, key)) {
                warn(`Exposed property "${key}" already exists on custom element.`)
                continue
            }
            // exposed properties are readonly
            Object.defineProperty(host, key, {
                get() {
                    // Unpack ref to avoid external modifications
                    return unref(exposed[key])
                }
            })
        }
    }
    function setExposes(key: Record<string, any>): void
    function setExposes(options: Record<string, any>) {
        const host = instance?.proxy?.$el.parentNode.host

        if (!host) {
            return false
        }

        for (const key of Object.keys(options)) {
            // if existing attributes are exposed
            if (hasOwn(host, key)) {
                warn(`Exposed property "${key}" already exists on custom element.`)
                continue
            }
            // exposed properties are readonly
            Object.defineProperty(host, key, {
                get() {
                    // Unpack ref to avoid external modifications
                    return unref(options[key])
                }
            })
        }
    }

    return { setExpose, setExposes }
}

export default useExpose
