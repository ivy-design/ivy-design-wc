export const isElement = (e: unknown): e is Element => {
    if (typeof Element === 'undefined') return false
    return e instanceof Element
}
/* istanbul ignore next */
export const trim = (string: string) => {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
