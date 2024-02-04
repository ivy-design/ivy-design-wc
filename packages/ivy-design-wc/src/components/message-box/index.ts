import { defineCustomElement } from 'vue'
import { install, setPropToCustomElement } from '@/utils/index'
import comp from './index.vue'

const MessageBox = defineCustomElement(comp)

const registerComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

export type MessageBoxOptionsType = 'info' | 'success' | 'warning' | 'error'

export interface MessageBoxOptions {
    title?: string
    type?: MessageBoxOptionsType
    message?: string
    showClose?: boolean
    showCancelButton?: boolean
    cancelButtonText?: string
    confirmButtonText?: string
    callback?: (action: 'confirm' | 'cancel' | 'close', val?: string) => void
    showInput?: boolean
    inputPattern?: RegExp
    inputPlaceholder?: string
    inputValue?: string
    inputType?: 'text' | 'number' | 'password'
    inputValidator?: (value: string) => boolean | string
    inputErrorMessage?: string
    mode?: 'alert' | 'confirm' | 'prompt'
}

const defaultConfig: MessageBoxOptions = {
    title: '',
    message: '',
    showClose: true,
    showCancelButton: false,
    cancelButtonText: '取消',
    confirmButtonText: '确认',
    callback: () => {},
    showInput: false,
    inputPlaceholder: '',
    inputValue: '',
    inputType: 'text',
    inputErrorMessage: '输入的数据不合法!'
}

const msgBox = (opts: MessageBoxOptions) => {
    return new Promise(() => {
        const conf = { ...defaultConfig, ...opts }

        const el: any = new MessageBox()
        setPropToCustomElement(el, conf)

        document.body.appendChild(el)
        el.open()
    })
}

const $alert = (message: string, title: string = '提示', opts: MessageBoxOptions = {}) => {
    const conf = {
        ...opts,
        title,
        message,
        showCancelButton: false
    }
    msgBox(conf)
}

const $confirm = (message: string, title: string = '确认', opts: MessageBoxOptions = {}) => {
    const conf = {
        ...opts,
        title,
        message,
        showCancelButton: true
    }
    return msgBox(conf)
}

const $prompt = (message: string, title: string = '输入', opts: MessageBoxOptions = {}) => {
    const conf = {
        ...opts,
        title,
        message,
        showCancelButton: true,
        showInput: true
    }
    return msgBox(conf)
}

msgBox.alert = $alert
msgBox.confirm = $confirm
msgBox.prompt = $prompt

export { MessageBox, registerComponent as registerMessageBoxComponent, msgBox }

export default registerComponent
