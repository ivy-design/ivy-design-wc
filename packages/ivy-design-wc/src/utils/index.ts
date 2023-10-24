export const hasOwn = (obj: Record<string, any>, key: string) => {
    // eslint-disable-next-line no-prototype-builtins
    return obj.hasOwnProperty(key) || Object.prototype.hasOwnProperty.call(obj, key)
}
