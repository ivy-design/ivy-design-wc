import type { FunctionalComponent } from 'vue'

interface Props {
    text?: string
    disabled?: boolean
}

type Events = {
    click(): void
}
export const Prev: FunctionalComponent<Props, Events> = (props, ctx) => {
    const handleClick = () => {
        ctx.emit('click')
    }
    return (
        <div
            class={['ivy-pagination-prev', { 'is-disabled': props.disabled }]}
            onClick={handleClick}
        >
            <slot name="prev">
                <span>{props.text}</span>
            </slot>
        </div>
    )
}
Prev.emits = ['click']
Prev.props = {
    text: {
        type: String,
        default: 'Prev'
    },
    disabled: Boolean
}

/**Next Page */
export const Next: FunctionalComponent<Props, Events> = (props, ctx) => {
    const handleClick = () => {
        ctx.emit('click')
    }
    return (
        <div
            class={['ivy-pagination-next', { 'is-disabled': props.disabled }]}
            onClick={handleClick}
        >
            <slot name="next">
                <span>{props.text}</span>
            </slot>
        </div>
    )
}
Next.emits = ['click']
Next.props = {
    text: {
        type: String,
        default: 'Next'
    },
    disabled: Boolean
}

/**Pager 组件 */
interface PagerProps {
    data: Array<{ value: number; status: string }>
    current: number
}
type PagerEvents = {
    click(page: number, status: string): void
}
export const Pager: FunctionalComponent<PagerProps, PagerEvents> = (props, ctx) => {
    const handleClick = (page: number, status: string) => {
        ctx.emit('click', page, status)
    }
    return (
        <div class="ivy-pagination-wrap">
            {props.data.map((c) => {
                return (
                    <a
                        class={[
                            'ivy-pagination-item',
                            {
                                'is-active': c.value === props.current,
                                'is-prev': c.status === 'prev',
                                'is-next': c.status === 'next'
                            }
                        ]}
                        onClick={() => handleClick(c.value, c.status)}
                    >
                        {c.status === 'page' ? c.value : '···'}
                    </a>
                )
            })}
        </div>
    )
}
Pager.props = ['data', 'current']
Pager.emits = ['click']
