// q: hsl 颜色转换成 rgb 颜色
// 1. hsl2rgb
// 2. rgb2hsl
// 3. rgb2hex
// 4. hex2rgb
// 5. hsl2hex
// 6. hex2hsl

export const hsl2rgb = (h: number, s: number, l: number) => {
    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = l - c / 2

    let r = 0,
        g = 0,
        b = 0

    if (0 <= h && h < 60) {
        r = c
        g = x
        b = 0
    } else if (60 <= h && h < 120) {
        r = x
        g = c
        b = 0
    } else if (120 <= h && h < 180) {
        r = 0
        g = c
        b = x
    } else if (180 <= h && h < 240) {
        r = 0
        g = x
        b = c
    } else if (240 <= h && h < 300) {
        r = x
        g = 0
        b = c
    } else if (300 <= h && h < 360) {
        r = c
        g = 0
        b = x
    }

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    }
}

export const hsl2hex = (h: number, s: number, l: number): string => {
    l /= 100
    const a = (s * Math.min(l, 1 - l)) / 100
    const f = (n: number) => {
        const k = (n + h / 30) % 12
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0')
    }
    return `#${f(0)}${f(8)}${f(4)}`
}
export interface HslMap {
    h: number
    s: number
    l: number
    a: number
}
// rgb2hsl
export const rgb2hsl = (r: number, g: number, b: number, a: number = 1): HslMap => {
    r /= 255
    g /= 255
    b /= 255
    const min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min
    let h = 0,
        s = 0,
        l = 0
    if (delta == 0) h = 0
    else if (max == r) h = ((g - b) / delta) % 6
    else if (max == g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4
    h = Math.round(h * 60)
    if (h < 0) h += 360
    l = (max + min) / 2
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    return {
        h,
        s,
        l,
        a
    }
}

export const hex2hsl = (hex: string): HslMap => {
    // Convert hex to RGB first
    let r = 0,
        g = 0,
        b = 0
    if (hex.length == 4) {
        r = parseInt('0x' + hex[1] + hex[1], 16)
        g = parseInt('0x' + hex[2] + hex[2], 16)
        b = parseInt('0x' + hex[3] + hex[3], 16)
    } else if (hex.length == 7) {
        r = parseInt('0x' + hex[1] + hex[2], 16)
        g = parseInt('0x' + hex[3] + hex[4], 16)
        b = parseInt('0x' + hex[5] + hex[6], 16)
    }

    return rgb2hsl(r, g, b, 1)
}

const hsl2hslMap = (hsl: string): HslMap => {
    const [h, s, l, a = 0] = hsl.match(/\d+/g)?.map(Number) || [0, 0, 0, 0]
    return {
        h,
        s,
        l,
        a
    }
}

// 获取颜色类型
export const getColorType = (color: string) => {
    if (color.startsWith('#')) {
        return 'hex'
    } else if (color.startsWith('rgb')) {
        return 'rgb'
    } else if (color.startsWith('hsl')) {
        return 'hsl'
    }
    return ''
}

export const colorToHsl = (color: string) => {
    if (!color) return ''
    const type = getColorType(color)
    if (type === 'hex') {
        return hex2hsl(color)
    } else if (type === 'rgb') {
        const arr = color.match(/\d+/g)?.map(Number)

        return arr ? rgb2hsl(...(arr as [number, number, number])) : null // Fix: Cast arr as [number, number, number] to ensure it is treated as a tuple
    } else if (type === 'hsl') {
        return hsl2hslMap(color)
    }
}

export const color2HslMap = (color: string): HslMap | null => {
    if (!color) return null
    const type = getColorType(color)
    if (type === 'hex') {
        return hex2hsl(color)
    } else if (type === 'rgb') {
        const arr = color.match(/\d+/g)?.map(Number)

        return arr ? rgb2hsl(...(arr as [number, number, number])) : null // Fix: Cast arr as [number, number, number] to ensure it is treated as a tuple
    } else if (type === 'hsl') {
        return hsl2hslMap(color)
    } else {
        return null
    }
}

export const calcSaturation = (x: number, total = 140) => {
    const tmp = (x / total) * 100
    return parseFloat(tmp.toFixed(2))
}

export const calcLightness = (y: number, total = 260) => {
    const tmp = ((100 - y) / total) * 100
    return parseFloat(tmp.toFixed(2))
}
