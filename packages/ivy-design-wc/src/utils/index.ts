export const hasOwn = (obj: Record<string, any>, key: string) => {
    // eslint-disable-next-line no-prototype-builtins
    return obj.hasOwnProperty(key) || Object.prototype.hasOwnProperty.call(obj, key)
}

export const install = (name: string, component: any) => {
    customElements.define(
        name.replace(/([A-Z])([a-z]+)/g, (val, _, p, offset) => {
            return offset > 0 ? `-${val.toLowerCase()}` : `${val.toLowerCase()}`
        }),
        component
    )
}
