import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './src/index.vue'

const Notification = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export type NotificationPropType = 'info' | 'success' | 'warning' | 'error'

export interface NotificationProps {
    type?: NotificationPropType
    title?: string
    message?: string
    duration?: number
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
    showClose?: boolean
    offset?: number
    onClose?: () => void
}

const defaultConfig: NotificationProps = {
    type: 'info',
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0
}

const setAttrs = (el: any, attrs: any) => {
    Object.keys(attrs).forEach((key) => {
        el.setAttribute(key, attrs[key])
    })
}

const notify = (opts: NotificationProps) => {
    return new Promise(() => {
        const conf = { ...defaultConfig, ...opts }

        const el: any = new Notification()
        setAttrs(el, conf)
        document.body.appendChild(el)
        el.open()
    })
}

const $alert = (message: string, title: string = '提示', opts: NotificationProps = {}) => {
    const conf = {
        ...opts,
        title,
        message,
        showCancelButton: false
    }
    notify(conf)
}

const $confirm = (message: string, title: string = '确认', opts: NotificationProps = {}) => {
    const conf = {
        ...opts,
        title,
        message,
        showCancelButton: true
    }
    return notify(conf)
}

const $prompt = (message: string, title: string = '输入', opts: NotificationProps = {}) => {
    const conf = {
        ...opts,
        title,
        message,
        showCancelButton: true,
        showInput: true
    }
    return notify(conf)
}

notify.alert = $alert
notify.confirm = $confirm
notify.prompt = $prompt

export { Notification, registerComponent as registerNotificationComponent, notify }

export default registerComponent
