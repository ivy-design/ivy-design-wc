import tinycolor from 'tinycolor2'
// q: hsl 颜色转换成 rgb 颜色
// 1. hsl2rgb
// 2. rgb2hsl
// 3. rgb2hex
// 4. hex2rgb
// 5. hsl2hex
// 6. hex2hsl

export const hsl2rgb = (h: number, s: number, l: number, a: number = 1): string => {
    const hslaObject = { h, s: s / 100, l: l / 100, a }
    const rgbObject = tinycolor(hslaObject)

    return rgbObject.toRgbString()
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

    return rgb2hsl(r, g, b, 100)
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

export const colorToHsl = (val: string) => {
    const color = tinycolor(val)
    if (!color.isValid) return null
    return color.toHslString()
}

export const color2HslMap = (val: string): HslMap | null => {
    const color = tinycolor(val)
    if (!color.isValid) return null
    const cur = color.toHsl()

    return {
        h: cur.h,
        s: cur.s * 100,
        l: cur.l * 100,
        a: cur.a * 100
    }
}

const clamp01 = (value: number) => {
    if (Number.isNaN(value)) return 0
    if (value < 0) return 0
    if (value > 1) return 1
    return value
}

const formatPercent = (value: number) => parseFloat((clamp01(value) * 100).toFixed(2))

export const hslToHsvNormalized = (s: number, l: number) => {
    const sNorm = clamp01(s)
    const lNorm = clamp01(l)
    const v = lNorm + sNorm * Math.min(lNorm, 1 - lNorm)
    let sHsv = 0
    if (v > 0) {
        sHsv = 2 * (1 - lNorm / v)
    }
    return {
        s: clamp01(sHsv),
        v: clamp01(v)
    }
}

export const hsvToHslNormalized = (s: number, v: number) => {
    const sNorm = clamp01(s)
    const vNorm = clamp01(v)
    const l = vNorm * (1 - sNorm / 2)
    let sHsl = 0
    if (l > 0 && l < 1) {
        sHsl = (vNorm - l) / Math.min(l, 1 - l)
    }
    return {
        s: clamp01(sHsl),
        l: clamp01(l)
    }
}

export const pointToHsl = (x: number, y: number, width = 260, height = 140) => {
    const sV = clamp01(x / width)
    const v = clamp01(1 - y / height)
    const { s, l } = hsvToHslNormalized(sV, v)
    return {
        s: formatPercent(s),
        l: formatPercent(l)
    }
}

export const hslToPoint = (s: number, l: number, width = 260, height = 140) => {
    const { s: sV, v } = hslToHsvNormalized(s / 100, l / 100)
    return {
        x: clamp01(sV) * width,
        y: (1 - clamp01(v)) * height
    }
}
