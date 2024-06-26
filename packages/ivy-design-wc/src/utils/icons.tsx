const svgBaseStyle = { width: '1em', height: '1em', lineHeight: '1em' }
const svgBaseProp = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 1024 1024',
    class: 'ivy-icon',
    style: { ...svgBaseStyle }
}
export const ArrowRight = (props: Record<string, any> = {}) => (
    <svg {...svgBaseProp} class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}>
        <path
            d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            fill="currentColor"
        ></path>
    </svg>
)

export const ArrowLeft = (props: Record<string, any> = {}) => (
    <svg {...svgBaseProp} class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}>
        <path
            d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Loading = (props: Record<string, any> = {}) => (
    <svg {...svgBaseProp} class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}>
        <path
            d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Success = (props: Record<string, any> = {}) => (
    <svg
        {...svgBaseProp}
        viewBox="0 0 32 32"
        class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
    >
        <path
            d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14v0c-7.732 0-14-6.268-14-14s6.268-14 14-14v0zM14.256 18.762l-3.11-3.112c-0.217-0.217-0.517-0.352-0.849-0.352-0.663 0-1.201 0.538-1.201 1.201 0 0.332 0.134 0.632 0.352 0.849l3.96 3.96c0.217 0.218 0.517 0.354 0.849 0.354s0.632-0.135 0.849-0.354l8.2-8.202c0.222-0.218 0.359-0.521 0.359-0.856 0-0.663-0.537-1.2-1.2-1.2-0.335 0-0.637 0.137-0.855 0.358l-7.354 7.354z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Warning = (props: Record<string, any> = {}) => (
    <svg
        {...svgBaseProp}
        viewBox="0 0 32 32"
        class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
    >
        <path
            d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14v0c-7.732 0-14-6.268-14-14s6.268-14 14-14v0zM16 28c6.627 0 12-5.373 12-12s-5.373-12-12-12v0c-6.627 0-12 5.373-12 12s5.373 12 12 12v0zM17.5 22.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v0c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5v0zM16 8c0.552 0 1 0.448 1 1v0 9c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-9c0-0.552 0.448-1 1-1v0z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Error = (props: Record<string, any> = {}) => (
    <svg
        {...svgBaseProp}
        viewBox="0 0 32 32"
        class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
    >
        <path
            d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14v0c-7.732 0-14-6.268-14-14s6.268-14 14-14v0zM16 14.302l-3.252-3.252c-0.217-0.217-0.517-0.352-0.849-0.352-0.663 0-1.201 0.538-1.201 1.201 0 0.332 0.134 0.632 0.352 0.849l3.252 3.252-3.252 3.252c-0.217 0.217-0.352 0.517-0.352 0.849 0 0.663 0.538 1.201 1.201 1.201 0.332 0 0.632-0.134 0.849-0.352l3.252-3.252 3.252 3.252c0.217 0.217 0.517 0.352 0.849 0.352 0.663 0 1.201-0.538 1.201-1.201 0-0.332-0.134-0.632-0.352-0.849l-3.252-3.252 3.252-3.252c0.217-0.217 0.352-0.517 0.352-0.849 0-0.663-0.538-1.201-1.201-1.201-0.332 0-0.632 0.134-0.849 0.352l-3.252 3.252z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Info = (props: Record<string, any> = {}) => (
    <svg
        {...svgBaseProp}
        viewBox="0 0 32 32"
        class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
    >
        <path
            d="M16 2c7.733 0 14.001 6.268 14.001 14.001s-6.268 14.001-14.001 14.001v0c-7.733 0-14.001-6.268-14.001-14.001s6.268-14.001 14.001-14.001v0zM18.1 10.596c1.040 0 1.884-0.722 1.884-1.792s-0.846-1.792-1.884-1.792c-1.040 0-1.88 0.722-1.88 1.792s0.84 1.792 1.88 1.792zM18.466 21.85c0-0.214 0.074-0.77 0.032-1.086l-1.644 1.892c-0.34 0.358-0.766 0.606-0.966 0.54-0.156-0.059-0.266-0.207-0.266-0.381 0-0.028 0.003-0.055 0.008-0.082l-0 0.003 2.74-8.656c0.224-1.098-0.392-2.1-1.698-2.228-1.378 0-3.406 1.398-4.64 3.172 0 0.212-0.040 0.74 0.002 1.056l1.642-1.894c0.34-0.354 0.736-0.604 0.936-0.536 0.156 0.057 0.265 0.204 0.265 0.376 0 0.046-0.008 0.089-0.022 0.13l0.001-0.003-2.716 8.614c-0.314 1.008 0.28 1.996 1.72 2.22 2.12 0 3.372-1.364 4.608-3.138z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Star = (props: Record<string, any> = {}) => (
    <svg {...svgBaseProp} class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}>
        <path
            d="m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
            fill="currentColor"
        ></path>
    </svg>
)

export const StarFilled = (props: Record<string, any> = {}) => (
    <svg {...svgBaseProp} class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}>
        <path
            d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
            fill="currentColor"
        ></path>
    </svg>
)

export const CaretRight = (props: Record<string, any> = {}) => {
    return (
        <svg {...svgBaseProp} class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}>
            <path d="M384 192v640l384-320.064z" fill="currentColor"></path>
        </svg>
    )
}

export const CloseIcon = (props: Record<string, any> = {}) => {
    return (
        <svg
            {...svgBaseProp}
            viewBox="0 0 32 32"
            class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
        >
            <path
                d="M23.884 6.706l-7.884 7.884-7.884-7.884c-0.177-0.162-0.414-0.262-0.674-0.262-0.551 0-0.998 0.447-0.998 0.998 0 0.26 0.099 0.497 0.262 0.674l-0.001-0.001 7.88 7.884-7.882 7.882c-0.191 0.182-0.309 0.438-0.309 0.722 0 0.551 0.447 0.998 0.998 0.998 0.284 0 0.539-0.118 0.721-0.308l0-0 7.886-7.882 7.884 7.884c0.177 0.162 0.414 0.262 0.674 0.262 0.551 0 0.998-0.447 0.998-0.998 0-0.26-0.099-0.497-0.262-0.674l0.001 0.001-7.884-7.884 7.884-7.886c0.191-0.182 0.309-0.438 0.309-0.722 0-0.551-0.447-0.998-0.998-0.998-0.284 0-0.539 0.118-0.721 0.308l-0 0z"
                fill="currentColor"
            ></path>
        </svg>
    )
}
export const DArrowLeft = (props: Record<string, any> = {}) => {
    return (
        <svg
            {...svgBaseProp}
            viewBox="0 0 32 32"
            class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
        >
            <path
                d="M16.544 4.668c0.165-0.17 0.396-0.275 0.652-0.275s0.487 0.105 0.652 0.275l0 0c0.168 0.172 0.271 0.407 0.271 0.667s-0.103 0.495-0.271 0.667l0-0-9.746 9.996 9.746 9.998c0.168 0.172 0.272 0.408 0.272 0.668 0 0.268-0.11 0.51-0.288 0.684l-0 0c-0.164 0.16-0.388 0.259-0.636 0.259-0.256 0-0.486-0.105-0.652-0.275l-0-0-10.364-10.636c-0.176-0.18-0.284-0.426-0.284-0.698s0.108-0.518 0.284-0.698l-0 0 10.364-10.632zM24.544 4.668c0.165-0.17 0.396-0.275 0.652-0.275s0.487 0.105 0.652 0.275l0 0c0.168 0.172 0.271 0.407 0.271 0.667s-0.103 0.495-0.271 0.667l0-0-9.746 9.996 9.746 9.998c0.168 0.172 0.272 0.408 0.272 0.668 0 0.268-0.11 0.51-0.288 0.684l-0 0c-0.164 0.16-0.388 0.259-0.636 0.259-0.256 0-0.486-0.105-0.652-0.275l-0-0-10.364-10.636c-0.176-0.18-0.284-0.426-0.284-0.698s0.108-0.518 0.284-0.698l-0 0 10.364-10.632z"
                fill="currentColor"
            ></path>
        </svg>
    )
}
export const DArrowRight = (props: Record<string, any> = {}) => {
    return (
        <svg
            {...svgBaseProp}
            viewBox="0 0 32 32"
            class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
        >
            <path
                d="M14.152 4.666c0.165-0.169 0.396-0.274 0.651-0.274s0.487 0.106 0.653 0.276l0 0 10.364 10.634c0.176 0.18 0.284 0.426 0.284 0.698s-0.108 0.518-0.284 0.698l0-0-10.364 10.634c-0.165 0.17-0.396 0.275-0.652 0.275s-0.487-0.105-0.652-0.275l-0-0c-0.168-0.172-0.272-0.408-0.272-0.668s0.104-0.496 0.272-0.668l-0 0 9.746-9.996-9.746-10c-0.168-0.172-0.271-0.407-0.271-0.667s0.103-0.495 0.271-0.667l-0 0zM6.152 4.666c0.165-0.169 0.396-0.274 0.651-0.274s0.487 0.106 0.653 0.276l0 0 10.364 10.634c0.176 0.18 0.284 0.426 0.284 0.698s-0.108 0.518-0.284 0.698l0-0-10.364 10.634c-0.165 0.17-0.396 0.275-0.652 0.275s-0.487-0.105-0.652-0.275l-0-0c-0.168-0.172-0.272-0.408-0.272-0.668s0.104-0.496 0.272-0.668l-0 0 9.746-9.996-9.746-10c-0.168-0.172-0.271-0.407-0.271-0.667s0.103-0.495 0.271-0.667l-0 0z"
                fill="currentColor"
            ></path>
        </svg>
    )
}
export const More = (props: Record<string, any> = {}) => {
    return (
        <svg
            {...svgBaseProp}
            viewBox="0 0 32 32"
            class={props?.class ? `ivy-icon ${props.class}` : 'ivy-icon'}
        >
            <path
                d="M5.5 13c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5v0c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5v0zM16 13c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5v0c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5v0zM26.5 13c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5v0c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5v0z"
                fill="currentColor"
            ></path>
        </svg>
    )
}
