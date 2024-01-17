import { ref } from 'vue'

export interface MessageConfig {
    content?: string
    duration?: number
    type?: 'success' | 'info' | 'warning' | 'error'
    onClose?: () => void
}

const curMessageIndex = ref(0)
const createMessage = (Message: CustomElementConstructor) => {
    const parseMessageConfig = (config: MessageConfig | string): MessageConfig => {
        let conf: MessageConfig = {}
        const type = Object.prototype.toString.call(config).slice(8, -1)

        if (type === 'Object') {
            conf = { ...(config as MessageConfig) }
        } else {
            conf = {
                type: 'info',
                content: config as string
            }
        }
        return conf
    }
    const message = (config: MessageConfig | string) => {
        let parent = document.querySelector('.ivy-message-box')
        if (!parent) {
            parent = document.createElement('div')
            parent.className = 'ivy-message-box'
            parent.setAttribute(
                'style',
                'position: fixed; top: 0; left: 0; z-index: 9999999;width: 100%;height: 0;'
            )
            document.body.appendChild(parent)
        }
        const conf = parseMessageConfig(config)

        const instance: any = new Message()
        instance.setAttribute('type', conf.type || 'info')
        instance.setAttribute('duration', conf.duration || 3000)
        instance.setAttribute('content', conf.content || '')
        ;(parent as any).appendChild(instance)
        instance.setAttribute('content', conf.content)
        return instance
    }

    message.success = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)

        return message({ ...conf, type: 'success' })
    }
    message.error = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'error' })
    }
    message.warning = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'warning' })
    }
    message.info = (config: MessageConfig | string) => {
        const conf = parseMessageConfig(config)
        return message({ ...conf, type: 'info' })
    }

    return message
}

const curNotificationIndex = ref(0)

const getType = <T>(val: T): string => {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

const isArray = <T>(val: T): boolean => {
    if ('isArray' in Array) {
        return Array.isArray(val)
    } else {
        return getType(val) === 'array'
    }
}

const isFunction = <T>(val: T): boolean => {
    return getType(val) === 'function'
}

export { createMessage, curMessageIndex, curNotificationIndex, getType, isArray, isFunction }
export default {
    createMessage,
    curMessageIndex,
    curNotificationIndex
}
