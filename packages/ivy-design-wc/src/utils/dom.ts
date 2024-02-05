export const isElement = (e: unknown): e is Element => {
    if (typeof Element === 'undefined') return false
    return e instanceof Element
}
/* istanbul ignore next */
export const trim = (string: string) => {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export function hasClass(el: HTMLElement, cls: string) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
}
/**
 *
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export function addClass(el: HTMLElement, cls: string) {
    if (!el) return
    let curClass = el.className
    const classes = (cls || '').split(' ')

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
}

/**
 *
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export function removeClass(el: HTMLElement, cls: string) {
    if (!el || !cls) return
    const classes = cls.split(' ')
    let curClass = ' ' + el.className + ' '

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.remove(clsName)
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ')
        }
    }
    if (!el.classList) {
        el.className = trim(curClass)
    }
}

/**通过 tagName 获取指定元素下的元素 */
export const getElementsByTagName = (el: HTMLElement, tagName: string) => {
    return Array.from(el.querySelectorAll(tagName))
}

/**给自定义元素设置 prototype */
export const setPropToCustomElement = (el: any, props: Record<string, any> = {}) => {
    Object.keys(props).forEach((key) => {
        const val = props[key]
        if (val !== undefined) {
            el[key as string] = val
        }
    })
}
