import { h } from 'vue'
const svgBaseStyle = { width: '1em', height: '1em', lineHeight: '1em' }
const svgBaseProp = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 1024 1024',
    class: 'ivy-icon',
    style: { ...svgBaseStyle }
}
export const genArrowRight = (props: Record<string, any> = {}) =>
    h(
        'svg',
        {
            ...svgBaseProp,
            class: props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'
        },
        h('path', {
            fill: 'currentColor',
            d: 'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z'
        })
    )
export const genArrowLeft = (props: Record<string, any> = {}) =>
    h(
        'svg',
        {
            ...svgBaseProp,
            class: props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'
        },
        h('path', {
            fill: 'currentColor',
            d: 'M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z'
        })
    )
export const genLoading = (props: Record<string, any> = {}) =>
    h(
        'svg',
        { ...svgBaseProp, class: props?.class ? `ivy-icon ${props.class}` : 'ivy-icon' },
        h('path', {
            fill: 'currentColor',
            d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z'
        })
    )
