import tinycolor from 'tinycolor2'
// q: hsl 颜色转换成 rgb 颜色
// 1. hsl2rgb
// 2. rgb2hsl
// 3. rgb2hex
// 4. hex2rgb
// 5. hsl2hex
// 6. hex2hsl

export const hsl2rgb = (h: number, s: number, l: number, a: number = 1): string => {
    // 规范化色相范围到0-360度
    h = h % 360
    if (h < 0) h += 360

    // 规范化饱和度和亮度范围到0-100%
    s = Math.min(100, Math.max(0, s)) / 100
    l = Math.min(100, Math.max(0, l)) / 100

    let r: number, g: number, b: number

    if (s === 0) {
        r = g = b = l // achromatic
    } else {
        const hueToRgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hueToRgb(p, q, h / 360 + 1 / 3)
        g = hueToRgb(p, q, h / 360)
        b = hueToRgb(p, q, h / 360 - 1 / 3)
    }

    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`
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

export const colorToHsl = (val: string) => {
    const color = tinycolor(val)
    if (!color.isValid) return null
    return color.toHslString()
}

export const color2HslMap = (val: string): HslMap | null => {
    const color = tinycolor(val)
    if (!color.isValid) return null
    const cur = color.toHsl()
    console.log('color', cur)
    return {
        h: cur.h,
        s: cur.s * 100,
        l: cur.l * 100,
        a: cur.a * 100
    }
}

export const calcSaturation = (x: number, total = 260) => {
    const tmp = (x / total) * 100
    return parseFloat(tmp.toFixed(2))
}

export const calcLightness = (y: number, total = 140) => {
    const tmp = ((100 - y) / total) * 100
    return parseFloat(tmp.toFixed(2))
}
