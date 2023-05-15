import { h } from 'vue'
export const ICON_ARROW_RIGHT = (className = 'arrow-right') =>
    h(
        'svg',
        {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 1024 1024',
            class: className,
            style: {
                width: '1em',
                height: '1em',
                lineHeight: '1em'
            }
        },
        [
            h('path', {
                fill: 'currentColor',
                d: 'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z'
            })
        ]
    )
