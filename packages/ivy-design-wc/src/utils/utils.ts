export const getType = <T>(val: T): string => {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

export const isArray = <T>(val: T): boolean => {
    if ('isArray' in Array) {
        return Array.isArray(val)
    } else {
        return getType(val) === 'array'
    }
}

export const isFunction = <T>(val: T): boolean => {
    return getType(val) === 'function'
}

export const isFunc = isFunction

export const isObject = <T>(val: T): boolean => {
    return getType(val) === 'object'
}
