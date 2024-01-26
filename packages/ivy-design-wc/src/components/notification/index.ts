import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './src/index.vue'

const Notification = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}
type NotificationPropType = 'info' | 'success' | 'warning' | 'error'

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
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0
}

const setAttrs = (el: any, attrs: any) => {
    Object.keys(attrs).forEach((key) => {
        el[key] = attrs[key]
    })
}

const notify = (opts: NotificationProps) => {
    const conf = { ...defaultConfig, ...opts }

    const el: any = new Notification()
    setAttrs(el, conf)
    document.body.appendChild(el)
    el.open()
    return el
}

notify.success = (opts: NotificationProps = {}) => {
    const conf: NotificationProps = {
        ...opts,
        type: 'success'
    }
    return notify(conf)
}
notify.warning = (opts: NotificationProps = {}) => {
    const conf: NotificationProps = {
        ...opts,
        type: 'warning'
    }
    return notify(conf)
}
notify.error = (opts: NotificationProps = {}) => {
    const conf: NotificationProps = {
        ...opts,
        type: 'error'
    }
    return notify(conf)
}
notify.info = (opts: NotificationProps = {}) => {
    const conf: NotificationProps = {
        ...opts,
        type: 'info'
    }
    return notify(conf)
}

export { Notification, registerComponent as registerNotificationComponent, notify }

export default registerComponent
